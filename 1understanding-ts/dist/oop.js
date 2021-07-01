"use strict";
// What is OOP?
/*
  Work with (real-life) entities in your code.

  Objects: The things work with
    Instances of classes (=based on classes)
    Class based creation is an alt to object literals

  Classes: Blueprints for objects (the theoretical definitions of objects)
    Define how objects look like, which properties and methods they have.
    Make creation of multiple, similar objects much easier.

  i.e. we want to make multiple 'persons' each with a name and an age.
*/
class Department {
    /* Easier way to init properties in the constructor itself
  
    //public is default
    private name: string;
    // making employees key private = only accessible within the class (methods).
    // ergo, can't do stuff like employees[2] = 'Rascal'
    private employees: string[] = [];
  
    */
    // built in properties defined with constructor keyword
    //readonly means this id should never change.
    // protected allows property to be used within the class and any class that extends it. 
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    // give describe method 'this' so that when it is called, 'this' inside of describe is referring to an instance which is based on the Department Class.
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//extension inherits everything from class targeted
// super is needed to call the Department constructor function
// if using 'this' keyword, must follow super
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //get methods require a return
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
        console.log(`last report is ${this.lastReport}`);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const accounting = new AccountingDepartment(5, []);
const infoTech = new ITDepartment(29, ["Max", "John", "Dane"]);
console.log(accounting.mostRecentReport);
accounting.addEmployee("Josh");
accounting.addEmployee("Manuel");
accounting.addReport('Duplicate invoice');
accounting.addEmployee('Max');
accounting.printReports();
accounting.printEmployeeInfo();
infoTech.addEmployee("Dane");
console.log(accounting);
console.log(infoTech);
accounting.describe();
// if copy isn't given a name property there will be an issue on compilation because copy won't be based on the Department Class
// const accountingCopy = {name:'DUMMY', describe: accounting.describe};
// accountingCopy.describe();
