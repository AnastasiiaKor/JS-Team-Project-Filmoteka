var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("ksLB7"),a("iqbjS"),a("24Yli");var i=a("iqbjS");let l=localStorage.getItem("switcher-period")||"week";function r(e,t){t.insertAdjacentHTML("beforeend",'<div class="switcher__container">\n    <span class="switcher__text">Trending of the</span>\n        <div class="switcher">\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="day"\n              value="day"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="day" class="switcher__item-label">\n              Day\n            </label>\n          </div>\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="week"\n              value="week"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="week" class="switcher__item-label">\n              Week\n            </label>\n          </div>\n        </div>\n    </div>');const n=document.querySelector(".switcher"),a=n.querySelectorAll(".switcher__item-radio");n.addEventListener("click",(function(t){const n=[...a].find((e=>!e.checked));n.checked=!0,l=n.value,localStorage.setItem("switcher-period",l),e(1,l)})),[...a].find((e=>e.value===l)).checked=!0}var o=a("bN4hg"),s=a("i9P75"),c=a("alJz6");i=a("iqbjS"),s=a("i9P75"),o=a("bN4hg"),c=a("alJz6");let d,g,u=document.querySelector(".filter__list");function p(e){e.target.classList.toggle("active"),u.classList.toggle("is-hidden"),c.gallery.scrollIntoView();const t=JSON.parse(localStorage.getItem("genres")).map((({id:e,name:t})=>`<li class="filter__item"><button class="filter__option" type="button" data-id="${e}">${t}</button></li>`)).join("");u.innerHTML=t,u.addEventListener("click",_)}function _(e){if("BUTTON"===e.target.nodeName)try{!function(e){const t=document.querySelector(".filter__option.active");t&&t.classList.remove("active"),e.target.classList.add("active")}(e),g=e.target.dataset.id,f(1),console.log("object"),c.gallery.scrollIntoView(),o.paginator.callback=f}catch(e){}}async function f(e){try{const t=await(0,i.getMovieBYGenre)(g,e);(0,s.makeGallery)(t.results),y(),c.gallery.scrollIntoView(),o.paginator.currentPage=t.page,o.paginator.totalPages=t.total_pages<500?t.total_pages:500}catch(e){console.log(e)}}function y(){c.gallery.insertAdjacentHTML("afterbegin",'\n      <div class="gallery__settings">\n        <div class="gallery__settings-container">\n          <button class="filter__button" type="button">Select genre</button>\n        </div>\n        <ul class="filter__list is-hidden"></ul>\n      </div>');r(m,document.querySelector(".gallery__settings-container")),u=document.querySelector(".filter__list"),d=document.querySelector(".filter__button"),d.addEventListener("click",p)}async function m(e=1,t=l){try{const n=await(0,i.getTrending)(e,t);(0,s.makeGallery)(n.results),y(),o.paginator.currentPage=n.page,o.paginator.totalPages=n.total_pages}catch(e){console.log(e)}}m(1,l),o.paginator.callback=m;i=a("iqbjS"),o=a("bN4hg");var h=a("kUoQ5");s=a("i9P75");const v=new(0,h.LoadSpinner)({selector:'[data-action="loading"]'}),b=document.querySelector(".search-form"),w=document.querySelector(".search-result");let k="";const S=e=>{q(k,e)},q=async(e,t)=>{v.enable();let n=await(0,i.getMoviesByKeyword)({keyword:e,page:t});n?.results?.length?((0,s.makeGallery)(n.results),w.textContent="",k=e,o.paginator.callback=S,o.paginator.currentPage=n.page,o.paginator.totalPages=n.total_pages):(w.textContent="Search result not successful. Enter the correct movie name and try again.",L()),v.disable()};b.addEventListener("submit",(e=>{e.preventDefault();const t=e.target["search-film"].value.trim();t?q(t,1):(w.textContent="Movie name must not be empty. Please, enter movie name to search.",L())}));const L=()=>{setTimeout((()=>{w.textContent=""}),3e3)};a("jpPIC"),a("jhK3h"),a("hRans"),a("fo3FY"),a("6rGxr"),a("860Hs");
//# sourceMappingURL=index.d764bbbf.js.map
