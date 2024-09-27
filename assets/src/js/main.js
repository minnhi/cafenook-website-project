const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Navbar Active class
const navItems = $$(".nav-item");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-link.active").classList.remove("active");
    const navLink = navItem.querySelector(".nav-link");
    setTimeout(() => {
      navLink.classList.add("active");
    }, 100);
  });
});
