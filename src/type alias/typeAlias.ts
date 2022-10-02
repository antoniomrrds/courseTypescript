type age = number;
type Person = {
  name: string;
  age: age;
  salary: number;
  favoriteColor?: string;
};

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Cian' | 'Magenta' | 'Yellow' | 'black';
type FavoriteColor = CorRGB | CorCMYK;

const person: Person = {
  age: 30,
  name: 'Antony',
  salary: 200_000,
};

export const setFavoriteColor = (
  person: Person,
  cor: FavoriteColor,
): Person => {
  return { ...person, favoriteColor: cor };
};

console.log(setFavoriteColor(person, 'Red'));
console.log(person);
