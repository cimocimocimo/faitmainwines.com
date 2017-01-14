$(document).ready(function(){

	/* gps */
	$('body').gps();


	/* responsive menu */
	$('#menu-toggle').collapsible();


	/* drop menus */
	$('.menu li').hover(
		function () {
			if (window.gps != 'mobile'){
				$('ul', this).fadeIn('fast');
			}
		},
		function () {
			if (window.gps != 'mobile'){
				$('ul', this).fadeOut('fast');
			}
		}
	);


	//home image
	$('body.home').backstretch("/images/bg_home.jpg");



	/* top link */
	// $("#top-link").find('a').click(function(){
	// 	$('html, body').animate({scrollTop:0}, 'slow');
	// 	return false;
	// });


	/* store grid */
	// $('.store-grid > .store-item:nth-child(3n)').addClass('last');


	/* credits */
	$('#credits').hover(
		function(e){
			if (window.gps != 'mobile'){
				$('#credits-info').fadeIn('fast');
			}
		},
		function(e){
			if (window.gps != 'mobile'){
				$('#credits-info').fadeOut('fast');
			}
		}
	);
	$('#credits').bind('click', function(){
		if (window.gps == 'mobile'){
			document.location = 'http://vinagency.com';
		}
	});


	/* slider galleries */
	// $('.bx-slider').bxSlider({
	// 	'mode':'fade',
	// 	'controls':false,
	// 	'auto':true
	// });

    //adjust height of #main if shorter than window
    function sizeContainer(){

        if ( window.gps == 'mobile' ){
            return;
        }
        var $h = $('#header'),
            $f = $('#footer'),
            $m = $('#main'),
            wh = $(window).height(),
            fh = $f.outerHeight(true),
            fm = Math.floor( parseInt( $f.css('margin-top') ) ),
            hh = $h.outerHeight(true),
            mh = $m.outerHeight(true),
            nh = wh - hh - fh ;
// log('!  '+ wh +' '+ hh +' '+ mh + ' '+ fm );

        if ( (hh + mh + fh) < wh ){
            $m.css('min-height', nh );
        }
    };
    sizeContainer();


    //disable hover on scroll
    try {
		var body = document.body, timer;
		window.addEventListener('scroll', function(){
			clearTimeout(timer);
			if ( !body.classList.contains('disable-hover') ){
				body.classList.add('disable-hover');
			}
			timer = setTimeout( function(){ body.classList.remove('disable-hover'); },500);
		}, false);
    } catch(e){}


    //iphone scroll past address onload
	// /mobile/i.test(navigator.userAgent) && setTimeout(function () {
	// 	window.scrollTo(0, 1);
	// }, 1000);

});


//vinespring overrides

var $c = $('#vs2-cart-confirmation-custom');

window.vinespringReady = function (config){

// log( window );

  //username or login
  vinespring.api('getCurrentUserName', null, function (userName) {
    var $u = $('#vs2-accountLinks-user-label'),
    	$a = $('#vs2-accountLinks-user > a');
    if (userName) {
    	$u.text( userName );
    	$a.attr('href','/account');
    	$('body').addClass('vs-logged-in');

    //redirect purchase page to account if logged in

      if ( $('body').hasClass('page-id-121') ){
      document.location = '/account#allocations';
      }



    } else {
    	$u.text('Login');
    	$a.attr('href','/account#login');
    }
  });

  vinespring.api('getCartCount', null, function (cartCount) {
  	var $c = $('#vs2-accountLinks-cart-count');
  	if (cartCount) {
  		$c.text( cartCount );
  	} else {
  		$c.text('');
  	}
  });

	config.onAfterAddToCart = function (d){
		var delay = 6000;
        $c.slideDown();
        window.setTimeout( function (){
            $c.slideUp();
        }, delay)
        $('#vs2-accountLinks-cart-count').text( d.cartCount );
	};

};
$c.find('.button-close').bind('click',function(e){
	e.preventDefault();
	$c.slideUp();
});

// $('.vs2-productList-addToCart button[type=submit]').bind('click', function(e){
// log('add to cart');
// });








/* console log */

log = function(s){ if (typeof console != "undefined" && typeof console.debug != "undefined") { console.log(s); } };



/* responsive menu */

;(function($) {
	$.fn.collapsible = function(options) {

		return this.each(function() {
			var obj = $(this), tree = obj.next('.menu-wrapper');
			obj.click(function(){
			if ( obj.is(':visible') ){ tree.slideToggle();}
		});
		$(window).resize(function(){
			if ( $(window).width() <= 780 ){
				tree.attr('style','');
				};
			});
		});
	};
})(jQuery);




/*
 * GPS - v1.0
 * http://vinagency.com/labs/code/gps/
 *
 * Copyright (c) 2013 Vin, LLC
 * Licensed under the GPL licenses.
 */

;(function($) {

	$.fn.gps = function(options) {


		var breakpoints = {
				'mobile': 			0,
				'tablet': 			481,
				'small-desktop': 	769,
				'full-desktop': 	960
			},
			defaults = {
				'breakpoints': 		breakpoints
			},
			_settings = $.extend(defaults, options),
			_here = '';


		init = function(){

			_orient();

			setTimeout(function(){ _broadcast(); }, 2000);//wait to make sure everything's loaded

			$(window).smartresize( function(){ _orient(); });
		};

		_orient = function(){

			var here,// = _here,
				w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
				h = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;

			$.each( _settings.breakpoints, function(i, n){
			    if ( w >= n ){ here = i; }
			});

			if (here == _here){ return false; }

			window.gps = _here = here;

			_broadcast();
		};

		_broadcast = function(){

			$.event.trigger("gps", _here);
		};


		log = function(s) {
			if (typeof console != "undefined" && typeof console.debug != "undefined") {
				console.log(s);
			} else {
				//alert(s);
			}
		};

		init();
	};
})(jQuery);



;(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');






/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */

;(function ($, window, undefined) {
  'use strict';

  /* PLUGIN DEFINITION
   * ========================= */

  $.fn.backstretch = function (images, options) {
    // We need at least one image
    if (images === undefined || images.length === 0) {
      $.error("No images were supplied for Backstretch");
    }

    /*
     * Scroll the page one pixel to get the right window height on iOS
     * Pretty harmless for everyone else
    */
    if ($(window).scrollTop() === 0 ) {
      window.scrollTo(0, 0);
    }

    return this.each(function () {
      var $this = $(this)
        , obj = $this.data('backstretch');

      // If we've already attached Backstretch to this element, remove the old instance.
      if (obj) {
        // Merge the old options with the new
        options = $.extend(obj.options, options);

        // Remove the old instance
        obj.destroy(true);
      }

      obj = new Backstretch(this, images, options);
      $this.data('backstretch', obj);
    });
  };

  // If no element is supplied, we'll attach to body
  $.backstretch = function (images, options) {
    // Return the instance
    return $('body')
            .backstretch(images, options)
            .data('backstretch');
  };

  // Custom selector
  $.expr[':'].backstretch = function(elem) {
    return $(elem).data('backstretch') !== undefined;
  };

  /* DEFAULTS
   * ========================= */

  $.fn.backstretch.defaults = {
      centeredX: true   // Should we center the image on the X axis?
    , centeredY: true   // Should we center the image on the Y axis?
    , duration: 5000    // Amount of time in between slides (if slideshow)
    , fade: 0           // Speed of fade transition between slides
  };

  /* STYLES
   * 
   * Baked-in styles that we'll apply to our elements.
   * In an effort to keep the plugin simple, these are not exposed as options.
   * That said, anyone can override these in their own stylesheet.
   * ========================= */
  var styles = {
      wrap: {
          left: 0
        , top: 0
        , overflow: 'hidden'
        , margin: 0
        , padding: 0
        , height: '100%'
        , width: '100%'
        , zIndex: -999999
      }
    , img: {
          position: 'absolute'
        , display: 'none'
        , margin: 0
        , padding: 0
        , border: 'none'
        , width: 'auto'
        , height: 'auto'
        , maxWidth: 'none'
        , zIndex: -999999
      }
  };

/* CLASS DEFINITION
* ========================= */
var Backstretch = function (container, images, options) {
	this.options = $.extend({}, $.fn.backstretch.defaults, options || {});

	/* In its simplest form, we allow Backstretch to be called on an image path.
	 * e.g. $.backstretch('/path/to/image.jpg')
	 * So, we need to turn this back into an array.
	 */
	this.images = $.isArray(images) ? images : [images];

	// Preload images
	$.each(this.images, function () {
	  $('<img />')[0].src = this;
	});    

	// Convenience reference to know if the container is body.
	this.isBody = container === document.body;

	/* We're keeping track of a few different elements
	 *
	 * Container: the element that Backstretch was called on.
	 * Wrap: a DIV that we place the image into, so we can hide the overflow.
	 * Root: Convenience reference to help calculate the correct height.
	 */
	this.$container = $(container);
	this.$wrap = $('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.$container);
	this.$root = this.isBody ? supportsFixedPosition ? $(window) : $(document) : this.$container;

	// Non-body elements need some style adjustments
	if (!this.isBody) {
	  // If the container is statically positioned, we need to make it relative,
	  // and if no zIndex is defined, we should set it to zero.
	  var position = this.$container.css('position')
	    , zIndex = this.$container.css('zIndex');

	  this.$container.css({
	      position: position === 'static' ? 'relative' : position
	    , zIndex: zIndex === 'auto' ? 0 : zIndex
	    , background: 'none'
	  });
	  
	  // Needs a higher z-index
	  this.$wrap.css({zIndex: -999998});
	}

	// Fixed or absolute positioning?
	this.$wrap.css({
	  position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
	});

	// Set the first image
	this.index = 0;
	this.show(this.index);

	// Listen for resize
	$(window).on('resize.backstretch', $.proxy(this.resize, this))
	         .on('orientationchange.backstretch', $.proxy(function () {
	            // Need to do this in order to get the right window height
	            if (this.isBody && window.pageYOffset === 0) {
	              window.scrollTo(0, 1);
	              this.resize();
	            }
	         }, this));



	//vin updates
	////var nav = '<a title="Next" class="hp-next tip" href="#"><i class="icon-right-open-big"><span></span></i></a><a title="Previous" class="hp-previous tip" href="#"><i class="icon-left-open-big"><span></span></i></a>';

	////$('.homepage-items').append(nav);

	//prev and next buttons
	// $('.hp-next').bind('click',function(e){
	// 	$('body').data('backstretch').next();
	// 	e.preventDefault();
	// });
	// $('.hp-previous').bind('click',function(e){
	// 	$('body').data('backstretch').prev();
	// 	e.preventDefault();
	// });

	//prev and next keys
	$(document).keydown(function(e){
	    if (e.keyCode == 37) {
			$('body').data('backstretch').prev();
	    	e.preventDefault();
	    }
	});
	$(document).keydown(function(e){
	    if (e.keyCode == 39) {
			$('body').data('backstretch').next();
	    	e.preventDefault();
	    }
	});

};

/* PUBLIC METHODS
* ========================= */
Backstretch.prototype = {
    resize: function () {
        try {
          var bgCSS = {left: 0, top: 0}
            , rootWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
            , bgWidth = rootWidth
            , rootHeight = this.isBody ? ( window.innerHeight ? window.innerHeight : this.$root.height() ) : this.$root.innerHeight()
            , bgHeight = bgWidth / this.$img.data('ratio')
            , bgOffset;

            // Make adjustments based on image ratio
            if (bgHeight >= rootHeight) {
                bgOffset = (bgHeight - rootHeight) / 2;
                if(this.options.centeredY) {
                  bgCSS.top = '-' + bgOffset + 'px';
                }
            } else {
                bgHeight = rootHeight;
                bgWidth = bgHeight * this.$img.data('ratio');
                bgOffset = (bgWidth - rootWidth) / 2;
                if(this.options.centeredX) {
                  bgCSS.left = '-' + bgOffset + 'px';
                }
            }

            this.$wrap.css({width: rootWidth, height: rootHeight})
                      .find('img:not(.deleteable)').css({width: bgWidth, height: bgHeight}).css(bgCSS);
        } catch(err) {
            // IE7 seems to trigger resize before the image is loaded.
            // This try/catch block is a hack to let it fail gracefully.
        }

        return this;
    }

      // Show the slide at a certain position
    , show: function (index) {
        // Validate index
        if (Math.abs(index) > this.images.length - 1) {
          return;
        } else {
          this.index = index;
        }

        // Vars
        var self = this
          , oldImage = self.$wrap.find('img').addClass('deleteable')
          , evt = $.Event('backstretch.show', {
              relatedTarget: self.$container[0]
            });

        // Pause the slideshow
        clearInterval(self.interval);


        $('.homepage-item').hide();
        $('.homepage-item').eq(index).fadeIn();


        // New image
        self.$img = $('<img />')
                      .css(styles.img)
                      .bind('load', function (e) {
                        var imgWidth = this.width || $(e.target).width()
                          , imgHeight = this.height || $(e.target).height();
                        
                        // Save the ratio
                        $(this).data('ratio', imgWidth / imgHeight);

                        // Show the image, then delete the old one
                        // "speed" option has been deprecated, but we want backwards compatibilty
                        $(this).fadeIn(self.options.speed || self.options.fade, function () {
                          oldImage.remove();

                          // Resume the slideshow
                          if (!self.paused) {
                            self.cycle();
                          }

                          // Trigger the event
                          self.$container.trigger(evt, self);
                        });

                        // Resize
                        self.resize();
                      })
                      .appendTo(self.$wrap);

        // Hack for IE img onload event
        self.$img.attr('src', self.images[index]);
        return self;
      }

    , next: function () {
        // Next slide
        return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
    }

    , prev: function () {
        // Previous slide
        return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
    }

    , pause: function () {
        // Pause the slideshow
        this.paused = true;
        return this;
    }

    , resume: function () {
        // Resume the slideshow
        this.paused = false;
        this.next();
        return this;
    }

    , cycle: function () {
        // Start/resume the slideshow
        if(this.images.length > 1) {
          // Clear the interval, just in case
          clearInterval(this.interval);

          this.interval = setInterval($.proxy(function () {
            // Check for paused slideshow
            if (!this.paused) {
              this.next();
            }
          }, this), this.options.duration);
        }
        return this;
    }

    , destroy: function (preserveBackground) {
        // Stop the resize events
        $(window).off('resize.backstretch orientationchange.backstretch');

        // Clear the interval
        clearInterval(this.interval);

        // Remove Backstretch
        if(!preserveBackground) {
          this.$wrap.remove();          
        }
        this.$container.removeData('backstretch');
    }
};

/* SUPPORTS FIXED POSITION?
*
* Based on code from jQuery Mobile 1.1.0
* http://jquerymobile.com/
*
* In a nutshell, we need to figure out if fixed positioning is supported.
* Unfortunately, this is very difficult to do on iOS, and usually involves
* injecting content, scrolling the page, etc.. It's ugly.
* jQuery Mobile uses this workaround. It's not ideal, but works.
*
* Modified to detect IE6
* ========================= */

var supportsFixedPosition = (function () {
    var ua = navigator.userAgent
      , platform = navigator.platform
        // Rendering engine is Webkit, and capture major version
      , wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ )
      , wkversion = !!wkmatch && wkmatch[ 1 ]
      , ffmatch = ua.match( /Fennec\/([0-9]+)/ )
      , ffversion = !!ffmatch && ffmatch[ 1 ]
      , operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ )
      , omversion = !!operammobilematch && operammobilematch[ 1 ]
      , iematch = ua.match( /MSIE ([0-9]+)/ )
      , ieversion = !!iematch && iematch[ 1 ];

    return !(
      // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
      ((platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534) ||
      
      // Opera Mini
      (window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]") ||
      (operammobilematch && omversion < 7458) ||
      
      //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
      (ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533) ||
      
      // Firefox Mobile before 6.0 -
      (ffversion && ffversion < 6) ||
      
      // WebOS less than 3
      ("palmGetResource" in window && wkversion && wkversion < 534) ||
      
      // MeeGo
      (ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1) ||
      
      // IE6
      (ieversion && ieversion <= 6)
    );
  }());

}(jQuery, window));





