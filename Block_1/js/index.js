'use strict';

function isEquilateralMatrix(matrix) {
  if(isNaN(matrix)) {
    return false;
  }
  for (let i = 0; i < matrix.length; i++) {
    if((matrix[i].length !== matrix.length)) {
      return false;
    }
  }
  return true;
}

String.prototype.myReplaceAll = function (initialChar, newChar) {
  let newStr = '';
  for(let i = 0; i < this.length; i++) {
    if(this[i] === initialChar) {
      let charReplaced = this[i];
      charReplaced = newChar;
      newStr += charReplaced;
    } else {
      newStr += this[i];
    }
  }
  return newStr;
};

String.prototype.mySplit = function (separator) {
  let newArr = [];
  let word = '';
  for(let i = 0; i < this.length; i++) {
    if(separator === '') {
      newArr.push(this[i]);
    } else {
      if(this[i] !== separator) {
        word += this[i];
      }
      if(this[i] === separator || i === this.length - 1) {
        newArr.push(word);
        word = '';
      }
    }
  }
  return newArr;
};

Array.prototype.mySort = function () {
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      if(this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

Array.prototype.myJoin = function (separator) {
  if(separator !== undefined) {
    return this.toString().myReplaceAll(',', separator);
  }
  return this.toString();
};

/////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr, secondStr) {
  if((typeof (firstStr) !== 'string') || (typeof (secondStr) !== 'string')) {
    throw new Error("Not String !!");
  }

  let firstString = firstStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
  let secondString = secondStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
  return (firstString === secondString);
}

/////////// 3 - Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии. ///////////
function countDigits(num) {
  if(typeof (num) !== 'number') {
    throw new Error("Not Number !!");
  }

  let digitsCounter = 0;

  for(let i = 0; num > 1; i++) {
    num = num / 10;
    digitsCounter++;
  }
  return digitsCounter;
}

function countDigitsRecursion(num) {
  if(typeof (num) !== 'number') {
    throw new Error("Not Number !!");
  }

  if(Math.floor(num) === 0) {
    return 0;
  }
  return 1 + countDigitsRecursion((num / 10));
}

/////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////
function checkIsPalindrom(initialString) {
  if(typeof (initialString) !== 'string') {
    throw new Error("Not String !!");
  }
  let reversedString = '';

  for(let i = initialString.length - 1; i >= 0; i--) {
    reversedString += initialString[i];
  }
  initialString = initialString.toLowerCase().myReplaceAll(' ', '');
  reversedString = reversedString.toLowerCase().myReplaceAll(' ', '');
  return (initialString === reversedString);
}

/////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении ///////////
//// first variant
function countUniqueWords(someString) {
  if(typeof (someString) !== 'string') {
    throw new Error("Not String !!");
  }

  let allWords = someString.mySplit(' ');
  let counter = 0;
  let result = [];

  for(let word of allWords) {
    if(!result.includes(word)) {
      result.push(word);
      counter++;
    }
  }
  return counter;
}

//// second variant
function countUniqueWords2(someString) {
  if(typeof (someString) !== 'string') {
    throw new Error("Not String !!");
  }
  let uniqueWords = new Set(someString.mySplit(' '));
  return uniqueWords.size;
}

/////////// 6 - Написать функцию которая вычисляет вхождение каждого слова в предложение ///////////
function countOccurrenceWord(someString) {
  if(typeof (someString) !== 'string') {
    throw new Error("Not String !!");
  }
  let words = {};
  for(let i = 0; i < someString.length; i++) {
    if(words[someString[i]]) {
      words[someString[i]]++;
    } else {
      words[someString[i]] = 1;
    }
  }
  return words;
}

/////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////

function Rectangle(width, height) {
  if((typeof (width) !== 'number' || width <= 0) || (typeof (height) !== 'number' || height <= 0)) {
    throw new Error("Not Number !!");
  }
  this.width = width;
  this.height = height;
}

Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.square = function () {
  return (this.width * this.height);
};

function Triangle(leftSide, rightSide, baseSide) {
  if(((typeof (leftSide) !== 'number') || (leftSide <= 0)) || ((typeof (rightSide) !== 'number') || (rightSide <= 0)) || ((typeof (baseSide)) !== 'number') || (baseSide <= 0)) {
    throw new Error("Not Number !!");
  }
  this.leftSide = leftSide;
  this.rightSide = rightSide;
  this.baseSide = baseSide;
}

Triangle.prototype.perimeter = function () {
  return (this.leftSide + this.rightSide + this.baseSide);
};

Triangle.prototype.square = function () {
  let semiperimetr = (this.leftSide + this.rightSide + this.baseSide) / 2;
  let square = Math.sqrt(semiperimetr * (semiperimetr - this.leftSide) * (semiperimetr - this.rightSide) * (semiperimetr - this.baseSide));
  return square;
};


function Circle(radius) {
  if((typeof (radius) !== 'number') || (radius <= 0)) {
    throw new Error("Not Number !!");
  }
  this.radius = radius;
}

Circle.prototype.perimeter = function () {
  return (2 * Math.PI * this.radius);
};

Circle.prototype.square = function () {
  return (Math.PI * Math.pow(this.radius, 2));
};

class RectangleClass {
  constructor(width, height) {
    if((typeof (width) !== 'number' || width <= 0) || (typeof (height) !== 'number' || height <= 0)) {
      throw new Error("Not Number !!");
    }
    this.width = width;
    this.height = height;
  }

  perimeter() {
    return (this.width + this.height) * 2;
  }

  square() {
    return (this.width * this.height);
  }
}

class TriangleClass {
  constructor(leftSide, rightSide, baseSide) {
    if(((typeof (leftSide) !== 'number') || (leftSide <= 0)) || ((typeof (rightSide) !== 'number') || (rightSide <= 0)) || ((typeof (baseSide)) !== 'number') || (baseSide <= 0)) {
      throw new Error("Not Number !!");
    }
    this.leftSide = leftSide;
    this.rightSide = rightSide;
    this.baseSide = baseSide;
  }

  perimeter() {
    return (this.leftSide + this.rightSide + this.baseSide);
  }

  square() {
    let semiperimetr = (this.leftSide + this.rightSide + this.baseSide) / 2;
    let square = Math.sqrt(semiperimetr * (semiperimetr - this.leftSide) * (semiperimetr - this.rightSide) * (semiperimetr - this.baseSide));
    return square;
  }
}

class CircleClass {
  constructor(radius) {
    if((typeof (radius) !== 'number') || (radius <= 0)) {
      throw new Error("Not Number !!");
    }
    this.radius = radius;
  }
  perimeter() {
    return (2 * Math.PI * this.radius);
  };

  square() {
    return Math.PI * Math.pow(this.radius, 2);
  };
}

/////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////

function calculateFactorial(num) {
  if(typeof (num) !== 'number' || num < 0) {
    throw new Error("Not Number !!");
  }

  let result = 1;

  while (num > 0) {
    result *= num--;
  }

  return result;
}

function countFactorial(num) {
  if(typeof (num) !== 'number' || num < 0) {
    throw new Error("Not Number !!");
  }

  if(num === 0 || num === 1) {
    return 1;
  }
  return num * countFactorial(num - 1);
}

const calculateFactorialMemo = (function () {
  let memo = {};
  return function calculateFactorial(num) {
    if(typeof (num) !== 'number' || num < 0) {
      throw new Error("Not Number !!");
    }
    if(num === 0 || num === 1) {
      return 1;
    }

    if(memo[num] === undefined) {
      memo[num] = calculateFactorial(num - 1);
    }
    return num * memo[num];
  };
})();

////////////////////////// 9 - Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные, реализовать с помощью рекурсии для одномерного массива.) ///////////

function countElementSum(array, func) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if(func(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

function getElementsSumRecursion(array, func, index) {
  index = index || 0;
  let sum = null;
  sum += func(array[index]) ? array[index] : 0;

  if(array.length <= index) {
    return sum;
  }
  return sum + getElementsSumRecursion(array, func, ++index);
}

/////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////

function countArrayElements(array, func) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    if(func(array[i])) {
      counter++;
    }
  }
  return counter;
}

/////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem) {
  if(typeof (numberTwoSystem) !== 'string') {
    throw new Error("Not String !!");
  }
  numberTwoSystem = numberTwoSystem.mySplit('');

  let numberInTenSystem = 0;
  let rank = 0;

  for(let i = numberTwoSystem.length - 1; i >= 0; i--) {
    numberInTenSystem += numberTwoSystem[i] * 2 ** rank;
    rank++;
  }

  return numberInTenSystem;
}

function convertFromTenToTwo(numberTenSystem) {
  if(typeof (numberTenSystem) !== 'number') {
    throw new Error("Not Number !!");
  }

  let remainder = 0;
  let numberTwoSystem = [];

  for(let i = 0; numberTenSystem >= 0; i++) {
    remainder = numberTenSystem % 2;
    numberTenSystem = Math.floor(numberTenSystem / 2);
    numberTwoSystem.unshift(remainder);

    if(numberTenSystem === 0) {
      return +numberTwoSystem.toString().replaceAll(',', '');
    }
  }
}

/////////// 12 - Пункты 9 и 10 выполнить для двумерных массивов. ///////////

function countElementsSum(array, func) {

  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }

  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(func(array[i][j])) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}

function countArrayElement(array, func) {

  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }

  let counter = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(func(array[i][j])) {
        counter++;
      }
    }
  }
  return counter;
}

////////// 13 - Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function countRangeSum(min, max, func) {
  if((typeof (min) !== 'number') || (typeof (max) !== 'number') || typeof func !== 'function') {
    throw new Error("First and second parameter should be number, third - function");
  }

  if(min >= max) {
    throw new Error("min >= max!");
  }

  let sum = 0;
  for(let i = min; i <= max; i++) {
    if(func(i)) {
      sum += i;
    }
  }
  return sum;
}

function countRangeSumRecursion(min, max, func) {
  if((typeof (min) !== 'number') || (typeof (max) !== 'number')) {
    throw new Error("Not Number !!");
  }

  if(min >= max) {
    throw new Error("min >= max");
  }

  let sum = 0;

  if(func(min)) {
    sum += min;
  }

  if(++min <= max) {
    sum += countRangeSumRecursion(min, max, func);
  }
  return sum;
}

//// second variant 
function countRangeSumReduce(min, max, func) {
  if((typeof (min) !== 'number') || (typeof (max) !== 'number')) {
    throw new Error("Not Number !!");
  }

  if(min >= max) {
    throw new Error("min >= max");
  }

  let array = [];

  for(let i = min; i <= max; i++) {
    array.push(i);
  }
  return array.reduce(func, 0);
}

const sumAll = (total, currentValue) => total + currentValue;

const sumElementsDivideThree = (total, currentValue) => {
  if(currentValue % 3 === 0) {
    return total + currentValue;
  } else {
    return total;
  }
};

const sumPositiveElements = (total, currentValue) => {
  if(currentValue > 0) {
    return total + currentValue;
  } else {
    return total;
  }
};

/////////// 14 - Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).
function findAverageArrayValue(array, func) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }
  let digits = [].concat(...array);
  return digits.reduce(func, 0);
}

const findEvenAverage = (total, currentValue) => {

  if(currentValue % 2 === 0) {
    return (total + currentValue / 2);
  } else {
    return total;
  }
};

const findOddAverage = (total, currentValue) => {

  if(currentValue % 2 !== 0) {
    return (total + currentValue / 2);
  } else {
    return total;
  }
};

/////////// 15 - Транспонировать матрицу, сложить две матрицы.

function transposeMatrix(matrix) {
  if(!Array.isArray(matrix)) {
    throw new Error("Parameter should be Array !!");
  }

  let transpMatrix = [];

  for(let i = 0; i < matrix[0].length; i++) {
    transpMatrix[i] = [];
    for(let j = 0; j < matrix.length; j++) {
      transpMatrix[i][j] = matrix[j][i];
    }
  }
  return transpMatrix;
}

function sumMatrix(firstMatrix, secondMatrix) {
  if((!Array.isArray(firstMatrix)) || (!Array.isArray(secondMatrix))) {
    throw new Error("Parameters should be Arrays !!");
  }
  let transpMatrix = [];

  for(let i = 0; i < firstMatrix.length; i++) {
    transpMatrix[i] = [];
    for(let j = 0; j < firstMatrix[0].length; j++) {
      transpMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    }
  }
  return transpMatrix;
}

/////////// 16 - Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function removeMatrixRowWithZero(array) {
  if(!Array.isArray(array)) {
    throw new Error("Parameter should be Array !!");
  }
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[0].length; j++) {
      if(array[i][j] === 0) {
        array.splice(i--, 1);
        break;
      }
    }
  }
}

function removeMatrixColWithZero(array) {
  if(!Array.isArray(array)) {
    throw new Error("Parameter should be Array !!");
  }
  let position;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[0].length; j++) {

      if(array[i][j] === 0) {
        position = j;
        for(let i = 0; i < array.length; i++) {
          for(let j = 0; j < array[0].length; j++) {
            array[i].splice(position, 1);
            break;
          }
        }
      }
    }

    if(array[0].length === 0) {
      array = [];
      break;
    };
  }
  return array;
}

/////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы: над и под главной диагональю и на главной диагонали.

function sumMatrixElements(array, func) {
  if(!Array.isArray(array)) {
    throw new Error("First parameter should be Array !!");
  }
  isEquilateralMatrix(array);

  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(func(i, j)) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}

/////////// 18 - Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
/////////// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.

let iterateFibonacci = {
  [Symbol.iterator]() {
    let leftNumber = 0;
    let rightNumber = 1;
    return {
      next() {
        let sum = leftNumber + rightNumber;
        leftNumber = rightNumber;
        rightNumber = sum;
        return { value: sum, done: false };
      }
    };
  }
};

let iterFibon = iterateFibonacci[Symbol.iterator]();

function* generateFibonacci() {
  let leftNumber = 0;
  let rightNumber = 1;
  while (true) {
    let sum = leftNumber + rightNumber;
    leftNumber = rightNumber;
    rightNumber = sum;
    yield sum;
  }
}

function countFibonacci(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }

  if((number <= 1) && (number >= 0)) {
    return 1;
  }

  return countFibonacci(number - 1) + countFibonacci(number - 2);
}

function countFibonacciMemo(number, memo) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }
  memo = memo || {};

  if(memo[number]) {
    return memo[number];
  }

  if((number <= 1) && (number >= 0)) {
    return 1;
  }

  return memo[number] = countFibonacciMemo(number - 1, memo) + countFibonacciMemo(number - 2, memo);
}

/////////// 19 - Реализовать с помощью итератора и генератора светофор.
/////////// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора. ///////////

function* generateTrafficLight() {
  for(; ;) {
    yield "red";
    yield "yellow";
    yield "green";
    yield "yellow";
  }
}

/////////// 20 - Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). 
/////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. 
/////////// Написать свою реализацию для ~, двумя способами).

////////////////////////////////////является ли число отрицательным или положительным

//// first variant
function checkIsPositivNumber(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }
  return (number & (1 << 31)) !== (1 << 31);
}

//// second variant
function checkIsPositiveNumber(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }
  let binNumber = ~number.toString(2);
  let firstIndex = binNumber.toString().mySplit('')[0];
  return (firstIndex === '-');
}

////////////////////////////////////////Посчитать количество битов числа
//// first variant
function countBits(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }

  let zeroBitCount = 0;
  let oneBitCount = 0;

  for(let i = 0; i < 32; i++) {
    if((number & (1 << i)) === (1 << i)) {
      oneBitCount++
    }
    zeroBitCount = 32 - oneBitCount;
  }
  return { one: oneBitCount, zero: zeroBitCount };
}

//// second variant
function countZeroOneBits(numberBin) {
  if(typeof (numberBin) !== 'string') {
    throw new Error("Not String !!");
  }

  numberBin.toString().mySplit('');
  let zeroBitCount = 0;
  let oneBitCount = 0;

  for(let i = 0; i < numberBin.length; i++) {
    if(numberBin[i] === '1') {
      oneBitCount++;
    }
  }

  zeroBitCount = numberBin.length - oneBitCount;
  return { zero: zeroBitCount, one: oneBitCount };
}

///////////////////////////////////////////Написать свою реализацию для ~ тильда
function invertBinNumber(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }
  return -(number + 1);
}

function invertBinDigits(number) {
  if(typeof (number) !== 'number') {
    throw new Error("Not Number !!");
  }
  return (number ^ -1);
}
