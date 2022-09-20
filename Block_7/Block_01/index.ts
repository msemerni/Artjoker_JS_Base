function isEquilateralMatrix(matrix: Array<Array<number>>): boolean {
  for(let i: number = 0; i < matrix.length; i++) {
    if((matrix[i].length !== matrix.length)) {
      return false;
    }
  }
  return true;
}

interface String {
  myReplaceAll(initialChar: string, newChar: string): string;
  mySplit(separator: string): Array<string>;
}

interface Array<T> {
  mySort(): Array<T>;
  myJoin(separator: string): string;
}

String.prototype.myReplaceAll = function (initialChar: string, newChar: string): string {
  let newStr: string = '';
  for(let i: number = 0; i < this.length; i++) {
    if(this[i] === initialChar) {
      let charReplaced: string = this[i];
      charReplaced = newChar;
      newStr += charReplaced;
    } else {
      newStr += this[i];
    }
  }
  return newStr;
};

String.prototype.mySplit = function (separator: string): Array<string>{
  let newArr: Array<string> = [];
  let word: string = '';
  for(let i: number = 0; i < this.length; i++) {
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

Array.prototype.mySort = function<T> (): Array<T> {
  for(let i: number = 0; i < this.length; i++) {
    for(let j: number = 0; j < this.length; j++) {
      if(this[j] > this[j + 1]) {
        let temp:T = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

Array.prototype.myJoin = function (separator: string): string {
    return this.toString().myReplaceAll(',', separator);
};

// /////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr: string, secondStr: string): boolean {
  let firstString: string = firstStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
  let secondString: string = secondStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
  return (firstString === secondString);
}

// /////////// 3 - Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии. ///////////
function countDigits(num: number): number {
  let digitsCounter: number = 0;

  for(let i: number = 0; num > 1; i++) {
    num = num / 10;
    digitsCounter++;
  }
  return digitsCounter;
}

function countDigitsRecursion(num: number): number {
  if(Math.floor(num) === 0) {
    return 0;
  }
  return 1 + countDigitsRecursion((num / 10));
}

// /////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////
function checkIsPalindrom(initialString: string): boolean {
  let reversedString: string = '';

  for(let i: number = initialString.length - 1; i >= 0; i--) {
    reversedString += initialString[i];
  }
  initialString = initialString.toLowerCase().myReplaceAll(' ', '');
  reversedString = reversedString.toLowerCase().myReplaceAll(' ', '');
  return (initialString === reversedString);
}

// /////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении ///////////
function countUniqueWords(someString: string): number {
  let allWords: Array<string> = someString.mySplit(' ');
  let counter: number = 0;
  let result: Array<string> = [];

  for(let word of allWords) {
    if(!result.includes(word)) {
      result.push(word);
      counter++;
    }
  }
  return counter;
}

// /////////// 6 - Написать функцию которая вычисляет вхождение каждого слова в предложение ///////////
type occurrenceWord = {
  [key: string]: number
}

function countOccurrenceWord(someStr: string): occurrenceWord {
  let someString: Array<string> = someStr.split(" ");
  let words: occurrenceWord = {};
  for(let i: number = 0; i < someString.length; i++) {
    if(words[someString[i]]) {
      words[someString[i]]++;
    } else {
      words[someString[i]] = 1;
    }
  }
  return words;
}

// /////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////

function Rectangle(width: number, height: number): void {
  if(width <= 0 || height <= 0) {
    throw new Error("Number <= 0");
  }
  this.width = width;
  this.height = height;
}

Rectangle.prototype.perimeter = function (): number {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.square = function (): number {
  return (this.width * this.height);
};

function Triangle(leftSide: number, rightSide: number, baseSide: number): void {
  if(leftSide <= 0 || rightSide <= 0 || baseSide <= 0) {
    throw new Error("Number <= 0");
  }
  this.leftSide = leftSide;
  this.rightSide = rightSide;
  this.baseSide = baseSide;
}

Triangle.prototype.perimeter = function (): number {
  return (this.leftSide + this.rightSide + this.baseSide);
};

Triangle.prototype.square = function (): number {
  let semiperimetr: number = (this.leftSide + this.rightSide + this.baseSide) / 2;
  let square = Math.sqrt(semiperimetr * (semiperimetr - this.leftSide) * (semiperimetr - this.rightSide) * (semiperimetr - this.baseSide));
  return square;
};


function Circle(radius: number): void {
  if(radius <= 0) {
    throw new Error("Radius <= 0");
  }
  this.radius = radius;
}

Circle.prototype.perimeter = function (): number {
  return (2 * Math.PI * this.radius);
};

Circle.prototype.square = function (): number {
  return (Math.PI * Math.pow(this.radius, 2));
};

abstract class Figure {
  abstract perimeter(): number;
  abstract square(): number;
}

class Rectangle_ extends Figure {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    if(width <= 0 || height <= 0) {
      throw new Error("Number <= 0");
    };
    super();
    this.width = width;
    this.height = height;
  };

  perimeter(): number {
    return (this.width + this.height) * 2;
  };

  square(): number {
    return this.width * this.height;
  };
};

class Triangle_ extends Figure{
  leftSide: number;
  rightSide: number;
  baseSide: number;
  constructor(leftSide: number, rightSide: number, baseSide: number) {
    if(leftSide <= 0 || rightSide <= 0 || baseSide <= 0) {
      throw new Error("Number <= 0");
    }
    super();
    this.leftSide = leftSide;
    this.rightSide = rightSide;
    this.baseSide = baseSide;
  };

  perimeter(): number {
    return (this.leftSide + this.rightSide + this.baseSide);
  };

  square(): number {
    let semiperimetr: number = (this.leftSide + this.rightSide + this.baseSide) / 2;
    let square: number = Math.sqrt(semiperimetr * (semiperimetr - this.leftSide) * (semiperimetr - this.rightSide) * (semiperimetr - this.baseSide));
    return square;
  };
};

class Circle_ extends Figure{
  radius: number;
  constructor(radius: number) {
    if(radius <= 0) {
      throw new Error("Radius <= 0");
    }
    super();
    this.radius = radius;
  };

  perimeter(): number {
    return (2 * Math.PI * this.radius);
  };

  square(): number {
    return Math.PI * Math.pow(this.radius, 2);
  };
};

// /////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////

function calculateFactorial(num: number): number {
  if(num < 0) {
    throw new Error("Number < 0");
  }

  let result: number = 1;

  while (num > 0) {
    result *= num--;
  }

  return result;
}

function countFactorial(num: number): number {
  if(num < 0) {
    throw new Error("Number < 0");
  }

  if(num === 0 || num === 1) {
    return 1;
  }
  return num * countFactorial(num - 1);
}

interface memoType {
  [key: number]: number
}

const calculateFactorialMemo = (function () {
  let memo: memoType = {};
  return function calculateFactorial(num: number): number {
    if(num < 0) {
      throw new Error("Number < 0");
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

// ////////////////////////// 9 - Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные, реализовать с помощью рекурсии для одномерного массива.) ///////////

type callback = (num: number) => boolean;

function countElementSum(array: Array<number>, func: callback): number {
  let sum: number = 0;
  for(let i: number = 0; i < array.length; i++) {
    if(func(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

function getElementsSumRecursion(array: Array<number>, func: callback, index: number): number {
  index = index || 0;
  let sum: number = 0;
  sum += func(array[index]) ? array[index] : 0;

  if(array.length <= index) {
    return sum;
  }
  return sum + getElementsSumRecursion(array, func, ++index);
}

// /////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////

function countArrayElements(array: Array<number>, func: callback): number {
  let counter: number = 0;

  for(let i: number = 0; i < array.length; i++) {
    if(func(array[i])) {
      counter++;
    }
  }
  return counter;
}

// /////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem: string): number {
  let numberInTwoSystem: Array<string> = numberTwoSystem.mySplit('');
  let numberInTenSystem: number = 0;
  let rank: number = 0;

  for(let i: number = numberInTwoSystem.length - 1; i >= 0; i--) {
    numberInTenSystem += +numberInTwoSystem[i] * 2 ** rank;
    rank++;
  }
  return numberInTenSystem;
}

function convertFromTenToTwo(numberTenSystem: number): number {
  let remainder: number = 0;
  let numberTwoSystem: Array<number> = [];
  let result: number = 0;

  for(let i: number = 0; numberTenSystem >= 0; i++) {
    remainder = numberTenSystem % 2;
    numberTenSystem = Math.floor(numberTenSystem / 2);
    numberTwoSystem.unshift(remainder);

    if(numberTenSystem === 0) {
      result = +numberTwoSystem.toString().myReplaceAll(',', '');
    }
  }
  return result;
}

// /////////// 12 - Пункты 9 и 10 выполнить для двумерных массивов. ///////////

function countElementsSum(array: Array<Array<number>>, func: callback): number {
  let sum: number = 0;

  for(let i: number = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(func(array[i][j])) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}

function countArrayElement(array: Array<Array<number>>, func: callback): number {
  let counter: number = 0;

  for(let i: number = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(func(array[i][j])) {
        counter++;
      }
    }
  }
  return counter;
}

// ////////// 13 - Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

type callbackFunc = (num: number, value?: number) => number;

function countRangeSumRecursion(min: number, max: number, func: callbackFunc): number {
  if(min >= max) {
    throw new Error("min >= max");
  }

  let sum: number = 0;

  if(func(min)) {
    sum += min;
  }

  if(++min <= max) {
    sum += countRangeSumRecursion(min, max, func);
  }
  return sum;
}

function countRangeSumReduce(min: number, max: number, func: callbackFunc): number {
  if(min >= max) {
    throw new Error("min >= max");
  }

  let array: Array<number> = [];

  for(let i: number = min; i <= max; i++) {
    array.push(i);
  }
  return array.reduce(func, 0);
}

const sumAll = (total: number, currentValue: number): number => total + currentValue;

const sumElementsDivideThree = (total: number, currentValue: number): number => {
  if(currentValue % 3 === 0) {
    return total + currentValue;
  }
  return total;
};

const sumPositiveElements = (total: number, currentValue: number): number => {
  if(currentValue > 0) {
    return total + currentValue;
  }
  return total;
};

// /////////// 14 - Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

type callBackFunc = (total: number, currentValue: number) => number;

function findAverageArrayValue(array: Array<number> | Array<Array<number>>, callback: callBackFunc): number {
  let digits: Array<number> = ([] as Array<number>).concat(...array);
  return digits.reduce(callback, 0);
}

const findEvenAverage = (total: number, currentValue: number): number => {

  if(currentValue % 2 === 0) {
    return (total + currentValue / 2);
  } 
  return total;
};

const findOddAverage = (total: number, currentValue: number): number => {

  if(currentValue % 2 !== 0) {
    return (total + currentValue / 2);
  }
  return total;
};

// /////////// 15 - Транспонировать матрицу, сложить две матрицы.
let matrix = [[1,2],[3,4]];
let matrix1 = [[3,4]];
let matrix2 = [[],[3,4]];
let matrix3 = [[],[]];
let matrix4 = [[]];
let matrix5 = [];

function transposeMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  let transpMatrix: Array<Array<number>> = [];
  if (matrix.length > 0 && matrix[0].length > 0) {
    for(let i: number = 0; i < matrix[0].length; i++) {
      transpMatrix[i] = [];
      for(let j: number = 0; j < matrix.length; j++) {
        transpMatrix[i][j] = matrix[j][i];
      }
    }
  }else {
    throw new Error("Empty/wrong matrix");
  }

  return transpMatrix;
}

function sumMatrix(firstMatrix: Array<Array<number>>, secondMatrix: Array<Array<number>>): Array<Array<number>> {
  let transpMatrix: Array<Array<number>>= [];
  if ((firstMatrix.length > 0 && firstMatrix[0].length > 0) && (secondMatrix.length > 0 && secondMatrix[0].length > 0)) {
    for(let i: number = 0; i < firstMatrix.length; i++) {
      transpMatrix[i] = [];
      for(let j: number = 0; j < firstMatrix[0].length; j++) {
        transpMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
      }
    }  
  }else {
    throw new Error("Empty/wrong matrix");
  }

  return transpMatrix;
}

// /////////// 16 - Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function removeMatrixRowWithZero(array: Array<Array<number>>): Array<Array<number>> {
  if (array.length > 0 && array[0].length > 0) {
    for(let i: number = 0; i < array.length; i++) {
      for(let j: number = 0; j < array[0].length; j++) {
        if(array[i][j] === 0) {
          array.splice(i--, 1);
          break;
        }
      }
    }
  }else {
    throw new Error("Empty/wrong array");
  }
  return array;
}

function removeMatrixColWithZero(array: Array<Array<number>>): Array<Array<number>> | Array<number>{
  let position: number;
  if (array.length > 0 && array[0].length > 0) {
    for(let i: number = 0; i < array.length; i++) {
      for(let j: number = 0; j < array[0].length; j++) {
  
        if(array[i][j] === 0) {
          position = j;
          for(let i: number = 0; i < array.length; i++) {
            for(let j: number = 0; j < array[0].length; j++) {
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
  }else {
    throw new Error("Empty/wrong array");
  }
  
  return array;
}

// /////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы: над и под главной диагональю и на главной диагонали.

type callbackMatrix = (i: number, j: number) => boolean;

function sumMatrixElements(array: Array<Array<number>>, func: callbackMatrix): number {
  isEquilateralMatrix(array);

  let sum: number = 0;
  if (array.length > 0 && array[0].length > 0) {
  for(let i: number = 0; i < array.length; i++) {
    for(let j: number = 0; j < array[i].length; j++) {
      if(func(i, j)) {
        sum += array[i][j];
      }
    }
  }
}
  return sum;
}

// /////////// 18 - Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
// /////////// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.
interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

interface Fibonacci {
  [Symbol.iterator](): { next(): { value: number; done: boolean; }; }
}

let iterateFibonacci: Fibonacci = {
  [Symbol.iterator]() {
    let leftNumber: number = 0;
    let rightNumber: number = 1;
    return {
      next() {
        let sum: number = leftNumber + rightNumber;
        leftNumber = rightNumber;
        rightNumber = sum;
        return { value: sum, done: false };
      }
    };
  }
};

function* generateFibonacci(): IterableIterator<number> {
  let leftNumber: number = 0;
  let rightNumber: number = 1;

  for(; ;) {
    let sum: number = leftNumber + rightNumber;
    leftNumber = rightNumber;
    rightNumber = sum;
    yield sum;
  }
}

function countFibonacci(num: number): number {
  if((num <= 1) && (num >= 0)) {
    return 1;
  }

  return countFibonacci(num - 1) + countFibonacci(num - 2);
}

function countFibonacciMemo(num: number, memo: memoType): number {
  memo = memo || {};

  if(memo[num]) {
    return memo[num];
  }

  if((num <= 1) && (num >= 0)) {
    return 1;
  }

  return memo[num] = countFibonacciMemo(num - 1, memo) + countFibonacciMemo(num - 2, memo);
}

// /////////// 19 - Реализовать с помощью итератора и генератора светофор.
// /////////// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора. ///////////

function* generateTrafficLight(): IterableIterator<string> {
  for(; ;) {
    yield "red";
    yield "yellow";
    yield "green";
    yield "yellow";
  }
}

// /////////// 20 - Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). 
// /////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. 
// /////////// Написать свою реализацию для ~, двумя способами).

// ////////////////////////////////////является ли число отрицательным или положительным

//// first variant
function checkIsPositivNumber(num: number): boolean {
  return (num & (1 << 31)) !== (1 << 31);
}

//// second variant
function checkIsPositiveNumber(num: number): boolean {
  let binNumber: number = ~num.toString(2);
  let firstIndex: string = binNumber.toString().mySplit('')[0];
  return (firstIndex === '-');
}

// ////////////////////////////////////////Посчитать количество битов числа
//// first variant
function countBits(num: number): {one: number; zero: number} {
  let zeroBitCount: number = 0;
  let oneBitCount: number = 0;

  for(let i: number = 0; i < 32; i++) {
    if((num & (1 << i)) === (1 << i)) {
      oneBitCount++
    }
    zeroBitCount = 32 - oneBitCount;
  }
  return {one: oneBitCount, zero: zeroBitCount};
}

//// second variant
function countZeroOneBits(numberBin: string): {one: number; zero: number} {
  numberBin.toString().mySplit('');
  let zeroBitCount: number = 0;
  let oneBitCount: number = 0;

  for(let i: number = 0; i < numberBin.length; i++) {
    if(numberBin[i] === '1') {
      oneBitCount++;
    }
  }

  zeroBitCount = numberBin.length - oneBitCount;
  return {zero: zeroBitCount, one: oneBitCount};
}

// ///////////////////////////////////////////Написать свою реализацию для ~ тильда
function invertBinNumber(num: number): number {
  return -(num + 1);
}

function invertBinDigits(num: number): number {
  return (num ^ -1);
}
