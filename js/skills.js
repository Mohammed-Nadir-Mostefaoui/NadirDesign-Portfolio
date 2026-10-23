/* ============================================================
   SKILLS SECTION — staggered scroll-in reveal + cursor spotlight
   ============================================================ */
(function () {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) return;

  /* Staggered entrance: 2-column grid, so pair up delays by row. */
  cards.forEach((card, i) => {
    const delay = Math.floor(i / 2) * 90 + (i % 2) * 60;
    card.style.setProperty('--reveal-delay', delay + 'ms');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  cards.forEach((card) => observer.observe(card));

  /* The cursor spotlight used to live here. It is now one shared
     implementation in js/field.js, which lights every card type
     (.work-panels, .svc-card, .skill-card) from one place. */
})();
