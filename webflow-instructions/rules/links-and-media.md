# Links and media

- External links (any href leaving this site's domain) always open in a new tab: enable "Open in new tab" (`target="_blank"`) and add `rel="noopener"` via custom attributes.
- Internal links never open in a new tab.
- Every image element carries **explicit `width` and `height` attributes** (its intrinsic dimensions) so the browser reserves the space and layout never shifts (CLS).
- Hero / first-viewport large images: set Load to **Eager** (`loading="eager"`) and add the custom attribute `fetchpriority="high"`. Only the true above-the-fold hero image gets `fetchpriority="high"` — never more than one or two per page.
- All other below-the-fold images: Load = **Lazy**.
- Alt text is managed on the **asset** in the Assets panel — set once at upload, applied everywhere the image is used. Never set alt per element or per component instance. Override on an element only when a specific placement genuinely needs different context; mark purely decorative placements as decorative (empty alt).
- **Format:** every raster image ships as compressed **WebP** — static assets converted in the Assets panel or pre-export, and **CMS images compressed to WebP before upload** (CMS uploads are not auto-converted). Logos and icons stay SVG.
- Export images at no more than 2× their largest displayed size. No multi-thousand-pixel originals behind card thumbnails.
