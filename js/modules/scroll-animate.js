export default class AnimateScroll {
  constructor(sections, windowHalf){
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = windowHalf
    this.animateScroll = this.animateScroll.bind(this)
  }
   
  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
    this.addWindowEvent()
  }

  addWindowEvent(){
    window.addEventListener('scroll', this.animateScroll);
  }

  init(){
    this.animateScroll();
  }  
}
