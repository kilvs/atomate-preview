# Animation

- Motion is GSAP-first. Never build with Classic Interactions (IX2), and never mix animation engines on the same page — each engine loads its own runtime and hurts performance.
- Default approach: the site's **data-attribute GSAP preset system** (see the `gsap-animation` skill). Animations are declared with `data-*-animate` attributes using existing presets — never one-off bespoke tweens.
- Webflow's native **Interactions with GSAP (IX3)** is acceptable for simple, designer-maintained, component-scoped motion. When in doubt, use the code system.
- Be strict when animations arrive from Figma designs, GitHub code, or legacy builds: map every animation to an existing preset first. Extend the preset library only for genuinely new patterns — never re-implement a one-off version of something a preset already does.
- `prefers-reduced-motion` is honoured, and content must fail visible (readable with JS disabled). Animate transforms and opacity only — never layout properties.
