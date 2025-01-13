let bands1: string[] = []
bands1.push('van Halen 2')
//Object : 
let myObj: object
myObj=[]
console.log(typeof myObj)
myObj = bands1
myObj = {}

const exampleObj = {
    prop1: 'Akshata',
    prop2: true,
}

exampleObj.prop1 = 'John'
interface guitarist{
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: guitarist={
    name: 'ED',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: guitarist={
    //name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

//evh=jp

const greetGuitarist = (Guitarist: guitarist)=>{
    //narrowing with properties
    if (Guitarist.name){
        return `Hello ${Guitarist.name.toUpperCase()}!`
    }
    return'Hello!'
}

console.log(greetGuitarist(jp))

