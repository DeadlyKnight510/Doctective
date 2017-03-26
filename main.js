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
      $('#info').attr("hidden", false);
      // scrollElement(document.getElementsByTagName('body')[0], 200, 1.5);
  })
})

scrollElement = function (element, scrollPosition, duration) {
  var style = element.style;

  // setup CSS transition duration and easing function
  style.webkitTransition =
        style.transition = duration + 's';
  style.webkitTransitionTimingFunction =
        style.TransitionTimingFunction = 'ease-in-out';

  // use translate3d to force hardware acceleration
  style.webkitTransform =
        style.Transform = 'translate3d(0, ' + -scrollPosition + 'px, 0)';
}

scrollBody = scrollElement.bind(null, document.getElementsByTagName('body')[0]);
