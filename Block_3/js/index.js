'use strict';

//// сортировка пузырьком
function bubbleSort(array, callback) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a function");
  }

  let flagIsChanged = true;
  let iterations = array.length;

  while(flagIsChanged) {
    flagIsChanged = false;

    for(let i = 0; i < iterations-1; i++) {

      if(callback(array[i], array[i + 1])) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        flagIsChanged = true;
      }

      if(!flagIsChanged) {
        iterations--;
      }
    }
  }
  return array;
}

//// сортировка выбором
function selectionSort(array, callback) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be an array");
  }

  if(typeof callback !== "function") {
    throw new Error("Second parameter should be a function");
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
