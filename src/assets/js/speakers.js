let schedule
$(function () {
  fetch('assets/data/schedule.json')
    .then(response => response.json())
    .then(data => {
      schedule = data
      hash = window.location.hash
      if (hash) {
        $('.speaker[data-id="' + hash.substring(1) + '"]').click()
      }
    })
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
