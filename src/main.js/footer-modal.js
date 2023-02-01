import { addBackToTop } from './back-to-top';

const footerModalOpen = document.querySelector('[data-action="footerModalOpen"]');
const footerModal = document.querySelector('#footerBackdrop');
const footerModalClose = document.querySelector('[data-action="footerModalClose"]');
const backToTop = document.querySelector('#back-to-top')

footerModalOpen.addEventListener('click', onFooterModal);
footerModal.addEventListener('keydown', onEscape);
footerModalClose.addEventListener('click', offFooterModal)
footerModal.addEventListener('click', onBackdropClick)

function onFooterModal() {
  window.addEventListener('keydown', onEscape);
  footerModal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  backToTop.classList.add('hidden');
}

function offFooterModal() {
  footerModal.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  backToTop.classList.remove('hidden');
  window.removeEventListener('keydown', onEscape);
}

function onEscape(e) {
  if (e.code === 'Escape') {
    offFooterModal();
  }
  return;
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    offFooterModal();
  }
}
