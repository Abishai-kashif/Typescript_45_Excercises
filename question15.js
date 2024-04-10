"use strict";
// Changing Guest List.
let invitedPeoples = ["Sir qasim", "Sir zia", "Sir Ameen", "Amaan"];
// person who cant make the dinner
let person = "Sir Ameen";
console.log(`\n${person} is not going to come at dinner for some reasons.\n`);
invitedPeoples[invitedPeoples.indexOf(person)] = "Alliah"; //updating array value
for (let people of invitedPeoples) {
    //new invitations
    console.log(`Hello ${people},I respectfully inviting you at dinner tonight.`);
}
;
