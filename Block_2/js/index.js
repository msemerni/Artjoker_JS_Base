///// 1. Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
///// Без использования стандартных функций.

//// своя функция bind
Function.prototype.myBind = function(context, ...argumnts) {
  let bindedThis = this;
  return function (...args) {
    const uniqueKey = Symbol();
    context[uniqueKey] = bindedThis;
    const result = context[uniqueKey](...argumnts.concat(args));
    delete context[uniqueKey];
    return result;
  }
};

//// своя функция call
Function.prototype.myCall = function(context, ...argumnts) {
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = context[uniqueKey](...argumnts);
    delete context[uniqueKey];
    return result;
};

///// 2. Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. 
///// Без использования стандартных функций.

//// своя функция map
Array.prototype.myMap = function (func) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let resultArray = [];

  for(let i = 0; i < this.length; i++) {
    resultArray.push(func(this[i]));
  }

  return resultArray;
}

//// своя функция filter
Array.prototype.myFilter = function (func) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let resultArray = [];

  for(let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
}

//// своя функция reduce
Array.prototype.myReduce = function (func, initAccum) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  let accumulator = initAccum || null;

  for(let i = 0; i < this.length; i++) {
    accumulator = func(accumulator, this[i]);
  }

  return accumulator;
}

//// своя функция find
Array.prototype.myFind = function (func) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  for(let i = 0; i < this.length; i++) {
    if(func(this[i])) {
      return(this[i]);
    }
  }

  return -1;
}

//// своя функция forEach
Array.prototype.myForEach = function (func) {
  if(typeof func !== "function") {
    throw new Error("Not function !!");
  }

  for(let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
}
