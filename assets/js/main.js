(function ($) {
	"use strict";


	// CUSTOM JS


	// Responsive-menubar
	const openMenu = document.querySelector('.open-menu')
	const closeMenu = document.querySelector('.close-menu')
	const menuOverlay = document.querySelector('.menu-active-overlay')
	const menu = document.querySelector('.mainmenu')
	const menuLink = document.querySelectorAll('.mainmenu ul li')

	openMenu.addEventListener('click', ()=>{
		menu.classList.add('active')
		menuOverlay.classList.add('active')
	})
	closeMenu.addEventListener('click', ()=>{
		menu.classList.remove('active')
		menuOverlay.classList.remove('active')
	})
	menuOverlay.addEventListener('click', ()=>{
		menu.classList.remove('active')
		menuOverlay.classList.remove('active')
	})
	menuLink.forEach(link => {
		link.addEventListener('click', ()=>{
			menu.classList.remove('active')
			menuOverlay.classList.remove('active')
		})
	});



	// zooming-bg-on hover
	const playBtn1 = document.querySelector('.play-btn')
	const hoverImg1 = document.querySelector('.mission-sec-img-1')
	const playBtn2 = document.querySelector('.newsletter-tab-img-wrapper .play-btn')
	const hoverImg2 = document.querySelector('.newsletter-tab-img')

	zoomBg(playBtn1, hoverImg1)
	zoomBg(playBtn2, hoverImg2)

	function zoomBg(btn, hoverImg) {
		btn.addEventListener('mouseover', ()=>{
			hoverImg.classList.add('zoom-bg')
		})
		btn.addEventListener('mouseout', ()=>{
			hoverImg.classList.remove('zoom-bg')
		})
	}
		

	
	// focusedInput
	function focusedInput() {
		const inputItems = document.querySelectorAll('.input-item input')
		inputItems.forEach(inputItem => {
			inputItem.addEventListener('focus', ()=>{
				inputItem.previousElementSibling.classList.add('active')
			})
			inputItem.addEventListener('focusout', ()=>{
				inputItem.previousElementSibling.classList.remove('active')
			})
		});
	};focusedInput();


	
	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});


	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	// Add minus icon for collapse element which is open by default
	window.addEventListener('load', ()=>{

		$(".collapse.show").each(function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "0");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "1");
			$(this).prev(".card-header").parent('.card').addClass('active-aco')
		});
	
		// Toggle plus minus icon on show hide of collapse element
		$(".collapse").on('show.bs.collapse', function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "0");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "1");
			$(this).prev(".card-header").parent('.card').addClass('active-aco')
		}).on('hide.bs.collapse', function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "1");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "0");
			$(this).prev(".card-header").parent('.card').removeClass('active-aco')
		});
	})


	/*=========================
	Hero-slider SLIDER JS
	===========================*/
	function mainSlider() {
		var BasicSlider = $('.slide-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.slider-item:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	/*=========================
	testimony-active-slider
	===========================*/
	$('.testimony-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

	});



	/*=========================
	gallery-active-slider
	===========================*/
	$('.gallery-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
  		centerPadding: '0px',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	/*=========================
	product-2-active-slider
	===========================*/
	$('.product-2-active-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',

	});



	/*=========================
	/*=========================
	product-active-slider
	===========================*/
	$('.product-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});
	/*=========================





	/*=========================
	magnificPopup image JS
	===========================*/
	$('.work-process-video a, .video-btn, .play-btn, footer-gallery-wrap a').magnificPopup({
		type: 'iframe'
	});


	$('.gallery-active-slider').magnificPopup({
		delegate: 'gallery-img',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	
})(jQuery);