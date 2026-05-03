const hamburgerBtn = document.getElementById("MenuBtn");
const navSidebar = document.getElementsByClassName("navigation")[0];
const mainContent = document.getElementsByClassName("todoList")[0];
const closeBtn = document.getElementsByClassName("closeIcon")[0];

const openSidebar = () => {
  hamburgerBtn.classList.toggle("active");
  navSidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};

const closeSidebar = () => {
  hamburgerBtn.classList.remove("active");
  navSidebar.classList.remove("active");
  mainContent.classList.remove("active");
};

// Event Listeners
hamburgerBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
// btn clicked -> hamburger = active (hids) -> navbar toggles active (shows) -> main content toggles active (moves right)
