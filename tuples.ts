
//* TUPLE Example
type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate (c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0], 
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(add3DCoordinate([0,100,20], [ 10,20,30]));



//* 'useState' is tuple too
//*  function returns an accessor (getter) and setter that'll take the 'string' and return 'void'

function simpleStringState(initial: string): [() => string, (v: string) => void] {     
    // return [                
    //     () => initial,         //  CLOSURE 1
    //     (v: string) => {       //  CLOSURE 2
    //         initial = v;
    //     }
    // ]

    let str: string = initial;       // version with intermediate variable 'str'
    return [
        () => str,          //  CLOSURE 1
        (v: string) => {    //  CLOSURE 2
            str = v;
        }
    ]
}

const [str1getter, srt1setter] = simpleStringState("hello")    // STATE 1
console.log(str1getter());
srt1setter("goodbye");
console.log(str1getter());
 
const [str2getter, srt2setter] = simpleStringState("milk")  // STATE 2
console.log(str2getter());
srt2setter("bread");
console.log(str2getter());

