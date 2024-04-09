//Intentional Error.
var languages = ["English", "Urdu", "Punjabi", "Sindhi", "Pashto"];
console.log("My favorite Languages is ".concat(languages[100])); //Index Error: 100 is not a valid index
languages[3] = "Sindhi"; //correcting the error by excessing the correct index value
