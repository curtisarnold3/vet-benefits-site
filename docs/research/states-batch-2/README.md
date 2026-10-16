# States batch 2: sources and needs-verification list

Researched Oct 16, 2026. Official sources only (state veterans agencies, revenue, DMV, wildlife, higher-ed, state code). Full per-state narratives with quoted threshold language are in this folder (`XX.md`). Rows in `data/states.json` carry their own `source_url` and `date_verified`.
Totals: 148 benefit rows across 10 jurisdictions; 22 rows flagged needs_verification.


## Alabama (AL)  —  15 rows, 2 flagged, agency: https://va.alabama.gov/

**Sources used:**
- https://www.revenue.alabama.gov/property-tax/homestead-exemptions/  (Alabama Department of Revenue - Homestead Exemptions (Code of Ala. 40-9-19, 40-9-21; Rule 810-4-1-.23))
- https://va.alabama.gov/wp-content/uploads/2026/03/AL-Laws-Affecting-Veterans-Act-2025-37-Draft.pdf  (ADVA - Alabama Laws Affecting Veterans (May 2025), Homes of Veterans/Widows Acquired Under PL 702 (Code of Ala. 40-9-20))
- https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/HB155-enr.pdf  (Alabama Legislature - HB155 (2026 RS) Enrolled; see also HB77 (2026 RS) Enrolled, Disabled Veterans Property Tax Debt-To-Income Ratio Exemption Act)
- https://www.revenue.alabama.gov/license-plates/disabled-veteran/  (Alabama Department of Revenue - Disabled Veteran License Plate (Code of Ala. 40-12-244, 40-12-254, 32-6-130; Rule 810-5-1-.201))
- https://www.revenue.alabama.gov/license-plates/purple-heart/  (Alabama Department of Revenue - Purple Heart License Plate (Code of Ala. 32-6-250, 32-6-254); ADVA Laws Affecting Veterans (May 2025))
- https://www.outdooralabama.com/sites/default/files/Licenses/Recreational%20-%20Current/100Percent_Vet_Hunt.pdf  (Alabama DCNR - 100% and 50% Disabled Military Veteran's Appreciation Hunting License forms (Code of Ala. 9-11-44, 9-11-65.3); DCNR License FAQs)
- https://www.outdooralabama.com/sites/default/files/MRD%20Disabled%20Military%20Veterans%20Saltwater%20License.pdf  (Alabama DCNR Marine Resources - Disabled Military Veteran's Appreciation Annual Saltwater Fishing License (Code of Ala. 9-11-53.1, 9-11-65.3); DCNR License FAQs)
- https://www.alapark.com/ParksForPatriots  (Alabama State Parks - Parks for Patriots (Code of Ala. 9-14-8); park discount pages)
- https://va.alabama.gov/wp-content/uploads/2025/12/GI-Bill-Pamphlet-2024-November-2024.pdf  (ADVA - Alabama G.I. Dependent Scholarship Program pamphlet (November 2024) and Laws Affecting Veterans (May 2025) (Code of Ala. 31-6-1 to 31-6-17))
- https://www.revenue.alabama.gov/individual-corporate/income-exempt-from-alabama-income-taxation/  (Alabama Department of Revenue - Income Exempt from Alabama Income Taxation (Code of Ala. 40-18-20, 40-18-3))
- https://www.personnel.alabama.gov/Faq  (State of Alabama Personnel Department - FAQ, Veteran Preference (Code of Ala. 36-26-15(b)))
- https://va.alabama.gov/state-veterans-homes/  (Alabama Department of Veterans Affairs - State Veterans Homes (Code of Ala. 31-5A-1 to 31-5A-11); Laws Affecting Veterans (May 2025))

**Needs verification (rows flagged on the page):**
- 2026 changes: no annual re-verification for P&T veterans (HB155) and mortgage pre-approval certificate (HB77) (100% P&T)
- State Veterans Homes (skilled nursing and assisted living) and State Veterans Memorial Cemetery (none)

**Could not verify (from the research notes):**
- Act numbers and governor's signature for 2026 HB155 and HB77.** Enrolled texts (passed both chambers, effective Oct 1, 2026) are on alison.legislature.state.al.us; I could not confirm the Act numbers or signing on an official page before the search budget ran out. News coverage (not used as a source) reports enactment on April 17, 2026.
- TDIU and the homestead exemption.** No official Alabama source says whether a TDIU (IU) award satisfies "permanently and totally disabled." The rule accepts "a pension or annuity due to disability from a ... federal governmental agency" or Form PT-PA-1 from two Alabama physicians; counties apply this. Treat as varies by county.
- Current codified text of Code 40-9-20 (SAH homes), 40-9-21, 40-12-254, 9-11-44, 9-11-65.3, 36-26-15.** Relied on ADVA's official statutory summary and agency pages; could not pull the code sections from the Legislature's code database directly.
- Current prices for the lifetime disabled-veteran hunting/fishing licenses and the annual freshwater disabled-veteran fishing license.** The DCNR lifetime packet would not load; the 100%/50% hunting forms and saltwater form are dated 09/2022 (prices $3.30, $15.65, $3.15) and may have been adjusted under 9-11-44's cost-adjustment clause.
- % disabled veteran motor-vehicle ad valorem exemption.** Commonly believed to exist; ALDOR's plate pages say the registrant "is NOT exempt from ad valorem taxes" at every rating tier. Only VA-grant-funded vehicles are ad valorem exempt (40-12-254). A 2021 bill (HB606) to extend it to 100% veterans was not shown as enacted.
- State Veterans Homes admission criteria and co-pays** — current ADVA program page not retrieved.
- Alabama 100% hunting license "100% or more" wording vs. P&T.** The DCNR form says "disability of 100% or more"; whether TDIU counts as "100%" is not stated.
- ADVA "Laws Affecting Veterans" PDF is labeled "Draft" in its filename** (May 2025 edition); it is the current compendium hosted by ADVA. A "Minimal 2024 Update Approved" edition also exists at https://va.alabama.gov/wp-content/uploads/2024/11/AL-Laws-Affecting-Veterans-Minimal-2024-Update-Approved.pdf.

## Alaska (AK)  —  14 rows, 0 flagged, agency: https://veterans.alaska.gov/

**Sources used:**
- https://www.akleg.gov/basis/statutes.asp#29.45.030  (Alaska Statutes 2025, AS 29.45.030(e), (f), (i) Required exemptions)
- https://www.akleg.gov/basis/statutes.asp#29.45.050  (Alaska Statutes 2025, AS 29.45.050(i) Optional exemptions and exclusions)
- https://dmv.alaska.gov/vehicle-services/disability-parking-permits-plates/  (Alaska DMV, Disability Parking Permits & Plates (implements AS 28.10.181(d)))
- https://dmv.alaska.gov/credential-services/military-veteran-services/  (Alaska DMV, Military & Veteran Services)
- https://www.adfg.alaska.gov/index.cfm?adfg=license.military  (ADF&G Military Licenses, Alaska Resident Disabled Veteran License (AS 16.05.400(b)))
- https://dnr.alaska.gov/parks/asp/vetpass.htm  (Alaska State Parks, Disabled Veteran's Annual Camping Pass (AS 41.21.026(d)))
- https://veterans.alaska.gov/benefits/additional-benefits/recreational/  (Alaska Office of Veterans Affairs, Recreational benefits; AMHS Disability Discount Pass Application)
- https://www.akleg.gov/basis/statutes.asp#14.43.085  (Alaska Statutes 2025, AS 14.43.085; UA Regents Policy P05.10.080)
- https://www.akleg.gov/basis/statutes.asp#43.20.012  (Alaska Statutes 2025, AS 43.20.012(a)(1) Limitation on application of chapter; AS 29.45.650 Sales and use tax)
- https://www.akleg.gov/basis/statutes.asp#39.25.159  (Alaska Statutes 2025, AS 39.25.159 Employment preference for military, veterans, and their spouses and children)
- https://www.akleg.gov/basis/statutes.asp#38.05.940  (Alaska Statutes 2025, AS 38.05.940 Land purchase price discount for veterans; DNR Fact Sheet: Veteran's Programs (Sept. 2025))
- https://www.ahfc.us/buy/loan-programs/vets  (Alaska Housing Finance Corporation, Veterans Programs)
- https://dfcs.alaska.gov/alaska-pioneer-homes/admissions/  (Alaska Department of Family and Community Services, Alaska Pioneer Homes Admissions; Alaska Veterans & Pioneers Home page)
- https://pfd.alaska.gov/Eligibility/Absence-Guidelines  (Alaska Department of Revenue, PFD Division, Absence Guidelines and Military Eligibility (AS 43.23.008(a)(3)))

**Could not verify (from the research notes):**
- Tax Division statement of "no personal income tax / no state sales tax":** https://www.tax.alaska.gov/programs/programs/index.aspx rendered only navigation text (both curl and browser). The conclusion rests on AS 43.20.012(a)(1) ("does not apply to (1) an individual") and the absence of any statewide sales tax statute (AS 29.45.650 authorizes only borough/city sales taxes).
- Office of the State Assessor disabled-veteran exemption page:** the URL redirects to the general OSA page (revised 01/15/2026) with no exemption-specific text; the OSA 2025 Alaska Taxable publication was not retrieved.
- Anchorage 2026/2027 Disabled Veteran Exemption application PDF:** muni.org returned "File Not Found" for both the 2025 and 2026 PDF links; the March 15 deadline and $150,000 figure come from the muni.org Exemptions page HTML. Matanuska-Susitna Borough and Kenai Peninsula Borough deadlines were not retrieved (404s on guessed URLs; web-search quota exhausted).
- DAV camping pass validity period is inconsistent across official sources:** statute says "annual"; DNR vetpass page says "2023–2027" pass; DNR fact sheet (Sept 2025) says "issued in odd-numbered years and is good for five years"; OVA says "good for two years." Confirm with the DNR Public Information Center.
- Land discount percentage:** statute and DNR say 25%; OVA page says 20%. Statute controls; OVA page appears outdated.
- ADF&G residency length:** the ADF&G disabled veteran section cites "the Department of Fish and Game's residency definition" without a quoted 12-month figure on that page; an older OVA page (surfaced in search) said "12 consecutive months." Not quoted here because the exact ADF&G definition text was not captured.
- DMV statute vs DMV page:** AS 28.10.181(d) defines the non-mobility disabled veteran plate by reference to AS 29.45.030(i) (50%+, line-of-duty, non-dishonorable, resident); the DMV page states only "combined 50% or more from VA." Whether DMV checks residency or discharge character for the plate was not confirmed.
- –2026 session laws:** I verified the 2025 statute text and the status of HB 169, SB 30, HB 88, and HB 113 (HB 113 in the 34th Legislature is a small-business tax bill, not a veterans bill). I could not run a comprehensive search of 2026 session laws because the web-search quota was exhausted; BASIS statute text ("Alaska Statutes 2025") is the latest official compilation available.
- Pioneer Home cost/VA per diem for veterans and any veteran-specific priority** beyond the 75% bed set-aside were not located on DFCS pages.
- Alaska National Guard tuition assistance** (up to 100% at UA) is stated on the OVA Education page but the Guard education office page with current terms was not fetched.

## Arizona (AZ)  —  15 rows, 2 flagged, agency: https://dvs.az.gov/

**Sources used:**
- https://www.azleg.gov/ars/42/11111.htm  (A.R.S. 42-11111 Exemption for property; widows and widowers; persons with a total and permanent disability; veterans with a disability)
- https://mcassessor.maricopa.gov/page/valuation_relief/  (Maricopa County Assessor: Personal Exemptions and Senior Valuation Relief)
- https://www.azleg.gov/legtext/57leg/2R/laws/0140.htm  (Laws 2026, Chapter 140 (HB 4168) taxation; omnibus; 2026-2027)
- https://azdot.gov/mvd/services/vehicle-services/vehicle-registration/vehicle-license-tax-exemptions  (ADOT MVD: Vehicle License Tax Exemptions (VA Disability); A.R.S. 28-5802)
- https://www.azleg.gov/ars/28/05802.htm  (A.R.S. 28-5802 Vehicle license tax exemption; veterans)
- https://www.azleg.gov/ars/28/02409.htm  (A.R.S. 28-2409 International symbol of access special plates; placard)
- https://www.azgfd.com/hunting/hunt-draw-and-licenses/special-licenses-2/disabled-veteran-license/  (Arizona Game and Fish Department: Disabled Veteran License; A.R.S. 17-333(C))
- https://azstateparks.com/veteran-and-military-discounts  (Arizona State Parks and Trails: Veteran and Military Discounts)
- https://www.azleg.gov/ars/15/01808.htm  (A.R.S. 15-1808 Tuition waiver scholarships; eligibility; definitions)
- https://www.azleg.gov/ars/15/01802.htm  (A.R.S. 15-1802 In-state student status)
- https://azdor.gov/individuals/income-tax-filing-assistance/military-tax-filing  (Arizona Department of Revenue: Military Tax Filing; A.R.S. 43-1022)
- https://www.azleg.gov/ars/38/00492.htm  (A.R.S. 38-492 Preferences)
- https://www.azleg.gov/ars/41/00608-04.htm  (A.R.S. 41-608.04 Military family relief fund; ADVS MFRF page)
- https://dvs.az.gov/services/veteran-homes-mission/asvh-flagstaff  (Arizona Department of Veterans' Services: Arizona State Veteran Homes)

**Needs verification (rows flagged on the page):**
- Arizona Military Family Relief Fund grants (none)
- Arizona State Veteran Homes (Phoenix, Tucson, Yuma, Flagstaff) (none)

**Could not verify (from the research notes):**
- ADVS (dvs.az.gov) pages: every ADVS page returned HTTP 403 / Cloudflare challenge to WebFetch, curl and the browser pane. ADVS benefit summaries, Military Family Relief Fund criteria ($20,000 lifetime cap, $3,000 emergency grant, deployment and residency rules) and State Veteran Home admission rules/costs (70% service-connected VA-paid care) come only from search snippets and are flagged needs_verification.
- A separate ADOT "Disabled Veteran" license plate: the hinted ADOT URL returns "Page not found" and no statute for a dedicated disabled-veteran plate was located. Verified instead: ISA plates/placard for 100% disabled veterans (A.R.S. 28-2409) and the $25 Veteran special plate (A.R.S. 28-2414).
- SB 1050 (2026) free lifetime state park pass for retired or service-disabled resident veterans: passed both chambers (summary dated March 23, 2026) but no chaptered law, no new A.R.S. section and no State Parks page confirms enactment. Not included as a benefit.
- "Free Standard Annual Pass for 100% disabled veterans" at Arizona State Parks: NOT found; the official page offers a free day-use pass only.
- "Disabled veteran pioneer license": not in A.R.S. 17-333; only the age-70/25-year pioneer license and the separate disabled-veteran licenses exist.
- ADOR's own published 2026 exemption figures: the ADOR FAQ gives no dollar amounts; the 2026 figures ($4,873; $39,865/$47,826; LPV cap $36,454 for non-veteran programs) are taken from the Maricopa County Assessor's 2026 form and page. Other counties' forms and deadlines (e.g., Pima, Pinal, Yavapai) were not checked; deadlines vary by county practice (statute: first Monday in January to March 1; Maricopa: Feb. 28 / Sept. 1 with waiver).
- Arizona state HR veterans' preference page (hr.az.gov) was behind a bot check; the statute was used instead.
- Web search budget ran out before confirming the Governor's action on SB 1050 and SB 1155; A.R.S. 17-333 as displayed already contains the 25% reduced-fee tier, so that change appears enacted.
- 

## Arkansas (AR)  —  15 rows, 4 flagged, agency: https://www.veterans.arkansas.gov/

**Sources used:**
- https://www.veterans.arkansas.gov/guide-to-ar-property-taxes  (ADVA Guide to AR Property Taxes (A.C.A. 26-3-306); Acts 407, 876 and 880 of 2025)
- https://www.dfa.arkansas.gov/specialty-plates/details/disabled-veteran-license-plate-free  (DFA Disabled Veteran License Plate - Free; HB1101 (2023) reprint of A.C.A. 27-24-203)
- https://www.arkleg.state.ar.us/assembly/2023/2023R/Bills/HB1086.pdf  (HB1086 (2023) reprint of A.C.A. 27-15-316(b) (bill died; existing text unchanged))
- https://www.dfa.arkansas.gov/office/taxes/excise-tax-administration/sales-use-tax/  (DFA Sales and Use Tax (Gross Receipts Tax Rule GR-34, A.C.A. 26-52-401))
- https://www.agfc.com/resources/licensing/disability-mobility-impaired-65-plus-military-retiree-lifetime-licenses/  (AGFC Disability, Mobility-impaired, 65-Plus, Military Retiree, Lifetime Licenses)
- https://www.arkansas.com/state-parks/accommodations/camping  (Arkansas State Parks - Camping)
- https://adhe.edu/File/Military%20Dependents%20Scholarship%20Rules%20Final_Effective%2010.31.24.pdf  (ADHE Rules Governing the Military Dependents' Scholarship Program (eff. 10/31/2024); SAMS Arkansas Heroes Scholarship)
- https://www.dfa.arkansas.gov/wp-content/uploads/2025_AR1000F_and_AR1000NR_Instructions.pdf  (DFA 2025 AR1000F and AR1000NR Instructions - Military Retirement Exemption (Act 141 of 2017))
- https://sas.arkansas.gov/wp-content/uploads/13-Veterans-Preference-and-Reemployment-5.26.2026.pdf  (Arkansas OPM Policy 13: Veterans Preference and Reemployment (A.C.A. 21-3-301 et seq.))
- https://veterans.arkansas.gov/veteran-homes-1  (ADVA Veteran Homes)
- https://www.arkleg.state.ar.us/Acts/FTPDocument?path=%2FACTS%2F2021R%2FPublic%2F&file=888.pdf&ddBienniumSession=2021%2F2021R  (Act 888 of 2021 (A.C.A. 5-73-311))
- https://www.dfa.arkansas.gov/office/driver-services/licenses-ids-permits/military-veterans/  (DFA Driver Services - Military & Veterans)

**Needs verification (rows flagged on the page):**
- Disabled Veteran license plate (free) (varies)
- Disability-space parking with DV plate (varies)
- Sales tax exemption on VA-financed vehicle and adaptive equipment (varies)
- Arkansas State Parks 50% campsite discount (100% P&T)

**Could not verify (from the research notes):**
- Live text of A.C.A. § 26-3-306 and § 27-24-203 / § 27-15-316** — the official Arkansas Code is on LexisNexis and could not be fetched; relied on enacted Act PDFs and 2023 bill reprints.
- TDIU for the property tax exemption** — statute says "total and permanent"; Saline County says an "unemployable veteran" may qualify. No official statewide statement either way.
- Disabled Veteran plate threshold on DFA's page** — DFA page says "100% Non-Service Connected" (contradicting the 30%/T&P statute) and cites 1949/1979 acts; could not confirm current renewal fee or whether 27-24-203 was amended in 2025.
- Sales tax exemption on VA-financed vehicles/adaptive equipment (GR-34 / A.C.A. § 26-52-401)** — no official copy reached.
- Arkansas State Parks 50% campsite discount and "no plates as proof" rule** — not present on the current arkansas.com/state-parks pages fetched.
- Renaming of the Military Dependents' Scholarship to the "Arkansas Heroes Scholarship"** — SAMS lists HEROES with the same eligibility; could not find the authorizing Act.
- Whether county collectors have all dropped the annual VA letter requirement** after Act 876 of 2025 — Saline County's page still says annual with an October 15 deadline.
- Web search budget was exhausted before I could check a free/reduced driver's license fee for disabled veterans (none found; DFA page requires the regular fee) or any 2026 session changes.
- 

## California (CA)  —  14 rows, 0 flagged, agency: https://www.calvet.ca.gov

**Sources used:**
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=205.5  (Revenue and Taxation Code 205.5; BOE Letter To Assessors 2026/019 (May 22, 2026); BOE Disabled Veterans' Exemption page)
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=295.7  (Vehicle Code 295.7 and 5007; DMV Vehicle Industry Registration Procedures Manual 21.095; DMV form REG 256A)
- https://wildlife.ca.gov/Licensing/Hunting/Reduced-Fee  (CDFW Reduced-Fee Hunting License and Disabled Entitlements)
- https://wildlife.ca.gov/Licensing/Fishing/Reduced-Fee  (CDFW Reduced-Fee Sport Fishing Licenses)
- https://www.parks.ca.gov/?page_id=30958  (California State Parks - Distinguished Veteran Pass; DPR 619 application (Rev. 4/2026))
- https://www.calvet.ca.gov/VetServices/Pages/College-Fee-Waiver.aspx  (CalVet - College Fee Waiver)
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EDC&sectionNum=68075.7  (Education Code 68075.7 and 68075.5)
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=17132.9  (Revenue and Taxation Code 17132.9 and 17132.10; FTB Military page (updated 06/11/2026))
- https://www.ftb.ca.gov/file/personal/filing-situations/military.html  (Franchise Tax Board - Military (Retirement and disability), last updated 06/11/2026)
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=18973.1  (Government Code 18973.1 and 18973.5; CalHR form 1093 (Rev 07/2025); CalCareers Veterans' Information)
- https://www.calvet.ca.gov/HomeLoans/Pages/New-Customer.aspx  (CalVet Home Loans - New Customer (Am I eligible?))
- https://www.calvet.ca.gov/VetHomes/Pages/apply.aspx  (CalVet - Applying for a CalVet Veterans Home)
- https://www.calvet.ca.gov/VetServices/Pages/Business-License-Tax-and-Fee-Waiver.aspx  (CalVet - Business License, Tax and Fee Waiver; Business and Professions Code 16102)

**Could not verify (from the research notes):**
- Disabled Veteran Business Enterprise (DVBE) certification** (10%+ service-connected rating, 51% ownership, California residency; 3% state-contracting goal). Every DGS certification URL I tried returned 404 and the web-search budget was exhausted before I could locate the current DGS page. Not included in the JSON.
- Vehicle Code 9105 statutory text** — leginfo returned a "multiple results" picker (2022 renumbering) and I could not open the section directly; the fee exemption is documented from the DMV procedures manual and REG 256A instead.
- BOE-261-G claim form PDF** — the usual BOE URL returned 404; rules are quoted from the BOE and CalVet exemption pages and the 2026/019 letter. Get the form from the county assessor.
- SB 1407 (2026) final status** — would raise the military retirement exclusion above $20,000; FTB posted analyses but I found no official enactment record. Current law remains $20,000 / $125k–$250k AGI.
- Whether SB 663 (Stats. 2025, Ch. 549) changed anything substantive** in RTC 205.5 beyond what is in the current text (the disaster-destroyed-home rule, electronic VA letters, and preliminary-eligibility determinations are in the current text; I did not read the bill itself).
- A free (not reduced-fee) CDFW license, or a free DMV disabled-person placard tied to a rating** — no official source found; California offers only the reduced-fee licenses and the DV plate/fee exemption described above.
- UC campuses' nonresident tuition exemption policy** — EDC 68075.7 binds only CCC and CSU; UC policy was not checked.
- CalVet Home Loan rates/down-payment specifics by product** — only the general "most ... no down payment" statement was verified.

## Connecticut (CT)  —  15 rows, 3 flagged, agency: https://portal.ct.gov/dva

**Sources used:**
- https://www.cga.ct.gov/current/pub/chap_203.htm  (CGS 12-81(19) and (22), Chapter 203 Property Tax Assessment)
- https://www.cga.ct.gov/2025/ACT/PA/PDF/2025PA-00168-R00HB-07287-PA.PDF  (CGS 12-81(83) as amended by PA 25-2 and PA 25-168 secs. 233-239 (House Bill 7287))
- https://portal.ct.gov/opm/igpp/grants/tax-relief-grants/additional-veterans-tax-relief-program  (OPM Additional Veterans Tax Relief Program; CGS 12-81g; OPM 2026 Homeowners Q&A Booklet (income schedule))
- https://prdext3.cga.ct.gov/2023/rpt/pdf/2023-R-0175.pdf  (OLR Report 2023-R-0175, Veterans' Property Tax Exemptions (Oct. 6, 2023); CGS 12-81f, 12-81h, 12-81jj, 12-81kk)
- https://www.cga.ct.gov/current/pub/chap_248.htm  (CGS 14-254 Parking privileges of disabled veterans; CGS 14-49(o); DMV Disabled Veteran Registration (class code 14) guidance)
- https://portal.ct.gov/deep/state-parks/special-passes---ct-state-parks-and-forests  (DEEP Special Passes - CT State Parks and Forests (updated June 2024); DEEP Passport to the Parks (updated May 2024))
- https://www.cga.ct.gov/current/pub/chap_490.htm  (CGS 26-29b and 26-29, Chapter 490 Fisheries and Game; DEEP 2026 Hunting Guide, Hunting Opportunities for Persons with Disabilities)
- https://www.cga.ct.gov/current/pub/chap_185b.htm  (CGS 10a-77(d), 10a-99(d), 10a-105(e); CSCU Veterans Tuition Waiver page; PA 25-95 secs. 9-13)
- https://portal.ct.gov/-/media/drs/forms/2025/income/2025-ct-1040-instructions_1225.pdf  (DRS 2025 Form CT-1040 Instructions, Line 44 Military Retirement Pay (Rev. 12/25); CGS 12-701(a)(20)(B)(xvi))
- https://www.cga.ct.gov/current/pub/chap_067.htm  (CGS 5-224 Credit for military service on examinations held for original appointments; DAS Military Talent page)
- https://portal.ct.gov/dva/knowledge-base/articles/advocacy-and-assistance/state-veterans-resources/connecticut-wartime-service-medal  (CTDVA Connecticut Wartime Service Medal (page dated May 31, 2024))
- https://portal.ct.gov/dva/knowledge-base/articles/advocacy-and-assistance/state-veterans-resources/bus-passes-for-veterans  (CTDVA Bus Passes for Veterans (page dated Aug. 24, 2026); CTDVA Residential Services; PA 26-21 sec. 8)

**Needs verification (rows flagged on the page):**
- Additional state veterans exemption (income-tested, up to 200%) (none)
- Disabled veteran plates, free registration for 3 vehicles, overtime parking (varies)
- State civil service examination points (5 or 10) (any service-connected)

**Could not verify (from the research notes):**
- A current DMV web page for Disabled Veteran (class 14) plates and the free-registration process; only a 2013 DMV PDF and the statutes were found. In-person-at-Wethersfield requirement may be outdated.
- OPM's veterans-specific income-limit table for the CGS 12-81g additional exemption (the old "Additional Vets Q&A" PDF is 404). The $46,300/$56,500 figures come from OPM's 2026 Homeowners Q&A Booklet, which uses the same CGS 12-81l/12-170aa schedule; confirm with the town assessor.
- How DAS applies the CGS 5-224 5/10 preference points in practice; no DAS page describes the points.
- The OPM-prescribed annual application form for the 12-81(83) full exemption (required by PA 25-168 for assessment years from Oct. 1, 2025) was not located online.
- The CSCU veterans page has not been updated for PA 25-95 (extension-fee waiver, Charter Oak tuition waiver effective July 1, 2025); the newer rule is confirmed only through the OLR summary.
- PA 26-35 DMV original license/ID fee waiver (eff. Oct. 1, 2026) is confirmed only through OLR 2026-R-0083; DMV pages do not yet mention it.
- No official source was found for a Connecticut hunting/fishing license waiver based on VA disability percentage (commonly claimed; the statute 26-28b cited in the hint does not contain one).
- Whether a specific town has adopted any municipal option (TDIU full exemption, 12-81f/jj/kk, two-acre limit, median-value cap, pre-2024 surviving spouses) — varies by municipality.

## Delaware (DE)  —  15 rows, 3 flagged, agency: https://vets.delaware.gov/

**Sources used:**
- https://finance.delaware.gov/disabled-veterans/  (Delaware Department of Finance - Disabled Veterans School Property Tax Credit; 14 Del. C. § 1917(d))
- https://www.newcastlede.gov/182/Tax-Exemptions  (New Castle County Assessment Division - Tax Exemptions (Disability Exemption Application, revised Jan. 6, 2026))
- https://kentcountyde.gov/Residents/Tax-Credits-Exemptions-Assessment  (Kent County Levy Court - Tax Credits & Exemptions (Assessment))
- https://sussexcountyde.gov/disabled-veterans-school-tax-credit  (Sussex County - Disabled Veterans School Tax Credit; Sussex County Ordinance No. 2811 (Nov. 16, 2021))
- https://citizen.dmv.de.gov/DriverServices/military-services/  (Delaware DMV - Military Services; 21 Del. C. § 2164)
- https://www.dmv.de.gov/forms/veh_serv_forms/pdfs/MV549DAV-Application.pdf  (Delaware DMV Form MV549 DAV License Plate Application (Rev. 4/2025); 21 Del. C. § 2138)
- https://dnrec.delaware.gov/fish-wildlife/licenses/exemptions/  (DNREC Division of Fish and Wildlife - License Exemptions; 7 Del. C. § 502(h))
- https://destateparks.com/Know/Passes  (Delaware State Parks - Passes and Permits; 7 Del. C. § 4701(a)(5))
- https://delcode.delaware.gov/title14/c034/sc06/index.html  (14 Del. C. Chapter 34, Subchapter VI - Educational Benefits for Children of Deceased Veterans and Others)
- https://delcode.delaware.gov/title30/c011/sc02/index.html  (30 Del. C. § 1106(b)(3) as amended by 85 Del. Laws c. 426 (SB 219); 2025 Form PIT-RES Instructions, Line 6 Pension Exclusion)
- https://revenuefiles.delaware.gov/2025/PITForms_Instructions/Instructions/PIT-RES_Instructions_2025-01.pdf  (Delaware 2025 Form PIT-RES Instructions; 30 Del. C. § 1105-1106 (Delaware AGI based on federal AGI))
- https://statejobs.delaware.gov/explore/veterans-preference.shtml  (Delaware Employment Link - Veterans' Preference; 29 Del. C. § 5935)
- https://vethome.delaware.gov/application-for-admission/  (Delaware Veterans Home - Application for Admission)
- https://vets.delaware.gov/veterans-trust-fund/  (Delaware Office of Veterans Services - Veterans Trust Fund)
- https://vets.delaware.gov/veterans-benefits/  (Delaware Office of Veterans Services - Veterans Benefits)

**Needs verification (rows flagged on the page):**
- New Castle County disabled veteran county property tax exemption (100% P&T or TDIU)
- VA disability compensation not taxed (any service-connected)
- Paraplegic Veterans Pension ($3,000 per year) (varies)

**Could not verify (from the research notes):**
- New Castle County 100% disabled veteran county tax exemption - current ordinance text, whether any income test applies, sewer/dwelling fee reductions, surviving spouse treatment, and the 2027 deadline. All newcastlede.gov pages and PDFs returned a bot-challenge page; details above come from search-engine excerpts of official county documents (2026 form revised 1/6/2026; county exemption presentation).
- Kent County dollar amounts ($25,000 exemption plus $5,000 for service-connected total disability) - the county code host (eCode360) blocked the fetch; only the county's web page text is confirmed.
- VA disability compensation exemption - no explicit Division of Revenue statement found; relies on Delaware's federal-AGI starting point.
- Paraplegic Veterans Pension - statute citation and application form not located; listed only on the OVS benefits page.
- Educational Benefits for Children of Deceased Veterans - exact 2027 application deadline from the DHEO page (education.delaware.gov blocked the fetch).
- Delaware Veterans Home service-day requirement: web page says 180 days; the August 2026 application packet reportedly says 181.
- "No state sales tax" - true as general knowledge but no Division of Revenue sentence was found to quote; it is not a veteran-specific benefit and is not listed as a benefit row.
- Delaware Tech / Delaware State University veteran programs - these are institutional veteran-services offices, not state tuition waivers; no state-law tuition waiver for disabled veterans or their dependents was found, so none is listed.
- Web search budget was exhausted near the end of research, so the New Castle County ordinance (2022) and the paraplegic pension statute could not be searched further.
- 

## District of Columbia (DC)  —  15 rows, 4 flagged, agency: https://communityaffairs.dc.gov/mova

**Sources used:**
- https://code.dccouncil.gov/us/dc/council/code/sections/47-850  (DC Code § 47-850(a-2) Residential property tax relief — Homestead deduction; OTR Real Property Tax Reliefs page)
- https://otr.cfo.dc.gov/am/page/real-property-tax-reliefs-credits-and-deductions  (OTR: Real Property Tax Reliefs, Credits and Deductions; DC Code § 47-863)
- https://dmv.dc.gov/service/specialty-vehicle-tags  (DC DMV: Specialty Vehicle Tags)
- https://code.dccouncil.gov/us/dc/council/code/sections/50-1501.02a  (DC Code § 50-1501.02a Issuance of veterans' license plates)
- https://code.dccouncil.gov/us/dc/council/code/sections/50-1501.02o  (DC Code § 50-1501.02o Purple Heart award recipient motor vehicle identification tags (D.C. Law 26-114))
- https://dmv.dc.gov/service/apply-for-disability-parking-placards-and-permits  (DC DMV: Apply for Disability Parking Placards and Permits; DDOT Parking for Persons with Disabilities)
- https://dmv.dc.gov/page/veteran-designation-0  (DC DMV: Veteran Designation)
- https://doee.dc.gov/service/get-fishing-license  (DOEE: Get a Fishing License)
- http://files-do-not-link.udc.edu/docs/admissions/Residency%20Policy.pdf  (UDC Policy on Student Residency Classification (Veterans section))
- https://code.dccouncil.gov/us/dc/council/code/sections/49-807  (DC Code § 49-807 National Guard tuition assistance benefits)
- https://code.dccouncil.gov/us/dc/council/code/sections/47-1803.02  (DC Code § 47-1803.02 Gross income — Items included and excluded; OTR 2025 D-40 Booklet)
- https://code.dccouncil.gov/us/dc/council/code/sections/1-607.03  (DC Code § 1-607.03 Veterans preference in employment)
- https://dfhv.dc.gov/page/vetsride  (DFHV: VetsRide)
- https://www.dccourts.gov/node/21741  (DC Courts: Serving Veterans / Veterans Navigator Office (page not found at time of check))

**Needs verification (rows flagged on the page):**
- Senior Citizen or Disabled Property Owner Tax Relief (50%) (none)
- No-fee vehicle tags for P&T veterans (100% P&T)
- DC National Guard Tuition Assistance (none)
- Veterans Navigator Office (DC Superior Court) (none)

**Could not verify (from the research notes):**
- Bill 26-476 status** (100% property tax exemption, removal of income cap) — hearing held July 10, 2026; LIMS blocked (access token). Treat as pending, not law.
- Statutory basis for the DMV "no fee" tag for P&T veterans** — not in DC Code § 50-1501.03; probably in 18 DCMR, which I did not retrieve. The DMV web page is the source relied on.
- Whether VA disability compensation counts as "federal ... government disability payments"** for the 50% Senior/Disabled property tax relief (§ 47-863) and the $10,000 D-2440 income exclusion (§ 47-1803.02(a)(2)(V)). OTR does not say.
- Whether DIC/SBP annuities qualify** for the age-62+ survivor benefit exclusion (D-40 Line 12).
- DC Superior Court Veterans Treatment Court / Veterans Navigator Office** — old page gone; new dccourts.gov page not located.
- DC National Guard Tuition Assistance dollar caps** — dc.ng.mil policy memo returned 403.
- MOVA homestead FAQ (Google Drive) and VetsRide monthly trip limits** — not retrieved; search budget exhausted.
- Any DC fishing license or parks benefit for disabled veterans** — DOEE lists none; treated as not existing.
- WMATA reduced fare for people with disabilities** — WMATA is a regional authority, not a DC agency, and was not researched.
- 

## Florida (FL)  —  15 rows, 2 flagged, agency: https://floridavets.org

**Sources used:**
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.081.html  (F.S. 196.081 Exemption for certain permanently and totally disabled veterans and for surviving spouses of veterans (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.24.html  (F.S. 196.24 Exemption for disabled ex-servicemember or surviving spouse (2026 Florida Statutes); DOR PT-109 (R. 08/24))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.082.html  (F.S. 196.082 Discounts for disabled veterans; surviving spouse carryover (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.101.html  (F.S. 196.101 Exemption for totally and permanently disabled persons; F.S. 196.091 Exemption for disabled veterans confined to wheelchairs (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.084.html  (F.S. 320.084 Free motor vehicle license plate to certain disabled veterans; F.S. 320.0842; F.S. 316.1964; FLHSMV Procedure RS-17 (Rev. 07/26))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.21.html  (F.S. 322.21(7) License fees (2026 Florida Statutes); FLHSMV Military & Veterans Information page)
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0379/Sections/0379.353.html  (F.S. 379.353 Recreational licenses and permits; exemptions from fees and requirements; FWC Persons with Disabilities Resident Hunting/Fishing License page)
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0258/Sections/0258.0145.html  (F.S. 258.0145 Military, law enforcement, and firefighter state park fee discounts; ch. 2016-196 (s. 125.029 and s. 166.0447))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1009/Sections/1009.26.html  (F.S. 1009.26(8), (13), (17) Fee waivers (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0295/Sections/0295.011.html  (F.S. 295.011 Disabled veterans; education (2026 Florida Statutes))
- https://www.floridastudentfinancialaidsg.org/PDF/factsheets/CSDDV.pdf  (FDOE Office of Student Financial Assistance, Scholarships for Children and Spouses of Deceased or Disabled Veterans 2026-27 Fact Sheet; F.S. 295.01-295.04)
- https://floridarevenue.com/faq/Pages/FAQDetails.aspx?FAQID=1466  (Florida Department of Revenue FAQ: Do I have to file a personal income tax return in Florida?)
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0295/Sections/0295.07.html  (F.S. 295.07 Preference in appointment and retention; F.S. 295.08; F.S. 295.085 (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0455/Sections/0455.213.html  (F.S. 455.213(13) General licensing provisions; F.S. 205.055 Exemptions; veterans, spouses of veterans (2026 Florida Statutes))
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0296/Sections/0296.36.html  (F.S. 296.36 Eligibility and priority of admittance; F.S. 295.17 Identification cards (2026 Florida Statutes))

**Needs verification (rows flagged on the page):**
- Total homestead exemption for wheelchair-using, quadriplegic, paraplegic or legally blind veterans (varies)
- State Veterans' Nursing Homes and FDVA 100% P&T identification card (none)

**Could not verify (from the research notes):**
- floridavets.org (FDVA) content — every page and the FDVA Benefits Guide PDF returned 403. FDVA-specific program details (veterans' homes locations and application packets, ID-card application process, FDVA's own benefit summaries) are therefore cited to statute only.
- floridastateparks.org — blocked. The in-person-at-ranger-station issuance rule and exact documentation for the free lifetime pass come only from search snippets of that site; the statute (258.0145) is the cited source.
- Toll exemption for DV / DV-wheelchair plates — NOT found in F.S. 338.155 or on FDOT's Toll Permit page. Treated as not existing.
- DMS/People First veterans' preference web page — returned only navigation; points and categories are cited to statute.
- Current indexed household-income limit for the s. 196.101(2) paraplegic/wheelchair/legally-blind exemption (base $14,500, CPI-adjusted each January 1) — current figure not retrieved.
- Whether a TDIU rating with VA "permanent and total" designation is accepted for s. 196.081 — no official Florida source addresses TDIU by name.
- Web-search budget ran out before I could confirm (a) a current DMS page on veterans' preference and (b) a second county property appraiser page for cross-checking county practices.

## Georgia (GA)  —  15 rows, 2 flagged, agency: https://veterans.georgia.gov/

**Sources used:**
- https://veterans.georgia.gov/disabled-veteran-homestead-tax-exemption  (GDVS - Disabled Veteran Homestead Tax Exemption (O.C.G.A. 48-5-48); DOR Property Tax Homestead Exemptions)
- https://veterans.georgia.gov/book/export/html/1506  (GDVS - Tax Exemptions: Ad Valorem Tax on Vehicles; DOR Form MV-30 (Rev. 06/2025))
- https://veterans.georgia.gov/node/1556  (GDVS - License Plates: Disabled Veteran; DOR Military & Veteran License Plates)
- https://dor.georgia.gov/mv-30-georgians-veteran-affidavit-relief-state-and-local-title-ad-valorem-tax-fees  (DOR Form MV-30 Georgia Veteran's Affidavit for Relief of State and Local Title Ad Valorem Tax Fees)
- https://dds.georgia.gov/node/31701  (DDS - Veterans License Process Simplified (Feb. 1, 2022); GDVS - Veteran Driver's License)
- https://georgiawildlife.com/licenses-permits-passes/veterans  (Georgia DNR WRD - One-Time Veterans Hunting & Fishing License)
- https://georgiawildlife.com/licenses-permits-passes/disability  (Georgia DNR WRD - Resident Disability Hunting & Fishing License Options)
- https://gastateparks.org/Reservations  (Georgia State Parks - Reservations & Discounts; Georgia State Parks - ParkPass)
- https://veterans.georgia.gov/node/18001  (GDVS - Business Certificate of Exemption)
- https://doas.ga.gov/assets/Human Resources Administration/State Personnel Board Rules/478-1-.18 Veterans Preference  11.28.17.pdf  (State Personnel Board Rule 478-1-.18 Veterans' Preference (rev. 11/28/2017), citing O.C.G.A. 45-2-20 to 45-2-22)
- https://dor.georgia.gov/retirement-income-exclusion  (DOR - Retirement Income Exclusion; HB 266 (2025) as passed House and Senate, O.C.G.A. 48-7-27(a)(5.1))
- https://www.usg.edu/student_affairs/military/services_and_benefits  (University System of Georgia - Military Services and Benefits (Policy 7.3.4.1))
- https://gafutures.org/hope-state-aid-programs/scholarships-grants/hero/eligibility/  (GSFC GAfutures - Georgia HERO Scholarship Eligibility and Award Amounts)
- https://veterans.georgia.gov/node/2076  (GDVS - State War Veterans Homes: Eligibility Criteria)
- https://www.gavectr.org/  (Georgia VECTR Center)

**Needs verification (rows flagged on the page):**
- 25% State Parks Discount for Disabled Veterans (varies)
- In-State Tuition Waiver for Recently Separated Veterans and Dependents (USG) (none)

**Could not verify (from the research notes):**
- statewide homestead amount on a DOR page.** DOR and GDVS still show "$121,812 for 2025." VA's FY2026 SAH cap is $126,526 and DeKalb County's 2026 sheet uses $126,526, so that is almost certainly the 2026 figure, but no DOR page shows it yet.
- Parking privileges of the Disabled Veteran plate.** Not stated on any GDVS, DOR, or DDS page found. Only a non-official code mirror of O.C.G.A. 40-2-74.1(d) describes parking in disabled spaces without a permit.
- Exact current text of USG Board of Regents Policy 7.3.4.1** (in-state tuition for recently separated veterans / covered individuals). The policy manual redirects to usg.policystat.com, which could not be read; only the USG summary page, a 2021 Chancellor's letter reference, and a USG-institution form were available.
- Minimum VA rating for the GDVS "Certificate of Eligibility" card** used for the 25% state parks discount — not stated on the parks pages.
- HB 632 (2025-2026)** clarifying O.C.G.A. 43-12-1 business exemption eligibility — enactment not confirmed.
- SB 129, HR 400, HB 52** (property tax expansions for disabled veterans / surviving spouses, possible November 2026 ballot) — final legislative status not confirmed; none is in effect now.
- VA disability compensation not taxed by Georgia** — no Georgia page states it; inferred from Georgia's use of federal AGI.
- "Totally and permanently" vs "100%" for the vehicle ad valorem exemption** — GDVS and DOR wording differ; county tag offices decide.
- Discounted veterans lifetime license price** — DNR lifetime page returned 404; GDVS states 20% off (ages 16-49) with no price.
- DOR has not yet published guidance** implementing HB 266's $65,000 military exclusion for TY 2027.
- 
