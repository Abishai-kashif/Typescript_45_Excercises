//Hello Admin!
//initializing the arr of users including admin
var userNames = ["ameen", "qasim", "zia", "abishai", "kashif"];
var admin = "zia";
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName === admin) {
        console.log("Hello ".concat(userName.charAt(0).toUpperCase() + userName.slice(1), ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userName.charAt(0).toUpperCase() + userName.slice(1), ", thank you for logging in again."));
    }
    ;
}
;
