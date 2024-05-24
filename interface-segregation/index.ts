// Bad example
interface Employee {
    calculateBonus(): number;
    submitTimeLogReport(): void;
    writeCode(): void;
}

class Developer implements Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus + this.bonus * 2;
    }

    submitTimeLogReport(): void {
        console.log(`${this.name} submitted time log report.`);
    }

    writeCode(): void {
        console.log(`${this.name} is writing code.`);
    }
}

class PM implements Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus + this.bonus * 1.5;
    }

    submitTimeLogReport(): void {
        console.log(`${this.name} submitted time log report.`);
    }

    // Irrelevant method for PM
    writeCode(): void {
        // PM doesn't write code
        console.log(`${this.name} is writing code.`);
    }
}

// Good example
interface Employee {
    calculateBonus(): number;
    submitTimeLogReport(): void;
}

interface WriteCode {
    writeCode(): void;
}

class Developer implements Employee, WriteCode {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus + this.bonus * 2;
    }

    submitTimeLogReport(): void {
        console.log(`${this.name} submitted time log report.`);
    }

    writeCode(): void {
        console.log(`${this.name} is writing code.`);
    }
}

class PM implements Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus + this.bonus * 1.5;
    }

    submitTimeLogReport(): void {
        console.log(`${this.name} submitted time log report.`);
    }
}

const developer = new Developer('Anna', 25000);
const pm = new PM('Maria', 1200);

developer.submitTimeLogReport();
developer.writeCode();
pm.submitTimeLogReport();
