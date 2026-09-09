# ATOmate — homepage build and Webflow kit

Homepage implementation, design system and Webflow agent-instruction kit for
**ATOmate, powered by BAW** — ATO document automation for Australian accounting
practices.

The site ships in **Webflow** (Finsweet Client-First). This repo is the
implementation of record for the accepted design and deploys to Vercel as the
client-review surface.

New session? Read **`CLAUDE.md`** first. It carries the settled decisions.

---

## Run locally

Static site, no build step, no dependencies. GSAP loads from cdnjs.

```bash
python3 -m http.server 8080      # then open http://localhost:8080
```

## Deploy (Gate 06 — only after explicit approval)

```bash
git init
git add .
git commit -m "ATOmate homepage — accepted Hi-Fi + Gate 04 motion"
git branch -M main
git remote add origin git@github.com:<you>/atomate-web.git
git push -u origin main
```

Vercel: **Add New → Project → import the repo**. Framework *Other*, no build
command, output directory `.`. `vercel.json` sets `noindex` headers and asset
caching.

**Before sharing the URL with the client:** add Vercel password protection
(Project → Settings → Deployment Protection). Unreleased brand work for a company
handling ATO data should not be publicly indexable; the `noindex` header is a
second line of defence, not a substitute.

---

## What is in here

```
index.html                          the homepage — 13 sections + footer, Client-First classes, all motion
assets/
  css/style.css                     tokens, system, components, responsive, motion states
  js/motion.js                      one GSAP init + steps / tabs / testimonials / nav
  fonts/                            Gilroy ExtraBold, Galano 400–700 (woff2, self-hosted)
  img/brand/                        lockups, marks, favicon, og-image, webclip
  img/partners/                     PMS / DMS / SMSF logos
content/homepage-spec.md            section-by-section content of record + flags
docs/                               Gate 01 review, approval status, direction, motion spec
design-references/README.md         links to the design canvases and what each board is
webflow-instructions/               agent kit (shared with Omble) + ATOMATE-CONFIG.md
CLAUDE.md                           project context, settled decisions
BACKLOG.md                          deferred items and what unblocks each
vercel.json                         static config + noindex headers
```

The client-supplied brief, brand guide, palette, fonts and logos live in
`Guide & References/` in this repo and are not duplicated in `assets/` except for
what the page needs.
