'use strict';

String.prototype.mySplit = function (separator){
    let newArr = [];
    let word = '';
    for (let i = 0; i < this.length; i++) {
        if (separator === '') {
            newArr.push(this[i]);
        } else {
            if (this[i] !== separator) {
                word = word + this[i];
            }
            if (this[i] === separator || i === this.length - 1) {
                newArr.push(word);
                word = '';
            }
        }
    }
    return newArr;
}
////
Array.prototype.myJoin = function (separator) {
    let string;
    if (separator !== undefined) {
        string = this.toString().replace(/,/g, separator);
    } else {
        string = this.toString();
    }
    return string;
}
////
Array.prototype.mySort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
}

//// countSum - неправильно

function checkIsString (string) {
    if (typeof (string) !== 'string') {
        throw new Error("Not String !!");
    }
}

function checkIsNumber (number) {
    if (typeof (number) !== 'number') {
        throw new Error("Not Number !!");
    }
}

function checkIsArray (array) {
    if (typeof (array) !== 'object') {
        throw new Error("Not Array !!");
    }
}

/////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr, secondStr) {
    if ((typeof (firstStr) !== 'string') || (typeof (secondStr) !== 'string' )) {
        throw new Error("Not String !!");
    }

    let firstString = firstStr.toLowerCase().replaceAll(' ', '').mySplit('').mySort().myJoin('');
    let secondString = secondStr.toLowerCase().replaceAll(' ', '').mySplit('').mySort().myJoin('');

    if (firstString === secondString) {
        console.log('Anagram');
        return true;
    } else {
        console.log('Not anagram');
        return false;
    };
}

checkIsAnagram('кабан', 'банка');
checkIsAnagram('кабан', 'олень');

/////////// 2 - Нарисовать блок схему алгоритма анаграммы ///////////
//diagram.png

/////////// 3 - Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии. /////////// !!!!!!

function countDigits(num) {
    //// first variant
    checkIsNumber(num);
    let digitsCounter = 0;
    for (let i = 0; num > 1; i++) {
        num = num / 10;
        digitsCounter++;
    };
    console.log(`Number of digits: ${digitsCounter}`);
    return digitsCounter;
}

countDigits(123);
countDigits(12345);

function countDigitsRecursion(num) {

    checkIsNumber(num);

    if (Math.floor(num) == 0) {
        return 0;
    }
    return 1 + countDigitsRecursion((num/10));

}
let countResult = countDigitsRecursion(123);
let secondResult = countDigitsRecursion(12345);
console.log(`Number of digits (recursion): ${countResult}`);
console.log(`Number of digits (recursion): ${secondResult}`);

/////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////

function checkIsPalindrom(initialString) {   ///// название правильное. всё ОК
    checkIsString(initialString);
    let reversedString = '';
    //// first variant
    for (let i = initialString.length - 1; i >= 0; i--) {
        reversedString += initialString[i];
    }
    initialString = initialString.toLowerCase().replaceAll(' ', '');
    reversedString = reversedString.toLowerCase().replaceAll(' ', '');

    //// second variant
    // reversedString = initialString.toLowerCase().replaceAll(' ', '').mySplit('').reverse().join('');
    // initialString = initialString.toLowerCase().replaceAll(' ', '');

    console.log(`Or: ${initialString}`);
    console.log(`Re: ${reversedString}`);
    if (initialString === reversedString) {
        console.log('Palindrom');
        return true;
    } else {
        console.log('Not Palindrom');
        return false;
    }
}

checkIsPalindrom('а роза упала на лапу Азора');
checkIsPalindrom('а роза упала');

/////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении ///////////

//// first variant
function countUniqueWords(someString) {
    checkIsString(someString);
    console.log(someString);

    let allWords = someString.mySplit(' ');
    let counter = 0;
    let result = [];
    console.log(allWords);
    for (let word of allWords) {
        if (!result.includes(word)) {
            result.push(word);
            counter++;
        }
    }
    console.log(`UnicWordsCount: ${counter}`);
    return counter;
}

countUniqueWords('привет пока привет пока привет');

//// second variant
function countUniqueWords2(someString) {
    checkIsString(someString);
    let uniqueWords = new Set(someString.mySplit(' '));
    console.log(`Unique words count2: ${uniqueWords.size}`);   //// не нужна переменная uniqueWords. сразу ретурн
    return uniqueWords.size;
  }

countUniqueWords2('привет пока привет пока привет');

//// third variant
function countUniqueWords3(someString) {
    checkIsString(someString);
    let uniqueWords = someString.mySplit(' ').filter((item, i, array) => array.indexOf(item) === i);
    console.log(`Unique words count3: ${uniqueWords.length}`);
    return uniqueWords.length;
}

countUniqueWords3('привет пока привет пока привет');

/////////// 6 - Написать функцию которая вычисляет вхождение каждого слова в предложение ///////////

function countOccurrenceWord(someString) {
    checkIsString(someString);

    let words = {};

    let splittedsomeString = someString.mySplit(' ');

    splittedsomeString.map((word) => { words[word] = words[word] ? ++words[word] : 1 });
    return words;
  }
  countOccurrenceWord('привет пока привет пока привет hello');
  console.log(countOccurrenceWord('привет пока привет пока привет hello'));

/////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////

function Rectangle (width, height) {
    checkIsNumber(width);
    checkIsNumber(height);

    this.width = width;
    this.height = height;
    this.perimeter = (width + height) * 2;
    this.square =(width * height);

    console.log(`Rectangle perimeter(func): ${(width + height) * 2}`);
    console.log(`Rectangle square(func): ${(width * height)}`);

}

const rectangleOne = new Rectangle(2, 3);
rectangleOne.perimeter;
rectangleOne.square;

function Triangle (sideOne, sideTwo, sideThree) {
    checkIsNumber(sideOne);
    checkIsNumber(sideTwo);
    checkIsNumber(sideThree);
    let semiperimetr = (sideOne + sideTwo + sideThree) / 2;
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.perimeter = (sideOne + sideTwo + sideThree);
    this.square = Math.sqrt(semiperimetr * (semiperimetr - sideOne) * (semiperimetr - sideTwo) * (semiperimetr - sideThree));

    console.log(`Triangle square(func): ${this.square}`);
    console.log(`Triangle perimeter(func): ${sideOne + sideTwo + sideThree}`);

}

const triangleOne = new Triangle(2, 3, 4);
triangleOne.perimeter;
triangleOne.square;

function Circle (radius) {
    checkIsNumber(radius);
    this.radius = radius;
    this.perimeter = 2 * Math.PI * radius;
    this.square = (Math.PI * Math.pow(radius, 2));
    console.log(`Circle square(func): ${Math.PI * Math.pow(radius, 2)}`);
    console.log(`Circle perimeter(func): ${2 * Math.PI * radius}`);
}

const circleOne = new Circle(3);
circleOne.perimeter;
circleOne.square;


// by Class:
class RectangleClass {
    constructor (width, height){
        checkIsNumber(width);
        checkIsNumber(height);

        this.width = width;
        this.height = height;
    }

    perimeter() {
        console.log(`Rectangle perimeter: ${(this.width + this.height) * 2}`);
        return (this.width + this.height) * 2;
    }

    square() {
        console.log(`Rectangle square: ${(this.width * this.height)}`);
        return (this.width * this.height);
    }

}

const firstRectangle = new RectangleClass(2, 3);
firstRectangle.perimeter();
firstRectangle.square();

class TriangleClass {
    constructor (sideOne, sideTwo, sideThree){
        checkIsNumber(sideOne);
        checkIsNumber(sideTwo);
        checkIsNumber(sideThree);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }

    perimeter() {
        console.log(`Triangle perimeter: ${this.sideOne + this.sideTwo + this.sideThree}`);
        return (this.sideOne + this.sideTwo + this.sideThree);
    }

    square() {
        let semiperimetr = (this.sideOne + this.sideTwo + this.sideThree) / 2;
        let square =  Math.sqrt(semiperimetr * (semiperimetr - this.sideOne) * (semiperimetr - this.sideTwo) * (semiperimetr - this.sideThree));
        console.log(`Triangle square: ${square}`);
        return square;
    }
}

const firstTriangle = new TriangleClass(2, 3, 4);
firstTriangle.perimeter();
firstTriangle.square();

class CircleClass {
    constructor (radius){
        checkIsNumber(radius);
        this.radius = radius;
    }

    perimeter() {
        console.log(`Circle perimeter: ${2 * Math.PI * this.radius}`);
        return (2 * Math.PI * this.radius);
    }

    square() {
        console.log(`Circle square: ${Math.PI * Math.pow(this.radius, 2)}`);
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const firstCircle = new CircleClass(3);
firstCircle.perimeter();
firstCircle.square();

/////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////

//// loop:
function calculateFactorial(num){
    checkIsNumber(num);

    let result = 1;

    while(num){
        result *= num--;
    }

    return result;
}
console.log(`Factorial result: ${calculateFactorial(10)}`);
calculateFactorial(10);

//// recursion:
function countFactorial(num){
    checkIsNumber(num);

    if (num === 0){
        return 1;
    }
    else {
        return num * countFactorial(num - 1);
    }
}

countFactorial(10);
console.log(countFactorial(10));

//// memo:
  function countFactorialMemo () {
    let memo = {};
    const func = (num) => {
      if (!memo[num]) {
        memo[num] = countFactorial(num);
      }
      return memo[num];
    }
    return func;
  };

  const func = countFactorialMemo();
  func(10);
  console.log(func(10));

/////////// 9 - Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные, реализовать с помощью рекурсии для одномерного массива.) ///////////

const myData = [1, 2, 3, 4, 5];

function countElementsSum (someArray, userFunc) {
    checkIsArray(someArray);
    console.log(someArray.reduce(userFunc, 0));
    return someArray.reduce(userFunc, 0);
}

const countAllElementsSum = (total, currentValue) =>
    total + currentValue;

const countElementsDivideTwoSum = (total, currentValue) => {
    if (currentValue % 2 === 0) {
        return total + currentValue;
    } else {
        return total;
    }
};

const countElementsDivideThreeSum = (total, currentValue) => {
    if (currentValue % 3 === 0) {
        return total + currentValue;
    } else {
        return total;
    }
};

const countElementsPositiveOddSum = (total, currentValue) => {
    if (currentValue % 2 !== 0 && currentValue > 0) {
        return total + currentValue;
    } else {
        return total;
    }
};

countElementsSum(myData, countAllElementsSum);
countElementsSum(myData, countElementsDivideTwoSum);
countElementsSum(myData, countElementsDivideThreeSum);
countElementsSum(myData, countElementsPositiveOddSum);
////

function getElementsSumRecursion(someArray, userFunc, ind){
    ind = ind || 0;
    let sum = null;
    sum += userFunc(someArray[ind]) ? someArray[ind] :  0;
    
    if (someArray.length <= ind) {
        return sum;
    }
    return sum + getElementsSumRecursion(someArray, userFunc, ++ind);
}

const myData33 = [1, 2, 3, 4, 5];

getElementsSumRecursion(myData33, item => item % 2 === 0);

/////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////

let someNumbers = [-1, -2, 0, 0, 0, 1, 2, 3, 4];

//// first variant
function countZeroPosNegPrimeNumbers(myNumbers) {
    checkIsArray(myNumbers);

    myNumbers.reduce(function (acc, num) {
        if (num === 0) {
            acc.zero = ++acc.zero || 1;
        }
        if (num < 0) {
            acc.negative = ++acc.negative || 1;
        }
        if (num > 0) {
            acc.positive = ++acc.positive || 1;
        }
        if (num > 1 && (num ^ 0) === num) {
            acc.prime = ++acc.prime || 1;
        }

        console.log(`Zero, negative, positive, prime: ${JSON.stringify(acc)}`);
        return acc;
    }, {});
};

countZeroPosNegPrimeNumbers(someNumbers);

//// second variant
let someNumbers2 = [-1, -2, 0, 0, 0, 0, 1, 2, 3, 4];

function countNumbers (someArray, userFunc) {
    checkIsArray(someArray);
    return userFunc(someArray);
}

const countZeroNumbers = (arr) => { 
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            counter++;
        }
    }
    console.log(`ZERO: ${counter}`);
    return counter;
}

const countNegativeNumbers = (arr) => { 
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            counter++;
        }
    }
    console.log(`NEG: ${counter}`);
    return counter;
}

const countPositiveNumbers = (arr) => { 
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            counter++;
        }
    }
    console.log(`POS: ${counter}`);
    return counter;
}

const countPrimeNumbers = (arr) => { 
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] ^ 0) {
            counter++;
        }
    }
    console.log(`PRIME: ${counter}`);
    return counter;
}
countNumbers(someNumbers2, countZeroNumbers);
countNumbers(someNumbers2, countNegativeNumbers);
countNumbers(someNumbers2, countPositiveNumbers);
countNumbers(someNumbers2, countPrimeNumbers);

/////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem) {
    checkIsString(numberTwoSystem);
    ////first variant
    // let numTen = parseInt(numberTwoSystem, 2);
    // console.log(numTen);
    // return numTen;

    numberTwoSystem = numberTwoSystem.mySplit('');
    let numberInTenSystem = 0;

    let rank = 0;
    for (let i = numberTwoSystem.length-1; i >= 0; i--) {
        numberInTenSystem += numberTwoSystem[i]*2**rank;
        rank++;
    }
    console.log(numberInTenSystem);
    return numberInTenSystem;
}
convertFromTwoToTen('0011');

function convertFromTenToTwo(numberTenSystem) {
    checkIsNumber(numberTenSystem);

    let ostatok = 0;
    let numberTwoSystem = [];
    for (let i = 0; numberTenSystem >= 0; i++) {
        ostatok = numberTenSystem % 2;
        numberTenSystem = Math.floor(numberTenSystem / 2);
        numberTwoSystem.unshift(ostatok);

        if (numberTenSystem === 0) {
            console.log(+numberTwoSystem.toString().replaceAll(',',''));
            return +numberTwoSystem.toString().replaceAll(',','');
        }
    }
}

convertFromTenToTwo(11);

/////////// 12 - Пункты 9 и 10 выполнить для двумерных массивов. ///////////

const myDataTwoDimension = [[-1, -2, 0], [0, 0, 1], [2, 3, 4]];


//// 12.09
function countElementsSumTwoDimension (someArray, userFunc) {
    let someOneDimension = [].concat(...someArray);
    console.log(someOneDimension.reduce(userFunc, 0));
    return someOneDimension.reduce(userFunc, 0);
}

countElementsSumTwoDimension(myDataTwoDimension, countAllElementsSum); // 7
countElementsSumTwoDimension(myDataTwoDimension, countElementsDivideTwoSum); // 4
countElementsSumTwoDimension(myDataTwoDimension, countElementsDivideThreeSum); // 3
countElementsSumTwoDimension(myDataTwoDimension, countElementsPositiveOddSum); // 4

//// 12.10
function countZeroPosNegPrimeNumbersTwoDim(myDataNumbers) {
    let myNumbers = [].concat(...myDataNumbers);
    myNumbers.reduce(function (acc, num) {
        if (num === 0) {
            acc.zero = ++acc.zero || 1;
        }
        if (num < 0) {
            acc.negative = ++acc.negative || 1;
        }
        if (num > 0) {
            acc.positive = ++acc.positive || 1;
        }
        if (num > 1 && (num ^ 0) === num) {
            acc.prime = ++acc.prime || 1;
        }

        console.log(`TD: Zero, negative, positive, prime: ${JSON.stringify(acc)}`);
        return acc;
    }, {});
};

// function countMainDiagonal(matrix, userFunc){
//     console.log(`countMainDiagonal::: ${userFunc(matrix)}`);
//     return userFunc(matrix);
// }

// function countRangeSumm(min, max) {
//     let sumAll = 0;
//     let sumMultiplyTree = 0;
//     let sumPositive = 0;

//     let myNumbers = {};

//     for (let i = min; i <= max; i++){
//         sumAll += i;
//         myNumbers.all = sumAll;

//         if (i % 3 === 0) {
//             sumMultiplyTree += i;
//             myNumbers.divideByThree = sumMultiplyTree;
//         }
//         if (i > 0) {
//             sumPositive += i;
//             myNumbers.positive = sumPositive;
//         }
//     }
//     console.log(myNumbers);
//     return myNumbers;
//   };

//   countRangeSumm(-1, 5);

  /////////////////////////////////////////////////

function countRangeSum(min, max, userFunc) {
    checkIsNumber(min);
    checkIsNumber(max);
    let someArray = [];

    for (let i = min; i <= max; i++) {
        someArray.push(i);
    }
    console.log(someArray.reduce(userFunc, 0));
    return someArray.reduce(userFunc, 0);
}


const sumAll = (total, currentValue) => total + currentValue;

const sumElementsDivideThree = (total, currentValue) => {
    if (currentValue % 3 === 0) {
        return total + currentValue;
    } else {
        return total;
    }
};

const sumPositiveElements = (total, currentValue) => {
    if (currentValue > 0) {
        return total + currentValue;
    } else {
        return total;
    }
};

countRangeSum(-1, 3, sumAll);
countRangeSum(-1, 3, sumElementsDivideThree);
countRangeSum(-1, 3, sumPositiveElements);

/////////// 14 - Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).
let array23 = [1, 2, 3, 4, 5, 6];
let array24 = [[1, 2], [3, 4], [5, 6]];

function findAverageArrayValue (someArray, userFunc) {
    let digits = [].concat(...someArray);
    console.log(digits.reduce(userFunc, 0));
    return digits.reduce(userFunc, 0);
}

const findEvenAverage = (total, currentValue) => {

    if (currentValue % 2 === 0) {
        return (total + currentValue / 2);
    } else {
        return total;
    }

};

const findOddAverage = (total, currentValue) => {

    if (currentValue % 2 !== 0) {
        return (total + currentValue / 2);
    } else {
        return total;
    }

};

findAverageArrayValue(array23, findEvenAverage);
findAverageArrayValue(array23, findOddAverage);



/////////// 15 - Транспонировать матрицу, сложить две матрицы.

let matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[1, 2], [3, 4], [5, 6]];
let matrix3 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

function transposeMatrix(matrix) {
    checkIsArray(matrix);

    let transpMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpMatrix[i][j] = matrix[j][i];
        }
    }

    console.log(matrix);
    console.log(transpMatrix);
    return transpMatrix;
}

transposeMatrix(matrix);

function sumMatrix (firstMatrix, secondMatrix) {
    checkIsArray(firstMatrix);
    checkIsArray(secondMatrix);


    let transpMatrix = [];

    for (let i = 0; i < firstMatrix.length; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < firstMatrix[0].length; j++) {
            transpMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
    }

    console.log(firstMatrix);
    console.log(secondMatrix);
    console.log(transpMatrix);
    return transpMatrix;
}

sumMatrix (matrix, matrix1);


/////////// 16 - Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
let matrixInit = [[1, 2, 3],
                  [4, 0, 6],
                  [7, 8, 0],
                  [10, 11, 12]];

function removeMatrixRowWithZero(someArray) {

    for (let i = 0; i < someArray.length; i++) {
        for (let j = 0; j < someArray[0].length; j++) {
            if (someArray[i][j] === 0) {
                someArray.splice(i--, 1);
                break;
            }
        }
    }
    console.log(someArray);
}

removeMatrixRowWithZero(matrixInit);

let matrixInit2 = [[1, 2, 0],
                  [0, 5, 6],
                  [7, 8, 0],
                  [10, 11, 12]];

function removeMatrixColWithZero (someArray) {
    checkIsArray(someArray);

    let position;
    for (let i = 0; i < someArray.length; i++) {
        for (let j = 0; j < someArray[0].length; j++) {

            if (someArray[i][j] === 0) {
                position = j;
                for (let i = 0; i < someArray.length; i++) {
                    for (let j = 0; j < someArray[0].length; j++) {
                        someArray[i].splice(position, 1);
                        break;
                    }
                }
            }
        }

        if (someArray[0].length === 0) {
            someArray = [];
            break;
        };
    }
    console.log(someArray);
    return someArray;
}

removeMatrixColWithZero(matrixInit2);

/////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы: над и под главной диагональю и на главной диагонали.

let matrix5 = [
    [2,2,3,4,5],
    [1,2,3,4,0],
    [0,8,0,6,5],
    [9,8,0,6,5],
    [0,8,7,6,1]];

///first variant
function countDiagonal(matrix, userFunc){
    checkIsArray(matrix);
    return userFunc(matrix);
}

function countMainMatrixDiagonal(matrix) {
    checkIsArray(matrix);

    let result = {};
    let zero = 0;
    let sum = 0;
    let counter = 0;
    let average = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < i + 1; j++) {
            if (matrix[i] === matrix[j]) {
                if(matrix[i][j] === 0) {
                    zero++;
                }
                sum += matrix[i][j];
                counter++;
            }
        }
    }

    average = sum / counter;
    result.zeros = zero;
    result.sum = sum;
    result.average = average;

    // if (userFunc === "countZero") {
    //     return zero;
    // } else if (condition === "countSum") {
    //     return sum;
    // } else if (condition === "countAverage") {
    //     return sum / counter;
    // }

    console.log(result);
    return result;
}

countMainMatrixDiagonal(matrix5);

function countTopMatrixPart(matrix) {
    checkIsArray(matrix);
    let result = {};
    let zero = 0;
    let sum = 0;
    let counter = 0;
    let average = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zero++;
            }
            sum += matrix[i][j];
            counter++;
        }
    }

    average = sum / counter;
    result.zeros = zero;
    result.sum = sum;
    result.average = average;

    console.log(result);
    return result;
}

countTopMatrixPart(matrix5);

function countBottomMatrixPart(matrix) {
    checkIsArray(matrix);
    let result = {};
    let zero = 0;
    let sum = 0;
    let counter = 0;
    let average = 0;

    for(let i = 1; i < matrix.length; i++){
        for(let j = 0; j < i; j++){        
            if(matrix[i][j] === 0){
                zero++;
            }
            sum += matrix[i][j];
            counter++;
        }
    }

    average = sum / counter;
    result.zeros = zero;
    result.sum = sum;
    result.average = average;

    console.log(result);
    return result;
}

countBottomMatrixPart(matrix5);

countDiagonal(matrix5, countMainMatrixDiagonal);
countDiagonal(matrix5, countTopMatrixPart);
countDiagonal(matrix5, countBottomMatrixPart);

//////////////////////////////////////////////////////////////////

///second variant //закоментировать
// function countMainDiagonal(matrix, userFunc){
//     return userFunc(matrix);
// }

// function countMatrixDiagonalZeros(matrix){
//     let zeroCounter = 0;

//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i; j < i + 1; j++){
//             if(matrix[i][j] === 0){
//                 zeroCounter++;
//             }
//         }
//     }
//     console.log(zeroCounter);
//     return zeroCounter;

// }

// function countMatrixDiagonalSum(matrix) {
//     let sum = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = i; j < i + 1; j++) {
//             sum += matrix[i][j];
//         }
//     }
//     console.log(sum);
//     return sum;

// }

// function countMatrixDiagonalAverage(matrix) {
//     let average = 0;
//     let counter = 0;
//     let sum = 0;

//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i; j < i + 1; j++){
//             if(i === j){
//                 sum += matrix[i][j];
//                 counter++;
//             }
//         }
//     }
//     average = sum/counter;
//     console.log(average);
//     return average;

// }

// countMainDiagonal(matrix5, countMatrixDiagonalZeros);
// countMainDiagonal(matrix5, countMatrixDiagonalSum);
// countMainDiagonal(matrix5, countMatrixDiagonalAverage);

////////////



/////////// 18 - Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
/////////// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.

function countFibonacci (num) {
    checkIsNumber(num);
    if (num <= 1) {
        return 1;
    } else {
    return countFibonacci(num - 1) + countFibonacci(num - 2);
    }
};

countFibonacci (3);

function memoCountFibonacci (func) {
    const memo = {};
    return (num) => memo[num] || (memo[num] = func(num));
};

let memorizedFibonacci = memoCountFibonacci(countFibonacci);
memorizedFibonacci(3);



let iterableObject = {
    *[Symbol.iterator]() {
        let number1 = 1;
        let number2 = 1;
        let isTrue = true;

        while (isTrue) {
            let currentValue = number2;
            number2 = number1;
            number1 = number1 + currentValue;
            yield currentValue;
            if (currentValue == Infinity) {
                isTrue = false;
            };
        }
    },
};

let iterObject = iterableObject[Symbol.iterator]();
iterObject.next();

// // iterableObject[Symbol.iterator]().next();

// for (let num of iterableObject) {
//     console.log(num);
// }


///// 18 мемо неправильно

/////////// 19 - Реализовать с помощью итератора и генератора светофор.
/////////// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора. ///////////

function* generateTrafficLight() {
    for (; ;) {
        yield "red";
        yield "yellow";
        yield "green";
        yield "yellow";
    }
}

let generatorLights = generateTrafficLight();
generatorLights.next();

console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());


/////////// 20 - Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). 
/////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. 
/////////// Написать свою реализацию для ~, двумя способами).

    ////////////////////////////////////является ли число отрицательным или положительным
//// first variant
function checkIsPositivNumber (number) {
    checkIsNumber(number);

    if ((number & (1 << 63)) !== (1 << 63)) {
        console.log('Positive');
        return true;
    } else {
        console.log('Negative');
        return false;
    }
}

checkIsPositivNumber(5);

//// second variant
function checkIsPositiveNumber(number) {
    checkIsNumber(number);

    let binNumber = ~number.toString(2);
    let firstIndex = binNumber.toString().mySplit('')[0];
    if (firstIndex === '-') {
        console.log('Positive');
        return true;
    } else {
        console.log('Negative');
        return false;
    }
}
checkIsPositiveNumber(5);
checkIsPositiveNumber(-5);

//// third variant // не нужно
function checksIsPositivNumber(number) {
    checkIsNumber(number);

    if ((number & 0x80000000) === 0) {
        console.log('Positive');
        return true;
    } else {
        console.log('Negative');
        return false;
    }
}
checksIsPositivNumber(5);
checksIsPositivNumber(-5);

    //// fourth variant
    // let isPositive = Math.sign(number);
    // if (isPositive === 1) {
    //     return true;
    // }
    // if (isPositive === -1){
    //     return false;
    // }
    // console.log(isPositive);


    ////////////////////////////////////////Посчитать количество битов числа
//// first variant
function countBits(number) {
    checkIsNumber(number);
    let stringNumber = "";
    let zeroBitCount = 0;
    let oneBitCount = 0;
    for (let i = 0; i < 32; i++) {
        if ((number & (1 << i)) === (1 << i)) {
            stringNumber += "1";
            oneBitCount++
        } else {
            stringNumber += "0";
            zeroBitCount++;
        }
    }
console.log(stringNumber);
console.log({one: oneBitCount, zero: zeroBitCount});
return {one: oneBitCount, zero: zeroBitCount}
}

countBits(5);

//// second variant
let binNumber = '00000000000000000000000000001010';

function countZeroOneBits (number){
    checkIsString(number);

    number.toString().mySplit('');
    let zeroBitCount = 0;
    let oneBitCount = 0;

    for (let i = 0; i < number.length; i++) {
        if (number[i] === '0'){
            zeroBitCount++;
        }
        if (number[i] === '1'){
            oneBitCount++;
        }
    }
    console.log({zero: zeroBitCount, one: oneBitCount});
    return {zero: zeroBitCount, one: oneBitCount};
}

countZeroOneBits(binNumber);


///////////////////////////////////////////Написать свою реализацию для ~ тильда

let binNumber2 = '10000000000000000000000000001010';
//// 1st
function invertBinDigits (binNumber) { ////myTilda
    checkIsString(binNumber);

    console.log(binNumber);
    binNumber = binNumber.mySplit("");
    for (let i = 0; i < binNumber.length; i++) {
        if(binNumber[i] === '0'){
            binNumber[i] = 1;
        } else {
            binNumber[i] = 0;
        }
    }
    console.log(binNumber.toString().replaceAll(",", ""));
    return binNumber.toString().replaceAll(",", "");
}

invertBinDigits(binNumber2);

    
//// 2nd
function invertBinNumber (number) { ////myTilda
    checkIsNumber(number);
    // number = number.toString(2);
    console.log(number);
    console.log(-(number + 1));
    return -(number+1);
}

invertBinNumber(5);

//// 3rd
function invertBinaryNumber (number) { ////myTilda
    checkIsNumber(number);
    console.log(number);
    // console.log(-number - 1);
    // console.log(number ^= -1);
    console.log(-1 * (number + 1));
}

invertBinaryNumber(5);



// ///
/////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0
// let a = 1;
// let s = "";
// for (let i = 0; i < 100; i++) {
//     if ((a & (1 << i)) === (1 << i)) {
//         s += "1";
//     } else {
//         s += "0";
//     }
// }
// console.log(s);

////////////////////////////////
// let a = '';
// let b = 0;

// for (let i = 0; i < 100; i++) {
    
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//// побитовый и не побитовый способ
//// (53 & 1) === 1
//// (53 & 1 << 1) === 1
//// (53 & (1 << 1)) === (1 << 1)

// 11001101010111000111
// 00000000000000000010
// 00000000000000000010


// // invertBinNumber(binNumber3);

////

// const b = 5;
// const c = 5;

// console.log(~b);
// console.log(-(c+1));

// a ^ b;



// ~n == -(n+1)

// const a = 5;        // 00000000000000000000000000000101
// const b = 3;        // 00000000000000000000000000000011

// console.log(a ^ b); // 00000000000000000000000000000110
// // expected output: 6


// const a = 5;        // 00000000000000000000000000000101
// const b = 3;        // 00000000000000000000000000000101

// console.log(a ^ b); // 00000000000000000000000000000000

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// var array = [];

// var count = 0;
// for (var row=0; row<4; row++) {
//     array[row] = [];
//     for (var col=0; col<5; col++) {
//       array[row][col] = count++;
//     }
// }

// console.log(array);

//    [ [ 0,  1,  2,  3,  4  ],
//      [ 5,  6,  7,  8,  9  ],
//      [ 10, 11, 12, 13, 14 ],
//      [ 15, 16, 17, 18, 19 ] ]


// function deleteRow(arr, row) {
//    arr = arr.slice(0); // make copy
//    arr.splice(row - 1, 1);
//    return arr;
// }

// console.log(deleteRow(array, 1));









// function sumFromTo(min, max) {

//     let myNumbers = myNumbers || {}


//     console.log (myNumbers);
//     if (min > max) {

//         return sumFromTo(max, min);
//     }
//     if (max === min) {
//          return min;
//     }

//     myNumbers.all = min;

//     return min + sumFromTo(min + 1, max);
// }

//    sumFromTo (1, 3);
//    console.log(sumFromTo (1, 3))
















// function countRangeSumRecursion(min, max) {
//     let sumAll;
//     let sumMultiplyTree;
//     let sumPositive;
//     let myNumbers;

//     myNumbers = myNumbers || {};
//     console.log(myNumbers);

//     if (min < max) {

//     sumAll = sumAll || 0;
//     sumAll += min;
//     myNumbers.all = sumAll || 0;

//     if (min % 3 === 0) {
//         sumMultiplyTree = sumMultiplyTree || 0;
//         sumMultiplyTree += i;
//         myNumbers.divideByThree = sumMultiplyTree;
//     }
//     if (min > 0) {
//         sumPositive = sumPositive || 0;
//         sumPositive += i;
//         myNumbers.positive = sumPositive;
//     }
//     }

//     if (min === max) {
//         console.log(myNumbers);
//         return myNumbers;

//     } else {


//         countRangeSumRecursion(min++, max)
//         console.log(myNumbers);

//         return myNumbers;

//     }

//   };
//   countRangeSumRecursion (-1, 5);






// function factorial () {
//     let memo = {};
//     return function fact(num){
//         if (num === 0) {
//             return 1;
//         }

//         if(memo[num] === undefined) {

//             memo[num] = fact(num - 1);
//         }

//         return num * memo[num];
//     };
// };

// console.log(factorial(7));


///////////////////////////////////////
// // // function f(a, d, b, c){
// // //     return this.a + a + b + c + d;
// // // }
// // // let obj = {
// // //     a: 10,
// // //     f,
// // // };
// // // let obj2 = {
// // //     a: 1,
// // // };
// // // let f2 = f.bind(obj2, 31, 2);
// // // console.dir(f2(4,5));


// function myBind(func, context) {
//         let self = Object.create(context);
//         return function() {
//         self.func = func;
//         return self.func();
//         };
//     }
    
//     function myBind(func, context) {
//         return function() {
//         let symbol = Symbol();
//         context[symbol] = func;
//         let result = context[symbol]();
//         delete context[symbol];
//         return result;
//         };
//     }
    
//     function f() {
//         return this.a + 1;
//     }
    
//     let obj = {
//         a: 10,
//     };
    
//     let f2 = myBind(f, obj);
//     console.dir(f2());
    
//     console.log(Symbol() === Symbol());











// // // // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // // // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/////////// 19 - Реализовать с помощью итератора и генератора светофор.
// function iterateTrafficSignals() {
//     let lights = ['Red', 'Yellow', 'Green'];

//     let nextIndex = 0;

//     return {

//         next: function () {
//             if (nextIndex < lights.length) {

//                 return { value: lights[nextIndex++], done: false }
//             } else {
//                 nextIndex = 0;
//                 return { done: true }
//             }
//         }

//     };

// };

// let iteratorLights = iterateTrafficSignals();
// iteratorLights.next();
// console.log(iteratorLights.next());

// ////////////////////////////////////////////////////////////////////////////


/////////////// 5 third variant
// // function countUniqueWords3(someString) {
// //     let uniqueWords = someString.toLowerCase().split(' ');

// //     let counter = uniqueWords.length;
    
// //     for (let i = 0; i < uniqueWords.length; i++) {
// //         let yye = uniqueWords[i];

// //         for (let j = i + 1 ; j < uniqueWords.length; j++) {
// //             let yy = uniqueWords[i];
// //             let yyrr = uniqueWords[j];
// //             if (uniqueWords[i] === uniqueWords[j]) {
// //                 counter--;
// //                 i++;
// //             } 

            
// //         console.log(`Unique words COUNT: ${counter}`);
// //         console.log(`Unique WORDS: ${uniqueWords[i]}`);

// //         }
// //     }
// //     return uniqueWords.length;
// // }

// // countUniqueWords3('привет пока привет пока привет hello');



// /////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы: над и под главной диагональю и на главной диагонали.

// let matrix5 = [
//     [2,2,3,4,5],
//     [1,2,3,4,0],
//     [0,8,0,6,5],
//     [9,8,0,6,5],
//     [0,8,7,6,1]]

// function countMainDiagonal(matrix, userFunc){
//     return userFunc(matrix);
// }

// function countMatrixZeros(matrix){
//     let zeroCounter = 0;

//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i; j < i + 1; j++){
//             if(matrix[i][j] === 0){
//                 zeroCounter++;
//             }
//         }
//     }
//     console.log(zeroCounter);
//     return zeroCounter;

// }

// function countMatrixSum(matrix) {
//     let sum = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = i; j < i + 1; j++) {
//             sum += matrix[i][j];
//         }
//     }
//     console.log(sum);
//     return sum;

// }

// countMainDiagonal(matrix5, countMatrixZeros);
// countMainDiagonal(matrix5, countMatrixSum);