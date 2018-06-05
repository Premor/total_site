
$.ajax({
    type: 'GET',
    url: '/api/practics',
    success: function (data) {alert('sobaka'); console.log(data)}
})
let previ = '';
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

    /* For practice animation */
    $('.fiz2_block').on('click',function fiz_slider (){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).addClass('prev');
        previ='fiz2'
        $(this).css('z-index','50')
        $(this).animate({left: '-15.8%'},700);
        $(this).css('background', '#ba0800')
        $(this).children('.fiz2').css('background', 'url(/img/fiz.png)')
        $(this).children('p').css('color','#ffffff')
        $('.port2_block').animate({left: '-32.5%'},700);
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

        /*vertical animation*/

        setTimeout(() => {
            $('.port3_block').css('visibility','visible');
            $('.port3_block').animate({bottom: '-105%'},700);
        }, 700);

        setTimeout(() => {
            $('.doc3_block').css('visibility','visible');
            $('.doc3_block').animate({bottom: '-205%'},700);
        }, 700);

        setTimeout(() => {
            $('.law3_block').css('visibility','visible');
            $('.law3_block').animate({bottom: '-305%'},700);
        }, 700);
        $(this).unbind('click');


        $('.fiz2_block').on('click', function () {
            $(this).css('background', '#ba0800')
            $(this).children('.fiz2').css('background', 'url(/img/fiz.png)')
            $(this).children('p').css('color','#ffffff')
    
            switch (previ) {
                case 'fiz3': 
                    $('.fiz3_block').css('background', '#ffffff')
                    $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                    $('.fiz3_block').children('p').css('color','#181818')
                    break;
                case 'law3': 
                    $('.law3_block').css('background', '#ffffff')
                    $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                    $('.law3_block').children('p').css('color','#181818')
                    break;
                case 'port3': 
                    $('.port3_block').css('background', '#ffffff')
                    $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                    $('.port3_block').children('p').css('color','#181818')
                    break;
                case 'doc3': 
                    $('.doc3_block').css('background', '#ffffff')
                    $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                    $('.doc3_block').children('p').css('color','#181818')
                    break;
            }
            console.log(previ);
            previ = 'fiz2';
        })
    });
/* ======================================================================================== */
    $('.port2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        previ = 'port2';
        $(this).addClass('prev');
        $(this).css('z-index','50')
        $(this).animate({left: '-32.5%'},700);
        $(this).css('background', '#ba0800')
        $(this).children('.port2').css('background', 'url(/img/port.png)')
        $(this).children('p').css('color','#ffffff')
        
        $('.fiz2_block').animate({left: '-15.8%'},700);
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

        /*vertical animation*/

        setTimeout(() => {
            $('.fiz3_block').css('visibility','visible');
            $('.fiz3_block').animate({bottom: '-105%'},700);
        }, 700);

        setTimeout(() => {
            $('.doc3_block').css('visibility','visible');
            $('.doc3_block').animate({bottom: '-205%'},700);
        }, 700);

        setTimeout(() => {
            $('.law3_block').css('visibility','visible');
            $('.law3_block').animate({bottom: '-305%'},700);
        }, 700);
        $(this).unbind('click');


        $('.port2_block').on('click', function () {
            $(this).css('background', '#ba0800')
            $(this).children('.port2').css('background', 'url(/img/port.png)')
            $(this).children('p').css('color','#ffffff')
    
            switch (previ) {
                case 'fiz3': 
                    $('.fiz3_block').css('background', '#ffffff')
                    $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                    $('.fiz3_block').children('p').css('color','#181818')
                    break;
                case 'law3': 
                    $('.law3_block').css('background', '#ffffff')
                    $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                    $('.law3_block').children('p').css('color','#181818')
                    alert('sobaka1272')
                    break;
                case 'port3': 
                    $('.port3_block').css('background', '#ffffff')
                    $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                    $('.port3_block').children('p').css('color','#181818')
                    break;
                case 'doc3': 
                    $('.doc3_block').css('background', '#ffffff')
                    $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                    $('.doc3_block').children('p').css('color','#181818')
                    break;
            }
            console.log(previ);
            previ = 'port2';
        })
    });
/* ======================================================================================== */
    $('.doc2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        previ = 'doc2';
        $(this).addClass('prev');
        $(this).css('z-index','50')
        $(this).animate({left: '-49.2%'},700);
        $(this).css('background', '#ba0800')
        $(this).children('.doc2').css('background', 'url(/img/doc.png)')
        $(this).children('p').css('color','#ffffff')
        
        $('.port2_block').animate({left: '-32.5%'},700);
        setTimeout(() => {
            $('.port2_block').css('visibility','hidden');
        }, 700);

        $('.fiz2_block').animate({left: '-15.8%'},700);
        setTimeout(() => {
            $('.fiz2_block').css('visibility','hidden');
        }, 700);

        $('.law2_block').animate({left: '-65.5%'},700);
        setTimeout(() => {
            $('.law2_block').css('visibility','hidden');
        }, 700);

        /*vertical animation*/

        setTimeout(() => {
            $('.fiz3_block').css('visibility','visible');
            $('.fiz3_block').animate({bottom: '-105%'},700);
        }, 700);

        setTimeout(() => {
            $('.port3_block').css('visibility','visible');
            $('.port3_block').animate({bottom: '-205%'},700);
        }, 700);

        setTimeout(() => {
            $('.law3_block').css('visibility','visible');
            $('.law3_block').animate({bottom: '-305%'},700);
        }, 700);

        $(this).unbind('click');


        $('.doc2_block').on('click', function () {
            $(this).css('background', '#ba0800')
            $(this).children('.doc2').css('background', 'url(/img/doc.png)')
            $(this).children('p').css('color','#ffffff')
    
            switch (previ) {
                case 'fiz3': 
                    $('.fiz3_block').css('background', '#ffffff')
                    $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                    $('.fiz3_block').children('p').css('color','#181818')
                    break;
                case 'law3': 
                    $('.law3_block').css('background', '#ffffff')
                    $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                    $('.law3_block').children('p').css('color','#181818')
                    alert('sobaka1272')
                    break;
                case 'port3': 
                    $('.port3_block').css('background', '#ffffff')
                    $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                    $('.port3_block').children('p').css('color','#181818')
                    break;
                case 'doc3': 
                    $('.doc3_block').css('background', '#ffffff')
                    $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                    $('.doc3_block').children('p').css('color','#181818')
                    break;
            }
            console.log(previ);
            previ = 'doc2';
        })
    });
/* ======================================================================================== */
    $('.law2_block').on('click',function(){
        $('.pr_page').css('position','relative');
        $('.pr_page').css('z-index','0');
        $(this).css('z-index','50')
        $(this).addClass('prev');
        previ = 'law2';
        $(this).animate({left: '-65.8%'},700);
        $(this).css('background', '#ba0800')
        $(this).children('.law2').css('background', 'url(/img/law.png)')
        $(this).children('p').css('color','#ffffff')
        
        $('.port2_block').animate({left: '-32.5%'},700);
        setTimeout(() => {
            $('.port2_block').css('visibility','hidden');
        }, 700);

        $('.doc2_block').animate({left: '-46.5%'},700);
        setTimeout(() => {
            $('.doc2_block').css('visibility','hidden');
        }, 700);

        $('.fiz2_block').animate({left: '-15.8%'},700);
        setTimeout(() => {
            $('.fiz2_block').css('visibility','hidden');
        }, 700);

        /*vertical animation*/

         setTimeout(() => {
            $('.fiz3_block').css('visibility','visible');
            $('.fiz3_block').animate({bottom: '-105%'},700);
        }, 700);

        setTimeout(() => {
            $('.port3_block').css('visibility','visible');
            $('.port3_block').animate({bottom: '-205%'},700);
        }, 700);

        setTimeout(() => {
            $('.doc3_block').css('visibility','visible');
            $('.doc3_block').animate({bottom: '-305%'},700);
        }, 700);

        $(this).unbind('click');


        $('.law2_block').on('click', function () {
            $(this).css('background', '#ba0800')
            $(this).children('.law2').css('background', 'url(/img/law.png)')
            $(this).children('p').css('color','#ffffff')
    
            switch (previ) {
                case 'fiz3': 
                    $('.fiz3_block').css('background', '#ffffff')
                    $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                    $('.fiz3_block').children('p').css('color','#181818')
                    break;
                case 'law3': 
                    $('.law3_block').css('background', '#ffffff')
                    $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                    $('.law3_block').children('p').css('color','#181818')
                    alert('sobaka1272')
                    break;
                case 'port3': 
                    $('.port3_block').css('background', '#ffffff')
                    $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                    $('.port3_block').children('p').css('color','#181818')
                    break;
                case 'doc3': 
                    $('.doc3_block').css('background', '#ffffff')
                    $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                    $('.doc3_block').children('p').css('color','#181818')
                    break;
            }
            console.log(previ);
            previ = 'law2';
        })
    });




    $('.port3_block').on('click', function () {
        $(this).css('background', '#ba0800')
        $(this).children('.port2').css('background', 'url(/img/port.png)')
        $(this).children('p').css('color','#ffffff')
        console.log(previ)
        switch (previ) {
            case 'fiz2': 
                $('.fiz2_block').css('background', '#ffffff')
                $('.fiz2_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz2_block').children('p').css('color','#181818')
                break;
            case 'law2': 
                $('.law2_block').css('background', '#ffffff')
                $('.law2_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law2_block').children('p').css('color','#181818')
                break;
            case 'doc2': 
                $('.doc2_block').css('background', '#ffffff')
                $('.doc2_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc2_block').children('p').css('color','#181818')
                break;
            case 'fiz3': 
                $('.fiz3_block').css('background', '#ffffff')
                $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz3_block').children('p').css('color','#181818')
                break;
            case 'doc3': 
                $('.doc3_block').css('background', '#ffffff')
                $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc3_block').children('p').css('color','#181818')
                break;
            case 'law3': 
                $('.law3_block').css('background', '#ffffff')
                $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law3_block').children('p').css('color','#181818')
                break;
        }

        previ = 'port3';
    })


    $('.law3_block').on('click', function () {
        $(this).css('background', '#ba0800')
        $(this).children('.law2').css('background', 'url(/img/law.png)')
        $(this).children('p').css('color','#ffffff')

        switch (previ) {
            case 'fiz2': 
                $('.fiz2_block').css('background', '#ffffff')
                $('.fiz2_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz2_block').children('p').css('color','#181818')
                break;
            case 'port2': 
                $('.port2_block').css('background', '#ffffff')
                $('.port2_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port2_block').children('p').css('color','#181818')
                break;
            case 'doc2': 
                $('.doc2_block').css('background', '#ffffff')
                $('.doc2_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc2_block').children('p').css('color','#181818')
                break;
            case 'fiz3': 
                $('.fiz3_block').css('background', '#ffffff')
                $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz3_block').children('p').css('color','#181818')
                break;
            case 'doc3': 
                $('.doc3_block').css('background', '#ffffff')
                $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc3_block').children('p').css('color','#181818')
                break;
            case 'port3': 
                $('.port3_block').css('background', '#ffffff')
                $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port3_block').children('p').css('color','#181818')
                break;
        }

        previ = 'law3';
    })

    $('.doc3_block').on('click', function () {
        $(this).css('background', '#ba0800')
        $(this).children('.doc2').css('background', 'url(/img/doc.png)')
        $(this).children('p').css('color','#ffffff')
        console.log(previ)
        switch (previ) {
            case 'fiz2': 
                $('.fiz2_block').css('background', '#ffffff')
                $('.fiz2_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz2_block').children('p').css('color','#181818')
                break;
            case 'port2': 
                $('.port2_block').css('background', '#ffffff')
                $('.port2_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port2_block').children('p').css('color','#181818')
                break;
            case 'law2': 
                $('.law2_block').css('background', '#ffffff')
                $('.law2_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law2_block').children('p').css('color','#181818')
                break;
            case 'fiz3': 
                $('.fiz3_block').css('background', '#ffffff')
                $('.fiz3_block').children('.fiz2').css('background', 'url(/img/fiz2.png)')
                $('.fiz3_block').children('p').css('color','#181818')
                break;
            case 'law3': 
                $('.law3_block').css('background', '#ffffff')
                $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law3_block').children('p').css('color','#181818')
                break;
            case 'port3': 
                $('.port3_block').css('background', '#ffffff')
                $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port3_block').children('p').css('color','#181818')
                break;
        }

        previ = 'doc3';
    })

    $('.fiz3_block').on('click', function () {
        $(this).css('background', '#ba0800')
        $(this).children('.fiz2').css('background', 'url(/img/fiz.png)')
        $(this).children('p').css('color','#ffffff')
        console.log(previ)
        switch (previ) {
            case 'doc2': 
                $('.doc2_block').css('background', '#ffffff')
                $('.doc2_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc2_block').children('p').css('color','#181818')
                break;
            case 'port2': 
                $('.port2_block').css('background', '#ffffff')
                $('.port2_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port2_block').children('p').css('color','#181818')
                break;
            case 'law2': 
                $('.law2_block').css('background', '#ffffff')
                $('.law2_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law2_block').children('p').css('color','#181818')
                break;
            case 'doc3': 
                $('.doc3_block').css('background', '#ffffff')
                $('.doc3_block').children('.doc2').css('background', 'url(/img/doc2.png)')
                $('.doc3_block').children('p').css('color','#181818')
                break;
            case 'law3': 
                $('.law3_block').css('background', '#ffffff')
                $('.law3_block').children('.law2').css('background', 'url(/img/law2.png)')
                $('.law3_block').children('p').css('color','#181818')
                break;
            case 'port3': 
                $('.port3_block').css('background', '#ffffff')
                $('.port3_block').children('.port2').css('background', 'url(/img/port2.png)')
                $('.port3_block').children('p').css('color','#181818')
                break;
        }

        previ = 'fiz3';цццы
    })
})