$(document).ready(() => {
//highlight nav element on scroll
var sections = $('.container'),
 nav = $('.nav');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('activeMenuItem');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('activeMenuItem');
    }
  })
})

});
