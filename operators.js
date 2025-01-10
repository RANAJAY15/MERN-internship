// JavaScript Code for Operators

// Arithmetic Operators
console.log("Arithmetic Operators:");
let a = 10, b = 3;
console.log(`Addition (a + b): ${a + b}`);       // 13
console.log(`Subtraction (a - b): ${a - b}`);   // 7
console.log(`Multiplication (a * b): ${a * b}`); // 30
console.log(`Division (a / b): ${(a / b).toFixed(2)}`); // 3.33
console.log(`Modulus (a % b): ${a % b}`);       // 1
console.log(`Exponentiation (a ** b): ${a ** b}`); // 1000

// Relational (Comparison) Operators
console.log("\nRelational Operators:");
console.log(`Equal to (a == b): ${a == b}`);        // false
console.log(`Not equal to (a != b): ${a != b}`);    // true
console.log(`Greater than (a > b): ${a > b}`);      // true
console.log(`Less than (a < b): ${a < b}`);         // false
console.log(`Greater than or equal to (a >= b): ${a >= b}`); // true
console.log(`Less than or equal to (a <= b): ${a <= b}`); // false

// Logical Operators
console.log("\nLogical Operators:");
let x = true, y = false;
console.log(`Logical AND (x && y): ${x && y}`);  // false
console.log(`Logical OR (x || y): ${x || y}`);   // true
console.log(`Logical NOT (!x): ${!x}`);          // false

// Assignment Operators
console.log("\nAssignment Operators:");
let c = 5;
console.log(`Initial value (c): ${c}`);
c += 3;  // Equivalent to c = c + 3
console.log(`After addition (c += 3): ${c}`);
c -= 2;  // Equivalent to c = c - 2
console.log(`After subtraction (c -= 2): ${c}`);
c *= 2;  // Equivalent to c = c * 2
console.log(`After multiplication (c *= 2): ${c}`);
c /= 3;  // Equivalent to c = c / 3
console.log(`After division (c /= 3): ${c.toFixed(2)}`);
c %= 2;  // Equivalent to c = c % 2
console.log(`After modulus (c %= 2): ${c}`);

// Bitwise Operators
console.log("\nBitwise Operators:");
let m = 5, n = 3;  // 5 = 0101, 3 = 0011 in binary
console.log(`Bitwise AND (m & n): ${m & n}`);    // 1 (0001)
console.log(`Bitwise OR (m | n): ${m | n}`);     // 7 (0111)
console.log(`Bitwise XOR (m ^ n): ${m ^ n}`);    // 6 (0110)
console.log(`Bitwise NOT (~m): ${~m}`);          // -6
console.log(`Left shift (m << 1): ${m << 1}`);   // 10 (1010)
console.log(`Right shift (m >> 1): ${m >> 1}`);  // 2 (0010)

// Conditional (Ternary) Operator
console.log("\nConditional (Ternary) Operator:");
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);

// Type Operators
console.log("\nType Operators:");
console.log(`Type of a: ${typeof a}`);          // number
console.log(`Type of "Hello": ${typeof "Hello"}`); // string
console.log(`Instance of Array: ${[] instanceof Array}`); // true
