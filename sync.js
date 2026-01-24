console.log("first");
/*for (let i = 0; i < 1000000; i++) {
  // Simulating a time-consuming task
}*/setTimeout(() => {
  console.log("middle");
}, 5000);
console.log("last");