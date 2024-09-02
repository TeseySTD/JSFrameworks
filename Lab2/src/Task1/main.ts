import {Cat, Fish, Bird} from "./animal_classes";
import {AnimalBehavior} from "./animal_behavior";

let cat = new Cat("Tom", "cat", "black");
let fish = new Fish("Nemo", "fish");
let bird = new Bird("Duck", "bird", "quack");

cat.eat();
cat.move();
cat.sleep();    

fish.eat();
fish.move();
fish.sleep();

bird.eat();
bird.move();
bird.sleep();