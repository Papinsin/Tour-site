// Dawud Travel – main JavaScript

(function () {
  'use strict';

  // Translations for 3 languages: en, ru, uz
  var translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.tours': 'Tours',
      'nav.maps': 'Maps',
      'nav.cities': 'Cities',
      'nav.contact': 'Contact',
      'nav.comments': 'Comments',
      'nav.blog': 'Blog',
      'home.title': 'Welcome',
      'home.text': 'Discover the Silk Road. Expert-led tours across Uzbekistan and Central Asia.',
      'tours.title': 'Tours',
      'tours.text': 'Add your tours content here.',
      'cities.title': 'Cities',
      'cities.text': 'Add your cities content here.',
      'comments.title': 'Comments',
      'comments.intro': 'Share your experience or ask a question.',
      'comments.name': 'Name',
      'comments.email': 'Email',
      'comments.message': 'Your comment',
      'comments.submit': 'Submit',
      'comments.rating': '5 stars – evaluating your experience',
      'blog.title': 'Blog',
      'blog.text': 'Add your blog content here.',
      'about.title': 'About Us',
      'about.text': 'At Dawud Travel, we believe that travel is the only thing you buy that makes you richer. Named after a legacy of wisdom and strength, our agency isn\'t just about booking tickets; it\'s about architecting experiences. Whether you are seeking spiritual fulfillment, a quiet escape, or a bold adventure, we provide the compass to get you there.',
      'maps.title': 'Route Maps',
      'maps.intro': 'Reference maps for our desert yurt and horse riding adventures.',
      'maps.yurt.caption': 'Desert Yurt Camp Tour — Route Map',
      'maps.horse.caption': 'Horse Riding Adventures — Route Map',
      'contact.title': 'Contact',
      'contact.text': 'Add your contact details here.'
    },
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.tours': 'Туры',
      'nav.maps': 'Карты',
      'nav.cities': 'Города',
      'nav.contact': 'Контакты',
      'nav.comments': 'Отзывы',
      'nav.blog': 'Блог',
      'home.title': 'Добро пожаловать',
      'home.text': 'Откройте для себя Великий шёлковый путь. Туры с гидами по Узбекистану и Средней Азии.',
      'tours.title': 'Туры',
      'tours.text': 'Добавьте контент о турах здесь.',
      'cities.title': 'Города',
      'cities.text': 'Добавьте контент о городах здесь.',
      'comments.title': 'Отзывы',
      'comments.intro': 'Поделитесь впечатлениями или задайте вопрос.',
      'comments.name': 'Имя',
      'comments.email': 'Email',
      'comments.message': 'Ваш комментарий',
      'comments.submit': 'Отправить',
      'comments.rating': '5 звёзд – оценка вашего опыта',
      'blog.title': 'Блог',
      'blog.text': 'Добавьте контент блога здесь.',
      'about.title': 'О нас',
      'about.text': 'В Dawud Travel мы верим, что путешествие — единственная покупка, которая делает вас богаче. Названное в честь наследия мудрости и силы, наше агентство — не только бронирование билетов: мы создаём впечатления. Ищете ли вы духовное наполнение, тихий отдых или смелое приключение — мы даём компас, чтобы довести вас до цели.',
      'maps.title': 'Карты маршрутов',
      'maps.intro': 'Справочные карты для туров в юрточный лагерь и конных прогулок.',
      'maps.yurt.caption': 'Тур в юрточный лагерь в пустыне — карта маршрута',
      'maps.horse.caption': 'Конные прогулки — карта маршрута',
      'contact.title': 'Контакты',
      'contact.text': 'Добавьте контактные данные здесь.'
    },
    uz: {
      'nav.home': 'Bosh sahifa',
      'nav.about': 'Biz haqimizda',
      'nav.tours': 'Turlar',
      'nav.maps': 'Xaritalar',
      'nav.cities': 'Shaharlar',
      'nav.contact': 'Aloqa',
      'nav.comments': 'Sharhlar',
      'nav.blog': 'Blog',
      'home.title': 'Xush kelibsiz',
      'home.text': 'Buyuk ipak yo\'lini kashing. O\'zbekiston va Markaziy Osiyo bo\'ylab professional turlar.',
      'tours.title': 'Turlar',
      'tours.text': 'Turlar bo\'yicha kontentni shu yerga qo\'shing.',
      'cities.title': 'Shaharlar',
      'cities.text': 'Shaharlar bo\'yicha kontentni shu yerga qo\'shing.',
      'comments.title': 'Sharhlar',
      'comments.intro': 'Tajribangizni ulashing yoki savol bering.',
      'comments.name': 'Ism',
      'comments.email': 'Email',
      'comments.message': 'Sharhingiz',
      'comments.submit': 'Yuborish',
      'comments.rating': '5 yulduz – tajribangizni baholash',
      'blog.title': 'Blog',
      'blog.text': 'Blog kontentini shu yerga qo\'shing.',
      'about.title': 'Biz haqimizda',
      'about.text': 'Dawud Travelda biz sayohat — sotib olasiz va sizni boyitadigan yagona narsa, deb ishonamiz. Donolik va kuch merosidan ilhomlangan, agentligimiz faqat chipta bron qilish emas — tajribalar yaratishdir. Ruhiy to\'ldiruv, jim dam olish yoki jasur sarguzasht izlasangiz ham, sizni u yerga olib boradigan kompasni biz taqdim etamiz.',
      'maps.title': 'Marshrut xaritalari',
      'maps.intro': 'Cho\'l yurt lageri va ot minish turlari uchun ma\'lumotnoma xaritalari.',
      'maps.yurt.caption': 'Cho\'l yurt lageri turi — marshrut xaritasi',
      'maps.horse.caption': 'Ot minish sarguzashtlari — marshrut xaritasi',
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
    
    // Update current language display
    var langCurrent = document.querySelector('.lang-current');
    if (langCurrent) {
      langCurrent.textContent = lang.toUpperCase();
    }
    
    // Close dropdown after selection
    var langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
      langSwitcher.classList.remove('open');
      var toggleBtn = document.querySelector('.lang-btn-toggle');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
    
    document.documentElement.lang = lang;
  }

  // Language switcher toggle button
  var langToggle = document.querySelector('.lang-btn-toggle');
  var langSwitcher = document.querySelector('.lang-switcher');
  if (langToggle && langSwitcher) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = langSwitcher.classList.contains('open');
      langSwitcher.classList.toggle('open');
      this.setAttribute('aria-expanded', !isOpen);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!langSwitcher.contains(e.target)) {
        langSwitcher.classList.remove('open');
        if (langToggle) {
          langToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
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

  // Main tours Swiper (must run after Swiper script is loaded)
  if (typeof Swiper !== 'undefined') {
    var mainToursSwiper = new Swiper('.main-tours-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.main-tours-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.main-tours-swiper .swiper-button-next',
        prevEl: '.main-tours-swiper .swiper-button-prev'
      },
      scrollbar: {
        el: '.main-tours-swiper .swiper-scrollbar',
        hide: false
      },
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });

    // Recalculate layout on resize/zoom so it doesn’t “crush”
    window.addEventListener('resize', function () {
      if (mainToursSwiper && mainToursSwiper.update) {
        mainToursSwiper.update();
      }
    });
  }
  // working with cities 
  const cities = document.querySelectorAll(".city")
  cities.forEach(city=>{
    city.addEventListener("click", ()=>{
      removeActiveClass()
      city.classList.add("active")
    })
  })
  function removeActiveClass () {
    cities.forEach( city => {
          city.classList.remove("active")
    })
  }

  // Burger menu – toggle nav on small screens
  var burger = document.querySelector('.burger');
  var header = document.querySelector('header');
  var body = document.body;
  var navLinks = document.querySelectorAll('.nav_bar a');
  var menuOverlay = document.querySelector('.menu-overlay');
  
  function closeMenu() {
    header.classList.remove('menu-open');
    body.classList.remove('menu-open');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
    }
  }
  
  if (burger && header) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = header.classList.contains('menu-open');
      header.classList.toggle('menu-open');
      body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', !isOpen);
    });
    
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
    
    if (menuOverlay) {
      menuOverlay.addEventListener('click', function () {
        closeMenu();
      });
    }
  }

})();
const video_hero = document.querySelector(".hero_video")
video_hero.playbackRate = 1.2;
video_hero.playbackRate = 1.2;