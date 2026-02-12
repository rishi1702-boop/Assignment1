// MODULE 1: USER MANAGEMENT ENGINE
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
// 1. Get only active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);
// 2. Extract names of active users
const activeUserNames = activeUsers.map(user => user.name);
console.log("Names of Active Users:", activeUserNames);
// 3. Check if any admin exists
const hasAdmin = users.some(user => user.role === "admin");
console.log("Is there any admin?", hasAdmin);
// 4. Find user by id
const findUserById = (id) => users.find(user => user.id === id);
console.log("User with ID 2:", findUserById(2));
// 5. Deactivate a user immutably
const deactivateUser = (id) => users.map(user => 
  user.id === id ? { ...user, active: false } : user
);
console.log("Deactivated User with ID 1:", deactivateUser(1));
// MODULE 2: COURSE CATALOG ENGINE
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
// 1. Get published courses
const publishedCourses = courses.filter(course => course.published);
console.log("Published Courses:", publishedCourses);
// 2. Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("Courses sorted by price (high → low):", sortedCourses);
// 3. Extract { title, price } only
const courseTitlesAndPrices = courses.map(course => ({
  title: course.title,
  price: course.price
}));
console.log("Course Titles and Prices:", courseTitlesAndPrices);
// 4. Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce((total, course) => total + course.price, 0);
console.log("Total Value of Published Courses:", totalPublishedValue);
// 5. Add a new course immutably
const addCourse = (newCourse) => [...courses, newCourse];
const newCourse = { id: 104, title: "MongoDB", price: 1199, published: true };
const updatedCourses = addCourse(newCourse);
console.log("Courses after adding new course:", updatedCourses);
// MODULE 3: SHOPPING CART ENGINE
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
// 1. Merge cart with courses to get full course info
const mergedCart = cart.map(item => {
  const course = courses.find(course => course.id === item.courseId);
  return { ...item, course };
});
console.log("Merged Cart with Course Info:", mergedCart);
// 2. Calculate total cart amount
const totalCartAmount = mergedCart.reduce((total, item) => 
  total + (item.course ? item.course.price * item.qty : 0), 0);
console.log("Total Cart Amount:", totalCartAmount);
// 3. Increase quantity of a course (immutably)
const increaseCourseQty = (courseId, increment) => 
  cart.map(item => 
    item.courseId === courseId ? { ...item, qty: item.qty + increment } : item
  );
const updatedCartQty = increaseCourseQty(101, 2);
console.log("Cart after increasing quantity of course 101:", updatedCartQty);
// 4. Remove a course from cart
const removeCourseFromCart = (courseId) => 
  cart.filter(item => item.courseId !== courseId);
const cartAfterRemoval = removeCourseFromCart(103);
console.log("Cart after removing course 103:", cartAfterRemoval);
// 5. Check if all cart items are paid courses
const allCartItemsPaid = mergedCart.every(item => item.course && item.course.price > 0);
console.log("Are all cart items paid courses?", allCartItemsPaid);
// MODULE 4: ROLE & PERMISSION ENGINE
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
// 1. Get all role names
const roleNames = Object.keys(roles);
console.log("Role Names:", roleNames);
// 2. Check if student can delete
const studentCanDelete = roles.student.includes("delete");
console.log("Can student delete?", studentCanDelete);
// 3. Create a flat list of all unique permissions
const allUniquePermissions = [...new Set(Object.values(roles).flat())];
console.log("All Unique Permissions:", allUniquePermissions);
// 4. Add new role moderator immutably
const addRole = (roleName, permissions) => ({
  ...roles,
  [roleName]: permissions
});
const updatedRoles = addRole("moderator", ["update", "view"]);
console.log("Roles after adding moderator:", updatedRoles);

