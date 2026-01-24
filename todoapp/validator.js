/*alidator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }
*/
// Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if (typeof title !== 'string' || title.trim().length < 3) {
        return false;
    }
    return true;
}
// Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority);
}
// Validate due date (must be future date)
function validateDueDate(date) {
    const dueDate = new Date(date);
    const today = new Date();
    // Set time to 00:00:00 for accurate date comparison
    today.setHours(0, 0, 0, 0);
    return dueDate instanceof Date && !isNaN(dueDate) && dueDate > today;
}
module.exports = {
    validateTitle,
    validatePriority,
    validateDueDate
};

