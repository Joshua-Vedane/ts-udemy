////BUILT IN GENERICS
const names: Array<string> = ["Josh", "Moira"];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

//// CUSTOM GENERIC TYPES

//merges two objects and returns one object
// T, U means we know we will get diff data types and return intersection
// can set constraints on generic types. here, both must be objects.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//TS dynamically infers the type of the objects when we call the function(hover over merge call below to see)
console.log(merge({ name: "Joshua" }, { age: 27 }));

// if we try to store this merged obj and access a property, TS doesn't know that it has those keys
// solved by adding a capital letter for a custom type in <> in function declaration.
// TS then infers that the function returns the intersection of T & U and that mergedObj has name and age keys.
const mergedObj = merge({ name: "Joshua" }, { age: 27 });
mergedObj.age;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There"));

//// KEYOF CONSTRAINT
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

console.log(extractAndConvert({ name: "Joshua" }, "name"));

////GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1){
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Taco');
textStorage.addItem('Cat');
textStorage.removeItem('Cat');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const joshuaObj = {
//   name: 'Joshua',
//   age: 27,
//   job: 'Developer'
// }
// const bridgetObj = {
//   name: 'Bridget',
//   age: 25,
//   job: 'Analyst'
// }
// objStorage.addItem(joshuaObj);
// objStorage.addItem(bridgetObj);
// objStorage.removeItem(joshuaObj);
// console.log(objStorage.getItems());

//// BUILT IN TYPES THAT ARE GENERICS
// only exist in TS
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
  // Partial makes the properties optional
  // might want this when we want to assign property vals one at a time with checks and validation. etc. 
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;

}

// readonly generic
const people: Readonly<string[]> = ['Max', 'Anna'];
// can't change data in Readonly
// people.pop();
