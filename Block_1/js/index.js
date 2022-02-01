
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
let digitsCounter = 0;

    if (num == 0) {
        return 0;
    } else {
        num = num / 10;
        console.log(`Number of digits (recursion): ${digitsCounter}`);
        return 1 + countDigitsRecursion(num);

    };

}
countDigitsRecursion(123);
countDigitsRecursion(12345);


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

/////////// 5 - Написать функцию которая вычисляет подсчет уникальных слов в предложении///////////
