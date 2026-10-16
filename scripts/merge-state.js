#!/usr/bin/env node
/* Merge one or more researched state JSON files into data/states.json, validating the schema.
   Usage: node scripts/merge-state.js path/to/CO.json [more.json ...]
   Each input is either a bare state object or a markdown file containing a ```json fenced block. */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),dataPath=path.join(root,'data/states.json');
const data=JSON.parse(fs.readFileSync(dataPath,'utf8'));
const CATS=Object.keys(data.meta.categories),RATINGS=data.meta.rating_order;
/* Official state agency sites that are not on .gov */
const OFFICIAL_NON_GOV=['outdooralabama.com','alapark.com','georgiawildlife.com','gastateparks.org','gafutures.org','gavectr.org','destateparks.com','azgfd.com','azstateparks.com','agfc.com','arkansasstateparks.com','floridastateparks.org','myfwc.com','floridavets.org','calvet.ca.gov','wildlife.ca.gov','parks.ca.gov','adfg.alaska.gov','ctparks.com','cpw.state.co.us','cpwshop.com','texasvet.org','tpwd.texas.gov','alison.legislature.state.al.us','legis.','leg.','legislature.'];
const REQ=['benefit','category','min_rating','details','source_url','source_title','date_verified','needs_verification','varies_by_county'];
function load(p){let t=fs.readFileSync(p,'utf8').trim();if(!t.startsWith('{')){const m=t.match(/```json\s*([\s\S]*?)```/);if(!m)throw new Error(p+': no JSON found');t=m[1]}return JSON.parse(t)}
function validate(s,p){
  const errs=[],warns=[];
  if(!/^[A-Z]{2}$/.test(s.code||''))errs.push('bad code');
  if(!s.name)errs.push('missing name');
  if(!s.agency||!/^https?:\/\//.test(s.agency.url||''))errs.push('agency.url missing');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(s.last_verified||''))errs.push('last_verified not YYYY-MM-DD');
  if(!Array.isArray(s.notes))errs.push('notes not array');
  if(!Array.isArray(s.benefits)||s.benefits.length<5)errs.push('fewer than 5 benefits');
  (s.benefits||[]).forEach((b,i)=>{
    REQ.forEach(k=>{if(!(k in b))errs.push(`benefit ${i} missing ${k}`)});
    if(!CATS.includes(b.category))errs.push(`benefit ${i} bad category ${b.category}`);
    if(!RATINGS.includes(b.min_rating))errs.push(`benefit ${i} bad min_rating "${b.min_rating}"`);
    const u=b.source_url||'';
    if(!/^https?:\/\/[^\/]+\.(gov|us|edu|mil)(\/|$|:)/i.test(u)&&!OFFICIAL_NON_GOV.some(d=>u.includes(d)))warns.push(`benefit ${i} source_url not .gov (check it is an official agency site): ${u}`);
    if(typeof b.needs_verification!=='boolean')errs.push(`benefit ${i} needs_verification not boolean`);
    if((b.details||'').length<60)errs.push(`benefit ${i} details too short`);
  });
  if(warns.length)console.warn('WARN',p,'\n  '+warns.join('\n  '));
  return errs;
}
let ok=0;
for(const p of process.argv.slice(2)){
  let s;try{s=load(p)}catch(e){console.error('SKIP',p,e.message);continue}
  const errs=validate(s,p);
  if(errs.length){console.error('REJECT',p,'\n  '+errs.join('\n  '));continue}
  const i=data.states.findIndex(x=>x.code===s.code);
  if(i<0){console.error('REJECT',p,'unknown code',s.code);continue}
  s.slug=data.states[i].slug;s.status=s.status||'verified';
  data.states[i]=s;ok++;
  console.log('merged',s.code,s.name,s.benefits.length,'rows,',s.notes.length,'notes,',s.benefits.filter(b=>b.needs_verification).length,'flagged');
}
if(ok){data.meta.last_updated=new Date().toISOString().slice(0,10);fs.writeFileSync(dataPath,JSON.stringify(data,null,1)+'\n');console.log('wrote data/states.json;',data.states.filter(s=>s.status==='verified').length,'verified states')}
