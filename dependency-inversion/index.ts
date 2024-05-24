// Bad example
class Database {
    save(employee: Employee) {
        console.log(`Saving ${employee.name} to the database.`);
    }
}

class Employee {
    constructor(public name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus;
    }
}

class EmployeeService {
    private database: Database;

    constructor() {
        // This service is tightly coupled with the Database class
        // If we want to change the database implementation, we will have to modify this class
        this.database = new Database(); // Direct dependency on a concrete class
    }

    saveEmployeeToDB(employee: Employee) {
        this.database.save(employee);
    }
}

// Good example
interface Database {
    save(employee: Employee): void;
}

class SQLDatabase implements Database {
    save(employee: Employee) {
        console.log(`Saving ${employee.name} to the SQL database.`);
    }
}

class NoSQLDatabase implements Database {
    save(employee: Employee) {
        console.log(`Saving ${employee.name} to the NoSQL database.`);
    }
}

class Employee {
    constructor(public name: string, private bonus: number) {
    }

    calculateBonus(): number {
        return this.bonus;
    }
}

class EmployeeService {
    private database: Database;

    constructor(database: Database) {
        this.database = database; // Depend on abstraction
    }

    saveEmployeeToDB(employee: Employee) {
        this.database.save(employee);
    }
}

const employee = new Employee('Anna', 25000);
const sqlDatabase = new SQLDatabase();
const noSqlDatabase = new NoSQLDatabase();

const employeeServiceWithSQL = new EmployeeService(sqlDatabase);
const employeeServiceWithNoSQL = new EmployeeService(noSqlDatabase);

employeeServiceWithSQL.saveEmployeeToDB(employee);
employeeServiceWithNoSQL.saveEmployeeToDB(employee);
