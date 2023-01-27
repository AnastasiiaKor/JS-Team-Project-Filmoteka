export class Paginator {
  #totalPages;
  #currentPage;

  constructor(callback, container) {
    this.#currentPage = 1;
    this.#totalPages = 100;
    this.container = container;
    this.container.addEventListener('click', e => {
      const response = e.target.dataset.button;
      const isActive = !e.target.classList.contains('unactive');
      if (response && isActive) {
        switch (response) {
          case 'left':
            callback(this.#currentPage - 1);
            break;
          case 'right':
            callback(this.#currentPage + 1);
            break;
          case 'back':
            callback(this.#currentPage - 3);
            break;
          case 'front':
            callback(this.#currentPage + 3);
            break;
          default:
            callback(Number(response));
        }
      }
    });
    this.render();
  }
  set totalPages(n) {
    this.#totalPages = n;
    this.render();
  }

  set currentPage(n) {
    this.#currentPage = n;
    this.render();
  }

  render() {
    let paginatorCode = '';

    if (this.#currentPage < 6) {
      //begin of region
      const list = [];
      for (let i = 1; i <= 7; i += 1) {
        const addButton =
          i === this.#currentPage
            ? this.active(this.#currentPage)
            : this.number(i);
        list.push(addButton);
      }
      paginatorCode = `${this.arrow('left', this.#currentPage > 1)} ${list.join(
        ''
      )} ${this.dots('front')} ${this.number(this.#totalPages)} ${this.arrow(
        'right',
        true
      )}`;
    } else if (this.#currentPage > this.#totalPages - 6) {
      // end of region
      const list = [];
      for (let i = this.#totalPages - 6; i <= this.#totalPages; i += 1) {
        const addButton =
          i === this.#currentPage
            ? this.active(this.#currentPage)
            : this.number(i);
        list.push(addButton);
      }
      paginatorCode = `${this.arrow('left', true)} ${this.number(
        1
      )} ${this.dots('back')}  ${list.join('')} ${this.arrow(
        'right',
        this.#currentPage < this.#totalPages
      )}`;
    } else {
      //middle of region
      const list = `${this.number(this.#currentPage - 2)} ${this.number(
        this.#currentPage - 1
      )} ${this.active(this.#currentPage)} ${this.number(
        this.#currentPage + 1
      )} ${this.number(this.#currentPage + 2)}`;
      paginatorCode = `${this.arrow('left', true)} ${this.number(
        1
      )} ${this.dots('back')} ${list} ${this.dots('front')} ${this.number(
        this.#totalPages
      )} ${this.arrow('right', true)}`;
    }

    this.container.innerHTML = paginatorCode;
  }

  arrow(direction, active) {
    return `<div class="pagination-button arrow-${direction} ${
      active ? '' : 'unactive'
    }" data-button="${direction}"></div>`;
  }
  dots(direction) {
    return `<div class="pagination-numbers" data-button="${direction}">...</div>`;
  }
  number(n) {
    return `<div class="pagination-numbers" data-button="${n}">${n}</div>`;
  }

  active(n) {
    return `<div class="pagination-button current" data-button="${n}">${n}</div>`;
  }
}
