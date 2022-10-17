export default function menuMobile() {
  function menuEvents() {
    const menu = document.querySelector('.menu-mobile');
    const navigation = document.querySelector('.menu-links');

    function openMenu(e) {
      if (e.type === 'touchstart') {
        e.preventDefault();
      }
      menu.classList.toggle('open');
      navigation.classList.toggle('open');
      if (menu.classList.contains('open')) {
        menu.ariaExpanded = true;
      } else {
        menu.ariaExpanded = false;
      }
    }

    menu.addEventListener('click', openMenu);
    menu.addEventListener('touchstart', openMenu);
  }

  menuEvents();
}
