# Webflow handover — instructions for the MCP and browser agents

Read this first when the go signal comes. It says who does what, in what order, and what must
be true before each step. **No step publishes anything.**

Source of truth, in order of precedence:
1. `CLAUDE.md` — settled decisions. If this file and a design impulse disagree, this file wins.
2. `content/homepage-spec.md` — the copy. Never write new copy, never reword supplied copy.
3. `WEBFLOW-VARIABLES.md` — the variable collections. Build before anything else.
4. `WEBFLOW-STYLE-GUIDE.md` — the classes and the style guide page.
5. `docs/Webflow-Animation-Spec.md` — every animation, with its numbers.
6. `ATOMATE-CONFIG.md` — per-site choices (locale, spam protection, schema, breakpoints).
7. `rules/` and `webflow-skills/` — the standing build rules.

---

## Division of labour

**MCP agent** (Webflow Data/Designer API) does everything structural and repeatable:
site settings, fonts, variable collections, classes, page structure, components, CMS, SEO
fields, custom code embeds.

**Browser agent** does what the API cannot reach: the **Interactions with GSAP panel**, visual
checks at each breakpoint, and anything the API refuses. It drives the Designer UI.

Neither agent publishes. Stage everything, report, hand the publish decision to Eugene.

---

## Order of work

### Step 1 — Site settings (MCP)
- Locale **English (Australia)** so the page renders `lang="en-AU"`.
- Upload the four custom fonts: Gilroy ExtraBold, Galano Grotesque 400/500/600/700, from
  `assets/fonts/`.
- Favicon and webclip from `assets/img/brand/`.
- Turn on the **GSAP integration** in site settings; enable ScrollTrigger.

**Done when:** fonts appear in the typography picker and the locale shows English (Australia).

### Step 2 — Variables (MCP)
Build all seven collections exactly as `WEBFLOW-VARIABLES.md` lists: Base Colour, Theme,
Typography, Font Family, Spacing, Layout, Sizing.

- Create the base (desktop) value first.
- For the five `padding-*` variables and the heading sizes, then select each breakpoint
  (991 / 767 / 479) and edit the same variable to the value in the table.
- **Never** bind a Base Colour primitive to an element; elements bind Theme.

**Done when:** every variable in the doc exists, grouped, and no table row is unaccounted for.

### Step 3 — Style guide page (MCP, then browser agent to eyeball)
Build the style guide page per `WEBFLOW-STYLE-GUIDE.md` §2. This is the proof that step 2 is
correct and it is where the client reviews the system.

**Done when:** the swatches, type scale, buttons, spacing, components and five grounds all
render from variables, with no raw values anywhere.

### Step 4 — Homepage structure (MCP)
Rebuild the 15 sections in order from `index.html`, using the skeleton in the style guide §1.
Copy comes from `content/homepage-spec.md`, verbatim.

Per section: section wrapper + ground class → `padding-global` → `container-large` →
`padding-section-large` → `home_[section]_content`.

Images: WebP, width and height set, alt from the asset, lazy below the fold, the hero eager.

**Done when:** every section exists with correct classes and correct copy, and the page has
exactly one h1.

### Step 5 — Animations (browser agent, in the Interactions with GSAP panel)
Work from `docs/Webflow-Animation-Spec.md`. There are 25 entrance animations, all the same
preset, plus four bespoke interactions and the count-ups.

For each row in the spec: select the element, add the trigger (page load for the hero, scroll
into view for the rest), one step, opacity 0→100 and Move Y 24px→0, duration 0.7s, ease
power2.out, start offset at 85% of the viewport, play once, and the stagger from the table
where one is given.

**Non-negotiable:** the element must be visible with no interaction applied. Never author
"hidden, then reveal". Honour `prefers-reduced-motion`.

**Done when:** every row is built, and the page still reads correctly with interactions
disabled.

### Step 6 — The four bespoke interactions
Navbar solid state, step reveal, tab swap, testimonial rotation. Spec §4. If the panel cannot
express one, keep that one in a site-wide code embed rather than approximating it.

### Step 7 — SEO, forms, schema (MCP)
- Title and meta description from the content spec. OG image 1200×630, absolute URL.
- Schema: Organization, WebSite, SoftwareApplication. No FAQ schema, no offers.
- The discovery-meeting form: real labels, correct input types, **Cloudflare Turnstile**,
  notification recipient set, and a real test submission before handover.

### Step 8 — Pre-launch sweep (browser agent)
Run `webflow-skills/pre-launch-checklist.md` in full. Check every breakpoint: 1440, the 992
first-desktop pixel, 768, 479, 390, and 3440 ultrawide. Report as pass / needs attention /
blocker.

---

## Standing constraints

| Rule | Why |
|---|---|
| Never publish | Eugene's call, per Gate 06 |
| Never write or reword copy | The copywriters own every word; placeholders stay until they supply text |
| No raw hex, px or rem in the Designer | Everything binds to a variable |
| One h1 per page, heading order intact | Accessibility and SEO |
| Buttons 0.5rem, nav CTA pill | The deliberate difference from Omble |
| Orange only where the rules allow | Nav and hero CTAs, open process node, flagged row, comparison arrow |
| No horizontal overflow at any width | Checked at every breakpoint |
| Fail visible | Nothing hidden by CSS and revealed by script |

---

## Open client flags — do not resolve these in Webflow

HowNow X logo · sample UI names and values · footer email and address · testimonial firms and
full names · Gilroy Bold and the web licences for both faces · 1,500 vs 2,000+ practices · the
BAW lockup size in the nav · whether the Omble resemblance is acceptable · the hero video.

If a step needs one of these, stop and ask rather than inventing a value.
