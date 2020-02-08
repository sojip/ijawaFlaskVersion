(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// change button text when collapse

$(document).ready(function() {
  $('[data-toggle="collapse"]').click(function() {
    $(this).toggleClass( "active" );
    if ($(this).hasClass("active")) {      
      if ($(this).attr("id") == "myBtn1") {
        $("#dots1").toggle();
        $(this).text("Read Less");
      } else if ($(this).attr("id") == "myBtn2") {
        $("#dots2").toggle();
        $(this).text("Read Less");
      } else if ($(this).attr("id") == "myBtn3") {
        $("#dots3").toggle();
        $(this).text("Read Less");
      } else if ($(this).attr("id") == "myBtn4") {
        $("#dots4").toggle();
        $(this).text("Read Less");
      }
    } else {
      if ($(this).attr("id") == "myBtn1") {
        $("#dots1").toggle();
        $(this).text("Read More");
      } else if ($(this).attr("id") == "myBtn2") {
        $("#dots2").toggle();
        $(this).text("Read More");
      } else if ($(this).attr("id") == "myBtn3") {
        $("#dots3").toggle();
        $(this).text("Read More");
      } else if ($(this).attr("id") == "myBtn4") {
        $("#dots4").toggle();
        $(this).text("Read More");
      }   
    }
  });
  });

// trigger full landing page
const $body = $("body");
const scrollClass = "scroll";
 
$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

// Detect request animation frame
var $animation_elements = $('.show-on-scroll');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('is-visible');
    } else {
      $element.removeClass('is-visible');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
