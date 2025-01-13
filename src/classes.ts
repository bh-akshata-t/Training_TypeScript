class coder{
    //name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string
    constructor(
        public readonly name:string,  //visibility modifiers
        public music: string,
        private age: number,
        protected lang: string='TypeScript')  //The private modifier limits the visibility to the same class only.The public modifier allows class properties and methods to be accessible from all locations.The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses.
        {    
        this.name=name
        this.music=music
        this.age=age
        this.lang=lang
    }

    public getAge(){
        return `Hello,I'm ${this.age}`
    }
}

const Akshata=new coder('Akshata','Thorkar',21)
console.log(Akshata.getAge())
// console.log(Akshata.age)
// console.log(Akshata.lang)

class webdev extends coder{
    constructor(
        public computer: string,
        name: string,  //visibility modifiers
        music: string,
        age: number,
    ){
        super(name,music,age)
        this.computer=computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const shruti=new webdev('mac','Shruti','lofi',21)
console.log(shruti.getLang())
//console.log(shruti.lang)

//Implementing interface to the class
interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class guitarist2 implements Musician {
    name: string
    instrument: string

    constructor(name: string,instrument: string){
        this.name=name
        this.instrument=instrument
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const page=new guitarist2('Jimmy','guitar')
console.log(page.play('strums'))
//////////////////////////////////////////////
//Static class members:

class peeps{
    static count: number=0

    static getCount(): number{
        return peeps.count
    }

    public id: number
    constructor(public name: string){
        this.name=name
        this.id=++peeps.count
    }
}

const akshata=new peeps('akshata')
const sanket=new peeps('sanket')
const radha=new peeps('radha')

console.log(sanket.id)
console.log(peeps.count)
//////////////////////////////////////

//getters and setters

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
MyBands.data = ['Van Halen'] // must be string data