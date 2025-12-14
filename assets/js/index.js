setInterval(() => {
  $("#top-block .stool").each(function () {
    setTimeout(() => {
      $(this).addClass("animate");
      setTimeout(() => {
        $(this).removeClass("animate");
      }, 1000)
    }, Math.random() * 2000);
  })
}, 2000)