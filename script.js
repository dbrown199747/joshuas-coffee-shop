document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navAnchors.forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.innerHTML = '&#9776;';
  toggle.setAttribute('aria-label', 'Open menu');
}));

// Highlight nav link for current section
const sections = document.querySelectorAll('section[id], div[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
