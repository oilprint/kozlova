document.addEventListener('DOMContentLoaded', () => { 

  'use strict';

  gsap.registerPlugin(ScrollTrigger);


  //text

  const tl=gsap.timeline();

  function textAnimation() {

    tl.from('.hero__title', 1, {
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

  const workTitle = document.querySelectorAll('.title-anim');
  workTitle.forEach((char) => {
    const text = new SplitType(char, {  types: 'words, chars'})

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char, 
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }, 
      css: {
        opacity: 0,
      },
      
      stagger: 0.1
    })
  });

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
  ///end text

  //skills animation
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


  function animateListItems(sections, listItemSelector) {
  sections.forEach(section => {
    const listItems = section.querySelectorAll(listItemSelector);
    listItems.forEach(item => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: section,
          start: 'center 60%',
          end: 'bottom 20%',
          scrub: true
        },
        css: {
          filter: "saturate(90%)"
        },
        stagger: 0.1    
      });
    });
  });
  };

  const sections = document.querySelectorAll(".work-card");
  animateListItems(sections, ".skills__item");

  const laptopScreen = window.matchMedia('(min-width:768px)');

  if(laptopScreen.matches) {

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

    //parallax start

    function scrollTrig() {
      let gsapAnim = gsap.utils.toArray('.gsap__anim');
      gsapAnim.forEach(section => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: true,
            snap: true
          },
          yPercent: 100,
          ease: 'none'
        });
      });

      gsap.to('.title__w', {
        scrollTrigger: {
          trigger: '.work',
          start: 'top center',
          end: 'bottom top',
          scrub: true
        },
        xPercent: 20,
        ease: 'none'
      });

      gsap.to('.title__r', {
        scrollTrigger: {
          trigger: '.react',
          start: 'top 30%',
          end: 'bottom top',
          scrub: true
        },
        xPercent: 20,
        ease: 'none'
      });
      gsap.to('.serv__item:nth-child(1)', {
        scrollTrigger: {
          trigger: '.serv',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        xPercent: -20,
        ease: 'none'
      });

      gsap.to('.serv__item:nth-child(3)', {
        scrollTrigger: {
          trigger: '.serv',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        xPercent: 20,
        ease: 'none'
      });
    }

    scrollTrig();
  }  
});