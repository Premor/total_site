$(document).ready(function(){
    $('.slick_slider').slick({  
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        autoplay: true,
        autoplaySpeed: 6000
    });
    $('.events_to_publ').click(()=> {
        window.location.replace('/publication')
    })
  });
