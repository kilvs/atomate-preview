# ATOmate homepage — content and section spec

The content of record for the homepage. Copy is the client's, supplied through the
internal review of 9 Sep 2026 ("ATOmate Content QA" and "ATOmate Design QA" PDFs),
which superseded the 7 Sep "ATOmate Updated Docs" extract and the lorem placeholders.
**Do not rewrite it.** The remaining placeholders are sample names inside mock UI
panels and the footer contact details. Structure, wrapper names and design notes are the system's.

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
| CTA label | **"Book Discovery Meeting"** everywhere (Content QA, 9 Sep). Resolves the earlier "Book discovery meeting" flag. |
| Robots | `noindex, nofollow` while it is a review site |

---

## Section order

Thirteen sections plus the footer, in the accepted order. Ground = the stage class
in `style.css`.

| # | Ground | Client-First wrapper (as built) | Purpose | CTA |
|---|---|---|---|---|
| 1 | night | `section-home_hero` | Kicker, claim, sub-claim, centred | Yes |
| 1b | night | `home_hero_stats` (inside `section-home_hero`, same gradient) | Giant numerals (belongs to the hero visually) | No |
| 2 | day | `section-home_integrations` | Centred heading, underline tabs: PMS / DMS / SMSF logos | No |
| 3 | white | `section-home_comparison` | Without (white) / With (navy) + closing lead | Yes |
| 4 | day | `section-home_process` | How ATOmate works — 5 steps, click to reveal | Yes |
| 5 | night | `section-home_overnight` | Overnight processing, "Every ATO document, captured" panel | Yes |
| 6 | day | `section-home_review` | Review what matters — three cards | Yes |
| 7 | white | `section-home_filing` | Matched, filed and tracked — three cards | Yes |
| 8 | dawn | `section-home_payg` | Give clients more time to act | Yes |
| 9 | white | `section-home_informed` | Two copy blocks paired with two customer quotes | Yes |
| 10 | day | `section-home_messaging` | Clear guidance, email card, channels | Yes |
| 11 | white | `section-home_security` | Credentials line + two UI cards | No |
| 12 | day | `section-home_testimonials` | Six quotes, three visible, rotation | No |
| 13 | morning | `section-home_cta` | Closing CTA | Yes |
| — | white | `footer_component` | Lockup, tagline, link columns | — |

---

## 1. Hero (`.background-stage-night`)

- Kicker: **Fast. Simple. Secure.**
- H1: **Automate your firm's ATO document processing**
- Sub-claim (heading font, `90%` in orange-300): **Reduce manual work by 90%**
- Lead: **Automate every step from capture to archive without losing control.**
- Note: **The ATO document automation software built for accounting firms.**
- CTA: Book Discovery Meeting (white button)
- Centred copy on the plain navy ground; no arrow (removed 10 Sep).
- *Client flag:* the source shows an **ISO 27001 certified logo** beside the CTA; no file supplied.

### 1b. Stats row (same navy)

- H2: **Trusted by 2,000+ firms of every size**

| Cell | Label |
|---|---|
| **Australian-owned & operated** | text cell |
| **90%** (orange, count-up) | less manual processing |
| **500+** (count-up) | hours recovered · *annually for practices with 10+ team members* |
| **100%** (count-up) | of ATO documents captured |
| **ATO registered software** | text cell |

## 2. Integrations (`.background-stage-day`)

- H2 (centred, no description): **ATOmate works with the tools your team already uses**
- Tabs (centred, icon + label, orange underline on the active tab): **Practice management** (default) · **Document management** · **SMSF**
- PMS shelf (order confirmed): MYOB, Xero, Wolters Kluwer CCH iFirm, LodgeiT, APS, Access Elite, Access HandiSoft, Access Practice, Kloud Connect, Class
- DMS shelf (order per Content QA): FYI, Virtual Cabinet, SuiteFiles, iManage, Nimbus, SharePoint, HowNow, Dropbox, Box, Google Drive, OneDrive, Network folders, **+ more!** (text tile). *Client flag:* the source also lists **HowNow X**; no logo supplied.
- SMSF shelf: BGL, Class
- Logos on white elevated cards, centred rows.

## 3. Comparison (white)

- H2: **Still processing ATO documents manually?**
- Lead: **Manual processing overwhelms admin teams, creates errors and leads to endless client follow-up.**
- **Without ATOmate** (white card with border, red ✕): Time-consuming, error-prone manual processing · Missed PAYG instalment notices and other ATO correspondence · Manual TFN redaction and PRN protection · Manual filing with no audit trail · Admin team stretched thin · Delayed documents. Frustrated clients.
- **With ATOmate** (navy card, blue ✓): Automatic ATO document processing from capture to filing · All ATO documents captured automatically overnight · Automatic TFN redaction and PRN protection · Automatic filing with a complete audit trail · More capacity to improve client relationships · Timely delivery, better client experience
- Orange arrow button between the cards.
- Closing lead: **ATOmate enhances communication and delivers a consistent experience to keep clients ahead of their tax obligations.** · CTA: Book Discovery Meeting (blue)

## 4. How ATOmate works (`.background-stage-day`)

- H2: **How ATOmate works** (no description)
- Steps (clickable cells) and panel copy:
  - **Capture & identify** — Every ATO document is captured overnight and matched to the right client using their ABN or TFN.
  - **Verify** — ATO documents are cross-checked against ATO and practice management data.
  - **Protect** — TFNs are automatically redacted. Documents with a TFN-based PRN are sent as PIN-protected PDFs.
  - **Review & approve** — Documents that meet your rules are approved. Flagged items are sent for review.
  - **Communicate & archive** — Send client-ready communications automatically or on your own terms. Get a full audit trail upon filing.
- Step 1 open by default. No arrow in the panel (Design QA). CTA: Book Discovery Meeting (ghost)

## 5. Overnight processing (`.background-stage-night`)

- H2: **Overnight processing. Next-day approval.**
- Lead: **ATO documents can take days to reach your practice and your clients. ATOmate captures and processes them overnight, ready for review the next day.**
- Checks: **Get documents to clients faster** · **No manual document processing**
- CTA: Book Discovery Meeting (ghost, light)
- UI card **Every ATO document, captured**: myGov · Agent Digital · ATO Online · Paper (each with a check)
- *Not built:* the source's "FAST" label above the heading (eyebrows are a settled no).

## 6. Review (`.background-stage-day`)

- H2: **Review what matters. Automate the rest.** (no description)
- Three white cards, each with a mock preview:
  - **Full control over your workflow** — Choose what's automated, what's reviewed, and what needs approval.
  - **Escalate when needed** — Route documents to the right person for review or approval.
  - **Set automatic approval rules** — Documents that meet your rules are approved. Flagged items are sent for review.
- CTA: Book Discovery Meeting (ghost). *Not built:* the source's "SIMPLE" label.

## 7. Filing (white)

- H2: **Automatically matched, filed and tracked** (no description)
- Three white cards matching §6:
  - **Every document matched to the right client** — Automatically matched using TFNs and ABNs, so three "John Smiths" never get mixed up.
  - **Filed directly in your DMS** — Documents & communications automatically filed to your existing document management system
  - **Full audit trail for every document** — Know when every document was received, reviewed, communicated and filed.
- CTA: Book Discovery Meeting (ghost)

## 8. PAYG (`.background-stage-dawn`)

- H2: **Give clients more time to act** (no description)
- Cards are white with a light preview panel holding the mock (Omble practice, 10 Sep).
- Card A (mock "PAYG instalment notice" UI): **Stop missed PAYG instalment notices** — Automatically capture and send every PAYG instalment notice. Give your clients more time to review and prepare for upcoming payments.
- Card B (mock "Client notified" UI): **Help clients stay ahead of DPNs** — Deliver important ATO correspondence on time, communicate proactively, and prevent unexpected penalties.
- CTA: Book Discovery Meeting (white)
- Mock UI sample values ("Lorem Ipsum Pty Ltd", "28 Oct 2026") remain placeholders.

## 9. Better informed (white)

- H2: **Better informed clients, better experience**
- Row 1: **Keep clients informed and prepared** — Stay proactive with timely correspondence. Keep clients informed about what's happening and what's coming next. · CTA · beside the quote: *"Since partnering with ATOmate, we have reduced ATO mail processing time significantly and increased proactive communications with our client base. ATOmate gives us peace of mind that our clients' data is protected with its ability to redact TFN sensitive information."* — Liz, Firm Owner
- Row 2: quote *"ATOmate allows our admin staff to spend less time processing ATO documents and more time contacting and communicating directly with clients."* — Steve, Firm Owner · beside **Every client interaction, elevated** — Turn routine ATO correspondence into a trust-building experience with timely, consistent communication. · CTA

## 10. Messaging (`.background-stage-day`)

Unchanged by the QA. H2 **Replace generic ATO messaging with clear guidance**; lead, three checks, CTA, email card ("Lorem Ipsum Accounting", "Hi Sarah" are sample UI), channel pills **Email · Post · Portal · App · PIN-protected email**.

## 11. Security (white)

- H2: **Built-in security your team never has to think about** (description removed per QA)
- Credentials line and card copy unchanged: **Redact TFNs automatically** / **Protect PRN data**.
- Card 2 illustration (client reference, 10 Sep): a document sheet with the bar **You have an overdue tax debt** and a **View details** button, a large orange padlock over it, and a phone chip **4 8 2 1 · PIN via SMS**.

## 12. Testimonials (`.background-stage-day`)

- H2: **Why 2,000+ practices choose ATOmate**
- Six quotes in the rotation queue (featured + two visible; the rest held in hidden cards):
  1. Liz, Firm Owner — "Since partnering with ATOmate we have reduced ATO mail processing time significantly…"
  2. Jenny, Practice Manager — "ATOmate surpassed our expectations, making everything so much easier and saving time."
  3. Admin — "I was crying in my boss's office because it was so easy…"
  4. Admin — "ATOmate has freed up 80–90% of our time. We're super impressed with it."
  5. Practice Manager — "We've changed our entire app stack in the last 12 months…"
  6. Admin — "We used to spend 2.5 hours just downloading ATO documents from the portal…"
- Attribution shows the name where given, otherwise the role. *Client flag:* firms and full names.

## 13. CTA (`.background-stage-morning`)

- H2: **Ready to make proactive accounting the standard?** (no description)
- CTA: Book Discovery Meeting (blue)

## Footer

Unchanged: lockup + **Fast | Simple | Secure ATO document automation for accounting practices.**; Product / Company / Contact columns; contact email and address are placeholders.

---

## Open flags

ISO 27001 logo (hero) · HowNow X logo · sample UI names and values · footer email and address · testimonial firms and full names · "FAST" / "SIMPLE" section labels in the source, not built (settled: no eyebrows) · 1,500 vs 2,000+ · product screenshots · hero video · Gilroy Bold + licences · Omble resemblance.
