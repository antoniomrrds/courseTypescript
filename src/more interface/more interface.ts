// Declaration merging
interface Person {
  name: string;
}

interface Person {
  readonly lastname: string;
  readonly address: readonly string[];
  age?: number;
}

const person: Person = {
  name: 'Antony',
  lastname: 'marcos',
  address: ['Av. Brasil'],
  age: 30,
};

person.age = 31;
console.log(person);
