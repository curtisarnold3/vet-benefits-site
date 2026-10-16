// Plain Node test for the combined-ratings math in index.html. No dependencies.
// Run: node test.js
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const start = html.indexOf('function combine(list)');
const end = html.indexOf('\nif(typeof module');
if (start < 0 || end < 0) {
  console.error('FAIL: could not find combine()/module marker in index.html');
  process.exit(1);
}
const src = html.slice(start, end);

const mod = {};
new Function('mod', src + '\nmod.combine=combine;mod.combineAll=combineAll;')(mod);
const combineAll = mod.combineAll;

const cases = [
  { name: '[50, 30]', items: [{pct:50},{pct:30}], want: { exact: 65, rounded: 70 } },
  { name: '[70, 50, 30, 20]', items: [{pct:70},{pct:50},{pct:30},{pct:20}], want: { exact: 92, rounded: 90 } },
  { name: '[50, 20(bi), 10(bi)]', items: [{pct:50},{pct:20,bilateral:true},{pct:10,bilateral:true}],
    want: { bilateralValue: 28, bilateralFactor: 2.8, exact: 66, rounded: 70 } },
  { name: '[90, 50, 30]', items: [{pct:90},{pct:50},{pct:30}], want: { exact: 97, rounded: 100 } },
];

let failed = 0;
for (const c of cases) {
  const got = combineAll(c.items);
  const bad = Object.keys(c.want).filter(k => got[k] !== c.want[k]);
  if (bad.length) {
    failed++;
    console.log('FAIL ' + c.name + ': ' + bad.map(k => k + ' expected ' + c.want[k] + ', got ' + got[k]).join('; '));
  } else {
    console.log('PASS ' + c.name + ': ' + Object.keys(c.want).map(k => k + '=' + got[k]).join(', '));
  }
}
console.log(failed ? failed + ' of ' + cases.length + ' failed' : 'All ' + cases.length + ' passed');
process.exit(failed ? 1 : 0);
