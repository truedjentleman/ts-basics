
//! Utility types
//* https://www.typescriptlang.org/docs/handbook/utility-types.html

interface MyUser {
    name: string;
    id: number;
    email?: string;
    phone?: string;
}

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string
// }

//*  Partial - takes the type and makes everything in it optional
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Andrew",
    id: 2,
    email: "email@email.com"
}, {
    email: "dontemail@dontemail.com",
    phone: "334-44-55"
}));


 

//* Required - takes the type and makes everything in it obligatory (delete optional operator)
type RequiredMyUser = Required<MyUser>

const mergeRequired = (user: MyUser, overrides: RequiredMyUser): RequiredMyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(mergeRequired({
    name: "Andrew",
    id: 3,
    email: "email@email.com"
}, {
    name: "Bob",
    id: 4,
    email: "dontemail@dontemail.com",
    phone: "111-22-55"
}));




//* Pick - takes the type and list of keys and picks out from the type the specific fields we want
 type JustEmailAndName = Pick<MyUser, "email" | "name">




 //* Record - creates new object type whose property keys are 'Keys' from initial 'Type' or any other type, and whose property values are 'Type', 
 //* we can feed 'Record' with specified type of a keys we want to use
 const mapById = (users: MyUser[]): Record<number, MyUser> => {
    return users.reduce((acc, value) => {
        return {
            ...acc,
            [value.id]: value,
        }
    }, {});
 }

 console.log((mapById([
    {
        id: 5,
        name: "Mr. Foo"
    },
    {
        id: 6,
        name: "Mrs.Baz"
    }
 ])));

// * output
//  {
//     foo: { id: 5, name: 'Mr. Foo' },
//     baz: { id: 6, name: 'Mrs.Baz' }
//   }

interface CatInfo {
age: number;
breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
miffy: { age: 10, breed: "Persian" },
boris: { age: 5, breed: "Maine Coon" },
mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;  // const cats: Record<CatName, CatInfo>




//* Omit - opposite of the Pick, removes those properties we want to OMIT from newly created object type

// omitting "id" property in resulting object

type UserWithoutId = Omit<MyUser, "id">

//? type in 'Record' can be declared dynamically - every time the type of "id" changes the Record is going to change along with that
const mapByIdOmitted = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
    return users.reduce((acc, value) => {
        const {id, ...other} = value;  // decompose id and the rest from 'value'
        return {
            ...acc,
            [id]: other,
        }
    }, {});
 }

 console.log((mapByIdOmitted([
    {
        id: 7,
        name: "Mr. Foo"
    },
    {
        id: 8,
        name: "Mrs.Baz"
    }
 ])));
 
 // * output
 // { foo: { name: 'Mr. Foo' }, baz: { name: 'Mrs.Baz' } }