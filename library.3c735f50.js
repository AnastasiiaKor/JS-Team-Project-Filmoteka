const e=document.querySelector(".theme-switcher__btn"),t=document.querySelector(".theme-switcher__btn-icon-sun"),s=document.querySelector(".theme-switcher__btn-icon-moon");e.addEventListener("click",(function(){let e="light";document.body.classList.contains("dark-theme")?document.body.classList.contains("dark-theme")&&(document.body.classList.remove("dark-theme"),t.classList.remove("icon-ishidden"),s.classList.add("icon-ishidden")):(document.body.classList.add("dark-theme"),s.classList.remove("icon-ishidden"),t.classList.add("icon-ishidden"),e="dark");localStorage.setItem("theme",e)}));"dark"===localStorage.getItem("theme")?(document.body.classList.add("dark-theme"),t.classList.add("icon-ishidden")):s.classList.add("icon-ishidden");
//# sourceMappingURL=library.3c735f50.js.map
