// const REFS = {
//     footerModalBackdrop: document.querySelector('[data-action="footerModalBackdrop"]'),
//     studentsModal: document.querySelector('[data-studentsModal]'),
//     footerCloseBtnRef: document.querySelector('[data-action="footerCloseBtn"]'),
// };

// const footerModalBackdrop = document.querySelector('[data-modal-footerOpen]');
// const studentsModal = document.querySelector('[data-modal-students]');
// const footerCloseBtn = document.querySelector('[data-modal-footerClose]');



// studentsModal.addEventListener('click', onFooterModalOpen);
// footerModalBackdrop.addEventListener('keydown', onEscape);

// function onFooterModalOpen() {
//   footerModalBackdrop.classList.toggle('is-hidden');  
// }

// function onFooterModalClose() {
//   footerModalBackdrop.classList.add('is-hidden');
// }

// function onFooterModalClose() {
//   REFS.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
//   window.removeEventListener('keydown', onEscape);
//   REFS.footerCloseBtnRef.removeEventListener('click', onFooterModalClose);
//   REFS.footerModalBackdrop.classList.add('is-hidden');
//   setBodyOverflow('auto');
// }


function onEscape(e) {
  if (e.code === 'Escape') {
    onFooterModalClose();
  }

  return;
}
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

