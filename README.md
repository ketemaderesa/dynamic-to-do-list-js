dynamic-to-do-list-js
__________________________________________________________________________________________________________________________
Overview
-------------------------------------------------------------------------------------------------------------------------
This is a dynamic To-Do List application built with HTML, CSS, and JavaScript.
The application allows users to:

Add tasks

Remove tasks

Persist tasks using Local Storage, ensuring data remains available even after refreshing or reopening the browser.

Project Structure

.
├── index.html   # Main HTML structure for the To-Do List
├── styles.css   # Styles for a clean and responsive interface
└── script.js    # JavaScript logic for task management and Local Storage
Features
Add New Tasks:
Users can type a task and click the Add Task button or press the Enter key to add it.

Remove Tasks:
Each task comes with a Remove button to delete it from both the DOM and Local Storage.

Local Storage Persistence:
All tasks are saved in the browser's Local Storage, ensuring that the list remains intact across page reloads and browser restarts.

How It Works
HTML (index.html)
Contains:

An input field (#task-input) for entering tasks

An "Add Task" button (#add-task)

A task list container (#task-list)

CSS (styles.css)
Styles the input field, button, and task list for clarity and good user experience.

JavaScript (script.js)
DOM Ready Event:
Uses:

javascript

document.addEventListener('DOMContentLoaded', () => {
    // Initialization code
});
Ensures all elements are loaded before running the script.

Element Selection:

taskInput → Task input field

addButton → Add Task button

taskList → Unordered list for tasks

Adding Tasks:

addTask() function:

Gets the task text

Creates a new <li> with a Remove button

Adds it to the DOM and Local Storage

Removing Tasks:

Each task’s Remove button deletes the task from both DOM and Local Storage.

Local Storage:

Saving Tasks: Updates Local Storage whenever a task is added or removed

Loading Tasks: On page load, existing tasks are loaded back from Local Storage

How to Run
Clone the repository:

git clone https://github.com/<ketemaderesa>/dynamic-to-do-list-js.git
Open index.html in a browser.

Add tasks, remove tasks, and refresh the page to see persistent storage in action.

Author
Ketema Deresa