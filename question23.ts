// Conditional Test

let animal: string = "Lion";

//Test 1
console.log("\nIs animal == 'Lion'? I predict True");
console.log(animal == "Lion");

//Test 2
console.log("\nIs animal == 'Cat'? I predict False");
console.log(animal == "Cat");

//Test 3
console.log("\nIs animal.charAt(0) == 'L'? I predict True");
console.log(animal.charAt(0) == "L");

//Test 4
console.log("\nIs animal == LION? I predict False");
console.log(animal == "LION");

//Test 5
console.log("\nIs animal != 'Tiger'? I predict True");
console.log(animal != "Tiger");

//Test 6
console.log("\nIs animal.toUpperCase() == 'Lion'? I predict False");
console.log(animal.toUpperCase() == "Lion");

//Test 7
console.log("\nIs animal.toLowerCase != 'LION'? I predict True");
console.log(animal.toLowerCase() != "LION");

//test 8
console.log("\nIs animal.toUpperCase() == 'lion'? I predict False");
console.log(animal.toUpperCase() == "lion");

//Test 9
console.log("\nIs animal.length == 4? I predict True");
console.log(animal.length == 4);

//Test 10
console.log("\nIs animal.slice(1) != 'ion'? I predict False");
console.log(animal.slice(1) != "ion");