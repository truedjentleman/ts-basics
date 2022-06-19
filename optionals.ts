
//* any parameters added after parameter with optional operator won't be compiled, unless they are optional too
const printIngredient = (quantity: string, ingredient: string, extra?: string, required?: string) => {     // A required parameter cannot follow an optional parameter.
    console.log(`${quantity} ${ingredient} ${extra ? extra : ""} ${required ? required : ""}`); 
}

printIngredient("1 cup of", "Flour")

printIngredient("1 cup of", "Sugar", "something more", "and something more")

interface User{
    id: string;
    info?: {
        email?: string
    }
}


//* OPTIONAL FIELDS
function getEmail (user: User): string {
    if(user.info) {
        return user.info.email!;    //* ! - exclamation mark is overriding ignoring TS type checking - it's not a good way of coding
    }
    return "";
}

// The better way to write the function above
function getEmailEasy(user: User ) {
    return user?.info?.email ?? ""   //  if it's null or undefined in the left-hand side then return empty string
}


//* OPTIONAL CALLBACK

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x,y]);
    callback?.();   // * this callback(method if it's on a class ) will be invoked only if it is exist 
}




