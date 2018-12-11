$(document).ready(() => {//comnvert to scroll function
  //body.scroll
  //find the current container div
$('.container').hover(() => {
  let $id =  '#' + $(event.currentTarget).attr('id');
   $(".nav a").each(function() {
     if($(this).attr('href') == $id){
       $(this).addClass('activeMenuItem')
     }
   })
},
() => {
  let $id = '#' + $(event.currentTarget).attr('id');
  $(".nav a").each(function(i, v) {
    // console.log($(this).attr('href'));
    // console.log('id = ' + $id);
    if($(this).attr('href') == $id){
      console.log("found the id");
      $(this).removeClass('activeMenuItem')
    }
  })
})
$(window).on('scroll', () => {
  console.log($(this).attr('id'));
})

$(".nav a").each(function() {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('activeMenuItem');
    }
});
});
