interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullName {
  fullname(): string;
}

// type TypePerson = TypeName & TypeLastName & TypeFullName;
interface TypePerson2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements TypePerson2 {
  constructor(public name: string, public lastname: string) {}

  fullname(): string {
    return this.name + ' ' + this.lastname;
  }
}

const personObj: TypePerson2 = {
  fullname(): string {
    return this.name + ' ' + this.lastname;
  },
  name: 'Antonio',
  lastname: 'reis',
};

const person = new Person('Antonio', 'marcos');
console.log(person.fullname());
console.log(personObj.fullname());
