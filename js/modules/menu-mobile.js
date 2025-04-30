import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menulist = document.querySelector("[data-menu='list']");
  const events = ['click'];

  if (menuButton) {
    function openMenu(event) {
      menulist.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menulist, ['click'], () => {
        menulist.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }

    events.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
}
