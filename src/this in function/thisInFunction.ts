export function functionIsThis(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}
functionIsThis.call(new Date(), 'antony', 60);
functionIsThis.apply(new Date(), ['antony', 30]);
