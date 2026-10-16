/* Shared header, footer, waitlist box, and analytics for every page.
   Works at a root domain (Vercel) and under /repo-name/ (GitHub Pages) because
   ROOT is computed from this script's own URL, never hard-coded. */
(function(){
  var me=document.currentScript||document.querySelector('script[src*="site.js"]');
  var ROOT=me.src.replace(/assets\/site\.js.*$/,'');
  window.SITE_ROOT=ROOT;
  var C=window.SITE_CONFIG||{};
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function h(html){var t=document.createElement('template');t.innerHTML=html.trim();return t.content.firstChild}

  /* ---- canonical + og tags ---- */
  if(C.baseUrl&&!document.querySelector('link[rel=canonical]')){
    var path=location.pathname.replace(/^.*?\/vet-benefits-site\//,'/').replace(/index\.html$/,'');
    var l=document.createElement('link');l.rel='canonical';l.href=C.baseUrl.replace(/\/$/,'')+path;document.head.appendChild(l);
  }

  /* ---- analytics (only if configured) ---- */
  if(C.plausibleDomain){var s=document.createElement('script');s.defer=true;s.setAttribute('data-domain',C.plausibleDomain);s.src='https://plausible.io/js/script.js';document.head.appendChild(s)}

  /* ---- nav ---- */
  var here=location.pathname;
  var links=[
    ['start-here/','Start Here'],['benefits/','Rating Ladder'],['states/','State Benefits'],
    ['calculator/','Calculator'],['tools-forms.html','Tools & Forms'],['get-help.html','Get Help']
  ];
  function cur(p){var full=ROOT+p;return here===new URL(full).pathname||here===new URL(full).pathname+'index.html'}
  var nav='<div class="crisis"><b>In crisis?</b> Veterans Crisis Line: dial <a href="tel:988">988</a>, then press 1 &middot; text <a href="sms:838255">838255</a> &middot; <a href="https://www.veteranscrisisline.net/get-help-now/chat/" rel="noopener">chat online</a>. Free, 24/7.</div>'+
  '<div class="flagbar"></div><div class="w"><nav class="nav" aria-label="Main">'+
  '<a class="brand" href="'+ROOT+'"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 1.8l3 6.6 7.2.8-5.4 4.8 1.5 7.1L12 17.4 5.7 21.1l1.5-7.1L1.8 9.2 9 8.4z"/></svg><span>'+esc(C.siteName||'Vet Benefits Guide')+'</span></a>'+
  '<ul class="menu">'+links.map(function(x){return '<li><a href="'+ROOT+x[0]+'"'+(cur(x[0])?' aria-current="page"':'')+'>'+x[1]+'</a></li>'}).join('')+
  '<li class="cta"><a href="'+ROOT+'waitlist.html">Interest list</a></li></ul></nav></div>';
  var hdr=document.querySelector('[data-site-header]');
  if(hdr){hdr.innerHTML=nav}

  /* ---- waitlist box ---- */
  var LANES=[['','Not sure yet'],['first','First claim'],['increase','Increase'],['appeal','Appeal or review'],['notsure','Not sure']];
  var STATES='AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY AS GU MP PR VI'.split(' ');
  function wlForm(compact){
    var id='wl'+Math.random().toString(36).slice(2,7);
    return '<form class="wlform" novalidate data-wl>'+
    '<p class="note">This is an <b>interest list</b>, not a sign-up for a service. No launch date, price, or outcome is promised. Please do <b>not</b> enter your SSN, VA file number, or any medical details.</p>'+
    '<div class="row"><div class="field"><label for="'+id+'f">First name</label><input type="text" id="'+id+'f" name="first_name" autocomplete="given-name" required maxlength="60"></div>'+
    '<div class="field"><label for="'+id+'e">Email</label><input type="email" id="'+id+'e" name="email" autocomplete="email" required maxlength="120" inputmode="email"></div></div>'+
    '<fieldset class="field" style="border:0;padding:0;margin:8px 0"><legend style="font-weight:600;margin-bottom:4px">I am interested in</legend>'+
    '<label class="chk"><input type="checkbox" name="interest_software" value="yes"> Guided self-file software (coming soon)</label>'+
    '<label class="chk"><input type="checkbox" name="interest_handling" value="yes"> Complete claims handling, done-with-you or done-for-you (coming soon)</label></fieldset>'+
    (compact?'':'<div class="row"><div class="field"><label for="'+id+'g">What are you trying to do? (optional)</label><select id="'+id+'g" name="goal">'+LANES.map(function(x){return '<option value="'+x[0]+'">'+x[1]+'</option>'}).join('')+'</select></div>'+
    '<div class="field"><label for="'+id+'s">State (optional)</label><select id="'+id+'s" name="state"><option value="">Choose</option>'+STATES.map(function(x){return '<option>'+x+'</option>'}).join('')+'</select></div></div>')+
    '<label class="chk"><input type="checkbox" name="consent" value="yes" required> I agree to receive emails about these services. I can unsubscribe anytime.</label>'+
    '<div class="hp" aria-hidden="true"><label>Leave this field empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>'+
    '<input type="hidden" name="source_page" value="'+esc(location.pathname)+'">'+
    '<div class="err" role="alert" aria-live="assertive" data-err></div>'+
    '<p style="margin-top:10px"><button class="btn" type="submit">Join the interest list</button> <small style="display:inline;margin-left:8px"><a href="'+ROOT+'privacy.html">Privacy policy</a></small></p>'+
    '</form>';
  }
  function wireForm(f){
    var err=f.querySelector('[data-err]');
    f.addEventListener('submit',function(e){
      e.preventDefault();err.textContent='';
      var fd=new FormData(f);
      if(fd.get('_gotcha')){f.innerHTML='<div class="ok">Thanks.</div>';return}
      var name=(fd.get('first_name')||'').trim(),email=(fd.get('email')||'').trim();
      if(!name){err.textContent='Please enter your first name.';f.first_name.focus();return}
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){err.textContent='Please enter a valid email address.';f.email.focus();return}
      if(!fd.get('interest_software')&&!fd.get('interest_handling')){err.textContent='Please check at least one offering you are interested in.';return}
      if(!fd.get('consent')){err.textContent='Please check the consent box so we are allowed to email you.';return}
      if(/\b\d{3}-?\d{2}-?\d{4}\b/.test(name)){err.textContent='Please do not enter numbers that look like an SSN or file number.';return}
      var btn=f.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='Sending...';
      var mode=C.waitlistMode||'formspree';
      var url=mode==='vercel'?(C.vercelEndpoint||'/api/waitlist'):C.formspreeEndpoint;
      if(!url||/YOUR_FORM_ID/.test(url)){fail('The form is not connected yet. Email us instead or try again later.');return}
      var body={};fd.forEach(function(v,k){body[k]=v});
      fetch(url,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body)})
      .then(function(r){if(r.ok)return r.json().catch(function(){return{}});return r.json().catch(function(){return{}}).then(function(j){throw new Error((j&&j.errors&&j.errors.map(function(x){return x.message}).join(', '))||('Server said '+r.status))})})
      .then(function(){f.innerHTML='<div class="ok"><b>You are on the interest list.</b> Thanks, '+esc(name)+'. We will email you when there is news. You can unsubscribe from any email. Nothing else is required.</div>';f.focus&&f.focus()})
      .catch(function(ex){fail('Could not send: '+ex.message+'. You can try again, or come back later.')});
      function fail(msg){err.textContent=msg;btn.disabled=false;btn.textContent='Join the interest list'}
    });
  }
  function buildBox(box){
    var compact=box.getAttribute('data-waitlist-box')!=='full';
    var title=box.getAttribute('data-title')||'Two things are coming. Want a heads-up?';
    box.className='wl';
    box.innerHTML='<h2>'+esc(title)+'</h2><p class="muted" style="margin-bottom:10px">An <b>automated guided self-file tool</b> and a <b>complete claims-handling service</b> are in the works. Both are "coming soon" with no date set. Join the interest list and we will email you when there is news.</p>'+wlForm(compact);
    wireForm(box.querySelector('form'));
  }
  window.SITE_buildWaitlist=buildBox;
  document.querySelectorAll('[data-waitlist-box]').forEach(buildBox);

  /* ---- footer ---- */
  var ftr=document.querySelector('[data-site-footer]');
  if(ftr){
    var v=ftr.getAttribute('data-verified')||C.contentVerified||'';
    ftr.className='site';ftr.innerHTML='<div class="w">'+
    (ftr.hasAttribute('data-no-waitlist')?'':'<div data-waitlist-box data-title="Get a heads-up when the tools launch"></div>')+
    '<div class="crisisbox"><b>Veterans Crisis Line, free and open 24/7.</b> Dial <a href="tel:988">988</a>, then press 1. Text <a href="sms:838255">838255</a>. Or <a href="https://www.veteranscrisisline.net/get-help-now/chat/" rel="noopener">chat online</a>. You do not need to be enrolled in VA care.</div>'+
    '<div class="cols"><div><h3>Start</h3><ul><li><a href="'+ROOT+'start-here/">The claims process</a></li><li><a href="'+ROOT+'start-here/quiz.html">Where do I start? quiz</a></li><li><a href="'+ROOT+'start-here/flowchart.html">Claim paths flowchart</a></li><li><a href="'+ROOT+'calculator/">Rating & pay calculator</a></li></ul></div>'+
    '<div><h3>Benefits</h3><ul><li><a href="'+ROOT+'benefits/">Rating ladder</a></li><li><a href="'+ROOT+'states/">State benefits</a></li><li><a href="'+ROOT+'tools-forms.html">Tools & forms</a></li><li><a href="'+ROOT+'glossary.html">Glossary</a></li></ul></div>'+
    '<div><h3>Help</h3><ul><li><a href="'+ROOT+'get-help.html">Free accredited help (VSOs)</a></li><li><a href="https://www.va.gov/get-help-from-accredited-representative/find-rep/" rel="noopener">VA accredited rep search</a></li><li><a href="'+ROOT+'waitlist.html">Interest list</a></li><li><a href="'+ROOT+'privacy.html">Privacy policy</a></li></ul></div></div>'+
    '<div class="legal"><p><b>General education, not legal, medical, or financial advice.</b> '+esc(C.siteName||'')+' is not the U.S. Department of Veterans Affairs and is not connected to any government agency. Nothing here promises a rating, an outcome, or a dollar amount. Only the VA decides claims. '+esc(C.ownerLine||'')+'. I am pursuing VA accreditation but <b>do not hold it yet</b>, so I cannot represent anyone, prepare or file a claim for anyone, or charge for claims work. For help with your claim, use a <a href="'+ROOT+'get-help.html">free accredited VSO or VA-accredited representative</a>.</p>'+
    '<p>Pay figures use VA rates effective '+esc(C.ratesEffective||'')+' ('+esc(C.ratesYearLabel||'')+' rates). Rates change every December 1.'+(v?' Page content last verified <b>'+esc(v)+'</b>.':'')+' Rules change; always confirm on <a href="https://www.va.gov" rel="noopener">VA.gov</a> or an official state site before you act.'+(C.plausibleDomain?' This site uses privacy-friendly, cookie-free analytics (Plausible).':' This site sets no cookies and runs no tracking.')+'</p></div></div>';
    ftr.querySelectorAll('[data-waitlist-box]').forEach(function(box){
      box.className='wl';box.innerHTML='<h2>'+esc(box.getAttribute('data-title'))+'</h2>'+wlForm(true);wireForm(box.querySelector('form'));
    });
  }

  /* ---- external links open safely ---- */
  document.querySelectorAll('a[href^="http"]').forEach(function(a){if(a.host!==location.host){a.rel='noopener';if(!a.target)a.target='_blank'}});
})();
