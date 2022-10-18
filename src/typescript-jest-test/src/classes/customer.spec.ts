import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => new IndividualCustomer(firstName, lastName, cpf);

const createEnterpriseCustomer = (
  firstName: string,
  cnpj: string,
): EnterpriseCustomer => new EnterpriseCustomer(firstName, cnpj);



afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
    //user data
  const userPf = {
    firstName: 'antonio',
    lastName: 'marcos',
    cpf: '017.266.555.58',
  };
  
  const sut = createIndividualCustomer(
    userPf.firstName,
    userPf.lastName,
    userPf.cpf,
  );

  it('should have firstname lastname and cpf ', () => {
    //System under test

    expect(sut).toHaveProperty('firstName', userPf.firstName);
    expect(sut).toHaveProperty('lastName', userPf.lastName);
    expect(sut).toHaveProperty('cpf', userPf.cpf);
  });

  it('should have methods to get name and idn', () => {
    //System under test
    expect(sut.getName()).toBe(userPf.firstName + ' ' + userPf.lastName);
    expect(sut.getIDN()).toBe(userPf.cpf);
  });
});

describe('EnterpriseCustomer', () => {
  //user data
  const userPj = {
    name: 'Udemy',
    cnpj: '53.023.579/0001-74',
  };

  const sut = createEnterpriseCustomer(userPj.name, userPj.cnpj);

  it('should have firstname and cnpj ', () => {
    //System under test
    expect(sut).toHaveProperty('name', userPj.name);
    expect(sut).toHaveProperty('cnpj', userPj.cnpj);
  });

  it('should have methods to get name and idn', () => {
    //System under test
    expect(sut.getName()).toBe(userPj.name );
    expect(sut.getIDN()).toBe(userPj.cnpj);
  });
});
