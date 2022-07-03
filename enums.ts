//! ENUMS

const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

//* we can use enum keys as a keys for other variables - put the key in []
const englishLoadingState = {
    [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.beforeLoad;

console.log(isLoading(LoadingState.loaded));

console.log(englishLoadingState);  // { beforeLoad: 'Before Load' }


//! Literal types

//* Numeric literals - only  1,2,3 can be valid arguments for fucntion
function rollDice(dice: 1 | 2 | 3): number {  
    let pip = 0
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1
    }
    return pip
}

console.log(rollDice(3));   // with '4' for example we get this error: Argument of type '4' is not assignable to parameter of type '1 | 2 | 3'

//* String literals ( with overloads) - to set and match different valid values for arguments  
function sendEvent(name: "addToCart", data: { productId: number}): void;
function sendEvent(name: "checkout", data:{ cartCount: number}): void;
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart", { cartCount: 12155 })  // is not valid as "addToCart" can't take { cartCount: number} as a second arguments

sendEvent("addToCart", { productId: 12155 })   // VALID

