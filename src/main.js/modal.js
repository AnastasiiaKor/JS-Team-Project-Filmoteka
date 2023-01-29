import { createModalMarkup } from './templates.js/modal-markup';
import { getMovie } from './get-movie';
import { setLocalStorage } from './local-storage';

const gallery = document.querySelector('.gallery');
const modalDetails = document.querySelector('.js-modal');
let buttonClose;
let backdrop;
let buttonTrailer;

gallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  getMovie(e)
    .then(data => {
      createModalMarkup(data);
      setLocalStorage(data);

      buttonClose = document.querySelector('.button__close');
      backdrop = document.querySelector('.modal__backdrop');
      buttonTrailer = document.querySelector('.js-film__button--trailer');

      buttonTrailer.addEventListener('click', openTrailer);
      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', onBackdropClick);
    })
    .catch(error => {
      console.log(error.message);
    });
}

function onKeydownEscape(e) {
  e.code === 'Escape' && closeModal();
}
function closeModal() {
  buttonClose.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  buttonTrailer.removeEventListener('click', openTrailer);
  modalDetails?.removeEventListener('keydown', onKeydownEscape);
  modalDetails?.removeEventListener('click', closeModal);
  modalDetails.innerHTML = '';
}
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function openTrailer(e) {
  e.preventDefault();
  console.log('button');
  addTrailersMarkup(trailers);
}

function addTrailersMarkup(trailers) {
  console.log(trailer);
}
