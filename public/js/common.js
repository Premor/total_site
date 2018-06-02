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
})