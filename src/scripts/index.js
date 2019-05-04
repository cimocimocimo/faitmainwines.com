import $ from 'jquery'
import WOW from 'WOW'

const $win = $(window)
const $doc = $(document)
const $body = $('body')

// Key Codes
const ESC = 27

// required to call before document ready event
;(function () {
  var $video = $('.covervid-video')
  if ($video.length) {
    $video.coverVid(1920, 1080)
  }
}())

/**
 *  Helpers
 */

function getPageFilename () {
  return window.location.pathname.split('/').pop()
}

/**
 * Only runs the array of functions if they have not been run in the past
 * 24 hours on the currently loaded page.
 */
function runOncePerPagePerDay (runList) {
  var cookieName = getPageFilename() + '-loadedAlready'

  if ($.cookie(cookieName) !== 'YES') {
    for (var i = 0; i < runList.length; i++) {
      runList[i]()
    }

    $.cookie(cookieName, 'YES', { expires: 1 })
  }
}

/**
 *  Init functions
 */

function fullscreen () {
  var winX = $win.width()
  var winY = $win.height()

  $('.hero , .img_block, .covervid-wrapper').css({
    width: winX,
    height: winY
  })

  $('.hero_no_play').css({
    width: winX,
    height: winY + 40
  })
}

function masonryInit () {
  var $container = $('.grid')

  if ($container.length) {
    $container.imagesLoaded().progress(function () {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
    })
  }
}

function heroFullscreenInit () {
  fullscreen()

  // Run the function in case of window resize
  $win.resize(function () {
    fullscreen()
  })
}

function carouselInit () {
  var $carousel = $('.main-carousel')

  if ($carousel.length) {
    $carousel.flickity({
      setGallerySize: false,
      pageDots: false,
      arrowShape: {
        x0: 0,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 35,
        x3: 60
      },
      friction: 0.4
    })
  }
}

function wowInit () {
  new WOW().init()
}

function initOverlayMenus () {
  var $toggles = $('.js-toggle')
  var $overlays = $('.js-overlay')
  var $closers = $('.js-close-overlay')

  function closeOverlays () {
    $overlays.removeClass('open')
    $toggles.removeClass('active')
    $body.removeClass('no-scroll')
  }

  function openOverlay (overlayId) {
    $(overlayId).addClass('open')
    $body.addClass('no-scroll')
  }

  $toggles.click(function (event) {
    event.preventDefault()

    var $toggle = $(this)
    var overlayId = $toggle.attr('href')

    $toggle.addClass('active')
    openOverlay(overlayId)
  })

  $closers.click(function (event) {
    event.preventDefault()

    closeOverlays()
  })

  $doc.keyup(function (event) {
    if (event.keyCode === ESC) closeOverlays()
  })
}

/**
 *  On DOM ready
 */

$(function () {
  $win.scroll(function () {
    $('.covervid-wrapper , .img_block')
      .css('opacity', 1 - $win.scrollTop() / 800)
  })

  $('.js-sticky-nav').sticky({
    topSpacing: 0
  })

  $('.slide_img').click(function () {
    $('.slide_overlay').addClass('so_open')
    $('.slide_inner').addClass('open')
  })

  $('#closeIt').click(function () {
    $(this).removeClass('so_open')
    $('.slide_inner').removeClass('open')
  })

  masonryInit()
  heroFullscreenInit()
  carouselInit()
  initOverlayMenus()

  runOncePerPagePerDay([wowInit])
})

// On all resources loaded (images, iframes, etc.)
$win.load(function () {
  $('.loader').delay(300).fadeOut('slow')
  $('.loader-container').delay(400).fadeOut()
})
