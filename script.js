// Sidebar Toggle Functionality
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

// Task Creation Functionality
const taskBtn = document.getElementsByClassName("add-task")[0];
const taskModal = document.getElementById("task");

const closeModalBtn = document.getElementsByClassName("closeModal")[0];
const createTask = () => {
  taskModal.classList.toggle("active");
};

const closeTaskModal = () => {
  taskModal.classList.remove("active");
};

taskBtn.addEventListener("click", createTask);
closeModalBtn.addEventListener("click", closeTaskModal);

// Date Display Functionality
const dateEL = document.getElementById("todoDate");

const today = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };

dateEL.textContent = today.toLocaleDateString("en-US", options);
