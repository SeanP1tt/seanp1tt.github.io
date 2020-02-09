$(document).ready(() => {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function encrypt(){
  let $text = $('#encrypt');
  let $result = $('#result');
  let $shift = $('#encryptTab input');
  let newText = "";
  let $char;
  for ($char in $text.val()) {
    let index = alphabet.indexOf($text.val()[$char]);
    if(index <0){
      newText+= $text.val()[$char];
    }
    else {
      index = (index+parseInt($shift.val(),10)>alphabet.length-1)? index+parseInt($shift.val(),10)-(alphabet.length) : index+parseInt($shift.val(),10);
      newText+= alphabet[index];
    }
  }
  $result.val(newText);
}

function decrypt(){
  let $text = $('#cipher');
  let $result = $('#decrypt');
  let $shift = $('#decryptTab input');
  let newText = "";
  let $char;
  for ($char in $text.val()){
    let index = alphabet.indexOf($text.val()[$char]);
    if(index <0){
      newText+= $text.val()[$char];
    }
    else {
      index = (index-parseInt($shift.val(),10)<0)? index-parseInt($shift.val(),10)+(alphabet.length) : index-parseInt($shift.val(),10);
      newText+= alphabet[index];
    }
  }
  $result.val(newText);
}

$('#encryptTab button').on('click', () => {
  encrypt();
});

$('#decryptTab button').on('click', () => {
  decrypt();
});

$('.tab button').on('click', function() {
  let tabId = $(this).attr('data-tab');
  $('.tab button').removeClass('active');
  $(this).addClass("active");
  $('.tabcontent').removeClass('active');
  if (tabId ==1 ){
    $("#encryptTab").addClass('active');
  } else {
    $("#decryptTab").addClass('active');
  }
});

});
