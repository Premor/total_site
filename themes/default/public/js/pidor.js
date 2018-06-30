$(document).ready(() =>{
    let url = window.location;
    let searchParams = new URLSearchParams(url.search.substring(1));

    let practice = searchParams.get("practice");
    //loc = searchParams.get("location");
    switch(practice){
        case 'port':$('.port2_block').trigger('click');break;
        case 'fiz':$('.fiz2_block').trigger('click');break;
        case 'doc':$('.doc2_block').trigger('click');break;
        case 'law':$('.law2_block').trigger('click');break;
    }
    console.log("practice=" + practice);
});