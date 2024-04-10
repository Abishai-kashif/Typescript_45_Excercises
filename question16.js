"use strict";
// More Guests.
let invitedPeoples = ["Sir qasim", "Sir zia", "Alliah", "Amaan"];
// informing everyone that there is a bigger table
console.log("Great news,I just found a bigger dinner table.\n");
invitedPeoples.unshift("Ayesha"); //adding element at the first position
invitedPeoples.splice(Math.floor(invitedPeoples.length / 2), 0, "Hira"); //adding element in the middle
invitedPeoples.push("Fatima"); //adding element at the last position
invitedPeoples.forEach((people) => {
    // inviting everyone
    console.log(`Hello ${people},I cordially invite you at dinner tonight.`);
});
