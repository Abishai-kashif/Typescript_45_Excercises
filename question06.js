"use strict";
// Striping Names.
let personName = "\n \t     Abishai     \n"; //this saves name with whitespaces
console.log(`Original Name :${personName}`); // name before stripping whitespaces
personName = personName.trim();
console.log(`Striped Name :${personName}`); //name after stripping whitespaces
