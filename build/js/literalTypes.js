"use strict";
// literal types TypeScript Literal Types allow us to specify exact values as types of variables or types of return types of a function other than primitive data types.
let Name;
let userName;
userName = 'pranjali'; //This will throw an error if we try to  assign anothe name
//functions
const add = (a, b) => {
    return a + b;
};
const logmsg = (message) => {
    console.log(message);
};
logmsg('Helloo!!');
logmsg(add(2, 3));
logmsg('Helloo!!');
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logmsg(multiply(2, 2));
//Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logmsg(addAll(2, 3, 2));
logmsg(addAll(2, 3));
logmsg(sumAll(2, 3));
logmsg(sumAll(undefined, 3));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logmsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if(i>100) break
    }
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//Using never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen'); //to fix this erro: Function lacks ending return statement and return type does not include 'undefined
};
