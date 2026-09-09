# Core structure

- Every section follows this exact nesting, no skipped layers:
  `page-wrapper > main-wrapper > section-[page]_[element] > padding-global > container-[large|medium|small] > padding-section-[large|medium|small] > [page]_[element]_content`
- Repeating items (grids, Collection Lists) use `[page]_[element]_list_wrap > _list > _item`. The grid/flex styling lives on `_list` — never on `_wrap`, never on `_item`.
- Images are wrapped: `[page]_[element]_image_wrap` (or `component_[name]_image-wrap`) around the image element.
- CTAs always sit inside `button-group`, even a single button.
- Semantic HTML: `header` / `nav` / `main` / `section` / `footer` tags; exactly one `h1` per page; no skipped heading levels. When visual size ≠ semantic level, keep the correct tag and style with `heading-style-h*` / `text-size-*` utilities.
- No classless divs that serve no purpose. If you can't say what a div is for, it shouldn't be there.
