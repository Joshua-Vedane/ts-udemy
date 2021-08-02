"use strict";
// // function interfaces. allows us to define a function type to implement mult times
// interface AddFn {
//   (a: number, b: number): number;
// }
class Hobbies {
    constructor(hobbies) {
        this.hobbies = hobbies;
    }
    printHobbies() {
        console.log(this.hobbies);
    }
}
// can implement mult interfaces spaced with comma.
//
class Person extends Hobbies {
    constructor(name, age, hobbies) {
        super(hobbies);
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Joshua", 27, ["Board Games", "Reading"]);
user1.greet("Hallo, ich bin");
console.log(user1);
