// Function Overloading

interface Coordinate {
    x: number;
    y: number;
}
// different types can be handled with few functions, but each function has it's own type of input data
function parseCoordinateFromObject (obj: Coordinate): Coordinate {
    return {
        ...obj
    }
}

function parseCoordinateFromNumber (x: number, y: number): Coordinate {
    return {
        x,
        y,
    }
}

//  Define few function representation with different types of arguments 
function parseCoordinate(obj: Coordinate): Coordinate;  // get object
function parseCoordinate(x: number, y: number): Coordinate;   // get numbers
function parseCoordinate(str: string): Coordinate;   // get string

 // resulting function which takes any(unknown) type of arguments, and second arg is optional as if it's object there is no second arg
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {      
    // starting coordinate
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };

    if (typeof arg1 === "string") {   // this type checking is performed at runtime, not at compile time when TypeScript checking types
        (arg1 as string).split(',').forEach(str => {   // split string and get two coordinates (x:value) and (y:value)
          const [key, value] = str.split(':')  // split each coordinate and destructure it in array - get 'key' and 'value
          coord[key as 'x' | 'y'] = parseInt(value, 10)   // set to 'coord' object properties values, with radix 10
        })
    } else if (typeof arg1 === 'object') {   // this type checking is performed at runtime, not at compile time when TypeScript checking types
        coord = {
            ...(arg1 as Coordinate)
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({x: 52, y: 35}));
console.log(parseCoordinate("x:12,y:22"));
