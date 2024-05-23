// Bad example
class Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus() {
        this.bonus += this.bonus * 0.2;
        return this.bonus;
    }

    saveEmployeeToDB() {
        // DB connection and other staff
    }

    sendEmailToEmployee() {
        // Email send logic and other staff
    }
}

// Good example
class Employee {
    constructor(private name: string, private bonus: number) {
    }

    calculateBonus() {
        this.bonus += this.bonus * 0.2;
        return this.bonus;
    }
}

class DBManager {
    // DB connection logic written here

    saveEmployeeToDB(employee: Employee) {
        // saving employee to the DB
    }
}

class EmailService {
    // Email send logic written here

    sendEmailToEmployee(employee: Employee) {
        // sending email to the employee
    }
}

const employee = new Employee('Anna', 25000);
const dbManager = new DBManager();
dbManager.saveEmployeeToDB(employee);
