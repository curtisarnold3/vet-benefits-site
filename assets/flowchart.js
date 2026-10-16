/* Builds the clickable SVG flowchart and the matching text list. Plain JS, no library. */
(function(){
  var N={
    itf:{x:500,y:50,w:300,t:'Start: Intent to File (21-0966)',k:'start',title:'Intent to File (VA Form 21-0966)',
      body:'Locks in your effective date for one year. File it the day you decide to claim anything, even before you have evidence. Online at VA.gov, free, no conditions required.',
      form:'21-0966',url:'https://www.va.gov/find-forms/about-form-21-0966/',rule:'38 CFR 3.155. Back pay counts from this date if you file the full claim within one year.'},
    q1:{x:500,y:150,w:300,t:'Do you have a VA rating now?',k:'decision',title:'Do you already have a rating?',
      body:'"Rated" means VA has granted service connection for at least one condition, even at 0%. If you filed once and got 0% combined with every condition denied, treat yourself as not rated: nothing was proven yet.',form:'',url:'../start-here/quiz.html',rule:'Not sure? The quiz sorts this out in six questions.'},
    init:{x:220,y:290,w:260,t:'Initial claim (21-526EZ)',k:'',title:'Initial claim: VA Form 21-526EZ',
      body:'Your first claim for a condition. Before you file, each condition needs all three legs: a current diagnosis, an in-service event or aggravation, and a nexus opinion linking them. Presumptive conditions skip the nexus leg only.',
      form:'21-526EZ',url:'https://www.va.gov/find-forms/about-form-21-526ez/',rule:'A denial "with no exam" usually means the file was too thin. Rebuild the evidence instead of appealing.'},
    rated:{x:780,y:290,w:260,t:'Already rated: what do you want?',k:'decision',title:'Already rated',
      body:'Three common moves from here: an increase on a condition that got worse, a new secondary condition caused by one you already have, or unemployability (TDIU) if you cannot keep a job because of your service-connected conditions.',form:'',url:'../benefits/',rule:'At 100%, the only thing left to file for is usually Special Monthly Compensation (SMC). See the rating ladder.'},
    inc:{x:780,y:400,w:260,t:'Increase (21-526EZ)',k:'',title:'Claim for increase: VA Form 21-526EZ',
      body:'Use when your symptoms now match the next step up in the rating criteria for that condition, and your records show it. Read the criteria in 38 CFR Part 4 first.',
      form:'21-526EZ',url:'https://www.ecfr.gov/current/title-38/chapter-I/part-4',rule:'Filing when your symptoms have not reached the next step can reopen your rating for review. Check your rating protections (5, 10, 20 years; age 55) before filing.'},
    sec:{x:780,y:500,w:260,t:'Secondary condition (21-526EZ)',k:'',title:'Secondary condition: VA Form 21-526EZ',
      body:'A new condition caused or worsened by a condition that is already service-connected (a 0% rating counts). You need a doctor to write the link ("at least as likely as not caused by...") and proof of how bad the new condition is.',
      form:'21-526EZ',url:'https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR39f8a7b6a2dcc2a/section-3.310',rule:'38 CFR 3.310. Pick the single most believable link. One strong chain beats five weak ones.'},
    tdiu:{x:780,y:600,w:260,t:'TDIU (21-8940 + 21-4192)',k:'',title:'Total Disability based on Individual Unemployability',
      body:'Pays at the 100% rate if your service-connected conditions keep you from holding a steady, substantially gainful job. Usual threshold: one condition at 60%, or a combined 70% with one condition at 40%. VA can grant it below those numbers in rare cases (extra-schedular).',
      form:'21-8940 (you) and 21-4192 (your last employer)',url:'https://www.va.gov/find-forms/about-form-21-8940/',rule:'38 CFR 4.16. A vocational expert report and your Social Security earnings record are strong evidence. Keep TDIU and SSDI files separate; they use different rules.'},
    cp:{x:500,y:720,w:260,t:'C&P exam',k:'',title:'The C&P exam',
      body:'VA (or a contractor) examines you and fills out a DBQ. Describe your worst days, do not minimize, do not exaggerate. Read the public DBQ for your condition before you go.',form:'',url:'https://www.va.gov/disability/va-claim-exam/',rule:'Missing the exam without rescheduling lets VA decide on the file as it stands.'},
    dec:{x:500,y:820,w:260,t:'Decision letter + code sheet',k:'',title:'The decision',
      body:'Read the letter and the rating code sheet. Check each rating, the effective date, and anything deferred or denied. Then decide within one year whether to accept it or review it.',form:'',url:'https://www.va.gov/disability/after-you-file-claim/',rule:'The one-year review clock starts on the date printed on the letter.'},
    happy:{x:800,y:820,w:220,t:'Agree? Claim what unlocks',k:'end',title:'You agree with the decision',
      body:'Good. Now use the rating. Health care, dependents added to your pay (30%+), education for your family (P&T), property tax breaks, hiring preference, and more.',form:'',url:'../benefits/',rule:'See the rating ladder and your state page.'},
    q2:{x:500,y:930,w:300,t:'Disagree? Within 1 year of the letter?',k:'decision',title:'You disagree: how long has it been?',
      body:'Inside one year of the decision date you have three choices and you keep your original effective date. After one year, only a Supplemental Claim with new and relevant evidence is available, and the effective date usually moves to the new filing date.',form:'',url:'https://www.va.gov/decision-reviews/',rule:'38 CFR 3.2500. Filing each review within a year of the last decision is called continuous pursuit. It protects the effective date all the way back.'},
    hlr:{x:170,y:1050,w:270,t:'Higher-Level Review (20-0996)',k:'end',title:'Higher-Level Review: VA Form 20-0996',
      body:'A senior reviewer looks at the same evidence again for errors. No new evidence allowed. Best when something in the file was missed or weighed wrong. Write out the error plainly: "I sent X. VA did not use it."',
      form:'20-0996',url:'https://www.va.gov/find-forms/about-form-20-0996/',rule:'Must be within one year of the decision. Many veterans skip the informal conference box and argue in writing instead.'},
    supp:{x:500,y:1050,w:270,t:'Supplemental Claim (20-0995)',k:'end',title:'Supplemental Claim: VA Form 20-0995',
      body:'For evidence VA has never seen: a nexus letter, a new diagnosis, a DBQ, a newly presumptive condition. New means new to VA, not new to you. A re-sent record or your own statement alone usually does not count.',
      form:'20-0995',url:'https://www.va.gov/find-forms/about-form-20-0995/',rule:'Within one year keeps the effective date. After one year, still allowed, but the effective date usually moves.'},
    board:{x:830,y:1050,w:270,t:'Board Appeal (10182)',k:'end',title:'Board of Veterans’ Appeals: VA Form 10182',
      body:'A Veterans Law Judge decides. Three dockets: direct review (no new evidence, fastest), evidence submission (90 days to add evidence), or hearing (slowest). Waits are measured in years.',
      form:'10182',url:'https://www.va.gov/find-forms/about-form-10182/',rule:'Must be within one year of the decision (or 60 days of a Statement of the Case in the old system). Free accredited help matters most here.'}
  };
  var E=[['itf','q1',''],['q1','init','No'],['q1','rated','Yes'],['rated','inc',''],['rated','sec',''],['rated','tdiu',''],
         ['init','cp',''],['inc','cp',''],['sec','cp',''],['tdiu','cp',''],['cp','dec',''],['dec','happy','Yes'],['dec','q2','No'],
         ['q2','hlr','Yes, no new evidence'],['q2','supp','New evidence (any time)'],['q2','board','Yes, want a judge']];
  var W=1000,H=1120,hh=56;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function path(a,b){
    var A=N[a],B=N[b];
    var x1=A.x,y1=A.y+hh/2,x2=B.x,y2=B.y-hh/2;
    if(a==='rated'){x1=A.x-A.w/2;y1=A.y;return 'M'+x1+' '+y1+' H'+(B.x-B.w/2-20)+' V'+B.y+' H'+(B.x-B.w/2)}
    if(a==='dec'&&b==='happy'){return 'M'+(A.x+A.w/2)+' '+A.y+' H'+(B.x-B.w/2)}
    if(['init','inc','sec','tdiu'].indexOf(a)>-1&&b==='cp'){
      var sx=a==='init'?A.x:A.x+ (a==='inc'?-40:(a==='sec'?-20:0));
      if(a==='init')return 'M'+A.x+' '+y1+' V'+(B.y-hh/2-30)+' H'+(B.x-30)+' V'+(B.y-hh/2);
      return 'M'+(A.x+A.w/2+0)+' '+A.y+' H'+(A.x+A.w/2+30)+' V'+(B.y-hh/2-30)+' H'+(B.x+30)+' V'+(B.y-hh/2);
    }
    if(a==='q2'){return 'M'+x1+' '+y1+' V'+(y1+30)+' H'+x2+' V'+y2}
    if(a==='q1'){return 'M'+x1+' '+y1+' V'+(y1+40)+' H'+x2+' V'+y2}
    return 'M'+x1+' '+y1+' V'+y2;
  }
  function lblPos(a,b){var A=N[a],B=N[b];
    if(a==='q1')return [ (A.x+B.x)/2, A.y+hh/2+34];
    if(a==='q2')return [ B.x, B.y-hh/2-12];
    if(a==='dec'&&b==='happy')return [(A.x+A.w/2+B.x-B.w/2)/2, A.y-8];
    return [(A.x+B.x)/2, A.y+hh/2+14]}
  function wrap(t,w){var words=t.split(' '),lines=[],cur='';words.forEach(function(x){if((cur+' '+x).trim().length*8.2>w-24){lines.push(cur.trim());cur=x}else cur+=' '+x});if(cur.trim())lines.push(cur.trim());return lines}
  var svg='<svg class="flow" viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ftitle"><title id="ftitle">VA claim paths</title>'+
    '<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#5b6862"/></marker></defs>';
  E.forEach(function(e){svg+='<path class="edge" d="'+path(e[0],e[1])+'"/>';if(e[2]){var p=lblPos(e[0],e[1]);svg+='<text class="elabel" x="'+p[0]+'" y="'+p[1]+'" text-anchor="middle">'+esc(e[2])+'</text>'}});
  svg+='<text class="elabel" x="500" y="675" text-anchor="middle">All paths usually include an exam</text>';
  svg+='<text class="elabel" x="500" y="1005" text-anchor="middle" style="font-size:12px">After 1 year: Supplemental Claim only, effective date usually moves</text>';
  Object.keys(N).forEach(function(id){var n=N[id],lines=wrap(n.t,n.w),lh=18,y0=n.y-((lines.length-1)*lh)/2;
    svg+='<g class="node '+n.k+'" tabindex="0" role="button" data-id="'+id+'" aria-label="'+esc(n.title)+'"><rect x="'+(n.x-n.w/2)+'" y="'+(n.y-hh/2)+'" width="'+n.w+'" height="'+hh+'" rx="6"/>'+
      lines.map(function(l,i){return '<text x="'+n.x+'" y="'+(y0+i*lh+5)+'" text-anchor="middle">'+esc(l)+'</text>'}).join('')+'</g>'});
  svg+='</svg>';
  document.getElementById('chart').innerHTML=svg;
  var detail=document.getElementById('detail');
  function show(id,focus){
    var n=N[id];document.querySelectorAll('.node').forEach(function(g){g.classList.toggle('active',g.getAttribute('data-id')===id)});
    detail.innerHTML='<h2>'+esc(n.title)+'</h2><p>'+esc(n.body)+'</p>'+(n.form?'<p><b>Form:</b> '+esc(n.form)+'</p>':'')+'<p class="muted"><b>Rule people miss:</b> '+esc(n.rule)+'</p>'+(n.url?'<p><a class="btn sm" href="'+n.url+'">'+(/va\.gov|ecfr/.test(n.url)?'Official page':'Open')+'</a></p>':'');
    if(focus){detail.scrollIntoView({behavior:'smooth',block:'nearest'});detail.focus({preventScroll:true})}
  }
  document.querySelectorAll('.node').forEach(function(g){
    g.addEventListener('click',function(){show(g.getAttribute('data-id'),true)});
    g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show(g.getAttribute('data-id'),true)}});
  });
  /* text list */
  var order=['itf','q1','init','rated','inc','sec','tdiu','cp','dec','happy','q2','hlr','supp','board'];
  document.getElementById('list').innerHTML=order.map(function(id){var n=N[id];return '<details><summary>'+esc(n.title)+'</summary><div><p>'+esc(n.body)+'</p>'+(n.form?'<p><b>Form:</b> '+esc(n.form)+'</p>':'')+'<p class="muted"><b>Rule people miss:</b> '+esc(n.rule)+'</p>'+(n.url?'<p><a href="'+n.url+'">Official page or related guide</a></p>':'')+'</div></details>'}).join('');
  if(location.hash&&N[location.hash.slice(1)])show(location.hash.slice(1),false);
})();
