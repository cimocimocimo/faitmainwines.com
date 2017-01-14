jQuery(window).load(function() {
	jQuery(".loader").delay(300).fadeOut("slow");
	jQuery(".loader-container").delay(400).fadeOut();
})


jQuery(document).ready(function($) {
	$('#toggle').click(function () {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});
	$('#close').click(function(){
		$('#toggle').toggleClass('active');
		$('#overlay').toggleClass('open');
	});
	$('#foot_toggle').click(function () {
		$(this).toggleClass('active');
		$('#foot_overlay').toggleClass('open');
	});
	$('#foot_close').click(function(){
		$('#foot_toggle').toggleClass('active');
		$('#foot_overlay').toggleClass('open');
	});
	function fullscreen(){
		jQuery('.hero , .img_block, .covervid-wrapper').css({
			width: jQuery(window).width(),
			height: jQuery(window).height()
		});
	}
	fullscreen();
	// Run the function in case of window resize
	jQuery(window).resize(function() {
		fullscreen();
	});
	function fullscreenNpl(){
		jQuery('.hero_no_play').css({
			width: jQuery(window).width(),
			height: jQuery(window).height()+40
		});
	}
	fullscreenNpl();
	// Run the function in case of window resize
	jQuery(window).resize(function() {
		fullscreen();
	});
	$(window).scroll(function () {
		$(".covervid-wrapper , .img_block").css("opacity", 1 - $(window).scrollTop() / 800);
	});
	$(document).ready(function () {
		$(".nav_wrap").sticky({
			topSpacing: 0
		});
	});
	$('.slide_img').click(function () {
		$('.slide_overlay').addClass('so_open');
		$('.slide_inner').addClass('open');
	});
	$('.slide_inner').on('click', function() {

	});
	$("#closeIt").click(function(){
		$(this).removeClass("so_open");
		$(".slide_inner").removeClass("open");
	});

	var $container = $('.grid');
	$container.imagesLoaded( function(){
		$container.masonry({
			itemSelector : '.grid-item'
		});
	});


});




