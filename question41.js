// Magicians
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
let showMagicians = (array) => {
    array.forEach((magician, idx) => {
        console.log(`${idx + 1}) ${magician}`);
    });
};
showMagicians(magicians);
