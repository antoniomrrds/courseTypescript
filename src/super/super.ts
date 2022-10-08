export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}
  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public classroom: string,
  ) {
    super(name, lastname, age, cpf);
  }

  getFullName(): string {
    console.log('Doing something before ');
    const result = super.getFullName();
    return result + '!!!';
  }
}
export class Client extends Person {
  getFullName(): string {
    return `client : ${this.name}  ${this.lastname}`;
  }
}

const person = new Person('Antonio', 'marcos', 30, '000.000.000-00');
const student = new Student('Ana', 'rrds', 30, '000.000.000-00', '001');
const client = new Client('Rafa', 'rrsoares', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student);
console.log(client.getFullName());
