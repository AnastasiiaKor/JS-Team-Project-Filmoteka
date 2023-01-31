import {
  createModalMarkup,
  addTrailersMarkup,
} from './templates.js/modal-markup';
import { getMovie } from './get-movie';
/* import { setLocalStorage } from './local-storage'; */
import { themeSwitcherModals } from './theme-switcher';
import { themeSwitcherModalButtons } from './theme-switcher';
import { initBtns } from './library-manager';
import { gallery } from './templates.js/gallery-markup';
import { seeSimilar } from './similar';


const buttonClose = document.querySelector('.button__close');
const backdrop = document.querySelector('.modal__backdrop');
const modal = document.querySelector('.modal');
let buttonTrailer;
let filmButtons;

gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.className !== 'gallery__link') return;
  e.preventDefault();
  toggle();
  document.body.style.overflow = 'hidden';
  getMovie(e)
    .then(data => {
      createModalMarkup(data);
      /* setLocalStorage(data); */
      initBtns(data);
      buttonTrailer = document.querySelector('.js-film__button--trailer');
      filmButtons = document.querySelectorAll('.film__button');
      buttonTrailer?.addEventListener('click', openTrailers);
      buttonTrailer.data = data;
      buttonTrailer.disabled = false;
      document.addEventListener('keydown', onKeydownEscape);
      buttonClose.addEventListener('click', closeModal);
      backdrop.addEventListener('click', onBackdropClick);
      themeSwitcherModals(modal);

      filmButtons.forEach(function (filmButton) {
        themeSwitcherModalButtons(filmButton);
      });
      seeSimilar(modal);
    })
    .catch(error => {
      console.log(error);
    });
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
  toggle();
  document.body.style.overflow = 'visible';
  buttonClose.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  buttonTrailer.removeEventListener('click', openTrailers);
  modal?.removeEventListener('keydown', onKeydownEscape);
  modal?.removeEventListener('click', closeModal);
  /* modal.innerHTML = ''; */
}
function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function toggle() {
  backdrop.classList.toggle('is-hidden');
}
export { closeModal };
