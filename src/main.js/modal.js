import { createModalMarkup } from './templates.js/modal-markup';
import { getMovie } from './get-movie';

const gallery = document.querySelector('.gallery');
const modalDetails = document.querySelector('.js-modal');
let buttonClose;
let backdrop;

gallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  getMovie(e)
    .then(data => {
      createModalMarkup(data);

      buttonClose = document.querySelector('.button__close');
      backdrop = document.querySelector('.modal__backdrop');

      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', closeModal);
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
