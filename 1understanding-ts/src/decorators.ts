//https://www.typescriptlang.org/docs/handbook/decorators.html
// set experimental decorators to 'true' in tsconfig
//// DECORATOR
// def: it's really just a function you apply to something(a class) in a specific way
// a declaration that can be attached to a class decl, method, prop, param that evaluates to a function
// decorators execute from the bottom up. and run when a class is defined
//// CLASS DECORATORS
// class decorators always target the constructor function of the class.

// function Logger(target: Function){
// target is the constructor function of Person Class
//   console.log('Logging....');
//   console.log(target);
// }

// this is a factory decorator. it returns an function
function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  // giving the target(constructor) as an '_' tells TS that we don't need it
  return function (target: any) {
    console.log("Rendering Template...");
    const hookEl = document.getElementById(hookId);
    const p = new target();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// decorators run when class is defined, not when instantiated
// '@' attaches the decorator
@WithTemplate("<h1>My Person Object</h1>", "app")
@Logger("LOGGING - PERSON")
class Person {
  name = "Joshua";
  constructor() {
    console.log("creating person object...");
  }
}

const pers = new Person();
console.log(pers);

////PROPERTY DECORATOR
// target will either be the prototype for instances or constructor if static
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator...");
  console.log(target, propertyName);
}

////ACCESSOR AND PROPERTY DECORATORS
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//// METHOD DECORATOR
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//// PARAM DECORATOR
// name is the name of the method in which the param is used
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Param Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - negative numbers not allowed");
    }
  }

  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
