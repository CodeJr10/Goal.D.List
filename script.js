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

//Update task status based on due date
// If current date is past the due date -> overdue
// If current date is same as due date -> due

const updateTaskStatus = (dateValue) => {
  const currentDate = new Date();
  const taskDate = new Date(dateValue.replace(/-/g, "/")); // Convert to Date object and fix timezone issues

  if (currentDate > taskDate) {
    return "Overdue";
  } else {
    return "Due";
  }
};

// Task Creation Functionality
const createTaskBtn = document.getElementById("add-task-btn"); // create task button inside the modal
const getTaskTitle = document.getElementById("task-Title");
const getTaskDescription = document.getElementById("task-Description");
const getTaskDate = document.getElementById("task-Date");

//Flow -> Task Card (main div)
// 2nd Flow -> Task Card Header (Title + Due Date + Task Status)

const saveTask = (task) => {
  // read if tasks are saved, if not then save empty array []
  //   You could check if it's empty first, but you'd still need to parse it either way. Here's why:
  // Even if local storage has data in it, what comes out is always a string:
  // javascript'[{"title":"Buy groceries","date":"2026-05-10"}]'
  // You can't call .push() on a string. You need an actual array to push into. So even if it's not empty you still have to parse it to turn it back into a real array before you can do anything with it.
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  existingTasks.push(task); // save new task

  localStorage.setItem("tasks", JSON.stringify(existingTasks));
};

const buildTaskCard = (task) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task-card");

  const newHeader = document.createElement("div");
  // first section of the task card which will contain the title, due date and status badge
  newHeader.classList.add("task-card-header");
  newDiv.appendChild(newHeader);
  const taskTitle = document.createElement("h3");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;
  newHeader.appendChild(taskTitle);

  const taskDate = document.createElement("h5");
  const rawDate = new Date(task.date);
  taskDate.textContent = rawDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  newHeader.appendChild(taskDate);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  newHeader.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    newDiv.remove();
  });
  newHeader.appendChild(deleteBtn);

  const taskDescriptionSection = document.createElement("div"); // 2nd section for task description
  taskDescriptionSection.classList.add("task-card-description");
  newDiv.appendChild(taskDescriptionSection);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-Description");
  taskDescription.textContent = task.description;
  taskDescriptionSection.appendChild(taskDescription);

  const taskFooter = document.createElement("div");
  taskFooter.classList.add("task-card-footer");
  newDiv.appendChild(taskFooter);

  const taskStatusBadge = document.createElement("span");
  const statusData = updateTaskStatus(task.date);
  taskStatusBadge.textContent = statusData;
  taskStatusBadge.classList.add("task-card-badge", statusData.toLowerCase());
  taskFooter.appendChild(taskStatusBadge);

  const taskContainer = document.getElementsByClassName("task-list")[0];
  taskContainer.appendChild(newDiv);
};

const createNewTask = () => {
  const task = {
    title: getTaskTitle.value,
    description: getTaskDescription.value,
    date: getTaskDate.value,
  };
  saveTask(task);
  buildTaskCard(task);
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
