//! MAPPED TYPES
type MyFlexibleDogInfo = {
  name: string; // this field is required
} & Record<string, string>; // add flexible set of fields <string, string>

const dog: MyFlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
};

//* other way to define flexible set of fields with any desired type
type MyFlexibleDogInfo2 = {
  name: string; // this field is required
  [key: string]: string | number; // add flexible set of fields <string, string | number>
};

const dog2: MyFlexibleDogInfo2 = {
  name: "LG",
  breed: "Mutt",
  age: 22,
};

//! Mapped types implementation
interface IDogInfo {
  name: string;
  age: number;
}

//* Define 'OptionsFlags' which redefine types of all properties of given original 'Type'
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean | number;
};

type OptionsFlagsTwo<Type> = {
  [Property in keyof Type]: string;
};

type DogInfoOptions = OptionsFlags<IDogInfo>; //* 'OptionsFlags' will take all the properties from the type 'IDogInfo' and change their values to be a 'boolean | number.'
type DogInfoOptionsTwo = OptionsFlags<MyFlexibleDogInfo>; //* 'OptionsFlags' will take all the properties from the type 'MyFlexibleDogInfo2' and change their values to be a 'boolean | number'.
type DogInfoOptionsThree = OptionsFlagsTwo<MyFlexibleDogInfo2>; //* 'OptionsFlags' will take all the properties from the type 'MyFlexibleDogInfo2' and change their values to be a 'string'.


//! Practice
//* Create function which takes Object and apply listeners to each 'key' of this object for Change and Delete
//* each element of type 'Listeners'<TYpe> has type of function which takes the original 'Property' of 'Type',
//* gives it the function type (argument has the original type of property) and returns void
//? with TEMPLATE LITERALS, 'as' operator and 'Capitalize' utility type we can redefine 'property' name for each element
//? Capitalize<value> - capitalize the first character of 'value'. 
//* And we make Listeners optional (?), so we could add any of them depending on 'Type' or 'Interface' keys 
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  // 'T' is taken from type of argument Object
  throw "Needs to be implemented";
}

type CheckDogInfoListeners = Listeners<IDogInfo>;
/* 
type CheckDogInfoListeners = {
    onNameChange?: ((newValue: string) => void) | undefined;
    onAgeChange?: ((newValue: number) => void) | undefined;
} & {
    onNameDelete?: (() => void) | undefined;
    onAgeDelete?: (() => void) | undefined;
} 
*/

const lg: IDogInfo = {
  name: "LG",
  age: 13,
};

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
