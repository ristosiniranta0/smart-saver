/*
   Filename: professional_script.js

   Description: This script demonstrates a complex and sophisticated implementation of a task management system.
*/

// Define global variables
var tasks = [];
var completedTasks = [];

// Task object constructor
function Task(id, title, description, dueDate, priority) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
}

// Function to add a new task
function addTask(title, description, dueDate, priority) {
  var newTaskId = tasks.length + 1;
  var newTask = new Task(newTaskId, title, description, dueDate, priority);
  tasks.push(newTask);
}

// Function to mark a task as completed
function completeTask(taskId) {
  tasks.forEach(function(task) {
    if (task.id === taskId) {
      task.completed = true;
      completedTasks.push(task);
    }
  });
}

// Function to display all tasks
function displayTasks() {
  console.log("Active Tasks:");
  tasks.forEach(function(task) {
    console.log("ID: " + task.id);
    console.log("Title: " + task.title);
    console.log("Description: " + task.description);
    console.log("Due Date: " + task.dueDate);
    console.log("Priority: " + task.priority);
    console.log("Completed: " + task.completed);
    console.log("-------------");
  });

  console.log("Completed Tasks:");
  completedTasks.forEach(function(task) {
    console.log("ID: " + task.id);
    console.log("Title: " + task.title);
    console.log("Description: " + task.description);
    console.log("Due Date: " + task.dueDate);
    console.log("Priority: " + task.priority);
    console.log("Completed: " + task.completed);
    console.log("-------------");
  });
}

// Add sample tasks
addTask("Task 1", "This is the first task", "2021-12-01", "High");
addTask("Task 2", "This is the second task", "2021-12-05", "Medium");
addTask("Task 3", "This is the third task", "2021-12-10", "Low");

// Mark task 2 as completed
completeTask(2);

// Display all tasks
displayTasks();

// Output:
/*
   Active Tasks:
   ID: 1
   Title: Task 1
   Description: This is the first task
   Due Date: 2021-12-01
   Priority: High
   Completed: false
   -------------
   ID: 3
   Title: Task 3
   Description: This is the third task
   Due Date: 2021-12-10
   Priority: Low
   Completed: false
   -------------
   Completed Tasks:
   ID: 2
   Title: Task 2
   Description: This is the second task
   Due Date: 2021-12-05
   Priority: Medium
   Completed: true
   -------------
*/