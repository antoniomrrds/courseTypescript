function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'antony',
  sobrenome: 'marcos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otávio');

export { pessoa };
