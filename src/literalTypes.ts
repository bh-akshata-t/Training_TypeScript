// literal types TypeScript Literal Types allow us to specify exact values as types of variables or types of return types of a function other than primitive data types.
let Name: 'Akshata'
let userName: 'Akshata' | 'shruti' | 'pranjali'
userName='pranjali'  //This will throw an error if we try to  assign anothe name

//functions
const add=(a: number,b: number): number=>{
    return a+b
}
const logmsg=(message: any): void=>{
    console.log(message)
}
logmsg('Helloo!!')
logmsg(add(2,3))
logmsg('Helloo!!')

let subtract = function (c: number, d: number): number {
    return c - d
}
type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logmsg(multiply(2, 2))
//Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}
//Default param value
const sumAll = (a: number=10, b: number, c: number=2): number => {
    return a + b + c
}
logmsg(addAll(2,3,2))
logmsg(addAll(2,3))
logmsg(sumAll(2,3))
logmsg(sumAll(undefined,3))

//rest parameters
const total=(a: number, ...nums: number[]): number => {  //rest should come in the last
    return a + nums.reduce((prev,curr)=> prev+curr)
}
logmsg(total(10,2,3))

const createError=(errMsg: string): never =>{
    throw new Error(errMsg)
}

const infinite=()=>{  //never type if infinite loop is there
    let i : number=1
    while (true){
        i++
        // if(i>100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}
//Using never type

const numberOrString=(value: number | string): string =>{
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    if (isNumber(value)) return 'number'
    return createError('This should never happen')  //to fix this erro: Function lacks ending return statement and return type does not include 'undefined
}
