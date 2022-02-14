// 'use strict';

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

//// своя функция call
Function.prototype.myCall = function(context, ...argumnts) {
  // function myBind (func, context, ...argums) {
    const ID = Symbol();
    context[ID] = this;
    let result = context[ID](...argumnts);
    delete context[ID];
    return result;
};

let user1 = {
  firstName: "Вася"
};

function func1() {
  alert(this.firstName);
}

let funcUser1 = func1.myCall(user2);
console.log(funcUser1());

//// своя функция bind
Function.prototype.myBind = function(context, ...argumnts) {
  // function myBind (func, context, ...argums) {
  return function (...args) {
    const ID = Symbol();
    context[ID] = this;
    let result = context[ID](...argumnts.concat(args));
    delete context[ID];
    return result;
  }
};

let user = {
  firstName: "Вася"
};

function func2() {
  alert(this.firstName);
}

let funcUser2 = func2.myBind(user);
console.log(funcUser2());




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
// let testArray3 = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (func) {
  if (typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

// testArray3.myFilter(item => item > 3);


//// своя функция reduce

///// 1st variant
// let testArray3 = [1, 2, 3, 4, 5];

// function myReduce(array, func) {
//   if(Array.isArray(array) !== true) {
//     throw new Error("Not Array !!");
//   }
  
//   if(typeof func !== "function") {
//     throw new Error("Not function !!");
//   }

//   let accumulator = null;

//   for(let item of array) {
//     accumulator = func(accumulator, item);
//   }
//   return accumulator;
// }

// myReduce(testArray3, (accumulator, item) => accumulator + item);


///// 2nd variant

// let testArray3 = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (func, initAccum) {
  if (typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let accumulator = initAccum || null;

  for (let i = 0; i < this.length; i++) {
    accumulator = func(accumulator, this[i]);
  }
  return accumulator;
}

// testArray3.myReduce(((accumulator, item) => accumulator + item), 10);


//// своя функция find

let testArray4 = [1, 2, 3, 4, 5];

Array.prototype.myFind = function (func) {
  if (typeof func !== "function") {
    throw new Error("Not function !!");
  }

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      return(this[i]);
    }
  }
  return -1;
}

testArray4.myFind(item => item > 3);


//// своя функция forEach
let testArray5 = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (func) {
  if (typeof func !== "function") {
    throw new Error("Not function !!");
  }
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
}

testArray5.myForEach();








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