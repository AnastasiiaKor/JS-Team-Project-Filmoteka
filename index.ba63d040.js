!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),a("hOsrK"),a("lAw04");var i=a("bpxeT"),s=a("2TvXO"),o=a("hOsrK"),c=(i=a("bpxeT"),s=a("2TvXO"),o=a("hOsrK"),a("9xIcH")),u=a("8MBJY"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var n=d.default(e,t,"get");return f.default(e,n)};var d=h(a("1UHsN")),f=h(a("ffZzF"));function h(e){return e&&e.__esModule?e:{default:e}}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,n){b.default(e,t),t.set(e,n)};var p,b=(p=a("5k7tO"))&&p.__esModule?p:{default:p};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,n){var r=y.default(e,t,"set");return m.default(e,r,n),n};var y=w(a("1UHsN")),m=w(a("jdVyQ"));function w(e){return e&&e.__esModule?e:{default:e}}var k,x=a("a2hTj"),_=new WeakMap,M=new WeakMap,T=new WeakMap,O=new(function(){"use strict";function t(n,r){var a=this;e(u)(this,t),e(v)(this,_,{writable:!0,value:void 0}),e(v)(this,M,{writable:!0,value:void 0}),e(v)(this,T,{writable:!0,value:void 0}),e(g)(this,T,n),e(g)(this,M,1),e(g)(this,_,100),this.container=r,this.container.addEventListener("click",(function(t){var n=t.target.dataset.button,r=!t.target.classList.contains("unactive");if(n&&r)switch(n){case"left":e(l)(a,T).call(a,e(l)(a,M)-1);break;case"right":e(l)(a,T).call(a,e(l)(a,M)+1);break;case"back":e(l)(a,T).call(a,e(l)(a,M)-3);break;case"front":e(l)(a,T).call(a,e(l)(a,M)+3);break;default:e(l)(a,T).call(a,Number(n))}})),this.render()}return e(x)(t,[{key:"totalPages",set:function(t){e(g)(this,_,t),this.render()}},{key:"currentPage",set:function(t){e(g)(this,M,t),this.render()}},{key:"callback",set:function(t){e(g)(this,T,t)}},{key:"render",value:function(){var t="";if(e(l)(this,_)<=9){for(var n=[],r=1;r<=e(l)(this,_);r+=1){var a=r===e(l)(this,M)?this.active(e(l)(this,M)):this.number(r);n.push(a)}t=n.join("")}else if(e(l)(this,M)<6){for(var i=[],s=1;s<=7;s+=1){var o=s===e(l)(this,M)?this.active(e(l)(this,M)):this.number(s);i.push(o)}t="".concat(this.arrow("left",e(l)(this,M)>1)," ").concat(i.join("")," ").concat(this.dots("front")," ").concat(this.lastnumber(e(l)(this,_))," ").concat(this.arrow("right",!0))}else if(e(l)(this,M)>e(l)(this,_)-6){for(var c=[],u=e(l)(this,_)-6;u<=e(l)(this,_);u+=1){var d=u===e(l)(this,M)?this.active(e(l)(this,M)):this.number(u);c.push(d)}t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back"),"  ").concat(c.join("")," ").concat(this.arrow("right",e(l)(this,M)<e(l)(this,_)))}else{var f="".concat(this.number(e(l)(this,M)-2)," ").concat(this.number(e(l)(this,M)-1)," ").concat(this.active(e(l)(this,M))," ").concat(this.number(e(l)(this,M)+1)," ").concat(this.number(e(l)(this,M)+2));t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back")," ").concat(f," ").concat(this.dots("front")," ").concat(this.lastnumber(e(l)(this,_))," ").concat(this.arrow("right",!0))}this.container.innerHTML=t}},{key:"arrow",value:function(e,t){return'<div class="pagination-button arrow-'.concat(e," ").concat(t?"":"unactive",'" data-button="').concat(e,'"></div>')}},{key:"dots",value:function(e){return'<div class="pagination-numbers dots" data-button="'.concat(e,'">...</div>')}},{key:"number",value:function(e){return'<div class="pagination-numbers" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"lastnumber",value:function(e){return'<div class="pagination-numbers last" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"active",value:function(e){return'<div class="pagination-button current" data-button="'.concat(e,'">').concat(e,"</div>")}}]),t}())((function(e){}),document.querySelector(".pagination")),j=document.querySelector(".gallery");q();var P,L=(P=e(i)(e(s).mark((function t(n){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.getMovieBYGenre)(k,n);case 3:r=e.sent,a=(0,c.createGalleryMarkup)(r.results),j.innerHTML=a,j.scrollIntoView(),O.currentPage=r.page,O.totalPages=r.total_pages<500?r.total_pages:500,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])}))),function(e){return P.apply(this,arguments)});function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;j.addEventListener("click",function(){var n=e(i)(e(s).mark((function n(r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.target.className.includes("genre-link")){e.next=3;break}return e.abrupt("return");case 3:r.stopImmediatePropagation(),k=r.target.dataset.id,O.callback=L,L(t);case 7:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}c=a("9xIcH");var S=document.querySelector(".gallery");function H(){return E.apply(this,arguments)}function E(){return E=e(i)(e(s).mark((function t(){var n,r,a,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,e.prev=1,e.next=4,(0,o.getTrending)(n);case 4:r=e.sent,a=(0,c.createGalleryMarkup)(r.results),S.scrollIntoView(),S.innerHTML=a,O.currentPage=r.page,O.totalPages=r.total_pages,q(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,13]])}))),E.apply(this,arguments)}O.callback=H,H();i=a("bpxeT"),s=a("2TvXO");a("1SYz9");o=a("hOsrK"),c=a("9xIcH"),u=a("8MBJY"),x=a("a2hTj");var C=new(function(){"use strict";function t(n){var r=n.selector;e(u)(this,t),this.refs=this.getRefs(r)}return e(x)(t,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.icon=t.button.querySelector(".search-form__icon"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"disable",value:function(){this.refs.button.disabled=!1,this.refs.spinner.classList.add("is-hidden"),this.refs.icon.classList.remove("is-hidden")}},{key:"enable",value:function(){this.refs.button.disabled=!0,this.refs.spinner.classList.remove("is-hidden"),this.refs.icon.classList.add("is-hidden")}}]),t}())({selector:'[data-action="loading"]'}),I=document.querySelector(".search-form"),N=document.querySelector(".search-result"),K=document.querySelector(".gallery"),U="",B=function(e){V(U,e)},V=function(){var t=e(i)(e(s).mark((function t(n,r){var a,i,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C.enable(),e.next=4,(0,o.getMoviesByKeyword)({keyword:n,page:r});case 4:(null==(i=e.sent)||null===(a=i.results)||void 0===a?void 0:a.length)?(u=(0,c.createGalleryMarkup)(i.results),N.textContent="",K.innerHTML=u,K.scrollIntoView(),U=n,O.callback=B,O.currentPage=i.page,O.totalPages=i.total_pages):(N.textContent="Search result not successful. Enter the correct movie name and try again.",z()),C.disable();case 7:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();I.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["search-film"].value.trim();t?V(t,1):(N.textContent="Movie name must not be empty. Please, enter movie name to search.",z())}));var z=function(){setTimeout((function(){N.textContent=""}),3e3)};a("7uZ1r"),a("jUlpL"),a("k6LBo"),a("k9iCC"),a("dt3WK"),a("j61u5")}();
//# sourceMappingURL=index.ba63d040.js.map
