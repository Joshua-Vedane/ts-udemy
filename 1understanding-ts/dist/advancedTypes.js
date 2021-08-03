"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
// if add is called with two strings, I can't run string methods on the result unless I declare function overloads above. 
const result = add('Joshua', ' Vedane');
result.split(' ');
const result1 = add(1, 3);
function printEmployeeInfo(emp) {
    console.log("Name: ", emp.name);
    // check if privileges is a property that exists in emp
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate.toLocaleDateString());
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log("Driving car....");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck....");
    }
    loadCargo(amount) {
        console.log(`Loading Cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
// check the objects instantiated class
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.groundSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 4 });
//// Type Casting
// tell TS that some value is of a specific type where TS !able to detect the type
const paragraph = document.getElementById('message-output');
// <HTMLelementByName> goes here to tell TS what it is and that it exists. 
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// this would be how to tell ts what it is in JS front end libs/frames (react, angular etc.)
const userInputElement = document.getElementById('user-input');
userInputElement.style.border = '10px solid #8da19c';
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
function errorMessage(message) {
    switch (message) {
        case 'email':
            return errorBag.email;
        case 'username':
            return errorBag.username;
    }
}
console.log(errorMessage('email'));
//// OPTIONAL CHAINING (when in doubt... ?????????...all the time)
// when getting info from 3p API/Database/jsx elements before dom rendering...
const fetchedUserData = {
    id: 'u1',
    name: 'Josh',
    job: { title: 'programmer', description: 'Why is this broken....again?!' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//// NULLISH COALESCING
// ex: you get some data where you're not sure if it's null | undefined | valid . 
// suppose you want a fallback value if its null OR undefined. Then use nullish coalescing operator '??'
const dbData = undefined;
// if dbData is null or undefined, use 'default' value
const storedData = dbData !== null && dbData !== void 0 ? dbData : 'DEFAULT';
console.log(storedData);
