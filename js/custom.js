$(function() {


		/*===========scroll to our me========*/
	$("#js-link-our-me").on("click", function(e) {
		e.preventDefault();

		var ourMeOffset = $("#js-our-me").offset().top;
		$("html, body").animate({
			scrollTop: ourMeOffset
		}, 1200);
	});

	/*scroll to my skills*/
	$("#js-link-my-skills").on("click", function(e) {
		e.preventDefault();

		var mySkillsOffset = $("#js-my-skills").offset().top;
		$("html, body").animate({
			scrollTop: mySkillsOffset
		}, 1200);
	});

	/*scroll to contact*/
	$("#js-link-contacts").on("click", function(e) {
		e.preventDefault();

		var contactsOffset = $("#js-contacts").offset().top;
		$("html, body").animate({
			scrollTop: contactsOffset
		}, 1200);
	});

	/* =============fixed header menu======*/
	
	var headerH = $("#js-header").height();
	$(document).on("scroll", function() {

		var documentScroll = $(this).scrollTop();

		if((documentScroll+1) > headerH) {
			$("#js-nav-container").addClass("fixed");
			
		} else {
			$("#js-nav-container").removeClass("fixed");
		}
	});

	/*
	 =============  modals ======*/
	 $(".js-show-modal").on("click", function(e) {
	 	e.preventDefault();
	 	$(".js-modal, #js-overlay").fadeIn(500);
	 	$("body").addClass("open-modal");
	 });


	 $(".js-modal-close, #js-overlay").on("click", function(e) {
	 	e.preventDefault();
	 	$(".js-modal, #js-overlay").fadeOut(400);
	 	$("body").removeClass("open-modal");
	 });



	/*
	 =============  technologies ======*/
	 $(".js-technologies-title").on("click", function(e) {
	 	e.preventDefault();

	 	$(".js-technologies-content").slideToggle(1500);
	 });



	/*
	 =============  popup ======*/
	$(".js-popup").hover(function() {
		var $this = $(this),
			popupId = $this.attr("href");
		$(popupId).fadeIn();


	}, function() {
		var $this = $(this),
			popupId = $this.attr("href");
		$(popupId).fadeOut();
	});


	/*
	 =============  slick ======
	https://github.com/kenwheeler/slick/ */
	$('.single-item').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1172,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});




});