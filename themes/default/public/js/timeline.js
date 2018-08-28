$(document).ready(() => {
  let dates = $('.timeline__click_header');
  let names = $('.timeline__text');
  let dates_formatted = [];
  let data_parsed = {};
  $('#timeline__content').html('')
  for (let i = 0; i < names.length; i++) {
    dates_formatted[i] = (new Date($(dates[i]).html())).getFullYear();
    if (data_parsed[dates_formatted[i]] == undefined) {
      data_parsed[dates_formatted[i]] = [$(names[i]).html()];
    } else {
      data_parsed[dates_formatted[i]].push($(names[i]).html());
    }
  }

  let elementsToPublishment = [];
  let readyToPublishment = [];
  for (i in data_parsed) {
    let currentYearNames = data_parsed[i];
    elementsToPublishment += `
          <div class="row">
          <div class="h2 timeline__click_header col-md-12">${i}</div>`;
    for (let j = 0; j < currentYearNames.length; j++) {
      elementsToPublishment += `
        <div class="col-md-12 timeline__year_part">
        <div class="timeline__line"></div>
        <div class="timeline__block">
          <div class="timeline__dot"></div>
          <div class="timeline__text">${currentYearNames[j]}</div>
        </div>
        </div>`
    }

    elementsToPublishment += `</div>`

    $('#timeline__content').append(elementsToPublishment)

    elementsToPublishment = ``;
  }
  $('#timeline__content').css({
    'display': 'block'
  })
  timeline_year_click()
  timeline_click()

})


function timeline_year_click() {
  let timeline_headers = $('.timeline__click_header');
  $('.timeline__click_header').click(function () {
    let content = $(this).parent('.row').children('.timeline__year_part');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      content.slideUp();
    } else {
      for (let i = 0; i < timeline_headers.length; i++) {
        let jel = $(timeline_headers[i]);
        if (jel.hasClass('active')) {
          jel.parent('.row').children('.timeline__year_part').slideUp()
          jel.removeClass('active');
        }
      }
      content.slideDown();
      $(this).addClass('active');
    }
  })
}

function timeline_click() {
  let timeline_blocks = $('.timeline__block');
  $('.timeline__block').click(function () {
    if ($(this).hasClass('active')) {
      $(this).children('.timeline__dot').transition({
        scale: 1.9,
      }, 75);
      $(this).children('.timeline__dot').transition({
        scale: 1.5,
      }, 75);
    } else {
      for (let i = 0; i < timeline_blocks.length; i++) {
        let jel = $(timeline_blocks[i]);
        if (jel.hasClass('active')) { //если какие-то из элементов включены
          jel.children('.timeline__dot').transition({
            scale: 1.1,
            backgroundColor: "#7a0500"
          }, 300);
          jel.removeClass('active');
          $(`[nameofbody = "${jel.children('.timeline__text').html()}"]`).css({
            'display': 'none'
          });
        }
      }
      $('.timeline__dot', this).transition({
        scale: 1.5,
        backgroundColor: "#ffffff"
      }, 300);
      $(this).addClass('active');
      $(`[nameofbody = "${$(this).children('.timeline__text').html()}"]`).css({
        'display': 'block'
      });
    }
  })
}