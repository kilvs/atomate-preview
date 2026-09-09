# Naming

All class, variable, and interaction names on this site follow these laws. No exceptions.

- Lowercase only. Hyphens separate words within a level. Underscores separate levels in custom classes — never sit inside a word pair.
- **Section wrappers:** `section-[page]_[element]` → `section-home_hero`, `section-about_team`. The wrapper carries no trailing tag. CMS template pages use `template-[collection]` as the page identifier → `section-template-blog_header`. Site-wide sections use `global` → `section-global_cta`.
- **Custom classes inside a section:** `[page]_[element]_[tag]` → `home_hero_content`, `home_projects_list_wrap`, `home_projects_item`.
- **Description text:** paragraph / supporting copy always uses the `_description` tag → `home_hero_description`. Never `_text` or `_paragraph`.
- **Reusable components:** `component_[name]_[tag]` → `component_project-card`, `component_project-card_content`. The established `navbar_component` and `footer_component` names stay as-is.
- **Utility classes** never contain an underscore: `text-size-large`, `padding-global`, `button-group`, `container-large`.
- **Variants** use `is-` combo classes on a base class: `button is-secondary`. Maximum one or two combos — never deep-stack classes.
- Name by role, never by appearance: `card_title`, not `card_blue-18px`. No numbered suffixes as versioning — `hero_wrapper-2` is forbidden.
- Never leave an element on an auto-generated class (`Div Block 12`, `Heading 4`). Assign a proper class or remove the element before finishing.
- **Base Colour variables** carry descriptive colour names — what the colour *is*: `navy-800`, `sand-100`, `coral-500`. Role-based names (`background-primary`, `button-primary-background`) live only in the Theme collection.
- **Interactions:** `[Element] [Action] [State]` → "Navbar Dropdown Open".
