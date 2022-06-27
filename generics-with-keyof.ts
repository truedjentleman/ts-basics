//* function takes an array of items (Data type) and whatever key (key type) from this array and return an array of 'DataType' dereferenced by 'KeyType'
//* 'KeyType' is one of the keys of 'DataType'

function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map(item => item[key])    //* to get the value by key in 'item'
}

const dogs = [
    {name: "Mimi", age: 12},  // one object has type DataType
    {name: "LG", age: 13}
]

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));


//* EVENT MAP

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {    //* only these events are valid, and data going into that event has to match the api we're putting  - quantity, number, time and user
    addToCart: BaseEvent & { quantity: number; productID: string; };  //* BaseEvent + additional parameters
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {      //* data - defined as 'EventMap' with whatever that 'Name' is (by key of EventMap)
    console.log([name, data]);
}

sendEvent("addToCart", {productID: 'foo', user: 'baz', quantity: 1, time: 10})
sendEvent("checkout", {user: 'guz', time: 20})