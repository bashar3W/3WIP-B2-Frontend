// ============================== Map (Declarative) ===============================
// const arr = [1, 2, 3, 4, 5];

// const newMap = arr.map((value, index, array) => {
//   return value * 3;
// });
// console.log(newMap);

// ============================== Map (Imperative) ===============================
// const arr = [1, 2, 3, 4, 5];
// const newMap = (array, callBack) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(callBack(array[i]));
//   }
//   return newArr;
// };

// const r = newMap(arr, (value) => {
//   return value * 3;
// });

// console.log(r);

// ============================== Map ==============================
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number) => {
//   return number * number;
// });

// console.log(squaredNumbers);

// ============================== Map ==============================
// const students = [
//   { name: "John", grade: 80 },
//   { name: "Mary", grade: 90 },
//   { name: "Mike", grade: 75 },
// ];

// const passOrFail = students.map((student) => {
//   if (student.grade >= 80) {
//     return `${student.name} passed`;
//   } else {
//     return `${student.name} failed`;
//   }
// });

// console.log(passOrFail);

// ============================== Map ==============================
// const products = [
//   { name: "Apple", price: 100 },
//   { name: "Banana", price: 200 },
//   { name: "Orange", price: 300 },
// ];

// const discountedPrices = products.map((product) => {
//   return {
//     name: product.name,
//     price: product.price * 3,
//   };
// });

// console.log(discountedPrices);

// ============================== Map ===============================
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number, _, __) => {
//   return number * number;
// });

// console.log(squaredNumbers);
