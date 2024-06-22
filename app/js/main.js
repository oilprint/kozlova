
document.addEventListener('DOMContentLoaded', () => {
  'use strict';




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
      
      link.addEventListener('mouseenter', () => {
        link.classList.add('active')
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
  

//curcor2 end


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
});


  







