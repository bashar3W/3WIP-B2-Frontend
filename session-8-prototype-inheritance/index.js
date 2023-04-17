// // ================= In JavaScript everything is directly object =================
// const arr = [1, 2, 3, 4, 5];
// const obj = { num: 1 };

// console.log(arr);

// // ================= Create a Constructor Function =================
// const Car = function (brand, price, stock) {
//   this.brand = brand;
//   this.price = price;
//   this.stock = stock;
// };
// const m8 = new Car("Lamborghini", 10, 5);
// console.log(m8);

// // ================= Add Function in Constructor =================
// const Car = function (brand, price, stock) {
//   this.brand = brand;
//   this.price = price;
//   this.stock = stock;
// };
// const m8 = new Car("Lamborghini", 10, 5);

// Car.prototype.totalProfit = function () {
//   return this.price * this.stock;
// };
// console.log(m8.totalProfit());

// // ================= Create your own Prototype (Unique) =================
// const arr = [1, 2, 3, 4, 4, 3, 2, 1, 5];
// // Don't do this kind of things
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // ================= Create your own Prototype (isEven) =================
// function IsEven() {}
// IsEven.prototype.check = function (num) {
//   return num % 2 === 0;
// };
// let isEven = new IsEven().check(12);
// console.log(isEven);

// // ================= Create your own Prototype (Unique 2) =================
// function Unique() {}

// Unique.prototype.unique = function (arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const myArr = [1, 2, 3, 4, 4, 3, 2, 1, 5];
// const uniqueArr = new Unique().unique(myArr);
// console.log(uniqueArr);

// // ================= Create your own Prototype (Map) =================
// function MyMap() {}
// MyMap.prototype.map = function (arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
//   return result;
// };
// let myArr = [1, 2, 3, 4, 5];
// let mappedArr = new MyMap().map(myArr, function (item) {
//   return item * 2;
// });
// console.log(mappedArr);

// // ================= Create your own Prototype (Find) =================
// function MyFind() {}
// MyFind.prototype.find = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }
//   return undefined;
// };
// let myArr = [1, 2, 3, 4, 5];
// let foundItem = new MyFind().find(myArr, function (item) {
//   return item > 3;
// });
// console.log(foundItem);

// // ================= Create your own Prototype (Filter) =================
// function MyFilter() {}
// MyFilter.prototype.filter = function (arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// let myArr = [1, 2, 3, 4, 5];
// let filteredArr = new MyFilter().filter(myArr, function (item) {
//   return item % 2 === 0;
// });
// console.log(filteredArr);

// // ================= Create your own Prototype (Reduce) =================
// function MyReduce() {}
// MyReduce.prototype.reduce = function (arr, callback, initialValue) {
//   let accumulator = initialValue === undefined ? undefined : initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     if (accumulator === undefined && i === 0) {
//       accumulator = arr[0];
//     } else {
//       accumulator = callback(accumulator, arr[i], i, arr);
//     }
//   }
//   return accumulator;
// };
// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = new MyReduce().reduce(
//   myArr,
//   function (acc, cur) {
//     return acc + cur;
//   },
//   0
// );
// console.log(sum);
