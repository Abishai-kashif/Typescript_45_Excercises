"use strict";
//Alien Colors #1
//initializing the alien color
let alienColor = "green";
// version that passes the test
if (alienColor === "green") {
    console.log("The player just earned 5 points.");
}
;
// version that fails the test
alienColor = "yellow";
if (alienColor === "green") {
    //when we run the code it will have no output because the condition is false
    console.log("The player just earned 5 points.");
}
;
