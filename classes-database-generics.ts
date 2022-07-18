interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

//! Member visibility in classes
//? private - only this class can see it and change it
//? protected - this class or nay oа it's descendants(subclasses) can see it and change it
//? public - free-for-all

type DBKeyType = string | number | symbol;  // as key in DB should be only string | number | symbol, and we need to use it as a base for 'K'

//* implement Interface in class
class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>; //* object of utility type Record<key, value>, and as initial object could be anything we need to define it as 'Record<K, T>'
  get(id: K): T {
    //* get the value of key == id
    return this.db[id];
  }
  set(id: K, value: T): void {
    //* add the key-value to db, key == id
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
console.log(myDB.get("foo")); // bar

// try to overwrite value in DB directly
// myDB.db["foo"] = "baz"; //! get ERROR - Property 'db' is protected and only accessible within class 'InMemoryDatabase' and its subclasses

//* EXTENDING CLASSES

//? create a persistable interface - we can read and write state from a string - устойчивый интерфейс
interface Persistable {
  saveToString(): string;
  restoreFromString(storeState: string): void;
}

class PersistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  } 
}

const myNewDB = new PersistentMemoryDB<number, string>();    // define the generic type here and this going to set generic template type of 'InMemoryDatabase' to number too
myNewDB.set("boo", 22);
console.log(myNewDB.get("boo"));  // 22
console.log(myNewDB.saveToString());  // {"boo": 22}

//* restore from the string
const saved = myNewDB.saveToString()  // kinds frozen the state of DB
const myNewDB2 = new PersistentMemoryDB<number, string>()
myNewDB2.restoreFromString(saved)
console.log(myNewDB2.get("boo"));  // 22

//* change the myNewDB after saving and restoring to myNewDB2
myNewDB.set("boo", 23);
console.log(myNewDB.get("boo"));  // 23
//* DB2 won't be updated 
console.log(myNewDB2.get("boo")); // 22

