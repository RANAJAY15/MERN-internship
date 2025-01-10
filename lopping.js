
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration: ${i}`);
}
console.log("\nWhile Loop:");
let count = 1;
while (count <= 5) {
    console.log(`Iteration: ${count}`);
    count++;
}

console.log("\nDo-While Loop:");
let num = 1;
do {
    console.log(`Iteration: ${num}`);
    num++;
} while (num <= 5);


console.log("\nFor-In Loop:");
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

console.log("\nFor-Of Loop:");
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(`Value: ${value}`);
}


console.log("\nNested Loop:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Outer Loop: ${i}, Inner Loop: ${j}`);
    }
}


console.log("\nLoop with Break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) break;6
    console.log(`Iteration: ${i}`);
}


console.log("\nLoop with Continue:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; 
    console.log(`Iteration: ${i}`);
}


console.log("\nArray forEach Loop:");
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});


console.log("\nLooping Over a String:");
const str = "Hello";
for (let char of str) {
    console.log(`Character: ${char}`);
}
