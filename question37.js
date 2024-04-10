"use strict";
//Large T-Shirt
//giving default values
let makeShirt = (size = "large", text = "I love Typescript") => {
    console.log(`Making a ${size} t-shirt with the message "${text}" printed on it.`);
};
makeShirt(); //making with default values
makeShirt("medium"); // making a medium shirt with default message
makeShirt("small", "Typescript is awesome"); // making a small shirt with custom message.
