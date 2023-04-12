// ============================== (Imperative / Non Functional) ==============================
// const name = "Faizul Osman";
// const greet = "Hello";

// const name2 = "Abul"
// const greet2 = "hi"

// console.log(greet + ", " + name);
// console.log(greet2 + ", " + name2);

// ============================== (Declarative / Functional) ==============================
// function greeting(name, greet) {
//   return greet + ", " + name;
// }
// const result = greeting("Faizul Osman", "Hello");
// const result2 = greeting("Abul", "Hi");
// console.log(result);
// console.log(result2);

// ============================== Higher order function ==============================
// function myFunction(parent) {
//   return function (child) {
//     return parent + " " + child;
//   };
// }
// const result = myFunction("Dad");
// console.log(result("Child"));

// ============================== Mutable ==============================
// const arr = [
//   { id: 1, value: 100 },
//   { id: 2, value: 200 },
//   { id: 3, value: 300 },
//   { id: 4, value: 400 },
// ];
// const findE = arr.find((v) => v.id === 2);
// findE.value = 9000;
// console.log(arr);

// ============================== Immutable ==============================
// const arr = [
//   { id: 1, value: 100 },
//   { id: 2, value: 200 },
//   { id: 3, value: 300 },
//   { id: 4, value: 400 },
// ];
// const result = arr.map((v) => v.id * 5);

// console.log(result);
