/* ============================================================
   OptiSuite — main.js
   SPA routing + network canvas + interactions
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════
   DARK / LIGHT THEME — init FIRST (before any render)
══════════════════════════════════════════════════════ */
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('os-theme') || 'dark';
  root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      localStorage.setItem('os-theme', theme);
      btn.textContent = theme === 'dark' ? '☾' : '☀';
      btn.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    }

    applyTheme(saved);

    btn.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });
})();


/* ══════════════════════════════════════════════════════
   NETWORK CANVAS BACKGROUND
   Subtle animated particle network — dark, professional
══════════════════════════════════════════════════════ */
(function initCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Colors per theme — adapts live on toggle
  const THEMES = {
    dark:  { n1:'rgba(91,141,239,',  n2:'rgba(124,92,239,', line:'rgba(91,141,239,',  la:0.22, na:0.70, op:0.35 },
    light: { n1:'rgba(37,99,235,',   n2:'rgba(99,60,220,',  line:'rgba(37,99,235,',   la:0.30, na:0.85, op:0.75 }
  };

  const CONFIG = { nodeCount:55, maxDist:160, nodeRadius:1.5, speed:0.25 };

  let W, H, nodes = [];
  let raf;

  function getT() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? THEMES.light : THEMES.dark;
  }

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
    const T = getT();
    canvas.style.opacity = T.op;

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.maxDist) {
          const alpha = (1 - dist / CONFIG.maxDist) * T.la;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = T.line + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      n.update();
      const col = n.isPurple ? T.n2 : T.n1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = col + T.na + ')';
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

const VALID_PAGES = ['home','tools','windows','android','macos','linux','updates','categories','community','about','toolkit','office-plus','optifleet','optiplay','opticert','optigrab','optidocs','neuralmix','optigsm'];

function navigate(pageId) {
  if (!VALID_PAGES.includes(pageId)) pageId = 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + pageId));
  navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
  menuOpen = false;
  mobileMenu.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.replaceState(null, '', pageId === 'home' ? '/' : '#' + pageId);
  // Re-trigger scroll animations and inject counters for new page
  triggerObserver();
  if (_dlFetched) injectAllCounters();
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
var observer;  // var (hoisted) — navigate() lo usa antes de esta línea al cargar; con let daba TDZ y rompía la navegación.

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
   DOWNLOAD COUNTERS — real data from GitHub API
   Cache en memoria para no repetir fetch en cada naveg.
══════════════════════════════════════════════════════ */
const _dlCache = {};   // repo → total downloads
var _dlFetched = false;  // var (hoisted) — navigate() lo consulta antes de esta línea al cargar.

async function fetchDownloadCounts() {
  if (_dlFetched) { injectAllCounters(); return; }
  const owner = 'EnMaNueL-G';
  const repos = ['WinOptimizer','SecuritySuite','PhoneOptimizer','BatteryGuard','StorageCleaner','NetworkGuard'];

  await Promise.allSettled(repos.map(async repo => {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases`,
        { headers: { Accept: 'application/vnd.github.v3+json' } }
      );
      if (!res.ok) { _dlCache[repo] = 0; return; }
      const data = await res.json();
      let total = 0;
      if (Array.isArray(data)) {
        data.forEach(r => Array.isArray(r.assets) && r.assets.forEach(a => { total += (a.download_count || 0); }));
      }
      _dlCache[repo] = total;
    } catch { _dlCache[repo] = 0; }
  }));

  _dlFetched = true;
  injectAllCounters();
}

function injectAllCounters() {
  Object.entries(_dlCache).forEach(([repo, total]) => {
    document.querySelectorAll(`.tool-card[data-repo="${repo}"]`).forEach(card => {
      const footer = card.querySelector('.card-footer');
      if (!footer || footer.querySelector('.dl-counter')) return;

      const span = document.createElement('span');
      span.className = 'dl-counter';
      span.style.cssText = 'font-size:0.73rem;color:var(--text-3);display:inline-flex;align-items:center;gap:4px;white-space:nowrap;';
      const dlIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
      span.innerHTML = dlIcon + (total > 0 ? total.toLocaleString() + ' descargas' : 'Nuevo');

      // Append at the end of footer
      footer.appendChild(span);
    });
  });
}

window.addEventListener('load', fetchDownloadCounts);


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
