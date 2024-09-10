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

    // filters
  const filterBtns = document.querySelectorAll(".fiters-btn");
  const worksList = document.querySelector(".works__list");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      const filterValue = btn.getAttribute("data-filter");

      for (const item of worksList.children) {
        if (filterValue === "all") {
          item.classList.remove('hide');
          item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
          item.classList.remove('hide')
          item.classList.add('show')
        } else {
          item.classList.remove('show')
          item.classList.add('hide')
        }
      }
    });
  });


  const tl2=gsap.timeline();

  function titleWorksAnimation() {

    tl2.from('.works__title-h1', 1, {
      opacity:0,
      scaleY: 0.6,
      skewX: '10deg',
      y: 40,
      ease: 'power4.inOut'
    })
    .from('.works__headline', 1, {
      opacity:0,
      scaleY: 0.6,
      skewX: '10deg',
      y: 40,
      ease: 'power4.inOut'
    },
    0.3
    )
  };
  titleWorksAnimation(); 

    
});