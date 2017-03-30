//B.L.
var sentFormat = function(words) {
  var steve = words.replace(/[^A-Za-z]/g, '').toLowerCase();

};


var cryptize = function(sent) {

};


//U.I
$(document).ready(function() {

$('form#form1').submit(function(event) {
  event.preventDefault();
  var userSent = ($('input#input').val());
  var userFinal = sentFormat(userSent);

  console.log(userFinal);
  $('h2#result').text(userFinal);

});//prevent default button

});// document ready
