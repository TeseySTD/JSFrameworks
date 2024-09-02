import { BMW } from "./bmw";
import { Car } from "./car";
import { Tesla } from "./tesla";
import { Toyota } from "./toyota";

const toyota1 = new Toyota("Camry", 2020, "blue", true);
const toyota2 = new Toyota("Corolla", 2019, "red", false);

const bmw1 = new BMW("X5", 2021, "black", "M");
const bmw2 = new BMW("3 Series", 2020, "white", "i");

const tesla1 = new Tesla("Model S", 2022, "red", true);
const tesla2 = new Tesla("Model 3", 2021, "blue", false);

const cars: Car[] = [toyota1, toyota2, bmw1, bmw2, tesla1, tesla2];

cars.forEach(car => {
    console.log(car.getDetails());
});
