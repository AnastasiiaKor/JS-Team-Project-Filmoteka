!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("9LQ4c"),a("hOsrK"),a("6Yg2l");var i=a("bpxeT"),c=a("2TvXO"),l=a("hOsrK"),o=a("8nrFW"),s=localStorage.getItem("switcher-period")||"week";function u(t,n){n.insertAdjacentHTML("beforeend",'<div class="switcher__container">\n    <span class="switcher__text">Trending of the</span>\n        <div class="switcher">\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="day"\n              value="day"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="day" class="switcher__item-label">\n              Day\n            </label>\n          </div>\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="week"\n              value="week"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="week" class="switcher__item-label">\n              Week\n            </label>\n          </div>\n        </div>\n    </div>');var r=document.querySelector(".switcher"),a=r.querySelectorAll(".switcher__item-radio");r.addEventListener("click",(function(n){var r=e(o)(a).find((function(e){return!e.checked}));r.checked=!0,s=r.value,localStorage.setItem("switcher-period",s),t(1,s)})),e(o)(a).find((function(e){return e.value===s})).checked=!0}var d=a("4wcYQ"),p=a("fiCwh"),g=a("9xIcH");i=a("bpxeT"),c=a("2TvXO"),l=a("hOsrK"),p=a("fiCwh"),g=a("9xIcH"),d=a("4wcYQ");function f(e,t){return v.apply(this,arguments)}function v(){return(v=e(i)(e(c).mark((function t(n,r){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.getMovieBYGenre)(n,r);case 3:a=e.sent,(0,p.makeGallery)(a.results),w(),g.gallery.scrollIntoView(),d.paginator.currentPage=a.page,d.paginator.totalPages=a.total_pages<500?a.total_pages:500,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}g.gallery.addEventListener("click",(function(e){e.preventDefault(),e.target.className.includes("genre-link")&&(e.stopImmediatePropagation(),f(e.target.dataset.id),d.paginator.callback=f)}));var h=document.querySelector(".filter__list");function _(e){e.target.classList.toggle("active"),h.classList.toggle("is-hidden");var t=JSON.parse(localStorage.getItem("genres")).map((function(e){var t=e.id,n=e.name;return'<li class="filter__item"><button class="filter__option" type="button" data-id="'.concat(t,'">').concat(n,"</button></li>")})).join("");h.innerHTML=t,h.addEventListener("click",m)}function m(e){if("BUTTON"===e.target.nodeName)try{!function(e){var t=document.querySelector(".filter__option.active");t&&t.classList.remove("active"),e.target.classList.add("active")}(e),f(e.target.dataset.id,1)}catch(e){}}function w(){g.gallery.insertAdjacentHTML("afterbegin",'\n      <div class="gallery__settings">\n        <div class="gallery__settings-container">\n          <button class="filter__button" type="button">Select genre</button>\n        </div>\n        <ul class="filter__list is-hidden"></ul>\n      </div>'),u(y,document.querySelector(".gallery__settings-container")),h=document.querySelector(".filter__list"),document.querySelector(".filter__button").addEventListener("click",_)}function y(){return b.apply(this,arguments)}function b(){return b=e(i)(e(c).mark((function t(){var n,r,a,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:s,e.prev=1,e.next=4,(0,l.getTrending)(n,r);case 4:a=e.sent,(0,p.makeGallery)(a.results),w(),d.paginator.currentPage=a.page,d.paginator.totalPages=a.total_pages,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,11]])}))),b.apply(this,arguments)}y(1,s),d.paginator.callback=y;i=a("bpxeT"),c=a("2TvXO"),l=a("hOsrK"),d=a("4wcYQ");var k,x=a("kI89v"),L=(p=a("fiCwh"),new(0,x.LoadSpinner)({selector:'[data-action="loading"]'})),T=document.querySelector(".search-form"),S=document.querySelector(".search-result"),q="",O=function(e){E(q,e)},E=(k=e(i)(e(c).mark((function t(n,r){var a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L.enable(),e.next=4,(0,l.getMoviesByKeyword)({keyword:n,page:r});case 4:(null==(i=e.sent)||null===(a=i.results)||void 0===a?void 0:a.length)?((0,p.makeGallery)(i.results),S.textContent="",q=n,d.paginator.callback=O,d.paginator.currentPage=i.page,d.paginator.totalPages=i.total_pages):(S.textContent="Search result not successful. Enter the correct movie name and try again.",C()),L.disable();case 7:case"end":return e.stop()}}),t)}))),function(e,t){return k.apply(this,arguments)});T.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["search-film"].value.trim();t?E(t,1):(S.textContent="Movie name must not be empty. Please, enter movie name to search.",C())}));var C=function(){setTimeout((function(){S.textContent=""}),3e3)};a("7uZ1r"),a("jUlpL"),a("k6LBo"),a("elFEq"),a("dt3WK"),a("j61u5")}();
//# sourceMappingURL=index.7324aa89.js.map
