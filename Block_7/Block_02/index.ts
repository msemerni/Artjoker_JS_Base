///// 1. Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
///// Без использования стандартных функций.

type Context<T> = { 
  [key: string | symbol]: T; 
} 

interface Function {
  myBind<T>(this: Function, context: Context<Function>, ...rest: Array<T>): Function;
  myCall<T>(this: Function, context: Context<Function>, ...rest: Array<T>): T;
}

//// своя функция bind
Function.prototype.myBind = function<T>(context: Context<Function>, ...argumnts: Array<T>): Function {
  let bindedThis = this;

  return function (...args: Array<T>): T {
    const uniqueKey: unique symbol = Symbol();
    context[uniqueKey] = bindedThis;
    const result: T = context[uniqueKey](...argumnts.concat(args));
    delete context[uniqueKey];
    return result;
  };
};

//// своя функция call
Function.prototype.myCall = function<T>(context: Context<Function>, ...argumnts: Array<T>): T {
    const uniqueKey: unique symbol = Symbol();
    context[uniqueKey] = this;
    const result: T = context[uniqueKey](...argumnts);
    delete context[uniqueKey];
    return result;
};

///// 2. Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach. 
///// Без использования стандартных функций.

interface Array<T> {
  myMap<U> (callback: (val: T, index?: number, array?: Array<T>) => U, thisArg?: T): Array<U>;
  myFilter (callback: (val: T, index?: number, array?: Array<T>) => boolean, thisArg?: T): Array<T>;
  myReduce (callback: (acc: T, currVal: T, index?: number, array?: Array<T>) => T, initValue?: T): T;
  myFind (callback: (val: T, index?: number, obj?: Array<T>) => unknown, thisArg?: T): T | undefined;
  myForEach (callback: (val: T, index?: number, array?: Array<T>) => void, thisArg?: T): void;
}

//// своя функция map
Array.prototype.myMap = function<T>(callback: Function): Array<T> {
  let array: Array<T> = [];

  for(let i = 0; i < this.length; i++) {
    array.push(callback(this[i], i, this));
  }
  return array;
};

//// своя функция filter
Array.prototype.myFilter = function<T>(callback: Function): Array<T> {
  let array: Array<T> = [];

  for(let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

//// своя функция reduce
Array.prototype.myReduce = function<T>(callback: Function, initialAccum: T): T | null {
  let accumulator = initialAccum || null;

  for(let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

//// своя функция find
Array.prototype.myFind = function<T>(callback: Function): T | number{
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      return this[i];
    }
  }
  return -1;
};

//// своя функция forEach
Array.prototype.myForEach = function(callback: Function): void {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
