import { Shape } from "./shape";

export class Triangle implements Shape {
    sideA: number;
    sideB: number;
    sideC: number;

    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea(): number {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

