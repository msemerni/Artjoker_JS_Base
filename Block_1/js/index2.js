'use strict';

String.prototype.mySplit = function (separator) {
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

Array.prototype.myJoin = function (separator) {
    let string;
    if (separator !== undefined) {
        string = this.toString().replace(/,/g, separator);
    } else {
        string = this.toString();
    }
    return string;
}

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

function checkIsString(string) {
    if (typeof (string) !== 'string') {
        throw new Error("Not String !!");
    }
}

function checkIsNumber(number) {
    if (typeof (number) !== 'number') {
        throw new Error("Not Number !!");
    }
}

function checkIsArray(array) {
    if (typeof (array) !== 'object') {
        throw new Error("Not Array !!");
    }
}

/////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr, secondStr) {
    if ((typeof (firstStr) !== 'string') || (typeof (secondStr) !== 'string')) {
        throw new Error("Not String !!");
    }

    let firstString = firstStr.toLowerCase().replaceAll(' ', '').mySplit('').mySort().myJoin('');
    let secondString = secondStr.toLowerCase().replaceAll(' ', '').mySplit('').mySort().myJoin('');

    if (firstString === secondString) {
        return true;
    } else {
        return false;
    };
}

/////////// 2 - Нарисовать блок схему алгоритма анаграммы ///////////
//diagram.png

/////////// 3 - Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии. /////////// !!!!!!
function countDigits(num) {
    checkIsNumber(num);
    let digitsCounter = 0;

    for (let i = 0; num > 1; i++) {
        num = num / 10;
        digitsCounter++;
    };
    return digitsCounter;
}

function countDigitsRecursion(num) {
    checkIsNumber(num);

    if (Math.floor(num) == 0) {
        return 0;
    }
    return 1 + countDigitsRecursion((num / 10));
}

/////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////
function checkIsPalindrom(initialString) {
    checkIsString(initialString);
    let reversedString = '';

    for (let i = initialString.length - 1; i >= 0; i--) {
        reversedString += initialString[i];
    }
    initialString = initialString.toLowerCase().replaceAll(' ', '');
    reversedString = reversedString.toLowerCase().replaceAll(' ', '');

    if (initialString === reversedString) {
        return true;
    } else {
        return false;
    }
}

/////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении ///////////
//// first variant
function countUniqueWords(someString) {
    checkIsString(someString);

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

//// second variant
function countUniqueWords2(someString) {
    checkIsString(someString);
    let uniqueWords = new Set(someString.mySplit(' '));
    return uniqueWords.size;
}

/////////// 6 - Написать функцию которая вычисляет вхождение каждого слова в предложение ///////////
function countOccurrenceWord(someString) {
    checkIsString(someString);
    let words = {};
    let splittedsomeString = someString.mySplit(' ');
    splittedsomeString.map((word) => { words[word] = words[word] ? ++words[word] : 1 });
    return words;
}

/////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////

function Rectangle(width, height) {
    checkIsNumber(width);
    checkIsNumber(height);

    this.width = width;
    this.height = height;
    this.perimeter = (width + height) * 2;
    this.square = (width * height);
}

function Triangle(sideOne, sideTwo, sideThree) {
    checkIsNumber(sideOne);
    checkIsNumber(sideTwo);
    checkIsNumber(sideThree);
    let semiperimetr = (sideOne + sideTwo + sideThree) / 2;
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.perimeter = (sideOne + sideTwo + sideThree);
    this.square = Math.sqrt(semiperimetr * (semiperimetr - sideOne) * (semiperimetr - sideTwo) * (semiperimetr - sideThree));
}

function Circle(radius) {
    checkIsNumber(radius);
    this.radius = radius;
    this.perimeter = 2 * Math.PI * radius;
    this.square = (Math.PI * Math.pow(radius, 2));
}

// by Class:
class RectangleClass {
    constructor(width, height) {
        checkIsNumber(width);
        checkIsNumber(height);

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
    constructor(sideOne, sideTwo, sideThree) {
        checkIsNumber(sideOne);
        checkIsNumber(sideTwo);
        checkIsNumber(sideThree);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }

    perimeter() {
        return (this.sideOne + this.sideTwo + this.sideThree);
    }

    square() {
        let semiperimetr = (this.sideOne + this.sideTwo + this.sideThree) / 2;
        let square = Math.sqrt(semiperimetr * (semiperimetr - this.sideOne) * (semiperimetr - this.sideTwo) * (semiperimetr - this.sideThree));
        return square;
    }
}

class CircleClass {
    constructor(radius) {
        checkIsNumber(radius);
        this.radius = radius;
    }

    perimeter() {
        return (2 * Math.PI * this.radius);
    }

    square() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

/////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////

//// loop:
function calculateFactorial(num) {
    checkIsNumber(num);

    let result = 1;

    while (num) {
        result *= num--;
    }

    return result;
}

function countFactorial(num) {
    checkIsNumber(num);

    if (num === 0) {
        return 1;
    }
    else {
        return num * countFactorial(num - 1);
    }
}

function countFactorialMemo() {
    let memo = {};
    const func = (num) => {
        if (!memo[num]) {
            memo[num] = countFactorial(num);
        }
        return memo[num];
    }
    return func;
};

////////////////////////// 9 - Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные, реализовать с помощью рекурсии для одномерного массива.) ///////////

function countElementsSum(someArray, userFunc) {
    checkIsArray(someArray);
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

function getElementsSumRecursion(someArray, userFunc, ind){
    ind = ind || 0;
    let sum = null;
    sum += userFunc(someArray[ind]) ? someArray[ind] :  0;

    if (someArray.length <= ind) {
        return sum;
    }
    return sum + getElementsSumRecursion(someArray, userFunc, ++ind);
}


/////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////
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
        return acc;
    }, {});
};

//// second variant
function countNumbers(someArray, userFunc) {
    checkIsArray(someArray);
    return userFunc(someArray);
}

const countZeroNumbers = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            counter++;
        }
    }
    return counter;
}

const countNegativeNumbers = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }
    return counter;
}

const countPositiveNumbers = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++;
        }
    }
    return counter;
}

const countPrimeNumbers = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] ^ 0) {
            counter++;
        }
    }
    return counter;
}

/////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem) {
    checkIsString(numberTwoSystem);
    numberTwoSystem = numberTwoSystem.mySplit('');
    let numberInTenSystem = 0;

    let rank = 0;
    for (let i = numberTwoSystem.length - 1; i >= 0; i--) {
        numberInTenSystem += numberTwoSystem[i] * 2 ** rank;
        rank++;
    }
    return numberInTenSystem;
}

function convertFromTenToTwo(numberTenSystem) {
    checkIsNumber(numberTenSystem);

    let ostatok = 0;
    let numberTwoSystem = [];
    for (let i = 0; numberTenSystem >= 0; i++) {
        ostatok = numberTenSystem % 2;
        numberTenSystem = Math.floor(numberTenSystem / 2);
        numberTwoSystem.unshift(ostatok);

        if (numberTenSystem === 0) {
            return +numberTwoSystem.toString().replaceAll(',', '');
        }
    }
}

/////////// 12 - Пункты 9 и 10 выполнить для двумерных массивов. ///////////
function countElementsSumTwoDimension(someArray, userFunc) {
    let someOneDimension = [].concat(...someArray);
    return someOneDimension.reduce(userFunc, 0);
}

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
        return acc;
    }, {});
};

function countRangeSum(min, max, userFunc) {
    checkIsNumber(min);
    checkIsNumber(max);
    let someArray = [];

    for (let i = min; i <= max; i++) {
        someArray.push(i);
    }
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

/////////// 14 - Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).
function findAverageArrayValue(someArray, userFunc) {
    let digits = [].concat(...someArray);
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

/////////// 15 - Транспонировать матрицу, сложить две матрицы.

function transposeMatrix(matrix) {
    checkIsArray(matrix);
    let transpMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpMatrix[i][j] = matrix[j][i];
        }
    }
    return transpMatrix;
}

function sumMatrix(firstMatrix, secondMatrix) {
    checkIsArray(firstMatrix);
    checkIsArray(secondMatrix);

    let transpMatrix = [];

    for (let i = 0; i < firstMatrix.length; i++) {
        transpMatrix[i] = [];
        for (let j = 0; j < firstMatrix[0].length; j++) {
            transpMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
    }
    return transpMatrix;
}

/////////// 16 - Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
function removeMatrixRowWithZero(someArray) {

    for (let i = 0; i < someArray.length; i++) {
        for (let j = 0; j < someArray[0].length; j++) {
            if (someArray[i][j] === 0) {
                someArray.splice(i--, 1);
                break;
            }
        }
    }
}

function removeMatrixColWithZero(someArray) {
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
    return someArray;
}

/////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы: над и под главной диагональю и на главной диагонали.

///first variant
function countDiagonal(matrix, userFunc) {
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
                if (matrix[i][j] === 0) {
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
    return result;
}

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
    return result;
}

function countBottomMatrixPart(matrix) {
    checkIsArray(matrix);
    let result = {};
    let zero = 0;
    let sum = 0;
    let counter = 0;
    let average = 0;

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
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
    return result;
}

/////////// 18 - Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
/////////// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.

function countFibonacci(num) {
    checkIsNumber(num);
    if (num <= 1) {
        return 1;
    } else {
        return countFibonacci(num - 1) + countFibonacci(num - 2);
    }
};

function memoCountFibonacci(func) {
    const memo = {};
    return (num) => memo[num] || (memo[num] = func(num));
};

let memorizedFibonacci = memoCountFibonacci(countFibonacci);

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

/////////// 20 - Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). 
/////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. 
/////////// Написать свою реализацию для ~, двумя способами).

////////////////////////////////////является ли число отрицательным или положительным
//// first variant
function checkIsPositivNumber(number) {
    checkIsNumber(number);

    if ((number & (1 << 63)) !== (1 << 63)) {
        return true;
    } else {
        return false;
    }
}

//// second variant
function checkIsPositiveNumber(number) {
    checkIsNumber(number);

    let binNumber = ~number.toString(2);
    let firstIndex = binNumber.toString().mySplit('')[0];
    if (firstIndex === '-') {
        return true;
    } else {
        return false;
    }
}

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
    console.log({ zero: zeroBitCount, one: oneBitCount });
    return {one: oneBitCount, zero: zeroBitCount}
}

//// second variant
function countZeroOneBits(number) {
    checkIsString(number);

    number.toString().mySplit('');
    let zeroBitCount = 0;
    let oneBitCount = 0;

    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1') {
            oneBitCount++;
        }
    }
    zeroBitCount = number.length - oneBitCount;
    console.log({ zero: zeroBitCount, one: oneBitCount });
    return { zero: zeroBitCount, one: oneBitCount };
}

///////////////////////////////////////////Написать свою реализацию для ~ тильда

function invertBinNumber(number) {
    checkIsNumber(number);
    return -(number + 1);
}

function invertBinaryNumber(number) {
    return (-1 * (number + 1));
}

