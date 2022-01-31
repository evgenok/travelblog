$(function () {
     $(".container a, .go-top").on("click", function (event) {

          event.preventDefault();
          var id = $(this).attr('href'),
          top = $(id).offset().top;
          $('body, html').animate({scrollTop: top}, 1000);
     })


     $('.slider').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
     });
});
