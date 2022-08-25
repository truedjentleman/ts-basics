class Doggy {
  public readonly name: string = ''
  constructor(name: string, age: number) {
    this.name = name
  }
}
const lgg = new Doggy('LGG', 13)

//? lg.name = 'Foo'  // ERROR

console.log(lgg.name)

//! OR we can define constructor and class properties as below, without 'this'

class Doggy2 {
  // add 'readonly' property to prevent re-assign class property value
  constructor(public readonly name: string, public age: number) {}
}

const lg = new Doggy2('LG', 13)

//? lg.name = 'Foo'  // ERROR

console.log(lg.name)

//! STATICS

//* for example we have a class 'Doglist' and want to create class instances only by calling 'DogList.instance' expression
//* and prohibit using 'new' to create new class - and therefore we can add its instances in 'doggies' private property   - DAO class (data access object)
//*  Static class members (properties and methods) are called without instantiating their class and cannot be called through(in) a class instance.
class DogList {
  private doggies: Doggy2[] = []

  static instance: DogList = new DogList()

  private constructor() {}

  //* public class method
  public addDog(dog: Doggy2) {
    this.doggies.push(dog)
  }

  //* static class method defined by instance
  static addDog2(dog: Doggy2) {
    DogList.instance.doggies.push(dog)
  }

  getDogs() {
    return this.doggies
  }
}

//?  const dl = new DogList()   // ERROR - Constructor of class 'DogList' is private and only accessible within the class declaration.

DogList.instance.addDog(lg) // create class instance and push to /doggies' array

DogList.addDog2(lg) // create class instance and push to /doggies' array

console.log(DogList.instance.getDogs()) // get 'doggies' value with

export {}
