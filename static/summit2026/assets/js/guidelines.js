$(function () {
  /**
   * =======================
   * 議程形式分類
   * =======================
   */
  const $agendaBoxes = $('.agenda-box');
  const DURATION = 250;

  $agendaBoxes.hide().removeClass('is-active');
  $('#agenda-box1').show().addClass('is-active');

  function showAgendaBox(selector) {
    const $next = $(selector);
    const $current = $agendaBoxes.filter('.is-active');

    if (!$next.length) return;
    if ($current[0] === $next[0]) return;

    $agendaBoxes.stop(true, true);

    $current.fadeOut(DURATION, function () {
      $current.removeClass('is-active');
      $next.fadeIn(DURATION, function () {
        $next.addClass('is-active');
      });
    });
  }

  $('.agenda-tab').on('click', function () {
    showAgendaBox($(this).data('target'));
  });

  /**
   * =======================
   * FAQ
   * =======================
   */
  function showFaqContent(selector) {
    const $target = $(selector);
    $target[0].clientHeight > 0 ? $target.slideUp() : $target.slideDown();
  }
  $('.faq-btn').on('click', function () {
    showFaqContent($(this).data('target'));
  });
});
