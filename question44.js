//Sandwitches
let orderSandwitch = (...items) => {
    console.log(`You ordered a sandwitch with ${items.join(", ")}.`);
};
orderSandwitch("chicken", "cheese");
orderSandwitch("egg", "tomato", "onion", "ketchup");
orderSandwitch("chicken", "cheese", "onion", "ketchup", "mayo", "lettuce", "tomato");
