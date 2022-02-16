'use strict';

//// сортировка пузырьком
function sortByBubble(array, callback) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a callback function");
  }

    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - i - 1; j++) {
        if(callback(array[j], array[j + 1])) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  return array;
}

//// сортировка выбором
function sortBySelection(array, callback) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a callback function");
  }

  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i; j < array.length; j++) {
      if(callback(array[min], array[j])) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}
