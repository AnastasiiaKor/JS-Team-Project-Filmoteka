var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,d.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d),d("ksLB7"),d("hRans");const r=document.getElementById("greatings"),i=localStorage.getItem("username");r&&i&&(r.innerHTML=`Welcome ${i}!`,localStorage.removeItem("username"));var l=d("i9P75"),s=d("bN4hg");const o=document.querySelector(".empty_library_bcg_img"),n=document.querySelector("#watched"),c=document.querySelector("#queue");localStorage.getItem("user");let u=new Event("click");function v(e){s.paginator.currentPage=0;let t=localStorage.getItem(e);if(t&&JSON.parse(t).length){let t=localStorage.getItem(e),a=JSON.parse(t);(0,l.makeGallery)(a),o.style.display="none"}else(0,l.clearGallery)(),o.style.display="block"}function g(e){switch(e){case"watched":c.classList.remove("btn-add__active"),c.removeAttribute("disabled"),n.classList.add("btn-add__active"),n.setAttribute("disabled",!0);break;case"queue":n.classList.remove("btn-add__active"),n.removeAttribute("disabled"),c.classList.add("btn-add__active"),c.setAttribute("disabled",!0);break;default:n.classList.remove("btn-add__active"),n.removeAttribute("disabled"),c.classList.remove("btn-add__active"),c.removeAttribute("disabled")}}n.addEventListener("click",(function(e){c.classList.remove("btn-add__active"),c.removeAttribute("disabled"),n.classList.add("btn-add__active"),n.setAttribute("disabled",!0),localStorage.removeItem("saved_page"),localStorage.setItem("saved_page","watched"),g(e.target.id),v(e.target.id)})),c.addEventListener("click",(function(e){n.classList.remove("btn-add__active"),n.removeAttribute("disabled"),c.classList.add("btn-add__active"),c.setAttribute("disabled",!0),localStorage.removeItem("saved_page"),localStorage.setItem("saved_page","queue"),g(e.target.id),v(e.target.id)})),v("queue"),document.addEventListener("libraryChange",(e=>{const t=e.detail.section;g(t),v(t)})),function(){if("watched"===localStorage.getItem("saved_page"))return void n.dispatchEvent(u);if("queue"===localStorage.getItem("saved_page"))return void c.dispatchEvent(u);console.log("не робить")}(),d("24Yli"),d("jpPIC"),d("6rGxr"),d("860Hs");
//# sourceMappingURL=library.3e1f227d.js.map