"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Akshata: 21
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
//dynamicallyy accessing 
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Akshata']); // undefined
const student = {
    name: "Akshata",
    GPA: 9.14,
    classes: [100, 200]
};
//console.log(student.test)
//keyof Assrtions: keyof creates a union type and union type is a specific string literal.creates union of name gpa classses...
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
