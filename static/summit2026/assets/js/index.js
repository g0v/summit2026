$(() => {
  const currentTimestamp = Date.now()
  const targetTimestamp = new Date('2026/01/05').getTime()
  const diff = targetTimestamp - currentTimestamp
  const deltaDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  $('#timer span').html(deltaDays)
})