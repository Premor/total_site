
// const C_FIZ = `fiz`;
// const C_DOC = `doc`;
// const C_LAW = `law`;
// const C_PORT = `port`;
// let CLICKED = ``;
// let CHOSEN = '';

// let practics;
// function get_practics(callback){
//     AJAX('GET /api/practics/', '',callback
//     //(res)=>{
//     //    practics = res;
//     //}
// );
// }

// $(document).ready(function() { 
//     get_practics((res)=>{
//         practics = res;
//     /*on main - replaces from practice block */
//     $('.fiz_block').on('click',function(){
//         window.location.replace('/practice?practice=fiz')
//     });
//     $('.port_block').on('click',function(){
//         window.location.replace('/practice?practice=port')
//     });
//     $('.doc_block').on('click',function(){
//         window.location.replace('/practice?practice=doc')
//     });
//     $('.law_block').on('click',function(){
//         window.location.replace('/practice?practice=law')
//     })
//     /**
//      * "CHANGE_CATEGORY" sets handler when elements are on left side.
//      * @param {string} CLICKED type of icon (fiz, port, doc, law)
//      * @param {string} NUM number of icon (2,3)
//      */
//     function CHANGE_CATEGORY(CLICKED,NUM) {
//         $(`.${CLICKED}${NUM}_block`).on(`click`, function () {
//             console.log(CHOSEN)
//             $(this).css(`background`, `#ba0800`)
//             $(this).children(`.${CLICKED}2`).css(`background`, `url(/img/${CLICKED}.png)`)
//             $(this).children(`p`).css(`color`,`#ffffff`)
//             switch (`${CHOSEN}`) {
//                 /*case `${C_FIZ}2`: 
//                     $(`.${C_FIZ}2_block`).css(`background`, `#ffffff`)
//                     $(`.${C_FIZ}2_block`).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}2.png)`)
//                     $(`.${C_FIZ}2_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 case `${C_LAW}2`: 
//                     $(`.${C_LAW}2_block`).css(`background`, `#ffffff`)
//                     $(`.${C_LAW}2_block`).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}2.png)`)
//                     $(`.${C_LAW}2_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 case `${C_DOC}2`: 
//                     $(`.${C_DOC}2_block`).css(`background`, `#ffffff`)
//                     $(`.${C_DOC}2_block`).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}2.png)`)
//                     $(`.${C_DOC}2_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 case `${C_PORT}2`: 
//                     $(`.${C_PORT}2_block`).css(`background`, `#ffffff`)
//                     $(`.${C_PORT}2_block`).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}2.png)`)
//                     $(`.${C_PORT}2_block`).children(`p`).css(`color`,`#181818`)
//                     break;*/
//                 case `${C_PORT}3`:
//                     $(`.${C_PORT}3_block`).css(`background`, `#ffffff`)
//                     $(`.${C_PORT}3_block`).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}2.png)`)
//                     $(`.${C_PORT}3_block`).children(`p`).css(`color`,`#181818`)
//                 case `${C_FIZ}3`:
//                     $(`.${C_FIZ}3_block`).css(`background`, `#ffffff`)
//                     $(`.${C_FIZ}3_block`).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}2.png)`)
//                     $(`.${C_FIZ}3_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 case `${C_DOC}3`:
//                     $(`.${C_DOC}3_block`).css(`background`, `#ffffff`)
//                     $(`.${C_DOC}3_block`).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}2.png)`)
//                     $(`.${C_DOC}3_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 case `${C_LAW}3`:
//                     $(`.${C_LAW}3_block`).css(`background`, `#ffffff`)
//                     $(`.${C_LAW}3_block`).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}2.png)`)
//                     $(`.${C_LAW}3_block`).children(`p`).css(`color`,`#181818`)
//                     break;
//                 }
//             console.log(CHOSEN);
//             CHOSEN = `${CLICKED}${NUM}`; //Chosen - our previous element.
//         })
//     }

//     $(`.${C_FIZ}2_block`).on(`click`,function (){//Hanlder if U clicked on 'fiz' in hor. line
//         $(`.pr_page`).css(`position`,`relative`);
//         $(`.pr_page`).css(`z-index`,`0`);
//         $(this).addClass(`prev`);
//         CHOSEN=`${C_FIZ}2`
//         $(this).css(`z-index`,`50`)
//         $(this).animate({left: `-15.8%`},700);
//         $(this).css(`background`, `#ba0800`)
//         $(this).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}.png)`)
//         $(this).children(`p`).css(`color`,`#ffffff`)
//         $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
//         setTimeout(() => {
//             $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
//         setTimeout(() => {
//             $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
//         setTimeout(() => {
//             $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         /*vertical animation*/

//         setTimeout(() => {
//             $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
//             $(`.${C_PORT}3_block`).animate({bottom: `-105%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
//             $(`.${C_DOC}3_block`).animate({bottom: `-205%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
//             $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
//         }, 700);
//         $(this).unbind(`click`);

//         CHANGE_CATEGORY(`${C_FIZ}`,2);

//     });

//     $(`.${C_PORT}2_block`).on(`click`,function(){//Hanlder if U clicked on 'port' in hor. line
//         $(`.pr_page`).css(`position`,`relative`);
//         $(`.pr_page`).css(`z-index`,`0`);
//         CHOSEN = `${C_PORT}2`;
//         $(this).addClass(`prev`);
//         $(this).css(`z-index`,`50`)
//         $(this).animate({left: `-32.5%`},700);
//         $(this).css(`background`, `#ba0800`)
//         $(this).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}.png)`)
//         $(this).children(`p`).css(`color`,`#ffffff`)
        
//         $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
//         setTimeout(() => {
//             $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
//         setTimeout(() => {
//             $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
//         setTimeout(() => {
//             $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         /*vertical animation*/

//         setTimeout(() => {
//             $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
//             $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
//             $(`.${C_DOC}3_block`).animate({bottom: `-205%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
//             $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
//         }, 700);
//         $(this).unbind(`click`);

//         CHANGE_CATEGORY(`${C_PORT}`,2);
//     });


//     $(`.${C_DOC}2_block`).on(`click`,function(){//Hanlder if U clicked on 'doc' in hor. line
//         $(`.pr_page`).css(`position`,`relative`);
//         $(`.pr_page`).css(`z-index`,`0`);
//         CHOSEN = `${C_DOC}2`;
//         $(this).addClass(`prev`);
//         $(this).css(`z-index`,`50`)
//         $(this).animate({left: `-49.2%`},700);
//         $(this).css(`background`, `#ba0800`)
//         $(this).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}.png)`)
//         $(this).children(`p`).css(`color`,`#ffffff`)
        
//         $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
//         setTimeout(() => {
//             $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
//         setTimeout(() => {
//             $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
//         setTimeout(() => {
//             $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         /*vertical animation*/

//         setTimeout(() => {
//             $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
//             $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
//             $(`.${C_PORT}3_block`).animate({bottom: `-205%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
//             $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
//         }, 700);

//         $(this).unbind(`click`);

//         CHANGE_CATEGORY(`${C_DOC}`,2);

//     });

//     $(`.${C_LAW}2_block`).on(`click`,function(){//Hanlder if U clicked on 'law' in hor. line
//         $(`.pr_page`).css(`position`,`relative`);
//         $(`.pr_page`).css(`z-index`,`0`);
//         $(this).css(`z-index`,`50`)
//         $(this).addClass(`prev`);
//         CHOSEN = `${C_LAW}2`;
//         $(this).animate({left: `-65.8%`},700);
//         $(this).css(`background`, `#ba0800`)
//         $(this).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}.png)`)
//         $(this).children(`p`).css(`color`,`#ffffff`)
        
//         $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
//         setTimeout(() => {
//             $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
//         setTimeout(() => {
//             $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
//         setTimeout(() => {
//             $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
//         }, 700);

//         /*vertical animation*/

//         setTimeout(() => {
//             $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
//             $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
//             $(`.${C_PORT}3_block`).animate({bottom: `-205%`},700);
//         }, 700);

//         setTimeout(() => {
//             $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
//             $(`.${C_DOC}3_block`).animate({bottom: `-305%`},700);
//         }, 700);

//         $(this).unbind(`click`);

//         CHANGE_CATEGORY(`${C_LAW}`,2);
//     });
    

//     lvl1_handler(C_FIZ, 3)
//     lvl1_handler(C_PORT, 3)
//     lvl1_handler(C_DOC, 3)
//     lvl1_handler(C_LAW, 3)

//     CHANGE_CATEGORY(`${C_FIZ}`,3);
//     CHANGE_CATEGORY(`${C_PORT}`,3);
//     CHANGE_CATEGORY(`${C_DOC}`,3);
//     CHANGE_CATEGORY(`${C_LAW}`,3);

//     /** check triger for GET arguments */
//     let url = window.location;
//     let searchParams = new URLSearchParams(url.search.substring(1));

//     let practice = searchParams.get("practice");
//     //loc = searchParams.get("location");
//     let target;
//     let search = searchParams.get("search");
//     if (search) {
//         target = search_practice(search);
//         if (target){
//             $(`.${target.lvl1}3_block`).trigger('click');
            
//             $('.qwe').children('.lvl_2')[target.lvl2Index].click()//.trigger('click');//practics[target.lvl1].[target.lvl2Index].name
//         }
//     }

//     if (practice) switch(practice){
//         case 'port':$('.port3_block').trigger('click');break;
//         case 'fiz':$('.fiz3_block').trigger('click');break;
//         case 'doc':$('.doc3_block').trigger('click');break;
//         case 'law':$('.law3_block').trigger('click');break;
//     }
//     console.log("practice=" + practice);

// });
// });


// function lvl2_handler(prevName) {
//     $(`.lvl_2`).on(`click`, function(){
//         that = $(this).html();
//         $('.lvl_2').css('color', '#181818')
//         $(this).css('color', 'red')
//         $('.qwe3rdlvl').html('');
//         nexted = get_3rd_lvl(prevName,that);
//         for (i of nexted) {
//             $('.qwe3rdlvl').append(`<p>${i}</p>`)
//             //$('.qwe3rdlvl').css('display','block')
//             //$('.qwe3rdlvl').css('z-index','300')
//             //$(`.${prevName}2_block`).css('left','-18%')
//             //$('.qwe3rdlvl').css('left','15%')
//             //$('.qwe3rdlvl').css('top','5%')
//         }
//     })
// }
$(document).ready(function(){
    $('.lvl1_click, .lvl2_click').on('click',function() {
        var el = $(this).parent('li').children('ul');
        el.slideToggle(400, 'linear', function() {
           el.css("position","relative");
        })
    })
});