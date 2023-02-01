import { gallery } from './gallery-markup';
import { addFilter } from '../filter';
import { createSwitcherMarkup } from './trending-switcher';
import { showTrending } from '../trending';

function addGallerySettings() {
  const settingsMarkup = `
      <div class="gallery__settings">
        <div class="gallery__settings-container">
          <div class="filter__wrapper">
            <button class="filter__icon"></button>
            <div class="filter__categories is-hidden">
              <button class="filter__category" type="button">By genre</button>
            </div>
          </div>
        </div>
        <ul class="filter__list is-hidden"></ul>
      </div>`;
  gallery.insertAdjacentHTML('afterbegin', settingsMarkup);
  const container = document.querySelector('.gallery__settings-container');

  createSwitcherMarkup(showTrending, container);
  addFilter();
}

export { addGallerySettings };
