export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Antonio', 'marcos', 30, '000.000.000-00');
person.cpf = '040.070.080-60';
console.log(person.cpf);
