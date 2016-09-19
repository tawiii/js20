$('.bxslider').bxSlider({
  mode: 'fade',
   auto: true,
  captions: true
});

$(function () {

    $('.accordion__header').click(function (e) {

        e.preventDefault();

        $(this).siblings('.accordion-body').slideToggle()
            .parent().toggleClass('active')
            .siblings().removeClass('active')
            .children('.accordion-body').slideUp();

    });

});