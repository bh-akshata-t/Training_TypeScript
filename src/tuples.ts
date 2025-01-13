//A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
let myTuple: [string,number,boolean]=['Akshata',42,true]

let mixed=['Akshata',1,false]
mixed =myTuple //but myTuple != mixed because mytuple requires strictly 3 elements but mixed may have fewer as it is of union types

myTuple[1]=42