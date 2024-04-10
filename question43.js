// Unchanged Magicians
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
let showMagicians = (array) => {
    array.forEach((magician, idx) => {
        console.log(`${idx + 1}) ${magician}.`);
    });
};
//func returns copy of array
let makeGreat = (array) => {
    return array.map((magician) => `The Great ${magician}`);
};
let greatMagicians = makeGreat([...magicians]); //callng func with copy of array
console.log("\n\tOriginal Magicians:");
showMagicians(magicians); //  show original original names
console.log("\n\tGreat Magicians:");
showMagicians(greatMagicians); // show modified names
