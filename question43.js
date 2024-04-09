// Unchanged Magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
var showMagicians = function (array) {
    array.forEach(function (magician, idx) {
        console.log("".concat(idx + 1, ") ").concat(magician, "."));
    });
};
//func returns copy of array
var makeGreat = function (array) {
    return array.map(function (magician) { return "The Great ".concat(magician); });
};
var greatMagicians = makeGreat(__spreadArray([], magicians, true)); //callng func with copy of array
console.log("\n\tOriginal Magicians:");
showMagicians(magicians); //  show original original names
console.log("\n\tGreat Magicians:");
showMagicians(greatMagicians); // show modified names
