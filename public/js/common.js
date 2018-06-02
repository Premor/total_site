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
    $('.port_law').on('click',function(){
        window.location.replace('/practice?practice=law')
    })


    /* For practice animation */
    $('.fiz2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).css('z-index','50')
        $(this).animate({left: '-15%'},700);
        
        $('.port2_block').animate({left: '-31.5%'},700);
        setTimeout(() => {
            $('.port2_block').css('visibility','hidden');
        }, 700);

        $('.doc2_block').animate({left: '-46.5%'},700);
        setTimeout(() => {
            $('.doc2_block').css('visibility','hidden');
        }, 700);

        $('.law2_block').animate({left: '-65.5%'},700);
        setTimeout(() => {
            $('.law2_block').css('visibility','hidden');
        }, 700);
    });

    $('.port2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).css('z-index','50')
        $(this).animate({left: '-31.5%'},700);
        
        $('.fiz2_block').animate({left: '-15%'},700);
        setTimeout(() => {
            $('.fiz2_block').css('visibility','hidden');
        }, 700);

        $('.doc2_block').animate({left: '-46.5%'},700);
        setTimeout(() => {
            $('.doc2_block').css('visibility','hidden');
        }, 700);

        $('.law2_block').animate({left: '-65.5%'},700);
        setTimeout(() => {
            $('.law2_block').css('visibility','hidden');
        }, 700);

        // setTimeout(() => {
        //     $('.port2_block').css('left','-15%');
        // }, 700);
    });

    $('.doc2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).css('z-index','50')
        $(this).animate({left: '-48.5%'},7000);
        
        $('.port2_block').animate({left: '-31.5%'},700);
        setTimeout(() => {
            $('.port2_block').css('visibility','hidden');
        }, 700);

        $('.fiz2_block').animate({left: '-15%'},700);
        setTimeout(() => {
            $('.fiz2_block').css('visibility','hidden');
        }, 700);

        $('.law2_block').animate({left: '-65.5%'},700);
        setTimeout(() => {
            $('.law2_block').css('visibility','hidden');
        }, 700);

      /*  setTimeout(() => {
            $('.doc2_block').css('left','-15%');
        }, 700);*/
    });

    $('.law2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).css('z-index','50')
        $(this).animate({left: '-64.5%'},700);
        
        $('.port2_block').animate({left: '-31.5%'},700);
        setTimeout(() => {
            $('.port2_block').css('visibility','hidden');
        }, 700);

        $('.doc2_block').animate({left: '-46.5%'},700);
        setTimeout(() => {
            $('.doc2_block').css('visibility','hidden');
        }, 700);

        $('.fiz2_block').animate({left: '-15%'},700);
        setTimeout(() => {
            $('.fiz2_block').css('visibility','hidden');
        }, 700);

        /*setTimeout(() => {
            $('.law2_block').css('left','-15%');
        }, 707);*/
    });


})