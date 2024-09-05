document.addEventListener('DOMContentLoaded', () => {
  'use strict';

    //Lenis Smooth scroll
    const lenis = new Lenis({
      duration: 1.2
    })

    lenis.on('scroll', (e) => {
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    //Integration Lenis on GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.lagSmoothing(0);

    const services = gsap.utils.toArray(".work-page__item");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
   
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".work-page__img");

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            }
          });

            ScrollTrigger.create({
              trigger: service,
              start: "top bottom",
              end: "top top",
              scrub: true,
              onUpdate: (self) => {
                let progress = self.progress;
                let newHeight = 250 + 200 * progress;
                gsap.to(service, {
                  height: newHeight + "px",
                  duration: 0.1,
                  ease: "none",
                });
              },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const monbileScreen = window.matchMedia('(min-width:1025px)');

    if(monbileScreen.matches) {
      services.forEach((service) => {
      observer.observe(service);
    });
    };
});