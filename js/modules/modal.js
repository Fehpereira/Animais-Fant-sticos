export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (btnOpen && btnClose && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle('active');
    }

    function closeModal2(event) {
      if (event.target === this) {
        toggleModal(event);
        modalContainer.classList.remove('active');
      }
    }

    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', closeModal2);
  }
}
