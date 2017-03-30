//B.L.
var sentFormat = function(words) {
  var format = words.replace(/[^A-Za-z]/g, '').toLowerCase();
  return format;
};

var findColNum = function(colNum) {
  var roundedCol = Math.round(Math.sqrt(colNum));
  return roundedCol;
};



var cryptize = function(sent) {
  var preppedSent = sentFormat(sent);
  var sentLength = preppedSent.length;
  var testNum = findColNum(sentLength);
  // console.log(sentLength);
  return testNum;
};


//U.I
$(document).ready(function() {

$('form#form1').submit(function(event) {
  event.preventDefault();
  var userSent = ($('input#input').val());
  var userFinal = cryptize(userSent);

  console.log(userFinal);
  $('h4#result').text(userFinal);

});//prevent default button

});// document ready
