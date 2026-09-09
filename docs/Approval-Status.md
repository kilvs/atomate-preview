# ATOmate Rebrand — Approval Status

Copied from the Claude Project (`00_Project-Core/Approval-Status.md`, rev 7, 9 Sep 2026) at the Claude Code handoff. The Project copy stays the master until Gate 06; update both.

## Gate 01 — Planning: direction decisions taken (Eugene, 9 Sep)
- Sep 7 PDF supersedes Aug 31 docx. Inspo = intent signals, not templates. Scope: homepage only for now.
- Omble relationship: shared skeleton, distinct skin. Arrow motif at the logo's 30° (measured 30.3°).
- Hero C (Overnight → Next-day approval). Logo marquee dropped.
Still open with the client: Omble resemblance; body copy; trust-bar stats; 1,500 vs 2,000+; testimonials; product screenshots; Gilroy Bold + licences.

## Gate 02 — Wireframe: structure accepted by Eugene 9 Sep (pending client)
Artifact: https://claude.ai/code/artifact/87421baf-a861-4715-b3bc-19829ebc72ae

## Gate 03 — Hi-Fi: ACCEPTED BY EUGENE 9 Sep ("After that I'm all good") — pending client
Artifact: https://claude.ai/code/artifact/d5b7bdfc-6d24-4bc0-9c6e-1e58567945ac — boards: Desktop (merged), Mobile (merged), Reference "Night to Morning" full alternate, System sheet.

As accepted: "Night to Morning" hero (navy, full arrow inside the fold, Overnight → Next-day approval), sticky nav (colour shift on scroll = Gate 04), giant stats row, logo shelf, night/day comparison (no bridge, no big 90%), ledger-frame How ATOmate works, then the alternate's sections (overnight band, elevated cards, dawn PAYG, pull quotes, email paper, security credentials line + full UI panels, navy quote testimonials, morning CTA). CTA label everywhere: "Book discovery meeting" (Eugene, 9 Sep — shortened from the source "Book a discovery meeting"; confirm with client). No icons in buttons. Corners 1rem/1.5rem, buttons 0.5rem, circular icons, pill chips.

Client flags to close: BAW lockup size; Gilroy Bold; orange usage vs brand guide; "Book discovery meeting" wording; partner logos from Omble assets; lorem/00% content; sample UI names (Sarah Chen, Lorem Ipsum Accounting). System sheet to be rewritten for the merged direction.

## Gate 04 — Animation: spec + prototype done 9 Sep
Prototype: https://claude.ai/code/artifact/c1c2d6be-f1a0-4551-be53-a2b779823b2a. Intents: sticky nav transparent-on-navy → solid white/navy text as hero scrolls out; hero arrow draws on load, head fades in last; testimonial carousel rotation (large slot ↔ small stack — Eugene to confirm); step click swaps reveal panel; reduced-motion static. See `Gate-04-Motion-Spec.md`.

## Gate 05 — Development: IN PROGRESS (this repo, from 9 Sep)
Repo stood up in `Webflow/ATOmate` mirroring Omble. `index.html` = accepted Hi-Fi + Gate 04 motion as real files. Next: Code Review, Page Quality audit.

## Gate 06 — Deployment: not started. Explicit approval required before GitHub → Vercel → Webflow.
