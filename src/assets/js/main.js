$('.hiro-nav-popup-toggle').click(function(){
    $('body').toggleClass('hiro-nav-popup-modal-open');
});


$('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){
    $('body').removeClass('hiro-nav-popup-modal-open');
});
$myCarousel = $('.carousel');

function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
  
    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');
  
      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');
  
  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);
  
  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

  function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';
  
    elems.each(function () {
      var $this = $(this),
          $animationType = $this.data('animation');
  
      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');
  
  // Apply the animation using the doAnimations()function
  doAnimations($firstAnimatingElems);
  
  // Attach the doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });