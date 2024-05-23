// Bad example
class Employee {
    constructor(private name: string, private bonus: number, private role: Developer | PM | QA) {
    }

    calculateBonus() {
        if (this.role instanceof Developer) {
            this.bonus += this.bonus * 2;
        } else if (this.role instanceof PM) {
            this.bonus += this.bonus * 1.5;
        } else if (this.role instanceof QA) {
            this.bonus += this.bonus * 1.8;
        }
        // if a new role is added, the existing method will be modified
        return this.bonus;
    }
}

// Good example
class Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus(role: Role) {
        return role.calculateBonus(this.bonus);
    }
}

interface Role {
    calculateBonus(bonus: number): number;
}

class Developer implements Role {
    calculateBonus(bonus: number) {
        bonus += bonus * 2;
        return bonus;
    }
}

class PM implements Role {
    calculateBonus(bonus: number) {
        bonus += bonus * 1.5;
        return bonus;
    }
}

class QA implements Role {
    calculateBonus(bonus: number) {
        bonus += bonus * 1.8;
        return bonus;
    }
}

const employee = new Employee('Anna', 25000);

const developer = new Developer();
const pm = new PM();
const qa = new QA();

employee.calculateBonus(developer);
employee.calculateBonus(pm);
employee.calculateBonus(qa);
