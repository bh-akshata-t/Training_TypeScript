"use strict";
//convert to more or less specific
let a1 = 'hello';
let b1 = a1; //Less specific
let c1 = a1; //more specific
let d = 'world';
let e = 'world';
//Assrtion for narrowing
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // to fix this Type 'string | number' is not assignable to type 'string'.Type 'number' is not assignable to type 'string
let nextVal = addOrConcat(2, 2, 'concat'); // ts sees no problem here but a string is returned
//Double casting or force casting and usage of unknown type
10;
// DOM Selection Types
const img = document.querySelector('img');
const myimg = document.getElementById('#img'); //Non Null Asserions
const nextImg = document.getElementById('#img');
img.src;
myimg.src;
