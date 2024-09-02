import { Employee } from "./employee";
import { Payable } from "./payable";

export class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getAnnualBonus(): number {
        return this.salary * 0.20; // 20% от зарплаты
    }

    public pay(): void {
        console.log(`Paying Manager ${this.name}: ${this.salary}`);
    }
}
