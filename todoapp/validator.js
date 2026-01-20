function validateTitle(title) {
    return typeof title === 'string' && title.trim().length >= 3;
  }
  
  function validatePriority(priority) {
    return ['low', 'medium', 'high'].includes(priority);
  }
  
  function validateDueDate(date) {
    const dueDate = new Date(date);
    const now = new Date();
    return dueDate instanceof Date && !isNaN(dueDate) && dueDate > now;
  }
  
  module.exports = { validateTitle, validatePriority, validateDueDate };
  