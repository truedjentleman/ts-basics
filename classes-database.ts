export {}

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

//! Member visibility in classes
//? private - only this class can see it and change it
//? protected - this class or nay oа it's descendants(subclasses) can see it and change it
//? public - free-for-all

//* implement Interface in class
class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {}; //* object of utility type Record<key, value>
  get(id: string): string {
    //* get the value of key == id
    return this.db[id];
  }
  set(id: string, value: string): void {
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

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myNewDB = new PersistentMemoryDB();
myNewDB.set("boo", "gary");
console.log(myNewDB.get("boo"));  // gary
console.log(myNewDB.saveToString());  // {"boo":"gary"}

//* restore from the string
const saved = myNewDB.saveToString()  // kinds frozen the state of DB
const myNewDB2 = new PersistentMemoryDB
myNewDB2.restoreFromString(saved)
console.log(myNewDB2.get("boo"));  // gary

//* change the myNewDB after saving and restoring to myNewDB2
myNewDB.set("boo", "db1-updated");
console.log(myNewDB.get("boo"));  // db1-updated
//* DB2 won't be updated 
console.log(myNewDB2.get("boo")); // gary

