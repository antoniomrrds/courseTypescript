/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNameSpace {
  export const nomeDoNamespace = 'Luiz';

  export class nameSpacePerson {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new nameSpacePerson('Luiz');

  export namespace anothernameSpace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';
