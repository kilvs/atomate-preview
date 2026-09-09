---
name: client-first-builder
description: How to build and edit pages, sections, components, and styles on this site using our Client-First system. Reference this skill whenever creating or modifying layout, sections, grids, typography, spacing, colors, buttons, variables, or any page structure — even for small edits. If a task touches the canvas, the style panel, or the Variables panel, read this first.
---

# Client-First Builder

This site is built on Finsweet's Client-First system with site-specific conventions defined here. The goal: anyone — human or agent — can read the Navigator and the class panel and understand the build without a meeting.

The site Rules are the law — every rule applies to every task. This skill is the manual for applying them. For motion, see the `gsap-animation` skill; before any launch or handoff, run the `pre-launch-checklist` skill.

## 1. Philosophy

- Utility system first: shared, single-purpose utility classes handle typography, spacing, containers, and common backgrounds. Custom classes handle everything specific to one block.
- Ideally a text element carries **no class at all** — it inherits the defaults styled on the `body` and `h1`–`h6` tags. Add a utility class only to customize past the default.
- Never deep-stack classes: one base class plus at most one or two `is-*` combos.
- Every styling decision that repeats belongs in a variable. The style panel holds bindings, not raw values.

## 2. Naming system (complete)

| Thing | Pattern | Examples |
|---|---|---|
| Section wrapper | `section-[page]_[element]` | `section-home_hero`, `section-about_team` |
| CMS template section | `section-template-[collection]_[element]` | `section-template-blog_header` |
| Site-wide section | `section-global_[element]` | `section-global_cta` |
| Custom class in a section | `[page]_[element]_[tag]` | `home_hero_content`, `home_projects_item` |
| Reusable component | `component_[name]_[tag]` | `component_project-card_content` |
| Utility class | hyphens only, never an underscore | `text-size-large`, `padding-global` |
| Variant | `is-` combo on a base class | `button is-secondary` |
| Interaction | `[Element] [Action] [State]` | "Navbar Dropdown Open" |

Common tags: `_content`, `_wrap`, `_list_wrap`, `_list`, `_item`, `_card`, `_image_wrap`, `_heading-wrap`, `_description`. Paragraph / supporting copy always uses `_description` (`home_hero_description`) — never `_text` or `_paragraph`. Words within one level are hyphenated (`home_hero_heading-wrap`); underscores only separate levels. The established `navbar_component` and `footer_component` stay as-is.

## 3. Core structure recipe

Every section on every page:

```
section-[page]_[element]        ← the <section> tag
└─ padding-global               ← horizontal page gutter (site-wide, edit once)
   └─ container-large           ← max-width, centered (or -medium / -small)
      └─ padding-section-large  ← vertical rhythm (or -medium / -small)
         └─ [page]_[element]_content
            └─ headings, text, lists, buttons…
```

- `container-large` is the default. `-medium` for narrower layouts, `-small` for prose and forms.
- `padding-section-large` for heroes and major sections, `-medium` as the default band, `-small` for tight strips.
- Do not skip layers. Do not add classless divs.

## 4. Which class do I create? (decision tree)

1. Typography, spacing, a container, or a common background? → use an existing **utility**. Check the panel first; never create a near-duplicate utility.
2. A one-off variation of an existing element? → an **`is-*` combo** on the base class.
3. Structure or styling specific to one section? → a **custom class** `[page]_[element]_[tag]`.
4. A reusable block used across pages? → **`component_[name]_[tag]`**, built as a Webflow Component.
5. Genuinely unique text no utility covers (e.g. footer copyright: tiny, grey, all-caps)? → a custom class is correct: `footer_copyright-text`.

## 5. Grids, lists, and CMS

Repeating items always use the three-layer chain, which maps 1:1 to Webflow CMS elements:

```
home_projects_list_wrap      ← wraps the list area (padding/constraints live here)
└─ home_projects_list        ← display:grid or flex — maps to Collection List
   └─ home_projects_item     ← one cell — maps to Collection Item
      └─ component_project-card             ← optional reusable card
         ├─ component_project-card_image-wrap
         └─ component_project-card_content
```

- Grid styles live on `_list` only. Gaps come from the Layout collection `gap-*` variables.
- The page owns the grid; the component owns the card's internals. The same component drops into any page's `_item` unchanged.

## 6. Typography

- Tag defaults do the heavy lifting: `h1`–`h6` and body are styled globally and bound to Typography variables. Unmodified text gets no class.
- Size ≠ semantics: pick the tag by document outline, the look by class. A visually-small heading that is semantically second-level is `<h2 class="heading-style-h5">`.
- Utilities: `heading-style-h1…h6`, `text-size-small/regular/medium/large`, `text-weight-*`, `text-color-*`, `text-align-*`.
- All font sizes bind Typography variables; families bind Font Family variables (`font-heading`, `font-body`). Never type a px font size.

## 7. Spacing

- Between sections: `padding-section-*` (already in the recipe).
- Within a section: `margin-top` / `margin-bottom` + size utilities, or spacing wrapper divs — values always from the `spacer-*` scale.
- The scale: `spacer-tiny` 0.125rem · `xxsmall` 0.25 · `xsmall` 0.5 · `small` 1 · `medium` 2 · `large` 3 · `xlarge` 4 · `xxlarge` 5.
- Responsive: base values are desktop; Variable Modes shrink them per breakpoint automatically. For a one-off responsive exception, add an `is-*` combo — never edit the global utility for one instance.

## 8. Variables (the token system)

Six collections. Bind semantic tokens; never bind Base Colour primitives to elements.

| Collection | Type(s) | Holds |
|---|---|---|
| **Base Colour** | Color | Primitive ramps with **descriptive colour names** — what the colour *is*, never its role: `navy-100…900`, `sand-100…900`, system `green-success` / `amber-warning` / `red-error`. Source palette only. |
| **Theme** | Color | Semantic tokens pointing at Base Colour — Background, Text, Border, Link, and Button groups (`button-primary-background`, `button-primary-text`, `button-primary-border`, plus `-hover` variants; matching `button-secondary-*`). Light/dark via Modes. |
| **Spacing** | Size | The `spacer-*` scale, `padding-section-small/medium/large`, `padding-global`. Per-breakpoint Modes. |
| **Font Family** | Font Family | `font-heading`, `font-body` (extend only if the project uses more). |
| **Typography** | Size + Number | `heading-h1…h6`, `text-small/regular/medium/large`; `weight-regular/medium/semibold/bold`; `leading-tight/normal/relaxed`. Sizes carry per-breakpoint Modes. |
| **Layout** | Size + Number | `container-large/medium/small` (80/64/48rem), `radius-small/medium/large/round`, `gap-small/medium/large`, `max-width-text` (~42rem), `navbar-height`, z-index numbers. |

<!-- REF: In the Webflow Instructions editor, insert live reference tokens to the site's actual variable collections here so agents always resolve current values instead of this static table. -->

**Buttons + hover:** hover is a CSS *state*, not a variable Mode. Bind `button-primary-background` (etc.) on the default state and `button-primary-background-hover` inside the class's **Hover state**. Modes handle *context* — light/dark (`data-variant` wrapper) and breakpoints — and every token, including hover tokens, can hold different values per mode.

**Adding a token:** if a needed value doesn't exist, propose it (name, collection, value, where used). Never hardcode in the meantime.

## 9. Buttons

```
button-group            ← always, even for a single button
├─ a.button             ← primary
└─ a.button.is-secondary
```

Button padding, radius, and colors are all token-bound. Restyle buttons from the Variables panel, never per-instance.

## 10. Worked example — "Home / Services", built correctly

```
section-home_services                        <section>
└─ padding-global
   └─ container-large
      └─ padding-section-medium
         └─ home_services_content
            ├─ home_services_heading-wrap
            │  ├─ h2                          (no class — inherits global style)
            │  └─ p.text-size-large
            ├─ home_services_list_wrap
            │  └─ home_services_list          (grid; gap bound to gap-medium)
            │     └─ home_services_item       (×N — or Collection Item)
            │        └─ component_service-card
            │           ├─ component_service-card_image-wrap
            │           │  └─ img              (width/height set, alt on the asset, lazy unless first viewport)
            │           └─ component_service-card_content
            │              ├─ h3.heading-style-h5
            │              └─ p
            └─ button-group
               └─ a.button
```

Finish checklist: naming matches Section 2 · no auto-generated classes · no hardcoded values where tokens exist · structure matches Section 3 · one `h1` on the page, heading order intact · every breakpoint checked (edit-safety + responsive-quality rules) · images follow links-and-media · motion follows the animation rule.

## Appendix — fluid spacing backdoor (OFF by default)

This site uses stepped rem values with per-breakpoint Variable Modes. If a future decision switches to fluid spacing: Webflow variables compile to real CSS custom properties, so the Spacing tokens can be overridden with `clamp()` expressions in the Global Styles embed — same tokens, same bindings, only the resolved values become fluid. Do not enable this without the site owner's explicit sign-off.
