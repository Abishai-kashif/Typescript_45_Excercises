// Shrinking Guests
var invitedPeoples = ["Ayesha", "Sir qasim", "Hira", "Sir zia", "Alliah", "Amaan", "Fatima"];
console.log("New dinner table wont arive at the time of the dinner,so I can invite only 2 guests.\n");
//removing each person till only 2 left
while (invitedPeoples.length > 2) {
    var removedPerson = invitedPeoples.pop();
    console.log("Sorry ".concat(removedPerson, ", I can't invite you to dinner.")); //apologizing each person
}
;
console.log(""); // adding an empty line
invitedPeoples.forEach(function (val) {
    console.log("Hello ".concat(val, ",you are still invited at dinner tonight."));
});
invitedPeoples.splice(0, invitedPeoples.length); //removing all elements from array
console.log(invitedPeoples); //printing empty array
