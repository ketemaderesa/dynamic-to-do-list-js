// Wait until HTML is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ==== STEP 1: Select DOM Elements ====
    const addButton = document.getElementById('add-task-btn'); // Correct ID for Add Task button
    const taskInput = document.getElementById('task-input');   // Input where user types tasks
    const taskList = document.getElementById('task-list');     // UL element to display tasks

    // ==== STEP 2: Save task to localStorage ====
    function saveTaskToStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ==== STEP 3: Remove task from localStorage ====
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ==== STEP 4: Add task to list ====
    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove button functionality
        removeBtn.onclick = () => {
            li.remove();
            removeTaskFromStorage(taskText);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";

        if (save) saveTaskToStorage(taskText);
    }

    // ==== STEP 5: Load saved tasks on page load ====
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false));
    }

    // ==== STEP 6: Event listeners ====
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // ==== STEP 7: Initialize ====
    loadTasks();
});
