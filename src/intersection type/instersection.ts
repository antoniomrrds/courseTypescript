type hasName = { name: string };
type hasLastName = { lastname: string };
type hasAge = { age: number };
type Person = hasName & hasLastName & hasAge;

const person: Person = {
  age: 30,
  name: 'Antony',
  lastname: 'marcos',
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersection = AB & AC & AD;

console.log(person);

// Module mode

export { person };
