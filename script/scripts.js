$(document).ready(
  function () {

    //smooth scroll
    $('a').click(function (event) {
      $('.wrapper').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1400);
      event.preventDefault();
    });
    
  }
)
