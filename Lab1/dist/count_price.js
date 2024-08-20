var Toppings;
(function (Toppings) {
    Toppings[Toppings["Chocolate"] = 5] = "Chocolate";
    Toppings[Toppings["Caramel"] = 6] = "Caramel";
    Toppings[Toppings["Berries"] = 10] = "Berries";
})(Toppings || (Toppings = {}));
function ice_cream(size, toppings, marshmallow) {
    if (marshmallow === void 0) { marshmallow = false; }
    var price = 0;
    price = size ? price += 25 : price += 10;
    toppings.forEach(function (t) {
        price += t;
    });
    if (marshmallow)
        price += 5;
    return price;
}
function getUserInput() {
    var sizeInput = prompt("Enter size (small/large): ").toLowerCase();
    var size = sizeInput === 'large';
    var toppingsInput = prompt("Enter toppings (Chocolate, Caramel, Berries) separated by commas: ").split(',').map(function (t) { return t.trim(); });
    var toppings = toppingsInput.map(function (t) { return Toppings[t]; });
    var marshmallowInput = prompt("Do you want marshmallow? (yes/no): ").toLowerCase();
    var marshmallow = marshmallowInput === 'yes';
    return { size: size, toppings: toppings, marshmallow: marshmallow };
}
var userInput = getUserInput();

var price = ice_cream(userInput.size, userInput.toppings, userInput.marshmallow);

console.log("Selected Toppings: ".concat(userInput.toppings.map(function (topping) { return Toppings[topping]; }).join(', ')));
console.log("Total price of ice-cream: ".concat(price));
