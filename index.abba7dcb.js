!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("hOsrK"),a("lAw04");var i,s=a("bpxeT"),c=a("2TvXO"),o=a("hOsrK"),l=(s=a("bpxeT"),c=a("2TvXO"),o=a("hOsrK"),a("9xIcH")),u=a("4wcYQ");f();var d,p=(d=e(s)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.getMovieBYGenre)(i,n);case 3:r=e.sent,a=(0,l.createGalleryMarkup)(r.results),l.gallery.innerHTML=a,l.gallery.scrollIntoView(),u.paginator.currentPage=r.page,u.paginator.totalPages=r.total_pages<500?r.total_pages:500,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])}))),function(e){return d.apply(this,arguments)});function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;l.gallery.addEventListener("click",function(){var n=e(s)(e(c).mark((function n(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.target.className.includes("genre-link")){e.next=3;break}return e.abrupt("return");case 3:r.stopImmediatePropagation(),i=r.target.dataset.id,u.paginator.callback=p,p(t);case 7:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}l=a("9xIcH");var v=a("8nrFW"),h=(l=a("9xIcH"),localStorage.getItem("switcher-period")||"week");function g(t){l.gallery.insertAdjacentHTML("afterbegin",'<div class="switcher__container">\n    <span class="switcher__text">Trending of the</span>\n        <div class="switcher">\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="day"\n              value="day"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="day" class="switcher__item-label">\n              Day\n            </label>\n          </div>\n          <div class="switcher__item">\n            <input\n              type="radio"\n              id="week"\n              value="week"\n              name="switcher"\n              class="switcher__item-radio"\n            />\n            <label for="week" class="switcher__item-label">\n              Week\n            </label>\n          </div>\n        </div>\n    </div>');var n=document.querySelector(".switcher"),r=n.querySelectorAll(".switcher__item-radio");n.addEventListener("click",(function(n){var a=e(v)(r).find((function(e){return!e.checked}));a.checked=!0,h=a.value,localStorage.setItem("switcher-period",h),t(1,h)})),e(v)(r).find((function(e){return e.value===h})).checked=!0}u=a("4wcYQ");function w(){return y.apply(this,arguments)}function y(){return y=e(s)(e(c).mark((function t(){var n,r,a,i,s=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1&&void 0!==s[1]?s[1]:h,e.prev=1,e.next=4,(0,o.getTrending)(n,r);case 4:return a=e.sent,e.next=7,(0,l.createGalleryMarkup)(a.results);case 7:i=e.sent,l.gallery.innerHTML=i,u.paginator.currentPage=a.page,u.paginator.totalPages=a.total_pages,g(w),f(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),t,null,[[1,15]])}))),y.apply(this,arguments)}w(1,h),u.paginator.callback=w;s=a("bpxeT"),c=a("2TvXO");a("1SYz9");o=a("hOsrK"),l=a("9xIcH"),u=a("4wcYQ");var m=a("8MBJY"),b=a("a2hTj"),k=new(function(){"use strict";function t(n){var r=n.selector;e(m)(this,t),this.refs=this.getRefs(r)}return e(b)(t,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.icon=t.button.querySelector(".search-form__icon"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"disable",value:function(){this.refs.button.disabled=!1,this.refs.spinner.classList.add("is-hidden"),this.refs.icon.classList.remove("is-hidden")}},{key:"enable",value:function(){this.refs.button.disabled=!0,this.refs.spinner.classList.remove("is-hidden"),this.refs.icon.classList.add("is-hidden")}}]),t}())({selector:'[data-action="loading"]'}),x=document.querySelector(".search-form"),_=document.querySelector(".search-result"),T="",L=function(e){M(T,e)},M=function(){var t=e(s)(e(c).mark((function t(n,r){var a,i,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.enable(),e.next=4,(0,o.getMoviesByKeyword)({keyword:n,page:r});case 4:(null==(i=e.sent)||null===(a=i.results)||void 0===a?void 0:a.length)?(s=(0,l.createGalleryMarkup)(i.results),_.textContent="",l.gallery.innerHTML=s,l.gallery.scrollIntoView(),T=n,u.paginator.callback=L,u.paginator.currentPage=i.page,u.paginator.totalPages=i.total_pages):(_.textContent="Search result not successful. Enter the correct movie name and try again.",S()),k.disable();case 7:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();x.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["search-film"].value.trim();t?M(t,1):(_.textContent="Movie name must not be empty. Please, enter movie name to search.",S())}));var S=function(){setTimeout((function(){_.textContent=""}),3e3)};a("7uZ1r"),a("jUlpL"),a("k6LBo"),a("k9iCC"),a("dt3WK"),a("j61u5")}();
//# sourceMappingURL=index.abba7dcb.js.map
