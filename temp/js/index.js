'use strict';


let str = 'а роза, упала на лапу Азора';
let str2 = 'а роза, упала на лапу Азора';

//////////////////////////////////
/////// mySplit
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
    console.log(newArr);
    return newArr;
}

str.mySplit(' ');
str2.mySplit('');

//////////////////////////////////
/////// myJoin
Array.prototype.myJoin = function (separator) {
    let string;
    if (separator !== undefined) {
        string = this.toString().replace(/,/g, separator);
    } else {
        string = this.toString();
    }
    return string;
}
//////////////////////////////////
/////// mySort
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

//////////////////////////////////
//// возможно неправильно работает. надо проверить
/////// myReverse
Array.prototype.myReverse = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = this.length - 1; j > i; j--) {
            if (this[j] > this[j - 1]) {
                let temp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = temp
            }
        }
    }
    return this;
}

let str3 = ['роза', 'упала', 'на', 'Азора'];
console.log(str3);
let sss = str3.myJoin();
console.log(sss);

//////////////////////////////////
/////// myReplaceAll // НЕ ДОДЕЛАНО
// String.prototype.myReplaceAll = function (initialChar, charToChange) {
//     let newStr = '';
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === initialChar) {
//             // let dd = this[i];
//             // this[i] = charToChange;
//             console.log(newStr);
//             // newStr += dd;

//         }

//         newStr += this[i];
//         // console.log(newStr);



//     }
//     console.log(this);
//     return this;
// }


let str6 = 'упала на лапу';
let str7 = "упала на лапу";

str6 = str6.replaceAll("у", "Ц");
console.log(str6);

str7 = str7.myReplaceAll("у", "Q")


let str5 = "упала на лапу";
// console.log(str5);
// str6.myReplaceAll('а', 'Й');
// console.log(str5);
// console.log(str6);



//////////////////////////////////
//// a = a + b;
//// b = a - b;
//// a = a - b;
//////////////////////////////////



// String.prototype.mySplit = function (separator){
//     let newArr = [];
//     let word = '';
//     for (let i = 0; i < this.length; i++) {

//         if(this[i] !== separator ) {
//             word += this[i];
//         }

//         if(this[i] === separator) {
//            newArr.push(word);
//            word = '';
//             // console.log(word); 
//         }
//     }
//     console.log(newArr);

//     return newArr;
// }

// str.mySplit(' ');


// console.log(str2.split(','));

