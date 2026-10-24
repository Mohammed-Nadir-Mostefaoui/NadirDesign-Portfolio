/* ============================================================
   THE CURSOR — a collaborator in the design file
   Shared by every page.

   The pointer itself is drawn by the operating system (a custom
   arrow set in css/style.css), so it can never lag behind the
   mouse. This file only adds the name tag that rides beside it,
   the way a collaborator's cursor carries a tag in Figma, moved
   with a transform on every pointer move, 1:1: no spring, no
   easing, nothing that trails.

   WHAT THE TAG SAYS
   One rule decides every message: the tag says something the
   element does not already say. Where a click goes, what it will
   do, what an icon means. It never repeats a visible label, and
   it never promises anything a click will not do.

   The rules below are checked in order against whatever is under
   the pointer, and the first match wins. Copy lives in js/i18n.js
   under `cursor`, so it follows the language like everything else.

   ON THE CASE STUDIES
   The case studies are read rather than clicked, so there the tag
   talks about what is being read, and never about how fast. A
   reading-time countdown was tried and removed (24 Oct): it rushed
   the reader. Over the text it simply says "You", except over a
   technical term marked by js/glossary.js (dotted underline):
   there the tag opens into a short note, the term in bold and a
   plain one-line definition under it, for readers who are not
   designers.
     - every screenshot is a numbered frame of the whole story
       ("Frame 3 of 18"), and the before and after screens point
       at each other;
     - a colour swatch names the exact value a click copies, then
       confirms it is in the clipboard;
     - the closing quote, the next case studies and the Notion link
       each get one line of their own.
   ============================================================ */
(function () {
  'use strict';

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var tag = document.createElement('div');
  tag.id = 'cursor-tag';
  tag.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tag);

  var t = function (key, fallback) {
    var v = window.i18n && window.i18n.t ? window.i18n.t(key) : null;
    return (v && v !== key) ? v : fallback;
  };

  /* Each language button speaks its own language whatever the page
     is currently in: someone who reads only French should be able to
     find the French button from the page in Arabic. Deliberately not
     translated, which is why these live here and not in i18n.js. */
  var SELF_NAMED = { ar: 'اقرأ بالعربية', en: 'Read in English', fr: 'Lire en français' };

  /* Cards whose click has one obvious destination. */
  var ACTION_CARDS = '.work-panels, .svc-card';
  var ctaOf = function (card) {
    return card.classList.contains('work-panels')
      ? card.querySelector('.work-panel.is-active .work-panel-cta')
      : card.querySelector('.svc-cta');
  };
  var ctaText = function (cta) {
    var s = cta.textContent.replace(/\s+/g, ' ').trim();
    return cta.target === '_blank' ? s + ' ↗' : s;
  };

  var isDark = function () { return document.documentElement.getAttribute('data-theme') === 'dark'; };

  /* {n}-style placeholders, and an isolate around anything Latin
     (a hex value) so Arabic never reorders "#26A4DA" into "26A4DA#". */
  var fill = function (s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); };
  var iso  = function (s) { return '\u2066' + s + '\u2069'; };

  /* ── Case studies ─────────────────────────────────────────── */
  var IS_CASE = !!document.querySelector('.cs-hero');

  /* Every screenshot is a frame of one story, numbered in page
     order. Placeholders that never got an image are left out. */
  var frames = function () {
    return Array.prototype.slice.call(document.querySelectorAll('.cs-zoom:not(.is-empty)'));
  };
  var frameTag = function (z) {
    var gal = z.closest('.cs-gallery');
    var lab = gal && gal.previousElementSibling;
    var k = lab && lab.classList.contains('cs-gallery-label') ? (lab.getAttribute('data-i18n') || '') : '';
    if (/before_label$/.test(k)) return t('cursor.cs_before', 'The redesign is just below');
    if (/after_label$/.test(k))  return t('cursor.cs_after', 'The old version is just above');
    var list = frames(), i = list.indexOf(z);
    if (i < 0) return null;
    return fill(t('cursor.cs_frame', 'Frame {i} of {n}'), { i: i + 1, n: list.length });
  };

  var RULES = [
    { sel: '.cs-lightbox.is-open', key: 'cursor.cs_close' },
    { sel: '.gl-term',             text: function (el) {
        return window.__glossary ? window.__glossary(el.getAttribute('data-gl')) : null; } },
    { sel: '[data-lang-btn]',      text: function (el) { return SELF_NAMED[el.getAttribute('data-lang-btn')]; } },
    { sel: '[data-theme-toggle]',  text: function () { return isDark() ? t('cursor.lights_on', 'Lights on') : t('cursor.lights_off', 'Lights off'); } },
    { sel: '#back-to-top',         key: 'cursor.top' },
    { sel: '[data-cv-open]',       key: 'cursor.cv' },
    { sel: '.expa-trigger',        text: function (el) {
        return el.getAttribute('aria-expanded') === 'true'
          ? t('cursor.details_hide', 'Hide details') : t('cursor.details_show', 'Show details'); } },
    { sel: '.work-tab',            key: 'cursor.preview' },
    { sel: '.hero-portrait-wrap',  key: 'cursor.me' },
    { sel: '.hero-stats .stat-item:nth-child(2)', key: 'cursor.regions' },
    { sel: 'a[href^="mailto:"]',   key: 'cursor.email' },
    { sel: 'a[href*="wa.me/"]',    key: 'cursor.whatsapp' },
    { sel: '#footer-submit',       key: 'cursor.send' },
    { sel: ACTION_CARDS,           text: function (card) { var c = ctaOf(card); return c ? ctaText(c) : null; } },
    { sel: '.cs-swatch[data-hex]', text: function (el) {
        return el.classList.contains('is-copied')
          ? t('cursor.cs_copied', 'In your clipboard')
          : fill(t('cursor.cs_copy', 'Copy {hex}'), { hex: iso(el.getAttribute('data-hex')) }); } },
    { sel: '.cs-zoom',             text: frameTag },
    { sel: '.cs-quote',            key: 'cursor.cs_quote' },
    { sel: '.cs-more-card:not([target="_blank"])', key: 'cursor.cs_next' },
    { sel: 'a[href*="notion.site"]', key: 'cursor.notion' },
    { sel: 'a[target="_blank"]',   key: 'cursor.new_tab' }
  ];

  var idle = function () { return t('cursor.you', 'You'); };

  var messageFor = function (target) {
    if (!target) return idle();
    for (var i = 0; i < RULES.length; i++) {
      var el = target.closest(RULES[i].sel);
      if (!el) continue;
      var msg = RULES[i].text ? RULES[i].text(el) : t(RULES[i].key, null);
      if (msg) return msg;
    }
    return idle();
  };

  var px = -100, py = -100;
  var w = 0, h = 0;

  /* A message is either a short line (a string) or a note: an
     object { t, d } from the glossary, set as a bold term over its
     definition. A note reads in the page's direction; a short line
     keeps finding its own. */
  var shown = null;
  var setText = function (msg) {
    var note = !!msg && typeof msg === 'object';
    var key = note ? msg.t + '\n' + msg.d : msg;
    if (shown === key) return;
    shown = key;
    tag.classList.toggle('is-note', note);
    if (note) {
      tag.textContent = '';
      var b = document.createElement('b');
      b.textContent = msg.t;
      var d = document.createElement('span');
      d.textContent = msg.d;
      tag.appendChild(b);
      tag.appendChild(d);
      tag.dir = document.documentElement.dir || 'ltr';
    } else {
      tag.textContent = msg;
      tag.removeAttribute('dir');
    }
    w = tag.offsetWidth;
    h = tag.offsetHeight;
  };

  /* Bottom-right of the arrow; near the right or bottom edge of the
     window it flips, and the sharp corner moves with it so it always
     points back at the arrow tip. Physical, not logical: the OS arrow
     points up-left in every language, so its tag does not mirror. */
  var place = function () {
    var vw = document.documentElement.clientWidth;
    var vh = window.innerHeight;
    var flipX = px + 14 + w > vw - 8;
    var flipY = py + 18 + h > vh - 8;
    var x = flipX ? px - w - 4 : px + 14;
    var y = flipY ? py - h - 4 : py + 18;
    tag.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    tag.classList.toggle('is-flip-x', flipX);
    tag.classList.toggle('is-flip-y', flipY);
  };

  var update = function (target) {
    /* No tag next to a text caret, while typing or selecting. The
       footer's copy-email button has its own tooltip; stay out of
       its way rather than talk over it. */
    if (target && target.closest('input, textarea, select, [contenteditable="true"], .fc-copy')) {
      tag.classList.remove('is-on');
      return;
    }
    setText(messageFor(target));
    place();
    tag.classList.add('is-on');
  };

  document.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX;
    py = e.clientY;
    update(e.target instanceof Element ? e.target : null);
  }, { passive: true });

  /* Several messages change because of the click itself: details
     open, the lights go off, a different tab becomes the preview,
     the language changes. Re-read what is under the pointer once the
     page has reacted, so the tag is right before the mouse moves. */
  var reread = function () {
    requestAnimationFrame(function () {
      var el = document.elementFromPoint(px, py);
      if (el && tag.classList.contains('is-on')) update(el);
    });
  };
  document.addEventListener('click', reread);
  document.addEventListener('langchange', reread);

  /* On a case study the tag changes as you scroll (which frame is
     now under the pointer), so scrolling re-reads it too, at most
     once a frame. */
  if (IS_CASE) {
    var queued = false;
    window.addEventListener('scroll', function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; reread(); });
    }, { passive: true });
    /* The clipboard answers a moment after the click, and the swatch
       goes back to its hex 1.3s later: read the tag at both points. */
    document.addEventListener('click', function (e) {
      if (!(e.target instanceof Element) || !e.target.closest('.cs-swatch')) return;
      setTimeout(reread, 120);
      setTimeout(reread, 1400);
    });
  }

  var hide = function () { tag.classList.remove('is-on'); };
  document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) hide(); });
  window.addEventListener('blur', hide);

  /* A click anywhere on an action card does what its tag says. Left
     alone: clicks on the card's own links and buttons, on the tabs,
     on anything editable, and any click that ends a text selection.
     Keyboard users are unaffected: the real button is still the focus
     target. */
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var target = e.target instanceof Element ? e.target : null;
    if (!target) return;
    var card = target.closest(ACTION_CARDS);
    if (!card) return;
    if (target.closest('a, button, input, textarea, select, label, [role="tab"], [role="button"]')) return;
    var sel = window.getSelection && window.getSelection();
    if (sel && String(sel).trim().length) return;
    var cta = ctaOf(card);
    if (cta) cta.click();
  });
})();
