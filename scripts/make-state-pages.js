#!/usr/bin/env node
/* Generates one thin HTML shell per state from data/states.json. The shells have the state
   name in <title>/<h1> for search engines; the benefit table renders client-side from the JSON.
   Run after editing states.json: node scripts/make-state-pages.js   (safe to re-run) */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const d=JSON.parse(fs.readFileSync(path.join(root,'data/states.json'),'utf8'));
const tpl=(s)=>`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark"><meta name="theme-color" content="#0f1613">
<title>${s.name} veteran benefits by VA disability rating – Vet Benefits Guide</title>
<meta name="description" content="${s.name} state benefits for disabled veterans keyed to the minimum VA rating: property tax, plates, hunting and fishing, parks, tuition, income tax, hiring preference. Official source links and verification dates.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/site.css">
<script src="../data/config.js"></script>
</head><body>
<a class="skip" href="#main">Skip to content</a>
<div data-site-header></div>
<main id="main" class="w">
<p class="crumb"><a href="../">Home</a> › <a href="./">State benefits</a> › ${s.name}</p>
<h1>${s.name} benefits for disabled veterans</h1>
<p class="lede">State benefits keyed to the <b>minimum VA rating</b> you need, with the official ${s.name} source for each. ${s.status==='verified'?'Last verified <b>'+s.last_verified+'</b>.':'Research for this state is still in progress.'}</p>
<div id="state-page" data-state="${s.code}" aria-live="polite"><noscript><div class="card warn">This table loads from <a href="../data/states.json">data/states.json</a>. Turn on JavaScript, or open the JSON file directly.</div></noscript><p class="muted">Loading…</p></div>
</main>
<footer data-site-footer data-verified="${s.last_verified||'2026-10-16'}"></footer>
<script src="../assets/site.js"></script>
<script src="render.js"></script>
</body></html>
`;
let n=0;for(const s of d.states){fs.writeFileSync(path.join(root,'states',s.slug+'.html'),tpl(s));n++}
console.log('wrote',n,'state pages');
