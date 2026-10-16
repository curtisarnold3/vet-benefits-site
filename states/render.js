/* Renders a state page or the state index from data/states.json. */
(function(){
  var ROOT=window.SITE_ROOT||'../';
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function host(u){try{return new URL(u).host.replace(/^www\./,'')}catch(e){return ''}}
  var el=document.getElementById('state-page'),idx=document.getElementById('state-index');
  fetch(ROOT+'data/states.json').then(function(r){return r.json()}).then(function(d){
    var cats=d.meta.categories,order=d.meta.rating_order;
    if(idx){
      var vs=d.states.filter(function(s){return s.status==='verified'}),ps=d.states.filter(function(s){return s.status!=='verified'});
      idx.innerHTML='<h2>Ready now ('+vs.length+')</h2><div class="grid">'+vs.map(function(s){return '<a class="tile" href="'+s.slug+'.html"><h3>'+esc(s.name)+'</h3><p>'+s.benefits.length+' benefits · verified '+esc(s.last_verified)+'</p></a>'}).join('')+'</div>'+
        '<h2 style="margin-top:26px">Coming in batches ('+ps.length+')</h2><p class="muted">These pages exist but are not researched yet. They show a "pending" notice and the official state veterans agency link where known.</p><div class="pills">'+ps.map(function(s){return '<a class="pill" href="'+s.slug+'.html" style="text-decoration:none">'+esc(s.name)+'</a>'}).join('')+'</div>';
      return;
    }
    if(!el)return;
    var code=el.getAttribute('data-state'),s=d.states.filter(function(x){return x.code===code})[0];
    if(!s){el.innerHTML='<div class="card warn">Unknown state code.</div>';return}
    if(s.status!=='verified'){
      el.innerHTML='<div class="card warn"><h2>'+esc(s.name)+': research not finished</h2><p>This page is being built in batches, with every benefit checked against the official state source. Until then, start with '+(s.agency.url?'<a href="'+esc(s.agency.url)+'">'+esc(s.agency.name||s.name+' veterans affairs')+'</a>':'your state veterans affairs department')+' and your county veterans service officer.</p><p><a class="btn sm sec" href="./">All states</a> <a class="btn sm sec" href="'+ROOT+'benefits/">Federal rating ladder</a></p></div>';
      return;
    }
    var h='<div class="card good"><h2>Official source</h2><p><a href="'+esc(s.agency.url)+'">'+esc(s.agency.name)+'</a> is the state agency. Benefits below were checked against state .gov pages and state law on <b>'+esc(s.last_verified)+'</b>. A <span class="badge flag">Needs verification</span> tag means we could not confirm every detail on an official page.</p></div>';
    /* quick filter by rating */
    var ratings=order.filter(function(r){return s.benefits.some(function(b){return b.min_rating===r})});
    h+='<div class="card"><h2>Filter by minimum VA rating</h2><div class="pills" id="rf"><button class="pill" aria-pressed="true" data-r="">All</button>'+ratings.map(function(r){return '<button class="pill" aria-pressed="false" data-r="'+esc(r)+'">'+esc(r)+'</button>'}).join('')+'</div><small style="margin-top:8px">"100% P&amp;T" means permanent and total. "TDIU" means unemployability paid at the 100% rate. <a href="'+ROOT+'benefits/pt-status.html">What the difference is.</a></small></div>';
    h+='<div class="tblwrap"><table class="tbl stack" id="bt"><thead><tr><th>Benefit</th><th>Minimum rating</th><th>Details and how to apply</th><th>Source</th></tr></thead><tbody>'+
      s.benefits.map(function(b){return '<tr data-r="'+esc(b.min_rating)+'"><td data-l="Benefit"><b>'+esc(b.benefit)+'</b><br><span class="badge">'+esc(cats[b.category]||b.category)+'</span>'+(b.needs_verification?' <span class="badge flag">Needs verification</span>':'')+(b.varies_by_county?' <span class="badge">Varies by county</span>':'')+'</td><td data-l="Minimum rating"><b>'+esc(b.min_rating)+'</b></td><td data-l="Details">'+esc(b.details)+'</td><td data-l="Source"><a href="'+esc(b.source_url)+'">'+esc(host(b.source_url))+'</a><br><small>'+esc(b.source_title)+'</small><small>Verified '+esc(b.date_verified)+'</small></td></tr>'}).join('')+'</tbody></table></div>';
    if(s.notes&&s.notes.length)h+='<div class="card warn"><h2>Eligibility traps and plain-language notes</h2><ul>'+s.notes.map(function(n){return '<li>'+esc(n)+'</li>'}).join('')+'</ul></div>';
    h+='<div class="card info"><h2>Federal benefits stack on top</h2><p>Everything here is in addition to VA health care, dependents pay, CHAMPVA, Chapter 35, and the rest. See the <a href="'+ROOT+'benefits/">rating ladder</a>. For help applying, your <b>county veterans service officer</b> is free and knows the local offices. <a href="'+ROOT+'get-help.html">Find free help.</a></p></div>';
    el.innerHTML=h;
    el.querySelectorAll('#rf .pill').forEach(function(p){p.addEventListener('click',function(){
      el.querySelectorAll('#rf .pill').forEach(function(q){q.setAttribute('aria-pressed','false')});p.setAttribute('aria-pressed','true');
      var r=p.getAttribute('data-r');el.querySelectorAll('#bt tbody tr').forEach(function(tr){tr.style.display=(!r||tr.getAttribute('data-r')===r)?'':'none'});
    })});
  }).catch(function(e){(el||idx).innerHTML='<div class="card warn">Could not load state data ('+esc(e.message)+').</div>'});
})();
