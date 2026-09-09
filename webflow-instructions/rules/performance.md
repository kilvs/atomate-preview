# Performance and scripts

- Fonts: WOFF2 only, maximum 2 families and 2–3 weights in actual use, `font-display: swap`, and a defined fallback stack. Icons are SVG — never an icon font for a handful of icons.
- Third-party scripts load `defer`/`async` and live in the footer embed; nothing render-blocking in the head. Before adding any library, check it isn't already loaded — never ship duplicates (two GSAPs, two slider libraries, jQuery for one selector).
- Site-wide code lives in Site Settings custom code; page-level custom code only for genuinely page-specific needs. No copy-pasted per-page duplicates that can drift apart.
- Embeds and iframes reserve their space (aspect-ratio or min-height) so nothing shifts when they load.
- Background videos: compressed, poster image set, no autoplay on mobile breakpoints.
- Targets before any handoff: Core Web Vitals — LCP < 2.5s, INP < 200ms, CLS < 0.1 (verify with Lighthouse / PageSpeed Insights).
- Webflow minification (CSS/JS/HTML) enabled in publishing settings.
