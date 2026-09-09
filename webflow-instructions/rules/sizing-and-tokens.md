# Sizing and tokens

- All sizing in rem (1rem = 16px). Allowed exceptions only: `1px` borders, `0.125rem` micro-spacing, `0.875rem` small type.
- If a value exists as a variable, bind the variable — never re-type the raw value. No hardcoded hex colors, no px font sizes, no free-typed spacing like `padding: 37px`.
- Bind **semantic** tokens (Theme, Typography, Spacing, Layout collections) to elements. Never bind Base Colour primitives directly — a primitive binding will not follow theme changes.
- Spacing values come from the Spacing collection only (`spacer-*`, `padding-section-*`, `padding-global`). Responsive changes happen through Variable Modes per breakpoint, overriding downward from the desktop base.
- If a needed value does not exist as a token, propose it to the site owner (name, collection, value, where it's used). Do not invent a hex code or a one-off size in the style panel in the meantime.
