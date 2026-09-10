/* ATOmate homepage — Gate 04 motion + the bespoke interactions. Requires gsap + ScrollTrigger loaded before this file.
   Convention (webflow-instructions/webflow-skills/gsap-animation.md): declarative data-scroll-animate / data-load-animate
   attributes + one init; presets fade-up / fade-down / fade-left / fade-right / scale-in / stagger; countup preset.
   Site default duration is 0.7s (Gate 04), distance 24px, ease power2.out, once. The hero arrow draw was removed 10 Sep with the arrow.
   Fails visible: the markup carries final states; this script sets the hidden start states, so without JS or under
   prefers-reduced-motion everything is simply shown. Spec: docs/Gate-04-Motion-Spec.md. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  // ---- 1. Navbar: transparent over the navy hero → .is-solid after it; mobile menu button
  var nav = document.getElementById('siteNav');
  var menuButton = nav ? nav.querySelector('.navbar_menu-button') : null;
  function navState() {
    if (!nav) return;
    // Design QA (9 Sep): go solid as soon as the page scrolls, so the bar never sits transparent over hero copy.
    var y = window.scrollY || 0;
    nav.classList.toggle('is-solid', y > 24);
  }
  window.addEventListener('scroll', navState, { passive: true });
  window.addEventListener('resize', navState);
  navState();
  function setMenu(open) {
    if (!nav || !menuButton) return;
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (menuButton) {
    menuButton.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    nav.querySelectorAll('.navbar_link, .navbar_actions .button').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuButton.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 991) setMenu(false); });
  }

  // ---- Reduced motion / no GSAP: clear any tween state; the markup is already the final state
  function showAll() {
    if (!hasGsap) return;
    document.querySelectorAll('[data-scroll-animate],[data-load-animate]').forEach(function (el) {
      gsap.set(el.dataset.animateStagger ? el.children : el, { clearProps: 'all' });
    });
  }

  if (reduce || !hasGsap) {
    showAll();
  } else {
    // ---- Preset system (gsap-animation skill §2–§4)
    function fromVars(el) {
      var type = el.dataset.animateType || 'fade-up';
      var dist = parseFloat(el.dataset.animateDistance || '24');
      var v = { opacity: 0 };
      if (type === 'fade-up') v.y = dist;
      if (type === 'fade-down') v.y = -dist;
      if (type === 'fade-left') v.x = dist;
      if (type === 'fade-right') v.x = -dist;
      if (type === 'scale-in') v.scale = 0.94;
      return v;
    }
    function toVars(el) {
      return {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: parseFloat(el.dataset.animateDuration || '0.7'),
        delay: parseFloat(el.dataset.animateDelay || '0'),
        ease: el.dataset.animateEase || 'power2.out',
        stagger: el.dataset.animateStagger ? parseFloat(el.dataset.animateStagger) : 0
      };
    }
    function targets(el) { return el.dataset.animateStagger ? el.children : el; }

    document.querySelectorAll('[data-scroll-animate]').forEach(function (el) {
      var t = targets(el);
      gsap.set(t, fromVars(el));
      var once = (el.dataset.animateOnce || 'true') !== 'false';
      gsap.to(t, Object.assign(toVars(el), {
        scrollTrigger: { trigger: el, start: el.dataset.animateStart || 'top 85%', toggleActions: once ? 'play none none none' : 'play none none reverse' }
      }));
    });
    document.querySelectorAll('[data-load-animate]').forEach(function (el) {
      var t = targets(el);
      gsap.set(t, fromVars(el));
      gsap.to(t, toVars(el));
    });

    // ---- 3. Stats count-up (2,000+ and 90%). The markup already shows the final value; it is overwritten only while animating.
    document.querySelectorAll('[data-countup]').forEach(function (el) {
      var target = parseFloat(el.dataset.countupValue);
      if (isNaN(target)) return;
      var dp = parseInt(el.dataset.countupDecimals || '0', 10);
      var suffix = el.dataset.countupSuffix || '';
      var o = { n: 0 };
      function fmt(n) { return n.toLocaleString('en-AU', { minimumFractionDigits: dp, maximumFractionDigits: dp }) + suffix; }
      gsap.to(o, {
        n: target, duration: parseFloat(el.dataset.countupDuration || '1.6'), ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onStart: function () { el.textContent = fmt(0); },
        onUpdate: function () { el.textContent = fmt(o.n); },
        onComplete: function () { el.textContent = fmt(target); }
      });
    });
  }

  // ---- 4. How ATOmate works: click a step, the panel cross-fades to that step's copy (no layout jump)
  var steps = [].slice.call(document.querySelectorAll('.home_process_step'));
  var stepTitle = document.getElementById('stepTitle');
  var stepBodies = [].slice.call(document.querySelectorAll('[data-step-body]'));
  function pickStep(k) {
    steps.forEach(function (s, idx) {
      s.classList.toggle('is-current', idx === k);
      s.classList.toggle('is-tint', idx !== k && idx % 2 === 0 && idx !== 0);
      s.setAttribute('aria-pressed', idx === k ? 'true' : 'false');
    });
    var incoming = stepBodies[k];
    var outgoing = stepBodies.filter(function (b) { return !b.hidden; })[0];
    function swap() {
      if (stepTitle) stepTitle.textContent = steps[k].querySelector('.home_process_step_title').textContent;
      stepBodies.forEach(function (b, i) { b.hidden = i !== k; });
    }
    if (reduce || !hasGsap || !outgoing || !incoming) { swap(); return; }
    gsap.to([stepTitle, outgoing], {
      opacity: 0, y: 6, duration: 0.18, ease: 'power1.in',
      onComplete: function () {
        gsap.set(outgoing, { clearProps: 'all' });
        swap();
        gsap.fromTo([stepTitle, incoming], { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, clearProps: 'all' });
      }
    });
  }
  steps.forEach(function (s, idx) { s.addEventListener('click', function () { pickStep(idx); }); });

  // ---- 5. Integration tabs (WAI-ARIA tabs: roving tabindex, arrow keys)
  var tabs = [].slice.call(document.querySelectorAll('.home_integrations_tab'));
  var panels = tabs.map(function (t) { return document.getElementById(t.dataset.tab); });
  function selectTab(i, focus) {
    tabs.forEach(function (t, j) {
      var on = j === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (panels[j]) panels[j].hidden = !on;
      if (on && panels[j] && hasGsap && !reduce) {
        var list = panels[j].querySelector('.home_integrations_list');
        if (list) gsap.fromTo(list.children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out', clearProps: 'all' });
      }
    });
    if (focus) tabs[i].focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(i, false); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); selectTab(n, true); }
    });
  });

  // ---- 6. Testimonials: rotate — the top small card moves into the featured slot, the featured quote drops to the stack.
  //         The DOM never moves; text swaps. Pending Eugene's confirmation (Gate 04 §7).
  var grid = document.getElementById('tGrid');
  if (grid) {
    var featured = grid.querySelector('.home_testimonials_featured');
    var smalls = [].slice.call(grid.querySelectorAll('.home_testimonials_card'));
    var cards = [featured].concat(smalls);
    function read(card) {
      return { q: card.querySelector('blockquote p').textContent, n: card.querySelector('.home_testimonials_name').textContent, f: card.querySelector('.home_testimonials_firm').textContent };
    }
    function write(card, d) {
      card.querySelector('blockquote p').textContent = d.q;
      card.querySelector('.home_testimonials_name').textContent = d.n;
      card.querySelector('.home_testimonials_firm').textContent = d.f;
    }
    var items = cards.map(read);
    function render() { cards.forEach(function (c, i) { write(c, items[i]); }); }
    function rotate(dir) {
      if (dir > 0) items.push(items.shift()); else items.unshift(items.pop());
      if (reduce || !hasGsap) { render(); return; }
      gsap.to(cards, {
        opacity: 0, y: 8, duration: 0.2, ease: 'power1.in', stagger: 0.04,
        onComplete: function () { render(); gsap.fromTo(cards, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06, clearProps: 'all' }); }
      });
    }
    var next = document.getElementById('tNext'), prev = document.getElementById('tPrev');
    if (next) next.addEventListener('click', function () { rotate(1); });
    if (prev) prev.addEventListener('click', function () { rotate(-1); });
  }
})();
