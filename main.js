// ============================================================
// THE LEAKY TAP — main.js
// ============================================================

(function () {
  'use strict';

  // ---- Nav scroll behavior ----
  const nav = document.getElementById('nav');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Mobile nav toggle ----
  window.toggleNav = function () {
    const mobileNav = document.getElementById('navMobile');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  };

  // ---- Intersection observer for section reveals ----
  const revealTargets = document.querySelectorAll('.about-grid, .menu-category, .room-card, .staff-card, .event-row, .find-grid');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease`;
    revealObserver.observe(el);
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => sectionObserver.observe(section));

  // ---- Smooth parallax on hero bg ----
  const heroBgFire = document.querySelector('.hero-bg-fire');

  window.addEventListener('scroll', () => {
    if (!heroBgFire) return;
    const scrolled = window.scrollY;
    heroBgFire.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
  }, { passive: true });

  // ---- Random ember bursts on hover of buttons ----
  const primaryBtns = document.querySelectorAll('.btn-primary');
  primaryBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.setProperty('--btn-glow', '0 0 40px rgba(212,130,10,0.8)');
    });
  });

  console.log('%c🍺 The Leaky Tap — Zadash\'s Finest', 'font-size:16px; color:#D4820A; font-weight:bold;');
  console.log('%cA fictional fan site tribute to Critical Role Campaign 2', 'color:#C9A96E;');

})();
