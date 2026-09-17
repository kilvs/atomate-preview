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

Grounds alternate light / dark / brand, and no two light sections touch (client general comment, 17 Sep). The table was rewritten from the live page that day. L = light, D = dark, O = orange brand.

| # | Ground (stage class) | Client-First wrapper (as built) | Purpose | CTA |
|---|---|---|---|---|
| 1 | D `night` (17 Sep "NEW"; the light hero is saved in `design-references/hero-light-2026-09-17/`) | `section-home_hero` | Kicker, two-line claim, sub-claim, CTA on the left; ATO correspondence → ATOmate → output flow on the right | Yes |
| 1b | O `ember` (17 Sep; was navy) | `section-home_trust` | Five claims in a straight line, white on a subtle orange gradient | No |
| 1c | L `mesh` | `section-home_video` | Centred heading, film behind the 0:20 poster | No |
| 1d | D Azure (flat) | `section-home_trust-strip` | ISO / 2,000+ firms / built for accounting firms | No |
| 2 | L `morning` | `section-home_integrations` | Underline tabs: PMS / DMS / SMSF logos | No |
| 3 | D `night` (17 Sep; was white) | `section-home_comparison` | Without / With cards + orange lead | Yes |
| 4 | L `mesh` | `section-home_process` | How ATOmate works, 5 steps, 5.5s auto-advance | Yes |
| 5 | D `azure` | `section-home_overnight` | Overnight processing panel | Yes |
| 6 | L `split` | `section-home_review` | Review what matters, three cards | Yes |
| 7 | D `night` (17 Sep; was white) | `section-home_filing` | Matched, filed and tracked, three cards | Yes |
| 8 | L `mesh` (17 Sep; was `peach`) | `section-home_payg` | Give clients more time to act | Yes |
| 9 | D `peach` (17 Sep; was white) | `section-home_informed` | Two copy blocks with two quotes | Yes |
| 10 | L `mesh` | `section-home_messaging` | Clear guidance, email card | Yes |
| 10b | D `azure` | `section-home_channels` | Channels | — |
| 11 | L `split` | `section-home_security` | Credentials line + two cards | No |
| 12 | D `azure` (17 Sep; was `mesh`) | `section-home_testimonials` | Six quotes, rotation | No |
| 13 | O `ember` (17 Sep; was `peach`) | `section-home_cta` | Closing heading + mock Calendly on the bottom edge | No (button hidden) |
| — | L white | `footer_component` | Lockup, tagline, link columns | — |

---

## 1. Hero (`.background-stage-light` — warm mesh, 16 Sep)

- Kicker: **Fast. Simple. Secure.**
- H1: **Automate your firm's ATO document processing**
- Sub-claim (heading font, `90%` in orange-300): **Reduce manual work by 90%**
- Lead: **Automate every step from capture to archive without losing control.**
- ~~Note: **The ATO document automation software built for accounting firms.** — sits beside the ISO 27001 badge as the hero's closing trust line.~~ Hidden 17 Sep (client: ISO to move to a different section; placement instruction to follow).
- Sub-claim **Reduce manual work by 90%** is all orange (17 Sep).
- Dark hero (client "NEW" row, 17 Sep): kicker **FAST. SIMPLE. SECURE.**; H1 on two set lines, **Automate your firm's** / **ATO document processing**, left-aligned.
- Hero flow graphic (client reference strings): label **ATO correspondence**; cards **Notices of assessment · PAYG instalment notices · BAS statements · Div 293 notices · Other ATO correspondence** → ATOmate → ticks **Client-ready communication · TFNs redacted · Ready for review & approval · Filed in your DMS · Nothing gets missed**. The "Client-ready output" heading is left off, per the client.
- Flag: the reference image's kicker reads *Fast, simple and secure by design*; the client's note reads *FAST. SIMPLE. SECURE.* The note is built.
- CTA: Book Discovery Meeting (white button) with the ISO 27001 certified badge centred beneath it (5rem, `assets/img/brand/iso-27001.svg`, client file 11 Sep)
- Centred copy on the plain navy ground; no arrow (removed 10 Sep).

### 1b. Trust bar (`section-home_trust`, navy band - Omble's design, 16 Sep; copy replaced 17 Sep)

- ~~H2 (centred): **Trusted by 2,000+ firms of every size**~~ Hidden 17 Sep (client: "Remove the trusted by heading").
- Five claims in one straight line from 1280 up, each a single label; count-up on the two figures (client copy, 17 Sep):
  **Built for accounting firms** | **100% Australian-owned** | **Designed for every
  practice size** | **500+ hours recovered annually** | **ATO registered software**
- Superseded 17 Sep: *Australian-owned & operated - 90% less manual processing - 500+ hours
  recovered (caption: annually for practices with 10+ team members) - 100% of ATO documents
  captured - ATO registered software*.


## 1c. Video (`.background-stage-mesh`) — added 17 Sep

- H2: **See how ATOmate cuts processing time by 90%**
- YouTube film: https://www.youtube.com/watch?v=GEByUp25DSg ("ATOmate - ATO Document Processing Automation"). Poster is the film's frame at exactly 0:20 (client, 17 Sep; was a navy gradient), `assets/img/video/atomate-film-poster-0m20s.webp`, with the orange play button over it; click loads the player.
- The integrations section below now sits on `.background-stage-morning` (cool) so the two bands read apart.


## 1d. Trust strip (`section-home_trust-strip`, Azure band) — added 17 Sep

- Three claims (client reference strip, 17 Sep): **ISO 27001 Certified** (ISO badge) | **Trusted by 2,000+ firms** | **Built for accounting firms**
- Flag: the client's note reads "200+ firms"; the reference image reads "2,000+". Built as the image.

## 2. Integrations (`.background-stage-morning`, 17 Sep)

- H2 (centred, no description): **ATOmate works with the tools your team already uses**
- Tabs (centred, icon + label, orange underline on the active tab): **Practice Management Systems** (default) · **Document Management Systems** · **SMSF** (icon: rising bars with an up arrow, client 17 Sep) — labels per the client copy, 16 Sep
- PMS shelf (Xero first, Eugene 16 Sep): Xero, MYOB, Wolters Kluwer CCH iFirm, LodgeiT, APS, Access Elite, Access HandiSoft, Access Practice, Kloud Connect, Class
- DMS shelf (order per Content QA): FYI, Virtual Cabinet, SuiteFiles, iManage, Nimbus, SharePoint, HowNow, Dropbox, Box, Google Drive, OneDrive, Network folders, **+ more!** (text tile). *Client flag:* the source also lists **HowNow X**; no logo supplied.
- SMSF shelf: BGL, Class
- Logos on white elevated cards, centred rows.

## 3. Comparison (white)

- H2: **Still processing ATO documents manually?**
- Lead: **Manual processing overwhelms admin teams, creates errors and leads to endless client follow-up.**
- Second lead, above the cards (moved up from below them, 16 Sep), orange and bold (17 Sep): **Reduce manual work and errors. Keep clients ahead of tax obligations with timely, consistent communication.** (client copy, 17 Sep; was *ATOmate enhances communication and delivers a consistent experience to keep clients ahead of their tax obligations.*)
- **Without ATOmate** (white card with border; white ✕ on a solid red disc since 17 Sep, was a red ✕): Time-consuming, error-prone manual processing · Missed PAYG instalment notices and other ATO correspondence · Manual TFN redaction and PRN protection · Manual filing with no audit trail · Admin team stretched thin · Delayed documents. Frustrated clients.
- **With ATOmate** (navy card; white ✓ on a green disc with a soft green glow since 17 Sep, was a blue ✓): Automatic ATO document processing from capture to filing · All ATO documents captured automatically overnight · Automatic TFN redaction and PRN protection · Automatic filing with a complete audit trail · More capacity to improve client relationships · Timely delivery, better client experience
- Orange arrow button between the cards.
- CTA below the cards: Book Discovery Meeting

## 4. How ATOmate works (`.background-stage-day`)

- H2: **How ATOmate works** (no description)
- Steps (clickable cells) and panel copy:
  - **Capture & identify** — Every ATO document is captured overnight and matched to the right client using their ABN or TFN.
  - **Verify** — ATO documents are cross-checked against ATO and practice management data.
  - **Protect** — TFNs are automatically redacted. Documents with a TFN-based PRN are sent as PIN-protected PDFs.
  - **Review & approve** — Documents that meet your rules are approved. Flagged items are sent for review.
  - **Communicate & archive** — Send client-ready communications automatically or on your own terms. Get a full audit trail upon filing.
- Built as a flowchart (Eugene, 10 Sep; reworked 16 Sep): five large icon nodes on a connector, each with a soft pulsing halo; titles beneath; the clicked step's sentence shows under the row (step 1 by default). No hint line. CTA: Book Discovery Meeting (ghost)

## 5. Overnight processing (`.background-stage-night`)

- H2: **Overnight processing. Next-day approval.**
- Lead: **ATO documents can take days to reach your practice and your clients. ATOmate captures and processes them overnight, ready for review the next day.**
- ~~Checks: **Get documents to clients faster** · **No manual document processing**~~ Removed 17 Sep (client: "Delete the two items below with the tick marks"); hidden in the markup.
- CTA: Book Discovery Meeting (ghost, light)
- Graphic **Every ATO document, captured** (centred title): the four sources as ticked tiles (myGov · Agent Digital · ATO Online · Paper) in a 2×2 grid. No initials, no status pills, no arrow or mark, and **no words beyond the supplied copy** (client, 16 Sep).
- *Not built:* the source's "FAST" label above the heading (eyebrows are a settled no).

## 6. Review (`.background-stage-day`)

- H2: **Review what matters. Automate the rest.** (no description)
- Three Split light cards, each with a graphic built in markup (17 Sep, after the client's reference): workflow choices, escalation, approval rules:
  - **Full control over your workflow** — Choose what's automated, what's reviewed, and what needs approval. (Graphic: Automate / Review (magnifying glass) / Approve.)
  - **Escalate when needed** — Route documents to the right person for review or approval. (Graphic: Exception document → Rachel M., Accountant (client, 17 Sep; was "Approver · Finance") → "Escalated in one click"; the name is sample UI.)
  - **Set automatic approval rules** — Documents that meet your rules are approved. Flagged items are sent for review.
- CTA: Book Discovery Meeting (ghost). *Not built:* the source's "SIMPLE" label.

## 7. Filing (white)

- H2: **Automatically matched, filed and tracked** (no description)
- Three white cards matching §6, illustration `every-document-01`; the DMS filing and audit trail graphics are built in markup (16 Sep) from the supplied artwork — labels, steps and times kept, sub-captions and pale boxes dropped, brand colours throughout:
  - **Every document matched to the right client** — Automatically matched using TFNs and ABNs, so three "John Smiths" never get mixed up.
  - **Filed directly in your DMS** — Documents & communications automatically filed to your existing document management system
  - **Full audit trail for every document** — Know when every document was received, reviewed, communicated and filed.
- CTA: Book Discovery Meeting (ghost)

## 8. PAYG (`.background-stage-dawn`)

- H2: **Give clients more time to act** (no description)
- Cards are white with a light preview panel holding the mock (Omble practice, 10 Sep).
- Graphics follow the copy (16 Sep): card A is a timeline, rebuilt 17 Sep to the client's graphic: blue dot, orange run to an orange check, a dotted remainder, and a navy end dot with a flag. The label ~~**More time to act**~~ was removed 17 Sep (hidden); card B is **Penalties** struck through in orange (full-strength navy since 17 Sep, "looks faded"). The mock UI panels are gone.
- Card A: **Stop missed PAYG instalment notices** — Automatically capture and send every PAYG instalment notice. Give your clients more time to review and prepare for upcoming payments.
- Card B: **Help clients stay ahead of DPNs** — Deliver important ATO correspondence on time, communicate proactively, and prevent unexpected penalties.
- CTA: Book Discovery Meeting (white)
- The sample values that were in the old panels ("Lorem Ipsum Pty Ltd", "28 Oct 2026") are gone with them.

## 9. Better informed (white)

- H2: **Better informed clients, better experience**
- Two alternating rows (16 Sep): copy left / visual right, then visual left / copy right. Columns are 50/50. Each visual is a labelled mock (17 Sep, client: no need to anonymise) with the quote card lapping its corner. Row 1 mock: AK *Activity statement issued* · Sent; TN *Instalment notice* · Sent; DP *Payment due in 7 days* · Heads up. Row 2 mock, a timeline: *Document received* → *Reviewed & approved* → *Client notified*. Initials and labels are sample UI. The quote is set at body size, unbolded, with an orange rule before the attribution.
- Row 1: **Keep clients informed and prepared** — Stay proactive with timely correspondence. Keep clients informed about what's happening and what's coming next. · CTA · beside the quote: *"Since partnering with ATOmate, we have reduced ATO mail processing time significantly and increased proactive communications with our client base. ATOmate gives us peace of mind that our clients' data is protected with its ability to redact TFN sensitive information."* — Liz, Firm Owner
- Row 2: quote *"ATOmate allows our admin staff to spend less time processing ATO documents and more time contacting and communicating directly with clients."* — Steve, Firm Owner · beside **Every client interaction, elevated** — Turn routine ATO correspondence into a trust-building experience with timely, consistent communication. · CTA

## 10. Messaging (`.background-stage-day`)

Unchanged by the QA. H2 **Replace generic ATO messaging with clear guidance**; lead, three checks, CTA, email card ("Hi Sarah" is sample UI; greeting, line and PIN-protected attachment only, no Customise button per client, 17 Sep), channel pills **Email · Post · Portal · App · PIN-protected email**.

## 11. Security (white)

- H2: **Built-in security your team never has to think about** (description removed per QA)
- Credentials line and card copy unchanged: **Redact TFNs automatically** / **Protect PRN data**.
- Card 1 graphic (client, 17 Sep): one TFN tile (**TFN** / **123 456 789**, sample) redacted by a sweeping black bar on a loop; the earlier before → after pair is hidden. The credentials line has no rule under it (17 Sep). Both cards are smaller (capped at 56rem, 17 Sep).
- Card 2 illustration (client reference, 10 Sep): a document sheet with the bar **You have an overdue tax debt** and a **View details** button, a large orange padlock over it, and a phone chip **4 8 2 1 · PIN via SMS**.
- CTA below both cards, centred: Book Discovery Meeting (16 Sep)

## 12. Testimonials (`.background-stage-day`)

- H2 (centred since 17 Sep, arrows centred under it): **Why 2,000+ practices choose ATOmate**
- Six quotes in the rotation queue (featured + two visible; the rest held in hidden cards). Order changed 17 Sep: the client made the "crying" quote the featured one, swapping it with Liz's:
  1. Admin — "I was crying in my boss's office because it was so easy…" (featured)
  2. Jenny, Practice Manager — "ATOmate surpassed our expectations, making everything so much easier and saving time."
  3. Liz, Firm Owner — "Since partnering with ATOmate we have reduced ATO mail processing time significantly…"
  4. Admin — "ATOmate has freed up 80–90% of our time. We're super impressed with it."
  5. Practice Manager — "We've changed our entire app stack in the last 12 months…"
  6. Admin — "We used to spend 2.5 hours just downloading ATO documents from the portal…"
- Attribution shows the name where given, otherwise the role; no initials avatars (hidden 17 Sep). *Client flag:* firms and full names.

## 13. CTA (`.background-stage-peach`)

- H2: **Ready to make proactive accounting the standard?** (no description)
- ~~CTA: Book Discovery Meeting (blue)~~ Button removed 17 Sep (client: "Remove button on book discovery"); hidden in the markup.
- Mock Calendly (client, 17 Sep, from their reference): title **Book Discovery Meeting** over a card with **September 2026** (Mon-first, weekends muted, 9 bold), **Wednesday 9 Sep** and times **9:00am · 10:30am · 1:00pm · 2:30pm · 4:00pm**. Sample UI.

## Footer

Unchanged: lockup + **Fast | Simple | Secure ATO document automation for accounting practices.**; Product / Company / Contact columns; contact email and address are placeholders.

---

## Open flags

HowNow X logo · sample UI names and values · footer email and address · testimonial firms and full names · "FAST" / "SIMPLE" section labels in the source, not built (settled: no eyebrows) · 1,500 vs 2,000+ · product screenshots · video placement · font licences · Omble resemblance.
