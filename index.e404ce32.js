function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s.register("ksLB7",(function(t,e){window.onload=function(){document.querySelector("#preloader").classList.add("is-hidden")}})),s.register("iqbjS",(function(e,n){t(e.exports,"getTrending",(function(){return i})),t(e.exports,"getMoviesByKeyword",(function(){return o})),t(e.exports,"getMovieById",(function(){return a})),t(e.exports,"getSimilar",(function(){return u})),t(e.exports,"getGenres",(function(){return c})),t(e.exports,"getMovieBYGenre",(function(){return l}));var r=s("aKTcH");async function i(t,e){return(await(0,r.instance)(`trending/movie/${e}?api_key=${r.KEY}&page=${t}&language=en-US`)).data}async function o({keyword:t,page:e}){return(await(0,r.instance)(`search/movie?api_key=${r.KEY}&page=${e}&query=${t}&language=en-US`)).data}async function a(t){return(await(0,r.instance)(`movie/${t}?api_key=${r.KEY}&append_to_response=videos&language=en-US`)).data}async function u(t,e){return(await(0,r.instance)(`movie/${t}/similar?api_key=${r.KEY}&page=${e}&language=en-US`)).data}async function c(){return(await(0,r.instance)(`genre/movie/list?api_key=${r.KEY}&language=en-US`)).data}async function l(t,e){return(await(0,r.instance)(`discover/movie?api_key=${r.KEY}&with_genres=${t}&page=${e}&language=en-US`)).data}})),s.register("aKTcH",(function(e,n){t(e.exports,"KEY",(function(){return i})),t(e.exports,"instance",(function(){return o})),s("2shzp");var r=s("bRlFp");const i="6e156bccb057248f1bcc2a7ceca32487",o=r.default.create({baseURL:"https://api.themoviedb.org/3/"})})),s.register("2shzp",(function(e,n){t(e.exports,"default",(function(){return s("bRlFp").default}));var r=s("bRlFp");const{Axios:i,AxiosError:o,CanceledError:a,isCancel:u,CancelToken:c,VERSION:l,all:h,Cancel:d,isAxiosError:f,spread:p,toFormData:g,AxiosHeaders:m,HttpStatusCode:y,formToJSON:v,mergeConfig:w}=r.default})),s.register("bRlFp",(function(e,n){t(e.exports,"default",(function(){return E}));var r=s("2bBga"),i=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),u=s("hqlPG"),c=s("4bmvb"),l=s("83xK9"),h=s("2sjhC"),d=s("ksuZT"),f=s("50GW0"),p=s("aewVa"),g=s("121rJ"),m=s("av9gA"),y=s("gNhGc"),v=s("gbTL1"),w=s("jd7iQ");const b=function t(e){const n=new(0,o.default)(e),s=(0,i.default)(o.default.prototype.request,n);return r.default.extend(s,o.default.prototype,n,{allOwnKeys:!0}),r.default.extend(s,n,null,{allOwnKeys:!0}),s.create=function(n){return t((0,a.default)(e,n))},s}(u.default);b.Axios=o.default,b.CanceledError=l.default,b.CancelToken=h.default,b.isCancel=d.default,b.VERSION=f.VERSION,b.toFormData=p.default,b.AxiosError=g.default,b.Cancel=b.CanceledError,b.all=function(t){return Promise.all(t)},b.spread=m.default,b.isAxiosError=y.default,b.mergeConfig=a.default,b.AxiosHeaders=v.default,b.formToJSON=t=>(0,c.default)(r.default.isHTMLForm(t)?new FormData(t):t),b.HttpStatusCode=w.default,b.default=b;var E=b})),s.register("2bBga",(function(n,r){t(n.exports,"default",(function(){return P}));var i=s("djt5d");const{toString:o}=Object.prototype,{getPrototypeOf:a}=Object,u=(c=Object.create(null),t=>{const e=o.call(t);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())});var c;const l=t=>(t=t.toLowerCase(),e=>u(e)===t),h=t=>e=>typeof e===t,{isArray:d}=Array,f=h("undefined");const p=l("ArrayBuffer");const g=h("string"),m=h("function"),y=h("number"),v=t=>null!==t&&"object"==typeof t,w=t=>{if("object"!==u(t))return!1;const e=a(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},b=l("Date"),E=l("File"),T=l("Blob"),_=l("FileList"),I=l("URLSearchParams");function S(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),d(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function C(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,A=t=>!f(t)&&t!==k;const x=(R="undefined"!=typeof Uint8Array&&a(Uint8Array),t=>R&&t instanceof R);var R;const O=l("HTMLFormElement"),N=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),D=l("RegExp"),L=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};S(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)};var P={isArray:d,isArrayBuffer:p,isBuffer:function(t){return null!==t&&!f(t)&&null!==t.constructor&&!f(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||o.call(t)===e||m(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&p(t.buffer),e},isString:g,isNumber:y,isBoolean:t=>!0===t||!1===t,isObject:v,isPlainObject:w,isUndefined:f,isDate:b,isFile:E,isBlob:T,isRegExp:D,isFunction:m,isStream:t=>v(t)&&m(t.pipe),isURLSearchParams:I,isTypedArray:x,isFileList:_,forEach:S,merge:function t(){const{caseless:e}=A(this)&&this||{},n={},r=(r,i)=>{const s=e&&C(n,i)||i;w(n[s])&&w(r)?n[s]=t(n[s],r):w(r)?n[s]=t({},r):d(r)?n[s]=r.slice():n[s]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&S(arguments[t],r);return n},extend:(t,e,n,{allOwnKeys:r}={})=>(S(e,((e,r)=>{n&&m(e)?t[r]=(0,i.default)(e,n):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,s,o;const u={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],r&&!r(o,t,e)||u[o]||(e[o]=t[o],u[o]=!0);t=!1!==n&&a(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:u,kindOfTest:l,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(d(t))return t;let e=t.length;if(!y(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:O,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:L,freezeMethods:t=>{L(t,((e,n)=>{if(m(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];m(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return d(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:C,global:k,isContextDefined:A,toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=d(t)?[]:{};return S(t,((t,e)=>{const s=n(t,r+1);!f(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)}}})),s.register("djt5d",(function(e,n){function r(t,e){return function(){return t.apply(e,arguments)}}t(e.exports,"default",(function(){return r}))})),s.register("6zSb1",(function(e,n){t(e.exports,"default",(function(){return p}));var r=s("2bBga"),i=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),u=s("d0EKm"),c=s("1ZTQa"),l=s("6zj0X"),h=s("gbTL1");const d=l.default.validators;class f{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,u.default)(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:s}=e;let o;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),void 0!==i&&l.default.assertOptions(i,{encode:d.function,serialize:d.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=s&&r.default.merge(s.common,s[e.method]),o&&r.default.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete s[t]})),e.headers=h.default.concat(o,s);const c=[];let f=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(f=f&&t.synchronous,c.unshift(t.fulfilled,t.rejected))}));const p=[];let g;this.interceptors.response.forEach((function(t){p.push(t.fulfilled,t.rejected)}));let m,y=0;if(!f){const t=[a.default.bind(this),void 0];for(t.unshift.apply(t,c),t.push.apply(t,p),m=t.length,g=Promise.resolve(e);y<m;)g=g.then(t[y++],t[y++]);return g}m=c.length;let v=e;for(y=0;y<m;){const t=c[y++],e=c[y++];try{v=t(v)}catch(t){e.call(this,t);break}}try{g=a.default.call(this,v)}catch(t){return Promise.reject(t)}for(y=0,m=p.length;y<m;)g=g.then(p[y++],p[y++]);return g}getUri(t){t=(0,u.default)(this.defaults,t);const e=(0,c.default)(t.baseURL,t.url);return(0,i.default)(e,t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new(0,o.default),response:new(0,o.default)}}}r.default.forEach(["delete","get","head","options"],(function(t){f.prototype[t]=function(e,n){return this.request((0,u.default)(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.default.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request((0,u.default)(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[t]=e(),f.prototype[t+"Form"]=e(!0)}));var p=f})),s.register("2RNjJ",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("hz3Ym");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(t,e,n){if(!e)return t;const s=n&&n.encode||o,a=n&&n.serialize;let u;if(u=a?a(e,n):r.default.isURLSearchParams(e)?e.toString():new(0,i.default)(e,n).toString(s),u){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+u}return t}})),s.register("hz3Ym",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("aewVa");function i(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function o(t,e){this._pairs=[],t&&(0,r.default)(t,this,e)}const a=o.prototype;a.append=function(t,e){this._pairs.push([t,e])},a.toString=function(t){const e=t?function(e){return t.call(this,e,i)}:i;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var u=o})),s.register("aewVa",(function(e,n){t(e.exports,"default",(function(){return d}));var r=s("2bBga"),i=s("121rJ"),o=s("cHBTa"),a=s("ihoyg").Buffer;function u(t){return r.default.isPlainObject(t)||r.default.isArray(t)}function c(t){return r.default.endsWith(t,"[]")?t.slice(0,-2):t}function l(t,e,n){return t?t.concat(e).map((function(t,e){return t=c(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const h=r.default.toFlatObject(r.default,{},null,(function(t){return/^is[A-Z]/.test(t)}));var d=function(t,e,n){if(!r.default.isObject(t))throw new TypeError("target must be an object");e=e||new(o.default||FormData);const s=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!r.default.isUndefined(e[t])}))).metaTokens,d=n.visitor||v,f=n.dots,p=n.indexes,g=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((m=e)&&r.default.isFunction(m.append)&&"FormData"===m[Symbol.toStringTag]&&m[Symbol.iterator]);var m;if(!r.default.isFunction(d))throw new TypeError("visitor must be a function");function y(t){if(null===t)return"";if(r.default.isDate(t))return t.toISOString();if(!g&&r.default.isBlob(t))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(t)||r.default.isTypedArray(t)?g&&"function"==typeof Blob?new Blob([t]):a.from(t):t}function v(t,n,i){let o=t;if(t&&!i&&"object"==typeof t)if(r.default.endsWith(n,"{}"))n=s?n:n.slice(0,-2),t=JSON.stringify(t);else if(r.default.isArray(t)&&function(t){return r.default.isArray(t)&&!t.some(u)}(t)||r.default.isFileList(t)||r.default.endsWith(n,"[]")&&(o=r.default.toArray(t)))return n=c(n),o.forEach((function(t,i){!r.default.isUndefined(t)&&null!==t&&e.append(!0===p?l([n],i,f):null===p?n:n+"[]",y(t))})),!1;return!!u(t)||(e.append(l(i,n,f),y(t)),!1)}const w=[],b=Object.assign(h,{defaultVisitor:v,convertValue:y,isVisitable:u});if(!r.default.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!r.default.isUndefined(n)){if(-1!==w.indexOf(n))throw Error("Circular reference detected in "+i.join("."));w.push(n),r.default.forEach(n,(function(n,s){!0===(!(r.default.isUndefined(n)||null===n)&&d.call(e,n,r.default.isString(s)?s.trim():s,i,b))&&t(n,i?i.concat(s):[s])})),w.pop()}}(t),e}})),s.register("121rJ",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("2bBga");function i(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{a[t]={value:t}})),Object.defineProperties(i,a),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=(t,e,n,s,a,u)=>{const c=Object.create(o);return r.default.toFlatObject(t,c,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),i.call(c,t.message,e,n,s,a),c.cause=t,c.name=t.name,u&&Object.assign(c,u),c};var u=i})),s.register("cHBTa",(function(e,r){t(e.exports,"default",(function(){return i}));var i=n(s("FHeSn"))})),s.register("FHeSn",(function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData})),s.register("ihoyg",(function(e,n){var r,i;t(e.exports,"Buffer",(function(){return r}),(function(t){return r=t})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(t){return i=t}));var o=s("hqZtu"),a=s("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const c=2147483647;function l(t){if(t>c)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return d(t,e,n)}function d(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|v(t,e);let r=l(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(X(t,Uint8Array)){const e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return g(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(X(t,ArrayBuffer)||t&&X(t.buffer,ArrayBuffer))return m(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(X(t,SharedArrayBuffer)||t&&X(t.buffer,SharedArrayBuffer)))return m(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return h.from(r,e,n);const i=function(t){if(h.isBuffer(t)){const e=0|y(t.length),n=l(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?l(0):g(t);if("Buffer"===t.type&&Array.isArray(t.data))return g(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return f(t),l(t<0?0:0|y(t))}function g(t){const e=t.length<0?0:0|y(t.length),n=l(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function m(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,h.prototype),r}function y(t){if(t>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|t}function v(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||X(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(t).length;default:if(i)return r?-1:Q(t).length;e=(""+e).toLowerCase(),i=!0}}function w(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return D(this,e,n);case"utf8":case"utf-8":return x(this,e,n);case"ascii":return O(this,e,n);case"latin1":case"binary":return N(this,e,n);case"base64":return A(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function b(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function E(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=h.from(e,r)),h.isBuffer(e))return 0===e.length?-1:T(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):T(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function T(t,e,n,r,i){let s,o=1,a=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,u/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(t,s)===c(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===u)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+u>a&&(n=a-u),s=n;s>=0;s--){let n=!0;for(let r=0;r<u;r++)if(c(t,s+r)!==c(e,r)){n=!1;break}if(n)return s}return-1}function _(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Z(r))return o;t[n+o]=r}return o}function I(t,e,n,r){return Y(Q(e,t.length-n),t,n,r)}function S(t,e,n,r){return Y(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function C(t,e,n,r){return Y(J(e),t,n,r)}function k(t,e,n,r){return Y(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function A(t,e,n){return 0===e&&n===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(e,n))}function x(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,u;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(u=(31&e)<<6|63&n,u>127&&(s=u));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(u=(15&e)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(s=u));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(s=u))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=R));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,n){return d(t,e,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,n){return function(t,e,n){return f(t),t<=0?l(t):void 0!==e?"string"==typeof n?l(t).fill(e,n):l(t).fill(e):l(t)}(t,e,n)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=h.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(X(e,Uint8Array))i+e.length>r.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)b(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?x(this,0,t):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},u&&(h.prototype[u]=h.prototype.inspect),h.prototype.compare=function(t,e,n,r,i){if(X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),u=this.slice(r,i),c=t.slice(e,n);for(let t=0;t<a;++t)if(u[t]!==c[t]){s=u[t],o=c[t];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},h.prototype.indexOf=function(t,e,n){return E(this,t,e,n,!0)},h.prototype.lastIndexOf=function(t,e,n){return E(this,t,e,n,!1)},h.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return _(this,t,e,n);case"utf8":case"utf-8":return I(this,t,e,n);case"ascii":case"latin1":case"binary":return S(this,t,e,n);case"base64":return C(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function O(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function N(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function D(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=tt[t[r]];return i}function L(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function P(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function M(t,e,n,r,i,s){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function U(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function F(t,e,n,r,i){H(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function j(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function B(t,e,n,r,i){return e=+e,n>>>=0,i||j(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function V(t,e,n,r,i){return e=+e,n>>>=0,i||j(t,0,n,8),a.write(t,e,n,r,52,8),n+8}h.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||P(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||P(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||P(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||P(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=et((function(t){K(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||W(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=et((function(t){K(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||W(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},h.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},h.prototype.readInt8=function(t,e){return t>>>=0,e||P(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||P(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(t,e){t>>>=0,e||P(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=et((function(t){K(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||W(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=et((function(t){K(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||W(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||P(t,4,this.length),a.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||P(t,4,this.length),a.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||P(t,8,this.length),a.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||P(t,8,this.length),a.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){M(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){M(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=et((function(t,e=0){return U(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=et((function(t,e=0){return F(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||M(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=et((function(t,e=0){return U(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=et((function(t,e=0){return F(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,n){return B(this,t,e,!0,n)},h.prototype.writeFloatBE=function(t,e,n){return B(this,t,e,!1,n)},h.prototype.writeDoubleLE=function(t,e,n){return V(this,t,e,!0,n)},h.prototype.writeDoubleBE=function(t,e,n){return V(this,t,e,!1,n)},h.prototype.copy=function(t,e,n,r){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},h.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=h.isBuffer(t)?t:h.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const q={};function $(t,e,n){q[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function z(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function H(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new q.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){K(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||W(e,t.length-(n+1))}(r,i,s)}function K(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function W(t,e,n){if(Math.floor(t)!==t)throw K(t,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=z(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=z(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function Q(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function J(t){return o.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Y(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function X(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function et(t){return"undefined"==typeof BigInt?nt:t}function nt(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(t){return r=t})),t(e.exports,"fromByteArray",(function(){return i}),(function(t){return i=t})),r=function(t){var e,n,r=h(t),i=r[0],s=r[1],u=new a(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),c=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],u[c++]=e>>16&255,u[c++]=e>>8&255,u[c++]=255&e;2===s&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,u[c++]=255&e);1===s&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,u[c++]=e>>8&255,u[c++]=255&e);return u},i=function(t){for(var e,n=t.length,r=n%3,i=[],o=16383,a=0,u=n-r;a<u;a+=o)i.push(d(t,a,a+o>u?u:a+o));1===r?(e=t[n-1],i.push(s[e>>2]+s[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(s[e>>10]+s[e>>4&63]+s[e<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)s[c]=u[c],o[u.charCodeAt(c)]=c;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function d(t,e,n){for(var r,i,o=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(s[(i=r)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(t){return r=t})),t(e.exports,"write",(function(){return i}),(function(t){return i=t})),r=function(t,e,n,r,i){var s,o,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=d,l-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=c}return(f?-1:1)*o*Math.pow(2,s-r)},i=function(t,e,n,r,i,s){var o,a,u,c=8*s-i-1,l=(1<<c)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+h>=1?d/u:d*Math.pow(2,1-h))*u>=2&&(o++,u/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*u-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;t[n+f]=255&o,f+=p,o/=256,c-=8);t[n+f-p]|=128*g}})),s.register("5Dm7L",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");var i=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){r.default.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}}})),s.register("eQ5d8",(function(e,n){t(e.exports,"default",(function(){return h}));var r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),u=s("gbTL1"),c=s("enpjQ");function l(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new(0,a.default)(null,t)}function h(t){l(t),t.headers=u.default.from(t.headers),t.data=r.default.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(t.adapter||o.default.adapter)(t).then((function(e){return l(t),e.data=r.default.call(t,t.transformResponse,e),e.headers=u.default.from(e.headers),e}),(function(e){return(0,i.default)(e)||(l(t),e&&e.response&&(e.response.data=r.default.call(t,t.transformResponse,e.response),e.response.headers=u.default.from(e.response.headers))),Promise.reject(e)}))}})),s.register("bhEpd",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("hqlPG"),o=s("gbTL1");function a(t,e){const n=this||i.default,s=e||n,a=o.default.from(s.headers);let u=s.data;return r.default.forEach(t,(function(t){u=t.call(n,u,a.normalize(),e?e.status:void 0)})),a.normalize(),u}})),s.register("hqlPG",(function(e,n){t(e.exports,"default",(function(){return f}));var r=s("2bBga"),i=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),u=s("5tcKT"),c=s("hdo0R"),l=s("4bmvb");const h={"Content-Type":void 0};const d={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,s=r.default.isObject(t);s&&r.default.isHTMLForm(t)&&(t=new FormData(t));if(r.default.isFormData(t))return i&&i?JSON.stringify((0,l.default)(t)):t;if(r.default.isArrayBuffer(t)||r.default.isBuffer(t)||r.default.isStream(t)||r.default.isFile(t)||r.default.isBlob(t))return t;if(r.default.isArrayBufferView(t))return t.buffer;if(r.default.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(t,this.formSerializer).toString();if((o=r.default.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return s||i?(e.setContentType("application/json",!1),function(t,e,n){if(r.default.isString(t))try{return(e||JSON.parse)(t),r.default.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||d.transitional,n=e&&e.forcedJSONParsing,s="json"===this.responseType;if(t&&r.default.isString(t)&&(n&&!this.responseType||s)){const n=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw i.default.from(t,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(t){d.headers[t]={}})),r.default.forEach(["post","put","patch"],(function(t){d.headers[t]=r.default.merge(h)}));var f=d})),s.register("2wfLM",(function(e,n){t(e.exports,"default",(function(){return r}));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("5tcKT",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("aewVa"),o=s("hdo0R");function a(t,e){return(0,i.default)(t,new o.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return o.default.isNode&&r.default.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}})),s.register("hdo0R",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("9matH"),i=s("eN04z");const o=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var u={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:Blob},isStandardBrowserEnv:o,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}})),s.register("9matH",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),s.register("eN04z",(function(e,n){t(e.exports,"default",(function(){return r}));var r=FormData})),s.register("4bmvb",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");var i=function(t){function e(t,n,i,s){let o=t[s++];const a=Number.isFinite(+o),u=s>=t.length;if(o=!o&&r.default.isArray(i)?i.length:o,u)return r.default.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a;i[o]&&r.default.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],s)&&r.default.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(i[o])),!a}if(r.default.isFormData(t)&&r.default.isFunction(t.entries)){const n={};return r.default.forEachEntry(t,((t,i)=>{e(function(t){return r.default.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null}})),s.register("gbTL1",(function(e,n){t(e.exports,"default",(function(){return f}));var r=s("2bBga"),i=s("9cPEm");const o=Symbol("internals");function a(t){return t&&String(t).trim().toLowerCase()}function u(t){return!1===t||null==t?t:r.default.isArray(t)?t.map(u):String(t)}function c(t,e,n,i){return r.default.isFunction(i)?i.call(this,e,n):r.default.isString(e)?r.default.isString(i)?-1!==e.indexOf(i):r.default.isRegExp(i)?i.test(e):void 0:void 0}let l=Symbol.iterator,h=Symbol.toStringTag;class d{set(t,e,n){const s=this;function o(t,e,n){const i=a(e);if(!i)throw new Error("header name must be a non-empty string");const o=r.default.findKey(s,i);(!o||void 0===s[o]||!0===n||void 0===n&&!1!==s[o])&&(s[o||e]=u(t))}const c=(t,e)=>r.default.forEach(t,((t,n)=>o(t,n,e)));return r.default.isPlainObject(t)||t instanceof this.constructor?c(t,e):r.default.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?c((0,i.default)(t),e):null!=t&&o(e,t,n),this}get(t,e){if(t=a(t)){const n=r.default.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(r.default.isFunction(e))return e.call(this,t,n);if(r.default.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=a(t)){const n=r.default.findKey(this,t);return!(!n||e&&!c(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function s(t){if(t=a(t)){const s=r.default.findKey(n,t);!s||e&&!c(0,n[s],s,e)||(delete n[s],i=!0)}}return r.default.isArray(t)?t.forEach(s):s(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return r.default.forEach(this,((i,s)=>{const o=r.default.findKey(n,s);if(o)return e[o]=u(i),void delete e[s];const a=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(s):String(s).trim();a!==s&&delete e[s],e[a]=u(i),n[a]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return r.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&r.default.isArray(n)?n.join(", "):n)})),e}[l](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[h](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[o]=this[o]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=a(t);e[i]||(!function(t,e){const n=r.default.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[i]=!0)}return r.default.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}d.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),r.default.freezeMethods(d.prototype),r.default.freezeMethods(d);var f=d})),s.register("9cPEm",(function(e,n){t(e.exports,"default",(function(){return i}));const r=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=t=>{const e={};let n,i,s;return t&&t.split("\n").forEach((function(t){s=t.indexOf(":"),n=t.substring(0,s).trim().toLowerCase(),i=t.substring(s+1).trim(),!n||e[n]&&r[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e}})),s.register("ksuZT",(function(e,n){function r(t){return!(!t||!t.__CANCEL__)}t(e.exports,"default",(function(){return r}))})),s.register("83xK9",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("121rJ");function i(t,e,n){r.default.call(this,null==t?"canceled":t,r.default.ERR_CANCELED,e,n),this.name="CanceledError"}s("2bBga").default.inherits(i,r.default,{__CANCEL__:!0});var o=i})),s.register("enpjQ",(function(e,n){t(e.exports,"default",(function(){return c}));var r=s("2bBga"),i=s("1gvAv"),o=s("9VVcb"),a=s("121rJ");const u={http:i.default,xhr:o.default};r.default.forEach(u,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var c={getAdapter:t=>{t=r.default.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let s=0;s<e&&(n=t[s],!(i=r.default.isString(n)?u[n.toLowerCase()]:n));s++);if(!i){if(!1===i)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(r.default.hasOwnProp(u,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!r.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:u}})),s.register("1gvAv",(function(e,n){t(e.exports,"default",(function(){return r}));var r=null})),s.register("9VVcb",(function(e,n){t(e.exports,"default",(function(){return v}));var r=s("2bBga"),i=s("1TQad"),o=s("kTwUV"),a=s("2RNjJ"),u=s("1ZTQa"),c=s("g3yOT"),l=s("2wfLM"),h=s("121rJ"),d=s("83xK9"),f=s("8wMQb"),p=s("hdo0R"),g=s("gbTL1"),m=s("5OiBb");function y(t,e){let n=0;const r=(0,m.default)(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&s<=o?(o-s)/u:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}var v="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let s=t.data;const m=g.default.from(t.headers).normalize(),v=t.responseType;let w;function b(){t.cancelToken&&t.cancelToken.unsubscribe(w),t.signal&&t.signal.removeEventListener("abort",w)}r.default.isFormData(s)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv)&&m.setContentType(!1);let E=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.set("Authorization","Basic "+btoa(e+":"+n))}const T=(0,u.default)(t.baseURL,t.url);function _(){if(!E)return;const r=g.default.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),s={data:v&&"text"!==v&&"json"!==v?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:r,config:t,request:E};(0,i.default)((function(t){e(t),b()}),(function(t){n(t),b()}),s),E=null}if(E.open(t.method.toUpperCase(),(0,a.default)(T,t.params,t.paramsSerializer),!0),E.timeout=t.timeout,"onloadend"in E?E.onloadend=_:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(_)},E.onabort=function(){E&&(n(new(0,h.default)("Request aborted",h.default.ECONNABORTED,t,E)),E=null)},E.onerror=function(){n(new(0,h.default)("Network Error",h.default.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||l.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new(0,h.default)(e,r.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,t,E)),E=null},p.default.isStandardBrowserEnv){const e=(t.withCredentials||(0,c.default)(T))&&t.xsrfCookieName&&o.default.read(t.xsrfCookieName);e&&m.set(t.xsrfHeaderName,e)}void 0===s&&m.setContentType(null),"setRequestHeader"in E&&r.default.forEach(m.toJSON(),(function(t,e){E.setRequestHeader(e,t)})),r.default.isUndefined(t.withCredentials)||(E.withCredentials=!!t.withCredentials),v&&"json"!==v&&(E.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&E.addEventListener("progress",y(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",y(t.onUploadProgress)),(t.cancelToken||t.signal)&&(w=e=>{E&&(n(!e||e.type?new(0,d.default)(null,t,E):e),E.abort(),E=null)},t.cancelToken&&t.cancelToken.subscribe(w),t.signal&&(t.signal.aborted?w():t.signal.addEventListener("abort",w)));const I=(0,f.default)(T);I&&-1===p.default.protocols.indexOf(I)?n(new(0,h.default)("Unsupported protocol "+I+":",h.default.ERR_BAD_REQUEST,t)):E.send(s||null)}))}})),s.register("1TQad",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("121rJ");function i(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}})),s.register("kTwUV",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga"),i=s("hdo0R").default.isStandardBrowserEnv?{write:function(t,e,n,i,s,o){const a=[];a.push(t+"="+encodeURIComponent(e)),r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("iUwU6"),i=s("91vFE");function o(t,e){return t&&!(0,r.default)(e)?(0,i.default)(t,e):e}})),s.register("iUwU6",(function(e,n){function r(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}t(e.exports,"default",(function(){return r}))})),s.register("91vFE",(function(e,n){function r(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}t(e.exports,"default",(function(){return r}))})),s.register("g3yOT",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga"),i=s("hdo0R").default.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=r.default.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0}})),s.register("8wMQb",(function(e,n){function r(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}t(e.exports,"default",(function(){return r}))})),s.register("5OiBb",(function(e,n){t(e.exports,"default",(function(){return r}));var r=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const u=Date.now(),c=r[o];i||(i=u),n[s]=a,r[s]=u;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),u-i<e)return;const d=c&&u-c;return d?Math.round(1e3*h/d):void 0}}})),s.register("d0EKm",(function(e,n){t(e.exports,"default",(function(){return a}));var r=s("2bBga"),i=s("gbTL1");const o=t=>t instanceof i.default?t.toJSON():t;function a(t,e){e=e||{};const n={};function i(t,e,n){return r.default.isPlainObject(t)&&r.default.isPlainObject(e)?r.default.merge.call({caseless:n},t,e):r.default.isPlainObject(e)?r.default.merge({},e):r.default.isArray(e)?e.slice():e}function s(t,e,n){return r.default.isUndefined(e)?r.default.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function a(t,e){if(!r.default.isUndefined(e))return i(void 0,e)}function u(t,e){return r.default.isUndefined(e)?r.default.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function c(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:(t,e)=>s(o(t),o(e),!0)};return r.default.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const o=l[i]||s,a=o(t[i],e[i],i);r.default.isUndefined(a)&&o!==c||(n[i]=a)})),n}})),s.register("6zj0X",(function(e,n){t(e.exports,"default",(function(){return u}));var r=s("50GW0"),i=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const a={};o.transitional=function(t,e,n){function s(t,e){return"[Axios v"+r.VERSION+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,o)=>{if(!1===t)throw new(0,i.default)(s(r," has been removed"+(e?" in "+e:"")),i.default.ERR_DEPRECATED);return e&&!a[r]&&(a[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}};var u={assertOptions:function(t,e,n){if("object"!=typeof t)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const o=r[s],a=e[o];if(a){const e=t[o],n=void 0===e||a(e,o,t);if(!0!==n)throw new(0,i.default)("option "+o+" must be "+n,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,i.default)("Unknown option "+o,i.default.ERR_BAD_OPTION)}},validators:o}})),s.register("50GW0",(function(e,n){t(e.exports,"VERSION",(function(){return r}));const r="1.2.3"})),s.register("2sjhC",(function(e,n){t(e.exports,"default",(function(){return o}));var r=s("83xK9");class i{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new i((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,i,s){n.reason||(n.reason=new(0,r.default)(t,i,s),e(n.reason))}))}}var o=i})),s.register("av9gA",(function(e,n){function r(t){return function(e){return t.apply(null,e)}}t(e.exports,"default",(function(){return r}))})),s.register("gNhGc",(function(e,n){t(e.exports,"default",(function(){return i}));var r=s("2bBga");function i(t){return r.default.isObject(t)&&!0===t.isAxiosError}})),s.register("jd7iQ",(function(e,n){t(e.exports,"default",(function(){return i}));const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach((([t,e])=>{r[e]=t}));var i=r})),s.register("24Yli",(function(t,e){var n=s("iqbjS");!async function(){try{const t=(await(0,n.getGenres)()).genres;localStorage.setItem("genres",JSON.stringify(t))}catch(t){console.log(t)}}()})),s.register("bN4hg",(function(e,r){t(e.exports,"paginator",(function(){return d}));var i=s("jkMrE"),o=s("g6yUq"),a=s("gMe87"),u=new WeakMap,c=new WeakMap,l=new WeakMap;const h=document.querySelector(".pagination"),d=new class{set totalPages(t){n(a)(this,u,t),this.render()}set currentPage(t){n(a)(this,c,t),this.render()}set callback(t){n(a)(this,l,t)}render(){if(this.container.innerHTML="",0===n(i)(this,c))return;let t="";if(n(i)(this,u)<=9){const e=[];for(let t=1;t<=n(i)(this,u);t+=1){const r=t===n(i)(this,c)?this.active(n(i)(this,c)):this.number(t);e.push(r)}t=e.join("")}else if(n(i)(this,c)<6){const e=[];for(let t=1;t<=7;t+=1){const r=t===n(i)(this,c)?this.active(n(i)(this,c)):this.number(t);e.push(r)}t=`${this.arrow("left",n(i)(this,c)>1)} ${e.join("")} ${this.dots("front")} ${this.lastnumber(n(i)(this,u))} ${this.arrow("right",!0)}`}else if(n(i)(this,c)>n(i)(this,u)-6){const e=[];for(let t=n(i)(this,u)-6;t<=n(i)(this,u);t+=1){const r=t===n(i)(this,c)?this.active(n(i)(this,c)):this.number(t);e.push(r)}t=`${this.arrow("left",!0)} ${this.lastnumber(1)} ${this.dots("back")}  ${e.join("")} ${this.arrow("right",n(i)(this,c)<n(i)(this,u))}`}else{const e=`${this.number(n(i)(this,c)-2)} ${this.number(n(i)(this,c)-1)} ${this.active(n(i)(this,c))} ${this.number(n(i)(this,c)+1)} ${this.number(n(i)(this,c)+2)}`;t=`${this.arrow("left",!0)} ${this.lastnumber(1)} ${this.dots("back")} ${e} ${this.dots("front")} ${this.lastnumber(n(i)(this,u))} ${this.arrow("right",!0)}`}this.container.innerHTML=t}arrow(t,e){return`<div class="pagination-button arrow-${t} ${e?"":"unactive"}" data-button="${t}"></div>`}dots(t){return`<div class="pagination-numbers dots" data-button="${t}">...</div>`}number(t){return`<div class="pagination-numbers" data-button="${t}">${t}</div>`}lastnumber(t){return`<div class="pagination-numbers last" data-button="${t}">${t}</div>`}active(t){return`<div class="pagination-button current" data-button="${t}">${t}</div>`}constructor(t,e){n(o)(this,u,{writable:!0,value:void 0}),n(o)(this,c,{writable:!0,value:void 0}),n(o)(this,l,{writable:!0,value:void 0}),n(a)(this,l,t),n(a)(this,c,0),n(a)(this,u,100),this.container=e,this.container.addEventListener("click",(t=>{const e=t.target.dataset.button,r=!t.target.classList.contains("unactive");if(e&&r)switch(e){case"left":n(i)(this,l).call(this,n(i)(this,c)-1);break;case"right":n(i)(this,l).call(this,n(i)(this,c)+1);break;case"back":n(i)(this,l).call(this,n(i)(this,c)-3);break;case"front":n(i)(this,l).call(this,n(i)(this,c)+3);break;default:n(i)(this,l).call(this,Number(e))}})),this.render()}}((t=>{}),h)})),s.register("jkMrE",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){var i=n.default(t,e,"get");return r.default(t,i)};var n=i(s("fExtF")),r=i(s("iaRLo"));function i(t){return t&&t.__esModule?t:{default:t}}})),s.register("fExtF",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}})),s.register("iaRLo",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),s.register("g6yUq",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){r.default(t,e),e.set(t,n)};var n,r=(n=s("7K24o"))&&n.__esModule?n:{default:n}})),s.register("7K24o",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("gMe87",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,i){var s=n.default(t,e,"set");return r.default(t,s,i),i};var n=i(s("fExtF")),r=i(s("3LGG3"));function i(t){return t&&t.__esModule?t:{default:t}}})),s.register("3LGG3",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}})),s.register("i9P75",(function(e,n){t(e.exports,"makeGallery",(function(){return i})),t(e.exports,"clearGallery",(function(){return o}));var r=s("alJz6");const i=t=>{const e=(0,r.createGalleryMarkup)(t);r.gallery.innerHTML=e,window.scrollTo(0,0)},o=()=>{r.gallery.innerHTML=""}})),s.register("alJz6",(function(e,n){t(e.exports,"gallery",(function(){return i})),t(e.exports,"createGalleryMarkup",(function(){return o}));var r=s("gVZmY");const i=document.querySelector(".gallery__wrapper");function o(t){return`<ul class="gallery">${t.map((t=>{const{id:e,poster_path:n,title:i,genre_ids:s,release_date:o="",vote_average:a,vote_count:u}=t,c=new Date(o).getFullYear()||"",l=0!==s.length?(0,r.getGenresById)(s):"",h=n?`<img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${n}" loading="lazy" alt="${i}"/>`:"",d=s.length&&c?" | ":"";return`\n      <li class="gallery__item">\n                <a class="gallery__link" href="${e}" title="${i}">\n                    <div class='gallery__event-wrapper'>\n                        <div class='gallery__poster-wrapper'>${h}</div>\n                        <div class="gallery__description">\n                          <p class="gallery__movie-title">${i}</p>\n                            <p class="gallery__movie-meta">\n                              ${l||c?`<span class="gallery__movie-info">${l}${d}${c}</span>`:""}\n                              ${u?`<span class="gallery__movie-rating">${a.toFixed(1)}</span>`:""}\n                            </p>\n                        </div>\n                    </div>\n                </a>\n             </li>`})).join("")}</ul>`}})),s.register("gVZmY",(function(e,n){function r(t){const e=JSON.parse(localStorage.getItem("genres"));e.find((t=>"Science Fiction"===t.name)).name="Sci-Fi";let n=t.map((t=>{const{id:n,name:r}=e.find((e=>e.id===t));return`<span class="genre-link" data-id="${n}">${r}</span>`}));return n.length>3&&(n=n.slice(0,2),n.push("Other")),n.join(", ")}t(e.exports,"getGenresById",(function(){return r}))})),s.register("kUoQ5",(function(e,n){t(e.exports,"LoadSpinner",(function(){return r}));class r{getRefs(t){const e={};return e.button=document.querySelector(t),e.icon=e.button.querySelector(".search-form__icon"),e.spinner=e.button.querySelector(".spinner"),e.loader=document.querySelector(".modal__loader"),e}disable(){this.refs.button.disabled=!1,this.refs.spinner.classList.add("is-hidden"),this.refs.icon.classList.remove("is-hidden")}enable(){this.refs.button.disabled=!0,this.refs.spinner.classList.remove("is-hidden"),this.refs.icon.classList.add("is-hidden")}loadOff(){this.refs.loader.classList.add("is-hidden")}loadOn(){this.refs.loader.classList.remove("is-hidden")}constructor({selector:t}){this.refs=this.getRefs(t)}}})),s.register("jpPIC",(function(t,e){var n=s("5nqDG"),r=s("g4eqB"),i=s("hRans"),o=(i=s("hRans"),s("c7wFj")),a=s("9gn4F"),u=s("alJz6");const c=new(0,s("kUoQ5").LoadSpinner)({selector:'[data-action="modal-loading"]'}),l=document.querySelector(".button__close"),h=document.querySelector(".modal__backdrop"),d=document.querySelector(".js-modal"),f=document.querySelector(".modal");let p,g,m,y=null;function v(){(0,a.loadSimilar)(y),E()}function w(t){d.insertAdjacentHTML("beforeend",(0,n.addTrailersMarkup)(t.currentTarget.data)),p.disabled=!0}function b(t){"Escape"===t.code&&E()}function E(){h.classList.add("is-hidden"),c.loadOn(),document.body.style.overflow="visible",l.removeEventListener("click",E),h.removeEventListener("click",E),p?.removeEventListener("click",w),g.removeEventListener("click",v),d?.removeEventListener("keydown",b),d?.removeEventListener("click",E),d.innerHTML=""}function T(t){t.target===t.currentTarget&&E()}u.gallery.addEventListener("click",(function(t){if("gallery__link"!==t.target.className)return;t.preventDefault(),y=t.target.getAttribute("href"),h.classList.remove("is-hidden"),document.body.style.overflow="hidden",(0,r.getMovieData)(y).then((t=>{d.innerHTML=(0,n.createModalMarkup)(t),(0,o.initWatchedQueueBtns)(t),p=document.querySelector(".js-film__button--trailer"),p&&(p.addEventListener("click",w),p.data=t,p.disabled=!1),g=document.querySelector(".film__button--recommended"),g.addEventListener("click",v),document.addEventListener("keydown",b),l.addEventListener("click",E),h.addEventListener("click",T),(0,i.themeSwitcherModals)(f),m=document.querySelectorAll(".film__button"),m.forEach((function(t){(0,i.themeSwitcherModalButtons)(t)}))})).catch((t=>{console.log(t)})).finally((()=>c.loadOff()))}))})),s.register("5nqDG",(function(e,n){function r(t){const{poster_path:e,title:n,vote_average:r,vote_count:i,popularity:s,original_title:o,genres:a,videos:u,overview:c,id:l}=t,h=0!==u.results.length?'<li class="btn-list__item btn-list__item--film"><button type="button" class="button js-film__button--trailer film__button upper">\n      Watch trailer\n    </button></li>':"",d=a.map((t=>t.name)).join(", "),f=0!==a.length?`<tr>\n        <td class="film__item">Genre</td>\n        <td class="film__details">${d}</td>\n      </tr>`:"";return`\n        <div class="modal__wrapping">\n          <div class="film__image">\n            <img\n              class="image"\n              src="https://image.tmdb.org/t/p/w500${e}"\n              loading="lazy"\n              alt="${n} poster"\n            />\n          </div>\n          <div class="film__info">\n            <h2 class="film__title upper">${n}</h2>\n            <table>\n              <thead>\n                <tr>\n                  <td class="film__item">Vote / Votes</td>\n                  <td class="film__details">\n                    <span class="film__rating"\n                      >${r.toFixed(1)}\n                    </span>\n                    /\n                    <span class="film__votes-number">${i} </span>\n                  </td>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class="film__item">Popularity</td>\n                  <td class="film__details">${s}</td>\n                </tr>\n                <tr>\n                  <td class="film__item">Original Title</td>\n                  <td class="film__details upper">${o}</td>\n                </tr>\n                ${f}\n              </tbody>\n            </table>\n            <div>\n              <h3 class="film__about--title upper">About</h3>\n              <p class="film__about--text">${c}</p>\n            </div>\n            <div class="film__button--wrapper">\n            <p class="nologin"></p>\n              <ul class="btn-list js-btn-add-list">\n                <li class="btn-list__item btn-list__item--film">\n                  <button\n                    type="button"\n                    class="button film__button upper"\n                    data-addto="watched"\n                  >\n                    Add to watched\n                  </button>\n                </li>\n                <li class="btn-list__item btn-list__item--film">\n                  <button\n                    type="button"\n                    class="button film__button upper"\n                    data-addto="queue"\n                  >\n                    Add to queue\n                  </button>\n                </li>\n                <li class="btn-list__item btn-list__item--film">\n                <button\n                type="button"\n                class="button film__button--recommended film__button upper"\n                data-id = ${l}\n                >\n                Similar\n                </button>\n                </li>\n                ${h}\n              </ul>\n            </div>\n          </div>\n        </div>\n      `}function i({videos:t}){return`<ul class="film__trailers">${t.results.slice(0,1).map((t=>`<li class="film__trailer--item">\n      <iframe \n      class="film__trailer"\n      src="https://www.youtube.com/embed/${t.key}?rel=0&showinfo=0&autoplay=1"\n      title="YouTube video player"\n       frameborder="0"\n       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n       allowfullscreen\n       allow-popups-to-escape-sandbox\n     ></iframe>\n     </li>`)).join("")}</ul>`}t(e.exports,"createModalMarkup",(function(){return r})),t(e.exports,"addTrailersMarkup",(function(){return i}))})),s.register("g4eqB",(function(e,n){t(e.exports,"getMovieData",(function(){return i}));var r=s("iqbjS");const i=async t=>{try{return await(0,r.getMovieById)(t)}catch(t){console.log(t.message)}}})),s.register("hRans",(function(e,r){t(e.exports,"themeSwitcherModals",(function(){return l})),t(e.exports,"themeSwitcherModalButtons",(function(){return h}));var i=s("gzpns");const o=document.querySelector(".theme-switcher__btn"),a=document.querySelector(".theme-switcher__btn-icon-sun"),u=document.querySelector(".theme-switcher__btn-icon-moon"),c=document.querySelector(".footer__modal");o.addEventListener("click",(function(){let t="light";document.body.classList.contains("dark-theme")?document.body.classList.contains("dark-theme")&&(document.body.classList.remove("dark-theme"),a.classList.remove("icon-ishidden"),u.classList.add("icon-ishidden")):(document.body.classList.add("dark-theme"),u.classList.remove("icon-ishidden"),a.classList.add("icon-ishidden"),t="dark");localStorage.setItem("theme",t),l(c)}));function l(t){"dark"===localStorage.getItem("theme")?t.classList.add("dark-theme-modals"):t.classList.remove("dark-theme-modals")}function h(t){"dark"===localStorage.getItem("theme")?t.classList.add("film__button-theme-dark"):t.classList.remove("film__button-theme-dark")}"dark"===localStorage.getItem("theme")?(document.body.classList.add("dark-theme"),a.classList.add("icon-ishidden"),l(c)):u.classList.add("icon-ishidden");n(i)({showDelay:100,className:"tooltip",offset:{x:-75,y:-70}})})),s.register("gzpns",(function(t,e){var n=s("fsdhA"),r=s("diaWR"),i=s("2NEvF"),o=s("90eCg"),a=s("dk3UH"),u=s("jAKP6");t.exports=function(t){var e=i(t),s=r(e),c=e.target,l=e.throttle,h=n((function(t){s&&s.set(t)}),l),d=n((function(t){s&&s.hold(),setTimeout((function(){s&&s.onHold()&&s.set(null)}),l)}),l),f=o(c,e.selector,h),p=a(c,e.selector,d),g=n((function(){var t=s.getCurrentTarget();t&&!u(document.documentElement,t)&&s.set(null)}),200);return c.addEventListener("mousemove",g),{destroy:function(){s.destroy(),f(),p(),c.removeEventListener("mousemove",g),c=null,s=null,e=null}}}})),s.register("fsdhA",(function(t,e){t.exports=function(t,e,n){var r,i,s=-1;return void 0===e&&(e=0),e<0?t:function(){r=n||this,i=arguments,-1!==s||(s=setTimeout((function(){t.apply(r,i),r=null,s=-1}),e))}}})),s.register("diaWR",(function(t,e){var n=s("7Cngf"),r=s("4yvvI"),i=s("5yW5Z"),o=s("hTKam"),a=s("30YZo"),u=s("3M26E"),c=s("dvySP"),l=s("ap2V9"),h=s("k8fVF");t.exports=function(t){var e,s;function d(s){var d=s.getAttribute(t.attrName),f=c(t);f.innerHTML=t.escape?i(d):d;var p=t.alignPositions,g=n.from(f),m=n.from(s),y=s.getAttribute(t.attrName+"-positions"),v=s.getAttribute(t.attrName+"-style"),w=r({},e,t.style);v&&(v=u(v),e=h(v,(function(){return""})),r(w,v)),y&&(p=l(y.split(";")));g.alignTo(m,p,{offset:a(t.offset,p),constrain:!0});var b=document.body.scrollTop||0,E=document.body.scrollLeft||0;o(f,w,t.visibleStyle,{top:g.top+b,left:g.left+E})}var f,p,g,m=function(e){e!=s&&(f&&(clearTimeout(f),f=null),e?t.showDelay?f=setTimeout((function(){f=null,d(e)}),t.showDelay):d(e):o(c(t),t.hiddenStyle)),s=e},y=function(e){e!=p&&(p=e,t.hideOnChange&&((g||e)&&(g&&clearTimeout(g),g=setTimeout((function(){g=null,m(p)}),t.hideOnChangeDelay)),e=null),m(e))},v=!1;return{destroy:function(){c.destroy(t)},hold:function(){v=!0},onHold:function(){return v},set:function(t){v=!1,y(t)},getCurrentTarget:function(){return s}}}})),s.register("7Cngf",(function(t,e){var n=s("4Ry6k");s("1XKmi"),s("djR2q");var r=s("7G4ZL");n.alignRegions=function(t,e,n,i){var s=r(t,e,n,i),o=s.region;return o.equals(t)||t.setRegion(o),s.position},n.prototype.alignTo=function(t,e,i){i=i||{};var s=this,o=n.from(t),a=r(s,o,e,i),u=a.region;return u.equalsSize(s)||this.setSize(u.getSize()),u.equalsPosition(s)||this.setPosition(u.getPosition(),{absolute:!!i.absolute}),a.position},t.exports=n})),s.register("4Ry6k",(function(t,e){t.exports=s("2cI8K")})),s.register("2cI8K",(function(t,e){var n=s("7Dte4"),r=s("1t37c"),i=s("lTZsY"),o=s("jMc9N").EventEmitter,a=s("cBofb"),u=s("dSyuF"),c=Object.prototype.toString,l=function(t){return"[object Object]"===c.apply(t)};function h(t,e,r){return t&&r.forEach((function(r){n(t,r)&&(e[r]=t[r])})),e}var d={cy:"YCenter",cx:"XCenter",t:"Top",tc:"TopCenter",tl:"TopLeft",tr:"TopRight",b:"Bottom",bc:"BottomCenter",bl:"BottomLeft",br:"BottomRight",l:"Left",lc:"LeftCenter",r:"Right",rc:"RightCenter",c:"Center"},f=function(t,e,n,i){if(!(this instanceof f))return r(f,arguments);o.call(this),l(t)?(h(t,this,["top","right","bottom","left"]),null==t.bottom&&null!=t.height&&(this.bottom=this.top+t.height),null==t.right&&null!=t.width&&(this.right=this.left+t.width),t.emitChangeEvents&&(this.emitChangeEvents=t.emitChangeEvents)):(this.top=t,this.right=e,this.bottom=n,this.left=i),this[0]=this.left,this[1]=this.top,u(this)};a(f,o),i(f.prototype,{emitChangeEvents:!1,getRegion:function(t){return t?this.clone():this},setRegion:function(t){return t instanceof f?this.set(t.get()):this.set(t),this},validate:function(){return f.validate(this)},_before:function(){if(this.emitChangeEvents)return h(this,{},["left","top","bottom","right"])},_after:function(t){this.emitChangeEvents&&(this.top==t.top&&this.left==t.left||this.emitPositionChange(),this.right==t.right&&this.bottom==t.bottom||this.emitSizeChange())},notifyPositionChange:function(){this.emit("changeposition",this)},emitPositionChange:function(){this.notifyPositionChange()},notifySizeChange:function(){this.emit("changesize",this)},emitSizeChange:function(){this.notifySizeChange()},add:function(t){var e,r=this._before();for(e in t)n(t,e)&&(this[e]+=t[e]);return this[0]=this.left,this[1]=this.top,this._after(r),this},substract:function(t){var e,r=this._before();for(e in t)n(t,e)&&(this[e]-=t[e]);return this[0]=this.left,this[1]=this.top,this._after(r),this},getSize:function(){return{width:this.width,height:this.height}},setPosition:function(t){var e=this.width,n=this.height;return null!=t.left&&(t.right=t.left+e),null!=t.top&&(t.bottom=t.top+n),this.set(t)},setSize:function(t){return null!=t.height&&null!=t.width?this.set({right:this.left+t.width,bottom:this.top+t.height}):(null!=t.width&&this.setWidth(t.width),null!=t.height&&this.setHeight(t.height),this)},setWidth:function(t){return this.set({right:this.left+t})},setHeight:function(t){return this.set({bottom:this.top+t})},set:function(t){var e=this._before();return h(t,this,["left","top","bottom","right"]),null==t.bottom&&null!=t.height&&(this.bottom=this.top+t.height),null==t.right&&null!=t.width&&(this.right=this.left+t.width),this[0]=this.left,this[1]=this.top,this._after(e),this},get:function(t){return t?this[t]:h(this,{},["left","right","top","bottom"])},shift:function(t){var e=this._before();return t.top&&(this.top+=t.top,this.bottom+=t.top),t.left&&(this.left+=t.left,this.right+=t.left),this[0]=this.left,this[1]=this.top,this._after(e),this},unshift:function(t){return t.top&&(t.top*=-1),t.left&&(t.left*=-1),this.shift(t)},equals:function(t){return this.equalsPosition(t)&&this.equalsSize(t)},equalsSize:function(t){var e=t instanceof f,n=null==t.width&&e?t.getWidth():t.width,r=null==t.height&&e?t.getHeight():t.height;return this.getWidth()==n&&this.getHeight()==r},equalsPosition:function(t){return this.top==t.top&&this.left==t.left},addLeft:function(t){var e=this._before();return this.left=this[0]=this.left+t,this._after(e),this},addTop:function(t){var e=this._before();return this.top=this[1]=this.top+t,this._after(e),this},addBottom:function(t){var e=this._before();return this.bottom+=t,this._after(e),this},addRight:function(t){var e=this._before();return this.right+=t,this._after(e),this},minTop:function(){return this.expand({top:1})},maxBottom:function(){return this.expand({bottom:1})},minLeft:function(){return this.expand({left:1})},maxRight:function(){return this.expand({right:1})},expand:function(t,e){var r,i=e||f.getDocRegion(),s=[],o=this._before();for(r in t)n(t,r)&&s.push(r);return h(i,this,s),this[0]=this.left,this[1]=this.top,this._after(o),this},clone:function(){return new f({top:this.top,left:this.left,right:this.right,bottom:this.bottom})},containsPoint:function(t,e){return 1==arguments.length&&(e=t.y,t=t.x),this.left<=t&&t<=this.right&&this.top<=e&&e<=this.bottom},containsRegion:function(t){return this.containsPoint(t.left,t.top)&&this.containsPoint(t.right,t.bottom)},diffHeight:function(t){return this.diff(t,{top:!0,bottom:!0})},diffWidth:function(t){return this.diff(t,{left:!0,right:!0})},diff:function(t,e){var r,i={};for(r in e)n(e,r)&&(i[r]=this[r]-t[r]);return i},getPosition:function(){return{left:this.left,top:this.top}},getPoint:function(t,e){d[t]||console.warn("The position ",t," could not be found! Available options are tl, bl, tr, br, l, r, t, b.");var n=this["getPoint"+d[t]]();return e?{left:n.x,top:n.y}:n},getPointYCenter:function(){return{x:null,y:this.top+this.getHeight()/2}},getPointXCenter:function(){return{x:this.left+this.getWidth()/2,y:null}},getPointTop:function(){return{x:null,y:this.top}},getPointTopCenter:function(){return{x:this.left+this.getWidth()/2,y:this.top}},getPointTopLeft:function(){return{x:this.left,y:this.top}},getPointTopRight:function(){return{x:this.right,y:this.top}},getPointBottom:function(){return{x:null,y:this.bottom}},getPointBottomCenter:function(){return{x:this.left+this.getWidth()/2,y:this.bottom}},getPointBottomLeft:function(){return{x:this.left,y:this.bottom}},getPointBottomRight:function(){return{x:this.right,y:this.bottom}},getPointLeft:function(){return{x:this.left,y:null}},getPointLeftCenter:function(){return{x:this.left,y:this.top+this.getHeight()/2}},getPointRight:function(){return{x:this.right,y:null}},getPointRightCenter:function(){return{x:this.right,y:this.top+this.getHeight()/2}},getPointCenter:function(){return{x:this.left+this.getWidth()/2,y:this.top+this.getHeight()/2}},getHeight:function(){return this.bottom-this.top},getWidth:function(){return this.right-this.left},getTop:function(){return this.top},getLeft:function(){return this.left},getBottom:function(){return this.bottom},getRight:function(){return this.right},getArea:function(){return this.getWidth()*this.getHeight()},constrainTo:function(t){var e,n=this.getIntersection(t);if(!n||!n.equals(this)){var r=t.getWidth(),i=t.getHeight();return this.getWidth()>r&&(this.left=t.left,this.setWidth(r)),this.getHeight()>i&&(this.top=t.top,this.setHeight(i)),e={},this.right>t.right&&(e.left=t.right-this.right),this.bottom>t.bottom&&(e.top=t.bottom-this.bottom),this.left<t.left&&(e.left=t.left-this.left),this.top<t.top&&(e.top=t.top-this.top),this.shift(e),!0}return!1},__IS_REGION:!0}),Object.defineProperties(f.prototype,{width:{get:function(){return this.getWidth()},set:function(t){return this.setWidth(t)}},height:{get:function(){return this.getHeight()},set:function(t){return this.setHeight(t)}}}),s("bicQu")(f),t.exports=f})),s.register("7Dte4",(function(t,e){var n,r,i=Object.prototype.hasOwnProperty;t.exports=(n=function(t,e){return i.call(t,e)},"number"!=typeof r&&(r=n.length),function t(e){return function(){var i=arguments.length,s=[].concat(e);return i&&s.push.apply(s,arguments),s.length<r?t(s):n.apply(this,s)}}([]))})),s.register("1t37c",(function(t,e){var n=s("97iZ9");t.exports=function(t,e){return n(e.length)(t,e)}})),s.register("97iZ9",(function(t,e){var n;t.exports=(n={},function(t){if(!n[t]){for(var e=[],r=0;r<t;r++)e.push("a["+r+"]");n[t]=new Function("c","a","return new c("+e.join(",")+")")}return n[t]})})),s.register("lTZsY",(function(t,e){function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=Object.assign||function(t,e){for(var r,i,s=n(t),o=1;o<arguments.length;o++){r=arguments[o],i=Object.keys(Object(r));for(var a=0;a<i.length;a++)s[i[a]]=r[i[a]]}return s}})),s.register("jMc9N",(function(t,e){var n,r="object"==typeof Reflect?Reflect:null,i=r&&"function"==typeof r.apply?r.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};n=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,s),r(n)}function s(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}m(t,e,s,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&m(t,"error",e,n)}(t,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function u(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function c(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var i,s,o,a;if(u(n),void 0===(s=t._events)?(s=t._events=Object.create(null),t._eventsCount=0):(void 0!==s.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),void 0===o)o=s[e]=n,++t._eventsCount;else if("function"==typeof o?o=s[e]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=c(t))>0&&o.length>i&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=o.length,a=l,console&&console.warn&&console.warn(a)}return t}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=h.bind(r);return i.listener=n,r.wrapFn=i,i}function f(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):g(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function m(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(s){r.once&&t.removeEventListener(e,i),n(s)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var u=s[t];if(void 0===u)return!1;if("function"==typeof u)i(u,this,e);else{var c=u.length,l=g(u,c);for(n=0;n<c;++n)i(l[n],this,e)}return!0},o.prototype.addListener=function(t,e){return l(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return l(this,t,e,!0)},o.prototype.once=function(t,e){return u(e),this.on(t,d(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return u(e),this.prependListener(t,d(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,r,i,s,o;if(u(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===e||n[s].listener===e){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,o||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},o.prototype.listeners=function(t){return f(this,t,!0)},o.prototype.rawListeners=function(t){return f(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}})),s.register("cBofb",(function(t,e){t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}})),s.register("dSyuF",(function(t,e){t.exports=function(t){var e=!0;return t.right<t.left&&(e=!1,t.right=t.left),t.bottom<t.top&&(e=!1,t.bottom=t.top),e}})),s.register("bicQu",(function(t,e){var n=s("7Dte4"),r=s("dSyuF");t.exports=function(t){var e=Math.max,i=Math.min,s={init:function(){var e,r,i={getIntersection:!0,getIntersectionArea:!0,getIntersectionHeight:!0,getIntersectionWidth:!0,getUnion:!0},s=t.prototype,o=n(i);for(r in i)o(r)&&("string"!=typeof(e=i[r])&&(e=r),function(e,n,r){e[n]=function(e){return t[r]||console.warn("cannot find method ",r," on ",t),t[r](this,e)}}(s,e,r))},validate:r,getDocRegion:function(){return t.fromDOM(document.documentElement)},from:function(e){if(e.__IS_REGION)return e;if("undefined"!=typeof document){if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return t.fromDOM(e);if(e.type&&void 0!==e.pageX&&void 0!==e.pageY)return t.fromEvent(e)}return t(e)},fromEvent:function(e){return t.fromPoint({x:e.pageX,y:e.pageY})},fromDOM:function(e){var n=e.getBoundingClientRect();return new t({top:n.top,left:n.left,bottom:n.bottom,right:n.right})},getIntersection:function(e,n){var r=this.getIntersectionArea(e,n);return!!r&&new t(r)},getIntersectionWidth:function(t,n){var r=i(t.right,n.right),s=e(t.left,n.left);return s<r?r-s:0},getIntersectionHeight:function(t,n){var r=e(t.top,n.top),s=i(t.bottom,n.bottom);return r<s?s-r:0},getIntersectionArea:function(t,n){var r=e(t.top,n.top),s=i(t.right,n.right),o=i(t.bottom,n.bottom),a=e(t.left,n.left);return r<o&&a<s&&{top:r,right:s,bottom:o,left:a,width:s-a,height:o-r}},getUnion:function(n,r){var s=i(n.top,r.top),o=e(n.right,r.right),a=e(n.bottom,r.bottom),u=i(n.left,r.left);return new t(s,o,a,u)},getRegion:function(e){return t.from(e)},fromPoint:function(e){return new t({top:e.y,bottom:e.y,left:e.x,right:e.x})}};Object.keys(s).forEach((function(e){t[e]=s[e]})),t.init()}})),s.register("1XKmi",(function(t,e){var n=s("4Ry6k");n.align=function(t,e,r){return e=n.from(e),2!=(r=(r||"c-c").split("-")).length&&console.warn("Incorrect region alignment! The align parameter need to be in the form 'br-c', that is, a - separated string!",r),n.alignToPoint(t,e.getPoint(r[1]),r[0])},n.alignToPoint=function(t,e,r){var i=(t=n.from(t)).getPoint(r),s=0,o={};return null!=i.x&&null!=e.x&&(s++,o.left=e.x-i.x),null!=i.y&&null!=e.y&&(s++,o.top=e.y-i.y),s&&t.shift(o),t}})),s.register("djR2q",(function(t,e){var n=s("4Ry6k");n.prototype.alignToRegion=function(t,e){return n.align(this,t,e),this},n.prototype.alignToPoint=function(t,e){return n.alignToPoint(this,t,e),this}})),s.register("7G4ZL",(function(t,e){var n=s("kYHVm"),r=s("4Ry6k");t.exports=function(t,e,i,s){var o=(t=r.from(t)).clone();return{position:n(o,e,i,s),region:o,widthChanged:o.getWidth()!=t.getWidth(),heightChanged:o.getHeight()!=t.getHeight(),positionChanged:o.equalsPosition(t)}}})),s.register("kYHVm",(function(t,e){var n=s("4Ry6k");t.exports=function(t,e,r,i){e=n.from(e);var s=(i=i||{}).constrain,o=i.sync,a=i.offset||[],u=!1,c=!1,l=t.clone();Array.isArray(r)||(r=r?[r]:[]),Array.isArray(a)||(a=a?[a]:[]),s&&(s=!0===s?n.getDocRegion():s.getRegion()),o&&(o.size?(u=!0,c=!0):(u=!0===o||(o.width||!1),c=!0===o||(o.height||!1))),u&&l.setWidth(e.getWidth()),c&&l.setHeight(e.getHeight());for(var h,d,f,p,g=0,m=r.length,y=-1,v=-1;g<m;g++){if(d=r[g],h=a[g],l.alignToRegion(e,d),h&&(Array.isArray(h)||(h=a[g]=[h.x||h.left,h.y||h.top]),l.shift({left:h[0],top:h[1]})),!s)return t.set(l),d;if((f=l.getIntersection(s))&&f.equals(l))return t.set(l),d;f&&(p=f.getArea())>y&&(y=p,v=g)}if(~v)return d=r[v],h=a[v],l.alignToRegion(e,d),h&&l.shift({left:h[0],top:h[1]}),f=l.getIntersection(s),l.setRegion(f),l.alignToRegion(e,d),h&&l.shift({left:h[0],top:h[1]}),t.set(l),d}})),s.register("4yvvI",(function(t,e){var n=Object.prototype.propertyIsEnumerable;function r(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function i(t){var e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t))),e.filter((function(e){return n.call(t,e)}))}t.exports=Object.assign||function(t,e){for(var n,s,o=r(t),a=1;a<arguments.length;a++){n=arguments[a],s=i(Object(n));for(var u=0;u<s.length;u++)o[s[u]]=n[s[u]]}return o}})),s.register("5yW5Z",(function(t,e){var n=/["'&<>]/;t.exports=function(t){var e,r=""+t,i=n.exec(r);if(!i)return r;var s="",o=0,a=0;for(o=i.index;o<r.length;o++){switch(r.charCodeAt(o)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}a!==o&&(s+=r.substring(a,o)),a=o+1,s+=e}return a!==o?s+r.substring(a,o):s}})),s.register("hTKam",(function(t,e){var n=s("9gfJg").object,r=s("2NBkn"),i=s("4yvvI");function o(t){return n(r(t))}function a(t,e){return e=o(e),Object.keys(e).forEach((function(n){t.style[n]=e[n]})),t}t.exports=function(t,e){var n=[].slice.call(arguments,1),r=[{}].concat(n).map(o);return a(t,e=i.apply(null,r)),t}})),s.register("9gfJg",(function(t,e){t.exports={prefixProperties:s("lh6fQ"),cssUnitless:s("2czRQ"),object:s("6qmCD"),string:s("3jeW8")}})),s.register("lh6fQ",(function(t,e){t.exports={"border-radius":1,"border-top-left-radius":1,"border-top-right-radius":1,"border-bottom-left-radius":1,"border-bottom-right-radius":1,"box-shadow":1,order:1,flex:function(t,e){return[e+"box-flex"]},"box-flex":1,"box-align":1,animation:1,"animation-duration":1,"animation-name":1,transition:1,"transition-duration":1,transform:1,"transform-style":1,"transform-origin":1,"backface-visibility":1,perspective:1,"box-pack":1}})),s.register("2czRQ",(function(t,e){t.exports={animation:1,"column-count":1,columns:1,"font-weight":1,opacity:1,"order  ":1,"z-index":1,zoom:1,flex:1,"box-flex":1,transform:1,perspective:1,"box-pack":1,"box-align":1,colspan:1,rowspan:1}})),s.register("6qmCD",(function(t,e){s("ahaV3");var n=s("hAOmU"),r=s("a9Yzh"),i=s("6pmSJ"),o=s("aLLE1"),a=s("bT8Iw"),u=s("fWTas"),c=function(t,e,r,i){n(e).forEach((function(e){t[i?i(e):e]=r}))},l={cssUnitless:s("2czRQ")},h=function(t,e,n,s){"string"==typeof t&&(t=function(t){t=(t||"").split(";");var e={};return t.forEach((function(t){var n=t.split(":");2==n.length&&(e[n[0].trim()]=n[1].trim())})),e}(t)),(e=e||l).cssUnitless=e.cssUnitless||l.cssUnitless,s=s||{};var d,f,p,g,m,y,v,w,b=e.scope||{},E=null!=e.addUnits?e.addUnits:!b||null==b.addUnits||b.addUnits,T=(null!=e.cssUnitless?e.cssUnitless:b?b.cssUnitless:null)||{},_=(e.cssUnit||b?b.cssUnit:null)||"px",I=e.prefixProperties||(b?b.prefixProperties:null)||{},S=e.camelize?i:r;for(p in t)if(o(t,p)){if(g=t[p],f=r(n?n+p:p),d=!1,w=!1,u(g)&&(v=g.call(b||t,g,p,f,t),a(v)&&null!=v.value?(g=v.value,w=v.prefix,f=v.name?r(v.name):f):g=v),y="number"==(m=typeof g)||"string"==m&&""!=g&&1*g==g,null==g||null==f||""===f)continue;if((y||"string"==m)&&(d=!0),!d&&null!=g.value&&g.prefix&&(d=!0,w=g.prefix,g=g.value),d){if(w=w||!!I[f],y&&(g=E&&!(f in T)?g+_:g+""),"border"!=f&&(f.indexOf("border")||~f.indexOf("radius")||~f.indexOf("width"))||!y||(f+="-width"),!f.indexOf("border-radius-")&&(f.replace(/border(-radius)(-(.*))/,(function(t,e,n){var r={"-top":["-top-left","-top-right"],"-left":["-top-left","-bottom-left"],"-right":["-top-right","-bottom-right"],"-bottom":["-bottom-left","-bottom-right"]};n in r?(f=[],r[n].forEach((function(t){f.push("border"+t+e)}))):f="border"+n+e})),Array.isArray(f))){f.forEach((function(t){w?c(s,t,g,S):s[S(t)]=g}));continue}w?c(s,f,g,S):s[S(f)]=g}else h(g,e,f+"-",s)}return s};t.exports=h})),s.register("ahaV3",(function(t,e){var n,r,i=s("eUWJU"),o=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,a="undefined"==typeof document?{}:document.documentElement.style,u=(n=function(){for(var t in a)if(o.test(t))return t.match(o)[0];return"WebkitOpacity"in a?"Webkit":"KhtmlOpacity"in a?"Khtml":""}(),r=n.toLowerCase(),{style:n,css:"-"+r+"-",dom:{Webkit:"WebKit",ms:"MS",o:"WebKit"}[n]||i(n)});t.exports=u})),s.register("eUWJU",(function(t,e){t.exports=function(t){return t.length?t.charAt(0).toUpperCase()+t.substring(1):t}})),s.register("hAOmU",(function(t,e){t.exports=s("1YiwP")()})),s.register("1YiwP",(function(t,e){var n=s("6pmSJ"),r=s("a9Yzh"),i=s("801uv"),o=s("eUWJU"),a=s("ahaV3"),u=s("lh6fQ"),c="undefined"==typeof document?{}:document.documentElement.style;t.exports=function(t){return function(e,s){s=s||{};var l=i(n(e)),h=r(e),d=t?l:h,f=a.style?t?a.style:a.css:"";if(l in c)return s.asString?d:[d];var p=d,g=u[h],m=[];if(t&&(p=o(d)),"function"==typeof g){var y=g(d,f)||[];y&&!Array.isArray(y)&&(y=[y]),y.length&&(y=y.map((function(e){return t?i(n(e)):r(e)}))),m=m.concat(y)}return f&&m.push(f+p),m.push(d),s.asString||1==m.length?m[0]:m}}})),s.register("6pmSJ",(function(t,e){var n=function(t,e){return e?e.toUpperCase():""},r=s("jYpJe");t.exports=function(t){return t?t.replace(r,n):""}})),s.register("jYpJe",(function(t,e){t.exports=/[-\s]+(.)?/g})),s.register("a9Yzh",(function(t,e){var n=s("hrTLY");t.exports=function(t){return n(t).toLowerCase()}})),s.register("hrTLY",(function(t,e){var n=/::/g,r=/([A-Z]+)([A-Z][a-z])/g,i=/([a-z\d])([A-Z])/g,s=/_/g;t.exports=function(t,e){return t?t.replace(n,"/").replace(r,"$1_$2").replace(i,"$1_$2").replace(s,e||"-"):""}})),s.register("801uv",(function(t,e){t.exports=function(t){return t.length?t.charAt(0).toLowerCase()+t.substring(1):t}})),s.register("aLLE1",(function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}})),s.register("bT8Iw",(function(t,e){var n=Object.prototype.toString;t.exports=function(t){return!!t&&"[object Object]"===n.call(t)}})),s.register("fWTas",(function(t,e){var n=Object.prototype.toString;t.exports=function(t){return"[object Function]"===n.apply(t)}})),s.register("3jeW8",(function(t,e){var n=s("6qmCD"),r=s("aLLE1");t.exports=function(t,e){t=n(t,e);var i,s=[];for(i in t)r(t,i)&&s.push(i+": "+t[i]);return s.join("; ")}})),s.register("2NBkn",(function(t,e){var n=s("jlaFW"),r=s("fb4aj"),i=s("6dFQ7"),o=s("lznFJ");function a(t,e){var n=function(t,e){var n={key:t,value:e};return(u.plugins||[]).forEach((function(r){var s=i((function(n){return r(t,e,n)}),n);s&&(n=s)})),n}(t,e);return i((function(t){return{key:r(t.key,t.value),value:t.value}}),n)}var u=function(t){var e,r,s={};for(e in t)if(n(t,e)){if(!(r=a(e,t[e])))continue;i((function(t){s[t.key]=t.value}),r)}return s};t.exports=o(u)})),s.register("jlaFW",(function(t,e){t.exports=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}})),s.register("fb4aj",(function(t,e){var n=s("jMJjI"),r=s("2Hd7R");t.exports=function(t,e){return r[t]?n(t,e):t}})),s.register("jMJjI",(function(t,e){var n,r,i=s("jlany"),o=s("5C5pF"),a=s("iONaL"),u={};t.exports=function(t,e){r=r||a(),n=n||r.style;var s,c,l=t;return u[l]?u[l]:(t in n||(s=o("appearance"))&&(c=s+i(t))in n&&(t=c),u[l]=t,t)}})),s.register("jlany",(function(t,e){t.exports=function(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}})),s.register("5C5pF",(function(t,e){var n,r,i=s("jlany"),o=["ms","Moz","Webkit","O"],a=s("iONaL");t.exports=function(t){if(void 0!==r)return r;n=n||a();for(var e,s,u=0,c=o.length;u<c;u++)if(e=(s=o[u])+i(t),void 0!==n.style[e])return r=s;return r}})),s.register("iONaL",(function(t,n){var r;t.exports=function(){return!r&&e.document&&(r=e.document.createElement("div")),r||(r={style:{}}),r}})),s.register("2Hd7R",(function(t,e){t.exports={alignItems:1,justifyContent:1,flex:1,flexFlow:1,flexGrow:1,flexShrink:1,flexBasis:1,flexDirection:1,flexWrap:1,alignContent:1,alignSelf:1,userSelect:1,transform:1,transition:1,transformOrigin:1,transformStyle:1,transitionProperty:1,transitionDuration:1,transitionTimingFunction:1,transitionDelay:1,borderImage:1,borderImageSlice:1,boxShadow:1,backgroundClip:1,backfaceVisibility:1,perspective:1,perspectiveOrigin:1,animation:1,animationDuration:1,animationName:1,animationDelay:1,animationDirection:1,animationIterationCount:1,animationTimingFunction:1,animationPlayState:1,animationFillMode:1,appearance:1}})),s.register("6dFQ7",(function(t,e){t.exports=function(t,e){if(e)return Array.isArray(e)?e.map(t).filter((function(t){return!!t})):t(e)}})),s.register("lznFJ",(function(t,e){var n=s("4IkIC");t.exports=function(t){var e;return t.plugins=t.plugins||[(e={flex:1,"inline-flex":1},function(t,r){if("display"===t&&r in e)return{key:t,value:n(t,r,!0)}})],t.plugin=function(e){t.plugins=t.plugins||[],t.plugins.push(e)},t}})),s.register("4IkIC",(function(t,e){var n,r,i=s("5C5pF"),o=s("9eoel"),a=s("iONaL"),u={};t.exports=function(t,e,s){r=r||a(),n=n||r.style;var c,l,h,d=t+": "+e;return u[d]?u[d]:(!s&&t in n||(c=i("appearance"))&&(l=o(t,e),h="-"+c.toLowerCase()+"-"+e,l in n&&(r.style[l]="",r.style[l]=h,""!==r.style[l]&&(e=h))),u[d]=e,e)}})),s.register("9eoel",(function(t,e){var n=s("jlany"),r=s("5C5pF"),i=s("2Hd7R");t.exports=function(t,e){if(!i[t])return t;var s=r(t);return s?s+n(t):t}})),s.register("30YZo",(function(t,e){var n={t:{x:1,y:1},l:{x:1,y:1},b:{x:1,y:-1},r:{x:-1,y:1}};t.exports=function(t,e){if(t){var r;Array.isArray(t)&&(r=t);var i=(r=null!=t.x?[t.x,t.y]:[t.left,t.top])[0],s=r[1];return e.map((function(t){var e=t.split("-")[0],r=e[0],o=e[1],a=n[r],u=n[o],c=1,l=1;return a&&(c*=a.x,l*=a.y),u&&(c*=u.x,l*=u.y),[i*c,s*l]}))}}})),s.register("3M26E",(function(t,e){t.exports=function(t){var e={};return t.split(";").forEach((function(t){var n=t.split(":");n.length&&(e[n[0].trim()]=n[1].trim())})),e}})),s.register("dvySP",(function(t,e){var n=s("hTKam"),r={},i=function(t){var e=r[t.id];return e||((e=n(document.createElement("div"),t.style||{})).className=t.className,t.appendTooltip?t.appendTooltip(e):document.body.appendChild(e),r[t.id]=e),e};i.destroy=function(t){var e=r[t.id];if(e){var n=e.parentNode;n&&n.removeChild(e)}},t.exports=i})),s.register("ap2V9",(function(t,e){var n={top:"bc-tc",bottom:"tc-bc",left:"rc-lc",right:"lc-rc",topleft:"br-tl",topright:"bl-tr",bottomleft:"tr-bl",bottomright:"tl-br"};t.exports=function(t){return(t=t||["topleft","topright","bottomleft","bottomright","top","bottom"]).map((function(t){return t=t.trim(),n[t]||t})).filter((function(t){return!!t}))}})),s.register("k8fVF",(function(t,e){t.exports=function(t,e){var n={};return Object.keys(t).forEach((function(r){n[r]=e(t[r])})),n}})),s.register("2NEvF",(function(t,e){var n=s("4yvvI"),r=s("jCyBs"),i={attrName:"data-tooltip",throttle:10,showDelay:500,offset:{x:5,y:5},hideOnChange:!0,hideOnChangeDelay:500,className:"tooltip",style:{padding:5,border:"1px solid gray",background:"white",boxSizing:"border-box",pointerEvents:"none",position:"absolute",visibility:"hidden",display:"inline-block",transform:"translate3d(0px, 0px, 0px)",transition:"opacity 0.3s"},visibleStyle:{opacity:1,visibility:"visible"},hiddenStyle:{opacity:0},alignPositions:null},o=s("ap2V9"),a=0;t.exports=function(t){var e=n({},i.style,(t=t||{}).style),s=n({},i.visibleStyle,t.visibleStyle),u=n({},i.hiddenStyle,t.hiddenStyle),c=r(n({},i,t));return c.style=e,c.visibleStyle=s,c.hiddenStyle=u,c.selector="["+c.attrName+"]",c.alignPositions=o(c.alignPositions),c.target=c.target||document.documentElement,c.id=a++,c}})),s.register("jCyBs",(function(t,e){var n=s("ihoyg").Buffer,r=function(){function t(e,i,s,o){"object"==typeof i&&(s=i.depth,o=i.prototype,i.filter,i=i.circular);var a=[],u=[],c=void 0!==n;return void 0===i&&(i=!0),void 0===s&&(s=1/0),function e(s,l){if(null===s)return null;if(0==l)return s;var h,d;if("object"!=typeof s)return s;if(t.__isArray(s))h=[];else if(t.__isRegExp(s))h=new RegExp(s.source,r(s)),s.lastIndex&&(h.lastIndex=s.lastIndex);else if(t.__isDate(s))h=new Date(s.getTime());else{if(c&&n.isBuffer(s))return h=n.allocUnsafe?n.allocUnsafe(s.length):new n(s.length),s.copy(h),h;void 0===o?(d=Object.getPrototypeOf(s),h=Object.create(d)):(h=Object.create(o),d=o)}if(i){var f=a.indexOf(s);if(-1!=f)return u[f];a.push(s),u.push(h)}for(var p in s){var g;d&&(g=Object.getOwnPropertyDescriptor(d,p)),g&&null==g.set||(h[p]=e(s[p],l-1))}return h}(e,s)}function e(t){return Object.prototype.toString.call(t)}function r(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return t.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},t.__objToStr=e,t.__isDate=function(t){return"object"==typeof t&&"[object Date]"===e(t)},t.__isArray=function(t){return"object"==typeof t&&"[object Array]"===e(t)},t.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===e(t)},t.__getRegExpFlags=r,t}();t.exports&&(t.exports=r)})),s.register("90eCg",(function(t,e){var n=s("k5P6k");t.exports=function(t,e,r,i){var s=n(t,e),o=function(t){var e;t.target,t.relatedTarget;(e=s(t))&&r(e,t)};return t.addEventListener("mouseover",o),function(){t.removeEventListener("mouseover",o)}}})),s.register("k5P6k",(function(t,e){var n=s("lFYNd");t.exports=function(t,e){return function(r){for(var i=r.target;i;){if(n(i,e))return i;if(i==t)return;i=i.parentNode}}}})),s.register("lFYNd",(function(t,e){var n="undefined"!=typeof Element?Element.prototype:{},r=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,e){if(!t||1!==t.nodeType)return!1;if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),i=0;i<n.length;i++)if(n[i]==t)return!0;return!1}})),s.register("dk3UH",(function(t,e){var n=s("k5P6k");function r(){return!0}function i(t,e){for(var n=e;n&&n!==t;)n=n.parentNode;return n!==t}t.exports=function(t,e,s,o){var a=o&&o.allowNested?r:i,u=n(t,e),c=function(t){var e,n=t.target,r=t.relatedTarget;(!r||r!==n&&a(n,r))&&(e=u(t))&&s(e,t)};return t.addEventListener("mouseout",c),function(){t.removeEventListener("mouseout",c)}}})),s.register("jAKP6",(function(t,e){t.exports=function(t,e){if(t.contains)return t.contains(e);var n=t.compareDocumentPosition(e);return 0===n||16&n}})),s.register("c7wFj",(function(e,n){t(e.exports,"initWatchedQueueBtns",(function(){return l}));var r=s("fo3FY"),i=s("jhK3h");const o=new CustomEvent("libraryChange",{detail:{section:"watched"}}),a=new CustomEvent("libraryChange",{detail:{section:"queue"}}),u=t=>JSON.parse(localStorage.getItem("watched")).map((t=>t.id)).includes(t),c=t=>JSON.parse(localStorage.getItem("queue")).map((t=>t.id)).includes(t),l=t=>{const e=document.querySelector('[data-addto="watched"]'),n=document.querySelector('[data-addto="queue"]');if(i.USER)t.genre_ids=t.genres.map((t=>t.id)),u(t.id)?e.textContent="remove from watched":e.textContent="add to watched",c(t.id)?n.textContent="remove from queue":n.textContent="add to queue",e.addEventListener("click",(async()=>{u(t.id)?(await(0,r.removeMovie)("watched",t.id),e.textContent="add to watched"):(await(0,r.setMovie)("watched",t),e.textContent="remove from watched"),document.dispatchEvent(o)})),n.addEventListener("click",(async()=>{c(t.id)?(await(0,r.removeMovie)("queue",t.id),n.textContent="add to queue"):(await(0,r.setMovie)("queue",t),n.textContent="remove from queue"),document.dispatchEvent(a)}));else{e.disabled=!0,n.disabled=!0;document.querySelector(".nologin").textContent="Login is Required"}}})),s.register("fo3FY",(function(e,n){t(e.exports,"setMovie",(function(){return u})),t(e.exports,"removeMovie",(function(){return c})),t(e.exports,"init",(function(){return l}));var r=s("jhK3h");s("ftYLF");var i=s("3PjDZ");const o=(0,i.getFirestore)(r.app),a=async t=>{const e=await(async t=>{const e=(0,i.collection)(o,"users",r.USER,t),n=await(0,i.getDocs)(e),s=[];return n.forEach((t=>{s.push(t.data())})),s})(t);localStorage.setItem(t,JSON.stringify(e))},u=async(t,e)=>(await(0,i.setDoc)((0,i.doc)(o,"users",r.USER,t,String(e.id)),e),await a(t),!0),c=async(t,e)=>(await(0,i.deleteDoc)((0,i.doc)(o,"users",r.USER,t,String(e))),await a(t),!0),l=async()=>{await a("watched"),await a("queue"),console.log("done")}})),s.register("jhK3h",(function(e,n){t(e.exports,"USER",(function(){return a})),t(e.exports,"app",(function(){return l})),s("gKkQl");var r=s("ix4Jr");s("eyjy7");var i=s("8erlf"),o=s("fo3FY");let a;const u=document.querySelector("#sign_in"),c=document.querySelector("#library_link"),l=(0,r.initializeApp)({apiKey:"AIzaSyA8W0hTcfR6KigXVFgqdjQIjt-RMBSyFo0",authDomain:"filmoteka-5d02e.firebaseapp.com",projectId:"filmoteka-5d02e",storageBucket:"filmoteka-5d02e.appspot.com",messagingSenderId:"588180914435",appId:"1:588180914435:web:0ccde1296d8f77415de936"}),h=new(0,i.Q),d=(0,i.n)(),f=()=>{localStorage.removeItem("user"),a="",u.textContent="SIGN IN",c.parentNode.classList.add("disabled"),u.removeEventListener("click",f),u.addEventListener("click",g)},p=()=>{u.textContent="SIGN OUT",c.parentNode.classList.remove("disabled"),u.removeEventListener("click",g),u.addEventListener("click",f)},g=t=>{(0,i.c)(d,h).then((t=>{i.Q.credentialFromResult(t).accessToken;const e=t.user;localStorage.setItem("user",e.uid),localStorage.setItem("username",e.displayName),a=e.uid,p(),(0,o.init)()})).catch((t=>{t.code,t.message,t.customData.email,i.Q.credentialFromError(t)}))};u.addEventListener("click",g);const m=localStorage.getItem("user");m&&(a=m,p())})),s.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
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
(0,s("ix4Jr").registerVersion)("firebase","9.16.0","app")})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return _})),t(e.exports,"initializeApp",(function(){return I})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return C}));var r=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
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
class u{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const c="@firebase/app",l="0.9.1",h=new(0,i.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
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
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",b);
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
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
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
 */const _="9.16.0";function I(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw E.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw E.create("duplicate-app",{appName:s})}const u=new(0,r.ComponentContainer)(s);for(const t of g.values())u.addComponent(t);const c=new T(n,i,u);return p.set(s,c),c}function S(t="[DEFAULT]"){const e=p.get(t);if(!e&&t===d)return I();if(!e)throw E.create("no-app",{appName:t});return e}function C(t,e,n){var i;let s=null!==(i=f[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const k="firebase-heartbeat-store";let A=null;function x(){return A||(A=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(k)}}).catch((t=>{throw E.create("idb-open",{originalErrorMessage:t.message})}))),A}async function R(t,e){try{const n=(await x()).transaction(k,"readwrite"),r=n.objectStore(k);return await r.put(e,O(t)),n.done}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const e=E.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});h.warn(e.message)}}}function O(t){return`${t.name}!${t.options.appId}`}
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
 */class N{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=D();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=D(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),P(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new L(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function D(){return(new Date).toISOString().substring(0,10)}class L{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await x()).transaction(k).objectStore(k).get(O(t))}catch(t){if(t instanceof o.FirebaseError)h.warn(t.message);else{const e=E.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});h.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function P(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var M;M="",y(new(0,r.Component)("platform-logger",(t=>new u(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new N(t)),"PRIVATE")),C(c,l,M),C(c,l,"esm2017"),C("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return i})),t(e.exports,"ComponentContainer",(function(){return u}));var r=s("ffjl9");class i{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const o="[DEFAULT]";
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
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),s.register("ffjl9",(function(n,r){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return u})),t(n.exports,"base64Decode",(function(){return c})),t(n.exports,"getDefaultEmulatorHost",(function(){return d})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return f})),t(n.exports,"getDefaultAppConfig",(function(){return p})),t(n.exports,"getExperimentalSetting",(function(){return g})),t(n.exports,"Deferred",(function(){return m})),t(n.exports,"createMockUserToken",(function(){return y})),t(n.exports,"getUA",(function(){return v})),t(n.exports,"isMobileCordova",(function(){return w})),t(n.exports,"isBrowserExtension",(function(){return b})),t(n.exports,"isReactNative",(function(){return E})),t(n.exports,"isIE",(function(){return T})),t(n.exports,"isSafari",(function(){return _})),t(n.exports,"isIndexedDBAvailable",(function(){return I})),t(n.exports,"validateIndexedDBOpenable",(function(){return S})),t(n.exports,"FirebaseError",(function(){return C})),t(n.exports,"ErrorFactory",(function(){return k})),t(n.exports,"isEmpty",(function(){return x})),t(n.exports,"deepEqual",(function(){return R})),t(n.exports,"querystring",(function(){return N})),t(n.exports,"querystringDecode",(function(){return D})),t(n.exports,"extractQuerystring",(function(){return L})),t(n.exports,"createSubscribe",(function(){return P})),t(n.exports,"getModularInstance",(function(){return F}));var i=s("4TNnu");
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
 */const o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,u=a?t[e+2]:0,c=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(h=64)),r.push(n[c],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const l=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return l()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},d=t=>{var e,n;return null===(n=null===(e=h())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},f=t=>{const e=d(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},p=()=>{var t;return null===(t=h())||void 0===t?void 0:t.config},g=t=>{var e;return null===(e=h())||void 0===e?void 0:e[`_${t}`]};
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
class m{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function y(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
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
 */function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function b(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){const t=v();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return!function(){var t;const n=null===(t=h())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(t){return!1}}function S(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(A,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new C(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const A=/\{\$([^}]+)}/g;
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
 */function x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function R(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(O(n)&&O(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function O(t){return null!==t&&"object"==typeof t}
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
function N(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function D(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function L(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function P(t,e){const n=new M(t,e);return n.subscribe.bind(n)}class M{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function U(){}
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
function F(t){return t&&t._delegate?t._delegate:t}})),s.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,c=[],l=!1,h=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var t=a(d);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return l})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
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
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,u={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=u[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}}function h(t){r.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return i}));var r=s("ekHjI");r=s("ekHjI");function i(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),u=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),u}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(u.get(e))return u.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return u.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>c(e,n)||t.get(e,n,r),has:(e,n)=>!!c(e,n)||t.has(e,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){l=t(l)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(s.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return a.set(r,e.sort?e.sort():[e]),p(r)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,l):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(u.has(t))return u.get(t);const e=f(t);return e!==t&&(u.set(t,e),c.set(e,t)),e}const g=t=>c.get(t)})),s.register("eyjy7",(function(e,n){t(e.exports,"GoogleAuthProvider",(function(){return s("8erlf").Q})),t(e.exports,"getAuth",(function(){return s("8erlf").n})),t(e.exports,"signInWithPopup",(function(){return s("8erlf").c})),s("1iO0g")})),s.register("1iO0g",(function(e,n){t(e.exports,"GoogleAuthProvider",(function(){return s("8erlf").Q})),t(e.exports,"getAuth",(function(){return s("8erlf").n})),t(e.exports,"signInWithPopup",(function(){return s("8erlf").c})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("8erlf")})),s.register("8erlf",(function(e,n){t(e.exports,"Q",(function(){return xt})),t(e.exports,"c",(function(){return ve})),t(e.exports,"n",(function(){return Ze}));var r=s("ffjl9"),i=s("ix4Jr"),o=s("7vF8m"),a=s("l73V3"),u=s("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,h=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,o.Logger)("@firebase/auth");function f(t,...e){d.logLevel<=o.LogLevel.ERROR&&d.error(`Auth (${i.SDK_VERSION}): ${t}`,...e)}
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
 */function p(t,...e){throw v(t,...e)}function g(t,...e){return v(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},l()),{[e]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(e,{appName:t.name})}function y(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h.create(t,...e)}function w(t,e,...n){if(!t)throw v(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function E(t,e){t||b(e)}
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
 */const T=new Map;function _(t){E(t instanceof Function,"Expected a class definition");let e=T.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T.set(t,e),e)}
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
function I(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
class k{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
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
 */function A(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},O=new k(3e4,6e4);
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
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return L(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),x.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))}))}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(e){if(e instanceof r.FirebaseError)throw e;p(t,"network-request-failed")}}async function P(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class U{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),O.get())}))}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
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
function j(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function B(t){return 1e3*Number(t)}function V(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.base64Decode)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(t){return f("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function q(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof r.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class ${_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class z{_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function H(t){var e;const n=t.auth,r=await t.getIdToken(),i=await q(t,async function(t,e){return D(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));w(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=(0,a.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const u=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const h=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==u?void 0:u.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new z(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
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
class K{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w(void 0!==t.idToken,"internal-error"),w(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=V(t);return w(e,"internal-error"),w(void 0!==e.exp,"internal-error"),w(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(t,e){const n=await L(t,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new K;return n&&(w("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(w("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(w("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return b("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function W(t,e){w("string"==typeof t||void 0===t,"internal-error",{appName:e})}class G{async getIdToken(t){const e=await q(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=(0,r.getModularInstance)(t),i=await n.getIdToken(e),s=V(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:j(B(s.auth_time)),issuedAtTime:j(B(s.iat)),expirationTime:j(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=(0,r.getModularInstance)(t);await H(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new G(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await q(this,async function(t,e){return D(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:E,providerData:T,stsTokenManager:_}=e;w(v&&_,t,"internal-error");const I=K.fromJSON(this.name,_);w("string"==typeof v,t,"internal-error"),W(l,t.name),W(h,t.name),w("boolean"==typeof b,t,"internal-error"),w("boolean"==typeof E,t,"internal-error"),W(d,t.name),W(f,t.name),W(p,t.name),W(g,t.name),W(m,t.name),W(y,t.name);const S=new G({uid:v,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(S.providerData=T.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new K;r.updateFromServerResponse(e);const i=new G({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await H(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=(0,a.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class Q{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Q.type="NONE";const J=Q;
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
 */function Y(t,e,n){return`firebase:${t}:${e}:${n}`}class X{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?G._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new X(_(J),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||_(J);const s=Y(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=G._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new X(i,t,n)):new X(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Y(this.userKey,r.apiKey,i),this.fullPersistenceKey=Y("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Z(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(st(e))return"Blackberry";if(ot(e))return"Webos";if(et(e))return"Safari";if((e.includes("chrome/")||nt(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function tt(t=(0,r.getUA)()){return/firefox\//i.test(t)}function et(t=(0,r.getUA)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nt(t=(0,r.getUA)()){return/crios\//i.test(t)}function rt(t=(0,r.getUA)()){return/iemobile/i.test(t)}function it(t=(0,r.getUA)()){return/android/i.test(t)}function st(t=(0,r.getUA)()){return/blackberry/i.test(t)}function ot(t=(0,r.getUA)()){return/webos/i.test(t)}function at(t=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ut(t=(0,r.getUA)()){return at(t)||it(t)||ot(t)||st(t)||/windows phone/i.test(t)||rt(t)}
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
function ct(t,e=[]){let n;switch(t){case"Browser":n=Z((0,r.getUA)());break;case"Worker":n=`${Z((0,r.getUA)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
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
 */class lt{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class ht{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await X.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await H(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.getModularInstance)(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return w(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.beforeStateQueue=new lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function dt(t){return(0,r.getModularInstance)(t)}class ft{get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.createSubscribe)((t=>this.observer=t))}}function pt(t,e,n){const r=dt(t);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=gt(e),{host:o,port:a}=function(t){const e=gt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:mt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:mt(e)}}}(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function gt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yt{toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function vt(t,e){return D(t,"POST","/v1/accounts:update",e)}
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
class wt extends yt{static _fromEmailAndPassword(t,e){return new wt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new wt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return vt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
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
 */async function bt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
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
 */class Et extends yt{static _fromParams(t){const e=new Et(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=(0,a.__rest)(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Et(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return bt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,bt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,bt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=(0,r.querystring)(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Tt={USER_NOT_FOUND:"user-not-found"};
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
class _t extends yt{static _fromVerification(t,e){return new _t({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new _t({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Tt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new _t({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class It{static parseLink(t){const e=function(t){const e=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).link,n=e?(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||e||t}(t);try{return new It(e)}catch(t){return null}}constructor(t){var e,n,i,s,o,a;const u=(0,r.querystringDecode)((0,r.extractQuerystring)(t)),c=null!==(e=u.apiKey)&&void 0!==e?e:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);w(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=u.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}}
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
class St{static credential(t,e){return wt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=It.parseLink(e);return w(n,"argument-error"),wt._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=St.PROVIDER_ID}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ct{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class kt extends Ct{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class At extends kt{static credential(t){return Et._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
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
class xt extends kt{static credential(t,e){return Et._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return xt.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
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
class Rt extends kt{static credential(t){return Et._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Rt.GITHUB_SIGN_IN_METHOD="github.com",Rt.PROVIDER_ID="github.com";
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
class Ot extends kt{static credential(t,e){return Et._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ot.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com",Ot.PROVIDER_ID="twitter.com";
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
class Nt{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await G._fromIdTokenResponse(t,n,r),s=Dt(n);return new Nt({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Dt(n);return new Nt({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Dt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Lt extends r.FirebaseError{static _fromErrorAndOperation(t,e,n,r){return new Lt(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Lt.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Pt(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Lt._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Mt(t,e,n=!1){const r=await q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}
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
async function Ut(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await q(t,Pt(r,i,e,t),n);w(s.idToken,r,"internal-error");const o=V(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&p(r,"user-mismatch"),t}}
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
 */async function Ft(t,e,n=!1){const r="signIn",i=await Pt(t,r,e),s=await Nt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}new WeakMap;const jt="__sak";
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
 */class Bt{_isAvailable(){try{return this.storage?(this.storage.setItem(jt,"1"),this.storage.removeItem(jt),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class Vt extends Bt{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,r.getUA)();return et(t)||at(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ut(),this._shouldAllowMigration=!0}}Vt.type="LOCAL";const qt=Vt;
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
 */class $t extends Bt{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}$t.type="SESSION";const zt=$t;
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
class Ht{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ht(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Kt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ht.receivers=[];class Wt{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Kt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Gt(){return window}
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
function Qt(){return void 0!==Gt().WorkerGlobalScope&&"function"==typeof Gt().importScripts}
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
const Jt="firebaseLocalStorageDb",Yt="firebaseLocalStorage",Xt="fbase_key";class Zt{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function te(t,e){return t.transaction([Yt],e?"readwrite":"readonly").objectStore(Yt)}function ee(){const t=indexedDB.open(Jt,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Yt,{keyPath:Xt})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Yt)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Jt);return new Zt(t).toPromise()}(),e(await ee()))}))}))}async function ne(t,e,n){const r=te(t,!0).put({[Xt]:e,value:n});return new Zt(r).toPromise()}function re(t,e){const n=te(t,!0).delete(e);return new Zt(n).toPromise()}class ie{async _openDb(){return this.db||(this.db=await ee()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(Qt()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ee();return await ne(t,jt,"1"),await re(t,jt),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ne(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=te(t,!1).get(e),r=await new Zt(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>re(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=te(t,!1).getAll();return new Zt(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ie.type="LOCAL";const se=ie;
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
 */function oe(t){return new Promise(((e,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ae(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
ae("rcb"),new k(3e4,6e4);
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
const ue="recaptcha";async function ce(t,e,n){var r;const i=await n.verify();try{let s;if(w("string"==typeof i,t,"argument-error"),w(n.type===ue,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){w("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;w(n,t,"missing-multi-factor-info");const o=await function(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class le{verifyPhoneNumber(t,e){return ce(this.auth,t,(0,r.getModularInstance)(e))}static credential(t,e){return _t._fromVerification(t,e)}static credentialFromResult(t){const e=t;return le.credentialFromTaggedObject(e)}static credentialFromError(t){return le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?_t._fromTokenResponse(e,n):null}constructor(t){this.providerId=le.PROVIDER_ID,this.auth=dt(t)}}
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
function he(t,e){return e?_(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */le.PROVIDER_ID="phone",le.PHONE_SIGN_IN_METHOD="phone";class de extends yt{_getIdTokenResponse(t){return bt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return bt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return bt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function fe(t){return Ft(t.auth,new de(t),t.bypassAuthState)}function pe(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Ut(n,new de(t),t.bypassAuthState)}async function ge(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Mt(n,new de(t),t.bypassAuthState)}
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
 */class me{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fe;case"linkViaPopup":case"linkViaRedirect":return ge;case"reauthViaPopup":case"reauthViaRedirect":return pe;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const ye=new k(2e3,1e4);async function ve(t,e,n){const r=dt(t);y(t,e,Ct);const i=he(r,n);return new we(r,"signInViaPopup",e,i).executeNotNull()}class we extends me{async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ye.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}}we.currentPopupAction=null;
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
const be=new Map;class Ee extends me{async execute(){let t=be.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Ie(e),r=_e(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}be.set(this.auth._key(),t)}return this.bypassAuthState||be.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Te(t,e){be.set(t._key(),e)}function _e(t){return _(t._redirectPersistence)}function Ie(t){return Y("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function Se(t,e,n=!1){const r=dt(t),i=he(r,e),s=new Ee(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Ce{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ae(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ae(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ke(t))}saveEventToCache(t){this.cachedEventUids.add(ke(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ke(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ae({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const xe=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Re=/^https?/;async function Oe(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return D(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Ne(t))return}catch(t){}p(t,"unauthorized-domain")}function Ne(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Re.test(n))return!1;if(xe.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const De=new k(3e4,6e4);function Le(){const t=Gt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Pe=null;function Me(t){return Pe=Pe||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Le(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Le(),n(g(t,"network-request-failed"))},timeout:De.get()})}if(null===(i=null===(r=Gt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Gt().gapi)||void 0===s?void 0:s.load)){const e=ae("iframefcb");return Gt()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},oe(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Pe=null,t}))}(t),Pe}
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
 */const Ue=new k(5e3,15e3),Fe={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},je=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Be(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:i.SDK_VERSION},o=je.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.querystring)(s).slice(1)}`}
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
const Ve={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qe{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function $e(t,e,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},Ve),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.getUA)().toLowerCase();n&&(u=nt(l)?"_blank":n),tt(l)&&(e=e||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=(0,r.getUA)()){var e;return at(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==u)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(e||"",u),new qe(null);const d=window.open(e||"",u,h);w(d,t,"popup-blocked");try{d.focus()}catch(t){}return new qe(d)}const ze="emulator/auth/handler";function He(t,e,n,s,o,a){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(e instanceof Ct){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,r.isEmpty)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof kt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const t of Object.keys(c))void 0===c[t]&&delete c[t];return`${function({config:t}){return t.emulator?A(t,ze):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${(0,r.querystring)(c).slice(1)}`}const Ke="webStorageSupport";const We=class{async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return $e(t,He(t,e,n,I(),r),Kt())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=He(t,e,n,I(),r),Gt().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Me(t),n=Gt().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:Be(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fe,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=Gt().setTimeout((()=>{r(i)}),Ue.get());function o(){Gt().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new Ce(t);return e.register("authEvent",(e=>{w(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ke,{type:Ke},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Oe(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ut()||et()||at()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Se,this._overrideRedirectResult=Te}};var Ge="@firebase/auth",Qe="0.21.1";
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
class Je{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const Ye=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let Xe=null;function Ze(t=(0,i.getApp)()){const e=(0,i._getProvider)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=(0,i._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=e?e:{}))return t;p(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:We,persistence:[se,qt,zt]}),s=(0,r.getExperimentalSetting)("authTokenSyncURL");if(s){const t=(o=s,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Ye)return;const r=null==e?void 0:e.token;Xe!==r&&(Xe=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){(0,r.getModularInstance)(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){(0,r.getModularInstance)(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var o;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&pt(n,`http://${a}`),n}var tn;tn="Browser",(0,i._registerComponent)(new(0,u.Component)("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{w(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),w(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:tn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ct(tn)},o=new ht(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,u.Component)("auth-internal",(t=>{const e=dt(t.getProvider("auth").getImmediate());return new Je(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(Ge,Qe,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tn)),(0,i.registerVersion)(Ge,Qe,"esm2017")})),s.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create})),s.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"collection",(function(){return s("3PjDZ").collection})),t(e.exports,"getDocs",(function(){return s("3PjDZ").getDocs})),t(e.exports,"setDoc",(function(){return s("3PjDZ").setDoc})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"deleteDoc",(function(){return s("3PjDZ").deleteDoc})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"collection",(function(){return js})),t(e.exports,"doc",(function(){return Bs})),t(e.exports,"getFirestore",(function(){return Xs})),t(e.exports,"getDocs",(function(){return Lo})),t(e.exports,"setDoc",(function(){return Po})),t(e.exports,"deleteDoc",(function(){return Mo}));var r=s("ix4Jr"),i=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),u=s("lW9Fu");s("4TNnu");const c="@firebase/firestore";
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
 */class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
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
let h="9.16.0";
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
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||v()}function b(t,e){return t}
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class _{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(l.UNAUTHENTICATED)))}shutdown(){}}class C{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class k{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new l(t)}constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class A{I(){return this.g?this.g():(w(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=l.FIRST_PARTY,this.p=new Map}}class x{getToken(){return Promise.resolve(new A(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}}class R{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.A=t.token,new R(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
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
function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class D{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class M{static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new M(0,0))}static max(){return new U(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class F{get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class j extends F{construct(t,e,n){return new j(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new j(e)}static emptyPath(){return new j([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends F{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
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
 */class q{static fromPath(t){return new q(j.fromString(t))}static fromName(t){return new q(j.fromString(t).popFirst(5))}static empty(){return new q(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===j.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return j.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new j(t.slice()))}constructor(t){this.path=t}}
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
 */class ${constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}$.UNKNOWN_ID=-1;function z(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new K(i,q.empty(),e)}function H(t){return new K(t.readTime,t.key,-1)}class K{static min(){return new K(U.min(),q.empty(),-1)}static max(){return new K(U.max(),q.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function W(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
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
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function J(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==G)throw t;p("LocalStore","Unexpectedly lost primary lease")}
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
 */class Y{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.reject(e)}static resolve(t){return new Y(((e,n)=>{e(t)}))}static reject(t){return new Y(((e,n)=>{n(t)}))}static waitFor(t){return new Y(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next((t=>t?Y.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Y(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Y(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function X(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class Z{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}Z.at=-1;
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
class tt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class et{static empty(){return new et("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof et&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function nt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function it(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function st(t){return null==t}function ot(t){return 0===t&&1/t==-1/0}function at(t){return"number"==typeof t&&Number.isInteger(t)&&!ot(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */let ut=Symbol.iterator;
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
 */class ct{static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[ut](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ct.EMPTY_BYTE_STRING=new ct("");const lt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(w(!!t),"string"==typeof t){let e=0;const n=lt.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
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
 */function pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return pt(e)?gt(e):e}function mt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
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
 */const yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pt(t)?4:Ot(t)?9007199254740991:10:v()}function wt(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),r=ht(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,ft(t.bytesValue).isEqual(ft(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),r=dt(e.doubleValue);return n===r?ot(n)===ot(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(nt(n)!==nt(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!wt(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function bt(t,e){return void 0!==(t.values||[]).find((t=>wt(t,e)))}function Et(t,e){if(t===e)return 0;const n=vt(t),r=vt(e);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),r=dt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Tt(t.timestampValue,e.timestampValue);case 4:return Tt(mt(t),mt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),r=ft(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=L(n[t],r[t]);if(0!==e)return e}return L(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(dt(t.latitude),dt(e.latitude));return 0!==n?n:L(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Et(n[t],r[t]);if(e)return e}return L(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===yt.mapValue&&e===yt.mapValue)return 0;if(t===yt.mapValue)return 1;if(e===yt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=L(r[t],s[t]);if(0!==e)return e;const o=Et(n[r[t]],i[s[t]]);if(0!==o)return o}return L(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Tt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=ht(t),r=ht(e),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function _t(t){return It(t)}function It(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=It(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${It(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function St(t){return!!t&&"integerValue"in t}function Ct(t){return!!t&&"arrayValue"in t}function kt(t){return!!t&&"nullValue"in t}function At(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xt(t){return!!t&&"mapValue"in t}function Rt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Rt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ot(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Nt{constructor(t,e){this.position=t,this.inclusive=e}}function Dt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):Et(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Lt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}
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
 */class Pt{}class Mt extends Pt{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new zt(t,e,n):"array-contains"===e?new Gt(t,n):"in"===e?new Qt(t,n):"not-in"===e?new Jt(t,n):"array-contains-any"===e?new Yt(t,n):new Mt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ht(t,n):new Kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Et(e,this.value)):null!==e&&vt(this.value)===vt(e)&&this.matchesComparison(Et(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Ut extends Pt{static create(t,e){return new Ut(t,e)}matches(t){return Ft(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function Ft(t){return"and"===t.op}function jt(t){return Bt(t)&&Ft(t)}function Bt(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Vt(t){if(t instanceof Mt)return t.field.canonicalString()+t.op.toString()+_t(t.value);if(jt(t))return t.filters.map((t=>Vt(t))).join(",");{const e=t.filters.map((t=>Vt(t))).join(",");return`${t.op}(${e})`}}function qt(t,e){return t instanceof Mt?(n=t,(r=e)instanceof Mt&&n.op===r.op&&n.field.isEqual(r.field)&&wt(n.value,r.value)):t instanceof Ut?function(t,e){return e instanceof Ut&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&qt(n,e.filters[r])),!0)}(t,e):void v();var n,r}function $t(t){return t instanceof Mt?`${(e=t).field.canonicalString()} ${e.op} ${_t(e.value)}`:t instanceof Ut?function(t){return t.op.toString()+" {"+t.getFilters().map($t).join(" ,")+"}"}(t):"Filter";var e}class zt extends Mt{matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}}class Ht extends Mt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Wt("in",e)}}class Kt extends Mt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Wt("not-in",e)}}function Wt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class Gt extends Mt{matches(t){const e=t.data.field(this.field);return Ct(e)&&bt(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Qt extends Mt{matches(t){const e=t.data.field(this.field);return null!==e&&bt(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Jt extends Mt{matches(t){if(bt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!bt(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Yt extends Mt{matches(t){const e=t.data.field(this.field);return!(!Ct(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>bt(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
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
 */class Xt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class te{insert(t,e){return new te(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new te(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ee(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ee(this.root,t,this.comparator,!1)}getReverseIterator(){return new ee(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ee(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}}class ee{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class ne{copy(t,e,n,r,i){return new ne(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ne.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ne.RED,this.left=null!=r?r:ne.EMPTY,this.right=null!=i?i:ne.EMPTY,this.size=this.left.size+1+this.right.size}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1,ne.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class re{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ie(this.data.getIterator())}getIteratorFrom(t){return new ie(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof re))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new re(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new te(this.comparator)}}class ie{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class se{static empty(){return new se([])}unionWith(t){let e=new re(V.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new se(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(V.comparator)}}
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
 */class oe{static empty(){return new oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rt(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Rt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());xt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];xt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){rt(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new oe(Rt(this.value))}constructor(t){this.value=t}}function ae(t){const e=[];return rt(t.fields,((t,n)=>{const r=new V([t]);if(xt(n)){const t=ae(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new se(e)
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
 */}class ue{static newInvalidDocument(t){return new ue(t,0,U.min(),U.min(),U.min(),oe.empty(),0)}static newFoundDocument(t,e,n,r){return new ue(t,1,e,U.min(),n,r,0)}static newNoDocument(t,e){return new ue(t,2,e,U.min(),U.min(),oe.empty(),0)}static newUnknownDocument(t,e){return new ue(t,3,e,U.min(),U.min(),oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ue&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
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
 */class ce{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function le(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ce(t,e,n,r,i,s,o)}function he(t){const e=b(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Vt(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),st(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>_t(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>_t(t))).join(",")),e.ft=t}return e.ft}function de(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qt(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lt(t.startAt,e.startAt)&&Lt(t.endAt,e.endAt)}function fe(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class pe{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ge(t,e,n,r,i,s,o,a){return new pe(t,e,n,r,i,s,o,a)}function me(t){return new pe(t)}function ye(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ve(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function we(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function be(t){return null!==t.collectionGroup}function Ee(t){const e=b(t);if(null===e.dt){e.dt=[];const t=we(e),n=ve(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Xt(t)),e.dt.push(new Xt(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xt(V.keyField(),t))}}}return e.dt}function Te(t){const e=b(t);if(!e._t)if("F"===e.limitType)e._t=le(e.path,e.collectionGroup,Ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ee(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Xt(n.field,e))}const n=e.endAt?new Nt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Nt(e.startAt.position,e.startAt.inclusive):null;e._t=le(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function _e(t,e,n){return new pe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ie(t,e){return de(Te(t),Te(e))&&t.limitType===e.limitType}function Se(t){return`${he(Te(t))}|lt:${t.limitType}`}function Ce(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>$t(t))).join(", ")}]`),st(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>_t(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>_t(t))).join(",")),`Target(${e})`}(Te(t))}; limitType=${t.limitType})`}function ke(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ee(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Dt(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Ee(n),r)||n.endAt&&!function(t,e,n){const r=Dt(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Ee(n),r)));var n,r}function Ae(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xe(t){return(e,n)=>{let r=!1;for(const i of Ee(t)){const t=Re(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Re(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Et(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */function Oe(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ot(e)?"-0":e}}function Ne(t){return{integerValue:""+t}}function De(t,e){return at(e)?Ne(e):Oe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Le{constructor(){this._=void 0}}function Pe(t,e,n){return t instanceof Fe?je(t,e):t instanceof Be?Ve(t,e):n}function Me(t,e){var n,r;return t instanceof qe?St(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class Ue extends Le{}class Fe extends Le{constructor(t){super(),this.elements=t}}function je(t,e){const n=ze(e);for(const e of t.elements)n.some((t=>wt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Be extends Le{constructor(t){super(),this.elements=t}}function Ve(t,e){let n=ze(e);for(const e of t.elements)n=n.filter((t=>!wt(t,e)));return{arrayValue:{values:n}}}class qe extends Le{constructor(t,e){super(),this.yt=t,this.gt=e}}function $e(t){return dt(t.integerValue||t.doubleValue)}function ze(t){return Ct(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class He{constructor(t,e){this.version=t,this.transformResults=e}}class Ke{static none(){return new Ke}static exists(t){return new Ke(void 0,t)}static updateTime(t){return new Ke(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function We(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ge{}function Qe(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new on(t.key,Ke.none()):new tn(t.key,t.data,Ke.none());{const n=t.data,r=oe.empty();let i=new re(V.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new en(t.key,r,new se(i.toArray()),Ke.none())}}function Je(t,e,n){var r;t instanceof tn?function(t,e,n){const r=t.value.clone(),i=rn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof en?function(t,e,n){if(!We(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=rn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(nn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Ye(t,e,n,r){return t instanceof tn?function(t,e,n,r){if(!We(t.precondition,e))return n;const i=t.value.clone(),s=sn(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof en?function(t,e,n,r){if(!We(t.precondition,e))return n;const i=sn(t.fieldTransforms,r,e),s=e.data;return s.setAll(nn(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,We(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Xe(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Me(r.transform,t||null);null!=i&&(null===n&&(n=oe.empty()),n.set(r.field,i))}return n||null}function Ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&P(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Fe&&r instanceof Fe||n instanceof Be&&r instanceof Be?P(n.elements,r.elements,wt):n instanceof qe&&r instanceof qe?wt(n.gt,r.gt):n instanceof Ue&&r instanceof Ue);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class tn extends Ge{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class en extends Ge{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function nn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function rn(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Pe(o,a,n[i]))}return r}function sn(t,e,n){const r=new Map;for(const a of t){const t=a.transform,u=n.data.field(a.field);r.set(a.field,(s=u,o=e,(i=t)instanceof Ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof Fe?je(i,s):i instanceof Be?Ve(i,s):function(t,e){const n=Me(t,e),r=$e(n)+$e(t.gt);return St(n)&&St(t.gt)?Ne(r):Oe(t.yt,r)}(i,s)))}var i,s,o;return r}class on extends Ge{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class an extends Ge{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class un{constructor(t){this.count=t}}
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
 */var cn,ln;function hn(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function dn(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case cn.OK:return E.OK;case cn.CANCELLED:return E.CANCELLED;case cn.UNKNOWN:return E.UNKNOWN;case cn.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case cn.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case cn.INTERNAL:return E.INTERNAL;case cn.UNAVAILABLE:return E.UNAVAILABLE;case cn.UNAUTHENTICATED:return E.UNAUTHENTICATED;case cn.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case cn.NOT_FOUND:return E.NOT_FOUND;case cn.ALREADY_EXISTS:return E.ALREADY_EXISTS;case cn.PERMISSION_DENIED:return E.PERMISSION_DENIED;case cn.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case cn.ABORTED:return E.ABORTED;case cn.OUT_OF_RANGE:return E.OUT_OF_RANGE;case cn.UNIMPLEMENTED:return E.UNIMPLEMENTED;case cn.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(ln=cn||(cn={}))[ln.OK=0]="OK",ln[ln.CANCELLED=1]="CANCELLED",ln[ln.UNKNOWN=2]="UNKNOWN",ln[ln.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ln[ln.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ln[ln.NOT_FOUND=5]="NOT_FOUND",ln[ln.ALREADY_EXISTS=6]="ALREADY_EXISTS",ln[ln.PERMISSION_DENIED=7]="PERMISSION_DENIED",ln[ln.UNAUTHENTICATED=16]="UNAUTHENTICATED",ln[ln.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ln[ln.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ln[ln.ABORTED=10]="ABORTED",ln[ln.OUT_OF_RANGE=11]="OUT_OF_RANGE",ln[ln.UNIMPLEMENTED=12]="UNIMPLEMENTED",ln[ln.INTERNAL=13]="INTERNAL",ln[ln.UNAVAILABLE=14]="UNAVAILABLE",ln[ln.DATA_LOSS=15]="DATA_LOSS";
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
class fn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){rt(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return it(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const pn=new te(q.comparator);function gn(){return pn}const mn=new te(q.comparator);function yn(...t){let e=mn;for(const n of t)e=e.insert(n.key,n);return e}function vn(t){let e=mn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function wn(){return En()}function bn(){return En()}function En(){return new fn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Tn=new te(q.comparator),_n=new re(q.comparator);function In(...t){let e=_n;for(const n of t)e=e.add(n);return e}const Sn=new re(L);function Cn(){return Sn}
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
 */class kn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new kn(U.min(),r,Cn(),gn(),In())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class An{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,In(),In(),In())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class xn{constructor(t,e,n,r){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=r}}class Rn{constructor(t,e){this.targetId=t,this.Et=e}}class On{constructor(t,e,n=ct.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Nn{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=In(),e=In(),n=In();return this.Rt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new An(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Pn()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Pn(),this.bt=ct.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class Dn{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,r=this.Yt(e);if(r){const t=r.target;if(fe(t))if(0===n){const n=new q(t.path);this.Qt(e,n,ue.newNoDocument(n,U.min()))}else w(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&fe(i.target)){const e=new q(i.target.path);null!==this.Lt.get(e)||this.te(r,e)||this.Qt(r,e,ue.newNoDocument(e,t))}n.St&&(e.set(r,n.Ct()),n.xt())}}));let n=In();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const r=new kn(t,e,this.Ut,this.Lt,n);return this.Lt=gn(),this.qt=Ln(),this.Ut=new re(L),r}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,e)?r.Nt(e,1):r.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Nn,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new re(L),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Nn),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=gn(),this.qt=Ln(),this.Ut=new re(L)}}function Ln(){return new te(q.comparator)}function Pn(){return new te(q.comparator)}
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
 */const Mn={asc:"ASCENDING",desc:"DESCENDING"},Un={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fn={and:"AND",or:"OR"};class jn{constructor(t,e){this.databaseId=t,this.wt=e}}function Bn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vn(t,e){return t.wt?e.toBase64():e.toUint8Array()}function qn(t,e){return Bn(t,e.toTimestamp())}function $n(t){return w(!!t),U.fromTimestamp(function(t){const e=ht(t);return new M(e.seconds,e.nanos)}(t))}function zn(t,e){return(n=t,new j(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Hn(t){const e=j.fromString(t);return w(lr(e)),e}function Kn(t,e){return zn(t.databaseId,e.path)}function Wn(t,e){const n=Hn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Yn(n))}function Gn(t,e){return zn(t.databaseId,e)}function Qn(t){const e=Hn(t);return 4===e.length?j.emptyPath():Yn(e)}function Jn(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Xn(t,e,n){return{name:Kn(t,e),fields:n.value.mapValue.fields}}function Zn(t,e){let n;if(e instanceof tn)n={update:Xn(t,e.key,e.value)};else if(e instanceof on)n={delete:Kn(t,e.key)};else if(e instanceof en)n={update:Xn(t,e.key,e.data),updateMask:cr(e.fieldMask)};else{if(!(e instanceof an))return v();n={verify:Kn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ue)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Be)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof qe)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:qn(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function tr(t,e){return{documents:[Gn(t,e.path)]}}function er(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Gn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return ur(Ut.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:or((e=t).field),direction:ir(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,u=e.limit,a.wt||st(u)?u:{value:u});var a,u,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function nr(t){let e=Qn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=rr(t);return e instanceof Ut&&jt(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Xt(ar((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,st(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Nt(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Nt(n,e)}(n.endAt)),ge(e,i,o,s,a,"F",u,c)}function rr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ar(t.unaryFilter.field);return Mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ar(t.unaryFilter.field);return Mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ar(t.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ar(t.unaryFilter.field);return Mt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Mt.create(ar(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Ut.create(e.compositeFilter.filters.map((t=>rr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function ir(t){return Mn[t]}function sr(t){return Un[t]}function or(t){return{fieldPath:t.canonicalString()}}function ar(t){return V.fromServerFormat(t.fieldPath)}function ur(t){return t instanceof Mt?function(t){if("=="===t.op){if(At(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(kt(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(At(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(kt(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:sr(t.op),value:t.value}}}(t):t instanceof Ut?function(t){const e=t.getFilters().map((t=>ur(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Fn[n]),filters:e}};var n}(t):v()}function cr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function lr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const hr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fr=dr;
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
class pr{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Je(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=bn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Qe(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),In())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,((t,e)=>Ze(t,e)))&&P(this.baseMutations,t.baseMutations,((t,e)=>Ze(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class gr{static from(t,e,n){w(t.mutations.length===n.length);let r=Tn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new gr(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
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
 */class mr{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
 */class yr{withSequenceNumber(t){return new yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,r,i=U.min(),s=U.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
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
 */class vr{constructor(t){this.ie=t}}function wr(t){const e=nr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_e(e,e.limit,"L"):e}
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
 */class br{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),ot(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(ft(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Ot(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):v()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),q.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}br.Ie=new br;
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
class Er{addToCollectionParentIndex(t,e){return this.Je.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(K.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(K.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}constructor(){this.Je=new Tr}}class Tr{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new re(j.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new re(j.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class _r{static withCacheSize(t){return new _r(t,_r.DEFAULT_COLLECTION_PERCENTILE,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */_r.DEFAULT_COLLECTION_PERCENTILE=10,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_r.DEFAULT=new _r(41943040,_r.DEFAULT_COLLECTION_PERCENTILE,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_r.DISABLED=new _r(-1,0,0);
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
class Ir{next(){return this.bn+=2,this.bn}static Pn(){return new Ir(0)}static vn(){return new Ir(-1)}constructor(t){this.bn=t}}
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
class Sr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ue.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new fn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class Cr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class kr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ye(n.mutation,t,se.empty(),M.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,In()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=In()){const r=wn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=yn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=wn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,In())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=gn();const s=En(),o=En();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof en)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ye(o.mutation,e,o.mutation.getFieldMask(),M.now())):s.set(e.key,se.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Cr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=En();let r=new te(((t,e)=>t-e)),i=In();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||se.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||In()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=bn();u.forEach((t=>{if(!i.has(t)){const r=Qe(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,q.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):be(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Y.resolve(wn());let o=-1,a=i;return s.next((e=>Y.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Y.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,In()))).next((t=>({batchId:o,changes:vn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((t=>{let e=yn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=yn();return this.indexManager.getCollectionParents(t,r).next((s=>Y.forEach(s,(s=>{const o=(a=e,u=s.child(r),new pe(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ue.newInvalidDocument(n)))}));let n=yn();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&Ye(s.mutation,i,se.empty(),M.now()),ke(e,i)&&(n=n.insert(r,i))})),n}))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
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
 */class Ar{getBundleMetadata(t,e){return Y.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:$n(n.createTime)}),Y.resolve()}getNamedQuery(t,e){return Y.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,{name:(n=e).name,query:wr(n.bundledQuery),readTime:$n(n.readTime)}),Y.resolve();var n}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
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
 */class xr{getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=wn();return Y.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.oe(t,e,r)})),Y.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const r=wn(),i=e.length+1,s=new q(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Y.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new te(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=wn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=wn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Y.resolve(o)}oe(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new mr(e,n));let i=this.es.get(e);void 0===i&&(i=In(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}constructor(){this.overlays=new te(q.comparator),this.es=new Map}}
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
 */class Rr{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Or(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Or(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new q(new j([])),n=new Or(e,t),r=new Or(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new q(new j([])),n=new Or(e,t),r=new Or(e,t+1);let i=In();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Or(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new re(Or.ss),this.rs=new re(Or.os)}}class Or{static ss(t,e){return q.comparator(t.key,e.key)||L(t._s,e._s)}static os(t,e){return L(t._s,e._s)||q.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
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
 */class Nr{checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pr(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.gs=this.gs.add(new Or(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(t,e){return Y.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Or(e,0),r=new Or(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new re(L);return e.forEach((t=>{const e=new Or(t,0),r=new Or(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const s=new Or(new q(i),0);let o=new re(L);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),s),Y.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(e.mutations,(r=>{const i=new Or(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Or(e,0),r=this.gs.firstAfterOrEqual(n);return Y.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new re(Or.ss)}}
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
 */class Dr{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(e))}getEntries(t,e){let n=gn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ue.newInvalidDocument(t))})),Y.resolve(n)}getAllFromCollection(t,e,n){let r=gn();const i=new q(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||W(H(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}As(t,e){return Y.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Lr(this)}getSize(t){return Y.resolve(this.size)}constructor(t){this.Es=t,this.docs=new te(q.comparator),this.size=0}}class Lr extends Sr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),Y.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
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
 */class Pr{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Y.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ir(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.Dn(e),Y.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Y.waitFor(i).next((()=>r))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new fn((t=>he(t)),de),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Rr,this.targetCount=0,this.vs=Ir.Pn()}}
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
 */class Mr{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Nr(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new Ur(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return Y.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Z(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Pr(this),this.indexManager=new Er,this.remoteDocumentCache=new Dr((t=>this.referenceDelegate.xs(t))),this.yt=new vr(e),this.Ns=new Ar(this.yt)}}class Ur extends Q{constructor(t){super(),this.currentSequenceNumber=t}}class Fr{static Bs(t){return new Fr(t)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Y.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,(n=>{const r=q.fromPath(n);return this.qs(t,r).next((t=>{t||e.removeEntry(r,U.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return Y.or([()=>Y.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new Rr,this.$s=null}}
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
class jr{static Ci(t,e){let n=In(),r=In();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new jr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}}
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
 */class Br{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(ye(e))return Y.resolve(null);let n=Te(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=_e(e,null,"F"),n=Te(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=In(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,_e(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,r){return ye(e)||r.isEqual(U.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const s=this.Fi(e,i);return this.$i(e,s,n,r)?this.Mi(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ce(e)),this.Bi(t,s,e,z(r,-1)))}))}Fi(t,e){let n=new re(xe(t));return e.forEach(((e,r)=>{ke(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Ce(e)),this.Ni.getDocumentsMatchingQuery(t,e,K.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
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
 */class Vr{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,r){this.persistence=t,this.Li=e,this.yt=r,this.qi=new te(L),this.Ui=new fn((t=>he(t)),de),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function qr(t,e,n,r){return new Vr(t,e,n,r)}async function $r(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=In();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function zr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Hr(t,e,n){let r=In(),i=In();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=gn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(U.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function Kr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Wr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,Y.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new yr(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.qi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Gr(t,e,n){const r=b(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!X(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Qr(t,e,n){const r=b(t);let i=U.min(),s=In();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=b(t),i=r.Ui.get(n);return void 0!==i?Y.resolve(r.qi.get(i)):r.Cs.getTargetData(e,n)}(r,t,Te(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:U.min(),n?s:In()))).next((t=>(Jr(r,Ae(e),t),{documents:t,Hi:s})))))}function Jr(t,e,n){let r=t.Ki.get(e)||U.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class Yr{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Cn()}}class Xr{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Yr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new Yr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Zr{Ur(t){}shutdown(){}}
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
 */class ti{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
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
 */const ei={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class ni{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
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
 */class ri extends class{get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=ei[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,r){return new Promise(((i,s)=>{const o=new(0,u.XhrIo);o.setWithCredentials(!0),o.listenOnce(u.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case u.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case u.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,u.createWebChannelTransport)(),s=(0,u.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,u.FetchXmlHttpFactory)({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");p("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,h=!1;const d=new ni({Hr:t=>{h?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),c.open(),l=!0),p("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,u.WebChannel.EventType.OPEN,(()=>{h||p("Connection","WebChannel transport opened.")})),f(c,u.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.io())})),f(c,u.WebChannel.EventType.ERROR,(t=>{h||(h=!0,m("Connection","WebChannel transport errored:",t),d.io(new T(E.UNAVAILABLE,"The operation could not be completed")))})),f(c,u.WebChannel.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];w(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=cn[t];if(void 0!==e)return dn(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.io(new T(e,n)),c.close()}else p("Connection","WebChannel received:",n),d.ro(n)}})),f(s,u.Event.STAT_EVENT,(t=>{t.stat===u.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===u.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function ii(){return"undefined"!=typeof document?document:null}
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
 */function si(t){return new jn(t,!0)}class oi{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
 */class ai{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new oi(t,e)}}class ui extends ai{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.wt?(w(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?E.UNKNOWN:dn(t.code);return new T(e,t.message||"")}(a);n=new On(i,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wn(t,r.document.name),s=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):U.min(),a=new oe({mapValue:{fields:r.document.fields}}),u=ue.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new xn(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wn(t,r.document),s=r.readTime?$n(r.readTime):U.min(),o=ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wn(t,r.document),s=r.removedTargetIds||[];n=new xn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new un(r),s=t.targetId;n=new Rn(s,i)}}var r;return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return U.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?U.min():e.readTime?$n(e.readTime):U.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Jn(this.yt),e.addTarget=function(t,e){let n;const r=e.target;return n=fe(r)?{documents:tr(t,r)}:{query:er(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Vn(t,e.resumeToken):e.snapshotVersion.compareTo(U.min())>0&&(n.readTime=Bn(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Jn(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.yt=i}}class ci extends ai{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?$n(t.updateTime):$n(e);return n.isEqual(U.min())&&(n=$n(e)),new He(n,t.transformResults||[])}(t,n)))):[]),i=$n(t.commitTime);return this.listener.Zo(i,r)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Jn(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Zn(this.yt,t)))};this.Bo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.yt=i,this.Jo=!1}}
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
 */class li extends class{}{su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=r,this.nu=!1}}class hi{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(e),this.ou=!1):p("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
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
 */class di{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{Ei(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e._u.add(4),await pi(e),e.gu.set("Unknown"),e._u.delete(4),await fi(e)}(this))}))})),this.gu=new hi(n,r)}}async function fi(t){if(Ei(t))for(const e of t.wu)await e(!0)}async function pi(t){for(const e of t.wu)await e(!1)}function gi(t,e){const n=b(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),bi(n)?wi(n):ji(n).ko()&&yi(n,e))}function mi(t,e){const n=b(t),r=ji(n);n.du.delete(e),r.ko()&&vi(n,e),0===n.du.size&&(r.ko()?r.Fo():Ei(n)&&n.gu.set("Unknown"))}function yi(t,e){t.yu.Ot(e.targetId),ji(t).zo(e)}function vi(t,e){t.yu.Ot(e),ji(t).Ho(e)}function wi(t){t.yu=new Dn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ji(t).start(),t.gu.uu()}function bi(t){return Ei(t)&&!ji(t).No()&&t.du.size>0}function Ei(t){return 0===b(t)._u.size}function Ti(t){t.yu=void 0}async function _i(t){t.du.forEach(((e,n)=>{yi(t,e)}))}async function Ii(t,e){Ti(t),bi(t)?(t.gu.hu(e),wi(t)):t.gu.set("Unknown")}async function Si(t,e,n){if(t.gu.set("Online"),e instanceof On&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.du.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.du.delete(r),t.yu.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ci(t,n)}else if(e instanceof xn?t.yu.Kt(e):e instanceof Rn?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(U.min()))try{const e=await zr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(r);i&&t.du.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),vi(t,e);const r=new yr(n.target,e,1,n.sequenceNumber);yi(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Ci(t,e)}}async function Ci(t,e,n){if(!X(e))throw e;t._u.add(1),await pi(t),t.gu.set("Offline"),n||(n=()=>zr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fi(t)}))}function ki(t,e){return e().catch((n=>Ci(t,n,e)))}async function Ai(t){const e=b(t),n=Bi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;xi(e);)try{const t=await Kr(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,Ri(e,t)}catch(t){await Ci(e,t)}Oi(e)&&Ni(e)}function xi(t){return Ei(t)&&t.fu.length<10}function Ri(t,e){t.fu.push(e);const n=Bi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Oi(t){return Ei(t)&&!Bi(t).No()&&t.fu.length>0}function Ni(t){Bi(t).start()}async function Di(t){Bi(t).eu()}async function Li(t){const e=Bi(t);for(const n of t.fu)e.Xo(n.mutations)}async function Pi(t,e,n){const r=t.fu.shift(),i=gr.from(r,e,n);await ki(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ai(t)}async function Mi(t,e){e&&Bi(t).Yo&&await async function(t,e){if(hn(n=e.code)&&n!==E.ABORTED){const n=t.fu.shift();Bi(t).Mo(),await ki(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ai(t)}var n}(t,e),Oi(t)&&Ni(t)}async function Ui(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n._u.add(3),await pi(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fi(n)}async function Fi(t,e){const n=b(t);e?(n._u.delete(2),await fi(n)):e||(n._u.add(2),await pi(n),n.gu.set("Unknown"))}function ji(t){return t.pu||(t.pu=function(t,e,n){const r=b(t);return r.su(),new ui(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:_i.bind(null,t),Zr:Ii.bind(null,t),Wo:Si.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),bi(t)?wi(t):t.gu.set("Unknown")):(await t.pu.stop(),Ti(t))}))),t.pu}function Bi(t){return t.Iu||(t.Iu=function(t,e,n){const r=b(t);return r.su(),new ci(e,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(t.datastore,t.asyncQueue,{Yr:Di.bind(null,t),Zr:Mi.bind(null,t),tu:Li.bind(null,t),Zo:Pi.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Ai(t)):(await t.Iu.stop(),t.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class Vi{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Vi(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function qi(t,e){if(g("AsyncQueue",`${e}: ${t}`),X(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class $i{static emptySet(t){return new $i(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof $i))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new $i;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=yn(),this.sortedSet=new te(this.comparator)}}
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
 */class zi{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):v():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new te(q.comparator)}}class Hi{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Hi(t,e,$i.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}}
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
 */class Ki{constructor(){this.Au=void 0,this.listeners=[]}}class Wi{constructor(){this.queries=new fn((t=>Se(t)),Ie),this.onlineState="Unknown",this.Ru=new Set}}async function Gi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ki),i)try{s.Au=await n.onListen(r)}catch(t){const n=qi(t,`Initialization of query '${Ce(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Xi(n)}async function Qi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ji(t,e){const n=b(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(r=!0);i.Au=t}}r&&Xi(n)}function Yi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Xi(t){t.Ru.forEach((t=>{t.next()}))}class Zi{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Hi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Hi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
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
class ts{constructor(t){this.key=t}}class es{constructor(t){this.key=t}}class ns{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new zi,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=ke(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||u&&this.Gu(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Hi(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new zi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=In(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new es(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new ts(n))})),e}tc(t){this.qu=t.Hi,this.Ku=In();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Hi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=In(),this.mutatedKeys=In(),this.Gu=xe(t),this.Qu=new $i(this.Gu)}}class rs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class is{constructor(t){this.key=t,this.nc=!1}}class ss{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new fn((t=>Se(t)),Ie),this.rc=new Map,this.oc=new Set,this.uc=new te(q.comparator),this.cc=new Map,this.ac=new Rr,this.hc={},this.lc=new Map,this.fc=Ir.vn(),this.onlineState="Unknown",this.dc=void 0}}async function os(t,e){const n=Is(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await Wr(n.localStore,Te(e));n.isPrimaryClient&&gi(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await as(n,e,r,"current"===s,t.resumeToken)}return i}async function as(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await Qr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return vs(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await Qr(t.localStore,e,!0),o=new ns(e,s.Hi),a=o.Wu(s.documents),u=An.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);vs(t,n,c.Xu);const l=new rs(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function us(t,e){const n=b(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!Ie(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gr(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),mi(n.remoteStore,r.targetId),ms(n,r.targetId)})).catch(J)):(ms(n,r.targetId),await Gr(n.localStore,r.targetId,!0))}async function cs(t,e){const n=b(t);try{const t=await function(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);var l,h,d;e.targetMismatches.has(a)?c=c.withResumeToken(ct.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),h=c,d=s,(0===(l=u).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(t,c))}));let a=gn(),u=In();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Hr(t,s,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!r.isEqual(U.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Y.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.qi=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?w(r.nc):t.removedDocuments.size>0&&(w(r.nc),r.nc=!1))})),await Es(n,t,e)}catch(t){await J(t)}}function ls(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(r=!0)})),r&&Xi(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hs(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new te(q.comparator);t=t.insert(s,ue.newNoDocument(s,U.min()));const n=In().add(s),i=new kn(U.min(),new Map,new re(L),t,n);await cs(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),bs(r)}else await Gr(r.localStore,e,!1).then((()=>ms(r,e,n))).catch(J)}async function ds(t,e){const n=b(t),r=e.batch.batchId;try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=In();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);gs(n,r,null),ps(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Es(n,t)}catch(t){await J(t)}}async function fs(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);gs(r,e,n),ps(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Es(r,t)}catch(t){await J(t)}}function ps(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function gs(t,e,n){const r=b(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function ms(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||ys(t,e)}))}function ys(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(mi(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),bs(t))}function vs(t,e,n){for(const r of n)r instanceof ts?(t.ac.addReference(r.key,e),ws(t,r)):r instanceof es?(p("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||ys(t,r.key)):v()}function ws(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(p("SyncEngine","New document in limbo: "+n),t.oc.add(r),bs(t))}function bs(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(j.fromString(e)),r=t.fc.next();t.cc.set(r,new is(n)),t.uc=t.uc.insert(n,r),gi(t.remoteStore,new yr(Te(me(n.path)),r,2,Z.at))}}async function Es(t,e,n){const r=b(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=jr.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Y.forEach(e,(e=>Y.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Y.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!X(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function Ts(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await $r(n.localStore,e);n.currentUser=e,(r=n).lc.forEach((t=>{t.forEach((t=>{t.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.lc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Es(n,t.ji)}var r}function _s(t,e){const n=b(t),r=n.cc.get(e);if(r&&r.nc)return In().add(r.key);{let t=In();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Is(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cs.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_s.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hs.bind(null,e),e.sc.Wo=Ji.bind(null,e.eventManager),e.sc.wc=Yi.bind(null,e.eventManager),e}function Ss(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ds.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fs.bind(null,e),e}class Cs{async initialize(t){this.yt=si(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return qr(this.persistence,new Br,t.initialUser,this.yt)}yc(t){return new Mr(Fr.Bs,this.yt)}gc(t){return new Xr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ks{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ls(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ts.bind(null,this.syncEngine),await Fi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wi}createDatastore(t){const e=si(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ri(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new li(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>ls(this.syncEngine,t,0),s=ti.C()?new ti:new Zr,new di(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ss(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);p("RemoteStore","RemoteStore shutting down."),e._u.add(5),await pi(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function As(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xs(t){if(!q.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rs(t){if(q.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Os(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Ns(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Os(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Ds=new Map;class Ls{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class Ps{get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ls(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return new x(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ds.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ds.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ls({}),this._settingsFrozen=!1}}
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
class Ms{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ms(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Us{withConverter(t){return new Us(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Fs extends Us{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ms(this.firestore,null,new q(t))}withConverter(t){return new Fs(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,me(n)),this._path=n,this.type="collection"}}function js(t,e,...n){if(t=(0,a.getModularInstance)(t),As("collection","path",e),t instanceof Ps){const r=j.fromString(e,...n);return Rs(r),new Fs(t,null,r)}{if(!(t instanceof Ms||t instanceof Fs))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(j.fromString(e,...n));return Rs(r),new Fs(t.firestore,null,r)}}function Bs(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=D.R()),As("doc","path",e),t instanceof Ps){const r=j.fromString(e,...n);return xs(r),new Ms(t,null,new q(r))}{if(!(t instanceof Ms||t instanceof Fs))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(j.fromString(e,...n));return xs(r),new Ms(t.firestore,t instanceof Fs?t.converter:null,new q(r))}}
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
class Vs{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):g("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
class qs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=D.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function $s(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await $r(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function zs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hs(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Ui(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ui(e.remoteStore,n))),t.onlineComponents=e}async function Hs(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await $s(t,new Cs)),t.offlineComponents}async function Ks(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await zs(t,new ks)),t.onlineComponents}function Ws(t){return Ks(t).then((t=>t.syncEngine))}async function Gs(t){const e=await Ks(t),n=e.eventManager;return n.onListen=os.bind(null,e.syncEngine),n.onUnlisten=us.bind(null,e.syncEngine),n}function Qs(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Vs({next:n=>{e.enqueueAndForget((()=>Qi(t,o))),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Zi(n,s,{includeMetadataChanges:!0,Nu:!0});return Gi(t,o)}(await Gs(t),t.asyncQueue,e,n,r))),r.promise}class Js{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=ii();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new _;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!X(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=Vi.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new oi(this,"async_queue_retry"),this.Wc=()=>{const t=ii();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=ii();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class Ys extends Ps{_terminate(){return this._firestoreClient||to(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Js,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function Xs(t,e){const n="object"==typeof t?t:(0,r.getApp)(),i="string"==typeof t?t:e||"(default)",s=(0,r._getProvider)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=Ns(t,Ps))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=l.MOCK_USER;else{e=(0,a.createMockUserToken)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(s)}t._authCredentials=new C(new I(e,n))}}(s,...t)}return s}function Zs(t){return t._firestoreClient||to(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function to(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new tt(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new qs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class eo{static fromBase64String(t){try{return new eo(ct.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new eo(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class no{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}}
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
class ro{constructor(t){this._methodName=t}}
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
 */class io{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const so=/^__.*__$/;class oo{toMutation(t,e){return null!==this.fieldMask?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function ao(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class uo{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new uo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return bo(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(ao(this.sa)&&so.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class co{da(t,e,n,r=!1){return new uo({sa:t,methodName:e,fa:n,path:V.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||si(t)}}function lo(t){const e=t._freezeSettings(),n=si(t._databaseId);return new co(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ho(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);mo("Data must be an object, but it was:",o,r);const a=po(r,o);let u,c;if(s.merge)u=new se(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=yo(e,r,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Eo(t,i)||t.push(i)}u=new se(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new oo(new oe(a),u,c)}function fo(t,e){if(go(t=(0,a.getModularInstance)(t)))return mo("Unsupported field value:",e,t),po(t,e);if(t instanceof ro)return function(t,e){if(!ao(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=fo(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return De(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:Bn(e.yt,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Bn(e.yt,n)}}if(t instanceof io)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof eo)return{bytesValue:Vn(e.yt,t._byteString)};if(t instanceof Ms){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:zn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Os(t)}`)}(t,e)}function po(t,e){const n={};return it(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rt(t,((t,r)=>{const i=fo(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function go(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof io||t instanceof eo||t instanceof Ms||t instanceof ro)}function mo(t,e,n){if(!go(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Os(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}var r}function yo(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof no)return e._internalPath;if("string"==typeof e)return wo(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const vo=new RegExp("[~\\*/\\[\\]]");function wo(t,e,n){if(e.search(vo)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new no(...e.split("."))._internalPath}catch(r){throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(E.INVALID_ARGUMENT,a+t+u)}function Eo(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class To{get id(){return this._key.path.lastSegment()}get ref(){return new Ms(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class _o extends To{data(){return super.data()}}function Io(t,e){return"string"==typeof e?wo(t,e):e instanceof no?e._internalPath:e._delegate._internalPath}
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
 */function So(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Co{convertValue(t,e="none"){switch(vt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return rt(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new io(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=j.fromString(t);w(lr(n));const r=new et(n.get(1),n.get(3)),i=new q(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function ko(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class Ao{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class xo extends To{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Ro extends xo{data(t={}){return super.data(t)}}class Oo{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ro(this._firestore,this._userDataWriter,n.key,n,new Ao(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Ro(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ao(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Ro(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ao(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:No(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ao(r.hasPendingWrites,r.fromCache),this.query=n}}function No(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}class Do extends Co{convertBytes(t){return new eo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ms(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Lo(t){t=Ns(t,Us);const e=Ns(t.firestore,Ys),n=Zs(e),r=new Do(e);return So(t._query),Qs(n,t._query).then((n=>new Oo(e,r,t,n)))}function Po(t,e,n){t=Ns(t,Ms);const r=Ns(t.firestore,Ys),i=ko(t.converter,e,n);return Uo(r,[ho(lo(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ke.none())])}function Mo(t){return Uo(Ns(t.firestore,Ys),[new on(t._key,Ke.none())])}function Uo(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=Ss(t);try{const t=await function(t,e){const n=b(t),r=M.now(),i=e.reduce(((t,e)=>t.add(e.key)),In());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=gn(),u=In();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Xe(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new en(t.key,e,ae(e.value.mapValue),Ke.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:vn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new te(L)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Es(r,t.changes),await Ai(r.remoteStore)}catch(t){const e=qi(t,"Failed to persist write");n.reject(e)}}(await Ws(t),e,n))),n.promise}(Zs(t),e)}!function(t,e=!0){var n;n=r.SDK_VERSION,h=n,(0,r._registerComponent)(new(0,i.Component)("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Ys(new k(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new et(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,"3.8.1",t),(0,r.registerVersion)(c,"3.8.1","esm2017")}()})),s.register("lW9Fu",(function(n,r){t(n.exports,"createWebChannelTransport",(function(){return Xn})),t(n.exports,"getStatEventTarget",(function(){return Zn})),t(n.exports,"ErrorCode",(function(){return tr})),t(n.exports,"EventType",(function(){return er})),t(n.exports,"Event",(function(){return nr})),t(n.exports,"Stat",(function(){return rr})),t(n.exports,"FetchXmlHttpFactory",(function(){return ir})),t(n.exports,"WebChannel",(function(){return sr})),t(n.exports,"XhrIo",(function(){return or}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},u=s||self;function c(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f))},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(l(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",c,e),u.removeEventListener("test",c,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}var C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return t<e?-1:t>e?1:0}function A(){var t=u.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=A().indexOf(t)}function R(t){return R[" "](t),t}R[" "]=c;var O,N,D=x("Opera"),L=x("Trident")||x("MSIE"),P=x("Edge"),M=P||L,U=x("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),F=-1!=A().toLowerCase().indexOf("webkit")&&!x("Edge");function j(){var t=u.document;return t?t.documentMode:void 0}t:{var B="",V=(N=A(),U?/rv:([^\);]+)(\)|;)/.exec(N):P?/Edge\/([\d\.]+)/.exec(N):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(N):F?/WebKit\/(\S+)/.exec(N):D?/(?:Version)[ \/]?(\S+)/.exec(N):void 0);if(V&&(B=V?V[1]:""),L){var q=j();if(null!=q&&q>parseFloat(B)){O=String(q);break t}}O=B}var $,z={};function H(){return function(t){var e=z;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=C(String(O)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=k(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||k(0==i[2].length,0==s[2].length)||k(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(u.document&&L){var K=j();$=K||(parseInt(O,10)||void 0)}else $=void 0;var W=$;function G(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(U){t:{try{R(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&G.X.h.call(this)}}v(G,_);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++Y,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=b(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new X(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ut={};function ct(t,e,n,r,i){if(r&&r.once)return ht(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ct(t,e[s],n,r,i);return null}return n=vt(n),t&&t[J]?t.N(e,n,h(r)?!!r.capture:!!r,i):lt(t,e,n,!1,r,i)}function lt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=mt(t);if(a||(t[at]=a=new it(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=gt;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ht(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,r,i);return null}return n=vt(n),t&&t[J]?t.O(e,n,h(r)?!!r.capture:!!r,i):lt(t,e,n,!0,r,i)}function dt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=vt(n),t&&t[J]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ot(s=t.g[e],n,r,i))&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,r,i)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[J])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function pt(t){return t in ut?ut[t]:ut[t]="on"+t}function gt(t,e){if(t.ba)t=!0;else{e=new G(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ft(t),t=n.call(r,e)}return t}function mt(t){return(t=t[at])instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){w.call(this),this.i=new it(this),this.P=this,this.I=null}function bt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var i=e;rt(e=new _(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Et(o,r,!0,e)&&i}if(i=Et(o=e.g=t,r,!0,e)&&i,i=Et(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Et(o=e.g=n[s],r,!1,e)&&i}function Et(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&st(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}v(wt,w),wt.prototype[J]=!0,wt.prototype.removeEventListener=function(t,e,n,r){dt(this,t,e,n,r)},wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.I=null},wt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=u.JSON.stringify;function _t(){var t=Rt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,St=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Ct),(t=>t.reset()));class Ct{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function kt(t){u.setTimeout((()=>{throw t}),0)}function At(t,e){It||function(){var t=u.Promise.resolve(void 0);It=function(){t.then(Ot)}}(),xt||(It(),xt=!0),Rt.add(t,e)}var xt=!1,Rt=new class{add(t,e){const n=St.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Ot(){for(var t;t=_t();){try{t.h.call(t.g)}catch(t){kt(t)}var e=St;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xt=!1}function Nt(t,e){wt.call(this),this.h=t||1,this.g=e||u,this.j=m(this.lb,this),this.l=Date.now()}function Dt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Lt(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Pt(t){t.g=Lt((()=>{t.g=null,t.i&&(t.i=!1,Pt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Nt,wt),(i=Nt.prototype).ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),bt(this,"tick"),this.ca&&(Dt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Nt.X.M.call(this),Dt(this),delete this.g};class Mt extends w{l(t){this.h=arguments,this.g?this.i=!0:Pt(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ut(t){w.call(this),this.h=t,this.g={}}v(Ut,w);var Ft=[];function jt(t,e,n,r){Array.isArray(n)||(n&&(Ft[0]=n.toString()),n=Ft);for(var i=0;i<n.length;i++){var s=ct(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Bt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}function Vt(){this.g=!0}function qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Tt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ut.prototype.M=function(){Ut.X.M.call(this),Bt(this)},Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vt.prototype.Aa=function(){this.g=!1},Vt.prototype.info=function(){};var $t={},zt=null;function Ht(){return zt=zt||new wt}function Kt(t){_.call(this,$t.Pa,t)}function Wt(t){const e=Ht();bt(e,new Kt(e))}function Gt(t,e){_.call(this,$t.STAT_EVENT,t),this.stat=e}function Qt(t){const e=Ht();bt(e,new Gt(e,t))}function Jt(t,e){_.call(this,$t.Qa,t),this.size=e}function Yt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}$t.Pa="serverreachability",v(Kt,_),$t.STAT_EVENT="statevent",v(Gt,_),$t.Qa="timingevent",v(Jt,_);var Xt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function te(){}function ee(t){return t.h||(t.h=t.i())}function ne(){}te.prototype.h=null;var re,ie={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function se(){_.call(this,"d")}function oe(){_.call(this,"c")}function ae(){}function ue(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ut(this),this.O=le,t=M?125:void 0,this.T=new Nt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ce}function ce(){this.i=null,this.g="",this.h=!1}v(se,_),v(oe,_),v(ae,te),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},re=new ae;var le=45e3,he={},de={};function fe(t,e,n){t.K=1,t.v=Ne(ke(e)),t.s=n,t.P=!0,pe(t,null)}function pe(t,e){t.F=Date.now(),ve(t),t.A=ke(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),He(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ce,t.g=Hn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Mt(m(t.La,t,t.g),t.N)),jt(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ge(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function me(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=ye(t,n),r==de){4==e&&(t.o=4,Qt(14),i=!1),qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==he){t.o=4,Qt(15),qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}qt(t.j,t.m,r,null),_e(t,r)}ge(t)&&r!=de&&r!=he&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Qt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Un(e),e.K=!0,Qt(11))):(qt(t.j,t.m,n,"[Invalid Chunked Response]"),Te(t),Ee(t))}function ye(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?de:(n=Number(e.substring(n,r)),isNaN(n)?he:(r+=1)+n>e.length?de:(e=e.substr(r,n),t.C=r+n,e))}function ve(t){t.V=Date.now()+t.O,we(t,t.O)}function we(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Yt(m(t.gb,t),e)}function be(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Ee(t){0==t.l.G||t.I||Bn(t.l,t)}function Te(t){be(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Dt(t.T),Bt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _e(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ye(n.h,t)))if(!t.J&&Ye(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;jn(n),xn(n)}Mn(n),Qt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Yt(m(n.cb,n),6e3));if(1>=Je(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&jn(n),!S(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Xe(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Oe(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=zn(r,r.H?r.ka:null,r.V),o.J){Ze(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(be(a),ve(a)),r.g=o}else Pn(r);0<n.i.length&&On(n)}else"stop"!=c[0]&&"close"!=c[0]||qn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?qn(n,7):An(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Wt()}catch(t){}}function Ie(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(l(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(i=ue.prototype).setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==Tn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const h=Tn(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||M||this.g&&(this.h.h||this.g.fa()||_n(this.g)))){this.I||4!=h||7==e||Wt(),be(this);var n=this.g.aa();this.Y=n;e:if(ge(this)){var r=_n(this.g);t="";var i=r.length,s=4==Tn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Te(this),Ee(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Qt(12),Te(this),Ee(this);break t}qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_e(this,n)}this.P?(me(this,h,o),M&&this.i&&3==h&&(jt(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),_e(this,o)),4==h&&Te(this),this.i&&!this.I&&(4==h?Bn(this.l,this):(this.i=!1,ve(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Qt(12)):(this.o=0,Qt(13)),Te(this),Ee(this)}}}catch(t){}},i.hb=function(){if(this.g){var t=Tn(this.g),e=this.g.fa();this.C<e.length&&(be(this),me(this,t,e),this.i&&4!=t&&ve(this))}},i.cancel=function(){this.I=!0,Te(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Wt(),Qt(17)),Te(this),this.o=2,Ee(this)):we(this,this.V-t)};var Se=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ce(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ce){this.h=void 0!==e?e:t.h,Ae(this,t.j),this.s=t.s,this.g=t.g,xe(this,t.m),this.l=t.l,e=t.i;var n=new Ve;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Re(this,n),this.o=t.o}else t&&(n=String(t).match(Se))?(this.h=!!e,Ae(this,n[1]||"",!0),this.s=De(n[2]||""),this.g=De(n[3]||"",!0),xe(this,n[4]),this.l=De(n[5]||"",!0),Re(this,n[6]||"",!0),this.o=De(n[7]||"")):(this.h=!!e,this.i=new Ve(null,this.h))}function ke(t){return new Ce(t)}function Ae(t,e,n){t.j=n?De(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Re(t,e,n){e instanceof Ve?(t.i=e,function(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&($e(this,e),He(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Le(e,je)),t.i=new Ve(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Ne(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function De(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Le(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Pe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ce.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Le(e,Me,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Le(e,Me,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Le(n,"/"==n.charAt(0)?Fe:Ue,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Le(n,Be)),t.join("")};var Me=/[#\/\?@]/g,Ue=/[#\?:]/g,Fe=/[#\?]/g,je=/[#\?@]/g,Be=/#/g;function Ve(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function $e(t,e){qe(t),e=Ke(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ze(t,e){return qe(t),e=Ke(t,e),t.g.has(e)}function He(t,e,n){$e(t,e),0<n.length&&(t.i=null,t.g.set(Ke(t,e),E(n)),t.h+=n.length)}function Ke(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Ve.prototype).add=function(t,e){qe(this),this.i=null,t=Ke(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){qe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},i.oa=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},i.W=function(t){qe(this);let e=[];if("string"==typeof t)ze(this,t)&&(e=e.concat(this.g.get(Ke(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return qe(this),this.i=null,ze(this,t=Ke(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function We(t){this.l=t||Ge,u.PerformanceNavigationTiming?t=0<(t=u.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(u.g&&u.g.Ga&&u.g.Ga()&&u.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ge=10;function Qe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Je(t){return t.h?1:t.g?t.g.size:0}function Ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Xe(t,e){t.g?t.g.add(e):t.h=e}function Ze(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E(t.i)}function en(){}function nn(){this.g=new en}function rn(t,e,n){const r=n||"";try{Ie(t,(function(t,n){let i=t;h(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function on(t){this.l=t.ac||null,this.j=t.jb||!1}function an(t,e){wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},en.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},en.prototype.parse=function(t){return u.JSON.parse(t,void 0)},v(on,te),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),v(an,wt);var un=0;function cn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hn(t)}function hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=an.prototype).open=function(t,e){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=un},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):hn(this),3==this.readyState&&cn(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,ln(this))},i.Ua=function(t){this.g&&(this.response=t,ln(this))},i.ga=function(){this.g&&ln(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var dn=u.JSON.parse;function fn(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pn,this.K=this.L=!1}v(fn,wt);var pn="",gn=/^https?$/i,mn=["POST","PUT"];function yn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vn(t),bn(t)}function vn(t){t.D||(t.D=!0,bt(t,"complete"),bt(t,"error"))}function wn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Tn(t)||2!=t.aa()))if(t.v&&4==Tn(t))Lt(t.Ha,0,t);else if(bt(t,"readystatechange"),4==Tn(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(Se)[1]||null;if(!i&&u.self&&u.self.location){var s=u.self.location.protocol;i=s.substr(0,s.length-1)}r=!gn.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",vn(t)}}finally{bn(t)}}}function bn(t,e){if(t.g){En(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||bt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function En(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}function _n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function In(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Sn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=In(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Oe(t,e,n))}function Cn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kn(t){this.Ca=0,this.i=[],this.j=new Vt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Cn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Cn("baseRetryDelayMs",5e3,t),this.bb=Cn("retryDelaySeedMs",1e4,t),this.$a=Cn("forwardChannelMaxRetries",2,t),this.ta=Cn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new We(t&&t.concurrentRequestLimit),this.Fa=new nn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function An(t){if(Rn(t),3==t.G){var e=t.U++,n=ke(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Dn(t,n),(e=new ue(t,t.j,e,void 0)).K=2,e.v=Ne(ke(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.l,null),e.g.da(e.v)),e.F=Date.now(),ve(e)}$n(t)}function xn(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function Rn(t){xn(t),t.u&&(u.clearTimeout(t.u),t.u=null),jn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&u.clearTimeout(t.m),t.m=null)}function On(t){Qe(t.h)||t.m||(t.m=!0,At(t.Ja,t),t.C=0)}function Nn(t,e){var n;n=e?e.m:t.U++;const r=ke(t.F);Oe(r,"SID",t.I),Oe(r,"RID",n),Oe(r,"AID",t.T),Dn(t,r),t.o&&t.s&&Sn(r,t.o,t.s),n=new ue(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ln(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xe(t.h,n),fe(n,r,e)}function Dn(t,e){t.ia&&tt(t.ia,(function(t,n){Oe(e,n,t)})),t.l&&Ie({},(function(t,n){Oe(e,n,t)}))}function Ln(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Pn(t){t.g||t.u||(t.Z=1,At(t.Ia,t),t.A=0)}function Mn(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Yt(m(t.Ia,t),Vn(t,t.A)),t.A++,!0)}function Un(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function Fn(t){t.g=new ue(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ke(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),Dn(t,e),t.o&&t.s&&Sn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ne(ke(e)),n.s=null,n.P=!0,pe(n,t)}function jn(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function Bn(t,e){var n=null;if(t.g==e){jn(t),Un(t),t.g=null;var r=2}else{if(!Ye(t.h,e))return;n=e.D,Ze(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;bt(r=Ht(),new Jt(r,n)),On(t)}else Pn(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(Je(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Yt(m(t.Ja,t,e),Vn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Mn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}function Vn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new Ce("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ae(n,"https"),Ne(n)),function(t,e){const n=new Vt;if(u.Image){const r=new Image;r.onload=y(sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(sn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(sn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Qt(2);t.G=0,t.l&&t.l.va(e),$n(t),Rn(t)}function $n(t){if(t.G=0,t.la=[],t.l){const e=tn(t.h);0==e.length&&0==t.i.length||(T(t.la,e),T(t.la,t.i),t.h.i.length=0,E(t.i),t.i.length=0),t.l.ua()}}function zn(t,e,n){var r=n instanceof Ce?ke(n):new Ce(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),xe(r,r.m);else{var i=u.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ce(null,void 0);r&&Ae(s,r),e&&(s.g=e),i&&xe(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ma),Dn(t,r),r}function Hn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new fn(new on({jb:!0})):new fn(t.ra)).Ka(t.H),e}function Kn(){}function Wn(){if(L&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function Gn(t,e){wt.call(this),this.g=new kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Yn(this)}function Qn(t){se.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Jn(){oe.call(this),this.status=1}function Yn(t){this.g=t}(i=fn.prototype).Ka=function(t){this.L=t},i.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():re.g(),this.C=this.u?ee(this.u):ee(re),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void yn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=u.FormData&&t instanceof u.FormData,!(0<=b(mn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{En(this),0<this.B&&((this.K=function(t){return L&&H()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Lt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){yn(this,t)}},i.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),bn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),fn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?wn(this):this.fb())},i.fb=function(){wn(this)},i.aa=function(){try{return 2<Tn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dn(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=kn.prototype).ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ue(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=et(s),rt(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ln(this,i,e),Oe(n=ke(this.F),"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),Dn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(In(s)))+"&"+e:this.o&&Sn(n,this.o,s)),Xe(this.h,i),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),i.Z=!0,fe(i,n,null)):fe(i,n,e),this.G=2}}else 3==this.G&&(t?Nn(this,t):0==this.i.length||Qe(this.h)||Nn(this))},i.Ia=function(){if(this.u=null,Fn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yt(m(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qt(10),xn(this),Fn(this))},i.cb=function(){null!=this.v&&(this.v=null,xn(this),Mn(this),Qt(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))},(i=Kn.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},Wn.prototype.g=function(t,e){return new Gn(t,e)},v(Gn,wt),Gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zn(t,null,t.V),On(t)},Gn.prototype.close=function(){An(this.g)},Gn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Tt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&On(e)},Gn.prototype.M=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Gn.X.M.call(this)},v(Qn,se),v(Jn,oe),v(Yn,Kn),Yn.prototype.xa=function(){bt(this.g,"a")},Yn.prototype.wa=function(t){bt(this.g,new Qn(t))},Yn.prototype.va=function(t){bt(this.g,new Jn)},Yn.prototype.ua=function(){bt(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,Gn.prototype.send=Gn.prototype.u,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,Xt.NO_ERROR=0,Xt.TIMEOUT=8,Xt.HTTP_ERROR=6,Zt.COMPLETE="complete",ne.EventType=ie,ie.OPEN="a",ie.CLOSE="b",ie.ERROR="c",ie.MESSAGE="d",wt.prototype.listen=wt.prototype.N,fn.prototype.listenOnce=fn.prototype.O,fn.prototype.getLastError=fn.prototype.Oa,fn.prototype.getLastErrorCode=fn.prototype.Ea,fn.prototype.getStatus=fn.prototype.aa,fn.prototype.getResponseJson=fn.prototype.Sa,fn.prototype.getResponseText=fn.prototype.fa,fn.prototype.send=fn.prototype.da,fn.prototype.setWithCredentials=fn.prototype.Ka;var Xn=o.createWebChannelTransport=function(){return new Wn},Zn=o.getStatEventTarget=function(){return Ht()},tr=o.ErrorCode=Xt,er=o.EventType=Zt,nr=o.Event=$t,rr=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ir=o.FetchXmlHttpFactory=on,sr=o.WebChannel=ne,or=o.XhrIo=fn})),s.register("9gn4F",(function(e,n){t(e.exports,"loadSimilar",(function(){return u}));var r=s("iqbjS"),i=s("i9P75"),o=s("bN4hg");let a;const u=t=>{if("https://anastasiiakor.github.io/JS-Team-Project-Filmoteka/library.html"===location.href){const t=document.querySelector("#watched"),e=document.querySelector("#queue");t.classList.remove("btn-add__active"),t.removeAttribute("disabled"),e.classList.remove("btn-add__active"),e.removeAttribute("disabled")}a=t,o.paginator.callback=c,c(1)},c=async t=>{try{const e=await(0,r.getSimilar)(a,t);(0,i.makeGallery)(e.results),o.paginator.currentPage=e.page,o.paginator.totalPages=e.total_pages<500?e.total_pages:500}catch(t){console.log(t)}}})),s.register("6rGxr",(function(t,e){s("860Hs");const n=document.querySelector('[data-action="footerModalOpen"]'),r=document.querySelector("#footerBackdrop"),i=document.querySelector('[data-action="footerModalClose"]'),o=document.querySelector("#back-to-top");function a(){r.classList.add("is-hidden"),document.body.style.overflow="visible",o.classList.remove("hidden"),window.removeEventListener("keydown",u)}function u(t){"Escape"===t.code&&a()}n.addEventListener("click",(function(){window.addEventListener("keydown",u),r.classList.remove("is-hidden"),document.body.style.overflow="hidden",o.classList.add("hidden")})),r.addEventListener("keydown",u),i.addEventListener("click",a),r.addEventListener("click",(function(t){t.target===t.currentTarget&&a()}))})),s.register("860Hs",(function(t,e){(0,s("4eRSF").addBackToTop)({backgroundColor:"#ff6b01",diameter:60,scrollDuration:500})})),s.register("4eRSF",(function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r,i;r="undefined"!=typeof self?self:void 0,i=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,r=t.cornerOffset,i=void 0===r?20:r,s=t.diameter,o=void 0===s?56:s,a=t.ease,u=void 0===a?B:a,c=t.id,l=void 0===c?"back-to-top":c,h=t.innerHTML,d=void 0===h?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':h,f=t.onClickScrollTo,p=void 0===f?0:f,g=t.scrollContainer,m=void 0===g?document.body:g,y=t.scrollDuration,v=void 0===y?100:y,w=t.showWhenScrollTopIs,b=void 0===w?1:w,E=t.size,T=void 0===E?o:E,_=t.textColor,I=void 0===_?"#fff":_,S=t.zIndex,C=void 0===S?1:S,k=m===document.body,A=k&&document.documentElement;M();var x=P(),R=!0,O=k?window:m;function N(){F()>=b?D():L()}function D(){R&&(x.className="",R=!1)}function L(){R||(x.className="hidden",R=!0)}function P(){var t=document.createElement("div");return t.id=l,t.className="hidden",t.innerHTML=d,t.addEventListener("click",(function(t){t.preventDefault(),U()})),document.body.appendChild(t),t}function M(){var t=Math.round(.43*T),e=Math.round(.29*T),r="#"+l+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+I+";cursor:pointer;display:block;height:"+T+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+T+"px;z-index:"+C+"}#"+l+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+l+".hidden{bottom:-"+T+"px;opacity:0}",s=document.createElement("style");s.appendChild(document.createTextNode(r)),document.head.insertAdjacentElement("afterbegin",s)}function U(){var t="function"==typeof p?p():p,e=window,n=e.performance,r=e.requestAnimationFrame;if(v<=0||void 0===n||void 0===r)return j(t);var i=n.now(),s=F(),o=s-t;r((function t(e){var n=Math.min((e-i)/v,1);j(s-Math.round(u(n)*o)),n<1&&r(t)}))}function F(){return m.scrollTop||A&&document.documentElement.scrollTop||0}function j(t){m.scrollTop=t,A&&(document.documentElement.scrollTop=t)}function B(t){return.5*(1-Math.cos(Math.PI*t))}O.addEventListener("scroll",N),N()}},"function"==typeof define&&define.amd?define(["exports"],i):"object"===n(t.exports)&&"string"!=typeof t.exports.nodeName?i(t.exports):i(r.commonJsStrict={})}));
//# sourceMappingURL=index.e404ce32.js.map
