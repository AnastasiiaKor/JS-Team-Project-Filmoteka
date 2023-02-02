let period = localStorage.getItem('switcher-period') || 'week';
import { showTrending, setTrendingCallback } from '../trending';

function createSwitcherMarkup(container) {
  const markup = `<div class="switcher__container">
    <span class="switcher__text">Trending of the</span>
        <div class="switcher">
          <div class="switcher__item">
            <input
              type="radio"
              id="day"
              value="day"
              name="switcher"
              class="switcher__item-radio"
            />
            <label for="day" class="switcher__item-label">
              Day
            </label>
          </div>
          <div class="switcher__item">
            <input
              type="radio"
              id="week"
              value="week"
              name="switcher"
              class="switcher__item-radio"
            />
            <label for="week" class="switcher__item-label">
              Week
            </label>
          </div>
        </div>
    </div>`;

  container.insertAdjacentHTML('beforeend', markup);
  const switcher = document.querySelector('.switcher');
  const options = switcher.querySelectorAll('.switcher__item-radio');

  switcher.addEventListener('click', addSwitcher);
  [...options].find(option => option.value === period).checked = true;

  function addSwitcher(e) {
    const optionToSelect = [...options].find(option => !option.checked);
    optionToSelect.checked = true;

    period = optionToSelect.value;

    localStorage.setItem('switcher-period', period);
    setTrendingCallback();
    showTrending(1);
  }
}

export { period, createSwitcherMarkup };
