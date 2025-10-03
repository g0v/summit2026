// Global preferences
const storage = window.sessionStorage
const i18n = $.i18n()
const setLocale = (function (lang) {
  let current = document.body.lang || 'zh-Hant-TW'
  i18n.locale = lang
  document.body.lang = (lang === 'en' ? 'en-TW' : 'zh-Hant-TW')
  if (!current.startsWith(lang))
    $(document.body).i18n()
  $('.agenda-grid').css('--agenda-header-height', ($('#agenda-header').outerHeight()+10) + 'px')
})

$('#cookie-notice button').on('click', function (e) {
  storage.setItem('agreeCookie', true)
  $('#cookie-notice').addClass('hidden')
})

$('select#lang-select').on('change', function (e) {
  let lang = $(this).val()
  setLocale(lang)
  storage.setItem("userLang", lang)
})

$(function () {
  if (!storage.getItem('agreeCookie')) {
    $('#cookie-notice').removeClass('hidden')
  }

  let i18nzh = {}
  $('[data-i18n]').each(function () {
    let key = $(this).attr('data-i18n').replace(/\[.*?\]/g, '');
    let text = $(this).html()
    i18nzh[key] = text
  })

  i18n.load({
    zh: i18nzh,
    en: 'assets/i18n/en.json?v='+'1'
  }).done(() => {
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

    $('select#lang-select').val(lang)
    setLocale(lang)
  })
})

// UI interactions & events
$(window).on('load', function (e) {
  $('body').css('overflow', 'unset')
  $('#loading').addClass('scale')
  setTimeout(function () {
    $('#loading').addClass('fadeout')
  }, 1000)
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

$(document).on('keydown', function (e) {
  if (e.key === 'Escape' && $('#modal').hasClass('show')) {
    $('#modal .modal-close').click()
  }
})
