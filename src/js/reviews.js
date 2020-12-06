const anchors = ['firstPage', 'lastPage'];

function onLeaveHandler(){
    $('.header__navigation-opened').children().removeClass('active_link');

    $('.header__navigation-opened').children().each(function(){
        if ($(this).data('menuanchor') == $('section.active').data('anchor')){
            $(this).addClass('active_link');
        }
    })    
}

if ($(window).width() > 768){
    $('#fullpage').fullpage({
        anchors: anchors,
        afterLoad: onLeaveHandler
    });
}