/* First Slider */

new Swiper ('.swiper-container',{
	/*pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	/*centeredSlides: true,*/
	/*spaceBetween: 1,*/
	slidesPerView: 1,
	watchOverflow: true,
	initialSlide: 0,
	/*loop: true,*/
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
   effect: 'flip',
   flipEffect: {
      slideShadows: true,
      limitRotation: true,
   }
});




/* Second Slider */ 

const slider = document.querySelector('.our__slider');

let mySwiper = new Swiper(slider, {
   slidesPerView: 3,
   spaceBetween: 0,
   slideClass: 'slide',
   wrapperClass: 'slider-wrap',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		750: {
			slidesPerView: 1.5,
		},
		900: {
			slidesPerView: 2.5,
		},
		1400: {
			slidesPerView: 3.5,
		}
	}
})


/* Burger */ 

document.querySelector('.header__burger').onclick = function() {
   document.querySelector('.header-middle-top__menu').classList.toggle('header-middle-top__menu-active')
   document.querySelector('.header__burger').classList.toggle('active')
   /*$('body').toggleClass('lock')*/
}