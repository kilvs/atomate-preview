# Webflow variable collections — ATOmate

Generated from `assets/css/style.css`, which is the source of truth. Build these collections
**before** any page work: every class in the style guide binds to them, and nothing in the
Designer should carry a raw hex, px or rem value.

Webflow variable types used here: **Color**, **Size**, **Font family**. Groups are made with a
`Group/name` in the variable name (Webflow nests them under a folder in the panel).

**Breakpoints.** Base is desktop (1440 design width). Webflow's stack is 991 / 767 / 479. Where
a variable changes per breakpoint, the table gives the value for each; set the base value first,
then select the breakpoint in the Designer and edit the same variable.

---

## 1. Base Colour — primitives, named for what the colour *is*

Never bind these to an element. Elements bind Theme tokens, which point here.

**Navy/** — Deep Navy #03466B is the brand navy: headings, dark blocks, hover for Azure. 800/900 are its night tints.

| Variable | Value | Type |
|---|---|---|
| `Navy/navy-900` | `#021F35` | Color |
| `Navy/navy-800` | `#022A45` | Color |
| `Navy/navy-700` | `#03466B` | Color |

**Blue/** — Azure #0078BA is the primary: buttons, links, active states.

| Variable | Value | Type |
|---|---|---|
| `Blue/blue-600` | `#0A5A8A` | Color |
| `Blue/blue-500` | `#0078BA` | Color |
| `Blue/blue-300` | `#5FB0DE` | Color |
| `Blue/blue-100` | `#E5F3FA` | Color |
| `Blue/blue-50` | `#F1F8FC` | Color |

**Orange/** — Signal Orange #EB6405 is the accent: nav + hero CTAs, the open process node, flagged states.

| Variable | Value | Type |
|---|---|---|
| `Orange/orange-600` | `#C9550A` | Color |
| `Orange/orange-500` | `#EB6405` | Color |
| `Orange/orange-300` | `#FFB280` | Color |
| `Orange/orange-100` | `#FFF0E6` | Color |

**Ink/** — Body, secondary and muted text on light grounds.

| Variable | Value | Type |
|---|---|---|
| `Ink/ink-900` | `#1F2A33` | Color |
| `Ink/ink-700` | `#3D4A55` | Color |
| `Ink/ink-500` | `#6B7A86` | Color |

**Line/** — Hairlines and card borders.

| Variable | Value | Type |
|---|---|---|
| `Line/line` | `#D5DDE3` | Color |
| `Line/line-soft` | `#E6ECF0` | Color |
| `Line/line-on-dark` | `rgba(255,255,255,.14)` | Color |

**Paper/** — Page ground and the light stage.

| Variable | Value | Type |
|---|---|---|
| `Paper/paper` | `#FFFFFF` | Color |
| `Paper/paper-100` | `#F4F7F9` | Color |

**Signal/** — Status only: approved, flagged, warning. Never decorative.

| Variable | Value | Type |
|---|---|---|
| `Signal/green-success` | `#1E6B3A` | Color |
| `Signal/green-success-bg` | `#E3F3E8` | Color |
| `Signal/red-error` | `#D0342C` | Color |
| `Signal/red-error-bg` | `#FBEAE8` | Color |
| `Signal/amber-warning` | `#9A3B00` | Color |


---

## 2. Theme — semantic tokens (bind these)

| Variable | Points at | Used by |
|---|---|---|
| `Theme/background-primary` | `Paper/paper` | page ground |
| `Theme/background-secondary` | `Blue/blue-50` | trays, tinted rows |
| `Theme/background-alternate` | `Navy/navy-900` | dark bands |
| `Theme/text-primary` | `Ink/ink-900` | body copy |
| `Theme/text-secondary` | `Ink/ink-700` | supporting copy |
| `Theme/text-muted` | `Ink/ink-500` | captions, notes |
| `Theme/text-heading` | `Navy/navy-800` | headings on light |
| `Theme/text-on-dark` | `Paper/paper` | anything on a dark band |
| `Theme/text-highlight` | `Orange/orange-500` | the accent word, on light |
| `Theme/text-highlight-alt` | `Orange/orange-300` | the accent word, on dark |
| `Theme/border-primary` | `Line/line` | card borders, dividers |
| `Theme/border-soft` | `Line/line-soft` | inner hairlines |
| `Theme/border-on-dark` | `Line/line-on-dark` | dividers on dark bands |
| `Theme/button-primary-background` | `Blue/blue-500` | every CTA except nav + hero |
| `Theme/button-primary-background-hover` | `Navy/navy-700` | its hover |
| `Theme/button-primary-text` | `Paper/paper` | label |
| `Theme/button-accent-background` | `Orange/orange-500` | nav + hero CTA only |
| `Theme/button-accent-background-hover` | `Navy/navy-700` | its hover |
| `Theme/button-on-dark-background` | `Paper/paper` | CTAs on navy / peach |
| `Theme/button-on-dark-background-hover` | `Orange/orange-500` | its hover |
| `Theme/button-on-dark-text` | `Navy/navy-700` | its label |

**Hover is a state, not a mode.** Bind the base token on the default state and the `-hover`
token inside the class's Hover state.

---

## 3. Typography — sizes

| Variable | Desktop | ≤991 | ≤767 | ≤479 | Type |
|---|---|---|---|---|---|
| `Typography/heading-h1` | `4.5rem` | `3.5rem` | `2.75rem` | `2.5rem` | Size |
| `Typography/heading-h2` | `3rem` | `2.25rem` | `1.875rem` | `1.75rem` | Size |
| `Typography/heading-h3` | `1.375rem` | — | — | — | Size |
| `Typography/heading-h4` | `1.25rem` | — | — | — | Size |
| `Typography/heading-h5` | `—` | — | — | — | Size |
| `Typography/heading-h6` | `—` | — | — | — | Size |
| `Typography/text-large` | `1.375rem` | — | — | — | Size |
| `Typography/text-regular` | `1.0625rem` | — | — | — | Size |
| `Typography/text-small` | `.9375rem` | — | — | — | Size |
| `Typography/text-tiny` | `.75rem` | — | — | — | Size |

Weights and line heights (brand guide, 17 Sep): headings and all emphasised text are **Gilroy
Bold 700** (use 800 in the Designer until the Bold file is uploaded, or Webflow synthesises it);
everything else is **Galano 400**, with no heavier Galano weights. Heading line height
0.98–1.3 tightening as size grows; body 1.55–1.65. Heading letter-spacing −0.02em, −0.03em on
the h1.

---

## 4. Font Family

| Variable | Value | Type | Notes |
|---|---|---|---|
| `Font/font-heading` | Gilroy | Font family | ExtraBold only. Upload the same woff2 as a custom font. |
| `Font/font-body` | Galano Grotesque | Font family | 400 / 500 / 600 / 700. |

Fallback stack for both: `'Avenir Next', 'Helvetica Neue', Arial, sans-serif`. Web licences for
both faces are an open client flag.

---

## 5. Spacing

| Variable | Value | Type |
|---|---|---|
| `Spacing/spacer-xsmall` | `.5rem` | Size |
| `Spacing/spacer-small` | `1rem` | Size |
| `Spacing/spacer-medium` | `2rem` | Size |
| `Spacing/spacer-large` | `3rem` | Size |
| `Spacing/spacer-xlarge` | `4rem` | Size |

**Section padding — these change per breakpoint.** Set the desktop value, then edit the same variable with each breakpoint selected.

| Variable | Desktop | ≤991 | ≤767 | Type |
|---|---|---|---|---|
| `Spacing/padding-global` | `2.5rem` | `2.5rem` | `1.25rem` | Size |
| `Spacing/padding-section-small` | `2rem` | `2rem` | `1.5rem` | Size |
| `Spacing/padding-section-medium` | `6rem` | `4.5rem` | `4rem` | Size |
| `Spacing/padding-section-large` | `7rem` | `5rem` | `4rem` | Size |
| `Spacing/padding-section-xlarge` | `8rem` | `6rem` | `4.5rem` | Size |

---

## 6. Layout

| Variable | Value | Type | Used by |
|---|---|---|---|
| `Layout/radius-card` | `1.5rem` | Size | cards |
| `Layout/radius-box` | `1rem` | Size | smaller boxes, trays, tiles |
| `Layout/radius-button` | `.5rem` | Size | buttons — ATOmate is 0.5rem, not Omble's pill |
| `Layout/radius-round` | `50px` | Size | pills, circles, chips |
| `Layout/navbar-height` | `5.5rem` | Size | the navbar shell |

---

## 7. Sizing — component dimensions

| Variable | Value | Type | Used by |
|---|---|---|---|
| `Sizing/button-height` | `3.125rem` | Size | `.button` |
| `Sizing/button-height-small` | `2.25rem` | Size | `.button.is-small` |
| `Sizing/icon-disc` | `3rem` | Size | `.component_icon` |
| `Sizing/icon-disc-small` | `2.25rem` | Size | channel pills, mock rows |
| `Sizing/tick` | `1.5rem` | Size | `.component_tick` |
| `Sizing/process-node` | `6rem` | Size | the five step nodes |
| `Sizing/process-glyph` | `42px` | Size | the icon inside a node |
| `Sizing/avatar` | `2.5rem` | Size | testimonial avatars |
| `Sizing/logo-height` | `2.75rem` | Size | navbar lockup |
| `Sizing/iso-badge` | `3.25rem` | Size | hero ISO badge |

---

## 8. Section grounds

Five backgrounds, built as classes rather than variables because each is a multi-stop gradient.
Recipes are in `CLAUDE.md` under "Section grounds". Assign one per section so no two neighbours
repeat: Warm mesh, Split light, Azure depth (lit), Peach sheen, Cool morning (integrations, 17 Sep), plain white.

Split light is also the fill for content cards (Without ATOmate, overnight panel, review,
filing, PAYG, testimonials; 17 Sep). The stylesheet keeps it as `--gradient-split-light`;
in Webflow, save it once as a style on a shared card combo rather than retyping the stops.
