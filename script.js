// Wait until the HTML document is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Step 1: Select the DOM elements needed
    const addButton = document.getElementById('add-task-btn');   // The "Add Task" button
    const taskInput = document.getElementById('task-input');     // Input field where user types task
    const taskList = document.getElementById('task-list');       // UL element to display tasks

    // Step 2: Define a function to load tasks from Local Storage when the page loads
    function loadTasks() {
        // Retrieve the saved tasks from Local Storage or use empty array if none
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        // For each stored task, add it to the DOM without saving again (save = false)
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Step 3: Define a function to save all tasks currently in the list to Local Storage
    function saveTasks() {
        const tasks = [];

        // Loop through all <li> elements inside taskList and collect their text content (task text only)
        document.querySelectorAll('#task-list li').forEach(li => {
            // li.firstChild.textContent contains the task text without the Remove button text
            const textOnly = li.firstChild.textContent;
            tasks.push(textOnly);
        });

        // Save the tasks array back to Local Storage as a JSON string
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Step 4: Define the function that adds a new task to the list
    // Parameters:
    // - taskText (string): the text of the task to add (default to trimmed value from input field)
    // - save (boolean): whether to save tasks to Local Storage after adding (default true)
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // If the task text is empty, alert the user and exit the function
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element and set its text content to the task text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button to delete the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');  // Add CSS class for styling

        // When Remove button is clicked, remove the task from the DOM and update Local Storage
        removeBtn.onclick = () => {
            li.remove();    // Remove the task <li> from the list
            saveTasks();    // Update Local Storage after removal
        };

        // Append the Remove button to the <li> element
        li.appendChild(removeBtn);

        // Append the new <li> to the task list in the DOM
        taskList.appendChild(li);

        // If this task is newly added by user (not loaded from Local Storage), save the updated list
        if (save) {
            saveTasks();
        }

        // Clear the input field to prepare for the next task entry
        taskInput.value = "";
    }

    // Step 5: Add event listeners for user interaction

    // When the Add Task button is clicked, call addTask()
    addButton.addEventListener('click', () => addTask());

    // When user presses Enter key inside the input field, call addTask()
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Load any saved tasks from Local Storage right after page load
    loadTasks();
});
