$(document).ready (function(){
   $('.main-section__slider-item').slick({
      arrows: false,
      dots: true,
      items: 1,
      loop: true,
      animateOut: 'fadeOut'
   });
});

$(document).ready (function () {
   $('.products-slider').slick({
      centerMode: true,
      loop: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
   });
});

$(document).ready (function () {
   $('.partners-slider').slick({
      centerMode: true,
      loop: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
   });
});