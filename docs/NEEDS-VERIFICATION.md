# Needs verification: all flagged rows

Generated 2026-10-18 from `data/states.json` and `docs/research/federal-*.md`. **171 state and territory rows** are flagged `needs_verification: true` out of 758 total rows in 56 jurisdictions, plus the federal items at the bottom. A first pass on the recurring TDIU and VA-compensation rows is in `docs/research/flag-checks-2026-10-18.md`.

**How to clear a flag:** confirm the row on the cited official page (or find a better one), fix `details` and `source_url` if needed, then set `needs_verification` to `false` in `data/states.json` and run `node scripts/make-state-pages.js`. Each state's full narrative with quoted statute language and its "Could not verify" list is in `docs/research/states-batch-N/XX.md`. Many sites (mass.gov, NY state sites, dvs.virginia.gov, governor.cnmi.gov) block scripted fetches but load in a normal browser.

**Counts by state:** AL 2, AK 0, AS 8, AZ 2, AR 4, CA 0, CO 1, CT 3, DE 3, DC 4, FL 2, GA 2, GU 7, HI 5, ID 4, IL 2, IN 4, IA 3, KS 2, KY 1, LA 3, ME 2, MD 1, MA 2, MI 3, MN 5, MS 2, MO 3, MT 7, NE 1, NV 3, NH 2, NJ 2, NM 3, NY 1, NC 5, ND 3, MP 4, OH 1, OK 5, OR 4, PA 3, PR 7, RI 1, SC 4, SD 1, TN 3, TX 1, VI 6, UT 5, VT 4, VA 2, WA 2, WV 7, WI 2, WY 2


## Alabama (AL) - 2 flagged

- **2026 changes: no annual re-verification for P&T veterans (HB155) and mortgage pre-approval certificate (HB77)** (property_tax, min rating: 100% P&T)  
  Source: [Alabama Legislature - HB155 (2026 RS) Enrolled; see also HB77 (2026 RS) Enrolled, Disabled Veterans Property Tax Debt-To-Income Ratio Exemption Act](https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/HB155-enr.pdf)  
  Row says: Effective October 1, 2026, a veteran the VA has found permanently and totally disabled who holds the homestead exemption no longer has to re-claim or re-verify it each year; the release ends at the veteran's death or when a new homestead is established. Also effective October 1, 2026, a veteran with a VA 100% service-connected P&T rating can get a tentative certificate of exemption from the county assessing official within 20 days, before buying a home, and lenders may not count homestead property tax in the debt-to-income ratio. Both bills passed the Legislature as enrolled; the act numbers and signing record were not confirmed on an official page.
- **State Veterans Homes (skilled nursing and assisted living) and State Veterans Memorial Cemetery** (other, min rating: none)  
  Source: [Alabama Department of Veterans Affairs - State Veterans Homes (Code of Ala. 31-5A-1 to 31-5A-11); Laws Affecting Veterans (May 2025)](https://va.alabama.gov/state-veterans-homes/)  
  Row says: ADVA runs five State Veterans Homes (Alexander City, Pell City, Bay Minette, Huntsville, and a fifth home) offering skilled nursing and some assisted living care to eligible Alabama veterans, and the Alabama State Veterans Memorial Cemetery at Spanish Fort. Apply through your county veterans service officer or directly with the home of your choice. Current admission rules (service, discharge, residency) and daily co-pay amounts were not available on a current ADVA page and should be confirmed with ADVA at 334-242-5077.

## American Samoa (AS) - 8 flagged

- **Territorial veterans office (claims help and advocacy)** (other, min rating: none)  
  Source: [American Samoa Government Cabinet directory: Veterans and Military Affairs Office](https://www.americansamoa.gov/directors)  
  Row says: The American Samoa Government lists a Veterans and Military Affairs Office at the Veterans Building in Lions Park, Pago Pago, phone 684-699-2910. Third-party directories describe claims assistance, benefits information, and appeals help, but the official page lists only contact details, so the exact services are not confirmed. Call before visiting.
- **Territorial income tax treatment of VA disability and military pay** (income_tax, min rating: none)  
  Source: [VA News: Unlocking Veteran tax exemptions across states and U.S. territories](https://news.va.gov/139592/unlocking-veteran-tax-exemptions-across-states-and-u-s-territories/)  
  Row says: Residents pay income tax to the American Samoa Tax Office rather than the IRS. VA News states disability retirement pay for service-related injuries is not taxable, and military and retired pay is taxable. IRS Pub. 570 says U.S. government pay may still need to be reported on a U.S. return. The territorial tax code was not found, so confirm with the Treasury Tax Office.
- **Federal tax treatment of veterans' benefits** (income_tax, min rating: none)  
  Source: [IRS Publication 570, Tax Guide for Individuals With Income From U.S. Territories](https://www.irs.gov/publications/p570)  
  Row says: IRS Publication 3 lists 'Veterans' benefits (including VA rehabilitation payments)' among items that are not earned income for the EIC, which is consistent with VA benefits not being taxable income. Bona fide residents of American Samoa generally exclude American Samoa-source income on Form 4563, but pay from the U.S. Government for services in American Samoa must be included. Ask a tax preparer about your case.
- **Property tax exemption for disabled veterans** (property_tax, min rating: varies)  
  Source: [American Samoa Government Cabinet directory (Treasury and Veterans offices)](https://www.americansamoa.gov/directors)  
  Row says: No American Samoa veterans property tax exemption was found in any official source, and the territory's land is largely communally owned. It may not exist. Ask the Treasury Tax Office and the Veterans and Military Affairs Office whether any exemption applies.
- **Vehicle registration fee waiver or disabled veteran plates** (vehicle, min rating: varies)  
  Source: [American Samoa Government Cabinet directory](https://www.americansamoa.gov/directors)  
  Row says: No territorial waiver or special plate for disabled veterans was found in an official source. The Department of Public Safety handles vehicle registration; its policy for veterans could not be confirmed. Ask the Veterans and Military Affairs Office.
- **Hunting, fishing licenses and park passes** (recreation, min rating: varies)  
  Source: [American Samoa Government Cabinet directory](https://www.americansamoa.gov/directors)  
  Row says: No veteran-specific hunting or fishing license or park pass benefit was found. Marine and Wildlife Resources and Parks and Recreation are the offices that would administer any such benefit; confirm directly.
- **Territorial government employment preference for veterans** (employment, min rating: varies)  
  Source: [American Samoa Government Cabinet directory (Human Resources)](https://www.americansamoa.gov/directors)  
  Row says: A territorial veterans hiring preference may exist through the Department of Human Resources, but no official page confirming points or eligibility was found. Ask Human Resources before assuming any preference applies.
- **Home loan availability (VA guaranteed loans)** (other, min rating: any service-connected)  
  Source: [GAO: Veterans' Benefits (1992), cited from search results; current status unverified](https://www.gao.gov/assets/220/217035.pdf)  
  Row says: A 1992 GAO report found VA home loans were unavailable in American Samoa because of communal land issues. Current status was not confirmed from an official VA page, so ask the VA regional office before planning around it.

## Arizona (AZ) - 2 flagged

- **Arizona Military Family Relief Fund grants** (other, min rating: none)  
  Source: [A.R.S. 41-608.04 Military family relief fund; ADVS MFRF page](https://www.azleg.gov/ars/41/00608-04.htm)  
  Row says: The Military Family Relief Fund, run by the Arizona Department of Veterans' Services, gives financial hardship grants to service members, veterans and families with Arizona ties; the statute lets a subcommittee approve grants of up to $3,000 and the fund runs through December 31, 2031. ADVS materials describe deployment, Arizona residency and honorable-conditions discharge requirements and a $20,000 lifetime cap, but we could not open the ADVS program page to confirm current criteria. Apply online through ADVS (dvs.az.gov) with your DD214, bank statements, pay stubs and the bills you need help with.
- **Arizona State Veteran Homes (Phoenix, Tucson, Yuma, Flagstaff)** (other, min rating: none)  
  Source: [Arizona Department of Veterans' Services: Arizona State Veteran Homes](https://dvs.az.gov/services/veteran-homes-mission/asvh-flagstaff)  
  Row says: ADVS operates skilled-nursing veteran homes in Phoenix, Tucson, Yuma and Flagstaff for veterans, spouses and Gold Star family members who need skilled nursing care. ADVS material indicates the VA pays the full cost for veterans rated 70% or more service-connected. We could not open the ADVS admissions pages during this review, so confirm eligibility, cost and the application packet with ADVS admissions (dvs.az.gov).

## Arkansas (AR) - 4 flagged

- **Disabled Veteran license plate (free)** (vehicle, min rating: varies)  
  Source: [DFA Disabled Veteran License Plate - Free; HB1101 (2023) reprint of A.C.A. 27-24-203](https://www.dfa.arkansas.gov/specialty-plates/details/disabled-veteran-license-plate-free)  
  Row says: First Disabled Veteran plate is free; one additional plate costs $4.00, and one plate can be reissued to a surviving spouse for $4.00. By statute (A.C.A. 27-24-203) a disabled veteran is an Arkansas resident rated at least 30% service-connected, or totally and permanently disabled, who owns a vehicle used by or for them (a 2023 bill to lower it to 10% died). DFA's page wording is inconsistent ('100% Non-Service Connected'), so bring your VA letter to the Specialty License Plate Office. Renewal fee not stated on the DFA page.
- **Disability-space parking with DV plate** (vehicle, min rating: varies)  
  Source: [HB1086 (2023) reprint of A.C.A. 27-15-316(b) (bill died; existing text unchanged)](https://www.arkleg.state.ar.us/assembly/2023/2023R/Bills/HB1086.pdf)  
  Row says: A vehicle displaying an Arkansas Disabled Veteran special plate (or another state's DV plate) may park in spaces reserved for persons with disabilities, but only while the vehicle is actually transporting the disabled veteran (A.C.A. 27-15-316(b)). No separate application; the plate itself is the permit. Threshold follows the plate (30% or P&T).
- **Sales tax exemption on VA-financed vehicle and adaptive equipment** (vehicle, min rating: varies)  
  Source: [DFA Sales and Use Tax (Gross Receipts Tax Rule GR-34, A.C.A. 26-52-401)](https://www.dfa.arkansas.gov/office/taxes/excise-tax-administration/sales-use-tax/)  
  Row says: Arkansas gross receipts tax rule GR-34 exempts a highway vehicle and adaptive equipment bought by a disabled veteran with VA financial aid under 38 U.S.C. 1901-1905 (the VA automobile grant), proven by a VA letter; a separate exemption covers one automobile every two years for a veteran blinded by service-connected injury. Claim it at the DFA revenue office when registering. We could not reach the official rule text on a DFA page.
- **Arkansas State Parks 50% campsite discount** (recreation, min rating: 100% P&T)  
  Source: [Arkansas State Parks - Camping](https://www.arkansas.com/state-parks/accommodations/camping)  
  Row says: Older official parks text gave U.S. citizens with 100% total and permanent disability a 50% discount on campsite fees year-round (not on cabins, yurts or other rental facilities), with proof being a VA letter dated within the last two years; the parks FAQ said DV plates and placards are not accepted as proof. We could not find this language on the current arkansas.com/state-parks site, so call the park (888-287-2757) before relying on it. Arkansas state parks charge no general entrance fee.

## Colorado (CO) - 1 flagged

- **Free tuition and room and board for dependents of Guard members killed or permanently disabled on duty** (education, min rating: varies)  
  Source: [C.R.S. 23-3.3-205 (Colorado Revised Statutes 2024, Title 23)](https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-23.pdf)  
  Row says: A dependent of a Colorado National Guard member who died or was permanently disabled on state active duty, federal active duty, or authorized training can attend a Colorado state college free of tuition and room and board for a first bachelor's degree or certificate. The student must keep a 2.5 GPA and the benefit ends six years after enrollment. This is NOT a general benefit for children of 100% disabled veterans; a 2026 bill to create one (SB26-067) failed. Apply through the school's financial aid office.

## Connecticut (CT) - 3 flagged

- **Additional state veterans exemption (income-tested, up to 200%)** (property_tax, min rating: none)  
  Source: [OPM Additional Veterans Tax Relief Program; CGS 12-81g; OPM 2026 Homeowners Q&A Booklet (income schedule)](https://portal.ct.gov/opm/igpp/grants/tax-relief-grants/additional-veterans-tax-relief-program)  
  Row says: If you already get a 12-81(19), (20), (21) or (22) exemption and your income is at or below the OPM limit, the state doubles your exemption (three times, at town option, for 100%-rated veterans); veterans over the limit get a 50% add-on. For 2025 income the OPM schedule is $46,300 unmarried and $56,500 married; for 100%-rated veterans the statutory limit is $18,000 unmarried / $21,000 married ($21,000 / $24,000 under the local 3x option). VA disability payments do not count as income. File Form M-59a with the town assessor between February 1 and October 1, then every two years.
- **Disabled veteran plates, free registration for 3 vehicles, overtime parking** (vehicle, min rating: varies)  
  Source: [CGS 14-254 Parking privileges of disabled veterans; CGS 14-49(o); DMV Disabled Veteran Registration (class code 14) guidance](https://www.cga.ct.gov/current/pub/chap_248.htm)  
  Row says: No registration fee for up to three passenger, camper, or combination vehicles per year, no-charge Disabled Veteran plates, and a card allowing overtime parking up to 24 hours (not accessible spaces). You must be a Connecticut resident with wartime service AND a VA-certified service-connected amputation or loss of use of an arm or leg, blindness, paraplegia, hemiplegia, or traumatic brain injury; percentage rating alone does not qualify. Bring a VA letter on letterhead to DMV (DMV guidance says initial issuance is in person at Wethersfield); title, lien, and clean-air fees still apply. A surviving spouse keeps the plates free for life or until remarriage.
- **State civil service examination points (5 or 10)** (employment, min rating: any service-connected)  
  Source: [CGS 5-224 Credit for military service on examinations held for original appointments; DAS Military Talent page](https://www.cga.ct.gov/current/pub/chap_067.htm)  
  Row says: On a scored state examination for original appointment, wartime veterans who pass get 5 points added; veterans eligible for VA disability compensation or pension get 10 points, as do spouses who cannot work because of the veteran's disability and unmarried surviving spouses. Veterans with a campaign badge or expeditionary medal, and service members in the last year of an enlistment, get 5 points. Claim veteran status when applying through the DAS online job system and supply your DD-214 and VA letter. DAS now fills most jobs without written exams, so ask DAS how the points apply to a given posting.

## Delaware (DE) - 3 flagged

- **New Castle County disabled veteran county property tax exemption** (property_tax, min rating: 100% P&T or TDIU)  
  Source: [New Castle County Assessment Division - Tax Exemptions (Disability Exemption Application, revised Jan. 6, 2026)](https://www.newcastlede.gov/182/Tax-Exemptions)  
  Row says: New Castle County reduces the county property tax (and crossing guard tax) on a principal residence to zero for veterans who receive VA compensation for a service-connected permanent and total disability based on individual unemployability or a 100% rating, with no residency waiting period. Apply to the New Castle County Assessment Division (302-395-5520, assessment@newcastlede.gov) using the county Disability Exemption form; the 2026 form listed a June 1, 2026 filing deadline. County pages blocked our automated reader, so confirm current amounts, income rules and the deadline with the county.
- **VA disability compensation not taxed** (income_tax, min rating: any service-connected)  
  Source: [Delaware 2025 Form PIT-RES Instructions; 30 Del. C. § 1105-1106 (Delaware AGI based on federal AGI)](https://revenuefiles.delaware.gov/2025/PITForms_Instructions/Instructions/PIT-RES_Instructions_2025-01.pdf)  
  Row says: Delaware taxable income starts from federal adjusted gross income, and VA disability compensation, DIC and VA pension are excluded from federal gross income, so they are not taxed by Delaware. The Delaware Division of Revenue does not publish a page that says this in plain words; the PIT-RES instructions only address military pay and the pension exclusion. Nothing to apply for; simply do not report VA compensation as income.
- **Paraplegic Veterans Pension ($3,000 per year)** (other, min rating: varies)  
  Source: [Delaware Office of Veterans Services - Veterans Benefits](https://vets.delaware.gov/veterans-benefits/)  
  Row says: Delaware pays a state pension of $3,000 per year in equal monthly installments to veterans who are paraplegic and fully disabled due to service during a period of war. This is a unique Delaware benefit listed on the Office of Veterans Services benefits page; contact the Office of Veterans Services (800-344-9900) to apply. We could not locate the application form or the statute section online, so confirm documentation requirements with the office.

## District of Columbia (DC) - 4 flagged

- **Senior Citizen or Disabled Property Owner Tax Relief (50%)** (property_tax, min rating: none)  
  Source: [OTR: Real Property Tax Reliefs, Credits and Deductions; DC Code § 47-863](https://otr.cfo.dc.gov/am/page/real-property-tax-reliefs-credits-and-deductions)  
  Row says: Cuts the property tax bill by 50% for an owner who is 65 or older, or who has an SSA permanent and total disability finding, gets SSI/SSDI, railroad disability, or federal or DC government disability payments, owns at least 50% of the home, and has household federal AGI under $163,500 for tax year 2026. This is a general DC program, not a veteran program, and it cannot be combined with the $445,000 veterans deduction. Apply through OTR (MyTax.DC.gov) once eligible. OTR does not say whether VA compensation alone counts as a federal disability payment.
- **No-fee vehicle tags for P&T veterans** (vehicle, min rating: 100% P&T)  
  Source: [DC DMV: Specialty Vehicle Tags](https://dmv.dc.gov/service/specialty-vehicle-tags)  
  Row says: A veteran with a service-connected permanent and total disability can get one set of tags (DAV, Veteran, or standard passenger) at no fee for one non-commercial vehicle. Only the annual registration fee is waived. Bring a VA letter that says 'Total and Permanent' to a DC DMV service center. The statutory basis was not located in the DC Code; the DMV web page is the source.
- **DC National Guard Tuition Assistance** (education, min rating: none)  
  Source: [DC Code § 49-807 National Guard tuition assistance benefits](https://code.dccouncil.gov/us/dc/council/code/sections/49-807)  
  Row says: DC funds a tuition assistance program for members and new recruits of the DC National Guard who are DC residents. Dollar caps, school limits, and service obligations are set by DC National Guard policy memos, which could not be retrieved. Apply through the DC National Guard education office.
- **Veterans Navigator Office (DC Superior Court)** (other, min rating: none)  
  Source: [DC Courts: Serving Veterans / Veterans Navigator Office (page not found at time of check) (original page moved; DC Courts home page linked)](https://www.dccourts.gov/)  
  Row says: Search results show a DC Superior Court Veterans Navigator Office (Moultrie Courthouse, Room 120B, 202-879-1259) that links court-involved veterans to legal aid, housing, treatment, employment, and VA benefits help in criminal, civil, family, and landlord-tenant cases. The page now returns 'Page Not Found' after the courts' website redesign, and no formal DC Veterans Treatment Court docket could be confirmed on dccourts.gov.

## Florida (FL) - 2 flagged

- **Total homestead exemption for wheelchair-using, quadriplegic, paraplegic or legally blind veterans** (property_tax, min rating: varies)  
  Source: [F.S. 196.101 Exemption for totally and permanently disabled persons; F.S. 196.091 Exemption for disabled veterans confined to wheelchairs (2026 Florida Statutes)](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.101.html)  
  Row says: Two separate total exemptions: (1) F.S. 196.091 exempts the homestead of an honorably discharged veteran with a service-connected total disability who received VA specially adapted housing assistance and must use a wheelchair; (2) F.S. 196.101 exempts the homestead of any quadriplegic, and of any paraplegic, hemiplegic, wheelchair-dependent or legally blind totally and permanently disabled person subject to a household income cap (statutory base $14,500, indexed yearly; VA and Social Security benefits count as income). Proof is a VA certificate or Form DR-416 from two Florida doctors, filed with the county property appraiser by March 1.
- **State Veterans' Nursing Homes and FDVA 100% P&T identification card** (other, min rating: none)  
  Source: [F.S. 296.36 Eligibility and priority of admittance; F.S. 295.17 Identification cards (2026 Florida Statutes)](http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0296/Sections/0296.36.html)  
  Row says: FDVA operates state veterans' nursing homes; to be admitted you must be a veteran (or a veteran's spouse or surviving spouse), need nursing home care, be a Florida resident when you apply, owe FDVA nothing from a prior stay, have applied for available financial assistance, and be approved for care by the VA. Priority goes first to Florida-resident veterans, then to those whose service-connected disability is the reason care is needed. Separately, FDVA issues an identification card to Florida permanent residents rated 100 percent service-connected permanent and total, which serves as proof for most state benefits (but not the property tax exemptions). Apply through FDVA; FDVA's web pages could not be fetched, so confirm current application packets at floridavets.org.

## Georgia (GA) - 2 flagged

- **25% State Parks Discount for Disabled Veterans** (recreation, min rating: varies)  
  Source: [Georgia State Parks - Reservations & Discounts; Georgia State Parks - ParkPass](https://gastateparks.org/Reservations)  
  Row says: Georgia resident disabled veterans who present a GDVS Certificate of Eligibility card get 25% off individual accommodations (one per person), recreation fees, golf, parking, and historic site admission under O.C.G.A. 12-3-9.1. Online bookings are charged in full and refunded at check-in when you show the card. Separately, the annual ParkPass ($70; daily parking is $10) is 25% off for active military and all veterans, and 50% off for seniors 62+; discounted passes must be bought in person. We could not find an official page stating the minimum VA rating needed for the Certificate of Eligibility card.
- **In-State Tuition Waiver for Recently Separated Veterans and Dependents (USG)** (education, min rating: none)  
  Source: [University System of Georgia - Military Services and Benefits (Policy 7.3.4.1)](https://www.usg.edu/student_affairs/military/services_and_benefits)  
  Row says: Board of Regents Policy 7.3.4.1 lets University System of Georgia schools waive out-of-state tuition for military personnel, recently separated service members, and National Guard members, and for students using VA education benefits ('covered individuals' under 38 U.S.C. 3679(c)), including some spouses and dependent children. A 2021 Chancellor's letter removed the old 36-month enrollment limit for covered individuals. Apply through your school's registrar with your DD-214 or VA Certificate of Eligibility; lawful presence verification is required. We could not retrieve the current policy text, so confirm details with the school.

## Guam (GU) - 7 flagged

- **Vehicle registration fee waiver, 100% or unemployable veterans** (vehicle, min rating: varies)  
  Source: [P.L. 30-115 (Bill 298-30), veteran license plate and registration fees](https://www.guamlegislature.com/Public_Laws_30th/P.L.%2030-115%20%20Bill%20No.%20298-30%20(COR)%20.pdf)  
  Row says: Guam legislation (P.L. 30-115 and related bills) provides for waiving the annual license and registration fee for one non-commercial passenger vehicle of a veteran rated 100% disabled or individually unemployable, with a VA decision letter given to DRT. We could not open the current codified text of 16 GCA 7160, and a later bill (149-38) would amend it, so confirm the current rule with DRT Motor Vehicle Division.
- **Veteran license plates and fee** (vehicle, min rating: any service-connected)  
  Source: [P.L. 30-115, 16 GCA 7120.2](https://www.guamlegislature.com/Public_Laws_30th/P.L.%2030-115%20%20Bill%20No.%20298-30%20(COR)%20.pdf)  
  Row says: Guam issues veteran license plates and decals under 16 GCA 7120.2 and veteran plate fee waiver language applies to veterans rated 100% disabled or unemployable per P.L. 30-115. Whether a disability rating is needed for a plain veteran plate, and the current fee, could not be confirmed from an official page. Ask DRT Motor Vehicle Division with your DD-214 and, for the fee waiver, your VA decision letter.
- **Veteran designation and fee waiver on driver's license** (vehicle, min rating: none)  
  Source: [Bill 333-33 (COR), Veterans Designation for Driver's Licenses](https://www.guamlegislature.com/Bills_Passed_33rd/Bill%20No.%20B333-33%20(COR)%20PASSED.pdf)  
  Row says: Guam law allows a veteran to ask that a veteran designation appear on a Guam driver's license or ID card, with proof of status such as a DD-214 certified by the Office of Veterans Affairs. Secondary sources report driver's license fees are waived for veterans (16 GCA 3102.1), but we could not verify current text or fee rules. Apply at DRT Motor Vehicle Division.
- **University of Guam and GCC tuition waiver for veterans and dependents** (education, min rating: none)  
  Source: [Bill 202-38 (COR) Guam Veterans Higher Education Benefits Act (17 GCA Ch. 56)](https://guamlegislature.gov/38th_Guam_Legislature/Bills_Introduced_38th/Bill%20No.%20202-38%20(COR)%20Referred%20Version.pdf)  
  Row says: 17 GCA Chapter 56 (Guam Veterans Higher Education Benefits Act, added by P.L. 38-99 in February 2026) waives tuition, not fees, at the University of Guam and Guam Community College. In the bill as introduced, a Qualifying Veteran needs Guam residence or home of record at entry, an honorable discharge, 181+ days of active duty, and wartime service or similar; spouses and children up to age 25 may be dependents. Federal education benefits must be used up first, space is available only after paying students register, and a 2.5 undergraduate or 3.0 graduate GPA is needed. Final enacted text and implementing rules were not confirmed.
- **Hunting and fishing licenses** (recreation, min rating: none)  
  Source: [DAWR Hunting License Application Form (2025)](https://doag.guam.gov/wp-doag-content/uploads/2025/09/DAWR-Hunting-License-Application-Form-09102025.pdf)  
  Row says: The Guam Department of Agriculture hunting license form lists a general license fee of $15. We found no confirmed veteran or disabled-veteran fee waiver; a 2008 bill proposed one, but its enactment is not confirmed. Contact the DAWR before assuming any discount.
- **Income tax on military retired pay and VA compensation** (income_tax, min rating: none)  
  Source: [Territory of Guam Military and Veterans Benefits (U.S. Army)](https://myarmybenefits.us.army.mil/Benefit-Library/State/Territory-Benefits/Guam)  
  Row says: Guam residents file Guam territorial income tax with DRT, which mirrors the federal Internal Revenue Code, so military retired pay is taxable. VA disability compensation is not included in taxable income. We confirmed this only from federal military benefit library pages, not a DRT page.
- **Government of Guam hiring preference points** (employment, min rating: any service-connected)  
  Source: [Government of Guam employment application (preference points)](https://gwosa2.opaguam.org/sites/default/files/employment_application.pdf)  
  Row says: Under 4 GCA 4104, agency forms say veterans with 180 cumulative days of active duty and a discharge other than dishonorable can claim 5 points, with 5 more for a service-connected disability if a VA letter says the veteran is entitled to civil service preference. Points are added to a passing score. The current statute text and any limit on promotions were not confirmed.

## Hawaii (HI) - 5 flagged

- **City and County of Honolulu: totally disabled veteran real property tax exemption (ROH 8-10.5)** (property_tax, min rating: 100%)  
  Source: [City and County of Honolulu Real Property Assessment Division - Totally Disabled Veterans (Revised Ordinances of Honolulu 8-10.5); RPAD Information Guide rev. 2026-06-26](https://realproperty.honolulu.gov/tax-relief-and-forms/exemptions/totally-disabled-veterans/)  
  Row says: Honolulu exempts real property owned and occupied by a veteran who is '100% totally disabled due to service related injuries while on active duty with U.S. Armed Forces.' You still pay the minimum real property tax, currently $300 a year. The exemption passes to a widow or widower who remains unmarried and keeps owning and living in the home. There is no annual filing deadline; file Form BFS-RP-E-8-10.5 with the Real Property Assessment Division and the exemption starts with the next tax payment date (Aug. 19 or Feb. 19) after you file. The county's words are 'totally disabled,' not permanent and total, and TDIU is not mentioned, so ask the county if you are rated under TDIU.
- **Maui County: severely disabled (70%+) and totally disabled veteran property tax exemptions (MCC 3.48.475)** (property_tax, min rating: 70%)  
  Source: [County of Maui Real Property Assessment Division - Claim for Disability Exemption, Severely Disabled Veteran (Maui County Code 3.48.475); Maui County Council press release July 13, 2022 (Bill 110, CD1)](https://www.mauicounty.gov/DocumentCenter/View/102703/Disability-Exemption-for-Disabled-Veterans)  
  Row says: Maui County Code section 3.48.475 defines 'severely disabled' as 'a 70 percent or higher disability rating by the United States Department of Veterans Affairs.' A severely disabled veteran who owns and occupies a home pays only 50 percent of the minimum real property tax instead of the normal bill (the county reported the minimum tax at $350 when the rule passed in 2022). File the Claim for Disability Exemption, Severely Disabled Veteran, with the Real Property Assessment Division by December 31 for the next tax year; the county verifies your rating with the VA. The county also has an older totally disabled veteran exemption, but the county web pages blocked our review, so confirm the current amounts, the 100 percent rule and surviving spouse terms with the division at (808) 270-7297.
- **Hawaii County: totally disabled veteran real property tax exemption (Form 19-73)** (property_tax, min rating: 100%)  
  Source: [County of Hawaii Real Property Tax Division - Exemptions/Programs (Hawaii County Code ch. 19; Form 19-73)](https://hawaiipropertytax.com/exemptions-programs/)  
  Row says: Hawaii County exempts the principal home of a veteran who is totally disabled from injuries received on active duty, except for special assessments and half of the annual minimum tax (the county lists the minimum tax at $200). The county says the program requires 100 percent disability and that you must already have the homeowner exemption. File Form 19-73 with the Real Property Tax Division by June 30 for the first half payment or December 31 for the second half. The exemption continues while you stay totally disabled or while your surviving spouse stays unmarried. Any part of the home used for business is not covered. The county website blocked automated review, so confirm the current rules with the division (Hilo 808-961-8201, Kona 808-323-4880).
- **State civil service veterans preference points, 5 or 10 points (HRS 76-103)** (employment, min rating: varies)  
  Source: [Hawaii Revised Statutes 76-103 Veteran's preference; DHRD Important Information for job announcements (Veterans Preference Points)](https://data.capitol.hawaii.gov/hrscurrent/Vol02_Ch0046-0115/HRS0076/HRS_0076-0103.htm)  
  Row says: On open competitive state recruitments, you get 5 veterans preference points added to your passing score by submitting your DD-214 (Member 4) showing honorable service. You get 10 points if you submit 'an official statement/letter from the U.S. Department of Veteran Affairs or armed service dated within the past 12 months which confirms your qualification to receive 10 points preference.' The statute says preference for veterans, disabled veterans, spouses of disabled veterans and unremarried surviving spouses 'shall be provided by rules and regulations,' and the state notice does not list a disability percentage for the 10 point tier. Claim the points when you apply through the Department of Human Resources Development. Counties run their own systems with similar 5 and 10 point rules.
- **State veterans homes: Yukio Okutsu (Hilo) and Daniel K. Akaka (Kapolei) State Veterans Homes** (other, min rating: none)  
  Source: [Hawaii Office of Veterans' Services - State Veteran Homes](https://dod.hawaii.gov/ovs/state-veteran-homes/)  
  Row says: Hawaii runs two skilled nursing homes for veterans, overseen by the Office of Veterans' Services: the Yukio Okutsu State Veterans Home in Hilo (808-961-1500) and the Daniel K. Akaka State Veterans Home in Kapolei, Oahu (apply through the online form on the OVS page). Earlier OVS material said residents must be veterans in good standing who meet general VA eligibility and were Hawaii residents before entering the military or have lived in Hawaii more than a year before applying, but the current OVS page lists no criteria and says to contact the home or your primary care doctor. Confirm eligibility, cost share and any waiting list with the home.

## Idaho (ID) - 4 flagged

- **Free Disabled Veteran (DV) license plate, registration fee waiver, and disability parking privileges** (vehicle, min rating: 100%)  
  Source: [Idaho Legislature - Idaho Code 49-403 Disabled veteran license plates (am. 2023, ch. 16); Idaho Code 49-410(7); ITD Form 3397 Disabled Veteran Plates Application (Rev. 7/24)](https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH4/SECT49-403/)  
  Row says: No registration fee is charged on one vehicle at a time owned by a veteran 'receiving compensation from the veterans administration ... for one hundred percent (100%) service-connected disability' or for loss or loss of use of a hand or foot, or blindness in both eyes. ITD issues the DV plate (counties cannot) with a disability placard, and the plate gives the parking privileges of Idaho Code 49-410(7): free parking at meters, unlimited time in time-restricted zones, and use of accessible spaces. The ITD form (ITD 3397, rev. 7/24) says applicants 'must be a veteran with a 100% service-connected permanent disability' and must send a 100% VA rating letter; it does not mention TDIU, so TDIU veterans should confirm with ITD Special Plates first. A Purple Heart recipient who qualifies may choose a fee-free Service-Connected Disabled Purple Heart plate instead. Apply by mail (ITD Special Plates, PO Box 7129, Boise ID 83707-1129) or email specialplates@itd.idaho.gov; vehicles over 26,000 pounds are excluded. Limited to one set.
- **Armed Forces and Public Safety Officer Dependent Scholarship: tuition, fees, books, housing (33-4302)** (education, min rating: 100% P&T or TDIU)  
  Source: [Idaho Legislature - Idaho Code 33-4302 Armed forces and public safety officer scholarships (am. 2025, ch. 94)](https://legislature.idaho.gov/statutesrules/idstat/Title33/T33CH43/SECT33-4302/)  
  Row says: The spouse or child of an Idaho resident who entered active service as an Idaho resident (shown on the DD-214) qualifies if the service member 'has been determined by the federal government to be a prisoner of war or missing in action' or 'died of, or is determined to be unemployable due to, injuries or wounds sustained during active duty or inactive duty training.' Unemployable means the VA found individual unemployability or the SSA found total and permanent disability from service injuries; a 100% rating alone is not the statutory test. The student attends an Idaho public college or career technical college 'without the necessity of paying tuition and fees,' gets up to $750 per academic period for books and supplies, and on-campus housing and subsistence while living on campus, for up to 36 months. A child must be an Idaho resident who finished high school in Idaho; a spouse must have been married at the time of the event and still married if the veteran is living. Benefits can be used for 19 years after high school or 10 years after the event, whichever is longer. Apply through the State Board of Education and the school's financial aid office.
- **Idaho State Veterans Homes in Boise, Lewiston, Pocatello and Post Falls** (other, min rating: none)  
  Source: [Idaho Division of Veterans Services - Idaho State Veterans Home Application for Admission (eligibility; page updated June 23, 2021)](https://veterans.idaho.gov/?p=1383)  
  Row says: The Division of Veterans Services runs four skilled nursing homes (Boise also has residential and special care units). To be admitted you must be a veteran with at least 90 days of service and an honorable (other than dishonorable) discharge, 'a resident of the State of Idaho at the time of application,' and 'unemployable as a result of age, illness, or disability.' Wartime veterans get priority. Spouses and widows of veterans are eligible for nursing care only and must show proof of marriage. You must apply for (or already receive) VA pension with Aid and Attendance, and either apply for Medicaid or pay the current maximum monthly charge; veterans are admitted regardless of financial status. Apply with the Idaho State Veterans Home Application for Admission and your DD-214; call (208) 780-1300. The admission page was last updated in 2021, so confirm current rules with the home.
- **Emergency financial relief grant for Idaho veterans (Joining Forces Idaho)** (other, min rating: none)  
  Source: [Idaho Division of Veterans Services - Joining Forces Idaho Grant Application (Emergency Assistance and Financial Relief), posted Feb. 11, 2026; IDVS State Benefits and Services page](https://veterans.idaho.gov/pressrelease/joining-forces-idaho-grant-application-emergency-assistance-financial-relief/)  
  Row says: The Division of Veterans Services offers one-time emergency help with bills such as an electric bill, rent or car repairs. The 2026 Joining Forces Idaho application says the 'Applicant must be a resident of Idaho,' must show veteran status (DD-214 member copy 4 showing character of discharge), and the need must be 'current and NOT ongoing.' The Division's state benefits page describes the older Emergency Relief program as 'up to a $1,500 grant, in cases of extreme emergency' for veterans who 'entered the military from Idaho, or lived within the state for at least 5 years,' with the event within 90 days of the request; the policy document behind that page could not be retrieved, so treat the $1,500 cap and the 5-year rule as unconfirmed. Send the signed application, bills or past-due notices, and proof of Idaho residency to JFIdaho@veterans.idaho.gov, or call (208) 780-1300.

## Illinois (IL) - 2 flagged

- **Free license plates for veterans with disabilities (with or without the wheelchair symbol)** (vehicle, min rating: any service-connected)  
  Source: [Illinois General Assembly - 625 ILCS 5/3-609 Plates for veterans with disabilities (P.A. 104-603; P.A. 104-682)](https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=062500050K3-609)  
  Row says: You pay no registration fee for veterans-with-disabilities plates on one car, motorcycle, or truck up to 8,000 pounds if you hold VA proof of a service-connected disability and a physician, physician assistant, or advanced practice nurse certifies that the disability meets the standard for disability plates (Section 3-616); these plates carry the international symbol of access. If your VA rating is 50% or more but you do not meet that medical standard, you get a plate without the symbol, also free. Renewals need new proof of eligibility unless your disability is permanent; IDVA can help with documentation. Public Act 104-603 raises the free allowance to up to 2 sets of plates on July 1, 2027. Apply at a Secretary of State facility.
- **No fishing license needed and free hunting license for veterans 10%+ service-connected or on VA pension** (recreation, min rating: 10%)  
  Source: [Illinois General Assembly - 515 ILCS 5/20-5(d) Fish and Aquatic Life Code, necessity of license; exemptions; IDVA - Fishing and Hunting Permits page](https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=051500050K20-5)  
  Row says: Under the Fish Code, veterans the VA certifies as 'at least 10% disabled with service-related disabilities or in receipt of total disability pensions' may fish with sport fishing devices without a license, as long as the disability does not make fishing unsafe. IDVA says the same 10% rule gives free hunting licenses and that this applies regardless of your state of residence. You need a DD-214 and a Disability Affidavit for Illinois Hunting and Fishing Privilege card, which IDVA issues through its Veteran Service Officers using VA proof of compensation dated within the last year; carry it while hunting or fishing. The hunting exemption was not found in the Wildlife Code text, and IDVA does not say whether stamps and permits (habitat, waterfowl, deer) are also free, so confirm with IDVA or IDNR.

## Indiana (IN) - 4 flagged

- **100% property tax deduction on principal residence for totally disabled veterans (new 2026 law)** (property_tax, min rating: 100%)  
  Source: [Indiana DLGF - Frequently Asked Questions, 2026 Legislative Update: Veterans Deductions and Credits (IC 6-1.1-12-14, as amended by HEA 1210-2026; FAQ dated June 17, 2026, posted Aug. 12, 2026)](https://www.in.gov/dlgf/files/2026-memos/Veterans-Deductions-FAQ_DLGF_08122026-1.pdf)  
  Row says: Starting with the 2026 assessment date (taxes paid in 2027), a veteran with a 'total disability' can deduct 100 percent of the assessed value of the home used as the principal place of residence, with no assessed value cap. You must have served at least 90 days (wartime not required), been honorably discharged, lived in Indiana at least one year before January 1 of the assessment year, and prove the total disability with a VA pension certificate, VA award of compensation, or IDVA certificate of eligibility. DLGF says the disability does not have to be service connected; the law does not say 'permanent' and does not mention TDIU. A surviving spouse keeps it if the veteran qualified at death and the spouse owns the home and has not remarried. File State Form 12662 with your county auditor by January 15 of the year the tax is first due; if you had the old $14,000 deduction you must file again to get this one. You cannot also take any IC 6-1.1-51.3 credit.
- **Vehicle excise tax credit (up to $70 per vehicle, two vehicles) for disabled veterans who own no property** (vehicle, min rating: 10%)  
  Source: [Indiana BMV - State Form 52870 (R3 / 12-24), Qualified Veteran Excise Tax Credit (IC 6-6-5-5.2); DLGF Veterans FAQ 2026](https://forms.in.gov/download.aspx?id=11539)  
  Row says: If you qualify for a veteran property tax deduction or credit but do not own property the deduction can be applied to, Indiana gives you a credit against the annual vehicle excise tax equal to the lesser of the excise tax due or $70 per vehicle, for up to two vehicles per registration year. Get an affidavit from your county auditor stating you own no qualifying property, then file State Form 52870 at the BMV with the affidavit. Under the old law, any unused part of a property tax deduction could also be applied to excise tax; DLGF says the new 100 percent deduction usually leaves nothing unused. The BMV form (revised 12-24) still names the pre-2026 statutes, so confirm current eligibility with your auditor.
- **Veterans preference points for state merit jobs; no fee peddler or vendor license** (employment, min rating: none)  
  Source: [Indiana Department of Veterans Affairs - Employment Assistance (cites IC 4-15-2-18); IDVA No Fee Vendor, Hawker, or Peddler License fact sheet (IC 25-25-2-1)](https://www.in.gov/dva/divisions/training-and-services/employment-assistance/)  
  Row says: IDVA states that the State Merit System adds points to the scores of veterans applying for merit positions or promotions in Indiana state government (IDVA cites IC 4-15-2-18). We could not find the current statute text, point values, or any extra points for disabled veterans or spouses on an official page, so ask the State Personnel Department when you apply through WorkForIndiana. Department of Workforce Development offices have Disabled Veterans' Outreach Program specialists who focus on job placement for veterans with service-connected disabilities. Separately, any veteran with an honorable discharge can get a license to vend, hawk, or peddle in any Indiana county, city, or town without paying the license fee where a local ordinance requires one (IC 25-25-2-1); apply through the county auditor or local licensing authority with your DD-214.
- **Military Family Relief Fund emergency grants** (other, min rating: none)  
  Source: [Indiana Department of Veterans Affairs - Military Family Relief Fund Eligibility Criteria (IC 10-17-12; 915 IAC 3)](https://www.in.gov/dva/divisions/military-family-relief-fund/mfrf-eligibility)  
  Row says: IDVA's Military Family Relief Fund gives hardship grants to Indiana resident veterans and their families for rent or mortgage, utilities, food, medical and dental bills, basic transportation, education, child care, and funeral costs. You must be an Indiana resident, the veteran must have an eligible discharge code, household income cannot exceed two times the federal poverty guidelines, and you must show genuine financial hardship in your income, spending, and statement letter. The fund will not reimburse bills already paid or pay bills more than 10 days in advance. Apply online, by email (MFRF@dva.in.gov), fax, mail, or in person at IDVA; incomplete applications close after 30 days. Grant maximums are set in 915 IAC 3 and were not shown on the web pages.

## Iowa (IA) - 3 flagged

- **Driver license fee waiver for 100% permanent service-connected veterans; Veteran designation** (vehicle, min rating: 100% P&T)  
  Source: [Iowa Legislature - Iowa Code 2026 section 321.191(10); Iowa DOT - Military Fee Waiver; Iowa DOT - Driver's License Designations](https://www.legis.iowa.gov/docs/code/321.191.pdf)  
  Row says: Iowa DOT does not charge the operator license fee or the motorcycle fee to 'a veteran with a permanent service-connected disability rating of one hundred percent, as certified by the United States department of veterans affairs.' Bring your VA Summary of Benefits letter when you get or renew a license; the waiver is not applied after the fact. The law does not mention TDIU. Honorably discharged veterans of any rating get chauffeur (Class D) and commercial license fees waived with a DD-214. Any honorably discharged veteran with 90 days of active duty can add a 'Veteran' designation; adding it to a current card costs $10.
- **Lifetime hunting and fishing license ($7), lifetime fur harvester license, and deer tag for disabled veterans** (recreation, min rating: any service-connected)  
  Source: [Iowa Legislature - Iowa Code 2026 section 483A.24(16), (17), (20), (21); Iowa DNR Form 542-1412 (7/2026); SF 2471 (2026)](https://www.legis.iowa.gov/docs/code/483A.24.pdf)  
  Row says: Iowa DNR issues a lifetime hunting and fishing combined license to an Iowa resident who served on federal active duty and 'was disabled or was a prisoner of war' in service; 'disabled' means 'entitled to a service connected rating under 38 U.S.C. ch. 11,' with no minimum percentage. The DNR fee is $7 (optional hard card $6). You must have lived in Iowa at least 90 days and still buy yearly habitat and other fees. The same application gets you a lifetime fur harvester license ($7 on the 7/2026 form; a 2026 law set it at $5 plus processing) and a $33 extra any-deer tag. Send DNR Form 542-1412 with your DD-214 and a current VA rating letter by mail, email, or upload at GoOutdoorsIowa.com. Any veteran with federal active duty can instead buy a $5 annual license, and 100% rated veterans can buy a $65 lifetime trout license.
- **Regents university tuition and mandatory fee waiver for 100% permanent service-connected veterans (new 2026)** (education, min rating: 100% P&T)  
  Source: [Iowa Legislature - House File 2491 (2026), enrolled and signed April 30, 2026; Iowa Code 262.9(43)](https://www.legis.iowa.gov/docs/publications/LGE/91/HF2491.pdf)  
  Row says: Starting July 1, 2026, the University of Iowa, Iowa State and the University of Northern Iowa must 'waive all tuition and mandatory fees for a veteran, as defined in section 35.1, who has a permanent service-connected disability rating of one hundred percent' and is admitted. It is a last-dollar benefit: you must first use or be ineligible for Pell grants, GI Bill and other federal or state aid, and the school prorates the waiver each semester to cover the gap. TDIU is not named in the law. Community colleges and private schools are not covered. Ask the university's veterans services office how to apply; implementation details were not yet posted when checked.

## Kansas (KS) - 2 flagged

- **State park vehicle permits: no veteran discount; reduced Senior/Disabled permit only** (recreation, min rating: none)  
  Source: [Kansas Department of Wildlife and Parks - Kansas State Park Entrance and Camping Fees (2025 fees and fees beginning 11/1/2026)](https://www.ksoutdoors.gov/licenses-permits-fees/kansas-state-park-entrance-and-camping-fees)  
  Row says: Kansas state parks charge a vehicle permit and offer no veteran or disabled veteran discount. The only reduced permit is the Senior/Disabled annual vehicle permit, $13.75 for 2025 versus $25.00 regular (rising to $20.25 versus $39.00 on November 1, 2026), and a Senior/Disabled daily permit of $3.25 ($4.25 after November 1, 2026). KDWP describes it as for residents 65 or older or persons with disabilities who display a disability plate or placard; whether a Disabled Veteran plate without the wheelchair symbol qualifies is not stated, so ask at the park office. Free park permits go only to active Kansas National Guard members. A State Park Passport ($15.50, $30.50 after November 1, 2026) can be added when you register your vehicle at the county treasurer.
- **Kansas Soldiers' Home (Fort Dodge) and Kansas Veterans' Home (Winfield) long-term care** (other, min rating: none)  
  Source: [Kansas Office of Veterans Services - Veteran Homes: Eligibility and Admissions (K.S.A. 76-1908, 76-1954)](https://www.kovs.ks.gov/veteran-homes/eligibility-admissions)  
  Row says: Kansas runs two veterans homes with skilled nursing, dementia care and domiciliary units: the Kansas Soldiers' Home at Fort Dodge and the Kansas Veterans' Home at Winfield (a third home in Topeka is awaiting federal construction funds). You must meet VA veteran status with a discharge 'under conditions other than dishonorable,' need 24-hour skilled nursing care documented by a physician, and have no felony record or sex offender registration. Spouses, surviving spouses and Gold Star Parents may be admitted as space allows. Kansas residency is not required, but Kansas residents get preference, and veterans without adequate means of support get first priority. Charges depend on ability to pay; the Legislative Research Department reports veterans rated 70% or higher pay no resident fees, which we could not confirm on the KOVS site. Apply through KOVS with VA Form 10-10EZ and the Application for Admission.

## Kentucky (KY) - 1 flagged

- **Burial in a Kentucky State Veterans Cemetery (five cemeteries, no residency requirement)** (other, min rating: none)  
  Source: [Kentucky Department of Veterans Affairs - Kentucky Veterans Cemeteries (KRS 40.315, effective Jan. 1, 2026)](https://veterans.ky.gov/Cemeteries/Pages/default.aspx)  
  Row says: Kentucky has five state veterans cemeteries: Kentucky Veterans Cemetery West, Central, North, North East and South East. Anyone eligible for a national cemetery under 38 U.S.C. 2402 qualifies, including spouses, minor children and some unmarried adult dependent children. Kentucky residency is not required. Starting January 1, 2026 (2025 Acts ch. 20), Guard and Reserve members who completed their initial service obligation with a discharge other than dishonorable, and Guard members who died on state active duty or Title 32 duty, are also eligible. Burial, plot, vault, headstone and perpetual care are free for the veteran; the KDVA page lists a $500 spousal fee due at the time of death. File the Kentucky Veterans Cemeteries Eligibility Application with KDVA in advance to speed things up.

## Louisiana (LA) - 3 flagged

- **Surviving spouse continuation of the disabled veteran exemption (and pending 2026 transfer amendment)** (property_tax, min rating: varies)  
  Source: [Louisiana Legislature - 2026 Regular Session SB 180 (Act 39) proposing to amend Const. Art. VII, Sec. 21(K)(1); current text at Const. Art. VII, Sec. 21(K)](https://legis.la.gov/legis/BillInfo.aspx?s=26RS&b=SB180&sbi=y)  
  Row says: The surviving spouse of a veteran in any tier (50% to 69%, 70% to 99%, or 100%) keeps the same exemption 'if the surviving spouse occupies and remains the owner of the property, whether or not the exemption was in effect on the property prior to the death of the veteran.' There is no remarriage rule in the text. Today the exemption is lost if the spouse sells and moves. Act 39 of 2026 (SB 180) asks voters on November 3, 2026 to remove the occupy-and-own rule and allow a one-time transfer of the exemption to a new homestead, capped at the amount claimed in the last year on the old home, starting with tax year 2027. Check with your parish assessor after the election.
- **Free disabled veteran, military honor, and Purple Heart DV plates and parking privileges for 50% or higher** (vehicle, min rating: 50%)  
  Source: [R.S. 47:490.32 Military honor license plate; Purple Heart disabled veteran (Acts 2019, No. 6); OMV Policy 14.00 Mobility Impaired License Plates (rev. 07/21/2026); LDVA State Benefits page](https://www.legis.la.gov/Legis/Law.aspx?d=1148936)  
  Row says: LDVA says veterans rated 50% or higher may get a disabled veteran plate or a military honor plate at no charge, and OMV policy lets 'veterans who have a 50% or more service connected disability' get a mobility-impaired license plate and permanent placard with an affidavit from the Veterans Affairs office instead of a doctor's certificate. Purple Heart recipients 'who have a service-connected disability of fifty percent or more' get a free 'DV' Purple Heart plate and a free accessibility hang tag (R.S. 47:490.32). LDVA also reports free parking at Louisiana airports for any length of time and 7 days free at the Port of New Orleans cruise terminal (Louisiana residents only since Act 86 of 2025) for veterans rated at least 50%, with a form certified by a Veterans Assistance Counselor. The statute for the general 50% disabled veteran plate was not located, so confirm the fee with OMV.
- **In-state tuition for veterans and dependents using VA education benefits; National Guard tuition exemption** (education, min rating: none)  
  Source: [Louisiana State University Office of the University Registrar - Residency Regulations (veterans section); R.S. 29:36.1 National Guard tuition exemption](https://www.lsu.edu/registrar/academics/residency.php)  
  Row says: Louisiana public colleges classify a veteran, spouse, or dependent who is 'eligible to receive educational assistance administered by the United States Department of Veterans Affairs' as a resident for tuition and fees, with no prior Louisiana residency, for as long as the student stays continuously enrolled (LSU residency policy; the state statute cite was not retrieved). Louisiana National Guard members age 17 or older who are domiciled in Louisiana get free tuition at public colleges for five academic years or until a degree, and the clock pauses during mobilization (R.S. 29:36.1). Act 355 of 2026 lets veterans use a DD-214 as proof of eligibility for TOPS starting August 1, 2026. Apply at the school's registrar or veterans office.

## Maine (ME) - 2 flagged

- **Consolidated homestead exemption with tiered veteran add-on, tax years from April 1, 2027 (36 M.R.S. 683-A)** (property_tax, min rating: varies)  
  Source: [Maine Legislature - 36 M.R.S. 683-A Homestead exemption (enacted by PL 2025, c. 650, Pt. M, L.D. 2212)](https://legislature.maine.gov/statutes/36/title36sec683-A.html)  
  Row says: Starting with the property tax year that begins April 1, 2027, Maine replaces the veteran exemption with one homestead exemption of $25,000 of just value plus a veteran add-on based on your VA service-connected rating: up to $10,000 at 60%, $20,000 at 70%, $30,000 at 80%, $40,000 at 90% and $50,000 at 100%. Veterans with no rating or under 60% get $5,000 (under age 62), $6,000 (62 or older) or $7,000 (World War I era). SAH grant recipients get a $50,000 add-on. Only one add-on tier applies. Unremarried surviving spouses, minor children and qualifying parents get the add-on the veteran would have received. You must be a Maine permanent resident who owned the homestead for the preceding 12 months, and the amount is adjusted by the town's assessment ratio. File written application and proof of entitlement with your town assessor by April 1. The law says property that had the old exemption on April 1, 2026 is presumed eligible for the equivalent exemption in 2027; Maine Revenue Services must issue transition guidance, which was not yet published.
- **Disabled Veteran plates: no registration or title fee, free placard, excise tax exemption up to 3 vehicles** (vehicle, min rating: 100% P&T)  
  Source: [Maine Legislature - 29-A M.R.S. 523 Certain veterans (amended PL 2025, c. 152); 36 M.R.S. 1483(12), (12-A); Maine BMV Available Veteran Plates](https://legislature.maine.gov/statutes/29-A/title29-Asec523.html)  
  Row says: The Secretary of State issues Disabled Veteran plates and a registration certificate with no annual registration fee to any 100% disabled veteran who provides VA or service branch certification of permanent disability and receipt of 100% service-connected benefits; the BMV states the disability must be permanent and total. Up to 3 vehicles (registered weight 26,000 lbs or less) qualify, a disability placard is free on request, and the BMV also waives title fees. Veterans who lost both legs or the use of both legs, and amputee or blind veterans with a VA-furnished or specially designed vehicle, pay no motor vehicle fees at all, including sales tax. Separately, the municipal excise tax is waived on up to 3 automobiles you own (and from July 1, 2026 up to 3 you lease) if you receive federal pension or compensation for total, service-connected disability, whether or not you display the DV plate; your name must appear on the title or lease. Bring your DD-214 and current VA Benefit Summary letter to your town office or BMV branch. If you choose a different plate you pay the normal registration fee. TDIU is not mentioned in the plate statute.

## Maryland (MD) - 1 flagged

- **Vehicle registration fee exemption, free Disabled Veteran plates, and permanent registration** (vehicle, min rating: 100%)  
  Source: [MDOT Motor Vehicle Administration - Military Service Members: License Plates (Transportation Article 13-903(a)(8)-(9), 13-903(d)); MVA brochure DL-401](https://mva.maryland.gov/your-mva-guide/military-service-members/license-plates)  
  Row says: State law (Transportation 13-903(a)(8)) exempts from registration fees any vehicle 'owned by, or leased to, and personally used by a veteran' whom the VA has classified as having 'lost the use of a hand, arm, or leg, or is totally disabled,' or who is legally blind (20/200 or a 20-degree field). The surviving spouse of a disabled veteran as defined in Tax-Property 7-208 is also exempt (13-903(a)(9)). MVA applies this to veterans rated 100%: you pay no registration fee, get Disabled Veteran plates (with or without the wheelchair symbol) at no charge, and your registration and sticker are permanent with no renewal trips. Veterans with a 'service-connected disability rating or unemployability rating of 50-99%' get the Disabled Veteran plate free but still pay annual registration fees and the surcharge. Vanity or organizational plates cost their normal plate fee. Book an appointment through myMVA (or mail form VR-120) and bring a letter on Maryland DVMF letterhead or a VA letter showing your rating. The law does not state a vehicle limit. Whether a TDIU rating counts as 'totally disabled' for the fee waiver is not stated by MVA; bills to add TDIU veterans (2025 SB 179/HB 248, 2026 HB 844) did not pass.

## Massachusetts (MA) - 2 flagged

- **Property tax exemption: Clause 22E (100% service-connected)** (property_tax, min rating: 100%)  
  Source: [G.L. c. 59, s. 5, Clause Twenty-second E; EOVS Local Property Tax Exemptions for Veterans](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleIX/Chapter59/Section5)  
  Row says: Veterans with a 100% service-connected disability rating determined by the VA may get a $1,000 exemption (or the abatement on $6,000 of valuation, whichever is greater) on their domicile. It continues for an unremarried surviving spouse who remains owner and occupant. Whether a TDIU-only or P&T designation qualifies is not stated on any official page we found, so confirm with your assessors. Apply to the local assessors by April 1 or within 3 months after the bill is sent.
- **Hunting and fishing licenses (no veteran-specific waiver found)** (recreation, min rating: varies)  
  Source: [License types and fees (MassWildlife)](https://www.mass.gov/info-details/license-types-and-fees)  
  Row says: The 2026 MassWildlife fee schedule lists free licenses only for residents who are paraplegic, blind, intellectually disabled (fishing), or paraplegic (hunting and sporting), plus age-based discounts; no waiver for disabled veterans as such is listed. A paraplegic veteran qualifies under the paraplegic category with pre-approval from MassWildlife. Bills to give disabled veterans free licenses have been filed but we found no enacted law.

## Michigan (MI) - 3 flagged

- **In-state tuition for veterans** (education, min rating: none)  
  Source: [State of Michigan Veteran Benefits (MVAA)](https://www.michigan.gov/mvaa/quality-of-life/quality-of-life/state-of-michigan-veteran-benefits)  
  Row says: Per the Michigan Veterans Affairs Agency, veterans and active-duty members receive in-state tuition regardless of their state of residency or duty status. This applies to veterans generally, not only disabled veterans. Ask the school's veterans certifying official how it is applied. Michigan has no statewide tuition waiver for disabled veterans themselves.
- **State hiring veterans' preference** (employment, min rating: any service-connected)  
  Source: [Civil Service Commission Rule 3-8: Veterans' Preference](https://www.michigan.gov/-/media/Project/Websites/mdcs/SPDOC/2009/CSCRule3_8VetsPrefSPDOC_0904a.pdf?rev=8955ee5962b047bbb0a82a7876328f1a)  
  Row says: Under Civil Service Rule 3-8, a veteran (90 or more days of active duty, honorable discharge) gets 5 points added to a final passing exam score, and a disabled veteran (found eligible for VA or military disability compensation for a service-connected disability) gets 10 points. Where an agency screens by score instead, the add-on is 5 percent or 10 percent of the highest screening score. A spouse of a disabled veteran with a service-connected rating over 50 percent also gets 10. Preference is not a guarantee of a job, and you must register with Civil Service to receive it.
- **Michigan Veteran Homes (state nursing care)** (other, min rating: none)  
  Source: [Michigan Veteran Homes - Eligibility](https://www.michigan.gov/mvh/eligibility)  
  Row says: Three state veteran homes (Grand Rapids, Marquette, Chesterfield Township) provide skilled nursing care. Eligibility includes honorably discharged veterans eligible for VA health care or VA long-term nursing care financial assistance, and certain dependents; Michigan residency is not required. Apply by contacting a home directly or a Veteran Service Officer.

## Minnesota (MN) - 5 flagged

- **Homestead exclusion for surviving spouses and primary family caregivers** (property_tax, min rating: 100% P&T)  
  Source: [Minnesota Department of Revenue, Market Value Exclusion for Veterans with a Disability; Minn. Stat. 273.13, subd. 34(c)-(e)](https://www.revenue.state.mn.us/market-value-exclusion-veterans-disability)  
  Row says: If a veteran who qualified for the $300,000 exclusion dies, it carries over to the surviving spouse, who must hold title and live in the home; it ends on remarriage or when the property is disposed of. The Revenue page also lists a surviving spouse who receives DIC, and says the veteran's disability status is not a factor in that case. A primary family caregiver approved by the VA may qualify if the veteran owns no Minnesota homestead. Apply to the county assessor by December 31. The amount for a DIC spouse and the caregiver tiers should be confirmed with the assessor.
- **Registration tax, plate and filing fee exemption for veterans with a total service-connected disability** (vehicle, min rating: 100% P&T)  
  Source: [Minn. Stat. 168.012, subd. 13 (Disabled veterans); Minn. Stat. 171.01, subd. 51 (definition)](https://www.revisor.mn.gov/statutes/cite/168.012)  
  Row says: A veteran with a 100 percent total and permanent service-connected disability rating shown by VA documentation is exempt from registration tax, administrative fees, filing fees and surcharges, and plate and validation sticker fees on a passenger automobile, one-ton pickup, motorcycle, or recreational vehicle. The exemption applies to no more than two vehicles at a time, and to vehicles jointly registered with a spouse or domestic partner. Personalized-plate fees and required special-plate donations are not waived. The Driver and Vehicle Services application procedure and disabled-veteran parking privileges could not be confirmed.
- **Survivors and Dependents Education Program (tuition waiver and stipend)** (education, min rating: varies)  
  Source: [Minn. Stat. 197.75 (Survivors and dependents education)](https://www.revisor.mn.gov/statutes/cite/197.75)  
  Row says: Children and surviving spouses of a deceased veteran who meet the statute's definitions are admitted free of tuition to Minnesota public institutions until a bachelor's degree, and an educational stipend of $750 a year is paid to each eligible child and spouse. The statute was amended in 2025 and 2026 (Laws 2026 ch. 49), and the current definition of the veteran's death or disability that qualifies could not be read. Confirm eligibility with MDVA before relying on this.
- **Credit for Past Military Service (state income tax credit)** (income_tax, min rating: 100%)  
  Source: [Minn. Stat. 290.0677, subds. 1a and 2 (Credit for past military service)](https://www.revisor.mn.gov/statutes/cite/290.0677)  
  Row says: A person who has served at least 20 years, has a 100 percent service-connected disability rating, or is eligible for certain military retirement pay, and who separated before the end of the tax year, can claim a credit of $750, reduced by 10 percent of federal adjusted gross income above $30,000. You cannot take this credit and the military retirement subtraction together. Claim it on the Minnesota income tax return.
- **Minnesota Veterans Homes** (other, min rating: none)  
  Source: [Minn. Stat. 198.022 (Eligibility for admission); MDVA Veterans Homes admissions (page not readable by our tools)](https://www.revisor.mn.gov/statutes/cite/198.022)  
  Row says: Minnesota runs state veterans homes for honorably discharged veterans who are Minnesota residents (statute: served in a Minnesota regiment or credited to Minnesota). Spouses and surviving spouses must be at least 55. Applicants must be without adequate means of support unless the discretionary payment path in Minn. Stat. 198.03 applies, and each home has its own application and waiting list. MDVA says residents must need skilled nursing care at some homes; confirm with the specific home.

## Mississippi (MS) - 2 flagged

- **Homestead exemption - TDIU or non-100% schedular rating (unclear)** (property_tax, min rating: varies)  
  Source: [35 Miss. Admin. Code Part VI, Rule 3.03 (homestead applicants, total disability proof) - Secretary of State](https://www.sos.ms.gov/adminsearch/ACCode/00000161c.pdf)  
  Row says: The statute and rule say 'service-connected, total disability' and do not name TDIU or 'permanent and total.' A 2025 Attorney General opinion summary says civilian employability is irrelevant and only documentation of a service-connected total disability and honorable discharge is needed, but I could only find that opinion through a non-official summary. Ask your county Tax Assessor, in writing, whether a TDIU rating is accepted before relying on it.
- **Concealed carry permit fee exemption** (other, min rating: any service-connected)  
  Source: [State Benefits for Veterans - Mississippi VA](https://www.msva.ms.gov/state-benefits)  
  Row says: Veterans with any service-connected disability are exempt from concealed weapon permit fees and renewal fees, if resident of Mississippi for 12 months immediately before applying (waivers for certain out-of-state permit holders, stationed military and retired law enforcement). Miss. Code 45-9-101. Details of the application are handled by the Department of Public Safety; this row cites the MSVA summary.

## Missouri (MO) - 3 flagged

- **Disabled Veteran license plates (first set free)** (vehicle, min rating: varies)  
  Source: [Disabled Veteran (DV) License Plates (DOR); RSMo 301.071, 301.072](https://dor.mo.gov/motor-vehicle/plates/disabled-veteran.html)  
  Row says: Missouri residents honorably discharged with a service-connected disability can get one free set of Disabled Veteran plates, with no plate, transfer, processing or replacement fees (additional sets pay normal fees). Apply with Form 4601 and a VA letter (under 1 year old, from the VA itself, not a clinic) showing the disability is service-connected. DOR's page does not state a minimum percentage, but the statute (RSMo 301.071) refers to total service-connected compensation or eligibility for a VA automobile grant, so confirm your rating qualifies before applying. These plates do not allow disabled parking unless the wheelchair symbol is added with a physician statement (DOR-1776).
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [Military Reference Guide (DOR, January 2025)](https://dor.mo.gov/forms/Military%20Reference%20Guide.pdf)  
  Row says: Missouri starts from federal adjusted gross income, and VA disability compensation is not included in federal AGI, so it is not taxed by the state. I did not find a DOR page that states this in one sentence; the DOR guide only addresses VA payments for the property tax credit. Confirm with DOR before relying on it.
- **State employment veterans' preference** (employment, min rating: any service-connected)  
  Source: [State of Missouri Application for Employment (veterans' preference section); RSMo 36.220](https://oa.mo.gov/sites/default/files/PaperApplication.pdf)  
  Row says: The State of Missouri application lists veterans' preference of 5 or 10 points (not cumulative) for open competitive recruitment only: 5 points for qualifying active duty or reserve service, and 10 points for a veteran who receives compensation for a service-related disability (attach a VA statement). RSMo 36.220 (amended 2018) says only that veterans, disabled veterans and spouses get preference and win ties when other factors are equal. The point table is on a form dated 08-17, so the current rule needs to be confirmed with the Office of Administration, Division of Personnel.

## Montana (MT) - 7 flagged

- **MDV: TDIU and non-permanent ratings** (property_tax, min rating: 100% P&T or TDIU)  
  Source: [Montana Disabled Veteran Assistance Program (MDV); Form MDV Part III](https://revenue.mt.gov/property/property-tax-help/mdv)  
  Row says: The statute and form say 100% disabled or 'paid at the 100% disabled rate'; the form says a temporary rating means DOR will periodically ask for an updated VA letter, so permanence is not required. Whether TDIU pay counts is not stated in plain words by DOR. Ask a Revenue field office at (406) 444-6900 before relying on it.
- **Special veteran license plates, fee waived** (vehicle, min rating: 100%)  
  Source: [61-3-460, MCA; 61-3-332, MCA](https://mca.legmt.gov/bills/mca/title_0610/chapter_0030/part_0040/section_0600/0610-0030-0040-0600.html)  
  Row says: The same statute waives the veterans' cemetery fee on two sets of special veteran plates for 100% disabled veterans (Purple Heart recipients at 50%+ still pay it). An eligible veteran can apply the waiver to other special plates under 61-3-458(4) if they meet that plate's own rules. No source found gives parking privileges with the plate; disability parking needs a separate permit.
- **Half-price deer and antelope licenses (combat disabled)** (recreation, min rating: varies)  
  Source: [Disabled Hunting and Fishing Licenses, Montana FWP](https://fwp.mt.gov/buyandapply/hunting-licenses/disabled-licenses)  
  Row says: Veterans with 'certain combat-connected injuries' may get half-priced deer and antelope licenses; up to 50 licenses are issued each year. The FWP page does not state the rating or injury threshold, so call FWP Licensing at 406-444-2950 to confirm eligibility and application steps.
- **Resident disability conservation license ($8)** (recreation, min rating: varies)  
  Source: [Disabled Hunting and Fishing Licenses, Montana FWP](https://fwp.mt.gov/buyandapply/hunting-licenses/disabled-licenses)  
  Row says: Residents with a qualifying disability can buy general deer, general elk, fishing and upland game bird licenses at half cost with the $8 conservation license. The FWP page does not state a VA rating threshold or the certification needed, so a service-connected rating may not by itself qualify. Confirm with FWP Licensing.
- **State park camping discount for veterans** (recreation, min rating: none)  
  Source: [State Parks: Fees and General Information, Montana FWP](https://fwp.mt.gov/stateparks/fees-and-general-information)  
  Row says: Montana resident veterans get 50% off overnight camping fees at state parks (electrical fees excluded). Proof is a DD 214, VA ID, or a driver's license showing veteran status. There is no found free day-use entry for disabled veterans. A 2026 FWP fee proposal may change rates, so check current fees.
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [Montana Income Tax Guide for Military Members and Their Families](https://revenue.mt.gov/taxes/military)  
  Row says: Montana starts from federal adjusted gross income, and VA compensation is generally not in federal income. No Montana Revenue page found says this directly, so treat it as unconfirmed and ask the Department of Revenue.
- **Montana Veterans' Homes** (other, min rating: none)  
  Source: [Montana Veterans' Home, Columbia Falls (DPHHS)](https://dphhs.mt.gov/healthcarefacilities/mvh/)  
  Row says: The state runs veterans homes in Columbia Falls, Butte and Glendive for skilled and intermediate nursing care. Admission eligibility and cost were not confirmed on the pages found; Columbia Falls is (406) 892-3256.

## Nebraska (NE) - 1 flagged

- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [Nebraska Department of Revenue: Military Retirement Benefits Exclusion](https://revenue.nebraska.gov/about/frequently-asked-questions/military-retirement-benefits-exclusion)  
  Row says: Nebraska individual income tax starts from federal adjusted gross income, and VA disability compensation is not included in federal AGI, so it should not be taxed by Nebraska. I could not find an official Nebraska page stating this in plain words, so confirm with the Department of Revenue before relying on it.

## Nevada (NV) - 3 flagged

- **Disabled Veteran annual State Parks permit** (recreation, min rating: any service-connected)  
  Source: [Nevada State Parks Annual Permits; NRS 407.065](https://parks.nv.gov/fees/annual-permits)  
  Row says: A Nevada resident honorably discharged veteran with a permanent service-connected disability can get an annual permit for unlimited entrance, camping and boat launch use at all Nevada state parks for 12 months, for only a $30 administrative fee. It is a placard for one vehicle. Apply through Nevada State Parks (forms at reservenevada.com; by mail, email or online). Renewals are not offered, so you file a new application each year. State Parks' page does not state a minimum percentage, only permanent service-connected disability.
- **State employment veterans preference and guaranteed interview** (employment, min rating: any service-connected)  
  Source: [NRS 284.260 and 284.265; NAC 284.325; State of Nevada Veteran Hiring Preference guide](https://www.leg.state.nv.us/nrs/nrs-284.html#NRS284Sec260)  
  Row says: For classified state jobs, appointing authorities must give a preference to veterans, and must interview each qualified veteran with a service-connected disability (any rating, including 0 percent). At least 22 percent of those interviewed must be qualified veterans without a disability. Declare the preference at application and attach a DD-214 and a VA rating letter. Older statute text and secondary sites say 10 points; the current statute text I read gives a preference without stating points, so confirm the exact points.
- **Nevada State Veterans Homes** (other, min rating: none)  
  Source: [Nevada Department of Veterans Services, State Veterans Homes](https://veterans.nv.gov/state-veterans-homes)  
  Row says: Nevada operates State Veterans Homes, including a 180-bed skilled nursing home in Boulder City serving eligible veterans, spouses and Gold Star parents, with Alzheimer's and dementia care. Eligibility is set by the home (not by a rating threshold here); contact the home for admission rules and cost. Veterans can also direct their property or vehicle tax exemption amount to the Veterans Home gift accounts.

## New Hampshire (NH) - 2 flagged

- **Tuition for children of killed or missing service members** (education, min rating: varies)  
  Source: [NH State Benefits for Veterans (Education Benefits)](https://www.nhveterans.nh.gov/veterans-services/nh-state-benefits-veterans)  
  Row says: The state veterans page says children of military members who die in wartime service, and children of certain wartime veterans who die of a service-connected disability, may get free tuition at New Hampshire public colleges. A need-based scholarship of up to $2,500 per year for up to 4 years may also be furnished (RSA 193:19 to 193:21). Children of service members missing or captured after February 28, 1961 get free community college tuition under RSA 188-F:15. I read this on the agency page and did not read the RSA 193 text.
- **New Hampshire Veterans' Home (Tilton)** (other, min rating: none)  
  Source: [NH State Benefits for Veterans (Miscellaneous Benefits); RSA 119:9](https://www.nhveterans.nh.gov/veterans-services/nh-state-benefits-veterans)  
  Row says: The Veterans' Home in Tilton is a 250-bed intermediate, long-term care facility, with 100 beds for residents with dementia. Contact the home at (603) 527-4400 to learn who is eligible and the costs. I did not read the eligibility statute (RSA 119) because the page would not load, so check with the home.

## New Jersey (NJ) - 2 flagged

- **Disabled Veteran (DV) license plates and parking-meter placard** (vehicle, min rating: any service-connected)  
  Source: [NJ Motor Vehicle Commission - Disabled Veteran, Purple Heart Recipient Placards (N.J.S.A. 39:4-207.10); Military Personnel plates page; Form SP-23](https://www.nj.gov/mvc/vehicletopics/disvet.htm)  
  Row says: A Disabled Veteran plate series (DV1000-DV9999) is listed at $15, and the MVC form says you need a copy of your DD-214 or DD-215 and the VA 'Award of Disability percentage letter,' with the application approved by a liaison who certifies membership; the MVC pages do not state a minimum rating. Separately, a Disabled Veteran placard (Form SP-47, DD-214 plus VA Award of Disability letter) exempts a vehicle you own from municipal parking meter fees for up to 24 hours, requires you to be the driver or a passenger, must be renewed every 3 years, and cannot be used in wheelchair-labeled spaces. Apply at any MVC agency or by mail to the NJMVC Special Plates Unit, P.O. Box 015, Trenton, NJ 08666-015.
- **State park disability pass and free Island Beach State Park disabled veteran vehicle permit** (recreation, min rating: any service-connected)  
  Source: [NJ DEP State Parks, Forests and Historic Sites - State Park Pass; Island Beach State Park permits](https://dep.nj.gov/parksandforests/get-outside/state-park-pass/)  
  Row says: New Jersey has no general free state park pass for disabled veterans. The state park Senior Citizen and Disability Pass gives free entrance and discounted camping to New Jersey residents with a disability, with no veteran requirement, and the department said it was being updated (disability passes only from the Trenton office, 1-800-843-6420). Island Beach State Park has a free disabled veteran vehicle permit for designated fishing areas; it needs a DD-214 showing honorable discharge and proof of a service-connected disability. I could not read the DEP park pages directly, so confirm both with the State Park Service.

## New Mexico (NM) - 3 flagged

- **Reduced vehicle registration fees (two-thirds rate)** (vehicle, min rating: none)  
  Source: [NM DVS State Benefits: Reduced Registration Fees](https://www.dvs.nm.gov/benefits/)  
  Row says: A veteran entitled to the veteran property tax exemption who does not have enough real or personal property to use up the full exemption may pay motor vehicle registration fees at two-thirds of the regular rate on vehicles the veteran owns. DVS lists this benefit; I could not pull the statute text itself, and the NMAC rule I saw may bar anyone who claimed part of the property tax exemption. Ask DVS or MVD before relying on it.
- **Immediate in-state tuition for veterans, spouses and children** (education, min rating: none)  
  Source: [NM DVS State Benefits: In-State Tuition](https://www.dvs.nm.gov/benefits/)  
  Row says: DVS states that veterans, their spouses and their children no longer have to wait to establish in-state residency when applying for college, so those using GI Bill education benefits can pay resident tuition at any state-funded college, university or vocational program right away. Ask the school's registrar how it documents this.
- **Income tax exemption for armed forces retirement pay ($30,000)** (income_tax, min rating: none)  
  Source: [2025 Instructions for PIT-ADJ, Line 24 (NM Taxation and Revenue)](https://realfile.tax.newmexico.gov/2025pit-adj-ins.pdf)  
  Row says: For tax year 2025, an armed forces retiree or surviving spouse of a retiree may exempt $30,000 of armed forces retirement pay from New Mexico net income (claimed on Schedule PIT-ADJ, line 24; each qualifying spouse on a joint return gets $30,000). 'Retiree' means someone who qualified by years of service or disability for lifetime benefits. A 2026 bill to remove the cap (SB 116) appears to have stalled, and a TRD analysis said the exemption sunsets after 2026, so check the 2026 instructions.

## New York (NY) - 1 flagged

- **Reduced-fee hunting and fishing licenses** (recreation, min rating: varies)  
  Source: [Reduced Fee New York State Hunting and Fishing Licenses for Disabled Veterans (NYS Dept. of Veterans' Services)](https://veterans.ny.gov/node/616)  
  Row says: Resident veterans with a service-related disability of 40% or more can get reduced-fee hunting and fishing licenses, including a Sportsman license. Annual proof from the VA is required. Contact a DEC regional office or the hotline listed by the veterans agency. The current dollar price was not confirmed.

## North Carolina (NC) - 5 flagged

- **Proposed increase to $61,000 (not law)** (property_tax, min rating: 100% P&T)  
  Source: [House Bill 118 Disabled Veterans Tax Relief Bill](https://www.ncleg.gov/BillLookUp/2025/H118)  
  Row says: House Bill 118 (2025) would raise the exclusion to $61,000. Its last action was re-referral to the House Rules Committee on 9/23/2025, and the statute text still says $45,000. A different version summarized by the UNC School of Government would tie the exclusion to the VA rating percentage, but that was an earlier draft. Check the county or the General Assembly before relying on a higher figure.
- **Registration fee and parking for disabled veterans** (vehicle, min rating: 100%)  
  Source: [G.S. 20-87 Annual license fees](https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_20/GS_20-87.html)  
  Row says: I found no official page that waives the regular annual registration fee, highway use tax, or gives parking privileges for disabled veterans. The only fee provision located is a $1.55 fee for a vehicle given by the federal government to a veteran for a war disability (G.S. 20-87). The DV plate shows a $0 special fee in addition to the regular license fee. Ask NCDMV before assuming a waiver; the disability parking placard is a separate medical program.
- **Scholarship for Children of War Veterans** (education, min rating: 100%)  
  Source: [NCDMVA Scholarship for Children of War Veterans Synopsis (Rev. 8-2021)](https://scholarships.milvets.nc.gov/Pages/NCDMVAScholarshipSynopsis.pdf)  
  Row says: The state scholarship is for the child of a wartime veteran. Class I-B covers a child of a parent rated 100% disabled by VA for wartime service, with free tuition and certain fees at public schools and $2,800 per nine-month year at private schools. Class II (parent rated 20% to under 100%, or Purple Heart) adds room and board. The child must be under 25 and an NC resident, with the application sent to NCDMVA.
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [2025 D-401 Individual Income Tax Instructions](https://www.ncdor.gov/2025-d-401-individual-income-tax-instructions/open)  
  Row says: North Carolina starts from federal adjusted gross income, and VA disability compensation is not in federal income. I did not find an NC Department of Revenue page that says this directly for VA compensation, so treat this as an inference and confirm with the Department of Revenue.
- **North Carolina State Veterans Homes** (other, min rating: varies)  
  Source: [NCDMVA North Carolina State Veterans Homes](https://www.milvets.nc.gov/divisions/north-carolina-state-veterans-homes)  
  Row says: The state runs skilled nursing homes for veterans at Black Mountain, Fayetteville, Kernersville, Kinston, and Salisbury, licensed and approved for Medicare, Medicaid and third-party insurance. The state page did not list eligibility or costs, so call 844-624-8387 for admission rules.

## North Dakota (ND) - 3 flagged

- **Vehicle Sales and Use Tax Exemption** (vehicle, min rating: 100% P&T or TDIU)  
  Source: [N.D.C.C. 39-04-19(3)](https://ndlegis.gov/cencode/t39c04.pdf)  
  Row says: Vehicles acquired by disabled veterans under Public Law 79-663 are exempt from state sales or use tax (refund if paid). It also covers a passenger vehicle or pickup at or under 26,000 pounds, limited to two such vehicles at a time. The state veterans site says the DAV plate is tied to this two-vehicle excise exemption.
- **Veteran Combined Hunting License** (recreation, min rating: 50%)  
  Source: [N.D.C.C. 20.1-03-12(46); Game and Fish Resident Licenses](https://ndlegis.gov/cencode/t20-1c03.pdf)  
  Row says: Resident disabled veteran with at least a 50% service-connected rating (or extra-schedular/unemployability) gets a combined general game, habitat stamp, small game and fur-bearer license for $10, plus a $2 certificate. Eligibility is verified through the ND Department of Veterans Affairs. A 2025 law set this at $3 but a later fee change appears to have set $10; confirm at purchase.
- **North Dakota Veterans Home (Lisbon)** (other, min rating: none)  
  Source: [North Dakota Veterans Home (ND Dept. of Veterans Affairs)](https://veterans.nd.gov/node/12799)  
  Row says: State veterans home offering basic care and skilled nursing for eligible veterans, spouses and surviving spouses with honorable service and North Dakota ties. Admission requires a formal application approved by the home's board of admissions. No disability rating required. Bed counts differ between pages, so call the home.

## Northern Mariana Islands (MP) - 4 flagged

- **CNMI government veterans' hiring preference** (employment, min rating: none)  
  Source: [Public Law 23-05 (H.B. 23-11): CNMI Government Veterans' Preference Act of 2023](https://cnmileg.net/documents/laws/public/23/PL23-05.pdf)  
  Row says: The CNMI Government Veterans' Preference Act of 2023 gives preference-eligible people (defined by reference to 5 U.S.C. 2108) added points when applying through the preferential credit of qualification process under the civil service system. The law text appears to give 2 points for the 5 U.S.C. 2108(3)(C)-(G) categories (disabled veterans and certain family members) and 1 point for the (A)-(B) categories. Apply through the CNMI Office of Personnel Management. The exact point tiers come from a scanned copy and need confirming.
- **VA benefits claims help from the CNMI Office of Veterans Affairs** (other, min rating: any service-connected)  
  Source: [CNMI Office of Veterans Affairs (Office of the Governor); the FY2024 report link no longer loads](https://governor.cnmi.gov/)  
  Row says: The CNMI Office of Veterans Affairs, under the Office of the Governor, helps veterans file federal VA claims and reports using an accredited benefits counselor, with VA service officers visiting. It also reports VA-contracted airfare for Rota and Tinian veterans traveling to medical appointments. These are federal VA programs reached through the local office, not CNMI-funded payments. Phone listed in its report is 670-664-2650. Details are from agency reports and need confirming with the office.
- **Income tax treatment of VA compensation and military pay** (income_tax, min rating: any service-connected)  
  Source: [VA News: Unlocking veteran tax exemptions across states and U.S. territories](https://news.va.gov/139592/unlocking-veteran-tax-exemptions-across-states-and-u-s-territories/)  
  Row says: The CNMI runs its own territorial income tax through the Department of Finance Division of Revenue and Taxation. Federal military benefit pages say VA disability compensation and military disability retirement pay are not taxable there, and military retired pay is taxable. We found no CNMI tax code text confirming this, so ask the Division of Revenue and Taxation before relying on it.
- **Northern Marianas College in-state tuition rate for veterans and dependents** (education, min rating: none)  
  Source: [Northern Marianas College Veteran Services](https://marianas.edu/veteran-services)  
  Row says: The college reportedly charges the resident tuition rate to qualified veterans and their dependents regardless of residency, to comply with the federal Choice Act. We did not read the college page itself, so the eligibility rules (such as GI Bill use) are unconfirmed. Contact the college's veteran services office.

## Ohio (OH) - 1 flagged

- **State income tax: VA disability compensation** (income_tax, min rating: any service-connected)  
  Source: [R.C. 5747.01 (definition of Ohio adjusted gross income)](https://codes.ohio.gov/ohio-revised-code/section-5747.01)  
  Row says: Ohio income tax starts from federal adjusted gross income, and VA disability compensation is excluded from federal gross income, so it is not part of the Ohio base. I did not find a tax.ohio.gov page that states this in so many words, so confirm with the Ohio Department of Taxation.

## Oklahoma (OK) - 5 flagged

- **100% disabled veteran homestead property tax exemption** (property_tax, min rating: 100% P&T)  
  Source: [OTC Form 998, Application for 100% Disabled Veterans Real Property Tax Exemption (Tax Year 2026, revised 11-2025)](https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/ad-valorem/current/998.pdf)  
  Row says: Full exemption from the fair cash value of the homestead (no dollar cap) for an honorably discharged head of household certified by the VA as 100% permanently disabled from military action, accident, or disease contracted in service; the unremarried surviving spouse also qualifies. Apply with OTC Form 998 plus a current VA award letter to the county assessor where the property is located. You must own and occupy the home on January 1 and have your deed recorded by February 1; a filing deadline was not stated on the form, so ask your assessor. Whether TDIU qualifies is not stated on the form.
- **Surviving spouse property tax exemption** (property_tax, min rating: 100% P&T)  
  Source: [Oklahoma Constitution Art. 10, Sec. 8E (text via 50constitutions.org; ODVA page confirms surviving spouse)](https://50constitutions.org/ok/constitution/section-id-85860)  
  Row says: The unremarried surviving spouse of a qualifying 100% disabled veteran can claim the same full homestead exemption under Section 8E, and OTC 998 has a box for 'surviving spouse of such 100% compensated veteran.' The Constitution also lets the veteran or spouse sell and buy another homestead in the same year and keep the exemption. Apply through the county assessor with the VA documentation.
- **Free permit and Wildlife Land Stamp exemption (60%+)** (recreation, min rating: 60%)  
  Source: [ODVA Benefits: Hunting and Fishing Licenses (page published 01/12/2026)](https://oklahoma.gov/veterans/benefits)  
  Row says: ODVA's page, quoting state wildlife law, lists a free hunting and fishing permit for resident veterans with 60% or more disability and an exemption from the Wildlife Land Stamp requirement. The same page says 100% rated veterans are exempt from fees for deer gun, deer archery, primitive firearms, and bonus/second deer gun licenses. Confirm the current permit process with the Wildlife Department.
- **State employment: Veterans Placement program** (employment, min rating: none)  
  Source: [OMES Civil Service FAQ (no date shown)](https://oklahoma.gov/content/dam/ok/en/omes/documents/CivilServiceFAQ.pdf)  
  Row says: The state HR office says Veterans Preference and points no longer apply to state hiring after House Bill 1146. In their place, honorably discharged veterans (Oklahoma residency not required) who submit a DD 214 to the Office of Veterans Placement are guaranteed an interview for state jobs they meet the minimum qualifications for. Special disabled veterans may choose this or the provisions of 72 O.S. 401-404, whose current text I did not confirm.
- **State college tuition for disabled veterans and dependents** (education, min rating: varies)  
  Source: [OSRHE Policy 3.18, In-State/Out-of-State Status of Enrolled Students](https://okhighered.org/wp-content/uploads/2023/12/Chapter-3-3.18-In-State-Out-of-State-Status-of-Enrolled-Students-2023.pdf)  
  Row says: I did not find a current official statute or State Regents policy that waives tuition for disabled veterans or their dependents. Verified items only: a State Regents policy gives in-state status to discharged service members who file a letter of intent to reside in Oklahoma, and a 2026 bill (HB 3956) to waive tuition for permanently disabled veterans is only introduced. Heroes Promise (children of those killed in the line of duty after 1/1/2000) is not for disabled veterans. Contact ODVA or the State Regents before relying on any waiver.

## Oregon (OR) - 4 flagged

- **Disabled Veteran license plates and permanent registration** (vehicle, min rating: any service-connected)  
  Source: [ORS 805.100 Disabled veterans; DMV Form 6736 and Chapter K](https://www.oregonlegislature.gov/bills_laws/ors/ors805.html)  
  Row says: ORS 805.100 allows registration of a vehicle for a disabled veteran who was honorably discharged (90 consecutive days of service or discharged for a service-connected injury or illness) and has a VA letter. Registration is permanent with a one-time fee under ORS 803.420; DMV Form 6736 lists $15 registration plus a plate fee (about $41 for a new standard plate). One set of plates per disabled veteran, no commercial vehicles, and the plates do not allow parking in disabled parking spaces. Apply to Oregon DMV.
- **Oregon Disabilities Hunting and Fishing Permit** (recreation, min rating: varies)  
  Source: [ODFW: Exclusive benefits for uniformed services and disabled veterans](https://myodfw.com/articles/exclusive-benefits-uniformed-services-and-disabled-veterans)  
  Row says: A veteran rated at least 65 percent can apply for the separate free Oregon Disabilities Hunting and Fishing Permit, which adds access to certain accessible fishing sites and hunting accommodations. It is not a license or tag, so you still need a license (the 25% free license covers that).
- **State parks Special Access Pass (camping and day-use parking)** (recreation, min rating: any service-connected)  
  Source: [Oregon State Parks: Special Access Pass for Veterans with Disabilities](https://stateparks.oregon.gov/index.cfm?do=v.page&id=19)  
  Row says: Oregon veterans with any level of service-connected disability can get free day-use parking at fee parks and free camping at tent, RV, and standard horse sites. The state parks page says four nights at a time at one park or four per calendar month, valid 10 years, with a VA letter and proof of Oregon address. The ODVA page says four years, and an OPRD rule adopted effective April 6, 2026 refined the pass for Oregon residents; confirm current nights and term with Oregon State Parks. Yurts, cabins, reservation and dump fees are not covered; spouses and survivors do not qualify.
- **ODVA Oregon Veteran Home Loan Program** (other, min rating: none)  
  Source: [ODVA: Home Loans](https://www.oregon.gov/odva/benefits/pages/home-loans.aspx)  
  Row says: State fixed-rate home loans for owner-occupied single-family homes, up to the Fannie Mae limit, purchase only (no refinance), with a lifetime maximum of four home loans. The page shown did not list the state program's eligibility rules or any disability-specific terms; apply through ODVA.

## Pennsylvania (PA) - 3 flagged

- **Surviving spouse of a disabled veteran: real estate tax exemption** (property_tax, min rating: 100% P&T or TDIU)  
  Source: [Department of Military and Veterans Affairs - Real Estate Tax Exemption](https://www.pa.gov/agencies/dmva/pennsylvania-veterans/pa-vetconnect/state-veterans-programs/financial-assistance/retx)  
  Row says: DMVA states the mandatory eligibility criteria are for 'disabled veterans and their surviving spouses,' so a surviving spouse can qualify under the same residency, ownership, principal dwelling, and financial need rules, with the veteran's qualifying rating. DMVA's page does not say whether remarriage ends eligibility or how the veteran's rating is proved after death. Apply through your County Director of Veterans Affairs and ask them about those points.
- **Free resident disabled veteran hunting and furtaker license (100%)** (recreation, min rating: 100%)  
  Source: [Pennsylvania Game Commission - 2026-2027 Instructions for Issuing Agents Manual (Resident Disabled Veteran licenses)](https://www.pa.gov/content/dam/copapwp-pagov/en/pgc/documents/hunttrap/licensesandpermits/2026%20instructions%20for%20issuing%20agents%20manual.pdf)  
  Row says: The Game Commission issues a free Resident DV Hunting License (annual, or lifetime at county treasurers only) to a Pennsylvania resident whose disability was 'incurred during a war or armed conflict' AND who meets one of: loss of one or more limbs, loss of use of one or more limbs, or VA certification of 100% (or 100% total compensation). Veterans with a TDIU award paid at 100% are covered by the 100% compensation wording. Get it at a county treasurer or Game Commission office with VA documentation; free licenses must be validated each year. Recent law changes (SB 1020) to drop the war requirement could not be confirmed.
- **State parks: no entrance fee; $4.50 campsite discount for people with a disability** (recreation, min rating: none)  
  Source: [Department of Conservation and Natural Resources - RV and Tent Campsites (Campsite Discounts)](https://www.pa.gov/agencies/dcnr/recreation/what-to-do/stay-overnight/rv-and-tent-campsites)  
  Row says: Pennsylvania state parks 'do not charge an entrance fee.' People with a disability can ask for a $4.50 discount off the base campsite price. DCNR's page does not say whether a VA rating counts or what proof is needed, and there is no veteran-specific park pass that I could find. Ask when you reserve at 888-727-2757 or online.

## Puerto Rico (PR) - 7 flagged

- **Full property tax exemption, disabled or impaired veteran** (property_tax, min rating: varies)  
  Source: [CRIM Exoneración Contributiva para Fines Residenciales / Exención a Veteranos (Modelo BC-89)](https://portal.crim360.com/crimpr/CMS/DOCUMENTOS/download/166.pdf)  
  Row says: A home built, bought or remodeled by a disabled or impaired (incapacitado o impedido) veteran is fully exempt from property tax, including land up to 1,000 square meters in urban zones or one cuerda in rural zones, if it is the residence of the veteran or immediate family. The statute does not state a percentage. CRIM's form lists as proof a disability determination from Social Security or a federal or Commonwealth retirement system, not only a VA rating. CRIM lists the filing deadline as on or before January 31 of the year before the tax year. Ask the CRIM office whether your VA rating (for example 100% P&T) is accepted.
- **Vehicle excise tax and license fee exemption, VA-provided vehicle** (vehicle, min rating: varies)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(C) Tercero (a)-(c)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: A car provided to a disabled veteran for personal use by or with the help of the VA (for example under the federal automobile grant) is exempt from the Puerto Rico vehicle excise tax and from vehicle license fees. A replacement car keeps the exemption if the first was owned at least 4 years. If sold within 4 years, the buyer must pay the tax. Apply through Hacienda and DTOP/CESCO; I could not confirm the current forms, so ask CESCO.
- **No vehicle license fees or driver license fees at 100% VA disability** (vehicle, min rating: 100%)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(C) Tercero (e)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: A veteran declared 100% disabled by the VA does not pay vehicle license fees (derechos de licencia) on a vehicle they own, nor the fees for obtaining a driver's license set in the Vehicle and Traffic Law. If the car is sold, license fees are imposed for that year. The statute does not say how many vehicles or how it is claimed; apply at a DTOP CESCO office with the VA rating letter. Process details need confirmation.
- **Disabled veteran removable parking placard and veteran parking spaces** (vehicle, min rating: varies)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(C) Tercero (c)-(d) and Art. 4(F)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: DTOP must provide every disabled (lisiado) veteran a removable parking placard with a mark identifying the vehicle as that of a disabled veteran. Separately, government agencies and municipalities must reserve at least one marked parking space for veterans, where they have free public parking. A veteran proves status with a DD-214, a driver's license with a veteran designation, a veteran license plate, or a valid disabled-veteran placard. The statute sets no VA percentage; ask a CESCO office what proof it requires.
- **50% discount on annual vehicle registration sticker (marbete), one vehicle** (vehicle, min rating: none)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(C) Tercero (g)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: Veterans get a 50% discount on the annual fee for the marbete of a motor vehicle. Only one vehicle per year, and it must be registered in the veteran's name. No disability rating is required by the text. The agency process (DTOP CESCO or the marbete system) and proof required are not in the statute, so confirm before relying on it.
- **Free tuition for veterans who exhaust federal education benefits** (education, min rating: none)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(B)(e)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: A veteran who has used up, or is about to use up, federal (GI Bill) education benefits before finishing a degree has the right to free tuition at the University of Puerto Rico and public postsecondary institutions, with preference on aid and scholarships. The benefit cannot exceed what the veteran would receive studying at any Puerto Rico higher education institution. Apply through the institution; confirm how it is administered.
- **Park, beach and recreation fee discount (10%)** (recreation, min rating: none)  
  Source: [Ley 203-2007, Carta de Derechos del Veterano Puertorriqueño del Siglo XXI, según enmendada (OPV compilation, Rev. Nov 2025), Art. 4(G)(a)](https://docs.pr.gov/files/OPV/Leyes/Ley%20203%20segun%20enmendada%20Rev%20NOV%202025.pdf)  
  Row says: Veterans, spouses and minor or disabled children get a 10% discount on the individual fee at national parks areas such as balnearios (beaches), zoos, aquariums, vacation centers, campgrounds and other recreation sites. The benefit passes to the surviving spouse and minor or disabled children. I did not find a DRNA or other agency page on how it is applied, so ask at the site and carry the DD-214.

## Rhode Island (RI) - 1 flagged

- **Civil service veterans hiring points** (employment, min rating: any service-connected)  
  Source: [R.I. Gen. Laws 36-4-19 Placement of names on employment lists - Listing of veterans](https://webserver.rilegislature.gov/Statutes/TITLE36/36-4/36-4-19.htm)  
  Row says: On competitive entrance tests for the state classified service (not promotions), veterans who reach the minimum passing score get 5 points added and disabled veterans get 10 points. Disabled veteran is defined in chapter 3 of title 36, which I did not read, so confirm the exact rating needed with the state Division of Human Resources. Attach the DD-214 and VA proof with the application.

## South Carolina (SC) - 4 flagged

- **Disabled veteran home property tax exemption** (property_tax, min rating: 100% P&T or TDIU)  
  Source: [S.C. Code 12-37-220(B)(1), exemption of house of eligible owner; SCDOR Exempt Property page https://dor.sc.gov/property/exempt-property](https://www.scstatehouse.gov/code/t12c037.php)  
  Row says: Exempts the house and lot (the lot is whatever qualifies for the 4% legal-residence classification, which SCDOR describes as up to five acres) from property tax for a veteran who is permanently and totally disabled from a service-connected disability. You need a certificate from the VA or county service officer showing total and permanent service-connected disability with its effective date; a rating decision letter is not accepted. Apply to SCDOR online (MyDORWAY) or by Form PT-401I; SCDOR page lists no deadline. Whether a permanent TDIU rating qualifies is not stated by SCDOR, so confirm.
- **Property tax exemption on two vehicles** (property_tax, min rating: 100% P&T or TDIU)  
  Source: [S.C. Code 12-37-220(B)(3), vehicle exemption; SCDOR Exempt Property page](https://www.scstatehouse.gov/code/t12c037.php)  
  Row says: Two private passenger vehicles owned or leased by a disabled veteran (or a spouse living with the veteran at the same address) are exempt from property tax if the veteran has a certificate of total and permanent disability from the county service officer or VA, or has the special disabled veteran plates. Vehicles must be registered with SCDMV before applying; apply through SCDOR (MyDORWAY or PT-401I). The tax must come due on or after the date of the total and permanent rating.
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [SCDOR Retirees tax tips and SC1040 instructions](https://dor.sc.gov/tax-tips/retirees-lower-your-individual-income-tax-bill-these-five-tips)  
  Row says: I found no SCDOR page that states VA disability compensation is exempt from SC income tax. SC taxable income starts from federal income and VA compensation is not federally taxable, so it is very likely not taxed, but that is an inference. Confirm with SCDOR (803-898-5700) before relying on it.
- **State Veterans Homes** (other, min rating: none)  
  Source: [SCDVA State Veterans Homes](https://scdva.sc.gov/state-veterans-homes)  
  Row says: SCDVA runs state veterans nursing homes (Stone Veterans Pavilion in Columbia, Victory House in Walterboro, Palmetto Patriots Home in Gaffney, Patriot's Village in Sumter and others). Admission requires general or honorable discharge, SC residency, and a need for skilled or intermediate nursing care. Apply through the home or your county veterans affairs officer.

## South Dakota (SD) - 1 flagged

- **Disabled veteran special hunts (deer, pheasant)** (recreation, min rating: varies)  
  Source: [Disabled Veteran/Purple Heart Recipient Special Pheasant Hunt](https://gfp.sd.gov/special-pheasant-hunt/)  
  Row says: GFP and nonprofit sponsors hold free special hunts for disabled veterans. The 2025 resident deer hunt required a VA rating of 20% or more service-connected disability, a K award, or Purple Heart; the special pheasant hunt uses the same 20% threshold for residents and nonresidents. Apply by the posted deadline (2025 deer hunt: July 31); dates change yearly.

## Tennessee (TN) - 3 flagged

- **Property tax relief for surviving spouses of disabled veterans** (property_tax, min rating: 100% P&T)  
  Source: [Comptroller of the Treasury, 2026 Property Tax Relief Program brochure](https://comptroller.tn.gov/content/dam/cot/pa/documents/tax-relief/TaxReliefBrochure.pdf)  
  Row says: A surviving spouse who has not remarried can receive the same reimbursement on the first $175,000 of market value if the veteran met the disability requirements at death. Relief also extends to spouses of veterans whose death resulted from a VA-determined service-connected, combat-related cause. Apply with the county trustee using form F-16S with a death certificate and personal ID. The tn.gov veterans page still lists an older $100,000 cap, so confirm the figure with the trustee.
- **TWRA disabled veteran hunting and fishing license** (recreation, min rating: varies)  
  Source: [Hunting and Fishing Licenses (Tennessee Department of Veterans Services)](https://www.tn.gov/veteran/veteran-benefits/tn-state-benefits/state-parks/hunting-and-fishing-licenses.html)  
  Row says: A one-time $10 hunting and fishing license, valid for life, for Tennessee residents certified by the VA as 100% permanent and totally disabled from a service-connected cause, or 30% or more disabled by reason of war service. This is a TWRA specialty license (listed as Type 198 in the state's veteran benefit matrix), so you apply with TWRA rather than at a normal agent. I could not open the TWRA application page itself.
- **Service-disabled veteran-owned business assistance and handgun permit discount** (other, min rating: varies)  
  Source: [State Benefits and Services for Veterans in Tennessee (Comptroller OREA, March 2026)](https://comptroller.tn.gov/content/dam/cot/orea/advanced-search/2026/VeteransReport.pdf)  
  Row says: The Governor's Office of Business Initiatives and Development helps service-disabled veteran-owned businesses compete for state contracts if the owner has at least a 20 percent service-connected disability. Separately, honorably discharged veterans get $35 off the initial enhanced handgun permit fee ($100 eight-year or $300 lifetime) from the Department of Safety. Neither depends on a higher rating.

## Texas (TX) - 1 flagged

- **Surviving spouse of a veteran who died from a PACT Act presumptive condition** (property_tax, min rating: varies)  
  Source: [Property Tax Exemptions (Tax Code 11.136)](https://comptroller.texas.gov/taxes/property-tax/exemptions/)  
  Row says: New under Tax Code 11.136 (HB 2508, implementing Proposition 7 approved by voters in November 2025). The unmarried surviving spouse of a veteran who died as a result of a condition the PACT Act presumes service-connected gets a total exemption on the residence homestead, regardless of the veteran's rating at death and regardless of the date of death. File with the appraisal district; the Comptroller's exemptions page now lists 11.136. Ask the appraisal district for the current form and deadline.

## U.S. Virgin Islands (VI) - 6 flagged

- **Homestead real property tax exemption (veterans and widowed spouses)** (property_tax, min rating: any service-connected)  
  Source: [VI Office of Veterans Affairs Policy Letter #6, Veterans Homestead Tax Exemption (April 15, 2020)](https://veterans.vi.gov/wp-content/uploads/2020/04/Policy-Letter-6-Veterans-Homestead-Tax-Exemptions-.pdf)  
  Row says: The Office's summary says a homestead tax exemption on the real property tax bill is offered to veterans or the widowed spouse of a veteran who occupies their primary home. The dollar amount is not stated on the Office's pages. A veteran here means active service with a discharge other than dishonorable. Get a Veteran Tax Exemption Eligibility Form signed by the Director from the Office of Veterans Affairs, then apply through the territory's tax assessor.
- **Civil service exam preference points** (employment, min rating: any service-connected)  
  Source: [Summary of State VA Benefits, VI Office of Veterans Affairs (as of March 14, 2025)](https://veterans.vi.gov/wp-content/uploads/2025/03/Summary-of-Local-Benefits-Revised-March-14-2025-.pdf)  
  Row says: The Office's summary lists 10 points added to a veteran's score on local civil service examinations and 15 points for disabled veterans. A disabled veteran is one with a service-connected disability currently rated at 0% or more, and the widow or spouse of a disabled veteran gets the same benefit. The Code section was not found, so confirm with the territory's Department of Human Resources.
- **Off-island medical travel reimbursement** (other, min rating: none)  
  Source: [VI Office of Veterans Affairs Policy Letter #3, Medical Travel Reimbursements (April 15, 2020); OVA testimony Dec. 2, 2025](https://veterans.vi.gov/wp-content/uploads/2020/04/Policy-Letter-3-Medical-Travel-Reimbursement.pdf)  
  Row says: Under Policy Letter #3, veterans traveling to the closest VA medical facility for a non-service-connected appointment verified by the local clinic get 100% flight reimbursement; companions are covered if the doctor says so in writing, or for age 70 and over. The 2025 Act 8991 reportedly adds up to 2 mainland trips a year, but the Act's text was not read and the Office asked the Legislature to revisit it. Apply through the Office before traveling; funds are limited.
- **Free emergency ambulance service** (other, min rating: none)  
  Source: [Summary of State VA Benefits, VI Office of Veterans Affairs (as of March 14, 2025)](https://veterans.vi.gov/wp-content/uploads/2025/03/Summary-of-Local-Benefits-Revised-March-14-2025-.pdf)  
  Row says: The Office's summary says free emergency ambulance service is available to all veterans residing in the U.S. Virgin Islands. How to enroll is not stated; ask the Office.
- **Income tax on military retirement and VA compensation** (income_tax, min rating: none)  
  Source: [V.I. Bureau of Internal Revenue](https://bir.vi.gov)  
  Row says: The Virgin Islands has its own income tax that follows the federal Internal Revenue Code (the 'mirror code'). No official Bureau of Internal Revenue page on military retirement pay or VA compensation was found, so how they are treated is unconfirmed. Ask the Bureau of Internal Revenue (bir.vi.gov) before filing.
- **Hunting and fishing license fee exemptions** (recreation, min rating: none)  
  Source: [DPNR: new online recreational fishing license system](https://dpnr.vi.gov/press_releases/dpnr-launches-new-online-recreational-fishing-license-system-for-the-virgin-islands/)  
  Row says: The Department of Planning and Natural Resources requires a recreational fishing license through GoOutdoorsUSVI and says some groups may get fee exemptions. No official source naming veterans was found. Call the Division of Fish and Wildlife (St. Croix 340-773-1082, St. Thomas 340-775-6762).

## Utah (UT) - 5 flagged

- **Disabled veteran property tax exemption (primary residence and personal property)** (property_tax, min rating: 10%)  
  Source: [Utah Code 59-2a-501, Veteran armed forces exemption amount (effective 1/1/2026)](https://le.utah.gov/xcode/Title59/Chapter2a/C59-2a-S501_2026010120250507.html)  
  Row says: The taxable value exempt equals your disability percentage multiplied by the adjusted taxable value limit, never more than the property's taxable value. Utah law says a county must treat you as 100% disabled if the VA certifies you as individually unemployable (TDIU). The minimum is 10%. The limit is raised every year using the consumer price index, so ask your county for the current dollar amount (the Tax Commission's draft Pub. 36 says up to $535,459; an older state booklet says $505,548). It covers your primary residence (including one you cannot live in because you are an inpatient in a health care facility) and personal-use property such as vehicles. File with the county where you live by September 1 with proof of service and a statement of disability from the VA or a military branch.
- **Property tax exemption - surviving spouse or minor orphan** (property_tax, min rating: varies)  
  Source: [Utah Code 59-2a-501(3); 59-2a-101 'veteran claimant'](https://le.utah.gov/xcode/Title59/Chapter2a/C59-2a-S501_2026010120250507.html)  
  Row says: The unmarried surviving spouse or minor orphan of a veteran killed in action or who died in the line of duty gets an exemption equal to the total taxable value of the eligible property (59-2a-501(3)). The unmarried surviving spouse or minor orphan of a deceased veteran with a disability is also a covered claimant under 59-2a-101, with the amount tied to the disability percentage on the statement of disability; the full-value rule in (3) lists pre-1921 veterans only for that group. Apply to the county by September 1 and verify the amount with the county.
- **Disabled Veteran license plate** (vehicle, min rating: any service-connected)  
  Source: [Disabled Veteran plate - Utah DMV](https://dmv.utah.gov/plates/license-plates/disabledveteran/)  
  Row says: The plate recognizes Utah resident disabled veterans. You need a letter from the Utah Department of Veterans and Military Affairs or another U.S. military entity certifying disabled status. Fees listed: $0 contribution, standard plate fee $8.25 (special group fee $5.00, registration certificate $4.00, $3.00 to order a set, plus shipping). It does not give handicapped parking; get a disabled windshield placard separately. The DMV page does not state a minimum percentage or how many plates you may get.
- **Veterans With Disabilities Honor Pass (state parks)** (recreation, min rating: any service-connected)  
  Source: [Park Passes - Utah State Parks](https://stateparks.utah.gov/park-passes/)  
  Row says: Free day-use entry for the qualified veteran and up to seven guests in the same vehicle at Utah state parks. You must be a Utah resident, honorably discharged, with a documented service-connected disability (a current VA Summary of Benefits letter works). The pass system is being updated in 2026, so 2025 passes are still accepted; the department also says a lifetime pass is planned pending federal approval. It is day-use only and does not cover camping or special fees.
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [2025 Utah TC-40 Instructions, Line 4 Federal Adjusted Gross Income](https://files.tax.utah.gov/tax/forms/current/tc-40inst.pdf)  
  Row says: Utah's return starts from federal adjusted gross income (TC-40 line 4), so VA disability compensation that is not included in federal income is not in the Utah starting figure. We did not find a Utah page that says this about VA compensation by name. Confirm with the Tax Commission if you have a question.

## Vermont (VT) - 4 flagged

- **Disabled Veteran license plate** (vehicle, min rating: any service-connected)  
  Source: [Military License Plates (Vermont DMV)](https://dmv.vermont.gov/military/military-license-plates)  
  Row says: DMV issues a Disabled Veteran plate; required forms are the Vermont Certificate of Veteran Status (VG-168, certified by the Office of Veterans Affairs) and a Universal Medical Evaluation (VS-113) unless a medical was filed within four years. The DMV page does not state a minimum rating. The separate disabled parking plate or placard (no extra fee for one set) goes to people who are blind or have an ambulatory disability.
- **VA disability compensation and state income tax** (income_tax, min rating: any service-connected)  
  Source: [Vermont Department of Taxes: Military and Veterans](https://tax.vermont.gov/node/604)  
  Row says: VA disability compensation is excluded from federal gross income, and Vermont income tax starts from federal AGI, so it should not be taxed. I could not find an official Vermont tax page that states this directly; confirm with Vermont Department of Taxes.
- **In-state tuition for veterans (UVM)** (education, min rating: none)  
  Source: [UVM Tuition Billing for Qualifying Federal Service, Guard, Veterans and Families](https://uvm.edu/policies/tuition-billing-members-qualifying-federal-service-vermont-national-guard-veterans-and)  
  Row says: UVM charges the in-state rate to qualifying veterans and some family members even if not a Vermont resident, based on federal Higher Education Opportunity Act rules; a review is done each term. This is not a disability-based waiver and the exact eligibility must be confirmed with UVM.
- **Vermont Veterans' Home (Bennington)** (other, min rating: none)  
  Source: [Vermont Veterans' Home: Admissions Eligibility](https://www.vvh.vermont.gov/admissions/eligibility)  
  Row says: State skilled nursing facility; Vermont veterans have admission priority. Eligible veterans served at least ninety days and were discharged under honorable conditions. Apply through the Admissions Department, 802-447-6539.

## Virginia (VA) - 2 flagged

- **Real property tax exemption, surviving spouse of service member killed in line of duty** (property_tax, min rating: varies)  
  Source: [Constitution of Virginia, Art. X, Sec. 6-A](https://law.lis.virginia.gov/constitution/article10/section6-A/)  
  Row says: The Constitution (Art. X, Sec. 6-A(b)) lets the General Assembly exempt the principal residence of the surviving spouse of a service member who died in the line of duty with a DoD Line of Duty determination; the exemption ends on remarriage. This is an enabling provision; confirm the implementing statute and local application with your commissioner of the revenue.
- **Annual registration fee waiver, one vehicle** (vehicle, min rating: any service-connected)  
  Source: [Code of Virginia 46.2-739(C)](https://law.lis.virginia.gov/vacode/title46.2/chapter6/section46.2-739/)  
  Row says: No annual registration fee and no annual special plate fee for one motor vehicle owned and used personally by a disabled veteran with VA-certified service-connected disability (or an unremarried surviving spouse), if it displays DV plates or standard passenger plates. The 2026 statutory text sets no rating minimum; the public DMV plate page still describes narrower categories (loss of limb, blind, or P&T), so confirm with DMV.

## Washington (WA) - 2 flagged

- **Disabled veteran parking permit** (vehicle, min rating: 70%)  
  Source: [Disabled veteran parking](https://dol.wa.gov/driver-licenses-and-permits/get-or-renew-disabled-parking-permits/disabled-veteran-parking)  
  Row says: DOL lists a qualifying discharge with a 70 percent disability rating or higher, plus use of a service animal; the page does not clearly say whether both are required, so confirm with DOL. Permits last 5 years and allow free parking in time-restricted street spaces, including meters, and use of designated disabled spaces. It does not cover private lots or reserved zones.
- **Veteran tuition waiver at state colleges** (education, min rating: varies)  
  Source: [Washington Tuition Waiver](https://dva.wa.gov/veterans-their-families/veterans-benefits/education-and-training/washington-tuition-waiver)  
  Row says: WDVA says state law lets colleges and universities waive all or a portion of tuition and fees for eligible veterans and National Guard members, and each school runs its own program with no uniform rating threshold. Contact the school's veteran services office for eligibility and amounts.

## West Virginia (WV) - 7 flagged

- **Homestead property tax exemption (first $20,000 of assessed value)** (property_tax, min rating: varies)  
  Source: [W. Va. Code 11-6B-3 (and 11-6B-4 claim filing)](https://code.wvlegislature.gov/11-6B-3/)  
  Row says: Statute exempts the first $20,000 of assessed value of an owner-occupied homestead for an owner who is 65 or older or certified permanently and totally disabled; a written certification from the VA that the person is totally and permanently disabled is an accepted proof. Two consecutive years of WV residency are required (with a military-return exception). File with the county assessor on or before December 1 after the July 1 assessment date. The WVDVA page describes it for veterans rated 90-100 percent permanent and disabled and says to contact the county assessor. I did not find an official statement on how it interacts with the DV-1 credit, so ask the assessor.
- **Disabled veteran license plates (no fee)** (vehicle, min rating: 100% P&T)  
  Source: [WVDVA State Benefits - Veteran License Plates](https://veterans.wv.gov/benefits-assistance/benefits/state-benefits)  
  Row says: WVDVA says special license plates and disabled veteran tags are provided without fee to veterans who qualify for the VA auto grant or have a 100 percent permanent and total service-connected rating; former POWs, Purple Heart recipients and Pearl Harbor survivors also get special plates without fee. Other honorably discharged veterans can get veterans plates for a one-time $10 over the regular fee. Apply on the DMV military plates page and contact the local DMV office. I could not open the DMV forms directly, so parking-placard and insurance/litter fee details are unconfirmed.
- **Fishing license exemption and trout stamp waiver** (recreation, min rating: 100% P&T)  
  Source: [WV Fishing Regulations Summary 2025](https://wvdnr.gov/wp-content/uploads/2025/01/Pub_Regs_Fishing2025_DNR_WILD_Interactive_20250107.pdf)  
  Row says: The DNR fishing regulations list residents who are disabled veterans receiving 100% permanent service-connected disability, and former POWs, among those not required to buy a fishing license, and state they must carry a card issued by the DNR. Apply through the DNR (WVDVA says a printable application is on the DNR website). This is the 2025 regulations edition; confirm it still applies for 2026.
- **State parks Veterans' Salute lodging discount** (recreation, min rating: none)  
  Source: [WVDVA State Benefits - West Virginia State Parks Veterans' Salute](https://veterans.wv.gov/benefits-assistance/benefits/state-benefits)  
  Row says: WVDVA states veterans and active-duty military receive a 10 percent discount on standard lodge rooms, cabins and campsites at WV State Parks year-round, with extra seasonal offers. No disability rating is required. I could not load the State Parks deal page to confirm the current code or exclusions. No free state park pass for disabled veterans was found.
- **Tuition waiver for Medal of Honor and Purple Heart recipients** (education, min rating: varies)  
  Source: [WVDVA Education Benefits](https://veterans.wv.gov/benefits-assistance/benefits/education-benefits)  
  Row says: WVDVA lists a Medal of Honor and Andrew J. Trail Purple Heart Recipient Tuition Waiver: all public institutions of higher education waive tuition and mandatory fees for West Virginia residents awarded the Medal of Honor or Purple Heart. Eligibility depends on the award, not a VA rating percentage. I did not find the controlling statute section.
- **War Orphan Education Program (dependents)** (education, min rating: 100% P&T)  
  Source: [WVDVA Education Benefits - War Orphan Program](https://veterans.wv.gov/benefits-assistance/benefits/education-benefits)  
  Row says: WVDVA says a surviving spouse or child under 26 of a veteran who died on active duty or from a service-connected cause, or of a permanently and totally disabled service-connected veteran, may have tuition and fees waived at WV public schools after DEA/Fry benefits, plus up to $1,000 per semester ($2,000 per year). The enabling statute (W. Va. Code 18-19-1 through 18-19-4) shows as repealed by 2025 HB 3192, so confirm with WVDVA that the program is still operating before relying on it.
- **Veterans Re-education Assistance stipend** (education, min rating: none)  
  Source: [WVDVA Education Benefits - Veterans Re-education Assistance](https://veterans.wv.gov/benefits-assistance/benefits/education-benefits)  
  Row says: WVDVA says the Legislature funds a program of up to $500 per semester for veterans enrolled in a certified post-secondary education course, and may assist vocational and non-traditional education case by case. I could not confirm current funding, eligibility details or application deadline.

## Wisconsin (WI) - 2 flagged

- **VA disability compensation and Wisconsin income tax** (income_tax, min rating: any service-connected)  
  Source: [Wisconsin Department of Revenue Publication 128 (1/26), Part 4.B Federal Disability Payments](https://www.revenue.wi.gov/DOR%20Publications/pb128.pdf)  
  Row says: Wisconsin Publication 128 says Wisconsin follows the federal treatment of military disability pensions. VA disability compensation is not part of federal income, and Wisconsin income starts from federal adjusted gross income, so it is not taxed. The Wisconsin page I read does not state this about VA compensation in plain words, so confirm with the Department of Revenue at (608) 266-2486 if you need certainty.
- **Wisconsin Veterans Homes (Chippewa Falls, King, Union Grove)** (other, min rating: none)  
  Source: [Wisconsin DVA - Wisconsin Veterans Homes](https://dva.wi.gov/services/wisconsin-veterans-homes/)  
  Row says: WDVA runs three veterans homes that provide 24-hour skilled nursing care to veterans, their spouses, and Gold Star Parents. I did not confirm the admission criteria, cost rules, or any disability-rating link on an official page, so ask the home or WDVA before relying on any specific rule. Homes: Chippewa Falls 715-720-6775, King 715-258-5586, Union Grove 262-838-6700.

## Wyoming (WY) - 2 flagged

- **Lifetime game bird, small game and fish license (100% disabled)** (recreation, min rating: 100%)  
  Source: [Wyoming Game and Fish Disabled Veteran License/Permit Application; Wyo. Stat. 23-1-705(d)(ii)](https://wgfd.wyo.gov/media/34070/download)  
  Row says: Game and Fish issues lifetime game bird, small game and fish licenses without charge to an honorably discharged resident veteran who is 100% disabled as determined by the VA. Game and Fish regulation says '100% disabled does not refer to disability compensation', and the license stays valid only while you remain a Wyoming resident. Apply with proof of residency and VA letterhead documentation. It does not cover big game licenses.
- **Disabled veteran hunter permit and hunting season extension permit** (recreation, min rating: varies)  
  Source: [Wyoming Game and Fish Disabled Veteran License/Permit Application (Commission Reg. Ch. 35, Sec. 5(f) and 10(a)(ii))](https://wgfd.wyo.gov/media/34070/download)  
  Row says: Game and Fish lists a Disabled Veteran Disabled Hunter Permit for veterans with a VA decision letter (issued within the past 5 years) showing at least 70% service-connected disability, and a Hunting Season Extension Permit that lets a veteran with a 100% service-connected rating hunt antelope, deer or elk 5 days before the regular season opens. The department's form describes both, but I did not confirm full permit rules (what the disabled hunter permit allows). Apply through Game and Fish headquarters or a regional office.

## Federal items (from docs/research/federal-*.md)


### federal-health-education.md

- line 2: Verified Oct 16, 2026 against va.gov / benefits.va.gov / law.cornell.edu (eCFR blocked scripted fetches; LII mirrors used).
- line 10: - NEEDS VERIFICATION: content of 91 FR 47143 (July 28, 2026) amendment to 17.108.
- line 16: - NEEDS VERIFICATION: remarriage rules for surviving spouses.
- line 20: - Trigger: veteran "permanently and totally disabled due to a service-connected disability" (38 USC 3501(a)(8), 38 CFR 21.3021(p), 3.340(b)). A 100% not marked permanent does NOT qualify. TDIU marked P&T is a total rating; VA pages do not spell out "TDIU" (NEEDS VERIFICATION wording).
- line 23: - Form 22-5490. 2026 change: Ch 35 no longer pays for secondary (high school) programs starting on/after Aug 1, 2026 (PL 117-328) NEEDS VERIFICATION of article details.

### federal-hiring-commissary-forms.md

- line 8: ## Commissary/Exchange/MWR (since Jan 1, 2020): Purple Heart, former POW, ANY SC rating 0-90% (100%/TDIU already had access), PCAFC primary caregivers. Credential: VHIC marked SERVICE CONNECTED/PURPLE HEART/FORMER POW; or since Nov 1, 2024 REAL ID at visitor center for base access + VA SC letter/H623A at the store. DD214 alone NOT accepted. Small card-fee surcharge at commissary (percent NEEDS VERIFICATION). Online e
- line 15: ## SSA expedited for 100% P&T: https://www.ssa.gov/people/veterans/ (fetch blocked; NEEDS VERIFICATION). Write "Veteran 100% P&T" in Remarks; attach VA letter. Pub EN-05-10565.
- line 19: ## Fee rules: 38 USC 5904(c)(1) no fee before initial decision notice; 20% presumed reasonable; 38 CFR 14.636(f) >33 1/3% presumed unreasonable; written agreement filed within 30 days. VA "claims predators" https://news.va.gov/133852/beware-claims-predators-want-to-prey-on-your-benefits/ ; report VSAFE.gov 1-833-388-7233. GUARD VA Benefits Act (H.R. 1732) hearing 3/18/2026, not passed (NEEDS VERIFICATION).
- line 25: ## COLA: Dec 1, 2025 rates = 2.8% COLA. SSA announced 3.6% COLA Oct 14, 2026 for 2027; VA Dec 1, 2026 rates not yet posted; Veterans' Compensation COLA Act of 2026 enactment NEEDS VERIFICATION.

### federal-smc-tdiu-grants.md

- line 2: Verified Oct 16, 2026 (va.gov, law.cornell.edu; dfas.mil blocked scripted fetch, so DFAS items are from snippets + 10 USC 1413a/1414 + VA 2026 Federal Benefits guide).
- line 16: DFAS: https://www.dfas.mil/retiredmilitary/disability/crdp/ , https://www.dfas.mil/retiredmilitary/disability/crsc/ (re-verify by hand).
- line 17: Major Richard Star Act: NOT enacted as of Oct 2026 per non-official sources; NEEDS VERIFICATION.
- line 22: ## Auto allowance 38 CFR 3.808: loss/loss of use foot/hand, vision 20/200, severe burns, ALS; ankylosis knee/hip = adaptive equipment only. Oct 1, 2025: $27,074.99 (VA guide; NEEDS VERIFICATION on rates page). Oct 1, 2026: $27,908.90 https://www.va.gov/disability/compensation-rates/special-benefit-allowance-rates/ . Forms 21-4502, 10-1394.
- line 25: Exempt: receiving SC compensation; eligible but receiving retired/active pay instead; surviving spouse on DIC; pre-discharge memorandum rating; Purple Heart active duty. First use <5% down 2.15%, subsequent 3.3%; IRRRL 0.5%. Form 26-1880. 2026: funding fee now tax-deductible per VA News Feb 18, 2026 (legal basis NEEDS VERIFICATION).
