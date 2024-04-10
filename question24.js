"use strict";
//MORE CONDITIONAL TEST!
let color = "Blue";
let age = 17;
let games = ["hockey", "cricket", "football", "tenis"];
//Tests for equality and inequality with strings
console.log("TESTING FOR EQUALITY WITH STRING!");
console.log("\nIs color == 'Blue'? I predict True");
console.log(color == "Blue");
console.log("\nIs color != 'Blue'? I predict False");
console.log(color != "Blue");
//Tests using the lower case function
console.log("\nTESTING WITH STRINGS USING LOWER CASE!");
console.log("\nIs color.toLowerCase() == 'blue'? I predict True");
console.log(color.toLowerCase() == "blue");
console.log("\nIs color.toLowerCase() == 'BLUE'? I predict False");
console.log(color.toLowerCase() == "BLUE");
//Numerical tests
console.log("\nNUMERICAL TESTS");
console.log("\nIs age == 17? I predict True");
console.log(age == 17);
console.log("\nIs age != 17? I predict False");
console.log(age != 17);
console.log("\nIs age > 12? I predict True");
console.log(age > 12);
console.log("\nIs age < 17? I predict False");
console.log(age > 17);
console.log("\nIs age <= 18? I predict True");
console.log(age <= 18);
console.log("\nIs age >= 60? I predict False");
console.log(age >= 60);
//Tests using "and" and "or" operators
console.log("\nTESTS USING AND & OR OPERATORS");
console.log("\nIs color == 'Blue' && age < 18? I predict True");
console.log(color == "Blue" && age < 18);
console.log("\nIs color == 'Blue' && age > 18? I predict False");
console.log(color == "Blue" && age > 18);
console.log("\nIs color != 'Blue' || age <= 60? I predict True");
console.log(color != "Blue" || age <= 60);
console.log("\nIs color == 'Green' || age > 18? I predict False");
console.log(color == "Green" || age > 18);
//Test whether an item is in a array
console.log("\nTEST WHETHER AN ITEM IS IN A ARRAY");
console.log("\nIs games.includes('hockey')? I predict True");
console.log(games.includes("hockey"));
console.log("\nIs games.includes('basketball')? I predict False");
console.log(games.includes("basketball"));
//Test whether an item is not in a array
console.log("\nTEST WHETHER AN ITEM IS NOT IN A ARRAY");
console.log("\nIs !games.includes('basketball')? I predict True");
console.log(!games.includes("basketball"));
console.log("\nIs !game.includes('hockey')? I predict False");
console.log(!games.includes("hockey"));
