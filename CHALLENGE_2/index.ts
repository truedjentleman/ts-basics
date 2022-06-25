//* FOREACH
function myForEach <T> (items: T[], forEachFunction: (value: T) => void): void {
    items.reduce((acc, value) =>{
        forEachFunction(value);
        return undefined;
    }, undefined)
}

myForEach(['a' ,'b', 'c'], (v) => console.log(`forEach ${v}`));



//* FILTER, filterFunction - predicate, always return 'true' or 'false'
function myFilter<T>(items: T[], filterFunction: (value: T) => boolean): T[] {
    return items.reduce((acc, prevValue) => (filterFunction(prevValue) ? [...acc, prevValue] : acc), [] as T[]);   // to define initial array type as <T[]>, because it's defined as <T> by default
}

console.log(myFilter([1,2,3,4,5,6,7,8,9,10], (value) => value % 2 === 0));



//* MAP - takes array  of items with type <T> and return array of items with type <K>. 
//* There might be no actual type conversion in mapFunction, but anyway, returned values will have other type <K>
function myMap<T, K>(items: T[], mapFunction: (value: T) => K): K[] {
    return items.reduce((a, v) => [...a, mapFunction(v)], [] as K[])   // to define initial array type as <K[]>, because it's defined as <T> by default
}

console.log(myMap([1,2,3,4,5,6,7,8,9,10], (value) => (value * 10)));

