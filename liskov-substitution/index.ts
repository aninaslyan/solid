// Bad example
class Employee {
    constructor(protected name: string, protected bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus;
    }
}

class Developer extends Employee {
    calculateBonus(): number {
        return this.bonus + this.bonus * 2;
    }
}

class PM extends Employee {
    calculateBonus(): number {
        return this.bonus + this.bonus * 1.5;
    }
}

class QA extends Employee {
    calculateBonus(): number {
        // Violates LSP by modifying the state of the employee object unexpectedly
        // Instead should be calculating bonus for QA individually
        this.bonus = 10; // Modifies state unexpectedly
        return this.bonus;
    }
}

// Good example
class Employee {
    constructor(protected name: string, protected bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus;
    }
}

class Developer extends Employee {
    calculateBonus(): number {
        return this.bonus + this.bonus * 2;
    }
}

class PM extends Employee {
    calculateBonus(): number {
        return this.bonus + this.bonus * 1.5;
    }
}

class QA extends Employee {
    calculateBonus(): number {
        return this.bonus + this.bonus * 1.8;
    }
}

const developer = new Developer('Anna', 25000);
const pm = new PM('Maria', 1200);
const qa = new QA('Karen', 5000);

developer.calculateBonus();
pm.calculateBonus();
qa.calculateBonus();
