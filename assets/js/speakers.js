let schedule
$(function () {
  fetch('assets/data/schedule.json')
    .then(response => response.json())
    .then(data => {
      schedule = data
      hash = window.location.hash
      if (hash) {
        $('.speaker[data-id="' + hash.substring(1) + '"]').trigger('click')
      }
    })
})
