"use strict";

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var switcher = $('#switcher').children();
switcher.each(function (e) {
  $(this).on('click', function () {
    switcher.removeClass('active');
    $(this).addClass('active');
    switcher.each(function () {
      $($(this).data('target')).addClass('hidded');
    });
    $($(this).data('target')).removeClass('hidded');
  });
});