/*jQuery(document).ready(function() {
    jQuery('.ris-elems').viewportChecker({ //ris-elems - elements, that will be risen, when user scrolls down.
    classToAdd: 'visible animated fadeIn',
    classToRemove: 'hidden',
    offset: 100
    });
});*/

$(document).ready(function () {
    console.log('Document ready!');
    console.log('Checking jQuery: ', $('.practice').height());
    console.log('Checking now...');
    console.log($('.ris-elems').addClass("invisible").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        classToRemove: 'invisible',
        offset: '10%'
    }));
    console.log('End');    
})