// Number List Transformer
// Demonstrates reverse(), slice(), and splice() operations on arrays.

const numbers = [1,2,3,4,5,6];

// Reverse the array
numbers.reverse();
console.log("Reversed array:", numbers);

// Extract first two elements using slice
const slicedNumbers = numbers.slice(0,2);
console.log("Sliced array:", slicedNumbers);

// Remove first two elements using splice
numbers.splice(0,2);
console.log("Array after splice:", numbers);