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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
//          dots: true
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
//   $('.nav-element li a').click(function() {
//     var sectionTo = $(this).attr('href');
//     $('html, body').animate({
//       scrollTop: $(sectionTo).offset().top
//     }, 1500);
// });
$(document).ready(function() {
  $(' .nav-element li a').click(function(e) {
  	
  	var targetHref = $(this).attr('href');
	  
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top
	}, 1000);
    
    e.preventDefault();
  });
});
$('.teacher-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true
});
	
 });
 
 $(document).ready(function(){
 
  // product slider
  $('#testimonial').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
//          dots: true
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
  $('#gallerys').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
//          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  $('#client-logo').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
//          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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

//  7th aug
$(document).ready(function(){
  $(".call").click(function(){
    $("#form-cntct").toggle();
  });
});

// function changeimage() {

//   if  (document.getElementById("changer").src == "images/close.png")
//   {
//       document.getElementById("changer").src = "images/msg.png";
//   }
//   else 
//   {
//       document.getElementById("changer").src = "images/close.png";
//   }

// }

var closeButtons = $('.close_window'); 
closeButtons.on('click', function() { 
$(this).parent().hide(); 
});

  $(function () {
            $('#scrollToBottom').bind("click", function () {
                $('html, body').animate({ scrollTop: $(document).height() }, 1200);
                return false;
            });
            $('#scrollToTop').bind("click", function () {
                $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
            });
        });

$(document).ready(function(){
  $(".close").click(function(){
    $("#form-cntct").hide();
  });
});
