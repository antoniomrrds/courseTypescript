const x = 10; // eslint-disable-line
// x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Antony' as const,
  lastname: 'marcos',
};

export const choiceColor = (cor: 'Red' | 'Yellow' | 'Blue'): string => cor;
console.log(choiceColor('Red'));

//module mode
export default 1;
