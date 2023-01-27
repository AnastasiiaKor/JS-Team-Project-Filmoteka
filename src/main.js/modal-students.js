
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


// function onFooterModalBackdropClick(e) {
//   if (e.target === e.currentTarget || e.code === 'Escape') {
//     offFooterModal();
//   }
// }



// const REFS = {
//     footerModalBackdrop: document.querySelector('[data-action="footerModalBackdrop"]'),
//     studentsModal: document.querySelector('[data-studentsModal]'),
//     footerCloseBtnRef: document.querySelector('[data-action="footerCloseBtn"]'),
// };



// function onFooterModalOpen() {
//   REFS.footerModalBackdrop.addEventListener('click', onFooterModalBackdropClick);
//   REFS.footerCloseBtnRef.addEventListener('click', onFooterModalClose);
//   window.addEventListener('keydown', onEscape);
//   REFS.footerModalBackdrop.classList.remove('is-hidden');
//   setBodyOverflow('hidden');
//   // REFS.goTopBtn.classList.remove('show');
// }

// function onFooterModalClose() {
//   REFS.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
//   window.removeEventListener('keydown', onEscape);
//   REFS.footerCloseBtnRef.removeEventListener('click', onFooterModalClose);
//   REFS.footerModalBackdrop.classList.add('is-hidden');
//   setBodyOverflow('auto');
// }

// // Закрываем мобильное меню на более широких экранах
// // в случае изменения ориентации устройства.
// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//   if (!e.matches) return;
//   REFS.footerModalBackdrop.classList.add('is-hidden');
//   onFooterModalClose();
// });

// function onFooterModalBackdropClick(e) {
//   if (e.target === e.currentTarget || e.code === 'Escape') {
//     onFooterModalClose();
//   }
// }

// // export default function setBodyOverflow(value) {
// //   document.body.style.overflow = value;
// // }

