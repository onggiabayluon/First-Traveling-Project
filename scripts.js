$(document).ready(
  function () {

    //smooth scroll
    $('a').click(function (event) {
      $('html, body, .wrapper').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1800);
      event.preventDefault();
    });
    
           //fix bug stuff
        //   $('.info-container').waypoint(
        //     function(direction){
        //         if(direction == "down")
        //         {
        //           $('.wrapper').animate({ scrollTop: 0 }, "fast");
        //         }

        //     }, {
        //         offset: '100px'
        //     }
        // )
  }
)
