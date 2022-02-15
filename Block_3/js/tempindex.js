'use strict'

//////////////////////////////////////////////////////////////////////////////////////////

// let array = [11, 15, 7, 9, 6, 8]

// class Element {
//   constructor(elem, left, right, parent) {
//     this.elem = elem;
//     this.left = left;
//     this.right = right;
//     this.parent = parent;
//   }

//   addElement(NewNode) {

//   }


// }

// let el = new Element;



/////////////////////////////////
//// сортировка пузырьком
function bubbleSort(array) {
  if (!Array.isArray(array)) {
    throw new Error("Parameter should be array");
  }

  let flagIsChanged = true;
  let iterations = array.length;
  console.log(array);

  while (flagIsChanged) {

    flagIsChanged = false;

    for (let i = 0; i < iterations; i++) {

      if (array[i] > array[i + 1]) {

        [array[i], array[i + 1]] = [array[i + 1], array[i]];

        flagIsChanged = true;
      }

      if (!flagIsChanged) {
        console.log(`Iteration--`);

        iterations--;
      }
      console.log(`Arter For: ${array}`);

    }

    if (!flagIsChanged) {
      console.log(`Iteration--`);

      iterations--;
    }

    console.log(`Arter While: ${array}`);

  }
}

let array = [2, 5, 4, 1, 3, 6, 0];

bubbleSort(array);
console.log(array);






/////////////////////
//// сортировка выбором

let array2 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
console.log(array2);

function selectionSort(array) {
  if (!Array.isArray(array)) {
    throw new Error("Parameter should be array");
  }
  // let iterations = array.length;

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        console.log(array[j]);
        console.log(array[min]);

        min = j;
        console.log(min);

        
      }
    }
    if (min != i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  console.log(array);

  return array;
}


selectionSort(array2);
console.log(array2);

