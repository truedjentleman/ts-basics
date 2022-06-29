//* 'readonly' operator makes type immutable

interface Cat {
  readonly name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>; //* to create readonly type or make existing type/interface readonly - use keyword Readonly<>

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
//!  usul.name = "Pete"  //Cannot assign to 'name' because it is a read-only property.

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10,20,30)
//!  c1[0] = 50   //Cannot assign to '0' because it is a read-only property.


//* we can make the array assigned to const really const - immutable

const realConst = [1, 2, 3] as const;
//! realConst[50] = 50;   // Cannot assign to '0' because it is a read-only property.
