enum Toppings {
    Chocolate = 5,
    Caramel = 6,
    Berries = 10
}

function ice_cream(size: boolean, toppings: Toppings[], marshmallow: boolean = false): number {
    let price: number = 0;
    price = size ? price += 25 : price += 10;
    toppings.forEach(t => {
        price += t;
    });
    if (marshmallow) price += 5;
    return price;
}

function getUserInput(): { size: boolean, toppings: Toppings[], marshmallow: boolean } {
    const sizeInput = prompt("Enter size (small/large): ").toLowerCase();
    const size = sizeInput === 'large';

    const toppingsInput = prompt("Enter toppings (Chocolate, Caramel, Berries) separated by commas: ").split(',').map(t => t.trim());
    const toppings: Toppings[] = toppingsInput.map(t => Toppings[t as keyof typeof Toppings]);

    const marshmallowInput = prompt("Do you want marshmallow? (yes/no): ").toLowerCase();
    const marshmallow = marshmallowInput === 'yes';

    return { size, toppings, marshmallow };
}

const userInput = getUserInput();

const price = ice_cream(userInput.size, userInput.toppings, userInput.marshmallow);

console.log(`Selected Toppings: ${userInput.toppings.map(topping => Toppings[topping]).join(', ')}`);
console.log(`Total price of ice-cream: ${price}`);
