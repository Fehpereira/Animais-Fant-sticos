import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menuList);
    this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menulist.classList.add('active');
    this.menuButton.classList.add('active');
    outsideClick(this.menulist, this.events, () => {
      this.menulist.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  init() {
    if (this.menuButton) {
      this.addMenuButtonEvent();
    }
    return this;
  }

  addMenuButtonEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }
}
