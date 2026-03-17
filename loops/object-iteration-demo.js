// Object Iteration Demo
// Demonstrates iterating over object properties using for...in loop.

const person = {
    name: "John",
    age: 25,
    city: "Bangalore"
};

for (let key in person) {
    console.log(key, person[key]);
}