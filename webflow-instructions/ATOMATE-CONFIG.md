# ATOmate — per-site kit configuration

The kit in this folder is shared with Omble (copied 9 Sep 2026; `rules/` and
`webflow-skills/` are the same files). The generic README lists the choices every
site has to make. These are the ones made for ATOmate. Read this before deploying
the kit or building anything in the ATOmate Webflow site.

## Locale

| Setting | Value |
|---|---|
| Webflow primary locale | English (Australia) |
| `lang` attribute | `en-AU` |
| Spelling | Australian English — colour, organise, centre, **lodgment** (ATO spelling, no `e`) |

## Base Colour ramp names

Primitives are named for what the colour **is**, never its role. ATOmate uses two
cool ramps, one warm ramp, an ink ramp and white. Values are the `:root` tokens in
`assets/css/style.css` (the record).

| Group | Steps | Notes |
|---|---|---|
| `Navy/` | `navy-700` `#03466B` · `navy-800` `#022A45` · `navy-900` `#021F35` | `navy-700` is the brand navy (headings, nav solid state, footer text). 800/900 are the night stages — tints of the brand navy, not new hues. |
| `Blue/` | `blue-50` `#F1F8FC` · `blue-100` `#E5F3FA` · `blue-300` `#5FB0DE` · `blue-500` `#0078BA` · `blue-600` `#0A5A8A` | `blue-500` is the brand blue: primary buttons, links, icons, ✓ marks. `600` is hover. |
| `Orange/` | `orange-100` `#FFF0E6` · `orange-300` `#FFB280` · `orange-500` `#EB6405` | `orange-500` is the brand accent and is **scarce**: the hero arrowhead, the active step icon, the comparison arrow button, the "Next-day approval" label, the 90% stat. `orange-300` is the hero H1's `90%` on navy. **No orange buttons** — the guide's "secondary orange button" is a client flag, not a build instruction. |
| `Ink/` | `ink-900` `#1F2A33` · `ink-700` `#3D4A55` · `ink-500` `#6B7A86` | Body, secondary, muted text on light grounds. |
| `Line/` | `line` `#D5DDE3` · `line-soft` `#E6ECF0` | Hairlines and card borders. |
| `Paper/` | `paper` `#FFFFFF` · `paper-100` `#F4F7F9` | Page ground is white; `paper-100` is the day stage. |

Stage gradients (build as section-class backgrounds, all at **150°** = the 30°
arrow angle): night `navy-900 → navy-700` with a soft blue glow top-right; dawn
`navy-800 → blue-500`; morning `white → blue-100`; day `paper-100 → white`.

## Type

| Role | Face | Weights loaded | Notes |
|---|---|---|---|
| Headings | Gilroy | **800 only** | Guide asks for Bold (700); it was not supplied. Do not pick 700 in the Designer — it would synthesise. Client flag. |
| Everything else | Galano Grotesque | 400 · 500 · 600 · 700 | Buttons and chips 600. |

Both faces are self-hosted (`assets/fonts/`); upload the same woff2 files to
Webflow as custom fonts. Web licences unconfirmed — client flag.

Scale (desktop base): h1 4.5rem/.98 · h2 3rem/1.05 · h3 1.375rem/1.25 · lead
1.375rem/1.45 · body 1.0625rem/1.55 · small .9375rem · tiny .75rem. Headings
letter-spacing −0.02em (h1 −0.03em), `text-wrap: balance`.

## Container widths and spacing

Kit defaults kept:

- `container-large` 80rem · `container-medium` 64rem · `container-small` 48rem
- `padding-global` 2.5rem desktop → 1.25rem mobile portrait
- `padding-section-*` per the stage: the page runs 6–7rem desktop, stepping down
  per breakpoint through Variable Modes
- `max-width-text` 42rem

Radii (build as `Layout/` variables): `radius-card` 1.5rem · `radius-box` 1rem ·
`radius-button` **0.5rem** · `radius-round` 50% for `.dot` icon circles and pill
chips. No chamfers, no notches.

## Breakpoints

Desktop base at 1440 (design width), cascading down: 991 tablet, 767 mobile
landscape, 479 mobile portrait. No 1440/1920 overrides — the layout caps at
`container-large` and centres; the stage background carries the extra width.

**Check at 3440px before sign-off** (ultrawide monitors are common in Australian
firms; the hero arrow layer caps at 114.75rem and centres so the whole arrow stays
in the fold). **The navbar must fit at exactly 992px**: five items + the CTA. The
page does it with a 1.5rem gap and the 3rem button below 1100px; do not add a
breakpoint. Label stays "Book discovery meeting". Below 992 the navbar is a menu
button + dropdown (`navbar_menu-button`, `navbar_menu`).

## Spam protection standard

**Cloudflare Turnstile** (same reasoning as Omble: enquiries from firms handling
sensitive ATO data; no visitor profiling). Honeypot alone is not sufficient for
the discovery-meeting form.

## Schema types actually needed

- `Organization` — site-wide, `parentOrganization` → Business Automation Works
- `WebSite` — site-wide
- `SoftwareApplication` — site-wide, `BusinessApplication` category
- `BreadcrumbList` — any page with a trail

No `FAQPage` rich results (removed by Google, May 2026). **Never** an `offers`
block unless pricing is visibly published.

## Converting the review page: what ships, what needs code

`index.html` is already built in this kit's Client-First dialect (one stylesheet,
one script, no inline styles, no review-only switches): every class maps 1:1 to a
Webflow class, every `:root` token to a variable. The mapping below is the part
that still needs code or a decision.

### Features Webflow cannot do natively

| Feature | Where | What to do |
|---|---|---|
| Sticky nav colour shift | nav | Native sticky + a two-state class (`is-solid`) toggled by the tiny scroll listener in `assets/js/motion.js` (or IX2 "while page scrolling" at the hero's end). Two lockup images stacked, crossfaded. |
| Hero arrow draw on load | §1 | GSAP `strokeDashoffset` timeline — in the site embed. The SVG is inline HTML (embed element). Head and labels start at `opacity:0` **inline via the script**, never in CSS. |
| Count-up | §1b | GSAP preset from `gsap-animation` skill; `data-countup` + `data-countup-value` + `data-countup-suffix`. The final value is the element text. Only the two real numbers. |
| Scroll reveals | as marked | `data-scroll-animate` attributes + the single init (`gsap-animation` skill §5.1). Distance 24px, 0.7s, `top 85%`, once. |
| Steps click-to-reveal | §4 | Five real `<button>`s with `aria-pressed`; the panel holds all five bodies (`data-step-body`, `hidden`) and the script cross-fades. Equivalent IX3 click interaction acceptable. |
| Integration tabs | §2 | Native Webflow Tabs component is fine (it emits the same `role="tab"` / `tabpanel` pattern the page uses); keep the fade-up stagger on tab change via the embed, or accept no stagger. |
| Testimonial rotation | §12 | JS in the embed (three-item queue; the DOM does not move, text swaps). Pending Eugene's confirmation. |
| 30° stage gradients and the ghost mark | §5, §8, §10, §13 | Plain CSS layered backgrounds on the section class; the ghost mark is an absolutely positioned image at low opacity. |
| Ghost 30° lines behind the email card | §10 | `repeating-linear-gradient` background on the panel class. |

### Tokens that carry a client decision

| Variable | Live value | The revert, if the client changes their mind |
|---|---|---|
| `Layout/radius-button` | `0.5rem` | — (rejected: pill; chamfer) |
| `Theme/text-highlight` | `orange-300` on navy, `orange-500` on light | `blue-300` / `blue-500` if orange is pulled back further |
| `Theme/button-primary` | `blue-500` fill, white label | — |
| `Theme/button-on-dark` | white fill, `navy-700` label | `blue-500` fill |
| CTA label | "Book discovery meeting" | "Book a discovery meeting" (source) |

### Reduced motion

`prefers-reduced-motion: reduce` → every reveal target shown, counters at final
values, no transitions. The embed handles it (`showAll()`); do not add a second
mechanism.
