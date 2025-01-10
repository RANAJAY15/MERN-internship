


console.log("Arithmetic Operators:");
let a = 10, b = 3;
console.log(`Addition (a + b): ${a + b}`);       
console.log(`Subtraction (a - b): ${a - b}`);   
console.log(`Multiplication (a * b): ${a * b}`); 
console.log(`Division (a / b): ${(a / b).toFixed(2)}`); 
console.log(`Modulus (a % b): ${a % b}`);      
console.log(`Exponentiation (a ** b): ${a ** b}`); 


console.log("\nRelational Operators:");
console.log(`Equal to (a == b): ${a == b}`);      
console.log(`Not equal to (a != b): ${a != b}`);    
console.log(`Greater than (a > b): ${a > b}`);      
console.log(`Less than (a < b): ${a < b}`);        
console.log(`Greater than or equal to (a >= b): ${a >= b}`); 
console.log(`Less than or equal to (a <= b): ${a <= b}`); 


console.log("\nLogical Operators:");
let x = true, y = false;
console.log(`Logical AND (x && y): ${x && y}`);  
console.log(`Logical OR (x || y): ${x || y}`);   
console.log(`Logical NOT (!x): ${!x}`);          


console.log("\nAssignment Operators:");
let c = 5;
console.log(`Initial value (c): ${c}`);
c += 3;  
console.log(`After addition (c += 3): ${c}`);
c -= 2;  
console.log(`After subtraction (c -= 2): ${c}`);
c *= 2;  
console.log(`After multiplication (c *= 2): ${c}`);
c /= 3;  
console.log(`After division (c /= 3): ${c.toFixed(2)}`);
c %= 2;  
console.log(`After modulus (c %= 2): ${c}`);

console.log("\nBitwise Operators:");
let m = 5, n = 3; 
console.log(`Bitwise AND (m & n): ${m & n}`);    
console.log(`Bitwise OR (m | n): ${m | n}`);     
console.log(`Bitwise XOR (m ^ n): ${m ^ n}`);    
console.log(`Bitwise NOT (~m): ${~m}`);          
console.log(`Left shift (m << 1): ${m << 1}`);   
console.log(`Right shift (m >> 1): ${m >> 1}`); 


console.log("\nConditional (Ternary) Operator:");
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);


console.log("\nType Operators:");
console.log(`Type of a: ${typeof a}`);          
console.log(`Type of "Hello": ${typeof "Hello"}`); 
console.log(`Instance of Array: ${[] instanceof Array}`); 
