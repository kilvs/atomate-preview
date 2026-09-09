# ATOmate — project context

Read this first in any session. It carries the decisions that are already settled,
so they do not get relitigated or accidentally reversed.

## What this is

ATOmate, powered by BAW (Business Automation Works). ATO document automation for
Australian accounting practices: documents are captured overnight, verified, TFNs
redacted, and ready for approval next morning. The claim is "reduce manual ATO
document processing by 90%". Key line: *Fast | Simple | Secure*.

This repo is the Claude Code stage of the rebrand. Upstream stages are done:
planning and design happened in the Claude Project "ATOmate 2.0 to Claude Code"
(Gates 01–04, docs copied into `docs/`). Downstream: GitHub → Vercel (client
review surface) → **Webflow, Finsweet Client-First** (the real site, built via the
Webflow MCP). The repo is the source of truth for the system and the review page;
it is not what ships.

Sibling product: **Omble** (`../Omble`), same client, same workflow, same kit.
Shared skeleton (Client-First structure, spacing rhythm, instruction kit, this file's
conventions); deliberately different skin — see "Omble relationship" below.

## Pipeline and gates

| Gate | Status |
|---|---|
| 01 Planning | Direction decisions taken (Eugene, 9 Sep 2026). `docs/Gate-01-Planning-Review.md` |
| 02 Wireframe | Structure accepted by Eugene, pending client. |
| 03 Hi-Fi | **Accepted by Eugene 9 Sep ("After that I'm all good"), pending client.** |
| 04 Motion | Spec written and prototyped, 9 Sep. `docs/Gate-04-Motion-Spec.md` |
| 05 Development | **This stage.** Code Review + Page Quality review before sign-off. |
| 06 Deployment | Not started. GitHub → Vercel → Webflow **only after explicit approval**. Never automatic. |

Design artifacts (Claude Design canvases; the accepted boards, for visual reference):
- Wireframe: https://claude.ai/code/artifact/87421baf-a861-4715-b3bc-19829ebc72ae
- Hi-Fi canvas (Desktop merged, Mobile merged, "Night to Morning" reference, System sheet): https://claude.ai/code/artifact/d5b7bdfc-6d24-4bc0-9c6e-1e58567945ac
- Motion prototype (the page live with all motion): https://claude.ai/code/artifact/c1c2d6be-f1a0-4551-be53-a2b779823b2a

`index.html` in this repo is a 1:1 export of the accepted Hi-Fi plus the Gate 04
motion, split into real files (`assets/css/style.css`, `assets/js/motion.js`,
self-hosted fonts, SVG/PNG assets). It is the implementation of record.

## Content is law

**Do not change, improve, rewrite or reinterpret the content.** Headings, copy,
CTA labels, chip labels, stats, section order — all of it comes from the client's
"ATOmate Updated Docs" (7 Sep 2026 PDF, in `Guide & References/ATOmate V2/`) and
the brand guide. Where copy is missing the page carries **lorem ipsum** and `00%`
on purpose; leave it until the client supplies text. Never invent product copy,
UI strings, names or numbers. If something is unclear or contradictory: flag it,
explain why it matters, ask. `content/homepage-spec.md` is the section-by-section
content of record.

Two strings on the page are *not* verbatim from the source and are flagged for the
client:
- **"Book discovery meeting"** — every CTA. Eugene shortened the source's "Book a
  discovery meeting" on 9 Sep to save characters. Confirm with the client before
  Webflow. (Omble's law is "Book Discovery Meeting", title case — different product,
  do not harmonise without being asked.)
- Sample UI content inside mock panels (Sarah Chen, "Lorem Ipsum Accounting",
  "Bluebird Accounting", "Kennedy King Chartered Accountants", PAYG figures) is
  placeholder and is listed as a client flag.

Australian English throughout (colour, organise, centre). `lang="en-AU"`.

## Settled design decisions — do not reverse these

**The direction is "Night to Morning" (merged, 9 Sep 2026).** ATOmate's story is
time: documents arrive at night and are done by morning, so the page is a night
that turns into a morning. Section grounds run navy (`.stage-night`) → light
(`.stage-day` / white) → navy → light → dawn gradient (`.stage-dawn`) → light →
morning gradient (`.stage-morning`) for the CTA. Full rationale in
`docs/Alt-Direction-Night-to-Morning.md`; what was merged from where is in
`docs/Approval-Status.md`.

1. **The arrow is the brand's structural motif, at the logo's angle.** Measured
   30.3° from `atomate-mark.svg`; the system uses **30°** (CSS gradients at 150°,
   the hero path, the staircase in "How ATOmate works", the ghost lines behind the
   email card). It is never an ambient animated background. Orange is reserved for
   the arrowhead and for outcomes (the `90%` figures, the active step icon, the
   "Next-day approval" label). Orange never animates except the hero arrowhead
   arriving.
2. **Hero (Hero C, "Overnight → Next-day approval"):** navy, `min-height: 51rem`,
   the whole arrow inside the fold (the SVG is `viewBox 0 0 1440 640`,
   `preserveAspectRatio="xMidYMax meet"`, path `M40 620 L520 620 L1330 152`, an
   orange filled head rotated −30°). H1 is **two lines** at 4.5rem with `90%` in
   orange-300. One white CTA. Labels "Overnight" bottom-left, "Next-day approval"
   top-right. No imagery, no video (V2 dropped the hero video; V1 required it — a
   client question, not a design one).
3. **Giant stats row** under the hero on the same navy: 2,000+ white, 90% orange,
   three `00%` lorem cells dimmed until real numbers exist.
4. **Nav is sticky** and shifts colour on scroll (Gate 04): transparent with the
   white lockup over the hero, then `.is-solid` — white at 96%, colour lockup,
   navy-700 links, blue CTA. Two lockups are stacked in the markup for the
   crossfade. The "Powered by BAW" lockup stays; removing it needs BAW marketing
   permission.
5. **Corners:** cards 1.5rem (`.card`) / 1rem for smaller boxes; **buttons 0.5rem**;
   icon boxes are circles (`.dot`); chips are pills (`.chip`). **No chamfers, no
   notches, no ruled ledger frames** — Eugene rejected them as "robotic" (the
   rev 3 chamfer and rev 5 ledger drafts are the record, not the rule).
6. **No eyebrows, no section numerals** ("01", "02"…). Section headers are H2 +
   one lead/soft paragraph (`.sh`).
7. **Cards are elevated, never plain.** Navy-tinted shadow on tinted stages;
   gradient-mixed backgrounds are welcome; flat solid boxes are not. Logos sit on
   white shelf cards, **not** in a grid-bordered frame.
8. **No icons inside buttons.** Label only.
9. **"How ATOmate works" is the original main-draft block**, kept as is when the
   alternate was merged in (Eugene: "Do not change How ATOmate works from the
   original draft"): five compact step cells in a frame, step 1 current (navy fill,
   orange icon), a fixed-height reveal panel under the row. On mobile the frame
   goes to one column.
10. **Comparison section:** two cards side by side, night (Without, muted ✕) and
    day (With, blue ✓), joined by the small orange arrow button. **No glass/blur
    bridge and no giant 90% in the header** — both removed at merge as redundant.
11. **Security section:** a quiet credentials line (`.sec-creds`, four items with
    check dots) — **not** four pills, which Eugene called overwhelming — above two
    UI cards of equal height (Send email with TFN redaction; PIN-protected
    document). Mock UI panels must fill their card; no empty-looking cards.
12. **"Hi Sarah" email card** sits on a navy panel with 30° ghost lines and
    channel pills. It fills its cell.
13. **Testimonials:** one large navy quote card plus a stack of two small cards,
    prev/next arrows. Gate 04 defines the arrows as a *rotation* (top small card
    → featured slot, featured → stack). **Awaiting Eugene's confirmation** of that
    behaviour; do not redesign it either way without asking.
14. **CTA (morning):** white → blue-100 gradient with the full-colour mark ghosted
    at the right, H2 at 3.5rem, blue button.
15. **Footer** is required and is on the page: lockup + tagline, four link columns.
16. **No glassmorphism, no blobs, no marquee, no parallax, no 3D, no generic
    dashboard mockups.** The Project's anti-AI-slop list applies to every new
    element: if it could belong to any SaaS site, it does not go in.

### Motion (Gate 04, settled)

One orchestrated moment (the hero arrow drawing on load, ≈2.6s), everything else
quiet: fade-up reveals (0.7s `power2.out`, 24px, once, `top 85%`), count-up on the
two real stats, step click → panel cross-fade, tab switch → shelf swap, testimonial
rotation, 3px card lift on hover. `prefers-reduced-motion` shows everything static
with final values. Nothing is parked hidden without JS: the init sets start states,
so a failed script fails **visible**. GSAP 3.12.5 + ScrollTrigger from cdnjs, one
init in `assets/js/motion.js`, declarative `data-scroll-animate` /
`data-load-animate` attributes (Webflow UI Design skill convention). Full spec:
`docs/Gate-04-Motion-Spec.md`.

## Build conventions (Gate 05, settled 9 Sep 2026)

`index.html` was rebuilt to the Client-First dialect in `webflow-instructions/`
(naming, core structure, tokens) with **no content and no design changes**. What
the rebuild fixed and what it deliberately changed, so it is not undone:

1. **Classes follow the kit.** `section-home_[element]` > `padding-global` >
   `container-large` > `padding-section-large` > `home_[element]_content`;
   `component_*` for shared pieces (`component_ui`, `component_chip`,
   `component_tick`, `component_icon`, `component_checklist`,
   `component_section-header`, `component_skeleton`); `navbar_component`,
   `footer_component`; hyphen-only utilities; `is-*` combos. Zero inline styles.
   Stats (§1b) live inside `section-home_hero` as `home_hero_stats` because the
   hero and stats share one navy gradient.
2. **`container-large` is 80rem with `padding-global` outside it.** The export's
   inline section padding had removed the horizontal gutter, so sections ran 80rem
   wide at 1440 and edge to edge below 1360px (text touched the screen edge on
   mobile). Desktop width is unchanged (1280px at 1440); smaller screens now have
   gutters. The nav and stats row widen from 1200 to 1280 to match the sections.
3. **Fail-visible for real.** The hero arrowhead, dot and labels no longer carry
   `opacity:0` in the markup; `motion.js` sets start states. Count-up uses the kit's
   `data-countup-value` / `data-countup-suffix` and the final value is the markup.
4. **Accessibility:** skip link, `<main>`, real `<button>`s for steps, tabs (WAI-ARIA
   tabs with arrow keys), testimonial arrows and the menu; `aria-pressed` on steps,
   `aria-live` on the step panel and testimonial grid; every image has width/height
   and alt; decorative SVGs are `aria-hidden`; mock-UI buttons are spans, not links;
   `:focus-visible` rings; lists are real lists; quotes are `figure`/`blockquote`.
   The sample TFN is hidden from screen readers.
5. **Mobile navigation added** (≤991): menu button + white dropdown panel with the
   links and the blue CTA. The export hid the links with no replacement. Styling is
   the system's; confirm with Eugene.
6. **Navbar at 992:** labels never wrap; link gap 1.25rem and the 3rem button
   below 1100px so five items + the CTA fit at the first desktop pixel. Label
   unchanged.
7. **Fixes to export defects, not redesigns:** two step cells carried a mangled
   class (`steps_itemNone`) and rendered icon-over-title; all five are now row
   cells (the frame is 58px shorter). `--radius-large` was undefined, so the
   process frame had square corners; it now uses `--radius-card` (1.5rem) like
   every other card. The testimonial grid had no mobile rule; it stacks at ≤991.
   The CTA heading (3.5rem) now steps down on mobile. Section header gap on
   stacked layouts is 1.25rem instead of the desktop 4rem column gap. Step cells
   go icon-over-title between 768 and 991 for legibility.
8. **Navbar geometry:** the logo link has its real width (9.85rem). The export's
   link had zero width, which placed the link group 79px further left than a
   logo | links | CTA layout gives. Intentional; the Webflow build cannot
   reproduce the zero-width quirk anyway.

Verification tooling lives outside the repo (headless Chrome overflow, geometry
and interaction checks at 1440 / 992 / 768 / 479 / 390). No horizontal overflow at
any width; all interactions pass with and without reduced motion.

## Omble relationship

Treat ATOmate and Omble as a BAW family. **Share:** Client-First structure, the
Webflow instruction kit (`webflow-instructions/`, copied from Omble with a new
per-site config), spacing rhythm, component grammar, this CLAUDE.md convention.
**Differentiate:** palette (ATOmate is navy/blue-led with orange as a scarce
outcome accent; Omble is orange-led), typography (Gilroy/Galano vs Inter/Plus
Jakarta), button geometry (0.5rem rect vs Omble's pill), and the 30° arrow as
structure. Whether the client is comfortable with visible sibling resemblance is
an open question — do not copy Omble sections in.

## System (tokens in `:root` of `assets/css/style.css`)

| Group | Tokens |
|---|---|
| Navy | `--navy-900 #021F35` · `--navy-800 #022A45` · `--navy-700 #03466B` (brand navy: headings, nav, footer) |
| Blue | `--blue-600 #0A5A8A` · `--blue-500 #0078BA` (brand blue: buttons, links, icons) · `--blue-300 #5FB0DE` · `--blue-100 #E5F3FA` · `--blue-50 #F1F8FC` |
| Orange | `--orange-500 #EB6405` (brand accent) · `--orange-300 #FFB280` (the hero 90%) · `--orange-100 #FFF0E6` |
| Ink / lines | `--ink-900 #1F2A33` · `--ink-700` · `--ink-500` · `--line #D5DDE3` · `--line-soft` · `--paper-100 #F4F7F9` · `--paper #FFF` |
| Type | Headings **Gilroy ExtraBold (800)**, `letter-spacing -0.02em`, `text-wrap: balance`; body **Galano** 400/500/600/700, 1.0625rem/1.55 |
| Scale | `.h1` 4.5rem/.98 · `.h2` 3rem/1.05 · `.h3` 1.375rem · `.lead` 1.375rem · `.small` .9375rem · `.tiny` .75rem |
| Layout | `--container 80rem` · `--gutter 2.5rem` · Webflow breakpoints 991 / 767 / 479, desktop base cascading down |

Brand facts (guide V1 + palette sheet): Navy #03466B, Blue #0078BA, Orange #EB6405,
Charcoal #333333, White; neutrals Blue 100 #E5F3FA, Blue 700 #00649A, Orange 100
#FFF0E6, Light Gray #F5F7F8, Border Gray #DDE3E6. The deeper navies (900/800) and
the dawn/morning gradients are the design system's extension for the night-to-
morning stages — keep them; they are tints of the brand navy, not new hues.

**Fonts:** the brand guide asks for Gilroy *Bold*; only ExtraBold and Light were
supplied, so headings run at 800. Web licences for Gilroy and Galano are
unconfirmed. Both are client flags — do not substitute a different typeface.
"Harabara" is named in the guide with no file and no role: ignore until told.

## Client flags — open, do not resolve unilaterally

BAW lockup size in the nav · Gilroy Bold + font licences · orange usage vs the
brand guide (guide has orange as secondary buttons; the system uses it as a scarce
outcome accent — needs the client's nod) · "Book discovery meeting" wording ·
partner logos (APS and Wolters Kluwer are PNGs from Omble's assets because the
supplied SVGs are broken wrappers) · all lorem / `00%` content · sample UI names ·
1,500 vs 2,000+ practices · trust-bar numbers · testimonials (only 2 exist; need
3–4 with name, firm, role) · product screenshots (none supplied) · hero video
(dropped or relocated?) · Omble resemblance.

## Where things live

```
index.html                       the homepage, accepted Hi-Fi + Gate 04 motion
assets/css/style.css             tokens, system, components, responsive, motion states
assets/js/motion.js              the one GSAP init + the bespoke interactions
assets/fonts/                    Gilroy ExtraBold, Galano 400–700 (woff2)
assets/img/brand/                lockups, marks, favicon, og-image, webclip
assets/img/partners/             PMS / DMS / SMSF logos
content/homepage-spec.md         section order, wrappers, copy of record, flags
docs/                            Gate 01 review, approval status, direction, motion spec
design-references/README.md      artifact links, what each board is
webflow-instructions/            the kit (from Omble) + ATOMATE-CONFIG.md
BACKLOG.md                       deferred items and what unblocks each
../Guide & References/           client-supplied brief, brand guide, palette, fonts, logos
```

## Working rules

- Read `content/homepage-spec.md` before touching a section. Content is law.
- Do not redesign. If an implementation constraint forces a design change, explain
  the constraint and propose the change first. Cosmetic "improvements" are
  regressions here.
- Preserve the accepted layout, hierarchy, responsive behaviour and motion intent.
  Check desktop 1440, the 992 first-desktop pixel, 768, and 390 before sign-off.
  Many Australian firms run ultrawide monitors — check 3440 too; the layout caps at
  80rem and centres, background carries the width.
- Every animated element must be visible without JS. Never `opacity:0` in CSS.
- Log settled decisions here as they happen, newest first in the relevant list,
  and record what they supersede rather than deleting history.
- Deployment (`git push`, Vercel, Webflow) only after Eugene says so, per gate.
- Skills to use at this stage: Webflow UI Design, Design Compilation, Page Quality
  Auditor, Code Review. For the Webflow stage: Webflow Agent Instructions, Prelaunch
  Checklist, Webflow MCP rules (`webflow-instructions/`).

## Current stage

Gate 05. Client-First rebuild done 9 Sep (see "Build conventions"). Next moves,
in order: (1) Eugene reviews the rebuild deviations listed above (mobile menu, nav
geometry, tablet steps); (2) Code Review of `index.html` / `style.css` /
`motion.js` against the accepted Hi-Fi; (3) Page Quality audit (performance, the
nav at 992 in a real browser); (4) close the testimonial-rotation question with
Eugene; (5) wait on the client flags; (6) Gate 06 approval, then GitHub → Vercel
with password protection and `noindex` (`vercel.json`), then Webflow.
