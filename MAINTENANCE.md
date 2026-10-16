# Maintenance checklist

## Every December 1 (VA compensation COLA)
VA posts new rates at https://www.va.gov/disability/compensation-rates/veteran-rates/ , usually the first week of December. SSA announces the COLA percentage in mid-October (3.6% was announced Oct 14, 2026 for Dec 1, 2026).

1. `calculator/index.html`: update `R10`, `R20`, and every row of the `T` table from the VA page. Update the SOURCE comment date and the "checked" date in the "How the math works" card. Run `node calculator/test.js`.
2. `data/config.js`: update `ratesEffective`, `ratesYearLabel`, `ratesVerified`.
3. `data/benefits.json`: dollar figures in tiers t10 ($180.42 / $356.66), t100 ($3,938.58, +$219.59, +$352.45).
4. `benefits/dependents.html`, `benefits/smc.html`, `benefits/tdiu.html`: the rate tables and the "$3,938.58" mentions. SMC rates: https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/
5. `start-here/` and `benefits/` footers: the `data-verified` date on any page you re-check.
6. Also push the same rate update to the standalone `va-calculator` repo.

## Other annual dates
| When | What changes | Where |
|---|---|---|
| Jan 1 | VA health care copays | `benefits/health-care.html` (https://www.va.gov/health-care/copay-rates/) |
| Jan 1 to 31 | CRDP/CRSC open season | `benefits/crdp-crsc.html` |
| Aug 1 | Post-9/11 GI Bill private-school cap and rates | `benefits/gi-bill.html` |
| Oct 1 | Chapter 35 monthly rates; VR&E subsistence; SAH/SHA/TRA grant maximums; auto allowance | `benefits/chapter-35.html`, `benefits/vre.html`, `benefits/housing-auto-grants.html`, `data/benefits.json` (tpt tier) |
| Oct (mid) | SSA COLA announcement | note for the December update |
| Jul 24-ish | VA travel pay mileage/deductible (changes irregularly) | `benefits/commissary-travel.html` |

## State pages (once a year, or when a legislature adjourns)
Most state legislatures adjourn between April and June; property tax and plate changes usually take effect Jan 1 or Jul 1.
1. For each state in `data/states.json`, open every `source_url`. If the page moved, fix the URL. If a threshold or amount changed, update `details` and `min_rating`.
2. Update `date_verified` on each row you checked and `last_verified` on the state.
3. Clear `needs_verification` only when you have confirmed the fact on an official page.
4. Re-run `node scripts/make-state-pages.js` if you renamed anything, then `node -e "JSON.parse(require('fs').readFileSync('data/states.json'))"`.

## Forms (twice a year)
Open `tools-forms.html` and click each link. VA.gov form pages show "Form revision date"; update the Current version column if it changed. Watch 21-526EZ, 21-0966, 20-0995, 20-0996, 10182, 21-22/21-22a especially.

## Legal and status checks (quarterly)
- Accreditation status: when you become accredited, update `get-help.html`, `waitlist.html`, the footer text in `assets/site.js`, and `privacy.html`.
- Pending bills flagged on the site: Major Richard Star Act (`benefits/crdp-crsc.html`), GUARD VA Benefits Act (`get-help.html`), Veterans' Compensation COLA Act, PCAFC proposed rule (`benefits/caregivers.html`), Colorado SB on dependents' tuition (`data/states.json`). Search congress.gov / leg.colorado.gov and update or remove the "Needs verification" badge.
- Formspree submission count against the free-tier limit.

## Deploy sanity check after any change
1. `npx serve .` and click through landing, quiz result, flowchart, a state page, the ladder, the calculator.
2. Push to `main`; confirm the GitHub Pages action is green and the Vercel deployment is "Ready."
3. Open both URLs on a phone. Check the footer waitlist box submits.
