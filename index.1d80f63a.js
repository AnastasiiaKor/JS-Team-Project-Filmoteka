var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("ksLB7"),n("iqbjS"),n("24Yli");var i=n("iqbjS");let r=localStorage.getItem("switcher-period")||"week";function l(e,t){t.insertAdjacentHTML("beforeend",'<div class="switcher__container">\n    <span class="switcher__text">Trending of the</span>\n        <div class="switcher">\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="day"\n              value="day"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="day" class="switcher__item-label">\n              Day\n            </label>\n          </div>\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="week"\n              value="week"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="week" class="switcher__item-label">\n              Week\n            </label>\n          </div>\n        </div>\n    </div>');const a=document.querySelector(".switcher"),n=a.querySelectorAll(".switcher__item-radio");a.addEventListener("click",(function(t){const a=[...n].find((e=>!e.checked));a.checked=!0,r=a.value,localStorage.setItem("switcher-period",r),e(1,r)})),[...n].find((e=>e.value===r)).checked=!0}var s=n("bN4hg"),o=n("i9P75"),c=n("alJz6");i=n("iqbjS"),o=n("i9P75"),c=n("alJz6"),s=n("bN4hg");async function d(e,t){try{const a=await(0,i.getMovieBYGenre)(e,t);(0,o.makeGallery)(a.results),f(),s.paginator.currentPage=a.page,s.paginator.totalPages=a.total_pages<500?a.total_pages:500}catch(e){console.log(e)}}c.gallery.addEventListener("click",(e=>{e.preventDefault(),e.target.className.includes("genre-link")&&(e.stopImmediatePropagation(),d(e.target.dataset.id),s.paginator.callback=d,d(1))}));let u,g=document.querySelector(".filter__list");function p(e){e.target.classList.toggle("active"),g.classList.toggle("is-hidden");const t=JSON.parse(localStorage.getItem("genres")).map((({id:e,name:t})=>`<li class="filter__item"><button class="filter__option" type="button" data-id="${e}">${t}</button></li>`)).join("");g.innerHTML=t,g.addEventListener("click",_)}function _(e){if("BUTTON"===e.target.nodeName){lastSearch=e.target.dataset.id;try{!function(e){const t=document.querySelector(".filter__option.active");t&&t.classList.remove("active"),e.target.classList.add("active")}(e),d(lastSearch,1)}catch(e){}}}function f(){c.gallery.insertAdjacentHTML("afterbegin",'\n      <div class="gallery__settings">\n        <div class="gallery__settings-container">\n          <button class="filter__button" type="button">Select genre</button>\n        </div>\n        <ul class="filter__list is-hidden"></ul>\n      </div>');l(m,document.querySelector(".gallery__settings-container")),g=document.querySelector(".filter__list"),u=document.querySelector(".filter__button"),u.addEventListener("click",p)}async function m(e=1,t=r){try{const a=await(0,i.getTrending)(e,t);(0,o.makeGallery)(a.results),f(),s.paginator.currentPage=a.page,s.paginator.totalPages=a.total_pages}catch(e){console.log(e)}}m(1,r),s.paginator.callback=m;i=n("iqbjS"),s=n("bN4hg");var h=n("kUoQ5");o=n("i9P75");const v=new(0,h.LoadSpinner)({selector:'[data-action="loading"]'}),y=document.querySelector(".search-form"),b=document.querySelector(".search-result");let w="";const k=e=>{S(w,e)},S=async(e,t)=>{v.enable();let a=await(0,i.getMoviesByKeyword)({keyword:e,page:t});a?.results?.length?((0,o.makeGallery)(a.results),b.textContent="",w=e,s.paginator.callback=k,s.paginator.currentPage=a.page,s.paginator.totalPages=a.total_pages):(b.textContent="Search result not successful. Enter the correct movie name and try again.",q()),v.disable()};y.addEventListener("submit",(e=>{e.preventDefault();const t=e.target["search-film"].value.trim();t?S(t,1):(b.textContent="Movie name must not be empty. Please, enter movie name to search.",q())}));const q=()=>{setTimeout((()=>{b.textContent=""}),3e3)};n("jpPIC"),n("jhK3h"),n("hRans"),n("fo3FY"),n("6rGxr"),n("860Hs");
//# sourceMappingURL=index.1d80f63a.js.map
