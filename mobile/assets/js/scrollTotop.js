let lastScrollY = window.scrollY;
let isInitialLoad = true;

const elements = document.querySelectorAll('.scrollTop');

const observer = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      if (isInitialLoad || isScrollingDown) {
        el.classList.add('visible', 'animate');
      }
    } else {
      if (!isScrollingDown) {
        el.classList.remove('visible', 'animate');
      }
    }
  });

  lastScrollY = currentScrollY;
  isInitialLoad = false;
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));
