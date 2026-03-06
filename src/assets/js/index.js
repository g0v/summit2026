setInterval(() => {
  $("#top-block .stool-container").each(function () {
    setTimeout(() => {
      $(this).addClass("animate");
      $('.speech-bubble', this).addClass("animate");
      setTimeout(() => {
        $(this).removeClass("animate");
        $('.speech-bubble', this).removeClass("animate");
      }, 1000)
    }, Math.random() * 2000);
  })
}, 2000)
