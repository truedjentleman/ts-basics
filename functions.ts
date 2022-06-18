function addNumbers (a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;   // function with default value

export const format = (title: string, param: string | number): string => `${title} ${param}`  //  UNION type of variable

export const printFormat = (title: string, param: string | number): void => {   // type of function which not returns anything at all
  console.log(format(title, param));  
}

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)   // type of Promise

export function introduce (salutation: string, ...names: string[] ): string {   // type of REST parameters
  return `${salutation} ${names.join(' ')}`
}

export function getName (user: {firstName: string; lastName: string; }): string {   // function return  will be compiled  as just concatenated strings
 return `${user.firstName} ${user.lastName}`
}

export function getNameTwo (user: {firstName: string; lastName: string; }): string {   //  function with 'optional chaining' operator will be compiled to .js in other way
  return `${user?.firstName ?? 'first'} ${user?.lastName ?? 'last'}`        //    'null coalescing operator'  helps to avoid undefined values after compilation - predefined values will be put
 }