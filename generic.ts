//! EX .1
//* 'useState'-like function with generic type <T> (call it whatever we want), and the type of 'initial' value will be defined when the function is called and after call other type can't be assigned

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => initial,
    (v: T) => {
      initial = v;
    },
  ];
}

const [state1getter, state1setter] = simpleState(10); // initial: number
const [state2getter, state2setter] = simpleState<string | null>(null); // initial: sting | null - we override <T> generic type for this particular state

console.log(state1getter());
state1setter(62);
console.log(state1getter());

console.log(state2getter());
state2setter("str");
console.log(state2getter());

//! Ex. 2

// create Interface for 'ranks' variable and it has generic type of <RankItem>
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    // array of initial items with 'rank' properties
    item,
    rank: rank(item), // what is the base for ranking
  }));

  ranks.sort((a, b) => a.rank - b.rank); // sort items by rank from lesser to greater

  return ranks.map((rank) => rank.item); // map through sorted array and return result of map
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 5,
  },
  {
    name: "Dubasaur",
    hp: 10,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp); // take {hp} from item object to rank by it
console.log(ranks);
/* 
[
  { name: 'Megasaur', hp: 5 },
  { name: 'Dubasaur', hp: 10 },
  { name: 'Bulbasaur', hp: 20 }
]
 */
