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
      document.getElementById('name').innerHTML = "<b>Name</b>: Bob I. Jones, MD";
      document.getElementById('specialty').innerHTML = "<b>Specialty</b>: Cardiology";
      document.getElementById('npi').innerHTML = "<b>National Provider Identifier</b>: 219742";
      document.getElementById('address').innerHTML = "<b>Workplace Address</b>: 1234 ABC Ln, Sunnyvale, CA, 91111";

      // info accordion fadein
      $('#info').css('opacity', 1);
  })
})
