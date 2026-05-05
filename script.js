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

// Task Modal Functionality
const taskBtn = document.getElementsByClassName("add-task")[0];
const taskModal = document.getElementById("taskModal");
const overlayEffect = document.getElementsByClassName("overlay")[0];
const closeModalBtn = document.getElementsByClassName("closeModal")[0];

// console.log({ taskBtn, taskModal, overlayEffect, closeModalBtn });

const openTaskModal = () => {
  taskModal.classList.toggle("active");
  overlayEffect.classList.toggle("active");
};

const closeTaskModal = () => {
  taskModal.classList.remove("active");
  overlayEffect.classList.remove("active");
};

taskBtn.addEventListener("click", openTaskModal);
closeModalBtn.addEventListener("click", closeTaskModal);

// Task Creation Functionality
const createTaskBtn = document.getElementById("add-task-btn"); // create task button inside the modal
const getTaskTitle = document.getElementById("task-Title");
const getTaskDescription = document.getElementById("task-Description");
const getTaskDate = document.getElementById("task-Date");

const createNewTask = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task-card");

  const taskTitle = document.createElement("h3");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = getTaskTitle.value;
  newDiv.appendChild(taskTitle);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-Description");
  taskDescription.textContent = getTaskDescription.value;
  newDiv.appendChild(taskDescription);

  const taskDate = document.createElement("h5");
  taskDate.textContent = getTaskDate.value;
  newDiv.appendChild(taskDate);

  const taskContainer = document.getElementsByClassName("task-list")[0];
  taskContainer.appendChild(newDiv);

  // Clear input fields and close modal
  getTaskTitle.value = "";
  getTaskDescription.value = "";
  getTaskDate.value = "";
  closeTaskModal();
};

createTaskBtn.addEventListener("click", createNewTask);
// Date Display Functionality
const dateEL = document.getElementById("todoDate");

const today = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };

dateEL.textContent = today.toLocaleDateString("en-US", options);
