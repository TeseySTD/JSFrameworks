export abstract class Car {
    protected make: string;
    protected model: string;
    protected year: number;
    private color: string;

    constructor(make: string, model: string, year: number, color: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    public getDescription(): string {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }

    public abstract getDetails(): string;
}
