# Webflow animation spec — ATOmate homepage

For the Webflow build. Every animation on this page is **declarative**: the markup carries
`data-*` attributes and one small init reads them. Nothing is hand-tweened per element, so each
row below maps to a single Webflow interaction with the same four or five numbers.

Read alongside `webflow-instructions/webflow-skills/gsap-animation.md` (the house motion rules)
and `docs/Gate-04-Motion-Spec.md` (why the motion is this quiet).

---

## 1. The whole system in one paragraph

Content enters **once**, as a **fade-up**: opacity 0 to 1 with a 24px rise, 0.7s, `power2.out`.
Above the fold it fires on load; below the fold it fires when the element's top reaches 85 per
cent of the viewport height. Where a block has several children, the children stagger rather
than the block moving as one slab. There is no parallax, no pinning, no scrub, no looping
ambient motion, and nothing scales or slides sideways.

## 2. Defaults — apply unless a row overrides them

| Property | Value | GSAP | Webflow field |
|---|---|---|---|
| Motion | fade-up | `opacity: 0 -> 1`, `y: 24 -> 0` | Opacity + Move (Y) |
| Duration | 0.7s | `duration: 0.7` | Duration |
| Easing | power2.out | `ease: 'power2.out'` | Ease out (power2) |
| Delay | 0s | `delay: 0` | Delay |
| Start | element top at 85 per cent of viewport | `start: 'top 85%'` | Start offset |
| Repeat | once | `toggleActions: 'play none none none'` | Play once, do not reverse on scroll out |
| Distance | 24px | `y: 24` | Move Y 24px |

**Staggered blocks animate their direct children**, not the wrapper: in code it is `stagger: n`
on the tween; in Webflow it is a stagger applied to the children of the targeted element.

---

## 3. Every animated element

### 1 Hero

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_hero_content` | On load | fade-up | 0.12 | 0.2s |

### 1b Trust bar

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_trust_content` | Scroll into view | fade-up | 0.1 | 0s |

### 2 Integrations

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_integrations_list` | Scroll into view | fade-up | 0.05 | 0s |

### 3 Comparison

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_comparison_grid` | Scroll into view | fade-up | 0.15 | 0s |

### 4 How ATOmate works

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_process_flow` | Scroll into view | fade-up | 0.08 | 0s |

### 5 Overnight

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_overnight_content` | Scroll into view | fade-up | 0.15 | 0s |

### 6 Review

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_review_list` | Scroll into view | fade-up | 0.1 | 0s |

### 7 Filing

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_filing_list` | Scroll into view | fade-up | 0.1 | 0s |

### 8 PAYG

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_payg_list` | Scroll into view | fade-up | 0.1 | 0s |

### 9 Better informed

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_informed_row-block` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_informed_row-block` | Scroll into view | fade-up | 0.1 | 0s |

### 10 Messaging

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_messaging_split` | Scroll into view | fade-up | 0.15 | 0s |

### 10b Channels

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_channels_content` | Scroll into view | fade-up | 0.1 | 0s |

### 11 Security

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.component_section-header` | Scroll into view | fade-up | 0.1 | 0s |
| `.home_security_credentials` | Scroll into view | fade-up | 0.08 | 0s |
| `.home_security_list` | Scroll into view | fade-up | 0.1 | 0s |

### 12 Testimonials

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_testimonials_grid` | Scroll into view | fade-up | 0.1 | 0s |

### 13 Closing CTA

| Element (class) | Trigger | Preset | Stagger | Delay |
|---|---|---|---|---|
| `.home_cta_content` | Scroll into view | fade-up | 0.1 | 0s |


---

## 4. Bespoke interactions — behaviour, not entrance motion

| Interaction | Trigger | What happens |
|---|---|---|
| Navbar solid | Page scrolled past 24px | `.navbar_component` gains `is-solid`: the shell fills white at 82 per cent, takes a hairline, pill radius and a blur |
| Steps reveal | Click on `.home_process_step_button` | The clicked node takes `is-current`; its `.home_process_detail_item` shows and the others hide; the incoming line fades up 6px over 0.3s |
| Process pulse | Hover or keyboard focus on `.home_process_step_button`, and always on the `is-current` node | `.home_process_step_halo` is a 2px ring in the node's colour (`--step-ring`) that scales 1 → 1.55 while fading .7 → 0, 2.4s, looping. Idle nodes are still. The current node also wears a solid ring: a 5px white gap, then 3px of its colour |
| Integration tabs | Click on a `[role="tab"]` | Panel swap; incoming logos fade up 10px with a 0.04s stagger |
| Testimonial rotation | Click on `#tNext` / `#tPrev` | The queue rotates; cards fade out 8px over 0.2s, then in from -8px over 0.35s with a 0.06s stagger |

**Count-ups.** `[data-countup]` on the trust bar's three figures counts to
`data-countup-value` and appends `data-countup-suffix`: 1.4s, once, on scroll into view. The
final value is already in the markup, so a failed script leaves the real number on screen.

---

## 5. Rules that must survive the port

1. **Fail visible.** Nothing is hidden in CSS and revealed by script. The init sets the start
   state, so if the script never runs the page is simply readable. Do not author the Webflow
   version as "hidden, then reveal" without an initial-state fallback.
2. **Reduced motion.** Under `prefers-reduced-motion: reduce` everything shows in its final
   state, counters sit at their final values and the process pulse stops. The Webflow build
   needs the same guard.
3. **Once, not on every pass.** Entrances play once; nothing replays when scrolling back up.
4. **One system.** A new section gets `data-scroll-animate` with the defaults above. Do not
   invent a new entrance for one block.
5. **No ambient motion.** The only looping animation on the page is the process pulse, which
   runs only on the hovered and current nodes, is CSS, and stops under reduced motion.

---

## 6. Rebuilding this in Webflow's GSAP interactions panel

Per element: pick the trigger (page load for the hero, scroll into view for everything else),
add one animation step, set opacity 0 to 100 and Move Y 24px to 0, duration 0.7s, ease
power2.out, and the start offset so it begins when the element's top reaches 85 per cent of the
viewport. For staggered rows, target the children and take the stagger value from the table.

Panel field names may differ slightly from the GSAP names above; the numbers are the contract.
If the panel cannot express a value, keep that one element on the data-attribute system rather
than approximating it.
