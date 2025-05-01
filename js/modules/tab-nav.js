export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add('active');
      this.addEventTabMenu();
      return this;
    }
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove('active');
    });
    const animation = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('active', animation);
  }

  addEventTabMenu() {
    this.tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }
}
