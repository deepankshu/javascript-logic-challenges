// Focus: map, filter, reduce, forEach

// 7. 🛒 Shopping Cart System

// Build:

// Total price → reduce
// Expensive items → filter
// Names list → map


const cart = [
  { 
    name: "Shirt", price: 500
    },
  {
     name: "Shoes", price: 2000
    }
];

const total = cart.reduce((sum, item)=> sum + item.price , 0);
console.log(total);

const ExpItem = cart.filter(item => item.price > 1000);

const list = cart.map(item => item.name);