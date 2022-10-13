// Record
const object1: Record<string, string | number> = {
  name: 'Antonio',
  lastname: 'Marcos',
  age: 30,
};
console.log(object1);

type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonRequired>;
// Readonly
type PersonReadonly = Readonly<PersonRequired>;
// Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastname'>;

const object2: PersonRequired = {
  name: 'Antonio',
  lastname: 'Marcos',
  age: 30,
};
console.log(object2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  lastname: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  name: 'Luiz',
  age: 30,
  lastname: 'Marcos',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
