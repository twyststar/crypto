//B.L.
var sentFormat = function(words) {
  var format = words.replace(/[^A-Za-z]/g, '').toLowerCase();
  return format;
};

var findColNum = function(colNum) {
  var roundedCol = Math.round(Math.sqrt(colNum));
  return roundedCol;
};

var findRowsNum = function(rowNum) {
  var rowCeil = Math.ceil(Math.sqrt(rowNum));
  return rowCeil;
};

  var splitEvery = function(str, n)
{
  var arr = new Array;
  for (var i = 0; i < str.length; i += n)
  {
      arr.push(str.substr(i, n));
  }
  var arr = arr.join(" ");
  return arr;
};

var cryptize = function(sent) {
  var preppedSent = sentFormat(sent);
  var sentLength = preppedSent.length;
  var columns = findColNum(sentLength);
  var rows = findRowsNum(sentLength);
  var jumbled = [];
  var joined = [];
  var almost = [];
  var here = [];
  for (var i = 0; i < rows; i++ ) {
    for (j = i; j < sentLength; j += columns) {
      var jumbled = preppedSent.slice(j, (j+1));
      joined.push(jumbled);
      var almost = joined.join("");

    }
    var here = splitEvery(almost, 5);
    console.log(typeof here);
  }
  return here;
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
