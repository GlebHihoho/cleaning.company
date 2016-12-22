$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5500,
    // arrows: false,
    speed: 1500,

    // responsive: [
    // {
    //   breakpoint: 760,
    //   settings: {
    //     arrows: true
    //   }
    // }
    // ]
  });
});

$(document).ready(function(){
  $('.partners__mobile').slick({
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
    speed: 1500,
    dots: true,
    responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    }
    ]
  });
});
