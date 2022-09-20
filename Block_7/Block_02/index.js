///// 1. Написать свою реализацию функций bind, call. Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции. 
///// Без использования стандартных функций.
//// своя функция bind
Function.prototype.myBind = function (context, ...argumnts) {
    let bindedThis = this;
    return function (...args) {
        const uniqueKey = Symbol();
        context[uniqueKey] = bindedThis;
        const result = context[uniqueKey](...argumnts.concat(args));
        delete context[uniqueKey];
        return result;
    };
};
//// своя функция call
Function.prototype.myCall = function (context, ...argumnts) {
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = context[uniqueKey](...argumnts);
    delete context[uniqueKey];
    return result;
};
//// своя функция map
Array.prototype.myMap = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this));
    }
    return array;
};
//// своя функция filter
Array.prototype.myFilter = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
};
//// своя функция reduce
Array.prototype.myReduce = function (callback, initialAccum) {
    let accumulator = initialAccum || null;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
};
//// своя функция find
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return -1;
};
//// своя функция forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
