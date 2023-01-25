import './main.js/requests';


import { Paginator } from './main.js/paginator';

const paginatorContainer = document.querySelector('.pagination');
const p = new Paginator((page) => {
    console.log(`Turn to page ${page}`)
    p.currentPage = page;
}, paginatorContainer);
p.totalPages = 200;
p.currentPage = 2;

import './main.js/gallery';

