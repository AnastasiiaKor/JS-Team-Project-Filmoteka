import Tooltip from 'tooltip';
console.log("Tooltip", Tooltip)


const themeSwitcherBtn = document.querySelector('.theme-switcher__btn'); 
const themeSwitcherIconSun = document.querySelector('.theme-switcher__btn-icon-sun'); 
const themeSwitcherIconMoon = document.querySelector('.theme-switcher__btn-icon-moon'); 
 
themeSwitcherBtn.addEventListener('click', onThemeSwitcherBtnClick); 
 
const currentTheme = localStorage.getItem("theme"); 
 
if (currentTheme === "dark") { 
    document.body.classList.add("dark-theme"); 
    themeSwitcherIconSun.classList.add("icon-ishidden") 
} else { 
    themeSwitcherIconMoon.classList.add("icon-ishidden"); 
}; 
 
function onThemeSwitcherBtnClick() {  
    let theme = "light"; 
 
    if (!document.body.classList.contains("dark-theme")) { 
        document.body.classList.add("dark-theme"); 
 
        themeSwitcherIconMoon.classList.remove("icon-ishidden") 
        themeSwitcherIconSun.classList.add("icon-ishidden") 
     
        theme = "dark";         
    } else if (document.body.classList.contains("dark-theme")) { 
        document.body.classList.remove("dark-theme"); 
 
        themeSwitcherIconSun.classList.remove("icon-ishidden"); 
        themeSwitcherIconMoon.classList.add("icon-ishidden"); 
    }; 
   
    localStorage.setItem("theme", theme); 
};

// const tooltip = new Tooltip({
//     el: document.body.querySelector('.my-tooltip'),
//     activeClass: 'my-tooltip-active',
//     triggerClass: 'my-tooltip-toggle-btn'
// });

// tooltip.show();
// tooltip.hide();


