const C_FIZ = `fiz`;
const C_DOC = `doc`;
const C_LAW = `law`;
const C_PORT = `port`;
let CLICKED = ``;

$(document).ready(function() {
    $('.fiz_block').on('click',function(){
        window.location.replace('/practice?practice=fiz')
    });
    $('.port_block').on('click',function(){
        window.location.replace('/practice?practice=port')
    });
    $('.doc_block').on('click',function(){
        window.location.replace('/practice?practice=doc')
    });
    $('.law_block').on('click',function(){
        window.location.replace('/practice?practice=law')
    })

    function CHANGE_CATEGORY(CLICKED,NUM) {
        $(`.${CLICKED}${NUM}_block`).on(`click`, function () {
            $(this).css(`background`, `#ba0800`)
            $(this).children(`.${CLICKED}2`).css(`background`, `url(/img/${CLICKED}.png)`)
            $(this).children(`p`).css(`color`,`#ffffff`)
            switch (`${CLICKED}${NUM}`) {
                case `${C_FIZ}2`: 
                    $(`.${C_FIZ}2_block`).css(`background`, `#ffffff`)
                    $(`.${C_FIZ}2_block`).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}2.png)`)
                    $(`.${C_FIZ}2_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_LAW}2`: 
                    $(`.${C_LAW}2_block`).css(`background`, `#ffffff`)
                    $(`.${C_LAW}2_block`).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}2.png)`)
                    $(`.${C_LAW}2_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_DOC}2`: 
                    $(`.${C_DOC}2_block`).css(`background`, `#ffffff`)
                    $(`.${C_DOC}2_block`).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}2.png)`)
                    $(`.${C_DOC}2_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_PORT}2`: 
                    $(`.${C_PORT}2_block`).css(`background`, `#ffffff`)
                    $(`.${C_PORT}2_block`).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}2.png)`)
                    $(`.${C_PORT}2_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_PORT}3`:
                    $(`.${C_PORT}3_block`).css(`background`, `#ffffff`)
                    $(`.${C_PORT}3_block`).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}2.png)`)
                    $(`.${C_PORT}3_block`).children(`p`).css(`color`,`#181818`)
                case `${C_FIZ}3`:
                    $(`.${C_FIZ}3_block`).css(`background`, `#ffffff`)
                    $(`.${C_FIZ}3_block`).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}2.png)`)
                    $(`.${C_FIZ}3_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_DOC}3`:
                    $(`.${C_DOC}3_block`).css(`background`, `#ffffff`)
                    $(`.${C_DOC}3_block`).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}2.png)`)
                    $(`.${C_DOC}3_block`).children(`p`).css(`color`,`#181818`)
                    break;
                case `${C_LAW}3`:
                    $(`.${C_LAW}3_block`).css(`background`, `#ffffff`)
                    $(`.${C_LAW}3_block`).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}2.png)`)
                    $(`.${C_LAW}3_block`).children(`p`).css(`color`,`#181818`)
                    break;
                }
            console.log(CHOSEN);
            CHOSEN = `${CLICKED}${NUM}`;
        })
    }

    $(`.${C_FIZ}2_block`).on(`click`,function (){
        $(`.pr_page`).css(`position`,`relative`);
        $(`.pr_page`).css(`z-index`,`0`);
        $(this).addClass(`prev`);
        CHOSEN=`${C_FIZ}2`
        $(this).css(`z-index`,`50`)
        $(this).animate({left: `-15.8%`},700);
        $(this).css(`background`, `#ba0800`)
        $(this).children(`.${C_FIZ}2`).css(`background`, `url(/img/${C_FIZ}.png)`)
        $(this).children(`p`).css(`color`,`#ffffff`)
        $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
        setTimeout(() => {
            $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
        setTimeout(() => {
            $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
        setTimeout(() => {
            $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
        }, 700);

        /*vertical animation*/

        setTimeout(() => {
            $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
            $(`.${C_PORT}3_block`).animate({bottom: `-105%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
            $(`.${C_DOC}3_block`).animate({bottom: `-205%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
            $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
        }, 700);
        $(this).unbind(`click`);

        CHANGE_CATEGORY(`${C_FIZ}`,2);

    });

    $(`.${C_PORT}2_block`).on(`click`,function(){
        $(`.pr_page`).css(`position`,`relative`);
        $(`.pr_page`).css(`z-index`,`0`);
        CHOSEN = `${C_PORT}2`;
        $(this).addClass(`prev`);
        $(this).css(`z-index`,`50`)
        $(this).animate({left: `-32.5%`},700);
        $(this).css(`background`, `#ba0800`)
        $(this).children(`.${C_PORT}2`).css(`background`, `url(/img/${C_PORT}.png)`)
        $(this).children(`p`).css(`color`,`#ffffff`)
        
        $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
        setTimeout(() => {
            $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
        setTimeout(() => {
            $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
        setTimeout(() => {
            $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
        }, 700);

        /*vertical animation*/

        setTimeout(() => {
            $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
            $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
            $(`.${C_DOC}3_block`).animate({bottom: `-205%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
            $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
        }, 700);
        $(this).unbind(`click`);

        CHANGE_CATEGORY(`${C_PORT}`,2);
    });


    $(`.${C_DOC}2_block`).on(`click`,function(){
        $(`.pr_page`).css(`position`,`relative`);
        $(`.pr_page`).css(`z-index`,`0`);
        CHOSEN = `${C_DOC}2`;
        $(this).addClass(`prev`);
        $(this).css(`z-index`,`50`)
        $(this).animate({left: `-49.2%`},700);
        $(this).css(`background`, `#ba0800`)
        $(this).children(`.${C_DOC}2`).css(`background`, `url(/img/${C_DOC}.png)`)
        $(this).children(`p`).css(`color`,`#ffffff`)
        
        $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
        setTimeout(() => {
            $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
        setTimeout(() => {
            $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_LAW}2_block`).animate({left: `-65.5%`},700);
        setTimeout(() => {
            $(`.${C_LAW}2_block`).css(`visibility`,`hidden`);
        }, 700);

        /*vertical animation*/

        setTimeout(() => {
            $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
            $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
            $(`.${C_PORT}3_block`).animate({bottom: `-205%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_LAW}3_block`).css(`visibility`,`visible`);
            $(`.${C_LAW}3_block`).animate({bottom: `-305%`},700);
        }, 700);

        $(this).unbind(`click`);

        CHANGE_CATEGORY(`${C_DOC}`,2);

    });

    $(`.${C_LAW}2_block`).on(`click`,function(){
        $(`.pr_page`).css(`position`,`relative`);
        $(`.pr_page`).css(`z-index`,`0`);
        $(this).css(`z-index`,`50`)
        $(this).addClass(`prev`);
        CHOSEN = `${C_LAW}2`;
        $(this).animate({left: `-65.8%`},700);
        $(this).css(`background`, `#ba0800`)
        $(this).children(`.${C_LAW}2`).css(`background`, `url(/img/${C_LAW}.png)`)
        $(this).children(`p`).css(`color`,`#ffffff`)
        
        $(`.${C_PORT}2_block`).animate({left: `-32.5%`},700);
        setTimeout(() => {
            $(`.${C_PORT}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_DOC}2_block`).animate({left: `-46.5%`},700);
        setTimeout(() => {
            $(`.${C_DOC}2_block`).css(`visibility`,`hidden`);
        }, 700);

        $(`.${C_FIZ}2_block`).animate({left: `-15.8%`},700);
        setTimeout(() => {
            $(`.${C_FIZ}2_block`).css(`visibility`,`hidden`);
        }, 700);

        /*vertical animation*/

        setTimeout(() => {
            $(`.${C_FIZ}3_block`).css(`visibility`,`visible`);
            $(`.${C_FIZ}3_block`).animate({bottom: `-105%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_PORT}3_block`).css(`visibility`,`visible`);
            $(`.${C_PORT}3_block`).animate({bottom: `-205%`},700);
        }, 700);

        setTimeout(() => {
            $(`.${C_DOC}3_block`).css(`visibility`,`visible`);
            $(`.${C_DOC}3_block`).animate({bottom: `-305%`},700);
        }, 700);

        $(this).unbind(`click`);

        CHANGE_CATEGORY(`${C_LAW}`,2);

    });

    CHANGE_CATEGORY(`${C_FIZ}`,3);
    CHANGE_CATEGORY(`${C_PORT}`,3);
    CHANGE_CATEGORY(`${C_DOC}`,3);
    CHANGE_CATEGORY(`${C_LAW}`,3);

})