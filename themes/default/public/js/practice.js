
const C_FIZ = `fiz`;
const C_DOC = `doc`;
const C_LAW = `law`;
const C_PORT = `port`;
let CLICKED = ``;
let CHOSEN = '';

let practics;
function get_practics(callback){
    AJAX('GET /api/practics/', '',callback
    //(res)=>{
    //    practics = res;
    //}
);
}
$(document).ready(function(){
    get_practics((res)=>{
        practics = res;

        fill_practice(C_DOC);
        fill_practice(C_FIZ);
        fill_practice(C_LAW);
        fill_practice(C_PORT);



        $('.lvl1_click').on('click',function() {
            var el = $(this).parent('li').children('ul');
            el.slideToggle(400, 'linear', function() {
            el.css("position","relative");
            })
        })
        var f = [];
        $('.lvl2_click').on('click',function() {
            var el = $(this).parent('li').children('ul');
                el.slideToggle(400, 'linear', function() {
                el.css("position","relative");
            })
            var current_rotata= ($(this).parent('li').children('p')).children('.rotata');
            if(f[current_rotata]==undefined) {
                f[current_rotata]=true;
            };
            if (f[current_rotata] == true) {
                $(current_rotata).css("animation","rotataon 0.3s ease-in-out");
                $(current_rotata).css("animation-fill-mode","forwards");
                f[current_rotata]=false;
            } else {
                $(current_rotata).css("animation","rotataon_back 0.3s ease-in-out");
                $(current_rotata).css("animation-fill-mode","forwards");
                f[current_rotata]=true;
            }
        })


        
        /** check triger for GET arguments */
        let url = window.location;
        let searchParams = new URLSearchParams(url.search.substring(1));
         
        // ===========IMPORTANT По сути это надо доделать
        // let target;
        // let search = searchParams.get("search");
        // if (search) {
        //     target = search_practice(search);
        //     if (target){
        //         $(`.${target.lvl1}3_block`).trigger('click');
                
        //         $('.qwe').children('.lvl_2')[target.lvl2Index].click()//.trigger('click');//practics[target.lvl1].[target.lvl2Index].name
        //     }
        // }
        // ==============
        // check redirect home
        let practice = searchParams.get("practice");
        if (practice) {
             $(`.${practice}`).trigger('click');
            //$(`.lvl1_click`).trigger('click');
        
        }
        console.log("practice=" + practice);

    });
});


function fill_practice(name){
    let name_pract;
    switch (name){
        case C_FIZ:name_pract='fiz';break;
        case C_PORT:name_pract='yr';break;
        case C_DOC:name_pract='admspor';break;
        case C_LAW:name_pract='zash';break;
        
    }
    let append_ul='<ul>';
    for (i of practics[name_pract]){
        if (i.category[0]!="") {
            append_ul +=`<li class='lvl2'><p class='lvl2_click'><i class="fa fa-caret-right rotata"></i> ${i.name}</p><ul>`;
        } else {
            append_ul +=`<li class='lvl2'><a href="#" class="href_click"><p class='lvl2_click'><i class="fa fa-caret-right rotata"></i> ${i.name}</p></a><ul>`;
        }
        for (j of i.category){
            append_ul+=`<a href='#' class="lvl3_href"><li class='lvl3'>${j}</li></a>`//Вместо # нужно вставить линкер
        }
        append_ul +='</ul></li>';
    }
    append_ul+='</ul>';
    $(`.lvl1 .${name}`).parent('li').append(append_ul);
}