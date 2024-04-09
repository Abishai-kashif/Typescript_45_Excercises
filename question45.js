// Cars
var makeCar = function (manufacturer, model) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // It will dynamically add properties to the object if provided.
    more.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
};
console.log(makeCar("Mehran", "X5"));
console.log(makeCar("BMW", "M5", ["color", "black"], ["year", 2020]));
console.log(makeCar("Audi", "A6", ["color", "blue"], ["year", 2021], ["transmission", "automatic"], ["drive", "4x4"]));
