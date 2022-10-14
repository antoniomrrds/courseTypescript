function decorator(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }
      valueProperty = value;
    },
  };
}
export class OnePerson {
  @decorator
  name: string;
  @decorator
  lastname: string;
  @decorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new OnePerson('Rafaela', 'reis', 30);
const method = person.method('hello world!');
console.log(method);
