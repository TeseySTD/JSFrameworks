import { Car } from "./car";

export class Toyota extends Car {
    private hybrid: boolean;

    constructor(model: string, year: number, color: string, hybrid: boolean) {
        super("Toyota", model, year, color);
        this.hybrid = hybrid;
    }

    public getDetails(): string {
        return `${this.getDescription()}, Hybrid: ${this.hybrid}`;
    }
}
