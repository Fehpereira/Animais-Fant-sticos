export default class Accordion {
  constructor(accordionList, activeClass) {
    if(this.accordionList = undefined){
      this.accordionList = document.querySelectorAll("[data-anime='accordion'] dt")
    } else {
      this.accordionList = document.querySelectorAll(accordionList);
    }
    this.activeClass = activeClass;

    this.activeAccordion = this.activeAccordion.bind(this);
  }

  init() {
    if (this.accordionList.length) {
      this.accordionList[0].classList.add(this.activeClass);
      this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
      this.addAccordionEvent();
    }
  }
  toggleAccordion(event) {
    event.currentTarget.classList.toggle(this.activeClass);
    event.currentTarget.nextElementSibling.classList.toggle(this.activeClass);
    return this;
  }
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.toggleAccordion);
    });
  }
}
