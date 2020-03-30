document.addEventListener('DOMContentLoaded', function() {
	// Custom JS

	const hamburgerBtn = document.querySelector('.hamburger--squeeze');

	$('.header__slider').owlCarousel({
		items: 1,
		loop: true
	});

	if ($(window).width() < 1119) {
		startCarousel();
	} else {
		stopCarousel();
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
		$('.news__items').owlCarousel({
			loop: true,
			center: true,
			margin: 10,
			dots: true,
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
		let owl2 = $('.news__items');
		owl.trigger('destroy.owl.carousel');
		owl2.trigger('destroy.owl.carousel');
		owl.addClass('off');
		owl2.addClass('off');
	}
	$('.feedback__slider').owlCarousel({
		items: 3,
		loop: true,
    margin: 20,
    responsive:{
      0:{
        items:1
      },
      568:{
        items: 2
      },
      820:{
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
	};
	hamburgerBtn.addEventListener('click', hamburgerIsActive);
});
