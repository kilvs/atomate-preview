# Responsive quality

- **No horizontal overflow at any breakpoint, ever.** Nothing scrolls sideways. Check the usual culprits: wide grids and tables, embeds, marquees, absolutely-positioned decoration, negative margins. Fix the cause — `overflow: hidden` on a section is a last resort, not a solution.
- **Headings on mobile target a maximum of ~3 lines.** Fix by tightening the copy, stepping the heading size down through Variable Modes, or constraining width. If the heading genuinely can't fit in 3 lines after those fixes, exceeding the cap is acceptable — but never leave an orphan (a single word alone on the last line), and never shrink text below readable sizes just to force compliance.
- Body copy stays readable on mobile: line length constrained (use `max-width-text`), no text smaller than 0.875rem.
- Buttons and nav items never wrap mid-label. If a `button-group` doesn't fit horizontally on mobile, stack it vertically.
- Media scales with its wrapper (max-width 100%); no fixed pixel widths that break small screens.
- Tap targets are at least 44×44px on touch breakpoints.
- Grids collapse deliberately: define the column count per breakpoint (e.g. 3 → 2 → 1). Never rely on auto-wrapping to luck into a mobile layout.
- The desktop navbar must fit its full menu and the CTA at the 992px base width, the first desktop pixel. If it does not, tighten gaps or use the small button; never let the CTA clip, never shorten its label, and never rely on a breakpoint Webflow does not have.
