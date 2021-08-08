// // function interfaces. allows us to define a function type to implement mult times
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;
// add = (n1: number, n2:number) => {
//   return n1 + n2;
// }

// splitting interfaces allows to share functionality that need one interface but not another
interface Named {
  readonly name: string;
  // using the ? after a property or method makes it optional
  outputName?: string;
}

// diff between interface and custom type definitions:
// interfaces can only be used to describe the struk of obj. you can use types for that but would also other things.
// interface is clearer. also can be implemented inside of a class.
//// ^^ basically, the class has to do things in a specific way according to the interface.
interface Greetable extends Named {  
  greet(phrase: string): void;
}

class Hobbies {
  constructor(protected hobbies: string[]) {}

  printHobbies() {
    console.log(this.hobbies);
  }
}
// can implement mult interfaces spaced with comma.
//
class Human extends Hobbies implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number, hobbies: string[]) {
    super(hobbies);
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Human("Joshua", 27, ["Board Games", "Reading"]);

user1.greet("Hallo, ich bin");

console.log(user1);


