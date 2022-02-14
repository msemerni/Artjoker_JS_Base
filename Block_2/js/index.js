'use strict';

// if(Array.isArray(someArray) !== true) {
//   throw new Error("Not Array !!");
// }

// if(typeof func !== "function") {
//   throw new Error("Not function !!");
// }

// function func(item) {
//   return item * item;
// }
// //(item => item * item)


// let testArray = [1, 2, 3, 4, 5];



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// 1. Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
///// Без использования стандартных функций.





///// 2. Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. 
///// Без использования стандартных функций.

//// своя функция map

///// 1st variant
// let testArray = [1, 2, 3, 4, 5];

// function myMap(array, func) {
//   if(Array.isArray(array) !== true) {
//     throw new Error("Not Array !!");
//   }
  
//   if(typeof func !== "function") {
//     throw new Error("Not function !!");
//   }

//   let newArray = [];

//   for(let item of array) {
//     newArray.push(func(item));
//   }
//   return newArray;
// }

// myMap(testArray, item => item * 2);

///// 2nd variant
let testArray = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (func) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    newArray.push(func(this[i]));
  }
  return newArray;
}

testArray.myMap(item => item * 2);



//// своя функция filter

///// 1st variant
// let testArray2 = [1, 2, 3, 4, 5];

// function myFilter(array, func) {
//   if(Array.isArray(array) !== true) {
//     throw new Error("Not Array !!");
//   }

//   if(typeof func !== "function") {
//     throw new Error("Not function !!");
//   }

//   let newArray = [];

//   for(let item of array) {
//     if(func(item)) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// myFilter(testArray2, item => item % 2 === 0);


///// 2nd variant
let testArray3 = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (func) {
  if (typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      newArray.push(func(this[i]));
    }
  }
  return newArray;
}

testArray3.myFilter(item => item % 2 === 0);





// myFilter(testArray2, item => item % 2 === 0);

/////

// let testArray3 = [1, 2, 3, 4, 5];


//// своя функция reduce

function myReduce(array, func) {
  if(Array.isArray(array) !== true) {
    throw new Error("Not Array !!");
  }
  
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let accumulator = null;

  for(let item of array) {
    accumulator = func(accumulator, item);
  }
  return accumulator;
}

// myReduce(testArray3, (accumulator, item) => accumulator + item);

//////

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

//// своя функция find
function myFind (array, func) {
  if(Array.isArray(array) !== true) {
    throw new Error("Not Array !!");
  }
  
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

for (let item of array) {
  if(item === func(item)) {
    return item;
  }
}

users.myFind();


}








// ///////////////////////////////////////////////
// //// своя функция map сделать reducом:
// testArray.reduce((res, item, index) => {
//   res[index] = item * item;
//   return res;
// }, [])



// // ////////////////////////////////////////////////
// // ////вариант push:
// // let test = [1, 2, 3];
// // test[test.length] = 4;
// // //тоже самое что и:
// // test.push(4);