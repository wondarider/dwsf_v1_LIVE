// script.js

// makes the site title in the header act like a “scroll to top” button
document.addEventListener("DOMContentLoaded", () => {
  // site title scroll-to-top
  const siteTitle = document.querySelector(".header-title");
  if (siteTitle) {
    siteTitle.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // nav toggle (burger)
  const navToggle = document.getElementById('navToggle');
  const headerNav = document.getElementById('headerNav');

  if (navToggle && headerNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = headerNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // floating CTA appear after scrolling
  const floatingCta = document.getElementById('floatingCta');
  if (floatingCta) {
    const onScroll = () => {
      if (window.scrollY > 400) {
        floatingCta.classList.add('visible');
      } else {
        floatingCta.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // run once on load in case page is already scrolled
    onScroll();
  }
});
