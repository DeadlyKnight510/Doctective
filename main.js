$(document).ready(function(){
  $('#firstForm').submit(function(e) {
      e.preventDefault();
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var zipCode = $('#zipCode').val();
      if (firstName === "" || firstName === null) {
        Materialize.toast('Please enter your physician\'s first name!', 3000, 'rounded');
        return;
      }
      if (lastName === "" || lastName === null) {
        Materialize.toast('Please enter your physician\'s last name!', 3000, 'rounded');
        return;
      }
      if (zipCode === "" || zipCode === null) {
        Materialize.toast('Please enter your physician\'s zip code!', 3000, 'rounded');
        return;
      }
      // clear forms
      $('#firstName').val("");
      $('#lastName').val("");
      $('#zipCode').val("");

      // process data
      var csv;
      $.ajax({
          type: 'POST',
          url: 'redis.php',
          data: 'autocomplete='+document.getElementById("lastName").value+','+document.getElementById("firstName").value+','+document.getElementById("zipCode").value,
          success: function(data) {
              csv = data;
          }
      });
      console.log(csv);
      var data = csv2array(csv,',');
      console.log(data);
      document.getElementById('name').innerHTML = "<b>Name</b>: " + data[2] + " " + data[3] + ". " + data[1];
      document.getElementById('specialty').innerHTML = "<b>Specialty</b>: " + data[12];
      document.getElementById('npi').innerHTML = "<b>National Provider Identifier</b>: " + data[0];
      document.getElementById('address').innerHTML = "<b>Workplace Address</b>: " + data[6] + ", " + data[8] + ", " + data[9].substring(0,5) + ", " + data[10] + ", " + data[11];

      // info accordion fadein
      $('#info').css('opacity', 1);
  })
})
function csv2array(data, delimeter) {
  // Retrieve the delimeter
  if (delimeter == undefined)
    delimeter = ',';
  if (delimeter && delimeter.length > 1)
    delimeter = ',';

  // initialize variables
  var newline = '\n';
  var eof = '';
  var i = 0;
  var c = data.charAt(i);
  var row = 0;
  var col = 0;
  var array = new Array();

  while (c != eof) {
    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i); // read next char
    }

    // get value
    var value = "";
    if (c == '\"') {
      // value enclosed by double-quotes
      c = data.charAt(++i);

      do {
        if (c != '\"') {
          // read a regular character and go to the next character
          value += c;
          c = data.charAt(++i);
        }

        if (c == '\"') {
          // check for escaped double-quote
          var cnext = data.charAt(i+1);
          if (cnext == '\"') {
            // this is an escaped double-quote.
            // Add a double-quote to the value, and move two characters ahead.
            value += '\"';
            i += 2;
            c = data.charAt(i);
          }
        }
      }
      while (c != eof && c != '\"');

      if (c == eof) {
        throw "Unexpected end of data, double-quote expected";
      }

      c = data.charAt(++i);
    }
    else {
      // value without quotes
      while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
        value += c;
        c = data.charAt(++i);
      }
    }

    // add the value to the array
    if (array.length <= row)
      array.push(new Array());
    array[row].push(value);

    // skip whitespaces
    while (c == ' ' || c == '\t' || c == '\r') {
      c = data.charAt(++i);
    }

    // go to the next row or column
    if (c == delimeter) {
      // to the next column
      col++;
    }
    else if (c == newline) {
      // to the next row
      col = 0;
      row++;
    }
    else if (c != eof) {
      // unexpected character
      throw "Delimiter expected after character " + i;
    }

    // go to the next character
    c = data.charAt(++i);
  }

  return array;
}
