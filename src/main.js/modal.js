import {
  createModalMarkup,
  addTrailersMarkup,
} from './templates.js/modal-markup';
import { getMovie } from './get-movie';
import { setLocalStorage } from './local-storage';
import { themeSwitcherModals } from './theme-switcher';

const gallery = document.querySelector('.gallery');
const buttonClose = document.querySelector('.button__close');
const backdrop = document.querySelector('.modal__backdrop');
const modal = document.querySelector('.js-modal');
let buttonTrailer;

gallery.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  toggle();
  document.body.style.overflow = 'hidden';
  getMovie(e)
    .then(data => {
      createModalMarkup(data);
      setLocalStorage(data);
      buttonTrailer = document.querySelector('.js-film__button--trailer');
      buttonTrailer?.addEventListener('click', openTrailers);
      buttonTrailer.data = data;
      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', onBackdropClick);
      themeSwitcherModals(modal);
    })
    .catch(error => {
      console.log(error.message);
    });
}
// function addListeners(data) {}
function openTrailers(e) {
  modal.insertAdjacentHTML(
    'beforeend',
    addTrailersMarkup(e.currentTarget.data)
  );
}
function onKeydownEscape(e) {
  e.code === 'Escape' && closeModal();
}
function closeModal() {
  toggle();
  document.body.style.overflow = 'visible';
  buttonClose.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  buttonTrailer.removeEventListener('click', openTrailers);
  modal?.removeEventListener('keydown', onKeydownEscape);
  modal?.removeEventListener('click', closeModal);
  modal.innerHTML = '';
}
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function toggle() {
  backdrop.classList.toggle('is-hidden');
}
