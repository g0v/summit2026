let schedule
let state = {}

$(function () {
  let currentTime = new Date();
  let targetTime = new Date('2024/05/05');
  if (currentTime < targetTime) {
    $('#day1').trigger('click')
  } else {
    $('#day2').trigger('click')
  }
  $('#room-btn-group button[data-id="all"]').trigger('click')
  fetch('assets/data/schedule.json')
    .then(response => response.json())
    .then(data => {
      schedule = data
      hash = window.location.hash
      if (hash) {
        $('.agenda-session[data-id="' + hash.substring(1) + '"]').click()
      }
    })
})

$("[data-day='2']").addClass('hidden')

$('#day1').click(function () {
  $("[data-day='1']").removeClass('hidden')
  $("[data-day='2']").addClass('hidden')
  $('#day').text('Day 1')
  $('#day1').addClass('active')
  $('#day2').removeClass('active')
  $('html, body').animate({ scrollTop: 0 }, 'fast')
  state['day'] = 1
});

$('#day2').click(function () {
  $("[data-day='1']").addClass('hidden')
  $("[data-day='2']").removeClass('hidden')
  $('#day').text('Day 2')
  $('#day2').addClass('active')
  $('#day1').removeClass('active')
  $('html, body').animate({ scrollTop: 0 }, 'fast')
  state['day'] = 2
});

$('#tag-group button').on('click', function (e) {
  e.preventDefault()
  let target = $(this).attr('data-target')
  if (!$(this).siblings('button.filtered')[0]) {
    $(`.agenda-session[data-tags]`).addClass('filtered')
    $(`.agenda-session[data-tags*="${target}"]`).removeClass('filtered')
    $(this).siblings('button').addClass('filtered')
    $(this).removeClass('filtered')
  } else if (!$(this).siblings('button:not(.filtered)')[0]) {
    $(`.agenda-session`).removeClass('filtered')
    $(this).siblings('button').removeClass('filtered')
    $(this).removeClass('filtered')

  } else {
    $(this).toggleClass('filtered')
    if ($(this).hasClass('filtered')) {
      $(`.agenda-session[data-tags*="${target}"]`).addClass('filtered')
    } else {
      $(`.agenda-session[data-tags*="${target}"]`).removeClass('filtered')
    }
  }
})

$('#room-btn-group button').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active')
  $(this).siblings('button').removeClass('active')
  let room = $(this).attr('data-id')
  state['room'] = room
  $('.agenda-list .session-block').addClass('hidden_2')
  $('.agenda-list .session-time').addClass('hidden_2')
  if (room == 'all') {
    $('.agenda-list .session-block').removeClass('hidden_2')
    $('.agenda-list .session-time').removeClass('hidden_2')
  } else {
    $('.agenda-list .session-block[data-broadcast="true"]').removeClass('hidden_2')
    $(`.agenda-list .session-block[data-rooms*="${room}"]`).removeClass('hidden_2')
  }
})

$('.agenda-session[data-id]').on('click', function (e) {
  let currentLang = i18n.locale
  let id = $(this).data('id')
  history.replaceState(null, null, window.location.pathname + '#' + id);
  let session = schedule['sessions'].filter(session => session['id'] == id)[0]
  let bodyTmplDom = $(`
        <div>
          <div class="agenda-speaker"></div>
          <div class="agenda-description"></div>
        </div>
      `)
  session['speakers'].forEach(sid => {
    let speaker = schedule['speakers'].filter(speaker => speaker['id'] == sid)[0]
    $('.agenda-speaker', bodyTmplDom).append(`
          <div class="flex mb-4">
            <img src="${speaker['avatar']}" class="w-20 h-20 rounded-full shrink-0">
            <div class="font-bold text-xl ms-4 my-auto">${speaker[currentLang]['name']}</div>
          </div>
        `)
  })
  $('.agenda-speaker', bodyTmplDom).append('<hr>')
  $('.agenda-description', bodyTmplDom).html(marked.parse(session[currentLang]['description']))
  $('#modal .head-group h4').text(session[currentLang]['title'])
  let tagGroup = $('.tag-group', this)
  $('#modal .tag-group').html(tagGroup.clone())
  let start = new Date(session['start'])
  let end = new Date(session['end'])
  let startHours = String(start.getHours()).padStart(2, '0');
  let startMinutes = String(start.getMinutes()).padStart(2, '0');
  let endHours = String(end.getHours()).padStart(2, '0');
  let endMinutes = String(end.getMinutes()).padStart(2, '0');

  let info = `<div>${start.getMonth() + 1}/${start.getDate()}  ${startHours}:${startMinutes} ~ ${endHours}:${endMinutes} @ ${
    session['broadcast']?session['broadcast'].join(','):session['room']
  }</div>`;
  $('#modal .info-group').html(info)
  $('#modal .modal-body').html(bodyTmplDom)
  $('#modal .modal-body').scrollTop(0)
  $('#modal .modal-body a').filter(function () {
    return this.hostname != window.location.hostname;
  }).attr('target', '_blank');
  $('body').addClass('overflow-hidden')
  $('#modal').addClass('show')
})

$('#tag-group-toggle').on('click', function (e) {
  e.preventDefault()
  $('#tag-group').toggleClass('show')
})

$('#modal .modal-close').on('click', function (e) {
  e.preventDefault()
  $('body').removeClass('overflow-hidden')
  $('#modal').removeClass('show')
  history.replaceState(null, null, window.location.pathname);
})

$(document).on('keydown', function (e) {
  if (e.key === 'Escape') {
    $('#modal .modal-close').click()
  }
});
