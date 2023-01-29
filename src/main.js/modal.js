import { createModalMarkup } from './templates.js/modal-markup';
import { getMovie } from './get-movie';
import { setLocalStorage } from './local-storage';
import { themeSwitcherModals } from './theme-switcher';

const gallery = document.querySelector('.gallery');
const modalDetails = document.querySelector('.js-modal');
let buttonClose;
let backdrop;
let modal;

gallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  getMovie(e)
    .then(data => {
      createModalMarkup(data);

      setLocalStorage(data);

      modal = document.querySelector('.modal');
      buttonClose = document.querySelector('.button__close');
      backdrop = document.querySelector('.modal__backdrop');

      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', closeModal);

      themeSwitcherModals(modal);
    })
    .catch(error => {
      console.log(error.message);
    });
}

function onKeydownEscape(e) {
  e.code === 'Escape' && closeModal();
}
function closeModal() {
  buttonClose?.removeEventListener('click', closeModal);
  backdrop?.removeEventListener('click', closeModal);
  modalDetails?.removeEventListener('keydown', onKeydownEscape);
  modalDetails?.removeEventListener('click', closeModal);
  modalDetails.innerHTML = '';
}      