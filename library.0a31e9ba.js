var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("hRans"),a("8Bm5W");const l=document.getElementById("greatings"),n=localStorage.getItem("username");l&&n&&(l.innerHTML=`Welcome ${n}!`,localStorage.removeItem("username"));var o=a("alJz6");const i=document.querySelector(".empty_library_bcg_img"),d=document.querySelector("#watched"),s=document.querySelector("#queue"),c=document.querySelector(".gallery"),u=localStorage.getItem("user"),g=localStorage.getItem(`${u}_queue`);if(g&&JSON.parse(g).length){let e=localStorage.getItem(`${u}_queue`),t=JSON.parse(e);c.innerHTML=(0,o.createGalleryMarkup)(t),i.style.display="none"}function m(e){let t=localStorage.getItem(e);if(t&&JSON.parse(t).length){let t=localStorage.getItem(e),r=JSON.parse(t);return c.innerHTML=(0,o.createGalleryMarkup)(r),void(i.style.display="none")}c.innerHTML="",i.style.display="block"}d.addEventListener("click",(function(e){s.classList.remove("btn-add__active"),s.removeAttribute("disabled"),d.classList.add("btn-add__active"),d.setAttribute("disabled",!0),m(e.target.id)})),s.addEventListener("click",(function(e){d.classList.remove("btn-add__active"),d.removeAttribute("disabled"),s.classList.add("btn-add__active"),s.setAttribute("disabled",!0),m(e.target.id)})),m("queue"),a("lHlfB"),a("jpPIC"),a("6rGxr"),a("860Hs");
//# sourceMappingURL=library.0a31e9ba.js.map
