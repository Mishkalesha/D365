document.addEventListener('DOMContentLoaded', function() {
	// Custom JS

	const hamburgerBtn = document.querySelector('.hamburger--squeeze');
	const mobileMenu = document.querySelector('.mobile__menu');

	$('.header__slider').owlCarousel({
		items: 1,
		loop: true
	});

	if ($(window).width() < 1119) {
		startCarousel();
	} else {
		stopCarousel();
	}
	if ($(window).width() < 1080) {
		startCarouselNews();
	} else {
		stopCarouselNews();
	}

	function startCarouselNews() {
		$('.news__items').owlCarousel({
			loop: true,
			center: true,
			margin: 10,
			dots: true,
			responsive: {
				320: {
					items: 1
				}
			}
		});
	}
	function stopCarouselNews() {
		let owl2 = $('.news__items');
		owl2.trigger('destroy.owl.carousel');
		owl2.addClass('off');
	}

	function startCarousel() {
		$('.top__items').owlCarousel({
			loop: true,
			center: true,
			margin: 10,
			responsive: {
				320: {
					items: 1
				},
				720: {
					items: 3
				}
			}
		});
	}
	function stopCarousel() {
		let owl = $('.top__items');
		owl.trigger('destroy.owl.carousel');
		owl.addClass('off');
	}
	$('.feedback__slider').owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		responsive: {
			0: {
				items: 1
			},
			568: {
				items: 2
			},
			820: {
				items: 3
			}
		}
	});
	//Wow initizlize
	new WOW().init({
		scrollContainer: null
	});

	//nselect
	$('.nselect-1').nSelect({
		hideAfterSelect: false,
		theme: ''
	});

	//hamburger
	let hamburgerIsActive = function() {
		this.classList.toggle('is-active');
		if (this.classList.contains('is-active')) {
			mobileMenu.style.transform = 'translateX(0)';
		} else {
			mobileMenu.style.transform = 'translateX(-100%)';
		}
	};
	hamburgerBtn.addEventListener('click', hamburgerIsActive);

	//mobile menu
});
