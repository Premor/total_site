$(document).ready(() => {
    timeline_click()
  })
  
  function timeline_click () {
    let timeline_blocks = $('.timeline__block');
    $('.timeline__block').click(function () {
      if ($(this).hasClass('active')) {
        $(this).children('.timeline__dot').transition({
              scale: 1.1,
              backgroundColor: "#7a0500"
            }, 300);
        $(this).removeClass('active');
      } else {
        for(let i=0; i < timeline_blocks.length; i++) {
          let jel = $(timeline_blocks[i]);
          if (jel.hasClass('active')) { //если какие-то из элементов включены
            jel.children('.timeline__dot').transition({
              scale: 1.1,
              backgroundColor: "#7a0500"
            }, 300);
            jel.removeClass('active');
          }
        }
        $('.timeline__dot',this).transition({
          scale: 1.5,
          backgroundColor: "#ffffff"
        }, 300);
        $(this).addClass('active');
      }
    })
  }