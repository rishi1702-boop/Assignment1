/*app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
*/
// Import task functions
const { addTask, getAllTasks, completeTask } = require('./task');
// Test your module system
// 1. Add some tasks
console.log(addTask("Buy groceries", "medium", "2024-12-01")); // Valid
console.log(addTask("Do", "high", "2024-11-01")); // Invalid title
console.log(addTask("Clean house", "urgent", "2024-10-01")); // Invalid priority
console.log(addTask("Pay bills", "low", "2022-01-01")); // Invalid due date
// 2. Display all tasks
console.log("All Tasks:", getAllTasks());
// 3. Complete a task
console.log(completeTask(1)); // Complete task with ID 1
// 4. Display all tasks again
console.log("All Tasks After Completion:", getAllTasks());
