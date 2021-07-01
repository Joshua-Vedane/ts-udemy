"use strict";
// const buttonSub = document.querySelector("button");
// const inputOne = document.getElementById("num1")! as HTMLInputElement;
// const inputTwo = document.getElementById("num2")! as HTMLInputElement;
// function addNums(num1: number, num2: number){
//   return num1 + num2;
// }
// buttonSub.addEventListener("click", function(){
//   console.log(addNums(+inputOne.value, +inputTwo.value));
// })
// this isn't great syntax because we can just infer the types.
// But if this was receiving from an input form on the DOM, then we should be very specific about what goes in 'person'
// const person: {
//   name: string;
//   age: number;
// } = {
// const person = {
//   name: 'Moira',
//   age: 1
// }
// console.log(person.name);
// this isn't great syntax because we can just infer the types.
// But if this was receiving from an input form on the DOM, then we should be very specific about what goes in 'person'
// const person: {
//   name: string;
//   age: number;
// } = {
// const person:
// {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Moira',
//   age: 1,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};
// const person = {
//   name: 'Moira',
//   age: 1,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN
// }
// let favoriteActivities: string[];
// favoriteActivities = ['sports'];
// console.log(person.name);
// for(const hobby of person.hobbies){
//   console.log(hobby.toUpperCase());
//   // can't access something like map here because TS knows hobby is a string.
// }
// if (person.role === Role.ADMIN){
//   console.log('is admin');
// }
////////////////////// Union Aliases
// export {}
// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text'
// //union types.
// function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
//   let result;
//   if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
//     result = +input1 + +input2;
//   }else {
//     result = input1.toString() + input2.toString();
//   }
//   // if(resultConversion === 'as-number'){
//   //   return +result;
//   // }else{
//   //   return result.toString();
//   // }
//   return result
// }
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);
// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);
// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);
////////////////////// Functions Notes
// export {};
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   console.log(`Result: ${num}`);
// }
// // cb is a function that takes number param and returns nothing
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }
// //this throws an error. null can't be assignable to void.
// // function sayHi(): void{
// //  return null;
// // }
// printResult(add(12, 5));
// // combineValues can only be assigned to a function that has
// // two params with typeof number that also returns a number.
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// console.log(combineValues(1, 5));
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
////////////////   Error Messages
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userName = "MAX";
// if (typeof userInput === "string") {
//   userName = userInput;
// }
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("An error occurred, go make yourself some tea.", 418);

// arrow functions
// const add = (a: number, b: number) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button){
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5,2));

////////////Destructuring 
// in the below example, param 'b' is given a default value. function can be called with only one argument. if called with two, default is overridden
// const add = (a: number, b: number = 5) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// //spread
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

// const person = {
//   firstName: "Max",
//   age: 30,
// };

// const copiedPerson = { ...person };
// console.log(person);
// console.log(copiedPerson);

// //rest params to accept any number of params
// const addition = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue
//   }, 0)
// };
// const addedNumbers = addition(5, 10, 4, 2, 1);
// console.log(addedNumbers);

// //array destructuring
// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

//  const { firstName: userName, age } = person;

// console.log(userName, age);


