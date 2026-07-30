const body = document.body;
const topbar = document.querySelector('.topbar');
const toggle = document.querySelector('[data-lang-toggle]');
const navToggle = document.querySelector('[data-nav-toggle]');
const labels = toggle ? Array.from(toggle.querySelectorAll('.lang-toggle__label')) : [];

function setLanguage(language) {
  const nextLanguage = language === 'ar' ? 'ar' : 'en';
  body.dataset.language = nextLanguage;
  body.setAttribute('dir', nextLanguage === 'ar' ? 'rtl' : 'ltr');
  body.setAttribute('lang', nextLanguage);

  if (labels.length === 2) {
    labels[0].textContent = nextLanguage === 'en' ? 'EN' : 'AR';
    labels[1].textContent = nextLanguage === 'en' ? 'عربي' : 'English';
  }
}

const savedLanguage = window.localStorage.getItem('mq-nature-language') || 'en';
setLanguage(savedLanguage);

function setMenuState(isOpen) {
  if (!topbar || !navToggle) {
    return;
  }

  topbar.classList.toggle('is-nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle?.addEventListener('click', () => {
  const isOpen = topbar?.classList.contains('is-nav-open');
  setMenuState(!isOpen);
});

topbar?.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

toggle?.addEventListener('click', () => {
  const nextLanguage = body.dataset.language === 'ar' ? 'en' : 'ar';
  setLanguage(nextLanguage);
  window.localStorage.setItem('mq-nature-language', nextLanguage);
  setMenuState(false);
});
