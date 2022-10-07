export class Company {
  public readonly name: string; //pubic it is not necessary
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}
//short way
export class Collaborator {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const company = new Company('Udemy', '11.111.111/0001-11');
const collaborator = new Collaborator('Antony', 'rrsoares');
const collaborator2 = new Collaborator('rafa', 'rrsoares');
const collaborator3 = new Collaborator('Ana', 'rrsoares');

company.addCollaborator(collaborator);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);
company.showCollaborators();

console.log(company);
