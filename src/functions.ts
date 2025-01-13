//Type Aliases: We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.A type alias is exactly that - a name for any type. The syntax for a type alias is:
type stringOrnumber=string|number

type stringOrNumberArray= (string|number)[]
type guitarist1 ={
    name?: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type userId=stringOrnumber 

//this will only work for any type in the typescript,,It won't work for Interface...