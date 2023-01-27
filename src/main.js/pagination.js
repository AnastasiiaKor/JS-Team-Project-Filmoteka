import { Paginator } from './paginator';

const paginatorContainer = document.querySelector('.pagination');
const p = new Paginator(page => {
  p.currentPage = page;
}, paginatorContainer);

p.totalPages = 200;
p.currentPage = 2;
