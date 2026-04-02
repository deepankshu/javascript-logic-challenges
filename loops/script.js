// Todo List CLI
// A simple command-line todo application using loops and arrays.

let todos = [];
let input = prompt("Enter command: new, list, delete, quit");

while (input !== "quit") {

    if (input === "new") {
        let newTodo = prompt("Enter a task");
        todos.push(newTodo);
        console.log("New task added");
    } 

    else if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(i, todos[i]);
        }
        console.log("**********");
    } 

    else if (input === "delete") {
        let index = prompt("Enter index to delete:");
        todos.splice(index, 1);
        console.log("Task deleted");
    }

    else {
        console.log("Invalid command");
    }

    input = prompt("Enter command: new, list, delete, quit");
}

console.log("You have quit");