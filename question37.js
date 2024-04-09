//Large T-Shirt
//giving default values
var makeShirt = function (size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(text, "\" printed on it."));
};
var message = "Typescript is awesome";
makeShirt(); //making large shirt
makeShirt("medium"); // making a medium shirt
makeShirt("small", message); // making a small shirt with overiding the default message
