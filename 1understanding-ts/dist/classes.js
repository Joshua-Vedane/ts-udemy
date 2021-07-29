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
    // built in properties defined with constructor keyword
    //readonly means this id should never change after initialization
    // protected allows property to be used within the class and any class that extends it.
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    // static methods allow us access without instantiating
    static createEmployee(name) {
        return { name: name };
    }
    // give describe method 'this' so that when it is called, 'this' inside of describe is referring to an instance which is based on the Department Class.
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
    // Suppose we want describe method but each object needs to implement it in its own way.
    // Give it the 'abstract' keyword, any params the function takes, and the define the return type.
    // Also will need to add 'abstract' to the class. Once you do this, that class can only be inherited from, not instantiated
    // abstract describe(this:Department) : void;
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
/* It's much easier to init properties only in constructor. This leaves the class to only be methods.
  private id: string;
  private name: string;
  private employees: string[] = [];
  ** In constructor, to init these values need to repeat.
  constructor(id: string, n: string){
    this.id = id;
    this.name = n;
  }

//public is default
private name: string;
// making employees key private = only accessible within the class (methods).
// ergo, can't do stuff like employees[2] = 'Rascal'
private employees: string[] = [];
*/
Department.fiscalYear = 2021;
//extension inherits everything from class targeted
class ITDepartment extends Department {
    constructor(id, admins) {
        // super calls the constructor of the base class
        // if using 'this' keyword, must follow super
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    // making a constructor private ensures that we can't make more objects based on the Accounting Department. (can't call 'new')
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
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    // this solves the issue of trying to instantiate this object. When the constructor is private, we need a way to make itself.
    // static getInstance() {
    //   if (this.instance) {
    //     return this.instance;
    //   }
    //   this.instance = new AccountingDepartment(5, []);
    // }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
        console.log(`last report is ${this.lastReport}`);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log("Accounting Department - ID " + this.id);
    }
}
const accounting = new AccountingDepartment(5, []);
// const accounting = AccountingDepartment.getInstance();
const infoTech = new ITDepartment(29, ["Max"]);
//accessing static methods and properties
// const employee1 = Department.createEmployee('Taco');
// console.log(employee1);
// const employee2 = AccountingDepartment.createEmployee('Jimbo');
// console.log(employee2);
// console.log(Department.fiscalYear);
accounting.addEmployee("Josh");
accounting === null || accounting === void 0 ? void 0 : accounting.addEmployee("Manuel");
accounting === null || accounting === void 0 ? void 0 : accounting.addReport("Testing it out");
accounting === null || accounting === void 0 ? void 0 : accounting.addReport("Second Report");
accounting === null || accounting === void 0 ? void 0 : accounting.addEmployee("Max");
// accounting.printReports();
// accounting.printEmployeeInfo();
accounting === null || accounting === void 0 ? void 0 : accounting.describe();
infoTech.addEmployee("Dane");
// access getters and setters like properties.
accounting.mostRecentReport = "All is well.";
console.log(accounting === null || accounting === void 0 ? void 0 : accounting.mostRecentReport);
console.log(accounting);
console.log(infoTech);
accounting === null || accounting === void 0 ? void 0 : accounting.describe();
// if copy isn't given a name property there will be an issue on compilation because copy won't be based on the Department Class
// const accountingCopy = {name:'DUMMY', describe: accounting.describe};
// accountingCopy.describe();
