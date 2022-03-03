// toggle dropdown menu in mobile layout
function dropDown() {
  document.getElementById("dropdown-menu").classList.toggle("show-dropdown");
}

// close dropdown menu if page clicked outside of menu
window.addEventListener("click", function(event) {

  let menu = document.getElementById("dropdown-menu");
  let button = document.getElementById("hamburger");

  if (event.target != menu && event.target != button) {
    if (menu.classList.contains("show-dropdown")) {
      menu.classList.remove("show-dropdown");
    }
  }
});
