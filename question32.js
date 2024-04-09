// checking Usernames
var currentUsers = ["ameen", "qasim", "Zia", "Abishai", "kashif"];
var newUsers = ["robert", "Ameen", "mehar", "hamza", "ABISHAI"];
newUsers.forEach(function (name) {
    if (currentUsers.some(function (user) { return user.toLowerCase() === name.toLowerCase(); })) {
        console.log("".concat(name, " is not available.Please enter a new username"));
    }
    else {
        console.log("".concat(name, " is available"));
    }
    ;
});
