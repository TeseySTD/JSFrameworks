import { Developer } from "./developer";
import { Employee } from "./employee";
import { Manager } from "./manager";
import { Payable } from "./payable";

const employees: Employee[] = [
    new Developer("Alice", 30, 6000),
    new Developer("Bob", 25, 5500),
    new Manager("Charlie", 40, 8000),
    new Manager("Dave", 35, 7500)
];

let totalAnnualBonus = 0;

employees.forEach(employee => {
    totalAnnualBonus += employee.getAnnualBonus();
});

console.log(`Total Annual Bonus: ${totalAnnualBonus}`);
