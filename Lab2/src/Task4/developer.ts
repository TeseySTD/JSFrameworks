import { Employee } from "./employee";
import { Payable } from "./payable";

export class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getAnnualBonus(): number {
        return this.salary * 0.10; // 10% от зарплаты
    }

    public pay(): void {
        console.log(`Paying Developer ${this.name}: ${this.salary}`);
    }
}
