// Array<type> = type[]

export function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toLocaleUpperCase());
}

const result = multArgs(1, 2, 3);
const concatenacao = concatString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', ' c');
console.log(result);
console.log(concatenacao);
console.log(upper);
