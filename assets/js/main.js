/* ============================================================
   OptiSuite — main.js
   SPA routing + network canvas + interactions
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════
   NETWORK CANVAS BACKGROUND
   Subtle animated particle network — dark, professional
══════════════════════════════════════════════════════ */
(function initCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    nodeCount:    55,
    maxDist:      160,
    nodeRadius:   1.5,
    speed:        0.25,
    nodeColor:    'rgba(91,141,239,',   // primary blue
    lineColor:    'rgba(91,141,239,',
    nodeColor2:   'rgba(124,92,239,',   // purple accent
  };

  let W, H, nodes = [];
  let raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Node() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * CONFIG.speed;
    this.vy = (Math.random() - 0.5) * CONFIG.speed;
    this.r  = Math.random() * CONFIG.nodeRadius + 0.8;
    this.isPurple = Math.random() < 0.2;
  }

  Node.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
    this.x = Math.max(0, Math.min(W, this.x));
    this.y = Math.max(0, Math.min(H, this.y));
  };

  function init() {
    resize();
    nodes = Array.from({ length: CONFIG.nodeCount }, () => new Node());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.maxDist) {
          const alpha = (1 - dist / CONFIG.maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = CONFIG.lineColor + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      n.update();
      const col = n.isPurple ? CONFIG.nodeColor2 : CONFIG.nodeColor;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = col + '0.7)';
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  // Pause when tab is hidden (battery saving)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); }
    else { raf = requestAnimationFrame(draw); }
  });

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); }, 200);
  }, { passive: true });

  init();
  draw();
})();


/* ══════════════════════════════════════════════════════
   NAV SCROLL EFFECT
══════════════════════════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


/* ══════════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? 'flex' : 'none';
  hamburger.classList.toggle('open', menuOpen);
});


/* ══════════════════════════════════════════════════════
   SPA ROUTING
══════════════════════════════════════════════════════ */
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

const VALID_PAGES = ['home','tools','windows','android','updates','categories','community','about'];

function navigate(pageId) {
  if (!VALID_PAGES.includes(pageId)) pageId = 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + pageId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
  menuOpen = false;
  mobileMenu.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.replaceState(null, '', pageId === 'home' ? '/' : '#' + pageId);
  // Re-trigger scroll animations for new page
  triggerObserver();
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

function initPage() {
  const hash = location.hash.replace('#', '') || 'home';
  navigate(hash);
}
initPage();


/* ══════════════════════════════════════════════════════
   FILTER TABS (tools page)
══════════════════════════════════════════════════════ */
function initFilters() {
  const tabs  = document.querySelectorAll('.filter-tab[data-filter]');
  const cards = document.querySelectorAll('.tool-card[data-platform]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.platform === filter) ? '' : 'none';
      });
    });
  });
}
initFilters();


/* ══════════════════════════════════════════════════════
   COMMUNITY — DISCUSSION TAB SWITCHER
══════════════════════════════════════════════════════ */
window.loadDiscussion = function(repo, btn) {
  // Update active tab
  document.querySelectorAll('#communityTabs .filter-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const container = document.getElementById('giscusContainer');
  if (!container) return;

  // Remove existing giscus iframe
  const existing = container.querySelector('.giscus, .giscus-frame, script[src*="giscus"]');
  if (existing) existing.remove();

  // Show direct link placeholder
  const placeholder = document.getElementById('giscusPlaceholder');
  if (placeholder) {
    placeholder.querySelector('a').href = `https://github.com/EnMaNueL-G/${repo}/discussions`;
  }
};


/* ══════════════════════════════════════════════════════
   COPY TO CLIPBOARD (donate)
══════════════════════════════════════════════════════ */
document.querySelectorAll('.donate-value').forEach(el => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(el.textContent.trim()).then(() => {
      const orig = el.textContent;
      el.textContent = '✓ Copiado';
      el.style.color = 'var(--android)';
      setTimeout(() => { el.textContent = orig; el.style.color = ''; }, 1800);
    }).catch(() => {});
  });
  el.title = 'Clic para copiar';
});


/* ══════════════════════════════════════════════════════
   SCROLL ANIMATIONS (IntersectionObserver)
══════════════════════════════════════════════════════ */
let observer;

function triggerObserver() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.page.active .tool-card, .page.active .category-card, .page.active .principle, .page.active .update-item, .page.active .hero-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
  });
}

triggerObserver();


/* ══════════════════════════════════════════════════════
   COUNTER ANIMATION (hero stats)
══════════════════════════════════════════════════════ */
function animateCount(el, target, duration = 1000) {
  let start;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target, parseInt(e.target.dataset.count));
      counterObserver.unobserve(e.target);
    }
  });
});
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
