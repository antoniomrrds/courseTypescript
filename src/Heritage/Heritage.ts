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
  getFullName(): string {
    return `student : ${this.name}  ${this.lastname}`;
  }
}
export class Client extends Person {
  getFullName(): string {
    return `client : ${this.name}  ${this.lastname}`;
  }
}

const person = new Person('Antonio', 'marcos', 30, '000.000.000-00');
const student = new Student('Ana', 'rrds', 30, '000.000.000-00');
const client = new Client('Rafa', 'rrsoares', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
