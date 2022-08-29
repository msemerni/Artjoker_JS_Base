///// 1. Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
///// Без использования стандартных функций.

interface Function {
  myBind(this: Function, context: any, ...rest: any[]): any;
  myCall(this: Function, context: any, ...rest: any[]): any;
}

//// своя функция bind
Function.prototype.myBind = function(context, ...argumnts): any {
  let bindedThis = this;
  return function(...args: any[]) {
    const uniqueKey: unique symbol = Symbol();
    context[uniqueKey] = bindedThis;
    const result: any = context[uniqueKey](...argumnts.concat(args));
    delete context[uniqueKey];
    return result;
  };
};

//// своя функция call
Function.prototype.myCall = function(context, ...argumnts): any {
    const uniqueKey: unique symbol = Symbol();
    context[uniqueKey] = this;
    const result: any = context[uniqueKey](...argumnts);
    delete context[uniqueKey];
    return result;
};

///// 2. Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. 
///// Без использования стандартных функций.

interface Array<T> {
  myMap<U> (callback: (val: T, index?: number, array?: T[]) => U, thisArg?: any): U[];
  myFilter (callback: (val: T, index?: number, array?: T[]) => boolean, thisArg?: any): T[];
  myReduce (callback: (acc: T, currVal: T, index?: number, array?: T[]) => T, initValue?: T): T;
  myFind (callback: (val: T, index?: number, obj?: T[]) => unknown, thisArg?: any): T | undefined;
  myForEach (callback: (val: T, index?: number, array?: T[]) => void, thisArg?: any): void;
}

//// своя функция map
Array.prototype.myMap = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter is not a callback function");
  }

  let array = [];

  for(let i = 0; i < this.length; i++) {
    array.push(callback(this[i], i, this));
  }

  return array;
};

//// своя функция filter
Array.prototype.myFilter = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter is not a callback function");
  }

  let array = [];

  for(let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      array.push(this[i]);
    }
  }

  return array;
};

//// своя функция reduce
Array.prototype.myReduce = function(callback, initialAccum) {
  if(typeof callback !== "function") {
    throw new Error("Parameter is not a callback function");
  }

  let accumulator = initialAccum || null;

  for(let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

//// своя функция find
Array.prototype.myFind = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter is not a callback function");
  }

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      return this[i];
    }
  }

  return -1;
};

//// своя функция forEach
Array.prototype.myForEach = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Parameter is not a callback function");
  }

  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
