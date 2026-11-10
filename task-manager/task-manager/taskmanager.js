// Dom elements
const taskinput = document.getElementById("task-input");
const taskform = document.getElementById("task-form");
const tasklist = document.getElementById("task-list");
const filterall = document.getElementById("filter-all");
const filtercompleted = document.getElementById("filter-completed");
const filterpending = document.getElementById("filter-pending");

// Load tasks from local storage.
let tasks = [];
let currentFilter = "all";
try {
    tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (!Array.isArray(tasks)) tasks = [];
} catch {
    tasks = [];
}

function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getCurrentFilter() {
    return currentFilter;
}

function setFilter(filter) {
    currentFilter = filter;
    renderTasks(currentFilter);
}


// add task
function addTask(description) {
    tasks.push({ id: Date.now(), description, completed: false });
    saveTasksToLocalStorage();
    renderTasks(getCurrentFilter());
}


// delet task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToLocalStorage();
    renderTasks(getCurrentFilter());
}


// toggle task compeletion
function toggleTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (!task) return;
    task.completed = !task.completed;
    saveTasksToLocalStorage();
    renderTasks(getCurrentFilter());
}

// render tasks 
function renderTasks(filter = 'all') {
    tasklist.innerHTML = '';


    const filterTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    filterTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        if (task.completed) taskElement.classList.add('completed');

        taskElement.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button onclick="toggleTask(${task.id})">Toggle</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        tasklist.appendChild(taskElement);
    });
}

// task for event

taskform.addEventListener("submit", function (event) {
    event.preventDefault()
    const taskDescription = taskinput.value.trim()
    if (taskDescription) {
        addTask(taskDescription)
        taskinput.value = ""
    }
});

filterall?.addEventListener("click", () => setFilter("all", filterall));
filtercompleted?.addEventListener("click", () => setFilter("completed", filtercompleted));
filterpending?.addEventListener("click", () => setFilter("pending", filterpending));

renderTasks();



