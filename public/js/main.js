$(document).ready(function(){
    $('.slick_slider').slick({  
        nextArrow: '<i class="fa fa-angle-right next-but"></i>',
        prevArrow: '<i class="fa fa-angle-left prev-but"></i>',
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
  });
