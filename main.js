let btn = document.querySelector(".mobile-btn");

const toggleBurger = (menuClass, showClass) => {
  let menu = document.querySelector(`.${menuClass}`);

  if (menu.className.includes(showClass)) {
    menu.className = menuClass;
  } else {
    menu.className += ` ${showClass}`;
  }
};

btn.addEventListener("click", () => {
  toggleBurger("header-nav", "header-nav-active");
});

// hello world
