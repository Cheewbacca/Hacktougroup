const add = (a, b) => a + b;

var burger = $('#burger');

burger.on('click',  function(){
    burger.toggleClass('closed');
    $('.header__navigation-opened').toggleClass('hidded');
    $('.header__navigation-closed').toggleClass('hidded');
});