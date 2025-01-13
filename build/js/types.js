"use strict";
let myName = "Akshata"; // typescript inference ,if we hover on this it will show the type so this is shoed impliciltly,exxplicitly means we have to strongly state the type
let age;
let isLoggedIn;
let album;
let postId; //This is called the union types
myName = 'shruti';
age = 21;
isLoggedIn = true;
album = 2003;
//functions
const sum = (a, b) => {
    return a + b;
};
let re = /\w+/g; //typescript telles what exactly type you should use
