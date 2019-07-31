$(document).ready(() => {
//highlight nav element on scroll
let $text = $('#encrypt');
let $button = $('button');

// $(window).on('scroll', () => {
//   let $cur_pos = $(this).scrollTop();
//
//   $sections.each(() => {
//     let $top = $(this).offset().top,
//         $ottom = $top + $(this).outerHeight();
//
//     if ($cur_pos >= $top && $cur_pos <= $bottom) {
//       $nav.find('a').removeClass('activeMenuItem');
//       $nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('activeMenuItem');
//     }
//   })
// })

$button.on('click', () => {
  let $line;
  for ($line in $text.val()) {
    console.log($text.val());
  }
});

});
