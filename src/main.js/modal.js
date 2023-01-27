import { createModalMarkup } from './templates.js/modal-markup';
import { getMovie } from './get-movie';

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openModal);
let modalContainer;
let modalDetails = document.querySelector('.js-modal');
modalDetails.addEventListener('click', onCloseClick);

function openModal(e) {
  e.preventDefault();
  //   document.addEventListener('click', onCloseClick);

  getMovie(e)
    .then(data => {
      createModalMarkup(data);
      modalContainer = document.querySelector('.modal');
      modalContainer.addEventListener('click', onCloseClick);
    })
    .catch(error => {
      console.log(error.message);
    });
}
function onCloseClick(e) {
  e.preventDefault();
  console.log(e.target.nodeName);
  console.log(e);
  if (e.target.nodeName === 'svg') {
    // modalContainer.removeEventListener();
    modalDetails.innerHTML = '';
  }
}
// function onClickOutsideModal(e) {
//   // console.log(e.target.nodeName);
//   // if (e.target.nodeName === ) {
//   //   // modalContainer.removeEventListener();
//   //   modalDetails.innerHTML = '';
//   // }
// }
