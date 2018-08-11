$(document).ready(function(){
    $('.lvl1_click, .lvl2_click').on('click',function() {
        var el = $(this).parent('li').children('ul');
        el.slideToggle(400, 'linear', function() {
           el.css("position","relative");
        })
    })
});