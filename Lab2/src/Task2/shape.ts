export interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}
