$(document).ready(
  function () {

    //smooth scroll
      $('a').click(function(event){
        $('.wrapper').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1500);
        event.preventDefault();
    });
  }
)
