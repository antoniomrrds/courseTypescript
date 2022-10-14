interface Constructor {
  new (...args: any[]): any;
}

function inverseNameAndColor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverse(args[0]);
        this.color = this.inverse(args[1]);
      }

      inverse(value: string): string {
        return `${value.split('').reverse().join('')} = ${param1} -- ${param2}`;
      }
    };
  };
}
const otherDecorator = (param1: string) => {
  return function (target: Constructor) {
    console.log('am the other decorator ,' + param1);
    return target;
  };
};

@otherDecorator('the param the other decorator')
@inverseNameAndColor('value', 'value2')
export class Animal {
  constructor(public name: string, public color: string) {}
}
const animal = new Animal('josias', 'purple');
console.log(animal);
