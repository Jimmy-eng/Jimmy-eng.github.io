const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
const printButton = document.querySelector('[data-print]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  document.body.classList.remove('menu-open');
};

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Node)) return;
    if (
      !navigation.contains(event.target)
      && !menuButton.contains(event.target)
      && !(themeToggle && themeToggle.contains(event.target))
    ) {
      closeMenu();
    }
  });
}

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (year) year.textContent = String(new Date().getFullYear());
if (printButton) printButton.addEventListener('click', () => window.print());

const getTheme = () => (
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
);

const applyTheme = (theme) => {
  const next = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  if (themeMeta) themeMeta.setAttribute('content', next === 'dark' ? '#111821' : '#ffffff');
  if (themeToggle) {
    const label = next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
  }
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Storage can fail in private mode; theme still works for the session.
  }
};

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

applyTheme(getTheme());

const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href') ?? ''))
  .filter((section) => section instanceof HTMLElement);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -60%', threshold: [0, 0.2, 0.6] });

  sections.forEach((section) => observer.observe(section));
}
