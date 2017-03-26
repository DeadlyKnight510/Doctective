$(document).ready(function(){
  $('#firstForm').submit(function(e) {
      e.preventDefault();
      var firstName = $('#firstName').val().toUpperCase();
      console.log(firstName);
      var lastName = $('#lastName').val().toUpperCase();
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

      $.ajax({
          type: 'POST',
          url: 'redis.php',
          data: 'autocomplete='+lastName+','+firstName+','+zipCode,
          success: function(data) {
		          var output = data.split(',');
              if (output === undefined) {
                Materialize.toast('No physician with the entered combination of information was found.', 3000, 'rounded');
                return;
              }
              var indices = [0,1,2,3,6,8,9,10,11,12];
              for (var i in indices) {
                if (output[i] === undefined) {
                  Materialize.toast('No physician with the entered combination of information was found.', 3000, 'rounded');
                  return;
                }
              }
              document.getElementById('name').innerHTML = "<b>Name</b>: " + output[2] + " " + output[3] + ". " + output[1];
              document.getElementById('specialty').innerHTML = "<b>Specialty</b>: " + output[12];
              document.getElementById('npi').innerHTML = "<b>National Provider Identifier</b>: " + output[0];
              document.getElementById('address').innerHTML = "<b>Workplace Address</b>: " + output[6] + ", " + output[8] + ", " + output[9].substring(0,5) + ", " + output[10] + ", " + output[11];
              $('#info').css('opacity', 1);

          }
      });

      $.ajax({
          type: 'POST',
          url: 'redis.php',
          data: 'autocomplete='+zipCode,
          success: function(data) {
		  var output = data.split(',');
              if (output === undefined) {
                Materialize.toast('No pharmaceutical Open Payments data was found in the area.', 3000, 'rounded');
                return;
              }
              var indices = [0,1,2,3,6,8,9,10,11,12];
              for (var i in indices) {
                if (output[i] === undefined) {
                  Materialize.toast('No pharmaceutical Open Payments data was found in the area.', 3000, 'rounded');
			document.getElementById('reciever-address').innerHTML = "No data found."
                  return;
                }
              }
              document.getElementById('reciever-address').innerHTML = "<b>Payment Reciever Adress</b>: " + output[0] + ' ' + output[1]
              document.getElementById('healthcare-company-info').innerHTML = "<b>Healthcare Company: </b>" + output[3] + " <b>ID: </b> " + output[4]
              document.getElementById('drug').innerHTML = "<b>Drug of Interest</b>: " + output[9];
              document.getElementById('transaction').innerHTML = "<b>Transaction Info</b>: " + output[16] + " on " + output[17]
		}
      });
  })
})
