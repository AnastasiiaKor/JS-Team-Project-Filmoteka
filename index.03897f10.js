var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("ksLB7"),a("iqbjS"),a("lHlfB");var r=a("iqbjS");const i=document.querySelector(".gallery");let o=localStorage.getItem("switcher-period")||"week";function l(e){i.insertAdjacentHTML("afterbegin",'<div class="switcher__container">\n    <span class="switcher__text">Trending of the</span>\n        <div class="switcher">\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="day"\n              value="day"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="day" class="switcher__item-label">\n              Day\n            </label>\n          </div>\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="week"\n              value="week"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="week" class="switcher__item-label">\n              Week\n            </label>\n          </div>\n        </div>\n    </div>');const t=document.querySelector(".switcher"),n=t.querySelectorAll(".switcher__item-radio");t.addEventListener("click",(function(t){const a=[...n].find((e=>!e.checked));a.checked=!0,o=a.value,localStorage.setItem("switcher-period",o),e(1,o)})),[...n].find((e=>e.value===o)).checked=!0}var s=a("bN4hg"),c=a("i9P75");async function d(e=1,t=o){try{const n=await(0,r.getTrending)(e,t);(0,c.makeGallery)(n.results),s.paginator.currentPage=n.page,s.paginator.totalPages=n.total_pages,l(d)}catch(e){console.log(e)}}d(1,o),s.paginator.callback=d;r=a("iqbjS"),s=a("bN4hg");var u=a("kUoQ5");c=a("i9P75");const g=new(0,u.LoadSpinner)({selector:'[data-action="loading"]'}),h=document.querySelector(".search-form"),p=document.querySelector(".search-result");let f="";const m=e=>{w(f,e)},w=async(e,t)=>{g.enable();let n=await(0,r.getMoviesByKeyword)({keyword:e,page:t});n?.results?.length?((0,c.makeGallery)(n.results),p.textContent="",f=e,s.paginator.callback=m,s.paginator.currentPage=n.page,s.paginator.totalPages=n.total_pages):(p.textContent="Search result not successful. Enter the correct movie name and try again.",v()),g.disable()};h.addEventListener("submit",(e=>{e.preventDefault();const t=e.target["search-film"].value.trim();t?w(t,1):(p.textContent="Movie name must not be empty. Please, enter movie name to search.",v())}));const v=()=>{setTimeout((()=>{p.textContent=""}),3e3)};a("jpPIC"),a("hs2FU"),a("jhK3h"),a("hRans"),a("fo3FY"),a("6rGxr"),a("860Hs");
//# sourceMappingURL=index.03897f10.js.map
