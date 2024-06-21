
document.addEventListener('DOMContentLoaded', () => {
 console.log("cursor1");
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

    // cursor custom start

    let cursor = document.querySelector(".cursor"),
        follower = document.querySelector(".cursor-follower");
        console.log("cursor");

    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    document.addEventListener("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    document.querySelectorAll(".work__photo-link").forEach(function(img) {
        img.addEventListener("mouseenter", function() {
            cursor.classList.add("active");
            follower.classList.add("active");
        });

        img.addEventListener("mouseleave", function() {
            cursor.classList.remove("active");
            follower.classList.remove("active");
        });
    });
      // cursor custom end


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


  







