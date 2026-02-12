/*task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions
*/
// Import validator functions
const { validateTitle, validatePriority, validateDueDate } = require('./validator');

const tasks = [];
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if (!validateTitle(title)) {
        return "Error: Invalid title. It must be at least 3 characters long.";
    }
    if (!validatePriority(priority)) {
        return "Error: Invalid priority. It must be one of: low, medium, high.";
    }
    if (!validateDueDate(dueDate)) {
        return "Error: Invalid due date. It must be a future date.";
    }
    // If valid, add to tasks array
    const newTask = {
        id: tasks.length + 1,
        title,
        priority,
        dueDate,
        completed: false
    };
    tasks.push(newTask);
    return "Task added successfully.";
}
// 2. Get all tasks
function getAllTasks() {
    return tasks;
}
// 3. Mark task as complete
function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        return "Task marked as complete.";
    } else {
        return "Error: Task not found.";
    }
}
// Export functions
module.exports = { addTask, getAllTasks, completeTask };
