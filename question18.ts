//seeing the world.

let locations: string[] = ["London", "Paris", "New York", "Tokyo", "Sydney"];
console.log("Original order:",locations);


console.log("Alphabetical order:",[...locations].sort());// making a copy using spread operator and sorting it
console.log("Original order:",locations);

console.log("Reversed alphabetical order:",[...locations].sort().reverse());//reversing the alphabetical order
console.log("Original order:",locations);

console.log("Reversed order:",locations.reverse());//reversing the order of the array
console.log("Original order:",locations.reverse());//printing again reversed order

locations.sort()
console.log(locations);//sorting the original array


locations.reverse()
console.log(locations);//sorting in reverse alphabetic order






