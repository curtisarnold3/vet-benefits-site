/* "Where do I start?" quiz. Routes to lanes A-F. Pure client-side. */
(function(){
  var ROOT=window.SITE_ROOT||'../';
  var Q={
    filed:{t:'Have you ever filed a VA disability claim?',o:[
      ['never','No, never'],['pending','Yes, and it is still pending'],['rated','Yes, and I have a rating now (even 0% on a condition counts)'],['zero','Yes, and everything was denied (0% combined, nothing granted)']]},
    pending:{t:'While a claim is pending, there is not much to file. Which fits best?',o:[
      ['prep','I want to get ready for the C&P exam'],['add','I want to add a condition I forgot']]},
    disagree:{t:'Do you agree with your most recent decision?',o:[
      ['agree','Yes, I agree. I want to go higher or add something.'],['disagree','No. Something was denied or rated too low.']]},
    within:{t:'Is it less than one year since the date printed on that decision letter?',o:[
      ['yes','Yes, under one year'],['no','No, more than a year'],['unsure','Not sure']]},
    newev:{t:'Do you have evidence VA has never seen? (A nexus letter, a new diagnosis, a DBQ, a newly presumptive condition.) Your own statement or a record you already sent does not count.',o:[
      ['yes','Yes, I have something new'],['no','No. VA had everything and still got it wrong'],['unsure','Not sure']]},
    goal:{t:'What do you want to do?',o:[
      ['worse','A rated condition got worse'],['secondary','A new problem was caused by a condition I am already rated for'],['work','I cannot keep a steady job because of my service-connected conditions'],['benefits','Nothing to file. I want to use the rating I have']]},
    thresh:{t:'Do your ratings meet either of these? One condition rated 60% or higher, OR a combined rating of 70% or higher with at least one condition at 40%.',o:[
      ['yes','Yes'],['no','No'],['unsure','Not sure (open the calculator in a new tab and check)']]},
    worse:{t:'Have you read the rating criteria for that condition, and do your records show the symptoms for the next step up?',o:[
      ['yes','Yes, my records show the next step'],['no','Not yet'],['unsure','I do not know what the criteria say']]}
  };
  var L={
    A:{n:'Lane A: First claim',form:'VA Form 21-526EZ (after an Intent to File, 21-0966)',why:'',
      steps:['Save your date. File an Intent to File on VA.gov today. You have 365 days.','Request your records: C-file (VA Form 20-10206) and, if you never filed, service records (SF-180).','For each condition, check the three legs: a diagnosis, proof of severity, and a nexus. Build what is missing before you file.'],
      links:[['Intent to File (21-0966)','https://www.va.gov/find-forms/about-form-21-0966/'],['The six steps',ROOT+'start-here/'],['Three-leg evidence test',ROOT+'start-here/#evidence']]},
    B:{n:'Lane B: Higher-Level Review',form:'VA Form 20-0996',why:'',
      steps:['Confirm the decision letter is dated less than one year ago.','Get your C-file and find the error: evidence that was in the file but not listed or not weighed.','File the 20-0996. Write the error in plain words. No new evidence. Many veterans skip the informal conference and argue in writing.'],
      links:[['Form 20-0996','https://www.va.gov/find-forms/about-form-20-0996/'],['VA: decision reviews','https://www.va.gov/decision-reviews/'],['Free accredited help',ROOT+'get-help.html']]},
    C:{n:'Lane C: Supplemental Claim',form:'VA Form 20-0995',why:'',
      steps:['Confirm what is new. New means new to VA: a nexus letter, a new diagnosis, a DBQ, a newly presumptive condition.','Get your C-file and note the decision date; the form asks for it.','File the 20-0995 with the new evidence attached. If it has been over a year, check the 5103 notice waiver box and know the effective date may move.'],
      links:[['Form 20-0995','https://www.va.gov/find-forms/about-form-20-0995/'],['Nexus letters and IMOs',ROOT+'start-here/#nexus'],['Free accredited help',ROOT+'get-help.html']]},
    D:{n:'Lane D: Increase',form:'VA Form 21-526EZ',why:'',
      steps:['Read the rating criteria for your condition in 38 CFR Part 4. Read every "and" and "or." Look at the step above yours.','Make sure your records show those symptoms. If not, get them documented first (a DBQ or a doctor’s note).','Check your rating protections (5, 10, 20 years; age 55) before filing. Then file the 21-526EZ with the new evidence attached.'],
      links:[['38 CFR Part 4 rating schedule','https://www.ecfr.gov/current/title-38/chapter-I/part-4'],['Rating & pay calculator',ROOT+'calculator/'],['Public DBQs','https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp']]},
    E:{n:'Lane E: Secondary condition',form:'VA Form 21-526EZ',why:'',
      steps:['Confirm the primary condition is already on your rating sheet. A 0% counts.','Pick the single most believable link. A doctor has to write how the first condition caused or worsened the second.','Get severity documented (DBQ or opinion), then file the 21-526EZ with everything attached.'],
      links:[['38 CFR 3.310 (secondary)','https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR39f8a7b6a2dcc2a/section-3.310'],['Nexus letters and IMOs',ROOT+'start-here/#nexus'],['Rating & pay calculator',ROOT+'calculator/']]},
    F:{n:'Lane F: TDIU (unemployability)',form:'VA Form 21-8940, plus 21-4192 from your last employer',why:'',
      steps:['Gather your work history and your Social Security earnings record.','Ask your last employer to complete VA Form 21-4192. Get a doctor’s opinion on how your conditions affect work. A vocational expert report is strong evidence.','File the 21-8940. Keep your TDIU file and any SSDI file separate; they use different rules.'],
      links:[['Form 21-8940','https://www.va.gov/find-forms/about-form-21-8940/'],['38 CFR 4.16','https://www.ecfr.gov/current/title-38/chapter-I/part-4/subpart-A/section-4.16'],['TDIU explained',ROOT+'benefits/tdiu.html']]}
  };
  var ans={},hist=[],cur='filed';
  var box=document.getElementById('quiz'),res=document.getElementById('result');
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function render(){
    var q=Q[cur];
    box.innerHTML='<div class="prog" aria-hidden="true">'+[0,1,2,3,4,5].map(function(i){return '<i class="'+(i<=hist.length?'on':'')+'"></i>'}).join('')+'</div>'+
      '<h2>'+esc(q.t)+'</h2><div class="opts">'+q.o.map(function(o){return '<button type="button" data-v="'+o[0]+'">'+esc(o[1])+'</button>'}).join('')+'</div>'+
      (hist.length?'<button class="linkbtn pill" type="button" id="back">← Back</button>':'')+
      '<small style="margin-top:10px">Question '+(hist.length+1)+'. Nothing is saved.</small>';
    box.querySelectorAll('.opts button').forEach(function(b){b.addEventListener('click',function(){pick(b.getAttribute('data-v'))})});
    var bk=document.getElementById('back');if(bk)bk.addEventListener('click',function(){var h=hist.pop();cur=h;delete ans[h];res.innerHTML='';render()});
    box.querySelector('h2').setAttribute('tabindex','-1');box.querySelector('h2').focus();
  }
  function pick(v){
    ans[cur]=v;hist.push(cur);
    var next=null,lane=null,note='';
    if(cur==='filed'){
      if(v==='never')lane='A';
      else if(v==='zero'){lane='A';note='A 0% combined decision with everything denied means nothing was proven yet. The fix is evidence, not an appeal. If the decision is under a year old and you now have new evidence, a Supplemental Claim (Lane C) keeps your original date; ask a free VSO which is better for you.'}
      else if(v==='pending')next='pending';else next='disagree';
    }else if(cur==='pending'){
      lane=null;note=v==='prep'?'prep':'add';
    }else if(cur==='disagree'){next=v==='agree'?'goal':'within'}
    else if(cur==='within'){next='newev'}
    else if(cur==='newev'){
      var w=ans.within;
      if(v==='yes')lane='C';
      else if(v==='no'){ if(w==='yes')lane='B'; else if(w==='no'){lane='C';note='More than a year has passed, so a Higher-Level Review is no longer available. A Supplemental Claim is the path, but it requires new and relevant evidence. Your first job is to get something new: usually a nexus letter or a current DBQ.'} else {lane='B';note='Check the date on the letter first. If it is over a year old, Lane B is closed and you will need new evidence for Lane C.'} }
      else { lane='C';note='Not sure what counts as new? Ask a free VSO to look at your file. If VA truly had everything and the decision is under a year old, Lane B (Higher-Level Review) may fit better.'}
    }else if(cur==='goal'){
      if(v==='worse')next='worse';else if(v==='secondary')lane='E';else if(v==='work')next='thresh';else{lane=null;note='benefits'}
    }else if(cur==='worse'){
      lane='D';if(v==='no')note='Do not file yet. Filing at the same step can reopen your whole rating. Get the symptoms documented first.';if(v==='unsure')note='Start by reading the criteria. Your condition has a diagnostic code on your rating code sheet; look it up in 38 CFR Part 4.';
    }else if(cur==='thresh'){
      lane='F';if(v==='no')note='You do not meet the usual numbers. VA can still grant TDIU on an extra-schedular basis, but it is rare. Two other routes: an increase on a condition that got worse (Lane D), or a secondary condition (Lane E) to raise the combined rating first.';if(v==='unsure')note='Open the calculator, enter your ratings, and check the TDIU note it shows.';
    }
    if(next){cur=next;render();return}
    finish(lane,note);
  }
  function finish(lane,note){
    box.innerHTML='<h2>Your result</h2><p class="muted">Based on your answers. Change an answer with the button below.</p><button class="pill" type="button" id="restart">Start over</button>';
    document.getElementById('restart').addEventListener('click',function(){ans={};hist=[];cur='filed';res.innerHTML='';render()});
    var h='';
    if(lane){var l=L[lane];
      h='<div class="card good"><h2>'+esc(l.n)+'</h2><p><b>Form:</b> '+esc(l.form)+'</p>'+(note?'<div class="card warn" style="margin:10px 0"><p style="margin:0">'+esc(note)+'</p></div>':'')+
        '<h3>Your first three moves</h3><ol>'+l.steps.map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ol>'+
        '<p>'+l.links.map(function(x){return '<a class="btn sm sec" href="'+x[1]+'" style="margin:4px 6px 4px 0">'+esc(x[0])+'</a>'}).join('')+'</p>'+
        '<p class="note">Before any lane: file an Intent to File and request your C-file. And remember, a free accredited VSO can look at your actual file, which this quiz cannot.</p></div>';
    }else if(note==='prep'){
      h='<div class="card good"><h2>Get ready for the exam</h2><p>Read the public DBQ for each condition, review your statement and symptom log, and plan to describe your worst days honestly.</p><p><a class="btn sm sec" href="'+ROOT+'start-here/#cp">C&amp;P exam prep</a> <a class="btn sm sec" href="https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp">Public DBQs</a></p></div>';
    }else if(note==='add'){
      h='<div class="card good"><h2>Adding a condition while a claim is pending</h2><p>You can file a new 21-526EZ for the added condition at any time. It becomes its own claim with its own effective date (today, or your open Intent to File date if the new condition is covered by it). Make sure it has all three legs first.</p><p><a class="btn sm sec" href="'+ROOT+'start-here/#evidence">Three-leg test</a></p></div>';
    }else{
      h='<div class="card good"><h2>Use the rating you have</h2><p>Nothing to file right now. See what unlocks at your rating: health care, dependents added to pay, education for your family, property tax breaks, hiring preference, and more.</p><p><a class="btn sm" href="'+ROOT+'benefits/">Rating ladder</a> <a class="btn sm sec" href="'+ROOT+'states/">State benefits</a></p></div>';
    }
    h+='<div class="card info"><h2>Get free help with this step</h2><p>Accredited VSOs (DAV, VFW, American Legion, county veterans service officers) do this every day, for free. <a href="'+ROOT+'get-help.html">How to find one near you.</a> Nobody may charge you for help with an initial claim.</p></div>';
    h+='<div data-waitlist-box data-title="Want a guided tool for this path when it launches?"></div>';
    res.innerHTML=h;
    /* wire the injected waitlist box by re-running the shared builder */
    if(window.SITE_buildWaitlist)window.SITE_buildWaitlist(res.querySelector('[data-waitlist-box]'));
    res.querySelector('.card').setAttribute('tabindex','-1');res.querySelector('.card').focus();res.scrollIntoView({behavior:'smooth',block:'start'});
  }
  render();
})();
