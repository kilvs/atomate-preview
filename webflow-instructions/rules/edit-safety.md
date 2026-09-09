# Edit safety

- Utility and global classes are shared — editing one changes every element that uses it. Check usage before touching a utility class. If the change is for one instance, use an `is-*` combo instead.
- Never rename classes inside an existing component definition; it affects every instance. Legacy classes inside older components are tolerated — do not refactor them opportunistically.
- Never publish the site. Stage changes, then summarize exactly what changed so the site owner can review and publish.
- Before finishing any task, verify: no auto-generated class names remain, no hardcoded values where a token exists, structure follows the core-structure rule, and every custom class shares its block's identifier prefix.
- Check the work on **every breakpoint** — base desktop, the larger 1280 / 1440 / 1920 views, and tablet / mobile landscape / mobile portrait — for overflow, unintended wrapping, and spacing breakage. Never sign off from the base breakpoint alone.
