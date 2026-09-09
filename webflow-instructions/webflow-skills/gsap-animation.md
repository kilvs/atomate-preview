---
name: gsap-animation
description: How motion works on this site — GSAP-first animation using the data-attribute preset system, with Webflow's native Interactions with GSAP (IX3) as the designer-facing alternative and Classic Interactions (IX2) banned. Reference this skill whenever creating, editing, reviewing, or converting any animation, transition, scroll effect, hover effect, or motion arriving from Figma designs, GitHub code, or legacy interactions.
---

# GSAP Animation

Motion on this site is GSAP-first, declarative, and preset-driven. The HTML declares *what* animates and *on what trigger* via `data-*` attributes; one small init script reads the attributes and builds the tweens. No animation logic is hardcoded per element — markup stays readable and anyone can retune motion from the custom-attributes panel without touching JS.

## 1. Engine hierarchy (the law)

1. **Never Classic Interactions (IX2).** Legacy engine, weaker performance, and mixing engine versions loads multiple runtimes on the page.
2. **Default: code-driven GSAP via the data-attribute preset system** below. Portable, versionable, and fully manageable by agents through custom attributes and embeds.
3. **Native Interactions with GSAP (IX3)** is acceptable for simple, designer-maintained, component-scoped motion (its timeline, ScrollTrigger, SplitText, and staggers are GSAP under the hood). Don't mix approaches on the same element. When in doubt, use the code system.
4. **Strict conversion check:** every animation arriving from outside (Figma prototype, GitHub code, IX2 legacy) must be mapped against the preset library before any new code is written. See Section 7.

## 2. Preset library (`data-animate-type`)

`fade-in` · `fade-up` · `fade-down` · `fade-left` · `fade-right` · `scale-in` · `slide-left` · `slide-right` · `stagger` (via `data-animate-stagger` on a parent — animates direct children in sequence)

**`draw`** — an SVG stroke drawing itself. Added R56 for §7's merge connector; no trigger attribute, fires on scroll into view. See §5.5.

**`bar`** — a fill growing to its measured width. Added R47 for §6's ranked bars; no trigger attribute, fires on scroll into view. See §5.4.

**`marquee`** — continuous horizontal travel. Added R29 for §3's integrations row; the only preset with no trigger attribute, because it runs continuously rather than firing once. See §5.2.

These names are the shared motion vocabulary. A new preset is added to the init script *and documented here* only when a pattern genuinely can't be expressed with the existing set plus parameters.

## 3. Trigger attributes (name by trigger)

| Attribute | Fires when | GSAP mechanism |
|---|---|---|
| `data-animate` | Umbrella flag — element is animated (querying + reduced-motion fallback) | marker only |
| `data-scroll-animate` | Element scrolls into view | ScrollTrigger |
| `data-hover-animate` | Pointer enter / leave | mouseenter / mouseleave tween |
| `data-click-animate` | Click / tap | click tween |
| `data-load-animate` | Page load (hero, above-fold) | timeline on DOMContentLoaded |

## 4. Parameter attributes (each optional, independently overridable)

| Attribute | Values | Default |
|---|---|---|
| `data-animate-type` | any preset from Section 2 | `fade-up` |
| `data-animate-delay` | seconds | `0` |
| `data-animate-duration` | seconds | `0.6` |
| `data-animate-ease` | any GSAP ease | `power2.out` |
| `data-animate-stagger` | seconds between children | none |
| `data-animate-distance` | px of travel for directional presets | `24` |
| `data-animate-once` | `true` / `false` | `true` |
| `data-animate-start` | ScrollTrigger start | `top 85%` |

Never cram values into one concatenated attribute (`data-animation="scroll-fade-up-0.1"`) — split trigger from parameters so each is editable in the Designer panel.

## 5. Examples

Scroll-reveal a content block, children staggered: on the wrapper div set `data-scroll-animate`, `data-animate-type="fade-up"`, `data-animate-stagger="0.08"`, `data-animate-delay="0.1"` — the heading, description, and button-group inside reveal in sequence.

Hover lift on a card: `data-hover-animate` + `data-animate-type="scale-in"` + `data-animate-duration="0.25"`.
Load-in hero, sequenced: `data-load-animate` + `data-animate-type="fade-up"` + `data-animate-stagger="0.12"` on the hero content wrapper.
Image reveal: `data-scroll-animate` + `data-animate-type="scale-in"` + `data-animate-start="top 90%"` on the `_image_wrap`.

## 5.1 Standard entrance — the site default (BAW sites: Omble, ATOmate)

Every section on this site enters the same way. The motion is **fade-up**: opacity
0 to 1 with a short 24px rise. It is a fade with a lift, not a slide — directional
slides pull the eye sideways and compete with the copy, and the client brief says
the copy leads and nothing is oversold. A short rise reads as content settling
rather than as motion for its own sake.

**The convention. Do not vary these per section:**

| | Value |
|---|---|
| `data-animate-type` | `fade-up` |
| `data-animate-distance` | `24` (default) |
| `data-animate-duration` | `0.6` (default) |
| `data-animate-ease` | `power2.out` (default) |
| `data-animate-stagger` | `0.1` on the content wrapper |
| `data-animate-once` | `true` (default) — it plays once, it is not a scroll toy |

**Trigger differs by position, nothing else:**

- **Above the fold (the hero):** `data-load-animate`. A scroll trigger is wrong
  here — the element is already in view on arrival, so it either fires instantly
  anyway or never fires at all.
- **Every section below the fold:** `data-scroll-animate`, default start
  `top 85%`. Same preset, same parameters, so the page reads as one system.

**Order within a section — this is a client design note, not a preference.**
The spec says the product image must never be the first thing the eye lands on.
So the copy wrapper enters first at `delay 0`, supporting imagery follows at
roughly `delay 0.35`, and any decorative layer (background canvas, pattern, dot
field) comes last and slowest — `fade-in` at about `delay 0.55`, `duration 1.2`.
A decorative layer must never lead the entrance.

Reduced motion and fail-visible are handled by the init script below and are not
optional. Never hide content in CSS and reveal it with JS.

## 5.2 Marquee

The one preset that is not triggered — it runs continuously, so it takes no
`data-*-animate` trigger.

| Attribute | On | Meaning |
|---|---|---|
| `data-marquee` | the clipping frame | marks the marquee |
| `data-marquee-track` | the moving row inside it | what actually translates |
| `data-marquee-duration` | the frame | seconds per full cycle (default `30`) |

The init script measures one copy, then clones the track's first child **as many
times as it takes to fill the frame, plus one more to travel through**. Each
clone is hidden from assistive tech and its focusable children drop out of the
tab order. The track then moves by exactly one copy, written as `100 / copies`
percent so a font swap or a resize cannot desynchronise the distance from the
content.

**One clone is not enough, and this was a real bug.** Two copies only cover a
frame narrower than a single copy. On the Omble homepage (the worked example) a copy is 751px inside
a 1351px frame, so the track ran out partway through the cycle, a 600px hole
opened at the right, and the row snapped back to full when `repeat` restarted.
If you change the marquee, keep the fill calculation: the visible symptom of
losing it is a gap that grows and then jumps.

**Rules for using it.**

- It moves `xPercent` only, so it stays inside the transform-and-opacity rule.
- It **pauses on hover and on focus** — without the focus pause a keyboard user
  can tab into a moving row and lose their place.
- It does not run at all under `prefers-reduced-motion`, and the frame should
  fall back to a plain scrollable row so the content is still reachable.
- **WCAG 2.2.2 (Pause, Stop, Hide) applies.** Anything that auto-starts and runs
  past five seconds needs a mechanism to pause it. Hover and focus cover pointer
  and keyboard but not touch, so a visible pause control may be required before
  launch. Decide this per instance rather than assuming the hover pause is enough.
- Only reach for it when the row genuinely overflows. A marquee on a list that
  already fits is movement with no job, and this site's brief rules out
  decoration.

## 5.3 Countup

For the spec's "moving figures". Like `marquee` it has no trigger attribute of
its own; it fires on scroll into view.

| Attribute | Meaning |
|---|---|
| `data-countup` | marks the figure |
| `data-countup-value` | the number to count to, e.g. `1240` or `5.6` |
| `data-countup-decimals` | decimal places, default `0` |
| `data-countup-suffix` | text appended to every frame, e.g. `×` |
| `data-countup-duration` | seconds, default `1.4` |

**Non-negotiables, all three from the design note.**

- **The element's text is already the final value.** The script only overwrites it
  while animating. A failed script therefore leaves the real number on screen, not
  a zero and not a blank.
- **`font-variant-numeric: tabular-nums` on the figure.** Without it the digits
  change width as they climb and the whole row jitters.
- **Reduced motion skips it entirely**, which the init script's `reduce` branch
  already handles by never registering the tween.

Numbers are formatted with `toLocaleString('en-AU')`, so thousands separators
match the rest of the site.

## 5.4 Bar

For a measured quantity growing to its value: a survey proportion, a share, a
completion figure. Added R47 for §6's ranked bars. Like `countup` it has no
trigger attribute of its own and fires on scroll into view.

| Attribute | Meaning |
|---|---|
| `data-bar` | marks the FILL, not the track |
| `data-bar-duration` | seconds, default `1.1` |
| `data-bar-delay` | seconds before it starts, for staggering a set of bars |

**Non-negotiables.**

- **The fill's final width is already its inline style.** The script animates
  from `0%` to whatever that value is, so a failed script leaves a correct bar
  rather than an empty track. This is the same fail-visible rule as `countup`.
- **`width` is animated, never `scaleX`.** The fill is a pill, and scaleX would
  squash its border radius flat as it grew. This is the one place where the
  cheaper transform is the wrong choice.
- **The percentage must also exist as text.** The bar is `aria-hidden`, so
  nothing may depend on seeing it.
- **Reduced motion skips it entirely**, handled by the init script's `reduce`
  branch never registering the tween.

**A bar that distinguishes states needs 3:1 and loses the decorative exemption.**
Where several bars sit together, give them all the same colour: the moment one
bar's colour tells it apart from another, the colour carries meaning. Length is
what should encode the difference.

## 5.5 Draw

For an SVG stroke drawing itself: a connector, a rule, a path that joins two
things. Added R56 for §7's merge connector. Fires on scroll into view.

| Attribute | Meaning |
|---|---|
| `data-draw` | marks the `<path>`, `<line>` or `<polyline>` |
| `data-draw-duration` | seconds, default `0.7` |
| `data-draw-delay` | seconds before it starts, for sequencing several strokes |

**Non-negotiables.**

- **The dash is applied by the SCRIPT, never in CSS.** That is what makes it
  fail-visible: with JS off the path is simply a solid drawn line. Setting
  `stroke-dasharray` in the stylesheet would leave an invisible path whenever the
  script fails, which is the opposite of the rule every other preset follows.
- **`getTotalLength()` is wrapped in a try/catch** and the element is skipped if
  it throws or returns zero, so a `data-draw` on a non-geometry element is inert
  rather than fatal.
- **Reduced motion skips it entirely**, handled by the init script's `reduce`
  branch never registering the tween.

**Geometry warning for stretched viewBoxes.** Where the SVG uses
`preserveAspectRatio="none"` so it can span a fluid column, only horizontal and
vertical segments survive the stretch unchanged. A curve or a diagonal shears as
the column resizes. Keep such connectors orthogonal.

## 5.6 Parallax

A graphic drifts against its section as the page scrolls, so the section reads
as having depth without any design or content changing. Added R164 (6 Sep 2026)
at the client's ask, on eight graphics: the §4 product card, the §7 login
visual, the two §8 bubbles, the §9 payment-plans mock and the three §12 insight
cards. Scrubbed, not triggered: the position follows the scroll bar exactly.

| Attribute | Meaning |
|---|---|
| `data-parallax` | the rate, e.g. `0.05` to `0.11`. Travel is rate × half the viewport height each way, so 22 to 50px at 900 tall |
| `<body data-parallax="off">` | kills every instance site-wide, for review |

**Non-negotiables.**

- **It goes on the graphic, never on the animated wrapper.** The fade-up entrance
  already owns `y` on the wrapper; putting both on one element makes the two
  tweens fight and the graphic jumps. The card, mock or bubble *inside* the
  wrapper carries it.
- **Never match the body.** The body carries the on/off switch in the same
  attribute. A transform on the body re-anchors the fixed navbar to the page and
  scrolls it away (it did, for a few minutes on 6 Sep). The selector is
  `[data-parallax]:not(body)` and a non-numeric rate is skipped.
- **Off under 768** where sections stack and the drift only fights the thumb;
  **off under reduced motion**, handled by the init script's `reduce` branch.
- **Not on anything anchored to a section edge.** The §14 calendar hangs off the
  band's bottom edge by a negative margin, and a drift opens a gap under it. It
  is off the list. The hero carries no motion at all, at the client's word.
- `ease: 'none'` and `invalidateOnRefresh: true`. Any easing turns depth into
  motion, and the travel depends on the viewport height so it must recompute on
  resize.

```js
// Parallax (R164). Inside the no-reduced-motion branch of the init script.
if (document.body.dataset.parallax !== 'off' &&
    window.matchMedia('(min-width: 768px)').matches) {
  document.querySelectorAll('[data-parallax]:not(body)').forEach(function (el) {
    var rate = parseFloat(el.dataset.parallax);
    if (isNaN(rate)) return;
    var trig = el.closest('section') || el;
    gsap.fromTo(el,
      { y: function () { return  rate * window.innerHeight * 0.5; } },
      { y: function () { return -rate * window.innerHeight * 0.5; }, ease: 'none',
        scrollTrigger: { trigger: trig, start: 'top bottom', end: 'bottom top',
                         scrub: true, invalidateOnRefresh: true } });
  });
}
```

## 6. The init script (canonical implementation)

One script for the whole site, in the site footer custom code embed. First load GSAP and ScrollTrigger from the CDN (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` and `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js` — all GSAP plugins are free since the Webflow acquisition), then run the following inside a script tag:

```js
gsap.registerPlugin(ScrollTrigger);

var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fromVars(el) {
  var type = el.dataset.animateType || 'fade-up';
  var dist = parseFloat(el.dataset.animateDistance || '24');
  var v = { opacity: 0 };
  if (type === 'fade-up') v.y = dist;
  if (type === 'fade-down') v.y = -dist;
  if (type === 'fade-left') v.x = dist;
  if (type === 'fade-right') v.x = -dist;
  if (type === 'slide-left') { v.x = dist; v.opacity = 1; }
  if (type === 'slide-right') { v.x = -dist; v.opacity = 1; }
  if (type === 'scale-in') { v.scale = 0.92; }
  return v;
}

function toVars(el) {
  return {
    opacity: 1, x: 0, y: 0, scale: 1,
    duration: parseFloat(el.dataset.animateDuration || '0.6'),
    delay: parseFloat(el.dataset.animateDelay || '0'),
    ease: el.dataset.animateEase || 'power2.out',
    stagger: el.dataset.animateStagger ? parseFloat(el.dataset.animateStagger) : 0
  };
}

function targets(el) {
  if (!el.dataset.animateStagger) return el;
  return Array.prototype.filter.call(el.children, function(n){
    var cl = n.classList, i;
    for (i = 0; cl && i < cl.length; i++) {
      if (cl[i].indexOf('spacer-') === 0) return false;
    }
    return true;
  });
}

if (reduce) {
  document.querySelectorAll('[data-animate], [data-scroll-animate], [data-load-animate], [data-hover-animate], [data-click-animate]')
    .forEach(function (el) { gsap.set(el, { clearProps: 'all' }); });
} else {
  document.querySelectorAll('[data-scroll-animate]').forEach(function (el) {
    var t = targets(el);
    gsap.set(t, fromVars(el));
    var once = (el.dataset.animateOnce || 'true') !== 'false';
    gsap.to(t, Object.assign(toVars(el), {
      scrollTrigger: {
        trigger: el,
        start: el.dataset.animateStart || 'top 85%',
        toggleActions: once ? 'play none none none' : 'play none none reverse'
      }
    }));
  });

  document.querySelectorAll('[data-load-animate]').forEach(function (el) {
    var t = targets(el);
    gsap.set(t, fromVars(el));
    gsap.to(t, toVars(el));
  });

  document.querySelectorAll('[data-hover-animate]').forEach(function (el) {
    el.addEventListener('mouseenter', function () { gsap.to(el, Object.assign(toVars(el), { scale: 1.03 })); });
    el.addEventListener('mouseleave', function () { gsap.to(el, Object.assign(toVars(el), { scale: 1 })); });
  });

  document.querySelectorAll('[data-click-animate]').forEach(function (el) {
    el.addEventListener('click', function () {
      gsap.fromTo(el, { scale: 0.96 }, Object.assign(toVars(el), { scale: 1 }));
    });
  });

  /* countup - the spec's "moving figures". New pattern, so it joins the preset
     library rather than being written per section (gsap-animation section 7).
     The final value is ALREADY the element's text, so a failed script leaves the
     real number on screen rather than a zero or a blank. */
  document.querySelectorAll('[data-countup]').forEach(function(el){
    var target = parseFloat(el.dataset.countupValue);
    if (isNaN(target)) return;
    var dp = parseInt(el.dataset.countupDecimals || '0', 10);
    var suffix = el.dataset.countupSuffix || '';
    var obj = { n: 0 };
    gsap.to(obj, {
      n: target,
      duration: parseFloat(el.dataset.countupDuration || '1.4'),
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      onUpdate: function () {
        el.textContent = obj.n.toLocaleString('en-AU', {
          minimumFractionDigits: dp, maximumFractionDigits: dp }) + suffix;
      },
      onComplete: function () {
        el.textContent = target.toLocaleString('en-AU', {
          minimumFractionDigits: dp, maximumFractionDigits: dp }) + suffix;
      }
    });
  });

  /* bar - a measured quantity growing to its value. New pattern, so it joins
     the preset library rather than being written per section (gsap-animation
     section 7). The final width is ALREADY the element's inline style, so a
     failed script leaves a correct bar rather than an empty track. WIDTH is
     animated, not scaleX: the fill is a pill and scaleX would squash its
     radius as it grew. */
  document.querySelectorAll('[data-bar]').forEach(function(el){
    var to = el.style.width || window.getComputedStyle(el).width;
    gsap.fromTo(el, { width: '0%' }, {
      width: to,
      duration: parseFloat(el.dataset.barDuration || '1.1'),
      delay: parseFloat(el.dataset.barDelay || '0'),
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' }
    });
  });

  /* draw - an SVG stroke drawing itself. New pattern, so it joins the preset
     library rather than being written per section (gsap-animation section 7).
     FAIL-VISIBLE BY CONSTRUCTION: the dash is applied by THIS SCRIPT, never in
     CSS, so with JS off the path is simply a solid drawn line. Setting the dash
     in the stylesheet would leave an invisible path when the script fails. */
  document.querySelectorAll('[data-draw]').forEach(function(el){
    var len;
    try { len = el.getTotalLength(); } catch (e) { return; }
    if (!len) return;
    gsap.fromTo(el,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0,
        duration: parseFloat(el.dataset.drawDuration || '0.7'),
        delay: parseFloat(el.dataset.drawDelay || '0'),
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' }
      });
  });

  document.querySelectorAll('[data-marquee]').forEach(function(el){
    var track = el.querySelector('[data-marquee-track]');
    if (!track || !track.firstElementChild) return;
    var original = track.firstElementChild;
    var dur = parseFloat(el.dataset.marqueeDuration || '30');
    var tween = null;

    /* ONE CLONE IS NOT ENOUGH, and that was the snap. Two copies only fill a
       frame that is narrower than one copy. On the homepage a copy is 751px
       inside a 1351px frame, so by the end of the cycle the track had run out
       and a 600px hole stood open at the right, then jumped back to a full row
       when repeat restarted. Fill the frame first, then add one more copy to
       travel through. */
    function build() {
      if (tween) { tween.kill(); tween = null; }
      gsap.set(track, { xPercent: 0 });
      var old = track.querySelectorAll('[data-marquee-clone]');
      for (var i = 0; i < old.length; i++) { old[i].parentNode.removeChild(old[i]); }

      var copyW = original.getBoundingClientRect().width;
      if (!copyW) return;
      var copies = Math.ceil(el.clientWidth / copyW) + 1;
      for (var c = 0; c < copies; c++) {
        var clone = original.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('data-marquee-clone', '');
        clone.querySelectorAll('[id]').forEach(function(n){ n.removeAttribute('id'); });
        clone.querySelectorAll('a,button').forEach(function(n){ n.setAttribute('tabindex','-1'); });
        track.appendChild(clone);
      }
      /* Move by exactly ONE copy, written as a share of the whole track rather
         than a pixel figure, so a font swap or a resize cannot desynchronise
         the distance from the content. Duration stays per-copy, so the speed
         does not change with the number of copies. */
      var total = copies + 1;
      tween = gsap.to(track, { xPercent: -(100 / total), duration: dur,
                               ease: 'none', repeat: -1 });
    }

    build();
    var rt;
    window.addEventListener('resize', function(){
      clearTimeout(rt); rt = setTimeout(build, 200);
    });

    el.addEventListener('mouseenter', function(){ if (tween) tween.pause(); });
    el.addEventListener('mouseleave', function(){ if (tween) tween.play(); });
    el.addEventListener('focusin',   function(){ if (tween) tween.pause(); });
    el.addEventListener('focusout',  function(){ if (tween) tween.play(); });
  });
}
```


The three loops below `data-click-animate` (`countup`, `bar`, `marquee`) are
copied verbatim from the reference implementation. They were previously missing
from this listing while being present in the built pages, so the doc and the
code had drifted; keep them in sync when either changes.

## 7. Converting animations (Figma, GitHub, IX2) — the strict workflow

1. **Inventory** every animation in the source: element, trigger, motion, timing.
2. **Map to the nearest preset.** Figma prototype language translates directly: dissolve → `fade-in`; move-in from below → `fade-up`; smart-animate scale → `scale-in`; sequential card reveals → parent `data-animate-stagger`. GSAP code from GitHub: identify the tween's `from`/`to` and match it to a preset + parameters.
3. **Tune with parameters,** never with new code. Delay, duration, ease, distance, and start cover most differences.
4. **Only extend the library** when a pattern is genuinely new (e.g. a marquee, a pinned scroll sequence). Add the new type to the init script and document it in Section 2 — it becomes reusable from day one.
5. **Check native convertibility:** simple load/click/hover/scroll-reveal motion on transforms and opacity can alternatively be authored as native Interactions with GSAP (IX3) when a designer will maintain it. Complex behaviour — pinning, snapping, lifecycle callbacks, custom scrollers, runtime logic — stays in code.
6. **Flag what doesn't map.** Never silently drop or approximate motion from the source; list unmapped animations for the site owner.

## 8. Reduced motion and fail-visible (mandatory)

- Honour `prefers-reduced-motion: reduce`: skip entrance/scroll motion entirely and leave content in its final visible state (the init script clears props instead of animating).
- **Fail visible.** Never author markup as hidden-by-CSS-then-revealed-by-JS. The init script sets the hidden start state, so a failed script leaves content readable, not blank.

## 9. Performance

- Animate transforms and opacity only — never width/height/top/left or other layout properties.
- Entrance motion: 0.4–0.7s durations, soft easing (`power2.out`). Long or bouncy entrances feel sluggish on real content.
- One init script for the whole site; no per-page copies drifting apart.
