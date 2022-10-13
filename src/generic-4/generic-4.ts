type getKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: getKeyFn = (object, key) => object[key];

const animal = {
  color: 'Pink',
  vaccines: ['Vaccine 1', 'Vaccine 2'],
  age: 10,
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines, color, getKey(animal, 'age'));

// Module mode
export default 1;
