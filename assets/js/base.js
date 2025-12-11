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
  if (rickRoll > 10) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    rickRoll = 0
  }
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
    $(document.body).localize()
  updateCountdown()
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

if (navTransparentFlag) {
  $navbar.addClass('bg-white/90 transition-colors')
  function onScroll() {
    $navbar.toggleClass('!bg-white shadow-md', $(window).scrollTop() > 10)
  }
  $(window).on('scroll', onScroll)
  onScroll()
} else {
  $navbar.addClass('!bg-white shadow-md')
}

// toggle mobile nav
$('#toggle-nav-btn').on('click', toggleMobileNav)

function toggleMobileNav() {
  $navbar.addClass('bg-white')
  $mobileNav.toggleClass('grid-rows-[0fr] grid-rows-[1fr]')
  $mobileNav.toggleClass('shadow-md')

  if ($(window).scrollTop() < 10 && $mobileNav.hasClass('grid-rows-[0fr]')) {
    $navbar.removeClass('bg-white')
  }
}

// count day to submission deadline
function updateTimeline() {
  const currentDate = new Date()
  $(".timeline-item").each(function () {
    const itemDate = new Date($(this).data("timeline-date").split(/[\s、]+/g)[0].replace(/\//g, '-') + "T00:00:00+08:00")
    if (currentDate > itemDate) {
      $(".timeline-icon", this).html('<img src="assets/img/icons/mailbox.svg" alt="" class="m-auto">')
    } else {
      $(".timeline-icon", this).html('<img src="assets/img/icons/mailbox-lock.svg" alt="" class="m-auto">')
    }
  })
}
function updateCountdown() {
  const targetDate = new Date("2026-01-15T00:00:00+08:00")
  const daysLeftFromNow = Math.ceil((targetDate - new Date()) / (24 * 60 * 60 * 1000))
  $('.submission-deadline').text(daysLeftFromNow)
  const totalDays = Number(30)
  const dayPassed = Math.max(totalDays - daysLeftFromNow, 0)
  const progress = Math.min(Math.round(dayPassed / totalDays * 100), 100)
  console.log("progresss", progress)
  $('.submission-deadline-progress').css('width', `${progress}%`)
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

  console.log(i18nzh)

  // Fetch English translations
  fetch('assets/i18n/en.json?v=1')
    .then(res => res.json())
    .then(enTranslations => {
      // Initialize i18next
      i18next.init({
        lng: 'zh',
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
  updateCountdown()
})
