
document.addEventListener('DOMContentLoaded', () => {

      //Mobile Menu
    const burger = document.querySelector('.header__mobile-btn');

    console.log('test');
    const mobileMenu = document.querySelector('.mobile-menu'); 
    const closeButton = document.querySelector('.mobile-menu__button');
    const bodyLock = document.querySelector('.wrapper'); 

    burger.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--active'); 
      bodyLock.classList.add('lock');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--active'); 
      bodyLock.classList.remove('lock');
    });
});


  







