export default class Modal {
  constructor(open, close, container) {
    this.btnOpen = document.querySelector(open);
    this.btnClose = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.closeModal2 = this.closeModal2.bind(this)
  }

  toggleModal() {
    this.modalContainer.classList.toggle('active');
  }

  addModalEvent() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.closeModal2);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  init() {
    if (this.btnOpen && this.btnClose && this.modalContainer) {
      this.addModalEvent();
    }
    return this
  }

  closeModal2(event) {
    if (event.target === this.modalContainer) {
      this.eventToggleModal(event);
    }
  }
}
