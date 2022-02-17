'use strict';

//// сортировка пузырьком
Array.prototype.sortByBubble = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a callback function");
  }

    for(let i = 0; i < this.length; i++) {
      for(let j = 0; j < this.length - i - 1; j++) {
        if(callback(this[j], this[j + 1])) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }
  return this;
}

//// сортировка выбором
Array.prototype.sortBySelection = function(callback) {
  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a callback function");
  }

  for(let i = 0; i < this.length; i++) {
    let min = i;
    for(let j = i; j < this.length; j++) {
      if(callback(this[min], this[j])) {
        min = j;
      }
    }
    [this[i], this[min]] = [this[min], this[i]];
  }
  return this;
}
