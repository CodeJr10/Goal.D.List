const hamburgerBtn = document.getElementById("MenuBtn");
const navSidebar = document.getElementsByClassName("navigation")[0];
const mainContent = document.getElementsByClassName("todoList")[0];

const clickBtn = () => {
  hamburgerBtn.classList.toggle("active");
  navSidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

// btn clicked -> hamburger = active (hids) -> navbar toggles active (shows) -> main content toggles active (moves right)
