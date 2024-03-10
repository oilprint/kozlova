document.addEventListener('DOMContentLoaded', () => { 


'use strict';


gsap.registerPlugin(ScrollTrigger); 
//Lenis Smooth scroll
	const lenis = new Lenis({
		duration: 1.2,
	});
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	//Integration Lenis on GSAP ScrollTrigger
	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

// scrollPortfolio

let workInfoItems = document.querySelectorAll('.work__photo-item');
workInfoItems.forEach((item, index) => {
  item.style.zIndex = workInfoItems.length - index;
});

gsap.set('.work__photo-item', {
  clipPath: function () {
    return 'inset(0px 0px 0px 0px)'
  }
});

const animation = gsap.to('.work__photo-item:not(:last-child)', {
  clipPath: function () {
    return 'inset(0px 0px 100% 0px)'
  },
  stagger: 0.5,
  ease: 'none',
});

ScrollTrigger.create({
  trigger: '.work__wrapper',
  start:'top top',
  end: 'bottom bottom',
  animation: animation,
  scrub: true,
})

/////end scrollPortfolio

//resize window
	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		console.log('Window resized!');
		location.reload();
	}
	
  window.addEventListener('resize', debouncedResize);

});