

$(document).ready(function(){
  $(".shape-1").mouseover(function(){
    $(".create").fadeIn();
  });
  $(".shape-1").mouseout(function(){
    $(".create").fadeOut();
  });
  $(".shape-2").mouseover(function(){
    $(".nurture").fadeIn();
  });
  $(".shape-2").mouseout(function(){
    $(".nurture").fadeOut();
  });
  $(".shape-3").mouseover(function(){
    $(".grow").fadeIn();
  });
  $(".shape-3").mouseout(function(){
    $(".grow").fadeOut();
  });
  // product slider
  $('#product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
        
});

$(document).ready(function(){
 
  // product slider
  $('#testimonial').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
        
});
// $(document).ready(function(){
 
  product slider
  // $('#gallery').slick({
    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay:true,
    // arrows:true,
    // responsive: [
      // {
        // breakpoint: 1024,
        // settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
          // infinite: true,
          // dots: true
        // }
      // },
      // {
        // breakpoint: 600,
        // settings: {
          // slidesToShow: 2,
          // slidesToScroll: 2
        // }
      // },
      // {
        // breakpoint: 480,
        // settings: {
          // slidesToShow: 1,
          // slidesToScroll: 1
        // }
      // }
      You can unslick at a given breakpoint now by adding:
      settings: "unslick"
      instead of a settings object
    // ]
  // });
        
// });
