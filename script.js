// Smooth scroll + active nav highlight
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10, 14, 39, 0.97)'
    : 'rgba(10, 14, 39, 0.85)';
});

// Hamburger menu (mobile)
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.cssText = isOpen
    ? ''
    : 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:rgba(10,14,39,0.98);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(255,255,255,0.08)';
});

// Scroll fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.plane-card, .fact-card, .stat, .cockpit-card, .about-text, .contact-form')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  document.querySelector('.contact-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.contact-form').style.display = 'flex';
    document.getElementById('success-msg').style.display = 'none';
    document.querySelector('.contact-form').reset();
  }, 4000);
}
