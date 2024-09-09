
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  //hero title animation
  const tl=gsap.timeline();
  function textAnimation() {

    tl.from('.hero__title-h1', 1, {
      opacity:0,
      scaleY: 0.6,
      skewX: '10deg',
      y: 40,
      ease: 'power4.inOut'
    })
    .from('.hero__subtitle', 1, {
      opacity:0,
      scaleY: 0.6,
      skewX: '10deg',
      y: 40,
      ease: 'power4.inOut'
    },
    0.3
    )
  };

  textAnimation(); 
  //END //hero title animation

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

    // scrollPortfolio END

  //about skills icon 
  gsap.to('.about .skills__item', {
    scrollTrigger: {
      trigger: '.about', 
      start: 'center 80%',
      end: 'bottom 20%',
      scrub: true
    }, 
    css: {
       filter: "saturate(100%)"
    },
    stagger: 0.1
  });
  //about skills icon END


  //Color text splitTypes
  const splitTypes = document.querySelectorAll('.reveal-type');
  splitTypes.forEach((char,i) => {
    const text = new SplitType(char, {  types: 'words, chars'})

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char, 
        start: 'top 80%',
        end: 'top 20%',
        scrub: true
      }, 
      css: {
        color: '#363839',
      },
      
      stagger: 0.1
    })
  })
  ///end Color text splitTypes

  //my service
  const serviceTitle = document.querySelectorAll('.serv__item-title');
  serviceTitle.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item, 
        start: 'top 90%',
        end: 'top 65%',
        scrub: true
      }, 
      opacity:0,
      scaleY: 0.6,
      skewX: '10deg',
      y: 40,
      ease: 'power4.inOut'
    })
  })

  //my service END

  //margue
  function marquee() {
    gsap.to('.marq__wrapp--1', {
			scrollTrigger: {
				trigger: '.horizontal-items',
				start: 'top bottom',
				scrub: 2.4
			},
			xPercent: -30
		})
    gsap.to('.marq__wrapp--2', {
			scrollTrigger: {
				trigger: '.marq__wrapp--2',
				start: 'top bottom',
				scrub: 1.9
			},
			xPercent: 40
		})
  };
  marquee();

  

