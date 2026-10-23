/* ============================================================
   experience.js — Accordion expand/collapse for the Experience section
   ============================================================ */

(function () {
  'use strict';

  var accItems = document.querySelectorAll('.expa-item');

  accItems.forEach(function (item) {
    var trigger = item.querySelector('.expa-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('expa-item--open');

      /* Close all others */
      accItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('expa-item--open');
          var t = other.querySelector('.expa-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      /* Toggle clicked item */
      item.classList.toggle('expa-item--open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

})();

/* ============================================================
   The dates — one source of truth
   Each .expa-item carries its own span in the markup:
     data-from="YYYY-MM"   data-to="YYYY-MM" or "now"
   Both the live durations and the shared timeline below read those
   attributes and nothing else.

   They used to live in a hand-kept list here (ONGOING_ROLES) as well
   as in the copy, and the two drifted: when Datamaster's dates were
   changed to end in Dec 2025, the list still had it as ongoing and
   kept overwriting its duration with a count running to today. A row
   is now "ongoing" only because its own markup says data-to="now".
   ============================================================ */
(function () {
  'use strict';

  var parse = function (v) {
    if (!v || v === 'now') return null;
    var p = v.split('-');
    return { y: +p[0], m: +p[1] };
  };

  window.__xpRows = function () {
    return Array.prototype.map.call(document.querySelectorAll('.expa-item[data-from]'), function (item) {
      return {
        el:   item,
        id:   item.id.replace(/^expa-/, ''),
        from: parse(item.getAttribute('data-from')),
        to:   parse(item.getAttribute('data-to')),
        ongoing: item.getAttribute('data-to') === 'now'
      };
    });
  };
})();

/* ============================================================
   Live "X yrs Y mos" durations for roles still in progress.
   The i18n LOCALES entries (experience.<id>.duration) stay as static
   text purely as a no-JS/first-paint fallback — this recomputes the
   real figure from each ongoing row's data-from on every load and on
   every language switch (via i18n.js's "langchange" event).
   Closed roles keep their fixed, authored text.
   ============================================================ */
(function () {
  'use strict';

  function monthsElapsed(startYear, startMonth) {
    var now = new Date();
    var total = (now.getFullYear() - startYear) * 12 + ((now.getMonth() + 1) - startMonth) + 1;
    return total < 1 ? 1 : total;
  }

  function arYearWord(n) {
    if (n === 1) return 'سنة';
    if (n === 2) return 'سنتان';
    if (n >= 3 && n <= 10) return n + ' سنوات';
    return n + ' سنة';
  }
  function arMonthWord(n) {
    if (n === 1) return 'شهر واحد';
    if (n === 2) return 'شهران';
    if (n >= 3 && n <= 10) return n + ' أشهر';
    return n + ' شهرًا';
  }

  function formatDuration(totalMonths, lang) {
    var years  = Math.floor(totalMonths / 12);
    var months = totalMonths % 12;

    if (lang === 'fr') {
      var yPartFr = years  > 0 ? years + ' ' + (years === 1 ? 'an' : 'ans') : '';
      var mPartFr = months > 0 ? months + ' mois' : '';
      return [yPartFr, mPartFr].filter(Boolean).join(' ');
    }
    if (lang === 'ar') {
      var yPartAr = years  > 0 ? arYearWord(years)  : '';
      var mPartAr = months > 0 ? arMonthWord(months) : '';
      if (yPartAr && mPartAr) return yPartAr + ' و' + mPartAr;
      return yPartAr || mPartAr;
    }
    /* default: en */
    var yPartEn = years  > 0 ? years + ' ' + (years === 1 ? 'yr' : 'yrs') : '';
    var mPartEn = months > 0 ? months + ' ' + (months === 1 ? 'mo' : 'mos') : '';
    return [yPartEn, mPartEn].filter(Boolean).join(' ');
  }

  function updateDurations() {
    var lang = (window.i18n && window.i18n.current) ? window.i18n.current() : (document.documentElement.getAttribute('lang') || 'en');
    window.__xpRows().forEach(function (row) {
      if (!row.ongoing || !row.from) return;
      var el = document.querySelector('[data-i18n="experience.' + row.id + '.duration"]');
      if (!el) return;
      el.textContent = formatDuration(monthsElapsed(row.from.y, row.from.m), lang);
    });
  }

  document.addEventListener('DOMContentLoaded', updateDurations);
  document.addEventListener('langchange', updateDurations);
})();

/* ============================================================
   The shared timeline
   Every row gets a thin bar on one axis, from the earliest start on
   the list to the current month, so the shape of the career reads at
   a glance: what ran when, and what overlapped. Rows still running
   reach the "now" edge and end in a dot.

   The track starts where each row's company name starts and ends
   where its chevron ends, measured rather than assumed, so it stays
   aligned whatever the number, tile or padding widths become at any
   breakpoint, and mirrors for Arabic. An axis of years sits on top
   of the list with the same insets.

   Decorative: every date is already in the text. aria-hidden.
   ============================================================ */
(function () {
  'use strict';

  var list = document.querySelector('.expa-list');
  if (!list || !window.__xpRows) return;
  var rows = window.__xpRows().filter(function (r) { return r.from; });
  if (!rows.length) return;

  var idx = function (d) { return d.y * 12 + (d.m - 1); };
  var today = new Date();
  var nowIdx = today.getFullYear() * 12 + today.getMonth();
  var startIdx = Math.min.apply(null, rows.map(function (r) { return idx(r.from); }));
  var total = nowIdx - startIdx + 1;

  /* One bar per row, inside its trigger. */
  rows.forEach(function (row, i) {
    var trigger = row.el.querySelector('.expa-trigger');
    if (!trigger) return;
    var endIdx = row.to ? idx(row.to) : nowIdx;
    var tl = document.createElement('span');
    tl.className = 'xp-tl';
    tl.setAttribute('aria-hidden', 'true');
    tl.style.setProperty('--xp-delay', (i * 90) + 'ms');
    var bar = document.createElement('span');
    bar.className = 'xp-tl-bar' + (row.ongoing ? ' is-ongoing' : '');
    bar.style.setProperty('--from', ((idx(row.from) - startIdx) / total).toFixed(4));
    bar.style.setProperty('--span', ((endIdx - idx(row.from) + 1) / total).toFixed(4));
    tl.appendChild(bar);
    trigger.appendChild(tl);
  });

  /* The axis: the first year at the start, each January after it,
     and "now" at the end. A January too close to "now" is dropped
     rather than allowed to collide with it. */
  var axis = document.createElement('div');
  axis.className = 'xp-axis';
  axis.setAttribute('aria-hidden', 'true');
  var first = Math.floor(startIdx / 12);
  var label = function (text, at, cls) {
    var s = document.createElement('span');
    s.textContent = text;
    if (cls) s.className = cls;
    if (at !== null) s.style.setProperty('--at', at.toFixed(4));
    axis.appendChild(s);
  };
  label(String(first), 0, '');
  for (var y = first + 1; y * 12 <= nowIdx; y++) {
    var at = (y * 12 - startIdx) / total;
    if (at < 0.9) label(String(y), at, '');
  }
  var nowLabel = document.createElement('span');
  nowLabel.className = 'xp-axis-now';
  nowLabel.setAttribute('data-i18n', 'experience.now');
  nowLabel.textContent = (window.i18n && window.i18n.t) ? window.i18n.t('experience.now') : 'now';
  axis.appendChild(nowLabel);
  list.insertBefore(axis, list.firstChild);

  /* Measure where the company name starts and where the row's end
     padding begins, relative to the row's trigger. */
  var measure = function () {
    var item = rows[0].el;
    var trigger = item.querySelector('.expa-trigger');
    var meta = item.querySelector('.expa-meta');
    if (!trigger || !meta) return;
    var rtl = getComputedStyle(item).direction === 'rtl';
    var tr = trigger.getBoundingClientRect();
    var mr = meta.getBoundingClientRect();
    var lead = rtl ? tr.right - mr.right : mr.left - tr.left;
    var tail = parseFloat(getComputedStyle(trigger).paddingInlineEnd) || 24;
    list.style.setProperty('--xp-lead', Math.round(lead) + 'px');
    list.style.setProperty('--xp-tail', Math.round(tail) + 'px');
  };

  var timer;
  var later = function () { clearTimeout(timer); timer = setTimeout(measure, 120); };
  measure();
  document.addEventListener('DOMContentLoaded', measure);
  window.addEventListener('load', measure);
  window.addEventListener('resize', later, { passive: true });
  document.addEventListener('langchange', function () {
    requestAnimationFrame(measure);
    if (window.i18n && window.i18n.t) nowLabel.textContent = window.i18n.t('experience.now');
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
})();
