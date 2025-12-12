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
    $('.agenda-tab.border-neutral-600').removeClass('border-neutral-600');
    $(this).addClass('border-neutral-600');
  });

  $('#agenda-select').on('change', function () {
    showAgendaBox($(this).val());
  })

  /**
   * =======================
   * FAQ
   * =======================
   */
  const FAQ_DURATION = 300;
  $('.faq-btn').on('click', function () {
    const $target = $($(this).data('target'));
    const isOpen = $target.css('display') !== 'none';
    if (isOpen) {
      $target.slideUp(FAQ_DURATION)
      $(this).removeClass('active')
    } else {
      $target.slideDown(FAQ_DURATION)
      $(this).addClass('active')
    }
  });
});
