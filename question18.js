//seeing the world.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["London", "Paris", "New York", "Tokyo", "Sydney"];
console.log("Original order:", locations);
console.log("Alphabetical order:", __spreadArray([], locations, true).sort()); // making a copy using spread operator and sorting it
console.log("Original order:", locations);
console.log("Reversed alphabetical order:", __spreadArray([], locations, true).sort().reverse()); //reversing the alphabetical order
console.log("Original order:", locations);
console.log("Reversed order:", locations.reverse()); //reversing the order of the array
console.log("Original order:", locations.reverse()); //printing again reversed order
locations.sort();
console.log(locations); //sorting the original array
locations.reverse();
console.log(locations); //sorting in reverse alphabetic order
