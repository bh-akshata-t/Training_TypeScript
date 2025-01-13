"use strict";
let bands1 = [];
bands1.push('van Halen 2');
//Object : 
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands1;
myObj = {};
const exampleObj = {
    prop1: 'Akshata',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'ED',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    //name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
//evh=jp
const greetGuitarist = (Guitarist) => {
    //narrowing with properties
    if (Guitarist.name) {
        return `Hello ${Guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
