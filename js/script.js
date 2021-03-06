$(document).ready(function () {
	$('.fly-item').removeClass('fly-item_anim');

	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});
	
	$('.multiple-items').slick({
		dots: true,
		infinite: true,
		//autoplay: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		nextArrow: '<button type="button" class="button right-arrow__portfolio"></button>',
		prevArrow: '<button type="button" class="button left-arrow__portfolio"></button>',
	});

	$('.burger-menu').click(function () {
		$(this).toggleClass('burger-menu_active');
		$('.header__mobile-links').toggleClass('header__mobile-links_active');
	});

	$('.nav-link_mobile').click(function () {
		$('.burger-menu').removeClass('burger-menu_active');
		$('.header__mobile-links').removeClass('header__mobile-links_active');
	});

	$('.show_popup').click(function () {
		$('.form-container').fadeIn(500);
		$('.popup-container').css('display', 'flex');
		$('body').css('overflow', 'hidden');
		return false;
	});

	// $('.popup__form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function () {
	// 		$(this).parent().parent().parent().fadeOut(100);
	// 		$('.thanks-cotainer').fadeIn();
	// 		$('.popup__form').find('input').val('');
	// 		$('.popup__form').trigger('reset');
	// 	});
	// 	return false;
	// });

	$('.close-button').click(function () {
		$(this).parent().parent().fadeOut(100);
		$('body').css('overflow', 'auto');
		return false;
	});

	$('.popup-container').click(function (event) {
		if (event.target == this) {
			$(this).fadeOut(100);
			$('body').css('overflow', 'auto');
			return false;
		}
	});

	jQuery(function ($) {
		$("#phone").mask("+7(999) 999-99-99");
	});
});
