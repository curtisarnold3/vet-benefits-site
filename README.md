# Vet Benefits Guide (vet-benefits-site)

A plain HTML/CSS/JS site for U.S. veterans: the VA claims process step by step, a "where do I start" quiz, a clickable claim-paths flowchart, a rating ladder of what unlocks at each percentage, state benefit pages rendered from one JSON file, the combined-rating calculator, and an interest list for two upcoming offerings.

No framework, no build step. Deploys to **Vercel** (production) and **GitHub Pages** (backup) from the same files.

**Not affiliated with the U.S. Department of Veterans Affairs. General education, not legal advice.**

## Folder map

| Path | What it is |
|---|---|
| `index.html` | Landing page with the "new veteran / already rated" fork |
| `start-here/` | Six-step process page, `flowchart.html`, `quiz.html` |
| `benefits/` | Rating ladder (`index.html`, rendered from `data/benefits.json`) and 16 benefit guides |
| `states/` | `index.html`, `render.js`, and one thin shell per state (`colorado.html`, ...). Tables render from `data/states.json` |
| `calculator/` | Copy of the public VA pay calculator (`index.html`, math inline; `test.js` checks it) |
| `waitlist.html`, `privacy.html`, `get-help.html`, `tools-forms.html`, `glossary.html`, `404.html` | Standalone pages |
| `data/config.js` | **One place for settings**: site name, base URL, Formspree endpoint, analytics, rate dates |
| `data/benefits.json` | Rating ladder content |
| `data/states.json` | Every state benefit row: state, benefit, category, minimum rating, details, source URL, date verified, needs_verification flag |
| `assets/site.css`, `assets/site.js` | Shared styles and the script that injects the header, footer, crisis line, disclaimer, and waitlist boxes |
| `assets/quiz.js`, `assets/flowchart.js` | Quiz logic and SVG flowchart builder |
| `scripts/make-state-pages.js` | Regenerates the 56 state shells from `states.json` |
| `api/waitlist.js` | Optional Vercel serverless function (off by default) |
| `docs/research/` | Research notes with source URLs and verification dates for the federal content |
| `vercel.json`, `.github/workflows/pages.yml`, `.nojekyll` | Deploy config |

## How paths work on both hosts

Every link in the HTML is relative (`../assets/site.css`, `../data/states.json`). `assets/site.js` computes the site root from its own `<script src>` URL, so the header and footer links work at `https://yourdomain.com/` and at `https://curtisarnold3.github.io/vet-benefits-site/` with no change. The only absolute value is `baseUrl` in `data/config.js`, used for canonical tags.

## Deploy to Vercel (production)

1. Push the repo to GitHub (see below).
2. In Vercel: **Add New > Project**, import `vet-benefits-site`.
3. Framework Preset: **Other**. Leave Build Command and Output Directory **empty**. Deploy.
4. You get `https://vet-benefits-site.vercel.app`. Put that (or your custom domain) in `data/config.js` as `baseUrl`.
5. Optional: Vercel CLI from this folder: `vercel` (preview) then `vercel --prod`.

`vercel.json` turns on clean URLs (`/waitlist` serves `waitlist.html`) and adds security headers. `api/waitlist.js` deploys automatically as `/api/waitlist` but is unused until you switch `waitlistMode`.

## Deploy to GitHub Pages (backup/preview)

1. Push to `main`. The workflow in `.github/workflows/pages.yml` runs on every push.
2. In the repo: **Settings > Pages > Build and deployment > Source: GitHub Actions**. (Do this once.)
3. The site appears at `https://curtisarnold3.github.io/vet-benefits-site/`.
4. `.nojekyll` is present so folders and files starting with `_` or `.` are served as-is.

## Custom domain: claimbasecamp.com

The domain is registered at Hostinger (Oct 17, 2026). Vercel serves the site and should also manage the DNS.

1. Attach the domain to the Vercel project (already done): `vercel domains add claimbasecamp.com vet-benefits-site` and the same for `www.claimbasecamp.com`.
2. At Hostinger (hPanel > Domains > claimbasecamp.com > DNS / Nameservers), choose **Change nameservers** and enter `ns1.vercel-dns.com` and `ns2.vercel-dns.com`. Save. This hands DNS to Vercel; Vercel then creates the A/CNAME records itself and issues the HTTPS certificate.
   - Alternative if you want to keep Hostinger DNS: add an `A` record `@` -> `76.76.21.21` and a `CNAME` record `www` -> `cname.vercel-dns.com`.
3. Wait for propagation (minutes to a few hours). Check with `vercel domains inspect claimbasecamp.com`; the Vercel dashboard shows "Valid Configuration" when done.
4. `www.claimbasecamp.com` redirects to the apex automatically once both are attached.
5. `baseUrl` in `data/config.js` is already `https://claimbasecamp.com`.
6. **Do not** set the same custom domain in GitHub Pages. Leave Pages on its `github.io` URL as the backup; two hosts claiming one domain fight.
7. Registrar transfer to Vercel is possible after the 60-day lock on new registrations (after Dec 16, 2026). Not required; nameservers are enough.

## Waitlist (Formspree) setup, about 5 minutes

1. Create a free account at https://formspree.io and click **New form**. Name it "Interest list".
2. Copy the endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `data/config.js` as `formspreeEndpoint`. Commit and push.
4. Submit the form once on the live site. Formspree emails you a confirmation link the first time; click it.
5. In Formspree, turn on **reCAPTCHA off / Honeypot** if asked (the site already sends a `_gotcha` honeypot field; Formspree drops any submission that fills it).
6. Export submissions as CSV from the Formspree dashboard, or connect it to Google Sheets, Mailchimp, etc., in Formspree's Integrations tab.

Free tier: 50 submissions a month. If you outgrow it, upgrade or switch to the Vercel function.

### Switching to the Vercel function later

1. In Vercel: **Settings > Environment Variables**, add `WAITLIST_FORWARD_URL` (a Google Apps Script web app URL, a Zapier/Make webhook, a Formspree endpoint, or your own API). Optional `WAITLIST_SECRET`.
2. In `data/config.js`, set `waitlistMode: "vercel"`. Push.
3. The GitHub Pages copy will show the "form not connected" error in that mode because it has no backend. Keep `formspree` mode if you want both hosts to accept sign-ups.

## Analytics (optional)

Set `plausibleDomain` in `data/config.js` to your domain (for example `"vetbenefitsguide.com"`). The footer and privacy policy update automatically. Leave it empty for no analytics at all.

## Editing content

- **State benefits:** edit `data/states.json`. Each row needs `benefit`, `category`, `min_rating`, `details`, `source_url`, `source_title`, `date_verified`, `needs_verification`, `varies_by_county`. Set the state's `status` to `"verified"` and `last_verified` when done. Then run `node scripts/make-state-pages.js` (only needed if you add a state or change a name).
- **Rating ladder:** edit `data/benefits.json`.
- **Rates (every December 1):** see `MAINTENANCE.md`.
- **Site name / owner line:** `data/config.js`.

## Local preview

```bash
npx serve .
```

Then open http://localhost:3000. (Any static server works; `fetch()` of the JSON files needs http, not `file://`.)

## Tests

```bash
node calculator/test.js
```

Checks the combined-rating math. Add a JSON validity check with `node -e "JSON.parse(require('fs').readFileSync('data/states.json'))"`.
