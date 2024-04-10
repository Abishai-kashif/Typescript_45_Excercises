"use strict";
// checking Usernames
let currentUsers = ["ameen", "qasim", "Zia", "Abishai", "kashif"];
let newUsers = ["robert", "Ameen", "mehar", "hamza", "ABISHAI"];
newUsers.forEach((name) => {
    if (currentUsers.some(user => user.toLowerCase() === name.toLowerCase())) {
        console.log(`${name} is not available.Please enter a new username`);
    }
    else {
        console.log(`${name} is available`);
    }
    ;
});
