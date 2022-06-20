import houses from "./houses";    // use TS file
// import houses from "./houses.json";    //  or use JSON file

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {    //  to extend existing Interface 
  id: number;
}

function findHouses(
  input: string | House[],
  customFilter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input; // check the type of input and assign to 'houses' variable
  return (customFilter ? houses.filter(customFilter) : houses).map((house) => ({   // check if 'customFilter' function is exist, then filter, if exist, and map through 'houses' array
    id: houses.indexOf(house),      // to get index of each 'house' from original array before filtering and mapping
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
