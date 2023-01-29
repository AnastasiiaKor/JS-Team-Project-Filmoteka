!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=i("gD1JV"))&&r.__esModule?r:{default:r};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=a()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=i("fVNic"))&&r.__esModule?r:{default:r}})),i("hOsrK"),i("lAw04");var a=i("bpxeT"),o=i("2TvXO"),s=i("hOsrK"),u=(a=i("bpxeT"),o=i("2TvXO"),s=i("hOsrK"),i("9xIcH")),c=i("8MBJY"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var r=f.default(e,t,"get");return h.default(e,r)};var f=d(i("1UHsN")),h=d(i("ffZzF"));function d(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){m.default(e,t),t.set(e,r)};var v,m=(v=i("5k7tO"))&&v.__esModule?v:{default:v};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,r){var n=y.default(e,t,"set");return k.default(e,n,r),r};var y=b(i("1UHsN")),k=b(i("jdVyQ"));function b(e){return e&&e.__esModule?e:{default:e}}var w,_=i("a2hTj"),I=new WeakMap,x=new WeakMap,T=new WeakMap,E=new(function(){"use strict";function t(r,n){var i=this;e(c)(this,t),e(p)(this,I,{writable:!0,value:void 0}),e(p)(this,x,{writable:!0,value:void 0}),e(p)(this,T,{writable:!0,value:void 0}),e(g)(this,T,r),e(g)(this,x,1),e(g)(this,I,100),this.container=n,this.container.addEventListener("click",(function(t){var r=t.target.dataset.button,n=!t.target.classList.contains("unactive");if(r&&n)switch(r){case"left":e(l)(i,T).call(i,e(l)(i,x)-1);break;case"right":e(l)(i,T).call(i,e(l)(i,x)+1);break;case"back":e(l)(i,T).call(i,e(l)(i,x)-3);break;case"front":e(l)(i,T).call(i,e(l)(i,x)+3);break;default:e(l)(i,T).call(i,Number(r))}})),this.render()}return e(_)(t,[{key:"totalPages",set:function(t){e(g)(this,I,t),this.render()}},{key:"currentPage",set:function(t){e(g)(this,x,t),this.render()}},{key:"callback",set:function(t){e(g)(this,T,t)}},{key:"render",value:function(){var t="";if(e(l)(this,I)<=9){for(var r=[],n=1;n<=e(l)(this,I);n+=1){var i=n===e(l)(this,x)?this.active(e(l)(this,x)):this.number(n);r.push(i)}t=r.join("")}else if(e(l)(this,x)<6){for(var a=[],o=1;o<=7;o+=1){var s=o===e(l)(this,x)?this.active(e(l)(this,x)):this.number(o);a.push(s)}t="".concat(this.arrow("left",e(l)(this,x)>1)," ").concat(a.join("")," ").concat(this.dots("front")," ").concat(this.lastnumber(e(l)(this,I))," ").concat(this.arrow("right",!0))}else if(e(l)(this,x)>e(l)(this,I)-6){for(var u=[],c=e(l)(this,I)-6;c<=e(l)(this,I);c+=1){var f=c===e(l)(this,x)?this.active(e(l)(this,x)):this.number(c);u.push(f)}t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back"),"  ").concat(u.join("")," ").concat(this.arrow("right",e(l)(this,x)<e(l)(this,I)))}else{var h="".concat(this.number(e(l)(this,x)-2)," ").concat(this.number(e(l)(this,x)-1)," ").concat(this.active(e(l)(this,x))," ").concat(this.number(e(l)(this,x)+1)," ").concat(this.number(e(l)(this,x)+2));t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back")," ").concat(h," ").concat(this.dots("front")," ").concat(this.lastnumber(e(l)(this,I))," ").concat(this.arrow("right",!0))}this.container.innerHTML=t}},{key:"arrow",value:function(e,t){return'<div class="pagination-button arrow-'.concat(e," ").concat(t?"":"unactive",'" data-button="').concat(e,'"></div>')}},{key:"dots",value:function(e){return'<div class="pagination-numbers dots" data-button="'.concat(e,'">...</div>')}},{key:"number",value:function(e){return'<div class="pagination-numbers" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"lastnumber",value:function(e){return'<div class="pagination-numbers last" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"active",value:function(e){return'<div class="pagination-button current" data-button="'.concat(e,'">').concat(e,"</div>")}}]),t}())((function(e){}),document.querySelector(".pagination")),S=document.querySelector(".gallery");C();var O,R=(O=e(a)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.getMovieBYGenre)(w,r);case 3:n=e.sent,i=(0,u.createGalleryMarkup)(n.results),S.innerHTML=i,S.scrollIntoView(),E.currentPage=n.page,E.totalPages=n.total_pages<500?n.total_pages:500,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])}))),function(e){return O.apply(this,arguments)});function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;S.addEventListener("click",function(){var r=e(a)(e(o).mark((function r(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),n.target.className.includes("genre-link")){e.next=3;break}return e.abrupt("return");case 3:n.stopImmediatePropagation(),w=n.target.dataset.id,E.callback=R,R(t);case 7:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}u=i("9xIcH");var A=document.querySelector(".gallery");function P(){return N.apply(this,arguments)}function N(){return N=e(a)(e(o).mark((function t(){var r,n,i,a=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,e.next=4,(0,s.getTrending)(r);case 4:n=e.sent,i=(0,u.createGalleryMarkup)(n.results),A.scrollIntoView(),A.innerHTML=i,E.currentPage=n.page,E.totalPages=n.total_pages,C(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,13]])}))),N.apply(this,arguments)}E.callback=P,P();a=i("bpxeT"),o=i("2TvXO");i("1SYz9");s=i("hOsrK"),u=i("9xIcH"),c=i("8MBJY"),_=i("a2hTj");var D=new(function(){"use strict";function t(r){var n=r.selector;e(c)(this,t),this.refs=this.getRefs(n)}return e(_)(t,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.icon=t.button.querySelector(".search-form__icon"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"disable",value:function(){this.refs.button.disabled=!1,this.refs.spinner.classList.add("is-hidden"),this.refs.icon.classList.remove("is-hidden")}},{key:"enable",value:function(){this.refs.button.disabled=!0,this.refs.spinner.classList.remove("is-hidden"),this.refs.icon.classList.add("is-hidden")}}]),t}())({selector:'[data-action="loading"]'}),M=document.querySelector(".search-form"),L=document.querySelector(".search-result"),U=document.querySelector(".gallery"),j="",F=function(e){V(j,e)},V=function(){var t=e(a)(e(o).mark((function t(r,n){var i,a,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D.enable(),e.next=4,(0,s.getMoviesByKeyword)({keyword:r,page:n});case 4:(null==(a=e.sent)||null===(i=a.results)||void 0===i?void 0:i.length)?(c=(0,u.createGalleryMarkup)(a.results),L.textContent="",U.innerHTML=c,U.scrollIntoView(),j=r,E.callback=F,E.currentPage=a.page,E.totalPages=a.total_pages):(L.textContent="Search result not successful. Enter the correct movie name and try again.",H()),D.disable();case 7:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();M.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["search-film"].value.trim();t?V(t,1):(L.textContent="Movie name must not be empty. Please, enter movie name to search.",H())}));var H=function(){setTimeout((function(){L.textContent=""}),3e3)};i("7uZ1r");a=i("bpxeT"),c=i("8MBJY"),_=i("a2hTj");var B=i("hKHmD"),W=i("8nrFW"),z=(o=i("2TvXO"),a=i("bpxeT"),c=i("8MBJY"),_=i("a2hTj"),i("1t1Wn")),q=(W=i("8nrFW"),o=i("2TvXO"),i("ds8z5")),K=(c=i("8MBJY"),_=i("a2hTj"),i("eYQtU")),G=(z=i("1t1Wn"),W=i("8nrFW"),{});Object.defineProperty(G,"__esModule",{value:!0}),G.default=function(e){return Z(e)};var J=Q(i("ge8co")),X=Q(i("cZGw3")),Y=Q(i("fVNic")),$=Q(i("gD1JV"));function Q(e){return e&&e.__esModule?e:{default:e}}function Z(e){var t="function"==typeof Map?new Map:void 0;return Z=function(e){if(null===e||!X.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return J.default(e,arguments,Y.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$.default(r,e)},Z(e)}var ee,te,re,ne=i("2MbLg"),ie=ee={};function ae(){throw new Error("setTimeout has not been defined")}function oe(){throw new Error("clearTimeout has not been defined")}function se(e){if(te===setTimeout)return setTimeout(e,0);if((te===ae||!te)&&setTimeout)return te=setTimeout,setTimeout(e,0);try{return te(e,0)}catch(t){try{return te.call(null,e,0)}catch(t){return te.call(this,e,0)}}}!function(){try{te="function"==typeof setTimeout?setTimeout:ae}catch(e){te=ae}try{re="function"==typeof clearTimeout?clearTimeout:oe}catch(e){re=oe}}();var ue,ce=[],le=!1,fe=-1;function he(){le&&ue&&(le=!1,ue.length?ce=ue.concat(ce):fe=-1,ce.length&&de())}function de(){if(!le){var e=se(he);le=!0;for(var t=ce.length;t;){for(ue=ce,ce=[];++fe<t;)ue&&ue[fe].run();fe=-1,t=ce.length}ue=null,le=!1,function(e){if(re===clearTimeout)return clearTimeout(e);if((re===oe||!re)&&clearTimeout)return re=clearTimeout,clearTimeout(e);try{re(e)}catch(t){try{return re.call(null,e)}catch(t){return re.call(this,e)}}}(e)}}function pe(e,t){this.fun=e,this.array=t}function ve(){}ie.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];ce.push(new pe(e,t)),1!==ce.length||le||se(de)},pe.prototype.run=function(){this.fun.apply(null,this.array)},ie.title="browser",ie.browser=!0,ie.env={},ie.argv=[],ie.version="",ie.versions={},ie.on=ve,ie.addListener=ve,ie.once=ve,ie.off=ve,ie.removeListener=ve,ie.removeAllListeners=ve,ie.emit=ve,ie.prependListener=ve,ie.prependOnceListener=ve,ie.listeners=function(e){return[]},ie.binding=function(e){throw new Error("process.binding is not supported")},ie.cwd=function(){return"/"},ie.chdir=function(e){throw new Error("process.chdir is not supported")},ie.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var me=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),n.push(r[l],r[f],r[h],r[d])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(me(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ye=function(e){return function(e){var t=me(e);return ge.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ke=function(e){try{return ge.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var be=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},we=function(){try{return be()||function(){if(void 0!==ee&&void 0!==ee.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&ke(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},_e=function(e){var t,r;return null===(r=null===(t=we())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},Ie=function(){var e;return null===(e=we())||void 0===e?void 0:e.config},xe=function(e){var t;return null===(t=we())||void 0===t?void 0:t["_".concat(e)]},Te=function(){"use strict";function t(){var r=this;e(c)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(_)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Se(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oe=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t,i,a){var o;return e(c)(this,n),(o=r.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(q)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(q)(o),Re.prototype.create),o}return n}(e(G)(Error)),Re=function(){"use strict";function t(r,n,i){e(c)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(_)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Ce(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Oe(a,u,i);return c}}]),t}();function Ce(e,t){return e.replace(Ae,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Ae=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ne(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(De(l)&&De(f)){if(!Ne(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){d=!0,p=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw p}}return!0}function De(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(z)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function Le(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(z)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function Ue(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function(){"use strict";function t(r,n){var i=this;e(c)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(_)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Fe),void 0===n.error&&(n.error=Fe),void 0===n.complete&&(n.complete=Fe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Fe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(e){return e&&e._delegate?e._delegate:e}var He=function(){"use strict";function t(r,n,i){e(c)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(_)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Be="[DEFAULT]",We=function(){"use strict";function t(r,n){e(c)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(_)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Te;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(z)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(W)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(W)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(z)(c.value,2),h=f[0],d=f[1],p=this.normalizeInstanceIdentifier(h);i===p&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Be?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.component?this.component.multipleInstances?e:Be:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,qe,Ke=function(){"use strict";function t(r){e(c)(this,t),this.name=r,this.providers=new Map}return e(_)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new We(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ge=(c=i("8MBJY"),_=i("a2hTj"),B=i("hKHmD"),W=i("8nrFW"),[]);(qe=ze||(ze={}))[qe.DEBUG=0]="DEBUG",qe[qe.VERBOSE=1]="VERBOSE",qe[qe.INFO=2]="INFO",qe[qe.WARN=3]="WARN",qe[qe.ERROR=4]="ERROR",qe[qe.SILENT=5]="SILENT";var Je,Xe={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Ye=ze.INFO,$e=(Je={},e(B)(Je,ze.DEBUG,"log"),e(B)(Je,ze.VERBOSE,"log"),e(B)(Je,ze.INFO,"info"),e(B)(Je,ze.WARN,"warn"),e(B)(Je,ze.ERROR,"error"),Je),Qe=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=$e[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(W)(i)))}},Ze=function(){"use strict";function t(r){e(c)(this,t),this.name=r,this._logLevel=Ye,this._logHandler=Qe,this._userLogHandler=null,Ge.push(this)}return e(_)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ze))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Xe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.DEBUG].concat(e(W)(r))),this._logHandler.apply(this,[this,ze.DEBUG].concat(e(W)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.VERBOSE].concat(e(W)(r))),this._logHandler.apply(this,[this,ze.VERBOSE].concat(e(W)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.INFO].concat(e(W)(r))),this._logHandler.apply(this,[this,ze.INFO].concat(e(W)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.WARN].concat(e(W)(r))),this._logHandler.apply(this,[this,ze.WARN].concat(e(W)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.ERROR].concat(e(W)(r))),this._logHandler.apply(this,[this,ze.ERROR].concat(e(W)(r)))}}]),t}();a=i("bpxeT");var et={};Object.defineProperty(et,"__esModule",{value:!0}),et.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){tt.default(e,t,r[t])}))}return e};var tt=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var rt,nt;W=i("8nrFW"),o=i("2TvXO"),W=i("8nrFW");var it=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,ut=new WeakMap;var ct={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return at.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ot.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ht(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function lt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(nt||(nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(dt(this),r),ht(it.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ht(t.apply(dt(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[dt(this),r].concat(e(W)(i)));return ot.set(s,r.sort?r.sort():[r]),ht(s)}}function ft(e){return"function"==typeof e?lt(e):(e instanceof IDBTransaction&&function(e){if(!at.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));at.set(e,t)}}(e),t=e,(rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,ct):e);var t}function ht(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(ht(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&it.set(e,t)})).catch((function(){})),ut.set(r,t),r;var t,r;if(st.has(e))return st.get(e);var n=ft(e);return n!==e&&(st.set(e,n),ut.set(n,e)),n}var dt=function(e){return ut.get(e)};function pt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=ht(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(ht(s.result),e.oldVersion,e.newVersion,ht(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var vt=["get","getKey","getAll","getAllKeys","count"],mt=["put","add","delete","clear"],gt=new Map;function yt(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(gt.get(r))return gt.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,s=mt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(s||vt.includes(n))){var u=function(){var t=e(a)(e(o).mark((function t(r){var a,u,c,l,f,h,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=d[c];return f=this.transaction(r,s?"readwrite":"readonly"),h=f.store,i&&(h=h.index(u.shift())),t.next=7,Promise.all([(l=h)[n].apply(l,e(W)(u)),s&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return gt.set(r,u),u}}}ct=function(t){return e(et)({},t,{get:function(e,r,n){return yt(e,r)||t.get(e,r,n)},has:function(e,r){return!!yt(e,r)||t.has(e,r)}})}(ct);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kt=function(){"use strict";function t(r){e(c)(this,t),this.container=r}return e(_)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var bt,wt,_t="@firebase/app",It="0.9.1",xt=new Ze("@firebase/app"),Tt="[DEFAULT]",Et=(bt={},e(B)(bt,_t,"fire-core"),e(B)(bt,"@firebase/app-compat","fire-core-compat"),e(B)(bt,"@firebase/analytics","fire-analytics"),e(B)(bt,"@firebase/analytics-compat","fire-analytics-compat"),e(B)(bt,"@firebase/app-check","fire-app-check"),e(B)(bt,"@firebase/app-check-compat","fire-app-check-compat"),e(B)(bt,"@firebase/auth","fire-auth"),e(B)(bt,"@firebase/auth-compat","fire-auth-compat"),e(B)(bt,"@firebase/database","fire-rtdb"),e(B)(bt,"@firebase/database-compat","fire-rtdb-compat"),e(B)(bt,"@firebase/functions","fire-fn"),e(B)(bt,"@firebase/functions-compat","fire-fn-compat"),e(B)(bt,"@firebase/installations","fire-iid"),e(B)(bt,"@firebase/installations-compat","fire-iid-compat"),e(B)(bt,"@firebase/messaging","fire-fcm"),e(B)(bt,"@firebase/messaging-compat","fire-fcm-compat"),e(B)(bt,"@firebase/performance","fire-perf"),e(B)(bt,"@firebase/performance-compat","fire-perf-compat"),e(B)(bt,"@firebase/remote-config","fire-rc"),e(B)(bt,"@firebase/remote-config-compat","fire-rc-compat"),e(B)(bt,"@firebase/storage","fire-gcs"),e(B)(bt,"@firebase/storage-compat","fire-gcs-compat"),e(B)(bt,"@firebase/firestore","fire-fst"),e(B)(bt,"@firebase/firestore-compat","fire-fst-compat"),e(B)(bt,"fire-js","fire-js"),e(B)(bt,"firebase","fire-js-all"),bt),St=new Map,Ot=new Map;function Rt(e,t){try{e.container.addComponent(t)}catch(r){xt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Ct(e){var t=e.name;if(Ot.has(t))return xt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Ot.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=St.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Rt(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function At(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pt=(wt={},e(B)(wt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(B)(wt,"bad-app-name","Illegal App name: '{$appName}"),e(B)(wt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(B)(wt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(B)(wt,"no-options","Need to provide options, when not being deployed to hosting via source."),e(B)(wt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(B)(wt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(B)(wt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(B)(wt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(B)(wt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(B)(wt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),wt),Nt=new Re("app","Firebase",Pt),Dt=function(){"use strict";function t(r,n,i){var a=this;e(c)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",(function(){return a}),"PUBLIC"))}return e(_)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}]),t}(),Mt="9.16.0";function Lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Nt.create("bad-app-name",{appName:String(a)});if(r||(r=Ie()),!r)throw Nt.create("no-options");var o=St.get(a);if(o){if(Ne(r,o.options)&&Ne(i,o.config))return o;throw Nt.create("duplicate-app",{appName:a})}var s=new Ke(a),u=!0,c=!1,l=void 0;try{for(var f,h=Ot.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var p=new Dt(r,i,s);return St.set(a,p),p}function Ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=St.get(e);if(!t&&e===Tt)return Lt();if(!t)throw Nt.create("no-app",{appName:e});return t}function jt(e,t,r){var n,i=null!==(n=Et[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void xt.warn(s.join(" "))}Ct(new He("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ft="firebase-heartbeat-store",Vt=null;function Ht(){return Vt||(Vt=pt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ft)}}).catch((function(e){throw Nt.create("idb-open",{originalErrorMessage:e.message})}))),Vt}function Bt(e){return Wt.apply(this,arguments)}function Wt(){return(Wt=e(a)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ht();case 3:return n=e.sent,e.abrupt("return",n.transaction(Ft).objectStore(Ft).get(Kt(r)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Oe?xt.warn(e.t0.message):(i=Nt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),xt.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function zt(e,t){return qt.apply(this,arguments)}function qt(){return(qt=e(a)(e(o).mark((function t(r,n){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ht();case 3:return i=e.sent,a=i.transaction(Ft,"readwrite"),s=a.objectStore(Ft),e.next=8,s.put(n,Kt(r));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Oe?xt.warn(e.t0.message):(u=Nt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),xt.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function Kt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(){"use strict";function t(r){var n=this;e(c)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new $t(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(_)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Jt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Jt(),i=Xt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=ye(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Jt(){return(new Date).toISOString().substring(0,10)}function Xt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Qt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),Qt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var Yt,$t=function(){"use strict";function t(r){e(c)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(_)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Se()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Bt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",zt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",zt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(W)(a.heartbeats).concat(e(W)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Qt(e){return ye(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt="",Ct(new He("platform-logger",(function(e){return new kt(e)}),"PRIVATE")),Ct(new He("heartbeat",(function(e){return new Gt(e)}),"PRIVATE")),jt(_t,It,Yt),jt(_t,It,"esm2017"),jt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jt("firebase","9.16.0","app");q=i("ds8z5"),a=i("bpxeT"),c=i("8MBJY"),_=i("a2hTj"),B=i("hKHmD");var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.default=function(e,t,r){return tr(e,t,r)};var er=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function tr(e,t,r){return(tr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=er.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var rr=i("fVNic");K=i("eYQtU"),z=i("1t1Wn"),W=i("8nrFW"),ne=i("2MbLg"),o=i("2TvXO");function nr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function ir(){return e(B)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var ar=ir,or=new Re("auth","Firebase",ir()),sr=new Ze("@firebase/auth");function ur(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;sr.logLevel<=ze.ERROR&&(a=sr).error.apply(a,["Auth (".concat(Mt,"): ").concat(t)].concat(e(W)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw dr.apply(void 0,[t].concat(e(W)(n)))}function lr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return dr.apply(void 0,[t].concat(e(W)(n)))}function fr(t,r,n){var i=Object.assign(Object.assign({},ar()),e(B)({},r,n));return new Re("auth","Firebase",i).create(r,{appName:t.name})}function hr(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&cr(e,"argument-error"),fr(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function dr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(W)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(W)(u)))}return(a=or).create.apply(a,[t].concat(e(W)(n)))}function pr(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw dr.apply(void 0,[r].concat(e(W)(i)))}function vr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw ur(t),new Error(t)}function mr(e,t){e||vr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr=new Map;function yr(e){mr(e instanceof Function,"Expected a class definition");var t=gr.get(e);return t?(mr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){var r=At(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Ne(r.getOptions(),null!=t?t:{}))return n;cr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wr(){return"http:"===_r()||"https:"===_r()}function _r(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!wr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xr=function(){"use strict";function t(r,n){e(c)(this,t),this.shortDelay=r,this.longDelay=n,mr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(_)(t,[{key:"get",value:function(){return Ir()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t){mr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er,Sr=function(){"use strict";function t(){e(c)(this,t)}return e(_)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Or=(Er={},e(B)(Er,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(B)(Er,"MISSING_CUSTOM_TOKEN","internal-error"),e(B)(Er,"INVALID_IDENTIFIER","invalid-email"),e(B)(Er,"MISSING_CONTINUE_URI","internal-error"),e(B)(Er,"INVALID_PASSWORD","wrong-password"),e(B)(Er,"MISSING_PASSWORD","internal-error"),e(B)(Er,"EMAIL_EXISTS","email-already-in-use"),e(B)(Er,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(B)(Er,"INVALID_IDP_RESPONSE","invalid-credential"),e(B)(Er,"INVALID_PENDING_TOKEN","invalid-credential"),e(B)(Er,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(B)(Er,"MISSING_REQ_TYPE","internal-error"),e(B)(Er,"EMAIL_NOT_FOUND","user-not-found"),e(B)(Er,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(B)(Er,"EXPIRED_OOB_CODE","expired-action-code"),e(B)(Er,"INVALID_OOB_CODE","invalid-action-code"),e(B)(Er,"MISSING_OOB_CODE","internal-error"),e(B)(Er,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(B)(Er,"INVALID_ID_TOKEN","invalid-user-token"),e(B)(Er,"TOKEN_EXPIRED","user-token-expired"),e(B)(Er,"USER_NOT_FOUND","user-token-expired"),e(B)(Er,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(B)(Er,"INVALID_CODE","invalid-verification-code"),e(B)(Er,"INVALID_SESSION_INFO","invalid-verification-id"),e(B)(Er,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(B)(Er,"MISSING_SESSION_INFO","missing-verification-id"),e(B)(Er,"SESSION_EXPIRED","code-expired"),e(B)(Er,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(B)(Er,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(B)(Er,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(B)(Er,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(B)(Er,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(B)(Er,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(B)(Er,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(B)(Er,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(B)(Er,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(B)(Er,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(B)(Er,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Er),Rr=new xr(3e4,6e4);function Cr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ar(e,t,r,n){return Pr.apply(this,arguments)}function Pr(){return Pr=e(a)(e(o).mark((function t(r,n,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Nr(r,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===n?u=s:a={body:JSON.stringify(s)}),c=Me(Object.assign({key:r.config.apiKey},u)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Sr.fetch()(Ur(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Pr.apply(this,arguments)}function Nr(e,t,r){return Dr.apply(this,arguments)}function Dr(){return(Dr=e(a)(e(o).mark((function t(r,n,i){var a,s,u,c,l,f,h,d,p;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},Or),n),t.prev=2,s=new jr(r),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Fr(r,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(z)(l.split(" : "),2),h=f[0],d=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw Fr(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw Fr(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw Fr(r,"user-disabled",c);case 29:if(p=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw fr(r,p,d);case 34:cr(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Oe)){t.next=41;break}throw t.t0;case 41:cr(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Mr(e,t,r,n){return Lr.apply(this,arguments)}function Lr(){return Lr=e(a)(e(o).mark((function t(r,n,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Ar(r,n,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&cr(r,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Lr.apply(this,arguments)}function Ur(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Tr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var jr=function(){"use strict";function t(r){var n=this;e(c)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(lr(r.auth,"network-request-failed"))}),Rr.get())}))}return e(_)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Fr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=lr(e,t,n);return i.customData._tokenResponse=r,i}function Vr(e,t){return Hr.apply(this,arguments)}function Hr(){return(Hr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Br(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return qr=e(a)(e(o).mark((function t(r){var n,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=Ve(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,pr((s=Gr(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:zr(Kr(s.auth_time)),issuedAtTime:zr(Kr(s.iat)),expirationTime:zr(Kr(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),qr.apply(this,arguments)}function Kr(e){return 1e3*Number(e)}function Gr(t){var r=e(z)(t.split("."),3),n=r[0],i=r[1],a=r[2];if(void 0===n||void 0===i||void 0===a)return ur("JWT malformed, contained fewer than 3 sections"),null;try{var o=ke(i);return o?JSON.parse(o):(ur("Failed to decode base64 JWT payload"),null)}catch(e){return ur("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Jr(e,t){return Xr.apply(this,arguments)}function Xr(){return Xr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Oe&&Yr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Xr.apply(this,arguments)}function Yr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r=function(){"use strict";function t(r){e(c)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(_)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}}]),t}(),Qr=function(){"use strict";function t(r,n){e(c)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(_)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){return en.apply(this,arguments)}function en(){return(en=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r){var n,i,a,s,u,c,l,f,h,d,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,Jr(r,Br(i,{idToken:a}));case 7:pr(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],r._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?nn(u.providerUserInfo):[],l=rn(r.providerData,c),f=r.isAnonymous,h=!(r.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!f&&h,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Qr(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tn(){return(tn=e(a)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Ve(r),e.next=3,Zr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rn(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(W)(n).concat(e(W)(r))}function nn(e){return e.map((function(e){var t=e.providerId,r=nr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function an(e,t){return on.apply(this,arguments)}function on(){return(on=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nr(r,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Me({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,s=a.tokenApiHost,u=a.apiKey,c=Ur(r,s,"/v1/token","key=".concat(u)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Sr.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn=function(){"use strict";function t(){e(c)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(_)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){pr(e.idToken,"internal-error"),pr(void 0!==e.idToken,"internal-error"),pr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,pr(r=Gr(t),"internal-error"),pr(void 0!==r.exp,"internal-error"),pr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,an(t,r);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return vr("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(pr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(pr("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(pr("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e,t){pr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var cn=function(){"use strict";function t(r){e(c)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=nr(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $r(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(W)(o.providerData):[],this.metadata=new Qr(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(_)(t,[{key:"getIdToken",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(pr(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return qr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return tn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(pr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){pr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,Zr(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Jr(t,Vr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,h=null!==(i=r.email)&&void 0!==i?i:void 0,d=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,k=r.uid,b=r.emailVerified,w=r.isAnonymous,_=r.providerData,I=r.stsTokenManager;pr(k&&I,e,"internal-error");var x=sn.fromJSON(this.name,I);pr("string"==typeof k,e,"internal-error"),un(f,e.name),un(h,e.name),pr("boolean"==typeof b,e,"internal-error"),pr("boolean"==typeof w,e,"internal-error"),un(d,e.name),un(p,e.name),un(v,e.name),un(m,e.name),un(g,e.name),un(y,e.name);var T=new t({uid:k,auth:e,email:h,emailVerified:b,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new sn).updateFromServerResponse(n),u=new t({uid:n.localId,auth:r,stsTokenManager:s,isAnonymous:i}),e.next=5,Zr(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),ln=function(){"use strict";function t(){e(c)(this,t),this.type="NONE",this.storage={}}return e(_)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.type="NONE";var fn=ln;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var dn=function(){"use strict";function t(r,n,i){e(c)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=hn(this.userKey,o.apiKey,s),this.fullPersistenceKey=hn("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(_)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?cn._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,f,h,d,p,v,m,g,y,k,b;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(n.length){s.next=2;break}return s.abrupt("return",new t(yr(fn),r,i));case 2:return s.next=4,Promise.all(n.map(function(){var t=e(a)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||yr(fn),l=hn(i,r.config.apiKey,r.name),f=null,h=!0,d=!1,p=void 0,s.prev=9,v=n[Symbol.iterator]();case 11:if(h=(m=v.next()).done){s.next=29;break}return g=m.value,s.prev=13,s.next=16,g._get(l);case 16:if(!(y=s.sent)){s.next=22;break}return k=cn._fromJSON(r,y),g!==c&&(f=k),c=g,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:h=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,p=s.t1;case 35:s.prev=35,s.prev=36,h||null==v.return||v.return();case 38:if(s.prev=38,!d){s.next=41;break}throw p;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){s.next=46;break}return s.abrupt("return",new t(c,r,i));case 46:if(c=b[0],!f){s.next=50;break}return s.next=50,c._set(l,f.toJSON());case 50:return s.next=52,Promise.all(n.map(function(){var t=e(a)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,r,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bn(t))return"Blackberry";if(wn(t))return"Webos";if(mn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(kn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/firefox\//i.test(e)}function mn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/crios\//i.test(e)}function yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/iemobile/i.test(e)}function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/android/i.test(e)}function bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/blackberry/i.test(e)}function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/webos/i.test(e)}function _n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function In(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return _n(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function xn(){return((e=Ee()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return _n(e)||kn(e)||wn(e)||bn(e)||/windows phone/i.test(e)||yn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=pn(Ee());break;case"Worker":t="".concat(pn(Ee()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Mt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.queue=[]}return e(_)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,f,h,d,p,v,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,s=!1,u=void 0,e.prev=5,c=r.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),h=!0,d=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){g=m.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,p=e.t2;case 43:e.prev=43,e.prev=44,h||null==v.return||v.return();case 46:if(e.prev=46,!d){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),On=function(){"use strict";function t(r,n,i){e(c)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cn(this),this.idTokenSubscription=new Cn(this),this.beforeStateQueue=new Sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=or,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(_)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=yr(r));var n=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,dn.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(s=n.currentUser)||void 0===s?void 0:s.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(s=f.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return pr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(s));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zr(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 9:return e.abrupt("return",r.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Ve(t):null)&&pr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&pr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(yr(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Re("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return pr(i=t&&yr(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,dn.create(r,[yr(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,s;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(s=r.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pr(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return pr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=En(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(B)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return Ve(e)}var Cn=function(){"use strict";function t(r){var n,i,a=this;e(c)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new je((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(_)(t,[{key:"next",get:function(){return pr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function An(t,r,n){var i=Rn(t);pr(i._canInitEmulator,i,"emulator-config-failed"),pr(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=Pn(r),s=function(t){var r=Pn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Nn(i.substr(o.length+1))}}var s=e(z)(i.split(":"),2);return{host:s[0],port:Nn(s[1])}}(r),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Pn(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Nn(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Dn=function(){"use strict";function t(r,n){e(c)(this,t),this.providerId=r,this.signInMethod=n}return e(_)(t,[{key:"toJSON",value:function(){return vr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return vr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return vr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return vr("not implemented")}}]),t}();function Mn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithPassword",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fn(e,t){return Vn.apply(this,arguments)}function Vn(){return(Vn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithEmailLink",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Hn(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithEmailLink",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(c)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(_)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Un(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Fn(t,{email:r._email,oobCode:r._password}));case 5:cr(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Mn(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Hn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:cr(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Dn);function zn(e,t){return qn.apply(this,arguments)}function qn(){return(qn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithIdp",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){var t;return e(c)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(_)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return zn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,zn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Me(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=nr(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(Dn);function Gn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ar(r,"POST","/v1/accounts:sendVerificationCode",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xn(){return(Xn=e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithPhoneNumber",Cr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yn(){return(Yn=e(a)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Mr(r,"POST","/v1/accounts:signInWithPhoneNumber",Cr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Fr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var $n=e(B)({},"USER_NOT_FOUND","user-not-found");function Qn(){return(Qn=e(a)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Mr(r,"POST","/v1/accounts:signInWithPhoneNumber",Cr(r,i),$n));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t){var i;return e(c)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Xn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Yn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Qn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Dn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei=function(){"use strict";function t(r){var n,i,a,o,s,u;e(c)(this,t);var l=Le(Ue(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,h=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);pr(f&&h&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=h,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=l.tenantId)&&void 0!==u?u:null}return e(_)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Le(Ue(e)).link,r=t?Le(Ue(t)).deep_link_id:null,n=Le(Ue(e)).deep_link_id;return(n?Le(Ue(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ti=function(){"use strict";function t(){e(c)(this,t),this.providerId=t.PROVIDER_ID}return e(_)(t,null,[{key:"credential",value:function(e,t){return Wn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=ei.parseLink(t);return pr(r,"argument-error"),Wn._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();ti.PROVIDER_ID="password",ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ri=function(){"use strict";function t(r){e(c)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(_)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),ni=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){var t;return e(c)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(_)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(W)(this.scopes)}}]),n}(ri),ii=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){return e(c)(this,n),r.call(this,"facebook.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ni);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.FACEBOOK_SIGN_IN_METHOD="facebook.com",ii.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){var t;return e(c)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(_)(n,null,[{key:"credential",value:function(e,t){return Kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ni);ai.GOOGLE_SIGN_IN_METHOD="google.com",ai.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){return e(c)(this,n),r.call(this,"github.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ni);oi.GITHUB_SIGN_IN_METHOD="github.com",oi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){return e(c)(this,n),r.call(this,"twitter.com")}return e(_)(n,null,[{key:"credential",value:function(e,t){return Kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ni);si.TWITTER_SIGN_IN_METHOD="twitter.com",si.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui=function(){"use strict";function t(r){e(c)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(_)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn._fromIdTokenResponse(r,i,s);case 2:return u=e.sent,c=ci(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(r,n,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return s=ci(i),e.abrupt("return",new t({user:r,providerId:s,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function ci(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var li=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t,i,a,o){var s,u;return e(c)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(q)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(_)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Oe);function fi(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw li._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e,t){return di.apply(this,arguments)}function di(){return di=e(a)(e(o).mark((function t(r,n){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Jr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ui._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),di.apply(this,arguments)}function pi(e,t){return vi.apply(this,arguments)}function vi(){return vi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){var i,a,s,u,c,l,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=r.auth,s="reauthenticate",e.prev=3,e.next=6,Jr(r,fi(a,s,n,r),i);case 6:return pr((u=e.sent).idToken,a,"internal-error"),pr(c=Gr(u.idToken),a,"internal-error"),l=c.sub,pr(r.uid===l,a,"user-mismatch"),e.abrupt("return",ui._forOperation(r,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&cr(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),vi.apply(this,arguments)}function mi(e,t){return gi.apply(this,arguments)}function gi(){return gi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r,n){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,fi(r,a,n);case 4:return s=e.sent,e.next=7,ui._fromIdTokenResponse(r,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),gi.apply(this,arguments)}function yi(e,t,r,n){return Ve(e).onIdTokenChanged(t,r,n)}function ki(e,t,r){return Ve(e).beforeAuthStateChanged(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e,t){return Ar(e,"POST","/v2/accounts/mfaEnrollment:start",Cr(e,t))}new WeakMap;var wi="__sak",_i=function(){"use strict";function t(r,n){e(c)(this,t),this.storageRetriever=r,this.type=n}return e(_)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(wi,"1"),this.storage.removeItem(wi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){var t,i;return e(c)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(mn(i=Ee())||_n(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Tn(),t._shouldAllowMigration=!0,t}return e(_)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);xn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Zt)(e(rr)(n.prototype),"_set",i).call(s,t,r);case 2:s.localCache[t]=JSON.stringify(r);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Zt)(e(rr)(n.prototype),"_get",r).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Zt)(e(rr)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(_i);Ii.type="LOCAL";var xi=Ii,Ti=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(){return e(c)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(_)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(_i);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ti.type="SESSION";var Ei=Ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return Promise.all(t.map(function(){var t=e(a)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(){"use strict";function t(r){e(c)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(_)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,s,u,c,l,f,h,d;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),h=Array.from(f).map(function(){var t=e(a)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Si(h);case 9:d=n.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ri(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.receivers=[];var Ci=function(){"use strict";function t(r){e(c)(this,t),this.target=r,this.handlers=new Set}return e(_)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=Ri("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:s,onMessage:function(t){var r=t;if(r.data.eventId===o)switch(r.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(r.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:r},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){return void 0!==Ai().WorkerGlobalScope&&"function"==typeof Ai().importScripts}function Ni(){return Di.apply(this,arguments)}function Di(){return(Di=e(a)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi="firebaseLocalStorageDb",Li="firebaseLocalStorage",Ui="fbase_key",ji=function(){"use strict";function t(r){e(c)(this,t),this.request=r}return e(_)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Fi(e,t){return e.transaction([Li],t?"readwrite":"readonly").objectStore(Li)}function Vi(){var e=indexedDB.deleteDatabase(Mi);return new ji(e).toPromise()}function Hi(){var t=indexedDB.open(Mi,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Li,{keyPath:Ui})}catch(e){n(e)}})),t.addEventListener("success",e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Li)){e.next=12;break}return i.close(),e.next=5,Vi();case 5:return e.t0=r,e.next=8,Hi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function Bi(e,t,r){return Wi.apply(this,arguments)}function Wi(){return(Wi=e(a)(e(o).mark((function t(r,n,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Fi(r,!0).put((a={},e(B)(a,Ui,n),e(B)(a,"value",i),a)),t.abrupt("return",new ji(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zi(e,t){return qi.apply(this,arguments)}function qi(){return(qi=e(a)(e(o).mark((function t(r,n){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Fi(r,!1).get(n),e.next=3,new ji(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ki(e,t){var r=Fi(e,!0).delete(t);return new ji(r).toPromise()}var Gi=function(){"use strict";function t(){e(c)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(_)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Hi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=Oi._getInstance(Pi()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(a)(e(o).mark((function r(n,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ni();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ci(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Hi();case 5:return r=e.sent,e.next=8,Bi(r,wi,"1");case 8:return e.next=10,Ki(r,wi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Bi(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return zi(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ki(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n,i,a,s,u,c,l,f,h,d,p,v,m,g,y,k,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Fi(e,!1).getAll();return new ji(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=n[Symbol.iterator]();!(s=(f=l.next()).done);s=!0)h=f.value,d=h.fbase_key,p=h.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Gi.type="LOCAL";var Ji=Gi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){return Ar(e,"POST","/v2/accounts/mfaSignIn:start",Cr(e,t))}function Yi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=lr("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function $i(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$i("rcb"),new xr(3e4,6e4);var Qi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t,r){return ea.apply(this,arguments)}function ea(){return(ea=e(a)(e(o).mark((function t(r,n,i){var a,s,u,c,l,f,h,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,pr("string"==typeof s,r,"argument-error"),pr(i.type===Qi,r,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return pr("enroll"===c.type,r,"internal-error"),e.next=15,bi(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return pr("signin"===c.type,r,"internal-error"),pr(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Xi(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:s}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Gn(r,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ta=function(){"use strict";function t(r){e(c)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Rn(r)}return e(_)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Zi(this.auth,e,Ve(t))}}],[{key:"credential",value:function(e,t){return Zn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Zn._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e,t){return t?yr(t):(pr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.PROVIDER_ID="phone",ta.PHONE_SIGN_IN_METHOD="phone";var na=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t){var i;return e(c)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return zn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return zn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return zn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Dn);function ia(e){return mi(e.auth,new na(e),e.bypassAuthState)}function aa(e){var t=e.auth,r=e.user;return pr(r,t,"internal-error"),pi(r,new na(e),e.bypassAuthState)}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=e(a)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,pr(i=r.user,n,"internal-error"),e.abrupt("return",hi(i,new na(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(c)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(_)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var r=e(a)(e(o).mark((function r(n,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),r,null,[[1,10]])})));return function(e,t){return r.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return r.reject(c),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ia;case"linkViaPopup":case"linkViaRedirect":return oa;case"reauthViaPopup":case"reauthViaRedirect":return aa;default:cr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ca=new xr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t,r){return fa.apply(this,arguments)}function fa(){return(fa=e(a)(e(o).mark((function t(r,n,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Rn(r),hr(r,n,ri),s=ra(a,i),u=new ha(a,"signInViaPopup",n,s),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ha=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t,i,a,o,s){var u;return e(c)(this,n),(u=r.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(q)(u),u}return e(_)(n,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return pr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mr(1===t.filter.length,"Popup operations only handle one event"),n=Ri(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(lr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(lr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(lr(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ca.get())};t()}}]),n}(ua);ha.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var da=new Map,pa=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(_)(n,[{key:"execute",value:function(){var t=this,r=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=da.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,va(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Zt)(e(rr)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:da.set(r.auth._key(),a);case 21:return r.bypassAuthState||da.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,s=function(){return e(Zt)(e(rr)(n.prototype),"onAuthEvent",r)};return e(a)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(ua);function va(e,t){return ma.apply(this,arguments)}function ma(){return(ma=e(a)(e(o).mark((function t(r,n){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ka(n),a=ya(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ga(e,t){da.set(e._key(),t)}function ya(e){return yr(e._redirectPersistence)}function ka(e){return hn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t){return wa.apply(this,arguments)}function wa(){return wa=e(a)(e(o).mark((function t(r,n){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Rn(r),s=ra(a,n),u=new pa(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),wa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(_)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xa(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!xa(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ia(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ia(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Ia(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function xa(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Ta(e){return Ea.apply(this,arguments)}function Ea(){return Ea=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(r){var n,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Ar(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),Ea.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oa=/^https?/;function Ra(){return(Ra=e(a)(e(o).mark((function t(r){var n,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ta(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Ca(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:cr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ca(e){var t=br(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Oa.test(n))return!1;if(Sa.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa=new xr(3e4,6e4);function Pa(){var t=Ai().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(W)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var Na=null;function Da(e){return Na=Na||function(e){return new Promise((function(t,r){var n,i,a;function o(){Pa(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Pa(),r(lr(e,"network-request-failed"))},timeout:Aa.get()})}if(null===(i=null===(n=Ai().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ai().gapi)||void 0===a?void 0:a.load)){var s=$i("iframefcb");return Ai()[s]=function(){gapi.load?o():r(lr(e,"network-request-failed"))},Yi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Na=null,e}))}(e),Na}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ma=new xr(5e3,15e3),La={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ua=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ja(e){var t=e.config;pr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Tr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Mt},i=Ua.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(Me(n).slice(1))}function Fa(e){return Va.apply(this,arguments)}function Va(){return Va=e(a)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Da(r);case 2:return n=t.sent,pr(i=Ai().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:ja(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:La,dontclear:!0},(function(t){return new Promise(function(){var n=e(a)(e(o).mark((function n(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Ai().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=lr(r,"network-request-failed"),u=Ai().setTimeout((function(){a(s)}),Ma.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),Va.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ha={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ba="_blank",Wa="http://localhost",za=function(){"use strict";function t(r){e(c)(this,t),this.window=r,this.associatedEvent=null}return e(_)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function qa(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ha),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Ee().toLowerCase();n&&(u=gn(l)?Ba:n),vn(l)&&(r=r||Wa,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(z)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(In(l)&&"_self"!==u)return Ka(r||"",u),new za(null);var h=window.open(r||"",u,f);pr(h,t,"popup-blocked");try{h.focus()}catch(e){}return new za(h)}function Ka(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ga="__/auth/handler",Ja="emulator/auth/handler";function Xa(t,r,n,i,a,o){pr(t.config.authDomain,t,"auth-domain-config-required"),pr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Mt,eventId:a};if(r instanceof ri){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",Pe(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,h=Object.entries(o||{})[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=e(z)(f.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}}if(r instanceof ni){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,b=!0,w=!1,_=void 0;try{for(var I,x=Object.keys(k)[Symbol.iterator]();!(b=(I=x.next()).done);b=!0){var T=I.value;void 0===k[T]&&delete k[T]}}catch(e){w=!0,_=e}finally{try{b||null==x.return||x.return()}finally{if(w)throw _}}return"".concat((g=t,y=g.config,y.emulator?Tr(y,Ja):"https://".concat(y.authDomain,"/").concat(Ga)),"?").concat(Me(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ya="webStorageSupport",$a=function(){"use strict";function t(){e(c)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=ba,this._overrideRedirectResult=ga}return e(_)(t,[{key:"_openPopup",value:function(t,r,n,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mr(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Xa(t,r,n,br(),i),e.abrupt("return",qa(t,c,Ri()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return a=Xa(t,r,n,br(),i),Ai().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(mr(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fa(t);case 2:return i=e.sent,a=new _a(t),i.register("authEvent",(function(e){return pr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ya,{type:Ya},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),cr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ra.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Tn()||mn()||_n()}}]),t}(),Qa=$a,Za=function(t){"use strict";e(K)(n,t);var r=e(ne)(n);function n(t){var i;return e(c)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(_)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Ar(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ar(e,"POST","/v2/accounts/mfaSignIn:finalize",Cr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(c)(this,t),this.factorId=r}return e(_)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return vr("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(c)(this,t)}return e(_)(t,null,[{key:"assertion",value:function(e){return Za._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var eo="@firebase/auth",to="0.21.1",ro=function(){"use strict";function t(r){e(c)(this,t),this.auth=r,this.internalListeners=new Map}return e(_)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(a)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){pr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var no,io=xe("authIdTokenMaxAge")||300,ao=null,oo=function(t){return function(){var r=e(a)(e(o).mark((function r(n){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>io)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,ao!==s){e.next=12;break}return e.abrupt("return");case 12:return ao=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};no="Browser",Ct(new He("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){pr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),pr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:no,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:En(no)},i=new On(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(yr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Ct(new He("auth-internal",(function(e){var t=Rn(e.getProvider("auth").getImmediate());return new ro(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),jt(eo,to,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(no)),jt(eo,to,"esm2017");var so="user",uo=(Lt({apiKey:"AIzaSyASYZ8NOzf1HV_qXySt_PAWGOCo9aSEqfI",authDomain:"filmoteka-tp.firebaseapp.com",projectId:"filmoteka-tp",storageBucket:"filmoteka-tp.appspot.com",messagingSenderId:"973907143233",appId:"1:973907143233:web:fc416ff81e72bf4792b4c0"}),new ai),co=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut(),t=At(e,"auth");if(t.isInitialized())return t.getImmediate();var r=kr(e,{popupRedirectResolver:Qa,persistence:[Ji,xi,Ei]}),n=xe("authTokenSyncURL");if(n){var i=oo(n);ki(r,i,(function(){return i(r.currentUser)})),yi(r,(function(e){return i(e)}))}var a=_e("auth");return a&&An(r,"http://".concat(a)),r}(),lo=document.getElementById("sing_in"),fo=document.getElementById("list_links");if(localStorage.getItem(so)){lo.remove();fo.insertAdjacentHTML("beforeend",'<li class="nav-list__item">\n                <a id="library_link" class="nav-list__link" href="./library.html">my library</a>\n              </li>')}lo.addEventListener("click",(function(e){e.preventDefault(),la(co,uo).then((function(e){ai.credentialFromResult(e).accessToken;var t=e.user;localStorage.setItem(so,t.displayName),lo.remove();fo.insertAdjacentHTML("beforeend",'<li class="nav-list__item">\n                              <a id="library_link" class="nav-list__link" href="./library.html">\n                                my library\n                              </a>\n                           </li>')})).catch((function(e){e.code,e.message,e.customData.email,ai.credentialFromError(e)}))})),i("k6LBo"),i("k9iCC"),i("dt3WK"),i("j61u5")}();
//# sourceMappingURL=index.17750dd1.js.map
