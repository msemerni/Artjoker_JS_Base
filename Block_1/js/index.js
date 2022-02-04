'use strict'
/////////// 1 - Написать функцию которая проверяет являются две строки анаграммой или нет ///////////
function checkIsAnagram(firstStr, secondStr) {
    let firstString = firstStr.toLowerCase().replaceAll(' ', '').split('').sort().join('');
    let secondString = secondStr.toLowerCase().replaceAll(' ', '').split('').sort().join('');

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
    //// second variant

    if (Math.floor(num) == 0) {
        return 0;
    } 
        // num = num / 10;
    return 1 + countDigitsRecursion((num/10));

}
let res = countDigitsRecursion(123);
let res2 = countDigitsRecursion(12345);
console.log(`Number of digits (recursion): ${res}`);
console.log(`Number of digits (recursion): ${res2}`);

/////////// 4 - Реализовать функцию которая проверяет, является ли строка палиндромом ///////////

function checkIsPalindrom(someString) {

    let reversedString = '';
    //// first variant
    // for (let i = someString.length - 1; i >= 0; i--) {
    //     reversedString += someString[i];
    // }
    // someString = someString.toLowerCase().replaceAll(" ", "");
    // reversedString = reversedString.toLowerCase().replaceAll(" ", "");

    //// second variant
    reversedString = someString.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
    someString = someString.toLowerCase().replaceAll(' ', '');

    console.log(`Or: ${someString}`);
    console.log(`Re: ${reversedString}`);
    if (someString === reversedString) {
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

function countUniqueWords(someString) { 
    let uniqueWords = new Set(someString.split(' '));
    console.log(`Unique words count: ${uniqueWords.size}`);
    return uniqueWords.size;
  }

countUniqueWords('привет пока привет пока привет');

// function countUniqueWords2(someString) {
//     let uniqueWords = someString.split(' ').filter((item, i, ar) => ar.indexOf(item) === i);
//     console.log(`Unique words count1: ${uniqueWords.length}`);
//     return uniqueWords.length;
// }

// countUniqueWords2('привет пока привет пока привет');

/////////// 6 - Написать функцию которая вычисляет вхождение каждого слова в предложение ///////////

function countUniqueWords(someString) {
    let words = {};
    
    let splittedsomeString = someString.split(' ');
    
    splittedsomeString.map((word) => {
        words[word] = words[word] ? ++words[word] : 1;
    });
    return words;
  }
  countUniqueWords('привет пока привет пока привет hello');
  console.log(countUniqueWords('привет пока привет пока привет hello'));
  
/////////// 7 - Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов ///////////

function Rectangle (width, height) {
    this.width = width;
    this.height = height;
} 
Rectangle.prototype.perimeter = (width, height) => {
    console.log(`Rectangle perimeter(func): ${(width + height) * 2}`);
    return (width + height) * 2;
}

Rectangle.prototype.square = (width, height) => {
    console.log(`Rectangle square(func): ${(width * height)}`);
    return (width * height);
}

const rectangleOne = new Rectangle();
rectangleOne.perimeter(2, 3);
rectangleOne.square(2, 3);

function Triangle (sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
} 
Triangle.prototype.perimeter = (sideOne, sideTwo, sideThree) => {
    console.log(`Triangle perimeter(func): ${sideOne + sideTwo + sideThree}`);
    return (sideOne + sideTwo + sideThree);
}
Triangle.prototype.square = (sideOne, sideTwo, sideThree) => {
    let semiperimetr = (sideOne + sideTwo + sideThree) / 2;
    let square =  Math.sqrt(semiperimetr * (semiperimetr - sideOne) * (semiperimetr - sideTwo) * (semiperimetr - sideThree));

    console.log(`Triangle square(func): ${square}`);
    return square;
}

const triangleOne = new Triangle();
triangleOne.perimeter(2, 3, 4);
triangleOne.square(2, 3, 4);

function Circle (width, height) {
    this.width = width;
    this.height = height;
} 
Circle.prototype.perimeter = (radius) => {
    console.log(`Circle perimeter(func): ${2 * Math.PI * radius}`);
    return 2 * Math.PI * radius;
}

Circle.prototype.square = (radius) => {
    console.log(`Circle square(func): ${Math.PI * Math.pow(radius, 2)}`);
    return (Math.PI * Math.pow(radius, 2));
}

const circleOne = new Circle();
circleOne.perimeter(3);
circleOne.square(3);


//// by Class:
class RectangleClass {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }

    perimeter(width, height) {
        console.log(`Rectangle perimeter: ${(width + height) * 2}`);
        return (width + height) * 2;
    }

    square(width, height) {
        console.log(`Rectangle square: ${(width * height)}`);
        return (width * height);
    }

}

const firstRectangle = new RectangleClass();
firstRectangle.perimeter(2, 3);
firstRectangle.square(2, 3);

class TriangleClass {
    constructor (sideOne, sideTwo, sideThree){
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }

    perimeter(sideOne, sideTwo, sideThree) {
        console.log(`Triangle perimeter: ${sideOne + sideTwo + sideThree}`);
        return (sideOne + sideTwo + sideThree);
    }

    square(sideOne, sideTwo, sideThree) {
        let semiperimetr = (sideOne + sideTwo + sideThree) / 2;
        let square =  Math.sqrt(semiperimetr * (semiperimetr - sideOne) * (semiperimetr - sideTwo) * (semiperimetr - sideThree));
        console.log(`Triangle square: ${square}`);
        return square;
    }
}

const firstTriangle = new TriangleClass();
firstTriangle.perimeter(2, 3, 4);
firstTriangle.square(2, 3, 4);

class CircleClass {
    constructor (radius){
        this.radius = radius;
    }

    perimeter(radius) {
        console.log(`Circle perimeter: ${2 * Math.PI * radius}`);
        return (2 * Math.PI * radius);
    }

    square(radius) {
        console.log(`Triangle square: ${Math.PI * Math.pow(radius, 2)}`);
        return Math.PI * Math.pow(radius, 2);
    }
}

const firstCircle = new CircleClass();
firstCircle.perimeter(3);
firstCircle.square(3);

/////////// 8 - Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала. ///////////

function countFactorial(num){
    if (num === 0){
        return 1;
    }
    else {
        return num * countFactorial(num - 1);
    }
}

countFactorial(10);
console.log(countFactorial(10));

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


/////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////

let someNumbers = [-1, -2, 0, 0, 0, 1, 2, 3, 4];

function countZeroPosNegPrimeNumbers(myNumbers) {
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

/////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem) {
    ////first variant
    // let numTen = parseInt(numberTwoSystem, 2);
    // console.log(numTen);
    // return numTen;

    numberTwoSystem = numberTwoSystem.split('');
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

countZeroPosNegPrimeNumbersTwoDim(myDataTwoDimension);

///////////// 13 - Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). 
///////////// Нарисовать блок схему. Реализовать также с помощью рекурсии.///////////

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

/////////// 17 - Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.

/////////// 18 - Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи 
/////////// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.




/////////// 19 - Реализовать с помощью итератора и генератора светофор. 
/////////// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора. ///////////

function* generateTrafficLight() {
    for (; ;) {
        yield "red";
        yield "yellow";
        yield "green";
    }
}

let generatorLights = generateTrafficLight();
generatorLights.next();

console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());
console.log(generatorLights.next());


/////////// 20 - Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля. 
/////////// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. Написать свою реализацию для ~, двумя способами.

function isPositiveNumber (number) {

    //// first variant
    // let isPositive = Math.sign(number);
    // if (isPositive === 1) {
    //     return true;
    // }
    // if (isPositive === -1){
    //     return false;
    // }
    // console.log(isPositive);

////////
    let binNumber = ~number.toString(2);
    let firstIndex = binNumber.toString().split('')[0];
    if (firstIndex === '-') {
        console.log('Positive');
        return true;
    }else {
        console.log('Negative');
        return false;
    }
}
isPositiveNumber(5);
isPositiveNumber(-5);

function countZeroOneBits (number){
    number.toString().split('');
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

    console.log(zeroBitCount, oneBitCount); 
}

let binNumber = '00000000000000000000000000001010';

countZeroOneBits(binNumber);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














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
// //////////////////////////

