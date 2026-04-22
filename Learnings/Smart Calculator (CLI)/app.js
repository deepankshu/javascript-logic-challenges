
// Focus: basic functions, arguments, return values

// 1. 🔢 Smart Calculator (CLI)
// Build a calculator with reusable functions:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// 👉 Level up:

// Add calculate(operation, a, b) → uses conditionals
// Handle invalid input using try/catch



let calc = (operations,a,b) => {
    try{
        if(operations === "add"){
        return a+b;
    }
    else if(operations === "sub"){
        return a-b;
    }
    else if(operations === "mul"){
        return a*b;
    }
    else if(operations === "divide") {
        if (b===0){
            throw new Error("Cant divide by 0")
        }
        else{
            return a/b;
        }
    }
    else {
        return "Invalid operation! Please choose: add, sub, mul, or divide.";
    }
}
    catch(error){
        return error.message;
    }
}