const storage = window.sessionStorage
/*
if(!storage.getItem("userLang")) {
  var userLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
  userLanguage = userLanguage.toLowerCase();
  console.log(userLanguage);
  if (userLanguage.includes('zh-hant') || userLanguage.includes('zh-tw') || userLanguage.includes('zh-hk') 
  || userLanguage.includes('zh-hans') || userLanguage.includes('zh-cn') || userLanguage.includes('zh')) {
    storage.setItem("userLang", "zh");
  } else {
    storage.setItem("userLang", "en");
    window.location.href="/2024/en";
  }
} else if(storage.getItem("userLang") === 'en') {
  window.location.href="/2024/en";
}*/

const i18n = $.i18n()
let i18nzh = {}

$('#cookie-agree a.btn').on('click', function (e) {
  e.preventDefault()
  storage.setItem('agreeCookie', true)
  $('#cookie-agree').addClass('hidden')
})

$('select#lang-select').on('change', function (e) {
  console.log(e)
  let lang = $(this).val()
  i18n.locale = lang
  $('body').i18n()
})

$(function () {
  if (!storage.getItem('agreeCookie')) {
    $('#cookie-agree').removeClass('hidden')
  }

  $('[data-i18n]').each(function () {
    let key = $(this).attr('data-i18n')
    let text = $(this).text()
    i18nzh[key] = text
  })

  i18n.load({
    zh: i18nzh,
    en: 'assets/i18n/en.json'
  })
})

$(window).on('load', function (e) {
  $('body').css('overflow', 'unset')
  $('#loading').addClass('scale')
  setTimeout(function () {
    $('#loading').addClass('fadeout')
  }, 1000)
})
