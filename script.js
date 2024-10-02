const ganttContainer = document.getElementById('gantt');
const addTaskButton = document.getElementById('addTask');

let tasks = [];

function renderGantt() {
    ganttContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.style.left = `${task.start * 100}px`; // Posición X
        taskElement.style.width = `${(task.end - task.start) * 100}px`; // Ancho
        taskElement.style.top = `${index * 50}px`; // Posición Y
        taskElement.innerText = task.name;
        ganttContainer.appendChild(taskElement);
    });
}

addTaskButton.addEventListener('click', () => {
    const taskName = prompt('Nombre de la tarea:');
    const start = parseFloat(prompt('Inicio (0-1):'));
    const end = parseFloat(prompt('Fin (0-1):'));
    tasks.push({ name: taskName, start: start, end: end });
    renderGantt();
});
