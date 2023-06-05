// Завдання 1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// checkAge(38);
// checkAge(14);
// checkAge(8);
// checkAge(20);

// ЗАВДАННЯ 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";

//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// TASK 3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// // TASK 4, TASK 5, TASK 6
// const fruits = ["apple", "plum", "pear", "orange"];

// // const firstElement = fruits[0];
// // const secondElement = fruits[1];
// // const lastElement = fruits[fruits.length - 1];

// fruits[1] = "peach";
// fruits[3] = "banana";

// // const fruitsArrayLength = fruits.length;

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// TASK 9
// function getExtremeElements(array) {
//   // Change code below this line
//   let firstElement = array[0];
//   let lastElement = array[array.length - 1];
//   const extremeElements = [firstElement, lastElement];
//   return extremeElements;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// TASK 10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// TASK 11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const a = message.split(" ");
//   const lengthMessage = a.length;
//   const price = lengthMessage * pricePerWord;
//   return price;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// TASK 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// TASK 13
// function slugify(title) {
//   // Change code below this line
//   let slug = title.toLowerCase().split(" ").join("-");
//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// TASK 14
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// TASK 15
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// TASK 16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const arr = firstArray.concat(secondArray);
//   let newArrey;
//   if (arr.length >= maxLength) {
//     newArrey = arr.slice(0, maxLength);
//   }
//   return newArrey;
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// TASK 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// TASK 18
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));

// TASK 19
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// TASK 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// TASK 21
// function findLongestWord(string) {
//   let splitWord = string.split(" ");
//   let maxWord = splitWord[0];
//   for (let i = 0; i < splitWord.length; i += 1) {
//     if (splitWord[i].length > maxWord.length) {
//       maxWord = splitWord[i];
//     }
//   }
//   return maxWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// TASK 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

// TASK 23
// function filterArray(numbers, value) {
//   let resultArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       resultArray.push(numbers[i]);
//     }
//   }
//   return resultArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// TASK 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));

// TASK 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// TASK 28
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(e);

// TASK 31
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }
// console.log(findNumber(8, 17, 3));

// TASK 32
function includes(array, value) {
  // Change code below this line
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
