/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
let nameString : string = 'Luiz'; // Qualquer tipo de strings:
let age: number = 0b1010; // 10, 1.57, -5.55, exfeed, eb1010, 007744
let adult: boolean = true; // true ou false
let symbol: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint
// Arrays
let arrayDeNumeros: Array<number> = [1, 2];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];
// Objetos
let pessoa:{name: string, age: number, adult ?: boolean} = {
  age: 30,
  name: 'Luiz'
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number)=> number = (x,y)=>x+y;
