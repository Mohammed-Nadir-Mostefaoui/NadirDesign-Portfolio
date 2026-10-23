/* ============================================================
   THE LIGHT TABLE — card behaviour and the band annotations
   Landing page only (index.html). Three independent parts; any
   one of them failing leaves the others and the page untouched.

     1. Beam       one cursor-tracked light shared by every card
                   type (replaces the copy that used to live in
                   js/skills.js)
     2. Selection  a Figma-style selection on the main cards:
                   corner handles and the card's real size
     3. Draw       the four band annotations draw themselves in
                   from the reading side when their section
                   scrolls into view, once
   ============================================================ */
(function () {
  'use strict';

  var finePointer  = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Beam ──────────────────────────────────────────────
     Fine pointers only. On touch there is no cursor to follow,
     and the listener would just cost work on every tap. */
  if (finePointer) {
    var lit = document.querySelectorAll('.work-panels, .svc-card, .skill-card');
    Array.prototype.forEach.call(lit, function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--lt-x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--lt-y', (e.clientY - r.top)  + 'px');
      });
    });
  }

  /* ── 2. Selection ─────────────────────────────────────────
     Built on every device but only ever shown by CSS: on hover
     for fine pointers, and on keyboard focus for anyone. The
     size is the card's real rendered size, kept current by a
     ResizeObserver, so on the work panel it changes as the tabs
     change — the way a selection does in Figma. */
  var selectable = document.querySelectorAll('.work-panels, .svc-card');

  var writeSize = function (card, out) {
    out.textContent = Math.round(card.offsetWidth) + ' × ' + Math.round(card.offsetHeight);
  };

  var sizes = ('ResizeObserver' in window) ? new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var out = entry.target.querySelector(':scope > .lt-sel > b');
      if (out) writeSize(entry.target, out);
    });
  }) : null;

  Array.prototype.forEach.call(selectable, function (card) {
    var sel = document.createElement('span');
    sel.className = 'lt-sel';
    sel.setAttribute('aria-hidden', 'true');
    sel.innerHTML = '<i></i><i></i><i></i><i></i><b></b>';
    card.appendChild(sel);
    writeSize(card, sel.lastChild);
    if (sizes) sizes.observe(card);
  });

  /* ── 3. Draw ──────────────────────────────────────────────
     The hidden starting state only exists while <html> carries
     .pf-draw-ready, which is only added here, only when motion
     is allowed and only when IntersectionObserver exists. So a
     script error, an old browser or reduced motion all leave the
     annotations simply drawn — nothing can get stuck hidden.
     (The same trap the hero entrance hit in August.) */
  var bands = document.querySelectorAll('.pf-frag, .xp-tl');
  if (bands.length && !reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('pf-draw-ready');

    var drawer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawn');
        drawer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -18% 0px' });

    Array.prototype.forEach.call(bands, function (band) { drawer.observe(band); });
  }
})();
