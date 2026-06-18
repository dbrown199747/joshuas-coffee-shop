const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);
