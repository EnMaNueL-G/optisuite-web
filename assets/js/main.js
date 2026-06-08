/* ============================================================
   OptiSuite — main.js
   SPA routing + interactions
   ============================================================ */

'use strict';

/* ── Nav scroll effect ────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobile menu ──────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? 'flex' : 'none';
  hamburger.classList.toggle('open', menuOpen);
});

/* ── SPA Routing ──────────────────────────────────────── */
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

function navigate(pageId) {
  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + pageId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
  // close mobile menu
  menuOpen = false;
  mobileMenu.style.display = 'none';
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  // update URL hash (no reload)
  history.replaceState(null, '', pageId === 'home' ? '/' : '#' + pageId);
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

/* ── Read hash on load ────────────────────────────────── */
function initPage() {
  const hash = location.hash.replace('#', '') || 'home';
  const valid = ['home','tools','windows','android','updates','categories','about'];
  navigate(valid.includes(hash) ? hash : 'home');
}
initPage();

/* ── Filter tabs (tools page) ─────────────────────────── */
function initFilters() {
  const tabs  = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.tool-card[data-platform]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.platform === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}
initFilters();

/* ── Copy to clipboard (donate section) ──────────────── */
document.querySelectorAll('.donate-value').forEach(el => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(el.textContent.trim()).then(() => {
      const orig = el.textContent;
      el.textContent = '✓ Copiado';
      el.style.color = 'var(--android)';
      setTimeout(() => {
        el.textContent = orig;
        el.style.color = '';
      }, 1800);
    }).catch(() => {});
  });
  el.title = 'Clic para copiar';
});

/* ── Animate on scroll (IntersectionObserver) ─────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.tool-card, .category-card, .principle, .update-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

/* ── Hero counter animation ───────────────────────────── */
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const countEls = document.querySelectorAll('[data-count]');
if (countEls.length) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target, parseInt(e.target.dataset.count));
        heroObserver.unobserve(e.target);
      }
    });
  });
  countEls.forEach(el => heroObserver.observe(el));
}
