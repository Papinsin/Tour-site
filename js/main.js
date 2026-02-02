// Dawud Travel – main JavaScript

(function () {
  'use strict';

  // Translations for 3 languages: en, ru, uz
  var translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.tours': 'Tours',
      'nav.cities': 'Cities',
      'nav.contact': 'Contact',
      'nav.mice': 'MICE',
      'nav.blog': 'Blog',
      'home.title': 'Welcome',
      'home.text': 'Discover the Silk Road. Expert-led tours across Uzbekistan and Central Asia.',
      'tours.title': 'Tours',
      'tours.text': 'Add your tours content here.',
      'cities.title': 'Cities',
      'cities.text': 'Add your cities content here.',
      'mice.title': 'MICE',
      'mice.text': 'Add your MICE (Meetings, Incentives, Conferences, Exhibitions) content here.',
      'blog.title': 'Blog',
      'blog.text': 'Add your blog content here.',
      'about.title': 'About',
      'about.text': 'At Dawud Travel, we believe that travel is the only thing you buy that makes you richer. Named after a legacy of wisdom and strength, our agency isn\'t just about booking tickets; it\'s about architecting experiences. Whether you are seeking spiritual fulfillment, a quiet escape, or a bold adventure, we provide the compass to get you there.',
      'contact.title': 'Contact',
      'contact.text': 'Add your contact details here.'
    },
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.tours': 'Туры',
      'nav.cities': 'Города',
      'nav.contact': 'Контакты',
      'nav.mice': 'MICE',
      'nav.blog': 'Блог',
      'home.title': 'Добро пожаловать',
      'home.text': 'Откройте для себя Великий шёлковый путь. Туры с гидами по Узбекистану и Средней Азии.',
      'tours.title': 'Туры',
      'tours.text': 'Добавьте контент о турах здесь.',
      'cities.title': 'Города',
      'cities.text': 'Добавьте контент о городах здесь.',
      'mice.title': 'MICE',
      'mice.text': 'MICE (встречи, поощрения, конференции, выставки) — добавьте контент здесь.',
      'blog.title': 'Блог',
      'blog.text': 'Добавьте контент блога здесь.',
      'about.title': 'О нас',
      'about.text': 'В Dawud Travel мы верим, что путешествие — единственная покупка, которая делает вас богаче. Названное в честь наследия мудрости и силы, наше агентство — не только бронирование билетов: мы создаём впечатления. Ищете ли вы духовное наполнение, тихий отдых или смелое приключение — мы даём компас, чтобы довести вас до цели.',
      'contact.title': 'Контакты',
      'contact.text': 'Добавьте контактные данные здесь.'
    },
    uz: {
      'nav.home': 'Bosh sahifa',
      'nav.about': 'Biz haqimizda',
      'nav.tours': 'Turlar',
      'nav.cities': 'Shaharlar',
      'nav.contact': 'Aloqa',
      'nav.mice': 'MICE',
      'nav.blog': 'Blog',
      'home.title': 'Xush kelibsiz',
      'home.text': 'Buyuk ipak yo\'lini kashing. O\'zbekiston va Markaziy Osiyo bo\'ylab professional turlar.',
      'tours.title': 'Turlar',
      'tours.text': 'Turlar bo\'yicha kontentni shu yerga qo\'shing.',
      'cities.title': 'Shaharlar',
      'cities.text': 'Shaharlar bo\'yicha kontentni shu yerga qo\'shing.',
      'mice.title': 'MICE',
      'mice.text': 'MICE (yig\'ilishlar, rag\'batlantirish, konferensiyalar, ko\'rgazmalar) — kontentni shu yerga qo\'shing.',
      'blog.title': 'Blog',
      'blog.text': 'Blog kontentini shu yerga qo\'shing.',
      'about.title': 'Biz haqimizda',
      'about.text': 'Dawud Travelda biz sayohat — sotib olasiz va sizni boyitadigan yagona narsa, deb ishonamiz. Donolik va kuch merosidan ilhomlangan, agentligimiz faqat chipta bron qilish emas — tajribalar yaratishdir. Ruhiy to\'ldiruv, jim dam olish yoki jasur sarguzasht izlasangiz ham, sizni u yerga olib boradigan kompasni biz taqdim etamiz.',
      'contact.title': 'Aloqa',
      'contact.text': 'Aloqa ma\'lumotlarini shu yerga qo\'shing.'
    }
  };

  var currentLang = 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    var t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
    document.documentElement.lang = lang;
  }

  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
