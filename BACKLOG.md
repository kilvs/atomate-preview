# Backlog — deferred items and what unblocks each

Nothing here is a design decision to be made in code. Each line names the owner.

## Blocked on the client

| Item | Where | Unblocked by |
|---|---|---|
| Sample UI names and values (Sarah Chen, Lorem Ipsum Accounting / Pty Ltd, 28 Oct 2026) and footer email / address | §5, §6, §8, §9, §10, §11, footer | Client supplies (section copy landed 9 Sep via the internal QA) |
| HowNow X logo | §2 DMS shelf | Client supplies; HowNow shown once meanwhile |
| 1,500 vs 2,000+ practices | §1b, §12 H2 | Client picks one |
| "200+ firms" (note) vs "Trusted by 2,000+ firms" (reference image) on the new Azure strip; built as 2,000+ | §1d (17 Sep) | Client confirms the figure |
| Testimonials — firms and full names for the six quotes | §12 | Client supplies (quotes landed 9 Sep) |
| Final art for the filing illustrations; product screenshots for the remaining mock UI | §7 (placeholder art in since 14 Sep); §5, §6 (built from the client's reference, 17 Sep), §8, §10, §11 | Client supplies |
| Web licences for Gilroy and Galano (commercial foundry fonts, Tinkov and René Bieder; Gilroy Bold arrived 17 Sep as a MyFonts web kit, Galano is complete) | all type | Client sends the licences (Eugene: coming shortly) |
| Orange as scarce accent vs guide's orange secondary buttons | system | Client nod |
| Every button orange with a white label, at 3.30:1 (fails AA for 16px); a navy label would be 5.7:1 | all CTAs (17 Sep) | Client accepts the trade-off or picks a navy label |
| BAW lockup size in the nav | nav | Client review |
| APS and Wolters Kluwer marks — official SVGs | §2 PMS shelf | Client supplies; the folder's SVGs are broken wrappers linking a local PNG |
| Video — hero stays text-only; the film now has its own section under the trust bar (17 Sep) | §1c | Client confirms the placement |
| Omble resemblance acceptable | whole site | Client confirms |

## Open with Eugene

| Item | Note |
|---|---|
| Mock-UI `is-small` button went orange with "all buttons" (17 Sep) | It was kept blue on 10 Sep because it depicts product UI; style guide only. Keep it orange or return it to blue? |
| Orange glow on the dark navy bands | Peach sheen grounds and the With ATOmate card got Ember bay's warmth (17 Sep); Azure depth (trust bar, overnight, channels) was left as is because the examples did not include it. Add it there too, or leave? |
| Testimonial arrows = rotation (featured ↔ stack) | Prototyped in Gate 04; confirm or specify the alternative before Webflow |
| System sheet / Hi-Fi-System doc rewrite for the merged direction | The Project's `02_Design-Artifact/Hi-Fi-System.md` still describes the earlier ledger-grid draft; `CLAUDE.md` here is the current record |
| Nav links and footer link targets | All `href="#"`; page list beyond the homepage not yet defined |
| Nav at exactly 992px | Fits in Chrome with Gilroy Bold links (24px gap before the CTA, 17 Sep); confirm in a real browser before Webflow (Omble's known defect; do not repeat it) |
| Mobile navigation | Added at the Client-First rebuild (menu button + dropdown, ≤991). The export had no mobile nav. Confirm the styling |
| Rebuild deviations | Nav link group 79px right of the export (real logo width); process frame rounded and 58px shorter (mangled-class fix); tablet step cells icon-over-title; CTA heading steps down on mobile. See CLAUDE.md "Build conventions" |

## Repo housekeeping — done 17 Sep 2026

- Class: one optimised vector (`class-02.svg`, 60 KB, was 98 KB) now serves both the PMS and SMSF tabs; the client's integration list names Class in both, so the duplication stays. `logo-class.png` retired.
- Dropbox: optimised to `dropbox-02.svg` (28 KB, was 65 KB). Both were checked side by side against the originals at 2x.
- Favicon and webclip: `favicon.ico` (16/32/48), `favicon-32.png` and `apple-touch-icon-180.png`, drawn from the 192px webclip.
- `og:image` is absolute, pointing at `https://atomate-preview.vercel.app`; the Webflow site sets its own domain's URL.
- Every asset nothing references (supplied art replaced by markup, the old icons and logos, Galano 500/600/700, the colour mark) moved to `Guide & References/Unused site assets (moved 17 Sep 2026)/`, which git ignores. Nothing was deleted. `assets/` now holds only what the page uses, which is the Webflow upload set.
