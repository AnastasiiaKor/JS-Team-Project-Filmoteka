/* import { gallery } from './gallery-markup'; */
import { addFilter } from '../filter';
import { createSwitcherMarkup } from './trending-switcher';
import { showTrending } from '../trending';

const gallery = document.querySelector('.gallery');

function addGallerySettings() {
  const settingsMarkup = `
      <div class="gallery__settings">
        <div class="gallery__settings-container">
          <button class="filter__button" type="button">Select genre</button>
        </div>
        <ul class="filter__list is-hidden"></ul>
      </div>`;
  gallery.insertAdjacentHTML("beforebegin", settingsMarkup);
  const container = document.querySelector('.gallery__settings-container');

/*   createSwitcherMarkup(showTrending, container); */
/*   addFilter(); */
}

export { addGallerySettings };
