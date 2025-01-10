// 1. Function Declaration
console.log("Function Declaration:");
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!

// 2. Function Expression (Anonymous Function)
console.log("\nFunction Expression:");
const add = function(a, b) {
    return a + b;
};

console.log(`Addition: 5 + 3 = ${add(5, 3)}`); // Output: Addition: 5 + 3 = 8

// 3. Arrow Function (ES6)
console.log("\nArrow Function:");
const multiply = (x, y) => x * y;

console.log(`Multiplication: 4 * 2 = ${multiply(4, 2)}`); // Output: Multiplication: 4 * 2 = 8

// 4. Function with Default Parameters
console.log("\nFunction with Default Parameters:");
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Bob"); // Output: Hello, Bob!

// 5. Function with Return Value
console.log("\nFunction with Return Value:");
function subtract(a, b) {
    return a - b;
}

console.log(`Subtraction: 10 - 4 = ${subtract(10, 4)}`); // Output: Subtraction: 10 - 4 = 6

// 6. Function Expression with Return
console.log("\nFunction Expression with Return:");
const divide = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};

console.log(`Division: 20 / 5 = ${divide(20, 5)}`); // Output: Division: 20 / 5 = 4
console.log(`Division: 20 / 0 = ${divide(20, 0)}`); // Output: Division: 20 / 0 = Cannot divide by zero!

// 7. IIFE (Immediately Invoked Function Expression)
console.log("\nIIFE (Immediately Invoked Function Expression):");
(function() {
    console.log("This function runs immediately!");
})();

// 8. Function with Rest Parameters
console.log("\nFunction with Rest Parameters:");
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(`Sum of numbers: ${sumAll(1, 2, 3, 4, 5)}`); // Output: Sum of numbers: 15

// 9. Function Returning Another Function
console.log("\nFunction Returning Another Function:");
function outerFunction() {
    return function innerFunction() {
        console.log("This is an inner function!");
    };
}

const inner = outerFunction();
inner(); // Output: This is an inner function!

// 10. Recursion (Function Calling Itself)
console.log("\nRecursion:");
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120
