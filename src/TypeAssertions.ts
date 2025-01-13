//Sometimes we will have information about the type of a value that TypeScript can’t know about.In this situation, we can use a type assertion to specify a more specific type:
type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a1: One='hello'
let b1=a1 as Two //Less specific
let c1=a1 as Three //more specific

let d = <One> 'world'
let e=<string | number> 'world'

//Assrtion for narrowing
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string= addOrConcat(2,2,'concat') as string // to fix this Type 'string | number' is not assignable to type 'string'.Type 'number' is not assignable to type 'string
let nextVal: number= addOrConcat(2,2,'concat') as number // ts sees no problem here but a string is returned

//Double casting or force casting and usage of unknown type
(10 as unknown) as string

// DOM Selection Types

const img=document.querySelector('img')!
const myimg=document.getElementById('#img')!  as HTMLImageElement       //Non Null Asserions
const nextImg=<HTMLImageElement>document.getElementById('#img')

img.src
myimg.src