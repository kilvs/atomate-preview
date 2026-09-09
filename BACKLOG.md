# Backlog — deferred items and what unblocks each

Nothing here is a design decision to be made in code. Each line names the owner.

## Blocked on the client

| Item | Where | Unblocked by |
|---|---|---|
| Sample UI names and values (Sarah Chen, Lorem Ipsum Accounting / Pty Ltd, 28 Oct 2026) and footer email / address | §5, §8, §10, §11, footer | Client supplies (section copy landed 9 Sep via the internal QA) |
| ISO 27001 certified logo beside the hero CTA | §1 | Client supplies the file |
| HowNow X logo | §2 DMS shelf | Client supplies; HowNow shown once meanwhile |
| 1,500 vs 2,000+ practices | §1b, §12 H2 | Client picks one |
| Testimonials — firms and full names for the six quotes | §12 | Client supplies (quotes landed 9 Sep) |
| Product screenshots for card previews and security UI | §5–§11 mock UI | Client supplies; mocks stay until then |
| Gilroy Bold + web licences for Gilroy and Galano | headings | Client supplies the file and confirms licences |
| Orange as scarce accent vs guide's orange secondary buttons | system | Client nod |
| BAW lockup size in the nav | nav | Client review |
| APS and Wolters Kluwer marks — official SVGs | §2 PMS shelf | Client supplies; the folder's SVGs are broken wrappers linking a local PNG |
| Hero video — dropped or relocated | §1 | Client confirms V2's text-only hero |
| Omble resemblance acceptable | whole site | Client confirms |

## Open with Eugene

| Item | Note |
|---|---|
| Testimonial arrows = rotation (featured ↔ stack) | Prototyped in Gate 04; confirm or specify the alternative before Webflow |
| System sheet / Hi-Fi-System doc rewrite for the merged direction | The Project's `02_Design-Artifact/Hi-Fi-System.md` still describes the earlier ledger-grid draft; `CLAUDE.md` here is the current record |
| Nav links and footer link targets | All `href="#"`; page list beyond the homepage not yet defined |
| Nav at exactly 992px | Fits in headless Chrome (gap 1.5rem + 3rem button below 1100px); confirm in a real browser before Webflow (Omble's known defect; do not repeat it) |
| Mobile navigation | Added at the Client-First rebuild (menu button + dropdown, ≤991). The export had no mobile nav. Confirm the styling |
| Rebuild deviations | Nav link group 79px right of the export (real logo width); process frame rounded and 58px shorter (mangled-class fix); tablet step cells icon-over-title; CTA heading steps down on mobile. See CLAUDE.md "Build conventions" |

## Repo housekeeping

- `class-01.svg` is 98 KB (embedded raster); appears in both PMS (as `logo-class.png`) and SMSF. Confirm the duplication is intentional, then optimise.
- `dropbox-01.svg` is 65 KB; optimise with svgo before Webflow upload.
- Favicon / webclip / og-image are the client's JPGs; convert favicon to PNG/ICO at 32/180 before launch.
- `og:image` is a relative path; set the absolute URL on the Webflow site once the domain is known.
