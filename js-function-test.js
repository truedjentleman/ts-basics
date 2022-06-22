const { getName, getNameTwo } = require("./functions");

console.log(
    getName({
        firstName: "a",
        lastName: "b"
    })
);

console.log(getNameTwo());   // first last - set by default
console.log(getNameTwo({firstName: "bb", lastName: "fff"})); // bb fff




//* CLOSURE
function createAdder(num) {      
    return (val) => num + val   // Closure itself
}

const creator = createAdder(5)
console.log(creator(10));   // 15

const creator2 = createAdder(20)
console.log(creator2(50))   // 70