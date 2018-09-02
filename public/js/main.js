$(document).ready(function(){
    $('.slick_slider').slick({  
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.slick_slider').on('swipe', function(event, slick, direction){
        $('.slick_slider').slick('slickPlay');
      });
    $('.slick-prev, .slick-next').click(function() {
        $('.slick_slider').slick('slickPlay');
    })

    $('.events_to_publ').click(()=> {
        window.location.replace('/publication')
    })
    $('.events_to_timeline').click(()=> {
        window.location.replace('/timeline')
    })

    $('.news_tag').click(function() {
        let str = document.location.href;
        let pos = 0;
        var foundPosPub= str.indexOf("publication",pos);
        
    })

    $("[data-fancybox]").fancybox({
        transitionEffect: "slide",
        transitionDuration: 700
    });
  });
