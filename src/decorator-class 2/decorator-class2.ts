function inverseNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverse(args[0]);
      this.color = this.inverse(args[1]);
    }

    inverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@inverseNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {}
}
const animal = new Animal('josias', 'purple');
console.log(animal);
