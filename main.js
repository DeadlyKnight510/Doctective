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
      var data = $.csv.toArray(csv);

      document.getElementById('name').innerHTML = "<b>Name</b>: " + data[2] + " " + data[3] + ". " + data[1];
      document.getElementById('specialty').innerHTML = "<b>Specialty</b>: " + data[12];
      document.getElementById('npi').innerHTML = "<b>National Provider Identifier</b>: " + data[0];
      document.getElementById('address').innerHTML = "<b>Workplace Address</b>: " + data[6] + ", " + data[8] + ", " + data[9].substring(0,5) + ", " + data[10] + ", " + data[11];

      // info accordion fadein
      $('#info').css('opacity', 1);
  })
})
