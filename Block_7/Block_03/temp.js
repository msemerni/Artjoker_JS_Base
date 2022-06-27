// // 'use strict'


// let arrayTree = [11, 15, 7, 9, 6, 8]

// class Node {

//   constructor(value) {
//     // // // value === 0 || value
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   // add(value) {

//   //   if (value > this.value && this.right === null) {
//   //     this.right = new Node(value);
//   //   } else if (value > this.value && this.right !== null) {
//   //     this.right.add(value);
//   //   } else if (value < this.value && this.left === null) {
//   //     this.left = new Node(value);
//   //   } else if (value < this.value && this.left !== null) {
//   //     this.left.add(value);
//   //   }
//   // }

//   add(value) {
//     if(value === this.value) {
//       throw new Error("Value should be unique");
//     }

//     if(value > this.value) {
//       if(this.right === null) {
//         this.right = new Node(value);
//         return;
//       }
//       this.right.add(value);
//     } else {
//       if(this.left === null) {
//         this.left = new Node(value);
//         return;
//       }
//       this.left.add(value);
//     }
//   }

//   // add(value) {
//   //   if(value > this.value && this.right === null) {
//   //     this.right = new Node(value);
//   //   } else if (value > this.value && this.right) {
//   //     this.right.add(value);
//   //   } 
//   //   if(value < this.value && this.left === null) {
//   //     this.left = new Node(value);
//   //   } else if (value < this.value && this.left) {
//   //     this.left.add(value);
//   //   }
//   // }


//   // add(value) {
//   //   if(value > this.value && this.right === null) {
//   //     this.right = new Node(value);
//   //   } else if (value > this.value && this.right) {
//   //     this.right.add(value);
//   //   } 
//   //   if(value < this.value && this.left === null) {
//   //     this.left = new Node(value);
//   //   } else if (value < this.value && this.left) {
//   //     this.left.add(value);
//   //   }
//   // }

//   // find(value) {

//   //   if (value === this.value) {
//   //     // console.log(`Congrats! You have found: ${value}`);
//   //     // console.log(this)
//   //     return this;
//   //   } else if (value > this.value && this.right !== null) {
//   //     return this.right.find(value);
//   //   } else if (value < this.value && this.left !== null) {
//   //     return this.left.find(value);
//   //   }
//   //   else {
//   //     // console.log(`Oooh! ${value} not found`);
//   //     // console.log(this);
//   //     // return value;
//   //     return null;
//   //   }
//   // }

//   find(value) {
//     if(value === this.value) {
//       console.log(this);
//       return this;
//     }
//     if(value > this.value && this.right) {
//       return this.right.find(value);
//     }
//     if(value < this.value && this.left) {
//       return this.left.find(value);
//     }
//     return null;
//   }



//   /////************************************************* */
//   delete(value, thisNode) {
//     thisNode = thisNode || this;


//     if (value > thisNode.value) {
//       if (thisNode.right === null) {
//         return thisNode;
//       }
//       thisNode.right = this.delete(value, thisNode.right);
//       // console.log(thisNode);
//       return thisNode;
//     }

//     else if (value < thisNode.value) {
//       if (thisNode.left === null) {

//         // console.log(thisNode);
//         return thisNode;
//       }
//       thisNode.left = this.delete(value, thisNode.left);
//       return thisNode;
//     }

//     else if (value === thisNode.value) {

//       if (thisNode.left === null && thisNode.right === null) {
//         thisNode = null;
//         return thisNode;
//       }
//       else if (thisNode.left === null) {
//         thisNode = thisNode.right;
//         return thisNode;
//       }
//       else if (thisNode.right === null) {
//         thisNode = thisNode.left;
//         return thisNode;
//       }
//       else {
//         let minNode = this.findMinNode(thisNode.right);

//         // console.log(thisNode.right);
//         // console.log(thisNode);

//         thisNode.value = minNode.value;
//         thisNode.right = this.delete(minNode.value, thisNode.right);
//         return thisNode;
//       }
//     }

//   }
//   findMinNode(thisNode) {
//     thisNode = thisNode || this;

//     if (thisNode.right !== null && thisNode.left !== null) {
//       return this.findMinNode(thisNode.left);
//     } else if (thisNode.left === null) {
//       return thisNode;
//     }
//   }


// }


// let tree = new Node(11);
// // console.log(tree);

// tree.add(15);
// // console.log(tree);
// tree.add(7);
// tree.add(9);
// tree.add(6);
// tree.add(8);
// tree.add(10);
// // console.log(tree);

// // tree.find(6);
// tree.find(9);
// console.log(tree);

// // tree.find(80);
// // console.log(tree);

// tree.delete(9);
// console.log(tree);


// ///// *****************************
// // delete(value, thisNode) {
// //   thisNode = thisNode || this;
  
  
// //   console.log("*****");
// //   console.log(parent);
// //   console.log("*****");


// //   if ((thisNode.value === value)) {
// //                                      //   УДАЛЯЕМ 9  
// //     console.log("++++");                              
// //     console.log(parent);           // Node {value: 7, left: Node, right: Node}
// //     console.log("----");                              

// //     console.log(value);           // 9
// //     console.log(thisNode.value);  // 9
// //     console.log("DELETED");

    
    
// //     // console.log(thisNode.value);  // NULL
    
// //     if (parent.value < value) {
// //       parent.right = thisNode.left
// //     }
// //     thisNode.left = null;
// //     thisNode.right = null;
// //       thisNode = null;
// //       return parent;
// //   }

// //   // if (value > thisNode.value) {
  
// //   // }



// //   else if (value > thisNode.value) {
// //                                     /// УДАЛЯЕМ 9
// //     console.log(value);             // 9
// //     console.log(thisNode);          // Node {value: 7, left: Node, right: Node}// PARENT
// //     console.log(thisNode.value);    // 7
// //     console.log(thisNode.left);     // Node {value: 6, left: Node, right: Node}
// //     console.log(thisNode.right);    // Node {value: 9, left: null, right: null}
// //     parent = thisNode;
// //     thisNode.right = thisNode.right.delete(value, thisNode.right);

// //     return thisNode;

// //   }

// //   else if (value < thisNode.value) {

// //     //                                 /// УДАЛЯЕМ 9
// //     // console.log(value);             // 9
// //     // console.log(thisNode);          // Node {value: 11, left: Node, right: Node} // PARENT
// //     // console.log(thisNode.value);    // 11
// //     // console.log(thisNode.left);     // Node {value: 7, left: Node, right: Node}
// //     // console.log(thisNode.right);    // Node {value: 15, left: null, right: null}
// //     parent = thisNode;
// //     thisNode.left = thisNode.left.delete(value, thisNode.left);

// //     return thisNode;
// //   }

// //   return null;
// // }



// ////****************************** */
// // delete(value) {

// //   if (value === this.value) {

// //     // console.log(this);        // Node {value: 7, left: Node, right: Node}
// //     // console.log(this.value);   // 7
// //     // console.log(this.left);   // Node {value: 6, left: null, right: null}
// //     // console.log(this.right);  // Node {value: 9, left: Node, right: null}
// //     // console.log(value);        // 7

// //     // Node.value = null;

// //     // console.log(this);

// //     // console.log(`${this.value} deleted`);

// //     // ...


// //     return this;


// //   }
// //   if (value > this.value && this.right !== null) {
    
// //     return this.right.delete(value);
// //   }

// //   if (value < this.value && this.left !== null) {


// //     console.log(value);       // 7
// //     console.log(this);        // Node {value: 11, left: Node, right: Node}
// //     console.log(this.value);  // 11
// //     console.log(this.right);  // Node {value: 15, left: null, right: null}
// //     console.log(this.left);   // Node {value: 7, left: Node, right: Node}

// //     return this.left.delete(value);

// //   }

// //   else {

// //     console.log(`Nothing to delete`);
// //     // console.log(this);

// //     return null;
// //   }
// // }






// //////////////////////////////////////////////////////////////////////////////////////////
// //// сортировка пузырьком
// // function bubbleSort(array) {
// //   if (!Array.isArray(array)) {
// //     throw new Error("Parameter should be array");
// //   }

// //   let flagIsChanged = true;
// //   let iterations = array.length;
// //   console.log(array);

// //   while (flagIsChanged) {

// //     flagIsChanged = false;

// //     for (let i = 0; i < iterations; i++) {

// //       if (array[i] > array[i + 1]) {

// //         [array[i], array[i + 1]] = [array[i + 1], array[i]];

// //         flagIsChanged = true;
// //       }

// //       if (!flagIsChanged) {
// //         console.log(`Iteration--`);

// //         iterations--;
// //       }
// //       console.log(`Arter For: ${array}`);

// //     }

// //     console.log(`Arter While: ${array}`);

// //   }
// // }

// // let array = [2, 5, 4, 1, 3, 6, 0];

// // bubbleSort(array);
// // console.log(array);

// /////////////////




// // let array5 = [2, 5, 4, 1, 3, 6, 0];
// // array5.sort((a, b) => (a[i] - b[i]));
// // console.log(array5);


// // lOfStud = lOfStud.sort((a, b) => a.ratingPoint - b.ratingPoint);
// // function byField(field) {
// //   return (a, b) => a[field] > b[field] ? 1 : -1;
// // }


// // let arr = [{a: 10}, {a: 9}, {a:-1}, {a:3}];

// // for (let i = 0; i < arr.length; i++) {
// // arr.sort((a, b) => (a.b > b.b ? 1 : -1));
// // console.log(arr);
// // }

// ///////////



// ///////////////////////

// // let array6 = [2, 5, 4, 1, 3, 6, 0];

// // let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];


// // function bubbleSort2(array, callback) {
// //   if(!Array.isArray(array)) {
// //     throw new Error("Parameter should be array");
// //   }

// //   let flagIsChanged = true;
// //   let iterations = array.length;

// //   while(flagIsChanged) {
// //     flagIsChanged = false;

// //     for(let i = 0; i < iterations-1; i++) {

// //       if(callback(array[i], array[i + 1])) {

// //         [array[i], array[i + 1]] = [array[i + 1], array[i]];
// //         flagIsChanged = true;
// //       }

// //       if(!flagIsChanged) {
// //         iterations--;
// //       }
// //     }
// //   }
// //   return array;
// // }

// // bubbleSort2(array6, (a, b) => (a > b));
// // console.log(array6);

// // bubbleSort2(arr3, (a, b) => (a.s > b.s));
// // console.log(arr3);

// /////////////////////


// //********************************************************* */




// /////////////////////
// //// сортировка выбором

// // let array2 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// // console.log(array2);

// // function selectionSort(array) {
// //   if (!Array.isArray(array)) {
// //     throw new Error("Parameter should be array");
// //   }
// //   // let iterations = array.length;

// //   for (let i = 0; i < array.length; i++) {
// //     let min = i;
// //     for (let j = i; j < array.length; j++) {
// //       if (array[j] < array[min]) {
// //         console.log(array[j]);
// //         console.log(array[min]);

// //         min = j;
// //         console.log(min);

        
// //       }
// //     }
// //     // if (min != i) {
// //       [array[i], array[min]] = [array[min], array[i]];
// //     // }
// //   }
// //   console.log(array);

// //   return array;
// // }


// // selectionSort(array2);
// // console.log(array2);

// ///////////////////


// // function selectionSort2(array, callback) {
// //   if(!Array.isArray(array)) {
// //     throw new Error("Parameter should be array");
// //   }

// //   if(typeof callback !== "function") {
// //     throw new Error("Second parameter should be a function");
// //   }

// //   for(let i = 0; i < array.length; i++) {

// //     let min = i;

// //     for(let j = i; j < array.length; j++) {

// //       if(callback(array[j], array[min])) {
// //         min = j;
// //       }
// //     }

// //     [array[i], array[min]] = [array[min], array[i]];
// //   }
// //   return array;
// // }

// // selectionSort2(array6, (a, b) => (a > b));
// // console.log(array6);

// // selectionSort2(arr3, (a, b) => (a.s > b.s));
// // console.log(arr3);

// // callback(array[i], array[i + 1])


// // let array6 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// // let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];
// // console.log(array6);
// // console.log(arr3);



// //// сортировка пузырьком
// // function sortByBubble(array, callback) {
// //   if(!Array.isArray(array)) {
// //     throw new Error("First parameter should be an array");
// //   }

// //   if(typeof callback !== "function") {
// //     throw new Error("Second parameter should be a callback function");
// //   }

// //   let isnodesPermuted = true;
// //   let iteration = array.length;

// //   while(isnodesPermuted) {
// //     isnodesPermuted = false;

// //     for(let i = 0; i < iteration-1; i++) {
// //       if(callback(array[i], array[i + 1])) {
// //         [array[i], array[i + 1]] = [array[i + 1], array[i]];
// //         isnodesPermuted = true;
// //       }
// //       if(!isnodesPermuted) {
// //         iteration--;
// //       }
// //     }
// //   }
// //   return array;
// // }

// //////////////

// // let array6 = [2, 5, 4, 1, 3, 6, 0, 8, 7];
// // let arr3 = [{s: 10}, {s: 9}, {s:-1}, {s:3}];
// // // console.log(array6);
// // // console.log(arr3);

// // function sortByBubble(array, callback) {
// //   if(!Array.isArray(array)) {
// //     throw new Error("First parameter should be an array");
// //   }

// //   if(typeof callback !== "function") {
// //     throw new Error("Second parameter should be a callback function");
// //   }

// //     for (let i = 0; i < array.length; i++) {
// //       for (let j = 0; j < array.length - i - 1; j++) {
// //         if (callback(array[j], array[j + 1])) {
// //           [array[j], array[j + 1]] = [array[j + 1], array[j]];
// //           // console.log(array6);
// //         }
// //       }
// //     }

// //   return array;
// // }

// // sortByBubble(array6, (a, b) => (a > b));
// // console.log(array6);

// // .sortByBubble((a, b) => (a > b))

// // sortByBubble(arr3, (a, b) => (a.s > b.s));
// // console.log(arr3);









// ////****************************************************************************************************************************************/

