export default function menuMobile() {
  function menuEvents() {
    const menu = document.querySelector('.menu-mobile');
    const navigation = document.querySelector('.menu-links');
    // const navLinks = document.querySelectorAll('.menu-link');

    function openMenu(e) {
      // if (e.type === 'touchstart') {
      //   e.preventDefault();
      // }
      menu.classList.toggle('open');
      navigation.classList.toggle('open');
      if (menu.classList.contains('open')) {
        menu.ariaExpanded = true;
      } else {
        menu.ariaExpanded = false;
      }

      // ['click', 'touchstart'].forEach((event) => {
      //   navLinks.forEach((link) => {
      //     link.addEventListener(event, openMenu);
      //   });
      // });
    }

    menu.addEventListener('click', openMenu);
    // menu.addEventListener('touchstart', openMenu);
  }

  menuEvents();
}
