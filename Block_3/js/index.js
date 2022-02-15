'use strict';

//// сортировка пузырьком
function bubbleSort(array) {
  if(!Array.isArray(array)) {
    throw new Error("Parameter should be array");
  }

  let flagIsChanged = true;
  let iterations = array.length;

  while(flagIsChanged) {
    flagIsChanged = false;

    for(let i = 0; i < iterations; i++) {

      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        flagIsChanged = true;
      }

      if(!flagIsChanged) {
        iterations--;
      }
    }
  }
}

//// сортировка выбором
function selectionSort(array) {
  if(!Array.isArray(array)) {
    throw new Error("Parameter should be array");
  }

  for(let i = 0; i < array.length; i++) {

    let min = i;

    for(let j = i; j < array.length; j++) {

      if(array[j] < array[min]) {
        min = j;
      }
    }

    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}
