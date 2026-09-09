# Gate 04 — Motion spec (9 Sep 2026)

Copied from the Claude Project (`03_Animation/Gate-04-Motion-Spec.md`). Implementation in this repo: `assets/js/motion.js` (+ the motion-state rules at the end of `assets/css/style.css`).

Prototype: https://claude.ai/code/artifact/c1c2d6be-f1a0-4551-be53-a2b779823b2a ("ATOmate Motion Prototype") — the approved Hi-Fi homepage running live with all motion. GSAP 3.12.5 + ScrollTrigger from cdnjs.
Convention: Webflow UI Design skill — declarative `data-*-animate` attributes + one GSAP init. Ports to the Webflow build as custom attributes + one site embed; the bespoke pieces below are small named functions in the same script.

## Principle
One orchestrated moment (the hero), everything else quiet and functional. Entrances 0.4–0.7s, `power2.out`. Nothing parked hidden without JS: the init sets start states, so a failed script fails visible. `prefers-reduced-motion` → all content shown, no motion, counters at final values.

## 1. Sticky nav — colour shift on scroll
`.site-nav` fixed. State A over the hero: transparent, white lockup (`atomate-white.svg`), white links, white CTA. State B once the hero has scrolled out (`scrollY > hero bottom − 88px`): `.is-solid` → white at 96% with hairline + soft shadow, colour lockup crossfades in, links navy-700, CTA blue-500/white. Transition 0.35s. Webflow: native sticky + a 2-state class toggled by a tiny scroll listener (or IX2 "while page scrolling").

## 2. Hero — load sequence
`.hero-copy` children fade-up, stagger 0.12s, delay 0.2s (H1 → sub → CTA).
Arrow: start dot fades in with the "Overnight" label (0.3s); the line draws along its path — flat run then the 30° rise — 1.4s `power2.inOut` (stroke-dashoffset); the orange head fades in as the line arrives (0.3s); "Next-day approval" label fades last. Total ≈ 2.6s from load. This is the page's one signature moment.

## 3. Stats — count-up
`[data-countup]` on 2,000+ and 90%: 0 → target over 1.6s `power2.out` when the row enters (top 90%), once. Formats "2,000+" with the thousands separator. The 00% lorem cells stay static until real stats exist. (Client asked for count-ups; only two real numbers.)

## 4. Scroll reveals
`data-scroll-animate` fade-up, distance 24px, once, start `top 85%`: section headers (stagger 0.1), logo shelf (0.05), comparison cards (0.15), card grids (0.1), splits (0.15), the how-it-works frame, credentials line (0.08), testimonial grid (0.1). No parallax, no scale, no pinning.

## 5. How ATOmate works — click to reveal
Five cells are buttons (`role="button"`, keyboard Enter/Space). Click: active cell takes the navy fill + orange icon; the panel's title and copy cross-fade (out 0.18s, in 0.3s, 5% stagger) — the panel keeps its height so nothing jumps. Step 1 open by default.

## 6. Integrations tabs
Pill tabs switch shelves (PMS / DMS / SMSF); incoming logos fade-up with a 0.04s stagger. DMS and SMSF logos are the client's SVGs from `Guide & References/ATOmate V2/Partner Tools` (added at handoff; the prototype used name tiles).

## 7. Testimonials — rotation
Prev/next rotate the queue: the top small card moves into the featured navy slot, the featured quote drops to the stack, the third moves up. Cards fade out/in (0.2s / 0.35s, small stagger). Layout never changes shape. Confirmed direction pending Eugene ("which card changes" — this is the rotation option).

## 8. Micro
Cards lift 3px with a deeper shadow on hover; buttons scale 0.98 on press; smooth anchor scrolling. All disabled under reduced motion.

## Not done on purpose
No background animation, no parallax, no marquee, no cursor effects, no hero video. Orange never animates except the arrowhead arriving.

## Webflow handoff
Attributes per element as above; one GSAP embed site-wide; nav needs 2 lockup images stacked; steps/tabs/testimonials need their small JS kept in the same embed (or rebuilt as IX2 click interactions — equivalent). See `webflow-instructions/ATOMATE-CONFIG.md`.
