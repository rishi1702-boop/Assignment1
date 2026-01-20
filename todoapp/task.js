const { validateTitle, validatePriority, validateDueDate } = require('./validator');

const tasks = [];

function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    console.error("Invalid title. It must be at least 3 characters long.");
    return;
  }
  if (!validatePriority(priority)) {
    console.error("Invalid priority. Must be low, medium, or high.");
    return;
  }
  if (!validateDueDate(dueDate)) {
    console.error("Invalid due date. Must be a future date.");
    return;
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    status: "Pending"
  };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}

function getAllTasks() {
  return tasks;
}

function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.status = "Completed";
    console.log("Task completed:", task);
  } else {
    console.error("Task not found with ID:", taskId);
  }
}

module.exports = { addTask, getAllTasks, completeTask };
