# ATOmate homepage — content and section spec

The content of record for the homepage as accepted at Gate 03 (Eugene, 9 Sep 2026).
Copy is the client's, from "ATOmate Updated Docs" (7 Sep 2026 PDF,
`../Guide & References/ATOmate V2/`) and the brand guide. **Do not rewrite it.**
Lorem ipsum and `00%` mark copy the client has not supplied yet; they stay until
real text lands. Structure, wrapper names and design notes are the system's.

**Read `CLAUDE.md` first.** Everything here assumes the settled decisions.

---

## Page-level

| Field | Value |
|---|---|
| `h1` count | Exactly one — the hero. Every other section heading is `h2`. |
| Title tag | Draft: `ATOmate — Fast \| Simple \| Secure ATO document automation` (from the key line; confirm) |
| Meta description | Draft: the footer tagline, `Fast \| Simple \| Secure ATO document automation for accounting practices.` (confirm) |
| Locale | `en-AU`, Australian spelling |
| Nav | Lockup (white over the hero, colour when solid) · Features · How it works · Integrations · Security · Insights · CTA |
| CTA label | **"Book discovery meeting"** everywhere. Eugene's shortening of the source "Book a discovery meeting" — flagged for the client. |
| Robots | `noindex, nofollow` while it is a review site |

---

## Section order

Thirteen sections plus the footer, in the accepted order. Ground = the stage class
in `style.css`.

| # | Ground | Client-First wrapper (as built) | Purpose | CTA |
|---|---|---|---|---|
| 1 | night | `section-home_hero` | The claim + the arrow | Yes |
| 1b | night | `home_hero_stats` (inside `section-home_hero`, same gradient) | Giant numerals (belongs to the hero visually) | No |
| 2 | day | `section-home_integrations` | Tabs: PMS / DMS / SMSF logos | No |
| 3 | white | `section-home_comparison` | Without / With ATOmate | No |
| 4 | day | `section-home_process` | How ATOmate works — 5 steps, click to reveal | No |
| 5 | night | `section-home_overnight` | Overnight processing, queue UI | Yes |
| 6 | day | `section-home_review` | Review less — three cards | No |
| 7 | white | `section-home_filing` | Matched, filed and tracked | Yes |
| 8 | dawn | `section-home_payg` | Give clients more time to act | Yes |
| 9 | white | `section-home_informed` | Pull quotes beside UI | No |
| 10 | day | `section-home_messaging` | Clear guidance, email card, channels | Yes |
| 11 | white | `section-home_security` | Credentials line + two UI cards | No |
| 12 | day | `section-home_testimonials` | Why 2,000+ practices choose ATOmate | No |
| 13 | morning | `section-home_cta` | Closing CTA | Yes |
| — | white | `footer_component` | Lockup, tagline, link columns | — |

---

## 1. Hero (`.stage-night`)

- H1 (two lines, `90%` in orange-300): **Reduce manual ATO document processing by 90%**
- Lead: **Fast, simple, secure ATO document processing for accountants**
- CTA: Book discovery meeting (white button)
- Arrow labels: **Overnight** (bottom-left, white) · **Next-day approval** (top-right, orange)
- Motion: copy fades up; the arrow draws (see `docs/Gate-04-Motion-Spec.md`)

### 1b. Stats row (same navy)

| Number | Label |
|---|---|
| **2,000+** | practices *(source: new headings; the brand guide eDM says 1,500 — client flag)* |
| **90%** (orange) | less manual processing |
| 00% ×3 | Lorem ipsum dolor — dimmed until real numbers exist |

Count-up runs on the two real numbers only.

## 2. Integrations (`.stage-day`)

- H2: **ATOmate works with the tools your team already uses**
- Lead: lorem
- Tabs: **Practice management** (default) · **Document management** · **SMSF**
- PMS shelf: MYOB, Xero, Wolters Kluwer CCH iFirm, LodgeiT, APS, Access Elite, Access HandiSoft, Access Practice, Kloud Connect, Class
- DMS shelf: Box, Dropbox, FYI, Google Drive, HowNow, iManage, Network folders, Nimbus, OneDrive, SharePoint, SuiteFiles, Virtual Cabinet
- SMSF shelf: BGL, Class
- Logos on white elevated cards, no grid border. The logo marquee from the brief is dropped (redundant with this section).

## 3. Comparison (white)

- H2: **Reduce ATO document processing time by 90%**
- Lead: lorem
- **Without ATOmate** (navy card, muted ✕): Time-consuming, error-prone manual processing · Missed PAYG instalment notices and other ATO correspondence · Manual TFN redaction and PRN protection · Manual filing with no audit trail · Admin team stretched thin · Delayed documents. Frustrated clients.
- **With ATOmate** (white card, blue ✓): Automatic ATO document processing from capture to filing · All ATO documents captured automatically overnight · Automatic TFN redaction and PRN protection · Automatic filing with a complete audit trail · More capacity to improve client relationships · Timely delivery, better client experience
- Orange arrow button between the cards. No bridge, no giant 90%.

## 4. How ATOmate works (`.section_process .stage-day`)

- H2: **How ATOmate works** · lead: lorem
- Steps (clickable cells): **Capture & identify** · **Verify** · **Protect** · **Review & approve** · **Communicate & archive**
- Reveal panel: step title + body (all five bodies lorem until supplied). Step 1 open by default. Panel keeps its height.

## 5. Overnight processing (`.stage-night`)

- H2: **Overnight processing. Next-day approval.** · lead: lorem
- Three check items: lorem
- CTA: Book discovery meeting (ghost, light)
- UI card "Overnight queue" (chip **Overnight**): PAYG instalment notice — Captured · Notice of assessment — Verified · Activity statement — TFN redacted · Statement of account — Ready for approval · footer "Next morning" + button **Approve all**

## 6. Review less (`.stage-day`)

- H2: **Review less. Approve faster. Your rules.** · lead: lorem
- Three cards (two white, one navy): H3 lorem + small lorem, each with a mini UI strip.

## 7. Filing (white)

- H2: **Automatically matched, filed and tracked** · lead: lorem
- CTA: Book discovery meeting (ghost)
- Three row cards: H3 lorem + "Consectetur adipiscing elit sed do eiusmod."

## 8. PAYG (`.stage-dawn`)

- H2: **Give clients more time to act** · lead: lorem
- Card A "PAYG instalment notice" (chip Captured / Same day): lorem line
- Card B "Client notified" (chip Due in 21 days): Delivered · Read · Scheduled; lorem line
- CTA: Book discovery meeting (white)

## 9. Better informed (white)

- H2: **Better informed clients, better experience**
- Two pull quotes (lorem) with attribution "Lorem Ipsum, Partner, Dolor Sit Amet Accounting", each beside a UI card: "Client communication" (chip Your firm's voice) and "Approval & tracking" (chip Filed; rows Approved · Approved · Awaiting approval)

## 10. Messaging (`.stage-day`)

- H2: **Replace generic ATO messaging with clear guidance**
- Lead: **Swap generic ATO messaging with automated, client-ready communication in your firm's voice.**
- Three check items: **Ready-made email templates for all ATO correspondence** · **Clear next steps to enhance client experience** · **Automated client communication, based on your rules**
- CTA: Book discovery meeting (ghost)
- Email card on a navy panel: from "Lorem Ipsum Accounting · to Sarah · 7:02 am", chip Sent; "Hi Sarah, / Your PAYG instalment notice is ready. Here's what it means and what to do next."; attachment PAYG-instalment-notice.pdf, chip PIN-protected; button **Customise**
- Label **Send the way your clients prefer**, channel pills: **Email · Post · Portal · App · PIN-protected email**

## 11. Security (white)

- H2: **Built-in security your team never has to think about** · lead: lorem
- Credentials line: **ATO-registered software product · Secure ATO integration · ISO 27001 certified · Encrypted email communications**
- Card 1 — UI "Subject: Your Notice of Assessment" (chip TFN redacted; to Sarah Chen; "Hi Sarah, Please find your document attached."; TFN 123 456 789 redacted; button **Send**). H3 **Redact TFNs automatically**. Copy: **TFNs automatically redacted on capture to protect client data and reduce compliance risk.**
- Card 2 — UI "Payment reference document" (chip PIN-protected; button **Open document**). H3 **Protect PRN data**. Copy: **Documents with TFN-based PRNs are automatically PIN-protected. Clients receive the PIN via SMS for secure access.**

## 12. Testimonials (`.stage-day`)

- H2: **Why 2,000+ practices choose ATOmate**
- One featured navy quote card + two small cards; prev/next arrows rotate the queue (pending Eugene's confirmation).
- All three quotes and attributions are lorem ("Bluebird Accounting", "Dolor Sit Amet Accounting", "Kennedy King Chartered Accountants" are placeholders). The current site has only two real testimonials — client flag.

## 13. CTA (`.stage-morning`)

- H2: **Ready to cut your ATO document processing time by 90%?**
- Lead: lorem
- CTA: Book discovery meeting (blue)
- Full-colour mark ghosted at the right.

## Footer

- Lockup + **Fast | Simple | Secure ATO document automation for accounting practices.**
- Product: Features · How it works · Integrations · Security
- Company: About BAW · Omble · Insights · Contact
- Contact: 1300 054 466 · hello@lorem.ipsum · Lorem Ipsum Street, Dolor VIC 3000 *(email and address are placeholders)*
- © 2026 ATOmate. Powered by BAW. · Privacy · Terms

---

## Flags carried from the Project (`docs/Approval-Status.md`)

BAW lockup size · Gilroy Bold missing · orange usage vs brand guide · CTA wording ·
partner logos (APS / Wolters Kluwer PNGs from Omble; the supplied SVGs are broken
wrappers) · lorem and `00%` content · sample UI names · 1,500 vs 2,000+ ·
testimonials count/attribution · product screenshots · hero video.
