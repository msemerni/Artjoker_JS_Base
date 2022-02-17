// 'use strict'


let arrayTree = [11, 15, 7, 9, 6, 8]

class Node {

  constructor(node) {
    this.node = node;
    this.left = null;
    this.right = null;
  }

  add(node) {

    if (node > this.node && this.right === null) {
      this.right = new Node(node);
    } else if (node > this.node && this.right !== null) {
      this.right.add(node);
    } else if (node < this.node && this.left === null) {
      this.left = new Node(node);
    } else if (node < this.node && this.left !== null) {
      this.left.add(node);
    }

  }

  find(node) {

    if (node === this.node) {

      console.log(`Congrats! You have found: ${node}`);

      return this;
    }

    if (node > this.node && this.right !== null) {

      return this.right.find(node);
    }

    if (node < this.node && this.left !== null) {

      return this.left.find(node);

    }

    else {

      console.log(`Oooh! ${node} not found`);
      // console.log(this);

      // return node;
      return null;
    }
  }


  remove(node) {
    
    

    
        delete this;
        // delete node;

 

    
    console.log(`${node} removed`);
    console.log(this);


  }



}





let node = new Node(11);
console.log(node);

node.remove(11);
console.log(node);




// node.add(15);
// console.log(node);
// node.add(7);
// node.add(9);
// node.add(6);
// node.add(8);
// console.log(node);

// node.find(6);
// node.find(15);
// // console.log(node);

// node.find(80);
// console.log(node);
























//////////////////////////////////////////////////////////////////////////////////////////
//// сортировка пузырьком
// function bubbleSort(array) {
//   if (!Array.isArray(array)) {
//     throw new Error("Parameter should be array");
//   }

//   let flagIsChanged = true;
//   let iterations = array.length;
//   console.log(array);

//   while (flagIsChanged) {

//     flagIsChanged = false;

//     for (let i = 0; i < iterations; i++) {

//       if (array[i] > array[i + 1]) {

//         [array[i], array[i + 1]] = [array[i + 1], array[i]];

//         flagIsChanged = true;
//       }

//       if (!flagIsChanged) {
//         console.log(`Iteration--`);

//         iterations--;
//       }
//       console.log(`Arter For: ${array}`);

//     }

//     console.log(`Arter While: ${array}`);

//   }
// }

// let array = [2, 5, 4, 1, 3, 6, 0];

// bubbleSort(array);
// console.log(array);

/////////////////




// let array5 = [2, 5, 4, 1, 3, 6, 0];
// array5.sort((a, b) => (a[i] - b[i]));
// console.log(array5);


// lOfStud = lOfStud.sort((a, b) => a.ratingPoint - b.ratingPoint);
// function byField(field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1;
// }


// let arr = [{a: 10}, {a: 9}, {a:-1}, {a:3}];

// for (let i = 0; i < arr.length; i++) {
// arr.sort((a, b) => (a.b > b.b ? 1 : -1));
// console.log(arr);
// }

///////////



///////////////////////

// let array6 = [2, 5, 4, 1, 3, 6, 0];

// let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];


// function bubbleSort2(array, callback) {
//   if(!Array.isArray(array)) {
//     throw new Error("Parameter should be array");
//   }

//   let flagIsChanged = true;
//   let iterations = array.length;

//   while(flagIsChanged) {
//     flagIsChanged = false;

//     for(let i = 0; i < iterations-1; i++) {

//       if(callback(array[i], array[i + 1])) {

//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         flagIsChanged = true;
//       }

//       if(!flagIsChanged) {
//         iterations--;
//       }
//     }
//   }
//   return array;
// }

// bubbleSort2(array6, (a, b) => (a > b));
// console.log(array6);

// bubbleSort2(arr3, (a, b) => (a.s > b.s));
// console.log(arr3);

/////////////////////


//********************************************************* */




/////////////////////
//// сортировка выбором

// let array2 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// console.log(array2);

// function selectionSort(array) {
//   if (!Array.isArray(array)) {
//     throw new Error("Parameter should be array");
//   }
//   // let iterations = array.length;

//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         console.log(array[j]);
//         console.log(array[min]);

//         min = j;
//         console.log(min);

        
//       }
//     }
//     // if (min != i) {
//       [array[i], array[min]] = [array[min], array[i]];
//     // }
//   }
//   console.log(array);

//   return array;
// }


// selectionSort(array2);
// console.log(array2);

///////////////////


// function selectionSort2(array, callback) {
//   if(!Array.isArray(array)) {
//     throw new Error("Parameter should be array");
//   }

//   if(typeof callback !== "function") {
//     throw new Error("Second parameter should be a function");
//   }

//   for(let i = 0; i < array.length; i++) {

//     let min = i;

//     for(let j = i; j < array.length; j++) {

//       if(callback(array[j], array[min])) {
//         min = j;
//       }
//     }

//     [array[i], array[min]] = [array[min], array[i]];
//   }
//   return array;
// }

// selectionSort2(array6, (a, b) => (a > b));
// console.log(array6);

// selectionSort2(arr3, (a, b) => (a.s > b.s));
// console.log(arr3);

// callback(array[i], array[i + 1])


// let array6 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];
// console.log(array6);
// console.log(arr3);



//// сортировка пузырьком
// function sortByBubble(array, callback) {
//   if(!Array.isArray(array)) {
//     throw new Error("First parameter should be an array");
//   }

//   if(typeof callback !== "function") {
//     throw new Error("Second parameter should be a callback function");
//   }

//   let isnodesPermuted = true;
//   let iteration = array.length;

//   while(isnodesPermuted) {
//     isnodesPermuted = false;

//     for(let i = 0; i < iteration-1; i++) {
//       if(callback(array[i], array[i + 1])) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         isnodesPermuted = true;
//       }
//       if(!isnodesPermuted) {
//         iteration--;
//       }
//     }
//   }
//   return array;
// }

//////////////

// let array6 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];
// // console.log(array6);
// // console.log(arr3);

// function sortByBubble(array, callback) {
//   if(!Array.isArray(array)) {
//     throw new Error("First parameter should be an array");
//   }

//   if(typeof callback !== "function") {
//     throw new Error("Second parameter should be a callback function");
//   }

//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - i - 1; j++) {
//         if (callback(array[j], array[j + 1])) {
//           [array[j], array[j + 1]] = [array[j + 1], array[j]];
//           // console.log(array6);
//         }
//       }
//     }

//   return array;
// }

// sortByBubble(array6, (a, b) => (a > b));
// console.log(array6);

// .sortByBubble((a, b) => (a > b))

// sortByBubble(arr3, (a, b) => (a.s > b.s));
// console.log(arr3);









////****************************************************************************************************************************************/

