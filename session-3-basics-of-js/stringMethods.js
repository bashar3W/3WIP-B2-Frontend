// ============================== string -- methods =================================

// template literals
const name = "John";
const age = 30;
const sentence = `My name is ${name} and I am ${age} years old.`;
// console.log(sentence);

// split & join
const sentence1 = "The quick brown, fox jumps over, the lazy dog.";
const words = sentence1.split(" ");
// console.log(words);

// reverse
const reversed = words.reverse().join(" ");
// console.log(reversed);

// toLowerCase
const lower = "Hello, World!";
const lowerCaseStr = lower.toLowerCase();
// console.log(lowerCaseStr);

// toUpperCase
const upper = "Hello, World!";
const upperCaseStr = upper.toUpperCase();
// console.log(upperCaseStr);

// trim
const trim = "    Hello, World!    ";
const trimmedStr = trim.trim();
// console.log(trimmedStr);

// indxOf
const str = "Hello, World!";
const index = str.indexOf("World");
// console.log(index);
