import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(menu) {
    this.dropdownMenus = document.querySelectorAll(menu);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  addEventMenu() {
    this.dropdownMenus.forEach((menu) => {
      ['click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('active');
    outsideClick(element, ['click'], () => {
      element.classList.remove('active');
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventMenu();
    }
    return this;
  }
}
