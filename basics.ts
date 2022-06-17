let  hasLoggedIn: boolean = true
let userName: string = "Andrew"

userName += " James"

console.log(userName);

let myNumber: number = 10

let myRegex: RegExp = /foo/

const names: string[] = userName.split(" ")

const myValue: Array <number> = [1, 2, 3]

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Andrew",
    last: "Burlutski",
}

const ids: Record <number, string> = {   // Record type for creating Maps with undefined elements number
    10: "a",
    20: "b"
}

ids[30] = "c"  

// check the types in conditions
if(ids[30] === 'D') {
    
}


//loops

for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

[1,2,3,"b"].forEach(item => console.log(item))

const out: number[] = [4,5,6].map(item => item * 10)
const out2: string[] = [4,5,6].map(item => `${item * 10}`)


let a = [[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,'b'], [0,1,2,'c',4,5,6,7,8,9], [0,1,2,3,4,5,'d',7,8,9], [0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9], [0,'e',2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,'g',8,9], [0,1,2,3,4,5,6,7,8,9]]
for (let i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);   //  get 'diagonal' elements of 2-dimension array