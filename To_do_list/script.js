const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
let tasks = [];
function addTask(task) {
    tasks.push({ task, completed: false });
    renderTaskList();
}
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.task;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTaskList();
        });
        taskList.appendChild(taskElement);
    });
}
addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});
renderTaskList();