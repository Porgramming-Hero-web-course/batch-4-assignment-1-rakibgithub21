{

//problem eight  
const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => 
  keys.every(key => key in obj);


const person = { name: "Alice", age: 25, email: "alice@example.com" };


console.log(validateKeys(person, ["name", "age"]));
console.log(validateKeys(person, ["name", "email"] as (keyof typeof person)[]));
    



// use curly bracket for blocked scope error , like Cannot redeclare block-scoped variable
}