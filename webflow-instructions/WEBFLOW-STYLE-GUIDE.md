# Client-First style guide — ATOmate

What to build on the Webflow **Style Guide page** before the homepage, and how every class on
`index.html` maps into Client-First. The page already uses the Client-First dialect from
`webflow-instructions/rules/naming.md`, so this is a transcription, not a translation.

Pair with `WEBFLOW-VARIABLES.md` (build that first) and `docs/Webflow-Animation-Spec.md`.

---

## 1. Page skeleton — every page, no skipped layers

```
page-wrapper
└─ main-wrapper
   └─ section-[page]_[element]          ← the <section>, plus one ground class
      └─ padding-global                 ← horizontal gutter
         └─ container-large             ← 80rem, centred
            └─ padding-section-large    ← vertical rhythm
               └─ [page]_[element]_content
```

The homepage carries `page-wrapper` and `main-wrapper` already. Grounds are a second class on
the section: `background-stage-light` / `-mesh` / `-split` / `-azure` / `-peach`, or none for
plain white.

---

## 2. Style guide page — build in this order

1. **Colour swatches** — one row per Base Colour group, then the Theme tokens beneath, each
   labelled with its variable name. This is how the client checks the palette.
2. **Typography** — h1 to h6 as tag defaults, then the text sizes, then the heading-style
   utilities. Show each at desktop and note the breakpoint step-downs.
3. **Buttons** — `button`, `button.is-accent`, `button.is-white`, `button.is-small`,
   each with its hover state visible in the guide notes.
4. **Spacing** — the `spacer-*` scale as stacked blocks, then `padding-section-*`.
5. **Components** — chip, tick, icon disc, checklist row, section header, skeleton row.
6. **Grounds** — five bands showing each gradient with a heading and body sample on it.

---

## 3. Class inventory — what exists and where it belongs

### Section wrappers (15) — one per section, `section-home_[name]`

- `section-home_channels`
- `section-home_comparison`
- `section-home_cta`
- `section-home_filing`
- `section-home_hero`
- `section-home_informed`
- `section-home_integrations`
- `section-home_messaging`
- `section-home_overnight`
- `section-home_payg`
- `section-home_process`
- `section-home_review`
- `section-home_security`
- `section-home_testimonials`
- `section-home_trust`

### Grounds — second class on the section

- `background-stage-azure`
- `background-stage-light`
- `background-stage-mesh`
- `background-stage-peach`
- `background-stage-split`

### Components — reusable across sections, `component_[name]`

- `component_checklist`
- `component_checklist_item`
- `component_chip`
- `component_icon`
- `component_section-header`
- `component_section-header_description`
- `component_tick`

Build these as **Webflow components** where they repeat with different content (chip, tick,
icon disc, section header). Keep the rest as plain classes.

### Utilities — hyphen only, never an underscore

- `button`
- `button-group`
- `container-large`
- `hide-visually`
- `icon-stroke`
- `margin-large`
- `margin-top`
- `padding-global`
- `padding-section-large`
- `padding-section-medium`
- `skip-link`
- `text-color-highlight`
- `text-size-large`
- `text-style-quote`

### Variants — `is-` combos, never stacked more than two deep

- `is-accent`
- `is-active`
- `is-after`
- `is-approved`
- `is-blue`
- `is-centre`
- `is-colour`
- `is-current`
- `is-day`
- `is-dms`
- `is-end`
- `is-glass`
- `is-highlight`
- `is-large`
- `is-left`
- `is-light`
- `is-medium`
- `is-next`
- `is-night`
- `is-on-dark`
- `is-orange`
- `is-reversed`
- `is-review`
- `is-rules`
- `is-short`
- `is-split`
- `is-start`
- `is-step-1`
- `is-step-2`
- `is-step-3`
- `is-step-4`
- `is-step-5`
- `is-tall`
- `is-text`
- `is-tint`
- `is-trail`
- `is-white`

### Navbar and footer — established Client-First names, keep as-is

- `navbar_actions`
- `navbar_component`
- `navbar_icon-close`
- `navbar_icon-open`
- `navbar_link`
- `navbar_logo`
- `navbar_logo-link`
- `navbar_menu`
- `navbar_menu-button`
- `navbar_nav`
- `navbar_nav-wrap`
- `navbar_nav_item`
- `navbar_shell`

- `footer_bottom`
- `footer_brand`
- `footer_column`
- `footer_component`
- `footer_credit`
- `footer_grid`
- `footer_heading`
- `footer_link`
- `footer_list`
- `footer_logo`
- `footer_tagline`
- `footer_text`

### Page blocks — `home_[section]_[element]`

163 classes, all following `home_[section]_[element]_[tag]`. They are listed in full in
`/tmp` output of the audit script; in practice you do not hand-create them: build each section
from the markup and the names come across unchanged. The tags in use are `_content`, `_list`,
`_item`, `_wrap`, `_card`, `_title`, `_description`, `_label`, `_text`, `_mark`.

---

## 4. Rules that decide a class

1. Typography, spacing, container or a common background → **existing utility**.
2. A one-off variation of something that exists → **`is-*` combo**.
3. Structure specific to one section → **custom class** `home_[section]_[element]`.
4. Reused across sections → **`component_[name]`**, built as a Webflow component.
5. Never leave an element on `Div Block 12`. Never deep-stack. Never bind a Base Colour
   primitive directly to an element.

---

## 5. What must not drift in the port

- **Buttons are 0.5rem**, not pills — except the navbar CTA, which is a pill because it sits in
  a pill bar. This is the deliberate difference from Omble.
- **Orange is the nav and hero CTA only**, plus the open process node, the flagged row and the
  comparison arrow. Every other CTA is Azure.
- **Cards are elevated**, never flat boxes. Navy-tinted shadow on tinted grounds.
- **No eyebrows, no section numerals.** Section headers are an h2 plus at most two paragraphs.
- **Australian English**, `lang="en-AU"`, and the CTA label is exactly "Book Discovery Meeting".
