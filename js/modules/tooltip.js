export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  init() {
    this.addTooltipEvents();
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';

    if (event.pageX + 190 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipEvents() {
    if (this.tooltips.length) {
      this.tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', this.onMouseOver);
      });
    }
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
}
