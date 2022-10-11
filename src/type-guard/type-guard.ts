export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; cor: string };
type PersonOrAnimal = Person | Animal;
//
export class Student implements Person {
  //eslint-disable-next-line
  type: 'person' = 'person';
  constructor(public name: string) {}
}

export function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('this is an animal', obj.cor);
      return;
  }
}

showName(new Student('João'));
showName({ type: 'animal', cor: 'pink' });
