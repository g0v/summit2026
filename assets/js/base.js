// Global preferences
const storage = window.sessionStorage

$('#cookie-notice button').on('click', function (e) {
  storage.setItem('agreeCookie', true)
  $('#cookie-notice').addClass('hidden')
})

$('header .offcanvas-toggler').on('click', function (e) {
  $('header .offcanvas-box').toggleClass('show')
})

$('#modal .modal-close').on('click', function (e) {
  e.preventDefault()
  $('body').removeClass('overflow-hidden')
  $('#modal').removeClass('show')
  history.replaceState(null, null, window.location.pathname);
})

let rickRoll = 0

$("a[disabled]").each(function () {
  $(this).attr("title", "還在煮！")
  $(this).attr("data-i18n", $(this).attr("data-i18n") + ";[title]nav.disabled.title")
}).on('click', function (e) {
  e.preventDefault()
  rickRoll++
  if (rickRoll > 3) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    rickRoll = 0
    gtag('event', 'rickroll', {
      'event_category': 'User Interaction',
      'event_label': 'Rickroll',
    })
  }
})

$("a.submit-form-link").on('click', function (e) {
  e.preventDefault()
  gtag('event', 'submit_form', {
    'event_category': 'User Interaction',
    'event_label': 'Submit Form',
  })
  window.open(this.href, '_blank')
})

$(document).on('keydown', function (e) {
  if (e.key === 'Escape' && $('#modal').hasClass('show')) {
    $('#modal .modal-close').click()
  }
})

// Set i18n locale
const setLocale = (function (lang) {
  let current = document.body.lang || 'zh-Hant-TW'
  i18next.changeLanguage(lang)
  document.body.lang = (lang === 'en' ? 'en-TW' : 'zh-Hant-TW')
  if (!current.startsWith(lang))
    $(document).localize()
  $('.agenda-grid').css('--agenda-header-height', ($('#agenda-header').outerHeight() + 10) + 'px')
})

// Language change
function changeLang(lang) {
  console.log("lang changed", lang)
  setLocale(lang)
  storage.setItem("userLang", lang)
}

// Change the navbar color dynamically on scroll
const navTransparentFlag = Boolean($('#nav-transparent-flag')[0]);
const $navbar = $('#navbar')
const $mobileNav = $('#mobile-nav')
const scrollThreshold = 100

function onScroll() {
  if (navTransparentFlag) {
    if ($(window).scrollTop() > scrollThreshold) {
      $navbar.addClass('!bg-white shadow-md md:!h-22')
    } else if ($(window).scrollTop() < scrollThreshold / 2) {
      $navbar.removeClass('!bg-white shadow-md md:!h-22')
    }
  } else {
    $navbar.addClass('!bg-white shadow-md md:!h-22')
  }
}

$(window).on('scroll', onScroll)
onScroll()

// toggle mobile nav
$('#toggle-nav-btn').on('click', toggleMobileNav)
$('.toggle-mobile-nav').on('click', toggleMobileNav)

function toggleMobileNav() {
  $mobileNav.toggleClass('grid-rows-[0fr] grid-rows-[1fr]')
  $mobileNav.toggleClass('shadow-md')
  $('#burger').toggleClass('is-active')
  if ($('#burger').hasClass('is-active')) {
    $navbar.addClass('max-md:bg-white')
  } else {
    $navbar.removeClass('max-md:bg-white')
  }
}

// countdown to submission deadline
function updateTimeline() {
  const currentDate = new Date()
  $('.timeline-item').each(function () {
    const dateString = $('time', this).attr('datetime')
    const itemDate = new Date(dateString.indexOf('T') > 0 ? dateString : (dateString + 'T00:00:00+08:00'))
    if (currentDate > itemDate) {
      $(".timeline-icon", this).removeClass('opacity-50').attr('alt', '')
    }
  })
}

function initCountdown() {
  const targetDate = new Date('2026-01-26T00:00:00+08:00')
  const dateDiff = targetDate - new Date()
  const twoDaysFromNow = (new Date().getTime() / 1000) + (dateDiff / 1000);
  new FlipDown(twoDaysFromNow).start()
}

$(function () {
  if (!storage.getItem('agreeCookie')) {
    $('#cookie-notice').removeClass('hidden')
  }

  const i18nzh = {}
  $('[data-i18n]').each(function () {
    const $this = $(this)
    const key = $this.attr('data-i18n')
    const text = $this.html()
    key.split(';').forEach(function (_key) {
      const attr = _key.match(/\[(.*?)\]/)
      if (attr && attr[1] !== "html") {
        i18nzh[_key.replace(/\[.*?\]/g, '')] = $this.attr(attr[1])
      } else {
        i18nzh[_key.replace(/\[.*?\]/g, '')] = text
      }
    })
  })

  let lang = storage.getItem("userLang")

  if (location.search)
    if (location.search.includes('lang=en')) lang = 'en'
    else if (location.search.includes('lang=zh')) lang = 'zh'

  if (!lang) {
    let languages = navigator.languages || [navigator.language || navigator.userLanguage]
    for (const l of languages)
      if (l.startsWith('en')) { // Explicitly prefer English
        lang = 'en'
        break
      } else if (l.startsWith('zh')) { // Explicitly prefer Mandarin
        lang = 'zh'
        break
      }
    lang = lang || 'en' // Fallback
  }

  // Fetch English translations
  fetch('assets/i18n/en.json?v=1')
    .then(res => res.json())
    .then(enTranslations => {
      // Initialize i18next
      i18next.init({
        lng: lang,
        fallbackLng: 'zh',
        resources: {
          zh: {
            translation: i18nzh
          },
          en: {
            translation: enTranslations
          }
        }
      }, function (err, t) {
        // Initialize jquery-i18next
        jqueryI18next.init(i18next, $, {
          tName: 't',
          i18nName: 'i18n',
          handleName: 'localize',
          selectorAttr: 'data-i18n',
          targetAttr: 'i18n-target',
          optionsAttr: 'i18n-options',
          useOptionsAttr: false,
          parseDefaultValueFromContent: true
        });

        ['zh', 'en'].forEach(l => {
          const lBtn = $(`.${l}-btn`)
          lBtn.on('click', function (e) {
            changeLang(l)
            toggleMobileNav()
            $(".lang-btn").removeClass("!text-primary-dark")
            $(this).addClass("!text-primary-dark")
          })
          lBtn.toggleClass('!text-primary-dark', l === lang)
        })

        changeLang(lang)
      });
    });

  // UI interactions & events
  $('body').css('overflow', 'unset')
  $('#loading').addClass('scale')
  setTimeout(function () {
    $('#loading').addClass('fadeout')
  }, 1000)

  updateTimeline()
  initCountdown()
})