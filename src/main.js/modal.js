import {
  createModalMarkup,
  addTrailersMarkup,
} from './templates.js/modal-markup';
import { getMovieData } from './get-movie';
import { themeSwitcherModals } from './theme-switcher';
import { themeSwitcherModalButtons } from './theme-switcher';
import { initWatchedQueueBtns } from './library-manager';
import { loadSimilar } from './similar';

const buttonClose = document.querySelector('.button__close');
const backdrop = document.querySelector('.modal__backdrop');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.modal');
let movieID = null;
let buttonTrailer;
let buttonSimilar;
let filmButtons;

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.className !== 'gallery__link') return;
  e.preventDefault();
  movieID = e.target.getAttribute('href');
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  getMovieData(movieID)
    .then(data => {
      modal.innerHTML = createModalMarkup(data);

      initWatchedQueueBtns(data);

      buttonTrailer = document.querySelector('.js-film__button--trailer');
      if (buttonTrailer) {
        buttonTrailer.addEventListener('click', openTrailers);
        buttonTrailer.data = data;
        buttonTrailer.disabled = false;
      }
      buttonSimilar = document.querySelector('.film__button--recommended');
      buttonSimilar.addEventListener('click', openRelated);

      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', onBackdropClick);
      themeSwitcherModals(modalContainer);

      filmButtons = document.querySelectorAll('.film__button');
      filmButtons.forEach(function (filmButton) {
        themeSwitcherModalButtons(filmButton);
      });
    })
    .catch(error => {
      console.log(error);
    });
}
function openRelated() {
  loadSimilar(movieID);
  closeModal();
}
function openTrailers(e) {
  modal.insertAdjacentHTML(
    'beforeend',
    addTrailersMarkup(e.currentTarget.data)
  );
  buttonTrailer.disabled = true;
}
function onKeydownEscape(e) {
  e.code === 'Escape' && closeModal();
}
function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  buttonClose.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  buttonTrailer?.removeEventListener('click', openTrailers);
  buttonSimilar.removeEventListener('click', openRelated);
  modal?.removeEventListener('keydown', onKeydownEscape);
  modal?.removeEventListener('click', closeModal);
  modal.innerHTML = '';
}
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
// function toggle() {
//   backdrop.classList.toggle('is-hidden');
// }
/* export { closeModal }; */
