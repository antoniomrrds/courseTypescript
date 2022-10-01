//tuple
const dadosCliente1: readonly [number, string] = [1, 'antony'];
const dadosCliente2: [number, string, string] = [1, ' antony', ' reis'];
const dadosCliente3: [number, string, string?] = [1, 'antony'];
const dadosCliente4: [number, string, ...string[]] = [1, ' antony', ' reis'];
// dadosCliente1[0] = 100;
// dadosCliente1[1] = ' Carlos' ;
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
//readonly;
const array1: readonly string[] = [' antony', 'soares'];
const array2: ReadonlyArray<string> = [' antony', ' soares'];

console.log(array1);
console.log(array2);
