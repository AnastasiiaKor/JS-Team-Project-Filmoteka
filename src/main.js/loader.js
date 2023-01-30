class LoadSpinner {
  constructor({ selector }) {
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.icon = refs.button.querySelector('.search-form__icon');
    // refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');

    return refs;
  }

  disable() {
    this.refs.button.disabled = false;
    // this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.add('is-hidden');
    this.refs.icon.classList.remove('is-hidden');
  }

  enable() {
    this.refs.button.disabled = true;
    // this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.remove('is-hidden');
    this.refs.icon.classList.add('is-hidden');
  }
}

export { LoadSpinner };


//Код для перевикористання класу

// import { LoadSpinner } from './loader';
// const loadSpinnerBtn = new LoadSpinner({ selector: '[data-action="loading"]' });

// loadSpinnerBtn.enable();
// loadSpinnerBtn.disable();