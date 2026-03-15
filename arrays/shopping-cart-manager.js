// Shopping Cart Manager
// Demonstrates adding and removing items from an array using push() and pop().
// The program simulates a simple shopping cart.

// Starting Cart: ['milk', 'bread', 'eggs']
// After operations the cart is updated and printed.

const cart = ['Milk', 'Bread', 'Eggs'];

console.log("Initial cart:", cart);

// Add item to cart
cart.push('Curd');
console.log("After adding item:", cart);

// Remove last item from cart
cart.pop();
console.log("After removing item:", cart);  