!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=i("gD1JV"))&&r.__esModule?r:{default:r};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=a()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=i("fVNic"))&&r.__esModule?r:{default:r}}));var a={};function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)}))}};var s={},u=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return A()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(R([])));w&&w!==r&&n.call(w,a)&&(b=w);var _=g.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=g,u(_,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(s);try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var c=i("l5bVx");function l(e,t){return function(){return e.apply(t,arguments)}}var f,d=Object.prototype.toString,h=Object.getPrototypeOf,p=(f=Object.create(null),function(e){var t=d.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())}),v=function(e){return e=e.toLowerCase(),function(t){return p(t)===e}},m=function(t){return function(r){return(void 0===r?"undefined":e(c)(r))===t}},y=Array.isArray,g=m("undefined");var b=v("ArrayBuffer");var k=m("string"),w=m("function"),_=m("number"),x=function(e){return null!==e&&"object"==typeof e},E=function(e){if("object"!==p(e))return!1;var t=h(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},I=v("Date"),T=v("File"),S=v("Blob"),O=v("FileList"),R=v("URLSearchParams");function A(e,t){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,o=void 0!==a&&a;if(null!=e)if("object"!=typeof e&&(e=[e]),y(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{var s,u=o?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;for(r=0;r<c;r++)s=u[r],t.call(null,e[s],s,e)}}function C(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),i=n.length;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,P=function(e){return!g(e)&&e!==N};var L,D,M=(L="undefined"!=typeof Uint8Array&&h(Uint8Array),function(e){return L&&e instanceof L}),j=v("HTMLFormElement"),U=(D=Object.prototype.hasOwnProperty,function(e,t){return D.call(e,t)}),F=v("RegExp"),B=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};A(r,(function(r,i){!1!==t(r,i,e)&&(n[i]=r)})),Object.defineProperties(e,n)},V={isArray:y,isArrayBuffer:b,isBuffer:function(e){return null!==e&&!g(e)&&null!==e.constructor&&!g(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||d.call(e)===t||w(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&b(e.buffer)},isString:k,isNumber:_,isBoolean:function(e){return!0===e||!1===e},isObject:x,isPlainObject:E,isUndefined:g,isDate:I,isFile:T,isBlob:S,isRegExp:F,isFunction:w,isStream:function(e){return x(e)&&w(e.pipe)},isURLSearchParams:R,isTypedArray:M,isFileList:O,forEach:A,merge:function e(){for(var t=(P(this)&&this||{}).caseless,r={},n=function(n,i){var a=t&&C(r,i)||i;E(r[a])&&E(n)?r[a]=e(r[a],n):E(n)?r[a]=e({},n):y(n)?r[a]=n.slice():r[a]=n},i=0,a=arguments.length;i<a;i++)arguments[i]&&A(arguments[i],n);return r},extend:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return A(t,(function(t,n){r&&w(t)?e[n]=l(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var i,a,o,s={};if(t=t||{},null==e)return t;do{for(a=(i=Object.getOwnPropertyNames(e)).length;a-- >0;)o=i[a],n&&!n(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==r&&h(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:p,kindOfTest:v,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;if(y(e))return e;var t=e.length;if(!_(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var i=r.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:j,hasOwnProperty:U,hasOwnProp:U,reduceDescriptors:B,freezeMethods:function(e){B(e,(function(t,r){if(w(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];w(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:function(e,t){var r={},n=function(e){e.forEach((function(e){r[e]=!0}))};return y(e)?n(e):n(String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:C,global:N,isContextDefined:P,toJSONObject:function(e){var t=new Array(10),r=function(e,n){if(x(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;var i=y(e)?[]:{};return A(e,(function(e,t){var a=r(e,n+1);!g(a)&&(i[t]=a)})),t[n]=void 0,i}}return e};return r(e,0)}},H=i("8MBJY"),z=i("a2hTj");function W(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}V.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var q=W.prototype,J={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){J[e]={value:e}})),Object.defineProperties(W,J),Object.defineProperty(q,"isAxiosError",{value:!0}),W.from=function(e,t,r,n,i,a){var o=Object.create(q);return V.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),W.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};var K=W,G=e("object"==typeof self?self.FormData:window.FormData),Y=i("3aNd6").Buffer;function X(e){return V.isPlainObject(e)||V.isArray(e)}function $(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function Q(e,t,r){return e?e.concat(t).map((function(e,t){return e=$(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var Z=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)}));var ee=function(e,t,r){if(!V.isObject(e))throw new TypeError("target must be an object");t=t||new(G||FormData);var n,i=(r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,a=r.visitor||l,o=r.dots,s=r.indexes,u=(r.Blob||"undefined"!=typeof Blob&&Blob)&&((n=t)&&V.isFunction(n.append)&&"FormData"===n[Symbol.toStringTag]&&n[Symbol.iterator]);if(!V.isFunction(a))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!u&&V.isBlob(e))throw new K("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):Y.from(e):e}function l(e,r,n){var a=e;if(e&&!n&&"object"==typeof e)if(V.endsWith(r,"{}"))r=i?r:r.slice(0,-2),e=JSON.stringify(e);else if(V.isArray(e)&&function(e){return V.isArray(e)&&!e.some(X)}(e)||V.isFileList(e)||V.endsWith(r,"[]")&&(a=V.toArray(e)))return r=$(r),a.forEach((function(e,n){!V.isUndefined(e)&&null!==e&&t.append(!0===s?Q([r],n,o):null===s?r:r+"[]",c(e))})),!1;return!!X(e)||(t.append(Q(n,r,o),c(e)),!1)}var f=[],d=Object.assign(Z,{defaultVisitor:l,convertValue:c,isVisitable:X});if(!V.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!V.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),V.forEach(r,(function(r,i){!0===(!(V.isUndefined(r)||null===r)&&a.call(t,r,V.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),f.pop()}}(e),t};function te(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function re(e,t){this._pairs=[],e&&ee(e,this,t)}var ne=re.prototype;ne.append=function(e,t){this._pairs.push([e,t])},ne.toString=function(e){var t=e?function(t){return e.call(this,t,te)}:te;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ie=re;function ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oe(e,t,r){if(!t)return e;var n,i=r&&r.encode||ae,a=r&&r.serialize;if(n=a?a(t,r):V.isURLSearchParams(t)?t.toString():new ie(t,r).toString(i)){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}H=i("8MBJY"),z=i("a2hTj");var se,ue=function(){function t(){e(H)(this,t),this.handlers=[]}return e(z)(t,[{key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),t}(),ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le="undefined"!=typeof URLSearchParams?URLSearchParams:ie,fe=FormData,de=("undefined"==typeof navigator||"ReactNative"!==(se=navigator.product)&&"NativeScript"!==se&&"NS"!==se)&&"undefined"!=typeof window&&"undefined"!=typeof document,he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,pe={isBrowser:!0,classes:{URLSearchParams:le,FormData:fe,Blob:Blob},isStandardBrowserEnv:de,isStandardBrowserWebWorkerEnv:he,protocols:["http","https","file","blob","url","data"]};function ve(e,t){return ee(e,new pe.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return pe.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}var me=function(e){function t(e,r,n,i){var a=e[i++],o=Number.isFinite(+a),s=i>=e.length;return a=!a&&V.isArray(n)?n.length:a,s?(V.hasOwnProp(n,a)?n[a]=[n[a],r]:n[a]=r,!o):(n[a]&&V.isObject(n[a])||(n[a]=[]),t(e,r,n[a],i)&&V.isArray(n[a])&&(n[a]=function(e){var t,r,n={},i=Object.keys(e),a=i.length;for(t=0;t<a;t++)n[r=i[t]]=e[r];return n}(n[a])),!o)}if(V.isFormData(e)&&V.isFunction(e.entries)){var r={};return V.forEachEntry(e,(function(e,n){t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),n,r,0)})),r}return null},ye={"Content-Type":void 0};var ge={transitional:ce,adapter:["xhr","http"],transformRequest:[function(e,t){var r,n=t.getContentType()||"",i=n.indexOf("application/json")>-1,a=V.isObject(e);if(a&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return i&&i?JSON.stringify(me(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ve(e,this.formSerializer).toString();if((r=V.isFileList(e))||n.indexOf("multipart/form-data")>-1){var o=this.env&&this.env.FormData;return ee(r?{"files[]":e}:e,o&&new o,this.formSerializer)}}return a||i?(t.setContentType("application/json",!1),function(e,t,r){if(V.isString(e))try{return(t||JSON.parse)(e),V.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||ge.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&V.isString(e)&&(r&&!this.responseType||n)){var i=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw K.from(e,K.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pe.classes.FormData,Blob:pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};V.forEach(["delete","get","head"],(function(e){ge.headers[e]={}})),V.forEach(["post","put","patch"],(function(e){ge.headers[e]=V.merge(ye)}));var be=ge,ke=(H=i("8MBJY"),z=i("a2hTj"),{});Object.defineProperty(ke,"__esModule",{value:!0}),ke.default=function(e,t){return we.default(e)||_e.default(e,t)||Ee.default(e,t)||xe.default()};var we=Ie(i("8slrw")),_e=Ie(i("7AJDX")),xe=Ie(i("ifqQW")),Ee=Ie(i("auk6i"));function Ie(e){return e&&e.__esModule?e:{default:e}}var Te={};Object.defineProperty(Te,"__esModule",{value:!0}),Te.default=function(e){return Se.default(e)||Oe.default(e)||Ae.default(e)||Re.default()};var Se=Ce(i("kMC0W")),Oe=Ce(i("7AJDX")),Re=Ce(i("8CtQK")),Ae=Ce(i("auk6i"));function Ce(e){return e&&e.__esModule?e:{default:e}}var Ne=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pe=Symbol("internals");function Le(e){return e&&String(e).trim().toLowerCase()}function De(e){return!1===e||null==e?e:V.isArray(e)?e.map(De):String(e)}function Me(e,t,r,n){return V.isFunction(n)?n.call(this,t,r):V.isString(t)?V.isString(n)?-1!==t.indexOf(n):V.isRegExp(n)?n.test(t):void 0:void 0}var je=Symbol.iterator,Ue=Symbol.toStringTag,Fe=function(){function t(r){e(H)(this,t),r&&this.set(r)}return e(z)(t,[{key:"set",value:function(e,t,r){var n=this;function i(e,t,r){var i=Le(t);if(!i)throw new Error("header name must be a non-empty string");var a=V.findKey(n,i);(!a||void 0===n[a]||!0===r||void 0===r&&!1!==n[a])&&(n[a||t]=De(e))}var a,o,s,u,c,l=function(e,t){return V.forEach(e,(function(e,r){return i(e,r,t)}))};return V.isPlainObject(e)||e instanceof this.constructor?l(e,t):V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?l((c={},(a=e)&&a.split("\n").forEach((function(e){u=e.indexOf(":"),o=e.substring(0,u).trim().toLowerCase(),s=e.substring(u+1).trim(),!o||c[o]&&Ne[o]||("set-cookie"===o?c[o]?c[o].push(s):c[o]=[s]:c[o]=c[o]?c[o]+", "+s:s)})),c),t):null!=e&&i(t,e,r),this}},{key:"get",value:function(e,t){if(e=Le(e)){var r=V.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(V.isFunction(t))return t.call(this,n,r);if(V.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=Le(e)){var r=V.findKey(this,e);return!(!r||t&&!Me(0,this[r],r,t))}return!1}},{key:"delete",value:function(e,t){var r=this,n=!1;function i(e){if(e=Le(e)){var i=V.findKey(r,e);!i||t&&!Me(0,r[i],i,t)||(delete r[i],n=!0)}}return V.isArray(e)?e.forEach(i):i(e),n}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(e){var t=this,r={};return V.forEach(this,(function(n,i){var a=V.findKey(r,i);if(a)return t[a]=De(n),void delete t[i];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))}(i):String(i).trim();o!==i&&delete t[i],t[o]=De(n),r[o]=!0})),this}},{key:"concat",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i;return(i=this.constructor).concat.apply(i,[this].concat(e(Te)(r)))}},{key:"toJSON",value:function(e){var t=Object.create(null);return V.forEach(this,(function(r,n){null!=r&&!1!==r&&(t[n]=e&&V.isArray(r)?r.join(", "):r)})),t}},{key:je,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(t){var r=e(ke)(t,2);return r[0]+": "+r[1]})).join("\n")}},{key:Ue,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=new this(e);return r.forEach((function(e){return i.set(e)})),i}},{key:"accessor",value:function(e){var t=(this[Pe]=this[Pe]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=Le(e);t[n]||(!function(e,t){var r=V.toCamelCase(" "+t);["get","set","has"].forEach((function(n){Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[n]=!0)}return V.isArray(e)?e.forEach(n):n(e),this}}]),t}();Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),V.freezeMethods(Fe.prototype),V.freezeMethods(Fe);var Be=Fe;function Ve(e,t){var r=this||be,n=t||r,i=Be.from(n.headers),a=n.data;return V.forEach(e,(function(e){a=e.call(r,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function He(e){return!(!e||!e.__CANCEL__)}function ze(e,t,r){K.call(this,null==e?"canceled":e,K.ERR_CANCELED,t,r),this.name="CanceledError"}V.inherits(ze,K,{__CANCEL__:!0});var We=ze;function qe(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new K("Request failed with status code "+r.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}var Je=pe.isStandardBrowserEnv?{write:function(e,t,r,n,i,a){var o=[];o.push(e+"="+encodeURIComponent(t)),V.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),V.isString(n)&&o.push("path="+n),V.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ke(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Ke(e,t):t}var Ye=pe.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=V.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};var Xe=function(e,t){e=e||10;var r,n=new Array(e),i=new Array(e),a=0,o=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=i[o];r||(r=u),n[a]=s,i[a]=u;for(var l=o,f=0;l!==a;)f+=n[l++],l%=e;if((a=(a+1)%e)===o&&(o=(o+1)%e),!(u-r<t)){var d=c&&u-c;return d?Math.round(1e3*f/d):void 0}}};function $e(e,t){var r=0,n=Xe(50,250);return function(i){var a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-r,u=n(s);r=a;var c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:u||void 0,estimated:u&&o&&a<=o?(o-a)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var Qe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){var n,i=e.data,a=Be.from(e.headers).normalize(),o=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}V.isFormData(i)&&(pe.isStandardBrowserEnv||pe.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(c+":"+l))}var f=Ge(e.baseURL,e.url);function d(){if(u){var n=Be.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());qe((function(e){t(e),s()}),(function(e){r(e),s()}),{data:o&&"text"!==o&&"json"!==o?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),oe(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||ce;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new K(t,n.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},pe.isStandardBrowserEnv){var h=(e.withCredentials||Ye(f))&&e.xsrfCookieName&&Je.read(e.xsrfCookieName);h&&a.set(e.xsrfHeaderName,h)}void 0===i&&a.setContentType(null),"setRequestHeader"in u&&V.forEach(a.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),V.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&"json"!==o&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",$e(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",$e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(n=function(t){u&&(r(!t||t.type?new We(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));var p,v=(p=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f))&&p[1]||"";v&&-1===pe.protocols.indexOf(v)?r(new K("Unsupported protocol "+v+":",K.ERR_BAD_REQUEST,e)):u.send(i||null)}))}};V.forEach(Qe,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ze={getAdapter:function(e){for(var t,r,n=(e=V.isArray(e)?e:[e]).length,i=0;i<n&&(t=e[i],!(r=V.isString(t)?Qe[t.toLowerCase()]:t));i++);if(!r){if(!1===r)throw new K("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw new Error(V.hasOwnProp(Qe,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!V.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Qe};function et(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new We(null,e)}function tt(e){return et(e),e.headers=Be.from(e.headers),e.data=Ve.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||be.adapter)(e).then((function(t){return et(e),t.data=Ve.call(e,e.transformResponse,t),t.headers=Be.from(t.headers),t}),(function(t){return He(t)||(et(e),t&&t.response&&(t.response.data=Ve.call(e,e.transformResponse,t.response),t.response.headers=Be.from(t.response.headers))),Promise.reject(t)}))}var rt=function(e){return e instanceof Be?e.toJSON():e};function nt(e,t){t=t||{};var r={};function n(e,t,r){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:r},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function i(e,t,r){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function a(e,t){if(!V.isUndefined(t))return n(void 0,t)}function o(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,i,a){return a in t?n(r,i):a in e?n(void 0,r):void 0}var u={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:function(e,t){return i(rt(e),rt(t),!0)}};return V.forEach(Object.keys(e).concat(Object.keys(t)),(function(n){var a=u[n]||i,o=a(e[n],t[n],n);V.isUndefined(o)&&a!==s||(r[n]=o)})),r}c=i("l5bVx");var it="1.2.3",at={};["object","boolean","number","function","string","symbol"].forEach((function(t,r){at[t]=function(n){return(void 0===n?"undefined":e(c)(n))===t||"a"+(r<1?"n ":" ")+t}}));var ot={};at.transitional=function(e,t,r){function n(e,t){return"[Axios v1.2.3] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new K(n(i," has been removed"+(t?" in "+t:"")),K.ERR_DEPRECATED);return t&&!ot[i]&&(ot[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var st={assertOptions:function(e,t,r){if("object"!=typeof e)throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var a=n[i],o=t[a];if(o){var s=e[a],u=void 0===s||o(s,a,e);if(!0!==u)throw new K("option "+a+" must be "+u,K.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}},validators:at},ut=st.validators,ct=function(){function t(r){e(H)(this,t),this.defaults=r,this.interceptors={request:new ue,response:new ue}}return e(z)(t,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r,n=(t=nt(this.defaults,t)).transitional,i=t.paramsSerializer,a=t.headers;void 0!==n&&st.assertOptions(n,{silentJSONParsing:ut.transitional(ut.boolean),forcedJSONParsing:ut.transitional(ut.boolean),clarifyTimeoutError:ut.transitional(ut.boolean)},!1),void 0!==i&&st.assertOptions(i,{encode:ut.function,serialize:ut.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),(r=a&&V.merge(a.common,a[t.method]))&&V.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete a[e]})),t.headers=Be.concat(r,a);var o=[],s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var u,c=[];this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));var l,f=0;if(!s){var d=[tt.bind(this),void 0];for(d.unshift.apply(d,o),d.push.apply(d,c),l=d.length,u=Promise.resolve(t);f<l;)u=u.then(d[f++],d[f++]);return u}l=o.length;var h=t;for(f=0;f<l;){var p=o[f++],v=o[f++];try{h=p(h)}catch(e){v.call(this,e);break}}try{u=tt.call(this,h)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}},{key:"getUri",value:function(e){return oe(Ge((e=nt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),t}();V.forEach(["delete","get","head","options"],(function(e){ct.prototype[e]=function(t,r){return this.request(nt(r||{},{method:e,url:t,data:(r||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(nt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ct.prototype[e]=t(),ct.prototype[e+"Form"]=t(!0)}));var lt=ct,ft=(H=i("8MBJY"),z=i("a2hTj"),function(){function t(r){if(e(H)(this,t),"function"!=typeof r)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var i=this;this.promise.then((function(e){if(i._listeners){for(var t=i._listeners.length;t-- >0;)i._listeners[t](e);i._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){i.subscribe(e),t=e})).then(e);return r.cancel=function(){i.unsubscribe(t)},r},r((function(e,t,r){i.reason||(i.reason=new We(e,t,r),n(i.reason))}))}return e(z)(t,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var e;return{token:new t((function(t){e=t})),cancel:e}}}]),t}());var dt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dt).forEach((function(t){var r=e(ke)(t,2),n=r[0],i=r[1];dt[i]=n}));var ht=dt;var pt=function e(t){var r=new lt(t),n=l(lt.prototype.request,r);return V.extend(n,lt.prototype,r,{allOwnKeys:!0}),V.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(nt(t,r))},n}(be);pt.Axios=lt,pt.CanceledError=We,pt.CancelToken=ft,pt.isCancel=He,pt.VERSION=it,pt.toFormData=ee,pt.AxiosError=K,pt.Cancel=pt.CanceledError,pt.all=function(e){return Promise.all(e)},pt.spread=function(e){return function(t){return e.apply(null,t)}},pt.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},pt.mergeConfig=nt,pt.AxiosHeaders=Be,pt.formToJSON=function(e){return me(V.isHTMLForm(e)?new FormData(e):e)},pt.HttpStatusCode=ht,pt.default=pt;var vt=pt,mt=(vt.Axios,vt.AxiosError,vt.CanceledError,vt.isCancel,vt.CancelToken,vt.VERSION,vt.all,vt.Cancel,vt.isAxiosError,vt.spread,vt.toFormData,vt.AxiosHeaders,vt.HttpStatusCode,vt.formToJSON,vt.mergeConfig,"6e156bccb057248f1bcc2a7ceca32487"),yt=vt.create({baseURL:"https://api.themoviedb.org/3/"});function gt(e){return bt.apply(this,arguments)}function bt(){return(bt=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt("trending/movie/day?api_key=".concat(mt,"&page=").concat(r,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kt(e){return wt.apply(this,arguments)}function wt(){return(wt=e(a)(e(s).mark((function t(r){var n,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.keyword,i=r.page,e.next=3,yt("search/movie?api_key=".concat(mt,"&page=").concat(i,"&query=").concat(n,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _t(e){return xt.apply(this,arguments)}function xt(){return(xt=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt("movie/".concat(r,"?api_key=").concat(mt,"&append_to_response=videos&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Et(){return It.apply(this,arguments)}function It(){return(It=e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt("genre/movie/list?api_key=".concat(mt,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Tt(){return(Tt=e(a)(e(s).mark((function t(){var r,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Et();case 3:r=e.sent,n=r.genres,localStorage.setItem("genres",JSON.stringify(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function St(e){var t=JSON.parse(localStorage.getItem("genres"));t.find((function(e){return"Science Fiction"===e.name})).name="Sci-Fi";var r=e.map((function(e){return t.find((function(t){return t.id===e})).name}));return r.length>3&&(r=r.slice(0,2)).push("Other"),r.join(", ")}function Ot(e){return e.map((function(e){var t=e.id,r=e.poster_path,n=e.title,i=e.genre_ids,a=e.release_date,o=void 0===a?"":a,s=e.vote_average,u=e.vote_count,c=new Date(o).getFullYear()||"",l=0!==i.length?St(i):"",f=r?'<img class="gallery__poster" src="https://image.tmdb.org/t/p/w500'.concat(r,'" loading="lazy" />'):"",d=i.length&&c?" | ":"",h=l||c?'<span class="gallery__movie-info">'.concat(l).concat(d).concat(c,"</span>"):"",p=u?'<span class="gallery__movie-rating">'.concat(s.toFixed(1),"</span>"):"";return'<li class="gallery__item">\n                <a class="gallery__link" href="'.concat(t,'" title="').concat(n,"\">\n                    <div class='gallery__event-wrapper'>\n                        <div class='gallery__poster-wrapper'>").concat(f,'</div>\n                        <div class="gallery__description">\n                            <p class="gallery__movie-title">').concat(n,'</p>\n                            <p class="gallery__movie-meta">\n                              ').concat(h,"\n                              ").concat(p,"\n                            </p>\n                            \n                        </div>\n                    </div>\n                </a>\n             </li>   \n            ")})).join("")}!function(){Tt.apply(this,arguments)}();H=i("8MBJY");var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.default=function(e,t){var r=At.default(e,t,"get");return Ct.default(e,r)};var At=Nt(i("1UHsN")),Ct=Nt(i("ffZzF"));function Nt(e){return e&&e.__esModule?e:{default:e}}var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.default=function(e,t,r){Dt.default(e,t),t.set(e,r)};var Lt,Dt=(Lt=i("5k7tO"))&&Lt.__esModule?Lt:{default:Lt};var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.default=function(e,t,r){var n=jt.default(e,t,"set");return Ut.default(e,n,r),r};var jt=Ft(i("1UHsN")),Ut=Ft(i("jdVyQ"));function Ft(e){return e&&e.__esModule?e:{default:e}}z=i("a2hTj");var Bt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap,zt=new(function(){"use strict";function t(r,n){var i=this;e(H)(this,t),e(Pt)(this,Bt,{writable:!0,value:void 0}),e(Pt)(this,Vt,{writable:!0,value:void 0}),e(Pt)(this,Ht,{writable:!0,value:void 0}),e(Mt)(this,Ht,r),e(Mt)(this,Vt,1),e(Mt)(this,Bt,100),this.container=n,this.container.addEventListener("click",(function(t){var r=t.target.dataset.button,n=!t.target.classList.contains("unactive");if(r&&n)switch(r){case"left":e(Rt)(i,Ht).call(i,e(Rt)(i,Vt)-1);break;case"right":e(Rt)(i,Ht).call(i,e(Rt)(i,Vt)+1);break;case"back":e(Rt)(i,Ht).call(i,e(Rt)(i,Vt)-3);break;case"front":e(Rt)(i,Ht).call(i,e(Rt)(i,Vt)+3);break;default:e(Rt)(i,Ht).call(i,Number(r))}})),this.render()}return e(z)(t,[{key:"totalPages",set:function(t){e(Mt)(this,Bt,t),this.render()}},{key:"currentPage",set:function(t){e(Mt)(this,Vt,t),this.render()}},{key:"callback",set:function(t){e(Mt)(this,Ht,t)}},{key:"render",value:function(){var t="";if(e(Rt)(this,Vt)<6){for(var r=[],n=1;n<=7;n+=1){var i=n===e(Rt)(this,Vt)?this.active(e(Rt)(this,Vt)):this.number(n);r.push(i)}t="".concat(this.arrow("left",e(Rt)(this,Vt)>1)," ").concat(r.join("")," ").concat(this.dots("front")," ").concat(this.lastnumber(e(Rt)(this,Bt))," ").concat(this.arrow("right",!0))}else if(e(Rt)(this,Vt)>e(Rt)(this,Bt)-6){for(var a=[],o=e(Rt)(this,Bt)-6;o<=e(Rt)(this,Bt);o+=1){var s=o===e(Rt)(this,Vt)?this.active(e(Rt)(this,Vt)):this.number(o);a.push(s)}t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back"),"  ").concat(a.join("")," ").concat(this.arrow("right",e(Rt)(this,Vt)<e(Rt)(this,Bt)))}else{var u="".concat(this.number(e(Rt)(this,Vt)-2)," ").concat(this.number(e(Rt)(this,Vt)-1)," ").concat(this.active(e(Rt)(this,Vt))," ").concat(this.number(e(Rt)(this,Vt)+1)," ").concat(this.number(e(Rt)(this,Vt)+2));t="".concat(this.arrow("left",!0)," ").concat(this.lastnumber(1)," ").concat(this.dots("back")," ").concat(u," ").concat(this.dots("front")," ").concat(this.lastnumber(e(Rt)(this,Bt))," ").concat(this.arrow("right",!0))}this.container.innerHTML=t}},{key:"arrow",value:function(e,t){return'<div class="pagination-button arrow-'.concat(e," ").concat(t?"":"unactive",'" data-button="').concat(e,'"></div>')}},{key:"dots",value:function(e){return'<div class="pagination-numbers dots" data-button="'.concat(e,'">...</div>')}},{key:"number",value:function(e){return'<div class="pagination-numbers" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"lastnumber",value:function(e){return'<div class="pagination-numbers last" data-button="'.concat(e,'">').concat(e,"</div>")}},{key:"active",value:function(e){return'<div class="pagination-button current" data-button="'.concat(e,'">').concat(e,"</div>")}}]),t}())((function(e){}),document.querySelector(".pagination")),Wt=document.querySelector(".gallery");function qt(){return Jt.apply(this,arguments)}function Jt(){return Jt=e(a)(e(s).mark((function t(){var r,n,i,a=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,e.next=4,gt(r);case 4:n=e.sent,i=Ot(n.results),Wt.innerHTML=i,Wt.scrollIntoView(),zt.currentPage=n.page,zt.totalPages=n.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[1,12]])}))),Jt.apply(this,arguments)}function Kt(e){return Gt.apply(this,arguments)}function Gt(){return(Gt=e(a)(e(s).mark((function t(r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("A"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,_t(r.target.getAttribute("href"));case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:case"end":return e.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}zt.callback=qt,qt();var Yt,Xt=document.querySelector(".search-form"),$t=document.querySelector(".search-result"),Qt=document.querySelector(".gallery"),Zt="",er=function(e){tr(Zt,e)},tr=(Yt=e(a)(e(s).mark((function t(r,n){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,kt({keyword:r,page:n});case 3:(null==(a=e.sent)||null===(i=a.results)||void 0===i?void 0:i.length)?(o=Ot(a.results),$t.textContent="",Qt.innerHTML=o,Qt.scrollIntoView(),zt.callback=er,zt.currentPage=a.page,zt.totalPages=a.total_pages):($t.textContent="Search result not successful. Enter the correct movie name and try again.",rr());case 5:case"end":return e.stop()}}),t)}))),function(e,t){return Yt.apply(this,arguments)});Xt.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["search-film"].value.trim();t?tr(Zt=t,1):($t.textContent="Movie name must not be empty. Please, enter movie name to search.",rr())}));var rr=function(){setTimeout((function(){$t.textContent=""}),3e3)},nr=document.querySelector(".js-modal");var ir,ar,or=i("k9iCC"),sr=document.querySelector(".gallery"),ur=document.querySelector(".js-modal");function cr(e){"Escape"===e.code&&lr()}function lr(){ir.removeEventListener("click",lr),ar.removeEventListener("click",lr),null==ur||ur.removeEventListener("keydown",cr),null==ur||ur.removeEventListener("click",lr),ur.innerHTML=""}function fr(e){e.target===e.currentTarget&&lr()}sr.addEventListener("click",(function(e){e.preventDefault(),Kt(e).then((function(e){var t,r,n,i,a,o,s,u,c,l,f,d,h,p,v;r=(t=e).id,n=t.poster_path,i=t.title,a=t.vote_average,o=t.vote_count,s=t.popularity,u=t.original_title,c=t.genres,l=t.video,f=t.overview,d=l?'<button type="button" class="button film__button--trailer">\n      Watch trailer\n    </button>':"",h=c.map((function(e){return e.name})).join(", "),p=0!==c.length?'<tr>\n        <td class="film__item">Genre</td>\n        <td class="film__details">'.concat(h,"</td>\n      </tr>"):"",v='\n  <div class="modal__backdrop">\n  <div class="modal">\n    <button type="button" class="button__close">\n      <svg width="30" height="30">\n        <use href="./images/icon-close.svg#close"></use>\n      </svg>\n    </button>\n    <div class="modal__wrapper" data-id="'.concat(r,'">\n      <div class="film__image">\n        <img\n          class="image"\n          src="https://image.tmdb.org/t/p/w500').concat(n,'"\n          loading="lazy"\n          alt="').concat(i,' poster"\n        />\n      </div>\n      <div class="film__info">\n        <h2 class="film__title upper">').concat(i,'</h2>\n        <table>\n          <thead>\n            <tr>\n              <td class="film__item">Vote / Votes</td>\n              <td class="film__details">\n                <span class="film__rating">').concat(a,' </span> /\n                <span class="film__votes-number">').concat(o,' </span>\n              </td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class="film__item">Popularity</td>\n              <td class="film__details">').concat(s,'</td>\n            </tr>\n            <tr>\n              <td class="film__item">Original Title</td>\n              <td class="film__details upper">').concat(u,"</td>\n            </tr>\n            ").concat(p,"\n          </tbody>\n        </table>\n        ").concat(d,'\n        <div>\n          <h3 class="film__about--title upper">About</h3>\n          <p class="film__about--text">').concat(f,'</p>\n        </div>\n        <div class="film__button--wrapper">\n          <ul class="btn-list js-btn-add-list">\n            <li class="btn-list__item">\n              <button\n                type="button"\n                class="button film__button upper"\n                data-addto="watched"\n              >\n                Add to watched\n              </button>\n            </li>\n            <li class="btn-list__item">\n              <button\n                type="button"\n                class="button film__button upper"\n                data-addto="queue"\n              >\n                Add to queue\n              </button>\n            </li>\n            <li><button type="button" class="button film__button upper">\n  try to watch trailer\n</button></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n      '),nr.innerHTML=v,(0,or.setLocalStorage)(e),ir=document.querySelector(".button__close"),ar=document.querySelector(".modal__backdrop"),document.addEventListener("keydown",cr),ir.addEventListener("click",lr),ar.addEventListener("click",fr)})).catch((function(e){console.log(e.message)}))}));H=i("8MBJY"),z=i("a2hTj");var dr=i("hKHmD"),hr=(H=i("8MBJY"),z=i("a2hTj"),i("ds8z5")),pr=(H=i("8MBJY"),z=i("a2hTj"),i("eYQtU")),vr={};Object.defineProperty(vr,"__esModule",{value:!0}),vr.default=function(e){return wr(e)};var mr=kr(i("ge8co")),yr=kr(i("cZGw3")),gr=kr(i("fVNic")),br=kr(i("gD1JV"));function kr(e){return e&&e.__esModule?e:{default:e}}function wr(e){var t="function"==typeof Map?new Map:void 0;return wr=function(e){if(null===e||!yr.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return mr.default(e,arguments,gr.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),br.default(r,e)},wr(e)}var _r,xr,Er,Ir=i("2MbLg"),Tr=_r={};function Sr(){throw new Error("setTimeout has not been defined")}function Or(){throw new Error("clearTimeout has not been defined")}function Rr(e){if(xr===setTimeout)return setTimeout(e,0);if((xr===Sr||!xr)&&setTimeout)return xr=setTimeout,setTimeout(e,0);try{return xr(e,0)}catch(t){try{return xr.call(null,e,0)}catch(t){return xr.call(this,e,0)}}}!function(){try{xr="function"==typeof setTimeout?setTimeout:Sr}catch(e){xr=Sr}try{Er="function"==typeof clearTimeout?clearTimeout:Or}catch(e){Er=Or}}();var Ar,Cr=[],Nr=!1,Pr=-1;function Lr(){Nr&&Ar&&(Nr=!1,Ar.length?Cr=Ar.concat(Cr):Pr=-1,Cr.length&&Dr())}function Dr(){if(!Nr){var e=Rr(Lr);Nr=!0;for(var t=Cr.length;t;){for(Ar=Cr,Cr=[];++Pr<t;)Ar&&Ar[Pr].run();Pr=-1,t=Cr.length}Ar=null,Nr=!1,function(e){if(Er===clearTimeout)return clearTimeout(e);if((Er===Or||!Er)&&clearTimeout)return Er=clearTimeout,clearTimeout(e);try{Er(e)}catch(t){try{return Er.call(null,e)}catch(t){return Er.call(this,e)}}}(e)}}function Mr(e,t){this.fun=e,this.array=t}function jr(){}Tr.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];Cr.push(new Mr(e,t)),1!==Cr.length||Nr||Rr(Dr)},Mr.prototype.run=function(){this.fun.apply(null,this.array)},Tr.title="browser",Tr.browser=!0,Tr.env={},Tr.argv=[],Tr.version="",Tr.versions={},Tr.on=jr,Tr.addListener=jr,Tr.once=jr,Tr.off=jr,Tr.removeListener=jr,Tr.removeAllListeners=jr,Tr.emit=jr,Tr.prependListener=jr,Tr.prependOnceListener=jr,Tr.listeners=function(e){return[]},Tr.binding=function(e){throw new Error("process.binding is not supported")},Tr.cwd=function(){return"/"},Tr.chdir=function(e){throw new Error("process.chdir is not supported")},Tr.umask=function(){return 0};
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
var Ur=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},Fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ur(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Br=function(e){return function(e){var t=Ur(e);return Fr.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Vr=function(e){try{return Fr.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var Hr=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},zr=function(){try{return Hr()||function(){if(void 0!==_r&&void 0!==_r.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&Vr(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Wr=function(e){var t,r;return null===(r=null===(t=zr())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},qr=function(){var e;return null===(e=zr())||void 0===e?void 0:e.config},Jr=function(e){var t;return null===(t=zr())||void 0===t?void 0:t["_".concat(e)]},Kr=function(){"use strict";function t(){var r=this;e(H)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(z)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
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
function Gr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Yr(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
var Xr=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t,i,a){var o;return e(H)(this,n),(o=r.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(hr)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(hr)(o),$r.prototype.create),o}return n}(e(vr)(Error)),$r=function(){"use strict";function t(r,n,i){e(H)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(z)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Qr(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Xr(a,u,i);return c}}]),t}();function Qr(e,t){return e.replace(Zr,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Zr=/\{\$([^}]+)}/g;
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
 */function en(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tn(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(rn(l)&&rn(f)){if(!tn(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function rn(e){return null!==e&&"object"==typeof e}
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
function nn(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(ke)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function an(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(ke)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function on(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
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
 */var sn=function(){"use strict";function t(r,n){var i=this;e(H)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(z)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=un),void 0===n.error&&(n.error=un),void 0===n.complete&&(n.complete=un);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function un(){}
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
function cn(e){return e&&e._delegate?e._delegate:e}var ln=function(){"use strict";function t(r,n,i){e(H)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(z)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),fn="[DEFAULT]",dn=function(){"use strict";function t(r,n){e(H)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(z)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Kr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:fn})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(ke)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(Te)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(Te)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(ke)(c.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&h.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===fn?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn;return this.component?this.component.multipleInstances?e:fn:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var hn,pn,vn=function(){"use strict";function t(r){e(H)(this,t),this.name=r,this.providers=new Map}return e(z)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new dn(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),mn=(H=i("8MBJY"),z=i("a2hTj"),dr=i("hKHmD"),[]);(pn=hn||(hn={}))[pn.DEBUG=0]="DEBUG",pn[pn.VERBOSE=1]="VERBOSE",pn[pn.INFO=2]="INFO",pn[pn.WARN=3]="WARN",pn[pn.ERROR=4]="ERROR",pn[pn.SILENT=5]="SILENT";var yn,gn={debug:hn.DEBUG,verbose:hn.VERBOSE,info:hn.INFO,warn:hn.WARN,error:hn.ERROR,silent:hn.SILENT},bn=hn.INFO,kn=(yn={},e(dr)(yn,hn.DEBUG,"log"),e(dr)(yn,hn.VERBOSE,"log"),e(dr)(yn,hn.INFO,"info"),e(dr)(yn,hn.WARN,"warn"),e(dr)(yn,hn.ERROR,"error"),yn),wn=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=kn[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(Te)(i)))}},_n=function(){"use strict";function t(r){e(H)(this,t),this.name=r,this._logLevel=bn,this._logHandler=wn,this._userLogHandler=null,mn.push(this)}return e(z)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in hn))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?gn[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,hn.DEBUG].concat(e(Te)(r))),this._logHandler.apply(this,[this,hn.DEBUG].concat(e(Te)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,hn.VERBOSE].concat(e(Te)(r))),this._logHandler.apply(this,[this,hn.VERBOSE].concat(e(Te)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,hn.INFO].concat(e(Te)(r))),this._logHandler.apply(this,[this,hn.INFO].concat(e(Te)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,hn.WARN].concat(e(Te)(r))),this._logHandler.apply(this,[this,hn.WARN].concat(e(Te)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,hn.ERROR].concat(e(Te)(r))),this._logHandler.apply(this,[this,hn.ERROR].concat(e(Te)(r)))}}]),t}();var xn={};Object.defineProperty(xn,"__esModule",{value:!0}),xn.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){En.default(e,t,r[t])}))}return e};var En=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var In,Tn;var Sn=new WeakMap,On=new WeakMap,Rn=new WeakMap,An=new WeakMap,Cn=new WeakMap;var Nn={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return On.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Rn.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Dn(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Pn(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Tn||(Tn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(Mn(this),r),Dn(Sn.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Dn(t.apply(Mn(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[Mn(this),r].concat(e(Te)(i)));return Rn.set(s,r.sort?r.sort():[r]),Dn(s)}}function Ln(e){return"function"==typeof e?Pn(e):(e instanceof IDBTransaction&&function(e){if(!On.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));On.set(e,t)}}(e),t=e,(In||(In=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Nn):e);var t}function Dn(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Dn(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Sn.set(e,t)})).catch((function(){})),Cn.set(r,t),r;var t,r;if(An.has(e))return An.get(e);var n=Ln(e);return n!==e&&(An.set(e,n),Cn.set(n,e)),n}var Mn=function(e){return Cn.get(e)};function jn(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=Dn(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Dn(s.result),e.oldVersion,e.newVersion,Dn(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Un=["get","getKey","getAll","getAllKeys","count"],Fn=["put","add","delete","clear"],Bn=new Map;function Vn(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(Bn.get(r))return Bn.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,o=Fn.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(o||Un.includes(n))){var u=function(){var t=e(a)(e(s).mark((function t(r){var a,u,c,l,f,d,h=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=h.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=h[c];return f=this.transaction(r,o?"readwrite":"readonly"),d=f.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[n].apply(l,e(Te)(u)),o&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return Bn.set(r,u),u}}}Nn=function(t){return e(xn)({},t,{get:function(e,r,n){return Vn(e,r)||t.get(e,r,n)},has:function(e,r){return!!Vn(e,r)||t.has(e,r)}})}(Nn);
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
var Hn=function(){"use strict";function t(r){e(H)(this,t),this.container=r}return e(z)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var zn,Wn,qn="@firebase/app",Jn="0.9.1",Kn=new _n("@firebase/app"),Gn="[DEFAULT]",Yn=(zn={},e(dr)(zn,qn,"fire-core"),e(dr)(zn,"@firebase/app-compat","fire-core-compat"),e(dr)(zn,"@firebase/analytics","fire-analytics"),e(dr)(zn,"@firebase/analytics-compat","fire-analytics-compat"),e(dr)(zn,"@firebase/app-check","fire-app-check"),e(dr)(zn,"@firebase/app-check-compat","fire-app-check-compat"),e(dr)(zn,"@firebase/auth","fire-auth"),e(dr)(zn,"@firebase/auth-compat","fire-auth-compat"),e(dr)(zn,"@firebase/database","fire-rtdb"),e(dr)(zn,"@firebase/database-compat","fire-rtdb-compat"),e(dr)(zn,"@firebase/functions","fire-fn"),e(dr)(zn,"@firebase/functions-compat","fire-fn-compat"),e(dr)(zn,"@firebase/installations","fire-iid"),e(dr)(zn,"@firebase/installations-compat","fire-iid-compat"),e(dr)(zn,"@firebase/messaging","fire-fcm"),e(dr)(zn,"@firebase/messaging-compat","fire-fcm-compat"),e(dr)(zn,"@firebase/performance","fire-perf"),e(dr)(zn,"@firebase/performance-compat","fire-perf-compat"),e(dr)(zn,"@firebase/remote-config","fire-rc"),e(dr)(zn,"@firebase/remote-config-compat","fire-rc-compat"),e(dr)(zn,"@firebase/storage","fire-gcs"),e(dr)(zn,"@firebase/storage-compat","fire-gcs-compat"),e(dr)(zn,"@firebase/firestore","fire-fst"),e(dr)(zn,"@firebase/firestore-compat","fire-fst-compat"),e(dr)(zn,"fire-js","fire-js"),e(dr)(zn,"firebase","fire-js-all"),zn),Xn=new Map,$n=new Map;function Qn(e,t){try{e.container.addComponent(t)}catch(r){Kn.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Zn(e){var t=e.name;if($n.has(t))return Kn.debug("There were multiple attempts to register component ".concat(t,".")),!1;$n.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=Xn.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Qn(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function ei(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
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
var ti=(Wn={},e(dr)(Wn,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(dr)(Wn,"bad-app-name","Illegal App name: '{$appName}"),e(dr)(Wn,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(dr)(Wn,"app-deleted","Firebase App named '{$appName}' already deleted"),e(dr)(Wn,"no-options","Need to provide options, when not being deployed to hosting via source."),e(dr)(Wn,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(dr)(Wn,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(dr)(Wn,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(dr)(Wn,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(dr)(Wn,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(dr)(Wn,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Wn),ri=new $r("app","Firebase",ti),ni=function(){"use strict";function t(r,n,i){var a=this;e(H)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ln("app",(function(){return a}),"PUBLIC"))}return e(z)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ri.create("app-deleted",{appName:this._name})}}]),t}(),ii="9.16.0";function ai(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:Gn,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ri.create("bad-app-name",{appName:String(a)});if(r||(r=qr()),!r)throw ri.create("no-options");var o=Xn.get(a);if(o){if(tn(r,o.options)&&tn(i,o.config))return o;throw ri.create("duplicate-app",{appName:a})}var s=new vn(a),u=!0,c=!1,l=void 0;try{for(var f,d=$n.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new ni(r,i,s);return Xn.set(a,p),p}function oi(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gn,t=Xn.get(e);if(!t&&e===Gn)return ai();if(!t)throw ri.create("no-app",{appName:e});return t}function si(e,t,r){var n,i=null!==(n=Yn[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Kn.warn(s.join(" "))}Zn(new ln("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var ui="firebase-heartbeat-store",ci=null;function li(){return ci||(ci=jn("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ui)}}).catch((function(e){throw ri.create("idb-open",{originalErrorMessage:e.message})}))),ci}function fi(e){return di.apply(this,arguments)}function di(){return(di=e(a)(e(s).mark((function t(r){var n,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,li();case 3:return n=e.sent,e.abrupt("return",n.transaction(ui).objectStore(ui).get(vi(r)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Xr?Kn.warn(e.t0.message):(i=ri.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Kn.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function hi(e,t){return pi.apply(this,arguments)}function pi(){return(pi=e(a)(e(s).mark((function t(r,n){var i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,li();case 3:return i=e.sent,a=i.transaction(ui,"readwrite"),o=a.objectStore(ui),e.next=8,o.put(n,vi(r));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Xr?Kn.warn(e.t0.message):(u=ri.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Kn.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function vi(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var mi=function(){"use strict";function t(r){var n=this;e(H)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new ki(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(z)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=yi(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n,i,a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=yi(),i=gi(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=Br(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function yi(){return(new Date).toISOString().substring(0,10)}function gi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),wi(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),wi(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var bi,ki=function(){"use strict";function t(r){e(H)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(z)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Yr()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,fi(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",hi(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",hi(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(Te)(a.heartbeats).concat(e(Te)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function wi(e){return Br(JSON.stringify({version:2,heartbeats:e})).length}
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
 */bi="",Zn(new ln("platform-logger",(function(e){return new Hn(e)}),"PRIVATE")),Zn(new ln("heartbeat",(function(e){return new mi(e)}),"PRIVATE")),si(qn,Jn,bi),si(qn,Jn,"esm2017"),si("fire-js","");
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
si("firebase","9.16.0","app");hr=i("ds8z5"),H=i("8MBJY"),z=i("a2hTj"),dr=i("hKHmD");var _i={};Object.defineProperty(_i,"__esModule",{value:!0}),_i.default=function(e,t,r){return Ei(e,t,r)};var xi=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Ei(e,t,r){return(Ei="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=xi.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var Ii=i("fVNic");pr=i("eYQtU"),Ir=i("2MbLg");function Ti(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Si(){return e(dr)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Oi=Si,Ri=new $r("auth","Firebase",Si()),Ai=new _n("@firebase/auth");function Ci(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;Ai.logLevel<=hn.ERROR&&(a=Ai).error.apply(a,["Auth (".concat(ii,"): ").concat(t)].concat(e(Te)(n)))}
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
 */function Ni(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw Mi.apply(void 0,[t].concat(e(Te)(n)))}function Pi(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Mi.apply(void 0,[t].concat(e(Te)(n)))}function Li(t,r,n){var i=Object.assign(Object.assign({},Oi()),e(dr)({},r,n));return new $r("auth","Firebase",i).create(r,{appName:t.name})}function Di(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&Ni(e,"argument-error"),Li(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Mi(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(Te)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(Te)(u)))}return(a=Ri).create.apply(a,[t].concat(e(Te)(n)))}function ji(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw Mi.apply(void 0,[r].concat(e(Te)(i)))}function Ui(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Ci(t),new Error(t)}function Fi(e,t){e||Ui(t)}
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
 */var Bi=new Map;function Vi(e){Fi(e instanceof Function,"Expected a class definition");var t=Bi.get(e);return t?(Fi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bi.set(e,t),t)}
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
 */function Hi(e,t){var r=ei(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(tn(r.getOptions(),null!=t?t:{}))return n;Ni(n,"already-initialized")}return r.initialize({options:t})}
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
function zi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Wi(){return"http:"===qi()||"https:"===qi()}function qi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ji(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Wi()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var Ki=function(){"use strict";function t(r,n){e(H)(this,t),this.shortDelay=r,this.longDelay=n,Fi(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gr())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(z)(t,[{key:"get",value:function(){return Ji()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function Gi(e,t){Fi(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
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
 */var Yi,Xi=function(){"use strict";function t(){e(H)(this,t)}return e(z)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),$i=(Yi={},e(dr)(Yi,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(dr)(Yi,"MISSING_CUSTOM_TOKEN","internal-error"),e(dr)(Yi,"INVALID_IDENTIFIER","invalid-email"),e(dr)(Yi,"MISSING_CONTINUE_URI","internal-error"),e(dr)(Yi,"INVALID_PASSWORD","wrong-password"),e(dr)(Yi,"MISSING_PASSWORD","internal-error"),e(dr)(Yi,"EMAIL_EXISTS","email-already-in-use"),e(dr)(Yi,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(dr)(Yi,"INVALID_IDP_RESPONSE","invalid-credential"),e(dr)(Yi,"INVALID_PENDING_TOKEN","invalid-credential"),e(dr)(Yi,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(dr)(Yi,"MISSING_REQ_TYPE","internal-error"),e(dr)(Yi,"EMAIL_NOT_FOUND","user-not-found"),e(dr)(Yi,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(dr)(Yi,"EXPIRED_OOB_CODE","expired-action-code"),e(dr)(Yi,"INVALID_OOB_CODE","invalid-action-code"),e(dr)(Yi,"MISSING_OOB_CODE","internal-error"),e(dr)(Yi,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(dr)(Yi,"INVALID_ID_TOKEN","invalid-user-token"),e(dr)(Yi,"TOKEN_EXPIRED","user-token-expired"),e(dr)(Yi,"USER_NOT_FOUND","user-token-expired"),e(dr)(Yi,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(dr)(Yi,"INVALID_CODE","invalid-verification-code"),e(dr)(Yi,"INVALID_SESSION_INFO","invalid-verification-id"),e(dr)(Yi,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(dr)(Yi,"MISSING_SESSION_INFO","missing-verification-id"),e(dr)(Yi,"SESSION_EXPIRED","code-expired"),e(dr)(Yi,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(dr)(Yi,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(dr)(Yi,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(dr)(Yi,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(dr)(Yi,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(dr)(Yi,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(dr)(Yi,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(dr)(Yi,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(dr)(Yi,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(dr)(Yi,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(dr)(Yi,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Yi),Qi=new Ki(3e4,6e4);function Zi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ea(e,t,r,n){return ta.apply(this,arguments)}function ta(){return ta=e(a)(e(s).mark((function t(r,n,i,o){var u,c=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",ra(r,u,e(a)(e(s).mark((function t(){var a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},o&&("GET"===n?u=o:a={body:JSON.stringify(o)}),c=nn(Object.assign({key:r.config.apiKey},u)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Xi.fetch()(oa(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),ta.apply(this,arguments)}function ra(e,t,r){return na.apply(this,arguments)}function na(){return(na=e(a)(e(s).mark((function t(r,n,i){var a,o,u,c,l,f,d,h,p;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},$i),n),t.prev=2,o=new sa(r),t.next=6,Promise.race([i(),o.promise]);case 6:return u=t.sent,o.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw ua(r,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(ke)(l.split(" : "),2),d=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw ua(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw ua(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw ua(r,"user-disabled",c);case 29:if(p=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw Li(r,p,h);case 34:Ni(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Xr)){t.next=41;break}throw t.t0;case 41:Ni(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function ia(e,t,r,n){return aa.apply(this,arguments)}function aa(){return aa=e(a)(e(s).mark((function t(r,n,i,a){var o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,ea(r,n,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&Ni(r,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),aa.apply(this,arguments)}function oa(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Gi(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var sa=function(){"use strict";function t(r){var n=this;e(H)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(Pi(r.auth,"network-request-failed"))}),Qi.get())}))}return e(z)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function ua(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=Pi(e,t,n);return i.customData._tokenResponse=r,i}function ca(e,t){return la.apply(this,arguments)}function la(){return(la=
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
e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ea(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fa(e,t){return da.apply(this,arguments)}function da(){return(da=e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ea(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function ha(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function pa(){return pa=e(a)(e(s).mark((function t(r){var n,i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=cn(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,ji((o=ma(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ha(va(o.auth_time)),issuedAtTime:ha(va(o.iat)),expirationTime:ha(va(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),pa.apply(this,arguments)}function va(e){return 1e3*Number(e)}function ma(t){var r=e(ke)(t.split("."),3),n=r[0],i=r[1],a=r[2];if(void 0===n||void 0===i||void 0===a)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{var o=Vr(i);return o?JSON.parse(o):(Ci("Failed to decode base64 JWT payload"),null)}catch(e){return Ci("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ya(e,t){return ga.apply(this,arguments)}function ga(){return ga=
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
e(a)(e(s).mark((function t(r,n){var i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Xr&&ba(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),ga.apply(this,arguments)}function ba(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var ka=function(){"use strict";function t(r){e(H)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(z)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}}]),t}(),wa=function(){"use strict";function t(r,n){e(H)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(z)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function _a(e){return xa.apply(this,arguments)}function xa(){return(xa=
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
e(a)(e(s).mark((function t(r){var n,i,a,o,u,c,l,f,d,h,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,ya(r,fa(i,{idToken:a}));case 7:ji(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],r._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?Ta(u.providerUserInfo):[],l=Ia(r.providerData,c),f=r.isAnonymous,d=!(r.email&&u.passwordHash||(null==l?void 0:l.length)),h=!!f&&d,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new wa(u.createdAt,u.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ea(){return(Ea=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=cn(r),e.next=3,_a(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ia(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(Te)(n).concat(e(Te)(r))}function Ta(e){return e.map((function(e){var t=e.providerId,r=Ti(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Sa(e,t){return Oa.apply(this,arguments)}function Oa(){return(Oa=
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
e(a)(e(s).mark((function t(r,n){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ra(r,{},e(a)(e(s).mark((function t(){var i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=nn({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,u=a.apiKey,c=oa(r,o,"/v1/token","key=".concat(u)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Xi.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ra=function(){"use strict";function t(){e(H)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(z)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){ji(e.idToken,"internal-error"),ji(void 0!==e.idToken,"internal-error"),ji(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,ji(r=ma(t),"internal-error"),ji(void 0!==r.exp,"internal-error"),ji(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ji(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(a)(e(s).mark((function i(){var a,o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sa(t,r);case 2:a=e.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Ui("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(ji("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(ji("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(ji("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function Aa(e,t){ji("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ca=function(){"use strict";function t(r){e(H)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=Ti(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ka(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(Te)(o.providerData):[],this.metadata=new wa(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(z)(t,[{key:"getIdToken",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ya(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(ji(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return pa.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Ea.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(ji(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){ji(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,_a(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,ya(t,ca(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=r.createdAt)&&void 0!==c?c:void 0,g=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,w=r.isAnonymous,_=r.providerData,x=r.stsTokenManager;ji(b&&x,e,"internal-error");var E=Ra.fromJSON(this.name,x);ji("string"==typeof b,e,"internal-error"),Aa(f,e.name),Aa(d,e.name),ji("boolean"==typeof k,e,"internal-error"),ji("boolean"==typeof w,e,"internal-error"),Aa(h,e.name),Aa(p,e.name),Aa(v,e.name),Aa(m,e.name),Aa(y,e.name),Aa(g,e.name);var I=new t({uid:b,auth:e,email:d,emailVerified:k,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:E,createdAt:y,lastLoginAt:g});return _&&Array.isArray(_)&&(I.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(s).mark((function a(){var o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Ra).updateFromServerResponse(n),u=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),e.next=5,_a(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Na=function(){"use strict";function t(){e(H)(this,t),this.type="NONE",this.storage={}}return e(z)(t,[{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Na.type="NONE";var Pa=Na;
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
 */function La(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Da=function(){"use strict";function t(r,n,i){e(H)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=La(this.userKey,o.apiKey,s),this.fullPersistenceKey=La("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(z)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?Ca._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(s).mark((function o(){var u,c,l,f,d,h,p,v,m,y,g,b,k;return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.length){o.next=2;break}return o.abrupt("return",new t(Vi(Pa),r,i));case 2:return o.next=4,Promise.all(n.map(function(){var t=e(a)(e(s).mark((function t(r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=o.sent.filter((function(e){return e})),c=u[0]||Vi(Pa),l=La(i,r.config.apiKey,r.name),f=null,d=!0,h=!1,p=void 0,o.prev=9,v=n[Symbol.iterator]();case 11:if(d=(m=v.next()).done){o.next=29;break}return y=m.value,o.prev=13,o.next=16,y._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return b=Ca._fromJSON(r,g),y!==c&&(f=b),c=y,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:d=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),h=!0,p=o.t1;case 35:o.prev=35,o.prev=36,d||null==v.return||v.return();case 38:if(o.prev=38,!h){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new t(c,r,i));case 46:if(c=k[0],!f){o.next=50;break}return o.next=50,c._set(l,f.toJSON());case 50:return o.next=52,Promise.all(n.map(function(){var t=e(a)(e(s).mark((function t(r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,r,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Ma(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ba(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ja(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ha(t))return"Blackberry";if(za(t))return"Webos";if(Ua(t))return"Safari";if((t.includes("chrome/")||Fa(t))&&!t.includes("edge/"))return"Chrome";if(Va(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function ja(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/firefox\//i.test(e)}function Ua(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/crios\//i.test(e)}function Ba(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/iemobile/i.test(e)}function Va(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/android/i.test(e)}function Ha(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/blackberry/i.test(e)}function za(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/webos/i.test(e)}function Wa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qa(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return Wa(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ja(){return((e=Gr()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Ka(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gr();return Wa(e)||Va(e)||za(e)||Ha(e)||/windows phone/i.test(e)||Ba(e)}
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
function Ga(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ma(Gr());break;case"Worker":t="".concat(Ma(Gr()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ii,"/").concat(n)}
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
 */var Ya=function(){"use strict";function t(r){e(H)(this,t),this.auth=r,this.queue=[]}return e(z)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a,o,u,c,l,f,d,h,p,v,m,y;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,u=void 0,e.prev=5,c=r.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!o){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),d=!0,h=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){y=m.value;try{y()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),h=!0,p=e.t2;case 43:e.prev=43,e.prev=44,d||null==v.return||v.return();case 46:if(e.prev=46,!h){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Xa=function(){"use strict";function t(r,n,i){e(H)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new Ya(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ri,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(z)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=Vi(r));var n=this;return this._initializationPromise=this.queue(e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Da.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a,o,u,c,l,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,u=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,u=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return ji(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_a(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 9:return e.abrupt("return",r.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?cn(t):null)&&ji(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&ji(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(Vi(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new $r("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(a)(e(s).mark((function i(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return ji(i=t&&Vi(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,Da.create(r,[Vi(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,o;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(o=r.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ji(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return ji(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ga(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n,i,a;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(dr)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
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
 */function $a(e){return cn(e)}var Qa=function(){"use strict";function t(r){var n,i,a=this;e(H)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new sn((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(z)(t,[{key:"next",get:function(){return ji(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Za(t,r,n){var i=$a(t);ji(i._canInitEmulator,i,"emulator-config-failed"),ji(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=eo(r),s=function(t){var r=eo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:to(i.substr(o.length+1))}}var s=e(ke)(i.split(":"),2);return{host:s[0],port:to(s[1])}}(r),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function eo(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function to(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var ro=function(){"use strict";function t(r,n){e(H)(this,t),this.providerId=r,this.signInMethod=n}return e(z)(t,[{key:"toJSON",value:function(){return Ui("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Ui("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Ui("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Ui("not implemented")}}]),t}();function no(e,t){return io.apply(this,arguments)}function io(){return(io=e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ea(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ao(e,t){return oo.apply(this,arguments)}function oo(){return(oo=
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
e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithPassword",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function so(e,t){return uo.apply(this,arguments)}function uo(){return(uo=
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
e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function co(e,t){return lo.apply(this,arguments)}function lo(){return(lo=e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var fo=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(H)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(z)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ao(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",so(t,{email:r._email,oobCode:r._password}));case 5:Ni(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",no(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",co(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:Ni(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(ro);function ho(e,t){return po.apply(this,arguments)}function po(){return(po=
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
e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithIdp",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var vo=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){var t;return e(H)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(z)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ho(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,ho(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nn(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ni("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=Ti(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(ro);function mo(e,t){return yo.apply(this,arguments)}function yo(){return(yo=
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
e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ea(r,"POST","/v1/accounts:sendVerificationCode",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function go(){return(go=e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithPhoneNumber",Zi(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bo(){return(bo=e(a)(e(s).mark((function t(r,n){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ia(r,"POST","/v1/accounts:signInWithPhoneNumber",Zi(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ua(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ko=e(dr)({},"USER_NOT_FOUND","user-not-found");function wo(){return(wo=e(a)(e(s).mark((function t(r,n){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",ia(r,"POST","/v1/accounts:signInWithPhoneNumber",Zi(r,i),ko));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var _o=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t){var i;return e(H)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(z)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return go.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return bo.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return wo.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(ro);
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
 */var xo=function(){"use strict";function t(r){var n,i,a,o,s,u;e(H)(this,t);var c=an(on(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);ji(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(z)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=an(on(e)).link,r=t?an(on(t)).deep_link_id:null,n=an(on(e)).deep_link_id;return(n?an(on(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
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
var Eo=function(){"use strict";function t(){e(H)(this,t),this.providerId=t.PROVIDER_ID}return e(z)(t,null,[{key:"credential",value:function(e,t){return fo._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=xo.parseLink(t);return ji(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();Eo.PROVIDER_ID="password",Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Io=function(){"use strict";function t(r){e(H)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(z)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),To=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){var t;return e(H)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(z)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(Te)(this.scopes)}}]),n}(Io),So=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){return e(H)(this,n),r.call(this,"facebook.com")}return e(z)(n,null,[{key:"credential",value:function(e){return vo._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(To);
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
 */So.FACEBOOK_SIGN_IN_METHOD="facebook.com",So.PROVIDER_ID="facebook.com";
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
var Oo=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){var t;return e(H)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(z)(n,null,[{key:"credential",value:function(e,t){return vo._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(To);Oo.GOOGLE_SIGN_IN_METHOD="google.com",Oo.PROVIDER_ID="google.com";
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
var Ro=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){return e(H)(this,n),r.call(this,"github.com")}return e(z)(n,null,[{key:"credential",value:function(e){return vo._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(To);Ro.GITHUB_SIGN_IN_METHOD="github.com",Ro.PROVIDER_ID="github.com";
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
var Ao=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){return e(H)(this,n),r.call(this,"twitter.com")}return e(z)(n,null,[{key:"credential",value:function(e,t){return vo._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(To);Ao.TWITTER_SIGN_IN_METHOD="twitter.com",Ao.PROVIDER_ID="twitter.com";
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
var Co=function(){"use strict";function t(r){e(H)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(z)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(s).mark((function a(){var u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ca._fromIdTokenResponse(r,i,o);case 2:return u=e.sent,c=No(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(r,n,i){return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=No(i),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function No(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Po=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t,i,a,o){var s,u;return e(H)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(hr)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(z)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Xr);function Lo(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Po._fromErrorAndOperation(e,r,t,n);throw r}))}
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
 */function Do(e,t){return Mo.apply(this,arguments)}function Mo(){return Mo=e(a)(e(s).mark((function t(r,n){var i,a,o=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=ya,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Co._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),Mo.apply(this,arguments)}function jo(e,t){return Uo.apply(this,arguments)}function Uo(){return Uo=
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
e(a)(e(s).mark((function t(r,n){var i,a,o,u,c,l,f=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=r.auth,o="reauthenticate",e.prev=3,e.next=6,ya(r,Lo(a,o,n,r),i);case 6:return ji((u=e.sent).idToken,a,"internal-error"),ji(c=ma(u.idToken),a,"internal-error"),l=c.sub,ji(r.uid===l,a,"user-mismatch"),e.abrupt("return",Co._forOperation(r,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ni(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Uo.apply(this,arguments)}function Fo(e,t){return Bo.apply(this,arguments)}function Bo(){return Bo=
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
e(a)(e(s).mark((function t(r,n){var i,a,o,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Lo(r,a,n);case 4:return o=e.sent,e.next=7,Co._fromIdTokenResponse(r,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),Bo.apply(this,arguments)}function Vo(e,t,r,n){return cn(e).onIdTokenChanged(t,r,n)}function Ho(e,t,r){return cn(e).beforeAuthStateChanged(t,r)}
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
function zo(e,t){return ea(e,"POST","/v2/accounts/mfaEnrollment:start",Zi(e,t))}new WeakMap;var Wo="__sak",qo=function(){"use strict";function t(r,n){e(H)(this,t),this.storageRetriever=r,this.type=n}return e(z)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Jo=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){var t,i;return e(H)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Ua(i=Gr())||Wa(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Ka(),t._shouldAllowMigration=!0,t}return e(z)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);Ja()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(_i)(e(Ii)(n.prototype),"_set",i).call(o,t,r);case 2:o.localCache[t]=JSON.stringify(r);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(a)(e(s).mark((function a(){var o;return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(_i)(e(Ii)(n.prototype),"_get",r).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(_i)(e(Ii)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(qo);Jo.type="LOCAL";var Ko=Jo,Go=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(){return e(H)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(z)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(qo);
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
 */Go.type="SESSION";var Yo=Go;
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
 */function Xo(t){return Promise.all(t.map(function(){var t=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
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
 */var $o=function(){"use strict";function t(r){e(H)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(z)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,o,u,c,l,f,d,h;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=(i=t).data,u=o.eventId,c=o.eventType,l=o.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var t=e(a)(e(s).mark((function t(r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Xo(d);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
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
function Qo(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
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
 */$o.receivers=[];var Zo=function(){"use strict";function t(r){e(H)(this,t),this.target=r,this.handlers=new Set}return e(z)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(s).mark((function a(){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var s=Qo("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===s)switch(r.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(r.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:s,data:r},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function es(){return window}
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
function ts(){return void 0!==es().WorkerGlobalScope&&"function"==typeof es().importScripts}function rs(){return ns.apply(this,arguments)}function ns(){return(ns=e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var is="firebaseLocalStorageDb",as="firebaseLocalStorage",os="fbase_key",ss=function(){"use strict";function t(r){e(H)(this,t),this.request=r}return e(z)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function us(e,t){return e.transaction([as],t?"readwrite":"readonly").objectStore(as)}function cs(){var e=indexedDB.deleteDatabase(is);return new ss(e).toPromise()}function ls(){var t=indexedDB.open(is,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(as,{keyPath:os})}catch(e){n(e)}})),t.addEventListener("success",e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(as)){e.next=12;break}return i.close(),e.next=5,cs();case 5:return e.t0=r,e.next=8,ls();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function fs(e,t,r){return ds.apply(this,arguments)}function ds(){return(ds=e(a)(e(s).mark((function t(r,n,i){var a,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=us(r,!0).put((a={},e(dr)(a,os,n),e(dr)(a,"value",i),a)),t.abrupt("return",new ss(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function hs(e,t){return ps.apply(this,arguments)}function ps(){return(ps=e(a)(e(s).mark((function t(r,n){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=us(r,!1).get(n),e.next=3,new ss(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vs(e,t){var r=us(e,!0).delete(t);return new ss(r).toPromise()}var ms=function(){"use strict";function t(){e(H)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(z)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,ls();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ts()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=$o._getInstance(ts()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(a)(e(s).mark((function r(n,i){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(s).mark((function t(r,n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n,i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,rs();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Zo(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ls();case 5:return r=e.sent,e.next=8,fs(r,Wo,"1");case 8:return e.next=10,vs(r,Wo);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return fs(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return hs(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return vs(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n,i,a,o,u,c,l,f,d,h,p,v,m,y,g,b,k;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=us(e,!1).getAll();return new ss(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,e.prev=10,l=n[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,h=d.fbase_key,p=d.value,a.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(b=g.next()).done);v=!0)k=b.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ms.type="LOCAL";var ys=ms;
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
 */function gs(e,t){return ea(e,"POST","/v2/accounts/mfaSignIn:start",Zi(e,t))}function bs(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Pi("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function ks(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
ks("rcb"),new Ki(3e4,6e4);var ws="recaptcha";
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
 */function _s(e,t,r){return xs.apply(this,arguments)}function xs(){return(xs=e(a)(e(s).mark((function t(r,n,i){var a,o,u,c,l,f,d,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,ji("string"==typeof o,r,"argument-error"),ji(i.type===ws,r,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return ji("enroll"===c.type,r,"internal-error"),e.next=15,zo(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return ji("signin"===c.type,r,"internal-error"),ji(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,gs(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,mo(r,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Es=function(){"use strict";function t(r){e(H)(this,t),this.providerId=t.PROVIDER_ID,this.auth=$a(r)}return e(z)(t,[{key:"verifyPhoneNumber",value:function(e,t){return _s(this.auth,e,cn(t))}}],[{key:"credential",value:function(e,t){return _o._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?_o._fromTokenResponse(r,n):null}}]),t}();
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
function Is(e,t){return t?Vi(t):(ji(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Es.PROVIDER_ID="phone",Es.PHONE_SIGN_IN_METHOD="phone";var Ts=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t){var i;return e(H)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(z)(n,[{key:"_getIdTokenResponse",value:function(e){return ho(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ho(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ho(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(ro);function Ss(e){return Fo(e.auth,new Ts(e),e.bypassAuthState)}function Os(e){var t=e.auth,r=e.user;return ji(r,t,"internal-error"),jo(r,new Ts(e),e.bypassAuthState)}function Rs(e){return As.apply(this,arguments)}function As(){return(As=e(a)(e(s).mark((function t(r){var n,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,ji(i=r.user,n,"internal-error"),e.abrupt("return",Do(i,new Ts(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Cs=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(H)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(z)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var r=e(a)(e(s).mark((function r(n,i){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),r,null,[[1,10]])})));return function(e,t){return r.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a,o,u,c,l,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return r.reject(c),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ss;case"linkViaPopup":case"linkViaRedirect":return Rs;case"reauthViaPopup":case"reauthViaRedirect":return Os;default:Ni(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Ns=new Ki(2e3,1e4);
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
 */function Ps(e,t,r){return Ls.apply(this,arguments)}function Ls(){return(Ls=e(a)(e(s).mark((function t(r,n,i){var a,o,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=$a(r),Di(r,n,Io),o=Is(a,i),u=new Ds(a,"signInViaPopup",n,o),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Ds=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t,i,a,o,s){var u;return e(H)(this,n),(u=r.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(hr)(u),u}return e(z)(n,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return ji(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Fi(1===t.filter.length,"Popup operations only handle one event"),n=Qo(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Pi(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Pi(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Pi(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Ns.get())};t()}}]),n}(Cs);Ds.currentPopupAction=null;
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
var Ms=new Map,js=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(H)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(z)(n,[{key:"execute",value:function(){var t=this,r=this;return e(a)(e(s).mark((function i(){var a,o;return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Ms.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Us(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(_i)(e(Ii)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Ms.set(r.auth._key(),a);case 21:return r.bypassAuthState||Ms.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,o=function(){return e(_i)(e(Ii)(n.prototype),"onAuthEvent",r)};return e(a)(e(s).mark((function r(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(Cs);function Us(e,t){return Fs.apply(this,arguments)}function Fs(){return(Fs=e(a)(e(s).mark((function t(r,n){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Hs(n),a=Vs(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bs(e,t){Ms.set(e._key(),t)}function Vs(e){return Vi(e._redirectPersistence)}function Hs(e){return La("pendingRedirect",e.config.apiKey,e.name)}
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
 */function zs(e,t){return Ws.apply(this,arguments)}function Ws(){return Ws=e(a)(e(s).mark((function t(r,n){var i,a,o,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=$a(r),o=Is(a,n),u=new js(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Ws.apply(this,arguments)}
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
var qs=function(){"use strict";function t(r){e(H)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(z)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ks(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Ks(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(Pi(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Js(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Js(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Js(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ks(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Gs(e){return Ys.apply(this,arguments)}function Ys(){return Ys=
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
e(a)(e(s).mark((function t(r){var n,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",ea(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),Ys.apply(this,arguments)}
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
 */var Xs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$s=/^https?/;function Qs(){return(Qs=e(a)(e(s).mark((function t(r){var n,i,a,o,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Gs(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Zs(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ni(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Zs(e){var t=zi(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!$s.test(n))return!1;if(Xs.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var eu=new Ki(3e4,6e4);function tu(){var t=es().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(Te)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var ru=null;function nu(e){return ru=ru||function(e){return new Promise((function(t,r){var n,i,a;function o(){tu(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){tu(),r(Pi(e,"network-request-failed"))},timeout:eu.get()})}if(null===(i=null===(n=es().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=es().gapi)||void 0===a?void 0:a.load)){var s=ks("iframefcb");return es()[s]=function(){gapi.load?o():r(Pi(e,"network-request-failed"))},bs("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw ru=null,e}))}(e),ru}
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
 */var iu=new Ki(5e3,15e3),au={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ou=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function su(e){var t=e.config;ji(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Gi(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:ii},i=ou.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(nn(n).slice(1))}function uu(e){return cu.apply(this,arguments)}function cu(){return cu=e(a)(e(s).mark((function t(r){var n,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nu(r);case 2:return n=t.sent,ji(i=es().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:su(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:au,dontclear:!0},(function(t){return new Promise(function(){var n=e(a)(e(s).mark((function n(i,a){var o,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){es().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Pi(r,"network-request-failed"),u=es().setTimeout((function(){a(o)}),iu.get()),t.ping(c).then(c,(function(){a(o)}));case 7:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),cu.apply(this,arguments)}
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
 */var lu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fu="_blank",du="http://localhost",hu=function(){"use strict";function t(r){e(H)(this,t),this.window=r,this.associatedEvent=null}return e(z)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function pu(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},lu),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Gr().toLowerCase();n&&(u=Fa(l)?fu:n),ja(l)&&(r=r||du,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(ke)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(qa(l)&&"_self"!==u)return vu(r||"",u),new hu(null);var d=window.open(r||"",u,f);ji(d,t,"popup-blocked");try{d.focus()}catch(e){}return new hu(d)}function vu(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
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
 */var mu="__/auth/handler",yu="emulator/auth/handler";function gu(t,r,n,i,a,o){ji(t.config.authDomain,t,"auth-domain-config-required"),ji(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ii,eventId:a};if(r instanceof Io){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",en(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=e(ke)(f.value,2),p=h[0],v=h[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof To){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var y,g,b=s,k=!0,w=!1,_=void 0;try{for(var x,E=Object.keys(b)[Symbol.iterator]();!(k=(x=E.next()).done);k=!0){var I=x.value;void 0===b[I]&&delete b[I]}}catch(e){w=!0,_=e}finally{try{k||null==E.return||E.return()}finally{if(w)throw _}}return"".concat((y=t,g=y.config,g.emulator?Gi(g,yu):"https://".concat(g.authDomain,"/").concat(mu)),"?").concat(nn(b).slice(1))}
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
var bu="webStorageSupport",ku=function(){"use strict";function t(){e(H)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yo,this._completeRedirectFn=zs,this._overrideRedirectResult=Bs}return e(z)(t,[{key:"_openPopup",value:function(t,r,n,i){var o=this;return e(a)(e(s).mark((function a(){var u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Fi(null===(u=o.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=gu(t,r,n,zi(),i),e.abrupt("return",pu(t,c,Qo()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=gu(t,r,n,zi(),i),es().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(Fi(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,uu(t);case 2:return i=e.sent,a=new qs(t),i.register("authEvent",(function(e){return ji(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(bu,{type:bu},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),Ni(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Qs.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Ka()||Ua()||Wa()}}]),t}(),wu=ku,_u=function(t){"use strict";e(pr)(n,t);var r=e(Ir)(n);function n(t){var i;return e(H)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(z)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return ea(e,"POST","/v2/accounts/mfaEnrollment:finalize",Zi(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ea(e,"POST","/v2/accounts/mfaSignIn:finalize",Zi(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(H)(this,t),this.factorId=r}return e(z)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ui("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(H)(this,t)}return e(z)(t,null,[{key:"assertion",value:function(e){return _u._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var xu="@firebase/auth",Eu="0.21.1",Iu=function(){"use strict";function t(r){e(H)(this,t),this.auth=r,this.internalListeners=new Map}return e(z)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(a)(e(s).mark((function n(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){ji(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Tu,Su=Jr("authIdTokenMaxAge")||300,Ou=null,Ru=function(t){return function(){var r=e(a)(e(s).mark((function r(n){var i,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Su)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,Ou!==o){e.next=12;break}return e.abrupt("return");case 12:return Ou=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};Tu="Browser",Zn(new ln("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){ji(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),ji(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Tu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ga(Tu)},i=new Xa(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Vi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Zn(new ln("auth-internal",(function(e){var t=$a(e.getProvider("auth").getImmediate());return new Iu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),si(xu,Eu,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Tu)),si(xu,Eu,"esm2017");ai({apiKey:"AIzaSyASYZ8NOzf1HV_qXySt_PAWGOCo9aSEqfI",authDomain:"filmoteka-tp.firebaseapp.com",projectId:"filmoteka-tp",storageBucket:"filmoteka-tp.appspot.com",messagingSenderId:"973907143233",appId:"1:973907143233:web:fc416ff81e72bf4792b4c0"});var Au=new Oo,Cu=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oi(),t=ei(e,"auth");if(t.isInitialized())return t.getImmediate();var r=Hi(e,{popupRedirectResolver:wu,persistence:[ys,Ko,Yo]}),n=Jr("authTokenSyncURL");if(n){var i=Ru(n);Ho(r,i,(function(){return i(r.currentUser)})),Vo(r,(function(e){return i(e)}))}var a=Wr("auth");return a&&Za(r,"http://".concat(a)),r}();document.getElementById("sing_in").addEventListener("click",(function(e){Ps(Cu,Au).then((function(e){Oo.credentialFromResult(e).accessToken;var t=e.user;localStorage.setItem("user",t.displayName)})).catch((function(e){e.code,e.message,e.customData.email,Oo.credentialFromError(e)}))})),i("k6LBo"),i("k9iCC");var Nu=document.querySelector('[data-action="footerModalOpen"]'),Pu=document.querySelector("#footerBackdrop"),Lu=document.querySelector('[data-action="footerModalClose"]');function Du(){Pu.classList.add("is-hidden")}function Mu(e){"Escape"===e.code&&Du()}Nu.addEventListener("click",(function(){window.addEventListener("keydown",Mu),Pu.classList.remove("is-hidden")})),Pu.addEventListener("keydown",Mu),Lu.addEventListener("click",Du),Pu.addEventListener("click",Du);var ju,Uu,Fu={};function Bu(e){return Bu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(e)}ju="undefined"!=typeof self?self:void 0,Uu=function(e){e.addBackToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backgroundColor,r=void 0===t?"#000":t,n=e.cornerOffset,i=void 0===n?20:n,a=e.diameter,o=void 0===a?56:a,s=e.ease,u=void 0===s?B:s,c=e.id,l=void 0===c?"back-to-top":c,f=e.innerHTML,d=void 0===f?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':f,h=e.onClickScrollTo,p=void 0===h?0:h,v=e.scrollContainer,m=void 0===v?document.body:v,y=e.scrollDuration,g=void 0===y?100:y,b=e.showWhenScrollTopIs,k=void 0===b?1:b,w=e.size,_=void 0===w?o:w,x=e.textColor,E=void 0===x?"#fff":x,I=e.zIndex,T=void 0===I?1:I,S=m===document.body,O=S&&document.documentElement;M();var R=D(),A=!0,C=S?window:m;function N(){U()>=k?P():L()}function P(){A&&(R.className="",A=!1)}function L(){A||(R.className="hidden",A=!0)}function D(){var e=document.createElement("div");return e.id=l,e.className="hidden",e.innerHTML=d,e.addEventListener("click",(function(e){e.preventDefault(),j()})),document.body.appendChild(e),e}function M(){var e=Math.round(.43*_),t=Math.round(.29*_),n="#"+l+"{background:"+r+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+E+";cursor:pointer;display:block;height:"+_+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+_+"px;z-index:"+T+"}#"+l+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+l+".hidden{bottom:-"+_+"px;opacity:0}",a=document.createElement("style");a.appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",a)}function j(){var e="function"==typeof p?p():p,t=window,r=t.performance,n=t.requestAnimationFrame;if(g<=0||void 0===r||void 0===n)return F(e);var i=r.now(),a=U(),o=a-e;n((function e(t){var r=Math.min((t-i)/g,1);F(a-Math.round(u(r)*o)),r<1&&n(e)}))}function U(){return m.scrollTop||O&&document.documentElement.scrollTop||0}function F(e){m.scrollTop=e,O&&(document.documentElement.scrollTop=e)}function B(e){return.5*(1-Math.cos(Math.PI*e))}C.addEventListener("scroll",N),N()}},"function"==typeof define&&define.amd?define(["exports"],Uu):"object"===Bu(Fu)&&"string"!=typeof Fu.nodeName?Uu(Fu):Uu(ju.commonJsStrict={}),(0,Fu.addBackToTop)({backgroundColor:"#ff6b01",diameter:60,scrollDuration:500})}();
//# sourceMappingURL=index.db7c3d4d.js.map
