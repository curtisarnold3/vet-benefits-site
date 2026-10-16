/* ONE place to change site-wide settings. Loaded by assets/site.js on every page. */
window.SITE_CONFIG = {
  siteName: "Vet Benefits Guide",            // working title; change here and it updates every page
  tagline: "Plain-language help with VA claims and the benefits you earned",
  ownerLine: "Built by Curt Arnold, U.S. Air Force veteran",

  /* Canonical base URL. Used ONLY for canonical/og tags. All page links are relative, so the
     site works at a root domain (Vercel) and under /vet-benefits-site/ (GitHub Pages) with no change. */
  baseUrl: "https://vet-benefits-site.vercel.app",

  /* Waitlist form handler. Mode "formspree" posts straight to Formspree from the browser (works on
     Vercel AND GitHub Pages). Mode "vercel" posts to /api/waitlist (Vercel only; see README). */
  waitlistMode: "formspree",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",   // <- paste your Formspree endpoint here
  vercelEndpoint: "/api/waitlist",

  /* Privacy-friendly analytics. Leave empty to load nothing. Set to your domain to enable Plausible. */
  plausibleDomain: "",

  /* Rates and verification dates shown in footers and on the calculator page. Update every December. */
  ratesEffective: "December 1, 2025",
  ratesYearLabel: "2026",
  ratesVerified: "2026-10-13",
  contentVerified: "2026-10-16"
};
