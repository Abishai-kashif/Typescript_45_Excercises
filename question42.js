// Great Magicians
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
var showMagicians = function (array) {
    array.forEach(function (magician, idx) {
        console.log("".concat(idx + 1, ") ").concat(magician, "."));
    });
};
var makeGreat = function (array) {
    magicians.forEach(function (magician) {
        magicians.splice(magicians.indexOf(magician), 1, "The Great ".concat(magician));
    });
};
makeGreat(magicians); //modifies original array
showMagicians(magicians); //show modified names
