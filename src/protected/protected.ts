export class Company {
  public readonly name: string; //pubic it is not necessary
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

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
export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    return collaborator ? collaborator : null;
  }
}

//short way
export class Collaborator {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const company = new Udemy();
const collaborator = new Collaborator('Antony', 'rrsoares');
const collaborator2 = new Collaborator('rafa', 'rrsoares');
const collaborator3 = new Collaborator('Ana', 'rrsoares');

company.addCollaborator(collaborator);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);
company.showCollaborators();
const collaboratorDeleted = company.popCollaborator();
console.log(company);
console.log(collaboratorDeleted);
