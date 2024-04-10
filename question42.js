// Great Magicians
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
let showMagicians = (array) => {
    array.forEach((magician, idx) => {
        console.log(`${idx + 1}) ${magician}.`);
    });
};
let makeGreat = (magicians) => {
    magicians.forEach((magician) => {
        magicians.splice(magicians.indexOf(magician), 1, `The Great ${magician}`);
    });
};
makeGreat(magicians); //modifies original array
showMagicians(magicians); //show modified names
