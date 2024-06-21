
document.addEventListener('DOMContentLoaded', () => {

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


  







