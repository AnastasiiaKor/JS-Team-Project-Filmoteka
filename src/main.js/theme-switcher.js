import tooltip from 'tooltip';

const themeSwitcherBtn = document.querySelector('.theme-switcher__btn');
const themeSwitcherIconSun = document.querySelector('.theme-switcher__btn-icon-sun');
const themeSwitcherIconMoon = document.querySelector('.theme-switcher__btn-icon-moon');
// const jsModal = document.querySelector('.js-modal');

themeSwitcherBtn.addEventListener('click', onThemeSwitcherBtnClick);

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeSwitcherIconSun.classList.add("icon-ishidden")
    // jsModal.classList.add("dark-theme");
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

const config = {
    showDelay: 100,
    style: {
        padding: 3,
    },
    className: "tooltip",
    offset: {
        x: -45,
        y: -75
    }
};

tooltip(config);

function themeSwitcherModals(element) {
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    element.classList.add("dark-theme-modals");
  } 
};

export { themeSwitcherModals };
