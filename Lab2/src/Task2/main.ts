import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";
import { Triangle } from "./triangle";

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

let totalArea = 0;
let totalPerimeter = 0;

shapes.forEach(shape => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});

console.log(`Total Area: ${totalArea}`);
console.log(`Total Perimeter: ${totalPerimeter}`);

shapes.forEach(shape => shape.scale(2));

totalArea = 0;
totalPerimeter = 0;

shapes.forEach(shape => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});

console.log(`Total Area after scaling: ${totalArea}`);
console.log(`Total Perimeter after scaling: ${totalPerimeter}`);
