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

///////////////////////////////////////////////
const myData = [1, 2, 3, 4, 5];
const countAllElementsSum = (previousValue, currentValue) => previousValue + currentValue;
// const countAllElementsSum = (previousValue, currentValue) => if (currentValue % 2 === 0) previousValue + currentValue;


function countElementsSum (someArray, userFunc) {
    console.log(someArray.reduce(userFunc));
    return someArray.reduce(userFunc);
}

countElementsSum(myData, countAllElementsSum);

// expected output: 10
///////////////////////////////////////////////

// function countElementsSum (someArray, func) {
//     someArray.reduce(func)
// }

// countElementsSum(array1, countAllElementsSum);
// console.log(countElementsSum(array1, countAllElementsSum));

/////////// 10 - Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа) ///////////
  
/////////// 11 - Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел) ///////////

function convertFromTwoToTen(numberTwoSystem) {
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
