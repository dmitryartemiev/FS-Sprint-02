"use strict";

let sortEvenOdd = (x) => {
    function compare(a, b){
        return a%2 - b%2
    }
    function secondCompare(a,b ){
        return a - b;
    }
    (x.sort(secondCompare)).sort(compare);
}

const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]
