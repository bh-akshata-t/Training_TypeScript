//Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime.
enum Grade{
    U=1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)