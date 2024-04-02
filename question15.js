// Changing Guest List
var invitedPeoples = ["Sir qasim", "Sir zia", "Sir Ameen", "Amaan"];
// for(let people of invitedPeoples){
//     // old invitations
//     console.log(`Hello ${people},I respectfully inviting you at dinner tonight.`);
// };
// person who cant make the dinner
var person = "Sir Ameen";
console.log("\n".concat(person, " is not going to come at dinner for some reasons.\n"));
invitedPeoples[invitedPeoples.indexOf(person)] = "Alliah"; //updating array value
for (var _i = 0, invitedPeoples_1 = invitedPeoples; _i < invitedPeoples_1.length; _i++) {
    var people = invitedPeoples_1[_i];
    //new invitations
    console.log("Hello ".concat(people, ",I respectfully inviting you at dinner tonight."));
}
;
