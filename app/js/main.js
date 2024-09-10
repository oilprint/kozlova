
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  
      //Mobile Menu
    const burger = document.querySelector('.header__mobile-btn');

    const mobileMenu = document.querySelector('.mobile-menu'); 
    const closeButton = document.querySelector('.mobile-menu__button');
    const bodyLock = document.querySelector('body'); 
    

    burger.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--active'); 
      bodyLock.classList.add('lock');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--active'); 
      bodyLock.classList.remove('lock');
    });

 
  function cursor() {

    let cursor = document.querySelector(".cursor"),
        follower = document.querySelector(".follow"),
        cursorScale = document.querySelectorAll(".hover-scale"),
        cursorCycle = document.querySelectorAll(".hover-cycle")

    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(follower, {
              css: {
                  left: posX - 20,
                  top: posY - 20
              }
          });

          gsap.set(cursor, {
              css: {
                  left: mouseX,
                  top: mouseY
              }
          });
      }
    });

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY
    });

    cursorScale.forEach(link => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
      });
      link.addEventListener('mouseleave', () => {
          cursor.classList.remove('active');
          follower.classList.remove('active');
      });
    });

     cursorCycle.forEach(link => {
      link.addEventListener('mouseleave', () => {
          cursor.classList.remove('active');
          follower.classList.remove('cycle-active');
      });
      link.addEventListener('mousemove', () => {
        cursor.classList.add('active');
        follower.classList.add('cycle-active');
      });
    });
	}

	cursor();



  //smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отмена действия по умолчанию

        const targetId = this.getAttribute('href').substring(1); // Получение ID целевого элемента

        bodyLock.classList.remove('lock');
        mobileMenu.classList.remove('mobile-menu--active'); 

        // Плавная прокрутка к якорю
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth' // Плавный скроллинг
        });
    });
  });
  //smooth scroll END

  //word-card title animation
  const workTitle = document.querySelectorAll('.title-anim');
  workTitle.forEach((item) => {
    const text = new SplitType(item, {types: 'words, chars'})

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: item, 
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
  //word-card title animation END

  //skills icons animation
  
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

  //skills icons animation END

  //initial Lenis for window>768px
  const laptopScreen = window.matchMedia('(min-width:768px)');

  if (laptopScreen.matches) {
    // Lenis Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }
  //initial Lenis for window>768px END


});


  







