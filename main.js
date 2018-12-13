$(document).ready(() => {
//highlight nav element on scroll
let $sections = $('.container');
let $nav = $('.nav');

$(window).on('scroll', () => {
  let $cur_pos = $(this).scrollTop();

  $sections.each(() => {
    let $top = $(this).offset().top,
        $ottom = $top + $(this).outerHeight();

    if ($cur_pos >= $top && $cur_pos <= $bottom) {
      $nav.find('a').removeClass('activeMenuItem');
      $nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('activeMenuItem');
    }
  })
})

$('.button-wrap').on('click', () => {
  $('.button').toggleClass('open');
});

$('#hamburger-button').on('click', () => {
  $('#hamburger-button').toggleClass('open');
  $('.nav').toggleClass('open');
  $('.container').toggleClass('open');
});

});
