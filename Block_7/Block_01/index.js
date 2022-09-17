function isEquilateralMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if ((matrix[i].length !== matrix.length)) {
            return false;
        }
    }
    return true;
}
String.prototype.myReplaceAll = function (initialChar, newChar) {
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === initialChar) {
            let charReplaced = this[i];
            charReplaced = newChar;
            newStr += charReplaced;
        }
        else {
            newStr += this[i];
        }
    }
    return newStr;
};
String.prototype.mySplit = function (separator) {
    let newArr = [];
    let word = '';
    for (let i = 0; i < this.length; i++) {
        if (separator === '') {
            newArr.push(this[i]);
        }
        else {
            if (this[i] !== separator) {
                word += this[i];
            }
            if (this[i] === separator || i === this.length - 1) {
                newArr.push(word);
                word = '';
            }
        }
    }
    return newArr;
};
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
};
Array.prototype.myJoin = function (separator) {
    return this.toString().myReplaceAll(',', separator);
};
// /////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr, secondStr) {
    let firstString = firstStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
    let secondString = secondStr.toLowerCase().myReplaceAll(' ', '').mySplit('').mySort().myJoin('');
    return (firstString === secondString);
}
// /////////// 3 - Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии. ///////////
function countDigits(num) {
    let digitsCounter = 0;
    for (let i = 0; num > 1; i++) {
        num = num / 10;
        digitsCounter++;
    }
    return digitsCounter;
}
function countDigitsRecursion(num) {
    if (Math.floor(num) === 0) {
        return 0;
    }
    return 1 + countDigitsRecursion((num / 10));
}
// /////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////
function checkIsPalindrom(initialString) {
    let reversedString = '';
    for (let i = initialString.length - 1; i >= 0; i--) {
        reversedString += initialString[i];
    }
    initialString = initialString.toLowerCase().myReplaceAll(' ', '');
    reversedString = reversedString.toLowerCase().myReplaceAll(' ', '');
    return (initialString === reversedString);
}
// /////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении ///////////
function countUniqueWords(someString) {
    let allWords = someString.mySplit(' ');
    let counter = 0;
    let result = [];
    for (let word of allWords) {
        if (!result.includes(word)) {
            result.push(word);
            counter++;
        }
    }
    return counter;
}
function countOccurrenceWord(someStr) {
    let someString = someStr.split(" ");
    let words = {};
    for (let i = 0; i < someString.length; i++) {
        if (words[someString[i]]) {
            words[someString[i]]++;
        }
        else {
            words[someString[i]] = 1;
        }
    }
    return words;
}
// /////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////
function Rectangle(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("Number <= 0");
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
    if (leftSide <= 0 || rightSide <= 0 || baseSide <= 0) {
        throw new Error("Number <= 0");
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
    if (radius <= 0) {
        throw new Error("Radius <= 0");
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
        if (width <= 0 || height <= 0) {
            throw new Error("Number <= 0");
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
        if (leftSide <= 0 || rightSide <= 0 || baseSide <= 0) {
            throw new Error("Number <= 0");
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
        if (radius <= 0) {
            throw new Error("Radius <= 0");
        }
        this.radius = radius;
    }
    perimeter() {
        return (2 * Math.PI * this.radius);
    }
    ;
    square() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    ;
}
// /////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////
function calculateFactorial(num) {
    if (num < 0) {
        throw new Error("Number < 0");
    }
    let result = 1;
    while (num > 0) {
        result *= num--;
    }
    return result;
}
function countFactorial(num) {
    if (num < 0) {
        throw new Error("Number < 0");
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * countFactorial(num - 1);
}
const calculateFactorialMemo = (function () {
    let memo = {};
    return function calculateFactorial(num) {
        if (num < 0) {
            throw new Error("Number < 0");
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        if (memo[num] === undefined) {
            memo[num] = calculateFactorial(num - 1);
        }
        return num * memo[num];
    };
})();
function countElementSum(array, func) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            sum += array[i];
        }
    }
    return sum;
}
function getElementsSumRecursion(array, func, index) {
    index = index || 0;
    let sum = 0;
    sum += func(array[index]) ? array[index] : 0;
    if (array.length <= index) {
        return sum;
    }
    return sum + getElementsSumRecursion(array, func, ++index);
}
// /////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////
function countArrayElements(array, func) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            counter++;
        }
    }
    return counter;
}
// /////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////
function convertFromTwoToTen(numberTwoSystem) {
    let numberInTwoSystem = numberTwoSystem.mySplit('');
    let numberInTenSystem = 0;
    let rank = 0;
    for (let i = numberInTwoSystem.length - 1; i >= 0; i--) {
        numberInTenSystem += +numberInTwoSystem[i] * 2 ** rank;
        rank++;
    }
    return numberInTenSystem;
}
function convertFromTenToTwo(numberTenSystem) {
    let remainder = 0;
    let numberTwoSystem = [];
    let result = 0;
    for (let i = 0; numberTenSystem >= 0; i++) {
        remainder = numberTenSystem % 2;
        numberTenSystem = Math.floor(numberTenSystem / 2);
        numberTwoSystem.unshift(remainder);
        if (numberTenSystem === 0) {
            result = +numberTwoSystem.toString().myReplaceAll(',', '');
        }
    }
    return result;
}
// /////////// 12 - Пункты 9 и 10 выполнить для двумерных массивов. ///////////
function countElementsSum(array, func) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (func(array[i][j])) {
                sum += array[i][j];
            }
        }
    }
    return sum;
}
function countArrayElement(array, func) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (func(array[i][j])) {
                counter++;
            }
        }
    }
    return counter;
}
function countRangeSumRecursion(min, max, func) {
    if (min >= max) {
        throw new Error("min >= max");
    }
    let sum = 0;
    if (func(min)) {
        sum += min;
    }
    if (++min <= max) {
        sum += countRangeSumRecursion(min, max, func);
    }
    return sum;
}
function countRangeSumReduce(min, max, func) {
    if (min >= max) {
        throw new Error("min >= max");
    }
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array.reduce(func, 0);
}
const sumAll = (total, currentValue) => total + currentValue;
const sumElementsDivideThree = (total, currentValue) => {
    if (currentValue % 3 === 0) {
        return total + currentValue;
    }
    return total;
};
const sumPositiveElements = (total, currentValue) => {
    if (currentValue > 0) {
        return total + currentValue;
    }
    return total;
};
function findAverageArrayValue(array, callback) {
    let digits = [].concat(...array);
    return digits.reduce(callback, 0);
}
const findEvenAverage = (total, currentValue) => {
    if (currentValue % 2 === 0) {
        return (total + currentValue / 2);
    }
    return total;
};
const findOddAverage = (total, currentValue) => {
    if (currentValue % 2 !== 0) {
        return (total + currentValue / 2);
    }
    return total;
};
// /////////// 15 - Транспонировать матрицу, сложить две матрицы.
let matrix = [[1, 2], [3, 4]];
let matrix1 = [[3, 4]];
let matrix2 = [[], [3, 4]];
let matrix3 = [[], []];
let matrix4 = [[]];
let matrix5 = [];
function transposeMatrix(matrix) {
    let transpMatrix = [];
    if (matrix.length > 0 && matrix[0].length > 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            transpMatrix[i] = [];
            for (let j = 0; j < matrix.length; j++) {
                transpMatrix[i][j] = matrix[j][i];
            }
        }
    }
    else {
        throw new Error("Empty/wrong matrix");
    }
    return transpMatrix;
}
function sumMatrix(firstMatrix, secondMatrix) {
    let transpMatrix = [];
    if ((firstMatrix.length > 0 && firstMatrix[0].length > 0) && (secondMatrix.length > 0 && secondMatrix[0].length > 0)) {
        for (let i = 0; i < firstMatrix.length; i++) {
            transpMatrix[i] = [];
            for (let j = 0; j < firstMatrix[0].length; j++) {
                transpMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
    }
    else {
        throw new Error("Empty/wrong matrix");
    }
    return transpMatrix;
}
// /////////// 16 - Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
function removeMatrixRowWithZero(array) {
    if (array.length > 0 && array[0].length > 0) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] === 0) {
                    array.splice(i--, 1);
                    break;
                }
            }
        }
    }
    else {
        throw new Error("Empty/wrong array");
    }
    return array;
}
function removeMatrixColWithZero(array) {
    let position;
    if (array.length > 0 && array[0].length > 0) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] === 0) {
                    position = j;
                    for (let i = 0; i < array.length; i++) {
                        for (let j = 0; j < array[0].length; j++) {
                            array[i].splice(position, 1);
                            break;
                        }
                    }
                }
            }
            if (array[0].length === 0) {
                array = [];
                break;
            }
            ;
        }
    }
    else {
        throw new Error("Empty/wrong array");
    }
    return array;
}
function sumMatrixElements(array, func) {
    isEquilateralMatrix(array);
    let sum = 0;
    if (array.length > 0 && array[0].length > 0) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (func(i, j)) {
                    sum += array[i][j];
                }
            }
        }
    }
    return sum;
}
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
function* generateFibonacci() {
    let leftNumber = 0;
    let rightNumber = 1;
    for (;;) {
        let sum = leftNumber + rightNumber;
        leftNumber = rightNumber;
        rightNumber = sum;
        yield sum;
    }
}
function countFibonacci(num) {
    if ((num <= 1) && (num >= 0)) {
        return 1;
    }
    return countFibonacci(num - 1) + countFibonacci(num - 2);
}
function countFibonacciMemo(num, memo) {
    memo = memo || {};
    if (memo[num]) {
        return memo[num];
    }
    if ((num <= 1) && (num >= 0)) {
        return 1;
    }
    return memo[num] = countFibonacciMemo(num - 1, memo) + countFibonacciMemo(num - 2, memo);
}
// /////////// 19 - Реализовать с помощью итератора и генератора светофор.
// /////////// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора. ///////////
function* generateTrafficLight() {
    for (;;) {
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
function checkIsPositivNumber(num) {
    return (num & (1 << 31)) !== (1 << 31);
}
//// second variant
function checkIsPositiveNumber(num) {
    let binNumber = ~num.toString(2);
    let firstIndex = binNumber.toString().mySplit('')[0];
    return (firstIndex === '-');
}
// ////////////////////////////////////////Посчитать количество битов числа
//// first variant
function countBits(num) {
    let zeroBitCount = 0;
    let oneBitCount = 0;
    for (let i = 0; i < 32; i++) {
        if ((num & (1 << i)) === (1 << i)) {
            oneBitCount++;
        }
        zeroBitCount = 32 - oneBitCount;
    }
    return { one: oneBitCount, zero: zeroBitCount };
}
//// second variant
function countZeroOneBits(numberBin) {
    numberBin.toString().mySplit('');
    let zeroBitCount = 0;
    let oneBitCount = 0;
    for (let i = 0; i < numberBin.length; i++) {
        if (numberBin[i] === '1') {
            oneBitCount++;
        }
    }
    zeroBitCount = numberBin.length - oneBitCount;
    return { zero: zeroBitCount, one: oneBitCount };
}
// ///////////////////////////////////////////Написать свою реализацию для ~ тильда
function invertBinNumber(num) {
    return -(num + 1);
}
function invertBinDigits(num) {
    return (num ^ -1);
}
