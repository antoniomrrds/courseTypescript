type TypeName = {
  name: string;
};

type TypeLastName = {
  lastname: string;
};

type TypeFullName = {
  fullname: () => string;
};

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastname: string) {}

  fullname(): string {
    return this.name + ' ' + this.lastname;
  }
}

const pessoa = new Person('Antonio', 'marcos');
console.log(pessoa.fullname());
