interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const student1: PersonProtocol2<string, number> = {
  name: 'Antonio',
  lastname: 'Marcos',
  age: 30,
};

const student2: PersonProtocol<number, number> = {
  name: 123,
  lastname: 456,
  age: 30,
};

const student3: PersonProtocol2 = {
  name: 'Antonio',
  lastname: 'Marcos',
  age: 30,
};

console.log(student1, student2, student3);

// Module mode
export default 1;
