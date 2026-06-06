/* AspireNet — script.js — v4 */

document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  /* ── HAMBURGER open/close ─────────────────── */
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  /* ── MOBILE: close drawer only on plain links
       (NOT on the "Services" parent or drop-items) ── */
  navMenu?.querySelectorAll('a.nav-link:not(.nav-item > .nav-link), a.nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        hamburger?.classList.remove('open');
        navMenu?.classList.remove('open');
        document.body.style.overflow = '';
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('mob-open'));
      }
    });
  });

  /* Close drawer when a drop-item (actual service link) is clicked */
  navMenu?.querySelectorAll('.drop-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        hamburger?.classList.remove('open');
        navMenu?.classList.remove('open');
        document.body.style.overflow = '';
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('mob-open'));
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger?.classList.remove('open');
      navMenu?.classList.remove('open');
      document.body.style.overflow = '';
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('mob-open'));
    }
  });

  /* ── MOBILE DROPDOWN TOGGLE ──────────────────
     Tap "Services" → toggle sub-list, drawer stays open ── */
  document.querySelectorAll('.nav-item > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();          // prevent drawer-close listeners
        const parent  = link.closest('.nav-item');
        const wasOpen = parent.classList.contains('mob-open');
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('mob-open'));
        if (!wasOpen) parent.classList.add('mob-open');
      }
    });
  });

  /* ── NAVBAR SCROLL ─────────────────────────── */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── SMOOTH SCROLL ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      if (id === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = document.getElementById('header')?.offsetHeight || 72;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── FAQ ACCORDION ─────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling?.classList.add('open');
      }
    });
  });

  /* ── SCROLL ANIMATIONS ─────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll(
    '.why-card,.service-card,.service-overview-card,.testimonial-card,' +
    '.pricing-card,.process-h-step,.faq-item,' +
    '.detail-card,.team-card,.about-stat,.metric-item'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${Math.min(i * 0.06, 0.55)}s ease, transform 0.5s ${Math.min(i * 0.06, 0.55)}s ease`;
    observer.observe(el);
  });

  /* ── CONTACT FORM ─────────────────────────── */
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name    = (form.fullName?.value || '').trim();
    const email   = (form.email?.value   || '').trim();
    const service = (form.service?.value || '');
    const budget  = (form.budget?.value  || '');
    const message = (form.message?.value || '').trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    const subject = encodeURIComponent(`[AspireNet] ${service || 'General Inquiry'} – ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service||'Not specified'}\nBudget: ${budget||'Not specified'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:contact@aspire-net.com?subject=${subject}&body=${body}`;
    showToast('Opening your email client…', 'success');
    form.reset();
  });

  /* ── TOAST ────────────────────────────────── */
  function showToast(msg, type = 'success') {
    const old = document.getElementById('an-toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.id = 'an-toast';
    t.textContent = msg;
    t.style.cssText = `
      position:fixed;bottom:24px;right:24px;z-index:9999;
      background:${type==='error'?'#ef4444':'#00c950'};
      color:${type==='error'?'#fff':'#000'};
      padding:13px 20px;border-radius:9px;
      font-family:'Inter',sans-serif;font-size:14px;font-weight:700;
      box-shadow:0 8px 30px rgba(0,0,0,0.4);
      animation:toastIn 0.28s ease;
    `;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }

  const ts = document.createElement('style');
  ts.textContent = `@keyframes toastIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`;
  document.head.appendChild(ts);

});
