//Index Signature : these are used when we have to create the object but we dont the object keys
interface TransactionObj {
    readonly [index: string]: number      //This will allow other properties to be added to an object that is created with this interface
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {     //here pizza book and job are required fields we cant miss out that but we can add another different property to it
    Pizza: -10,
    Books: -5,
    Job: 50,
    Akshata: 21
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

//dynamicallyy accessing 
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

//todaysTransactions.Pizza = 40

console.log(todaysTransactions['Akshata']) // undefined

////////////////////////////////////////////////////////////////////////////////////

interface Student {
   // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Akshata",
    GPA: 9.14,
    classes: [100, 200]
}

//console.log(student.test)

//keyof Assrtions: keyof creates a union type and union type is a specific string literal.creates union of name gpa classses...
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')

//utilty Types: 


// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>  //if we have to pprovide the literal type then we use utility type

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}