var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=l),l("hRans"),l("8Bm5W");const a=document.getElementById("greatings"),n=localStorage.getItem("username");a&&n&&(a.innerHTML=`Welcome ${n}!`,localStorage.removeItem("username"));var o=l("alJz6");const i=document.querySelector(".empty_library_bcg_img"),d=document.querySelector("#watched"),s=document.querySelector("#queue"),c=localStorage.getItem("user"),u=localStorage.getItem(`${c}_queue`);if(u&&JSON.parse(u).length){let e=localStorage.getItem(`${c}_queue`),t=JSON.parse(e);o.gallery.innerHTML=(0,o.createGalleryMarkup)(t),i.style.display="none"}function g(e){let t=localStorage.getItem(e);if(t&&JSON.parse(t).length){let t=localStorage.getItem(e),r=JSON.parse(t);return o.gallery.innerHTML=(0,o.createGalleryMarkup)(r),void(i.style.display="none")}o.gallery.innerHTML="",i.style.display="block"}d.addEventListener("click",(function(e){s.classList.remove("btn-add__active"),s.removeAttribute("disabled"),d.classList.add("btn-add__active"),d.setAttribute("disabled",!0),g(e.target.id)})),s.addEventListener("click",(function(e){d.classList.remove("btn-add__active"),d.removeAttribute("disabled"),s.classList.add("btn-add__active"),s.setAttribute("disabled",!0),g(e.target.id)})),g("queue"),l("lHlfB"),l("jpPIC"),l("6rGxr"),l("860Hs");
//# sourceMappingURL=library.f4ded368.js.map