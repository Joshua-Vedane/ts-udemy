//// INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

////  TYPE GUARDS
//// // FUNCTION OVERLOADS
// allows us to define multiple function signatures. mult ways to call a function with diff params

function add(a: number, b: number): number;
function add(a:string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

// if add is called with two strings, I can't run string methods on the result unless I declare function overloads above. 
const result = add('Joshua', ' Vedane');
result.split(' ');
const result1 = add(1,3);



type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log(`Loading Cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

// check the objects instantiated class
function useVehicle(vehicle: Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//// DISCRIMINATED UNION 

interface Bird{
  //this is a literal type where 'type' must hold a string that must be 'bird'.
  type: 'bird';
  flyingSpeed: number;
}

interface Horse{
  type: 'horse';
  groundSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
  let speed;
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.groundSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 4})


//// Type Casting
// tell TS that some value is of a specific type where TS !able to detect the type

const paragraph = document.getElementById('message-output');
// <HTMLelementByName> goes here to tell TS what it is and that it exists. 
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
  // this would be how to tell ts what it is in JS front end libs/frames (react, angular etc.)
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.style.border = '10px solid #8da19c';

//// INDEX PROPERTIES

interface ErrorContainer{
  // id: string;
  // constructing an object where the property names must be strings
  // I don't know the property name nor how many. but it needs to be a string with a value of string
  [prop: string] : string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};

function errorMessage(message: string){
  switch(message){
    case 'email':
      return errorBag.email;
    case 'username':
      return errorBag.username
  }
}

console.log(errorMessage('email'));


//// OPTIONAL CHAINING (when in doubt... ?????????...all the time)
// when getting info from 3p API/Database/jsx elements before dom rendering...

const fetchedUserData = {
  id: 'u1',
  name: 'Josh',
  job: {title: 'programmer', description: 'Why is this broken....again?!'}
};


console.log(fetchedUserData?.job?.title)


//// NULLISH COALESCING
// ex: you get some data where you're not sure if it's null | undefined | valid . 
// suppose you want a fallback value if its null OR undefined. Then use nullish coalescing operator '??'
const dbData = undefined;
// if dbData is null or undefined, use 'default' value
const storedData = dbData ?? 'DEFAULT';
console.log(storedData);



