//Sandwitches
var orderSandwitch = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwitch with ".concat(items.join(", "), "."));
};
orderSandwitch("chicken", "cheese");
orderSandwitch("egg", "tomato", "onion", "ketchup");
orderSandwitch("chicken", "cheese", "onion", "ketchup", "mayo", "lettuce", "tomato");
