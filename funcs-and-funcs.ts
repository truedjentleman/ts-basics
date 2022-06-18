export function printToFile(text: string, callback: (n: number) => void): void {   //  to define type of callback we can use ' () => void' and can define arguments inside callback
    console.log(text);
    callback(10)
}

// but we can create custom type of callback
export type MutationFunction = (v: number) => number

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3], (v) => v * 10 ))


const myNewMutationFunction: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1,10,30], myNewMutationFunction))


// CLOSURES TYPE EXAMPLE
export type AdderFunction = (val: number) => number

export function createAdder(num: number): AdderFunction {     // CLOSURE
    return (val: number) => num + val
}

const addOne = createAdder(1);    
console.log(addOne(55));

