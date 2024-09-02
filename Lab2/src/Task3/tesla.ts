import { Car } from "./car";

export class Tesla extends Car {
    private autopilot: boolean;

    constructor(model: string, year: number, color: string, autopilot: boolean) {
        super("Tesla", model, year, color);
        this.autopilot = autopilot;
    }

    public getDetails(): string {
        return `${this.getDescription()}, Autopilot: ${this.autopilot}`;
    }
}
