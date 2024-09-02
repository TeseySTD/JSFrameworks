import { Car } from "./car";

export class BMW extends Car {
    private series: string;

    constructor(model: string, year: number, color: string, series: string) {
        super("BMW", model, year, color);
        this.series = series;
    }

    public getDetails(): string {
        return `${this.getDescription()}, Series: ${this.series}`;
    }
}
