// Magicians
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
var showMagicians = function (array) {
    array.forEach(function (magician, idx) {
        console.log("".concat(idx + 1, ") ").concat(magician));
    });
};
showMagicians(magicians);
