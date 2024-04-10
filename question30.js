"use strict";
//Hello Admin!
//initializing the arr of users including admin
let userNames = ["ameen", "qasim", "zia", "abishai", "kashif"];
let admin = "zia";
for (let userName of userNames) {
    if (userName === admin) {
        console.log(`Hello ${userName}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
    ;
}
;
