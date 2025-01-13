"use strict";
class coder {
    constructor(name, //visibility modifiers
    music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello,I'm ${this.age}`;
    }
}
const Akshata = new coder('Akshata', 'Thorkar', 21);
console.log(Akshata.getAge());
// console.log(Akshata.age)
// console.log(Akshata.lang)
class webdev extends coder {
    constructor(computer, name, //visibility modifiers
    music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const shruti = new webdev('mac', 'Shruti', 'lofi', 21);
console.log(shruti.getLang());
class guitarist2 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new guitarist2('Jimmy', 'guitar');
console.log(page.play('strums'));
//////////////////////////////////////////////
//Static class members:
class peeps {
    static getCount() {
        return peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++peeps.count;
    }
}
peeps.count = 0;
const akshata = new peeps('akshata');
const sanket = new peeps('sanket');
const radha = new peeps('radha');
console.log(sanket.id);
console.log(peeps.count);
//////////////////////////////////////
//getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen']; // must be string data
