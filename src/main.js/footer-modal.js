const footerModalOpen = document.querySelector('[data-action="footerModalOpen"]');
const footerModal = document.querySelector('#footerBackdrop');
const footerModalClose = document.querySelector('[data-action="footerModalClose"]');


footerModalOpen.addEventListener('click', onFooterModal);
footerModal.addEventListener('keydown', onEscape);
footerModalClose.addEventListener('click', offFooterModal)
footerModal.addEventListener('click', offFooterModal)

function onFooterModal() {
  window.addEventListener('keydown', onEscape);
  footerModal.classList.remove('is-hidden');

}

function offFooterModal() {
  footerModal.classList.add('is-hidden');

}

function onEscape(e) {
  if (e.code === 'Escape') {
    offFooterModal();
  }
  return;
}

function onFooterModalBackdropClick(e) {
  offFooterModal()
}
