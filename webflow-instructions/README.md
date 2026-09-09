# Webflow Agent Instructions — Template Kit

A portable, site-agnostic instruction set for Webflow's AI agent Instructions panel: **3 skills + 11 rules** encoding a Client-First (custom dialect) build system. Deploy to any Webflow site so every agent (Webflow AI Assistant, Claude via MCP, Cursor, etc.) builds to the same standard.

```
webflow-skills/
  client-first-builder.md    ← the build playbook (naming, structure, tokens, decision trees)
  gsap-animation.md          ← motion system (data-attribute presets, IX2 banned, conversion workflow)
  pre-launch-checklist.md    ← final sweep + post-launch steps, report format
rules/
  naming.md              sizing-and-tokens.md    core-structure.md
  edit-safety.md         links-and-media.md      seo-essentials.md
  animation.md           responsive-quality.md   performance.md
  accessibility.md       forms.md
```
Each `webflow-skills/*.md` deploys to the Webflow path `<name>/SKILL.md`; its frontmatter `description` becomes the skill description.

Rules are read before every agent action (keep them short and absolute). Skills are referenced when relevant to the task.

---

## 1. Placeholders — ALREADY FILLED for ATOmate (same locale as Omble)

This copy of the kit is configured, not generic. The three placeholders were
replaced before it was committed:

| Placeholder | Value used |
|---|---|
| `{{SITE_LOCALE}}` | English (Australia) |
| `{{LANG_CODE}}` | en-AU |
| `{{SPELLING_VARIANT}}` | Australian English (colour, organise, centre) |

Nothing in `rules/` or `webflow-skills/` still contains a `{{` token. If you fork
this kit for another client, re-open those two tokens in `rules/seo-essentials.md`
and `webflow-skills/pre-launch-checklist.md`.

## 2. Per-site review — ATOmate decisions are recorded in `ATOMATE-CONFIG.md`

The generic guidance below is kept for reference. The decisions actually made for
this site live in `ATOMATE-CONFIG.md` in this folder — read that first.


- **Base Colour ramp names** (`navy-100…900`, `sand-100…900` are examples) → rename to the actual brand colours. Keep them descriptive (what the colour *is*), never role-based.
- **Container widths** — defaults `container-large/medium/small` = 80/64/48rem.
- **Spacer scale** — `spacer-tiny` 0.125rem → `xxlarge` 5rem (stepped rem + Variable Modes per breakpoint; a fluid `clamp()` backdoor is documented in the builder skill appendix, off by default).
- **Section padding** — `padding-section-small/medium/large` values.
- **Spam protection standard** — Turnstile / reCAPTCHA / honeypot (forms rule says "per project standard"; pick one).
- **Schema types** — seo-essentials lists Organization/LocalBusiness + per-type; trim to what the site actually needs.
- **Breakpoint list** in edit-safety (base + 1280/1440/1920 + tablet/landscape/portrait) — adjust if the project uses different large breakpoints.

## 3. Deploying

**Option A — via MCP (recommended).** Use the Webflow MCP `data_agent_instructions_tool` with the target `site_id`:
- Rules → `create_instruction` with `kind: "rule"`, path `rules/<name>.md`.
- Skills → `kind: "skill"`, path `<skill-name>/SKILL.md`. Pass the SKILL.md frontmatter `description` as the `description` param and the body (without frontmatter) as `markdown`.
- ⚠ Webflow's API rejects raw `<script>` tags in instruction markdown (HTTP 406). Keep code as fenced ```js blocks with loading instructions in prose (the gsap-animation skill is already formatted this way).

**Option B — zip import.** Rebuild the import layout first — `skills/<name>/SKILL.md` from each `webflow-skills/<name>.md` (frontmatter kept) plus `rules/*.md` — then zip only those two folders (exclude this README) for the Instructions panel's import button. Only `.md`/`.mdc` files are accepted.

**Option C — Shared Library.** Deploy once, then push the instruction set to a Workspace Shared Library so every site installs and receives updates from one place.

## 4. After deploying

1. Open the Instructions panel and verify tables/code blocks rendered cleanly.
2. Build the six variable collections (Base Colour, Theme, Spacing, Font Family, Typography, Layout — spec in the builder skill §8), then use the panel editor to insert **reference tokens** pointing at the live collections in the builder skill's variables section.
3. Add the GSAP init script (gsap-animation skill §6) to the site footer custom code.
4. Test: fresh agent session → "build a test section" → verify it produces `section-[page]_[element] > padding-global > container-* > padding-section-* > …` with token bindings and correct image attributes.
5. When collections exist, author the CMS guidelines skill against the live CMS (architecture, standard field set, Rich Text rules, reference patterns, empty states, editor experience).

## Design principles baked in

- One naming dialect: `section-[page]_[element]` wrappers · `[page]_[element]_[tag]` customs (`_description` for paragraphs) · `component_[name]_[tag]` · hyphen-only utilities · `is-*` variants.
- Tokens over values: semantic Theme bindings, primitives never bound, no hardcoded hex/px.
- GSAP-first motion, preset-driven, reduced-motion + fail-visible mandatory.
- Performance and CLS discipline: WebP everywhere (incl. CMS uploads), width/height attributes, eager+fetchpriority hero / lazy below fold.
- Agents never publish — they stage, report, and hand off.
