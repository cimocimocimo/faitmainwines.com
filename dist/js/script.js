(function ($) {

  var $win = $(window)
  var $doc = $(document)

  function heroVideoInit(){
    var $video = $('.covervid-video')

    if ($video.length) {
      $video.coverVid(1920, 1080)
    }
  }

  // required to call before document ready event
  heroVideoInit()

  function fullscreen(){
    var winX = $win.width()
    var winY = $win.height()

	  $('.hero , .img_block, .covervid-wrapper').css({
		  width: winX,
		  height: winY,
	  })

	  $('.hero_no_play').css({
		  width: winX,
		  height: winY + 40
	  })
  }

  function heroFullscreenInit(){
	  fullscreen()

	  // Run the function in case of window resize
    $win.resize(function() {
		  fullscreen()
	  })
  }

  function carouselInit() {
    var $carousel = $('.main-carousel')

    if ($carousel.length) {
      $carousel.flickity({
			  setGallerySize: false,
			  pageDots: false,
			  arrowShape: {
				  x0: 0,
				  x1: 60, y1: 50,
				  x2: 60, y2: 35,
				  x3: 60
			  },
        autoPlay: 7000,
        pauseAutoPlayOnHover: false,
        friction: 0.4,
		  })
    }
  }

  $win.load(function() {
	  $('.loader').delay(300).fadeOut('slow')
	  $('.loader-container').delay(400).fadeOut()
  })

  $doc.ready(function() {
    // open the overlay menu
	  $('#toggle').click(function () {
		  $(this).toggleClass('active')
		  $('#overlay').toggleClass('open')
      // prevent the body from scrolling
      $('body').addClass('no-scroll')
	  })

    // close overlay menu
	  $('.js-close-overlay').click(function(event){
      event.preventDefault()
		  $('#toggle').toggleClass('active')
		  $('#overlay').toggleClass('open')
      // allow body scrolling again
      $('body').removeClass('no-scroll')
	  })

	  $('#foot_toggle').click(function () {
		  $(this).toggleClass('active')
		  $('#foot_overlay').toggleClass('open')
	  })

	  $('#foot_close').click(function(){
		  $('#foot_toggle').toggleClass('active')
		  $('#foot_overlay').toggleClass('open')
	  })

	  $win.scroll(function () {
		  $('.covervid-wrapper , .img_block')
        .css('opacity', 1 - $win.scrollTop() / 800)
	  })

		$('.nav_wrap').sticky({
			topSpacing: 0
		})

	  $('.slide_img').click(function () {
		  $('.slide_overlay').addClass('so_open')
		  $('.slide_inner').addClass('open')
	  })

	  $('#closeIt').click(function(){
		  $(this).removeClass('so_open')
		  $('.slide_inner').removeClass('open')
	  })

	  var $container = $('.grid')

    if ($container.length){
	    $container.imagesLoaded( function(){
		    $container.masonry({
			    itemSelector : '.grid-item'
		    })
	    })
    }

    heroFullscreenInit()
    carouselInit()
  })

}(jQuery))
