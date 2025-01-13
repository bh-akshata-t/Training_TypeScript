"use strict";
let stringArr = ['one', 'two', 'Akshata'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Shruti';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
//Array Assignment
guitars = stringArr; //but stringArr != guitars
mixedData = guitars; //but guitars != mixedData
let test1 = [];
let bands = [];
bands.push('van Halen');
