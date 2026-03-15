// Morning Routine List
// Demonstrates adding and removing items from the beginning of an array
// using unshift() and shift().

const routine = ['Wake up', 'Brush teeth', 'Drink water'];

console.log("Initial routine:", routine);

// Add task to beginning
routine.unshift('Exercise');
console.log("After adding task:", routine);

// Remove first task
routine.shift();
console.log("After removing task:", routine);