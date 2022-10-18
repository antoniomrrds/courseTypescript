import { Product } from './product';


const createSut = (name:string,price:number ): Product => new Product(name,price);

describe('Messaging', () => {
  //limpa apos cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price ', () => {
    //System under test
    const sut = createSut('caneta',23.50);
    expect(sut).toHaveProperty('name','caneta');
    expect(sut).toHaveProperty('price',23.50);
    expect(sut.price).toBeCloseTo(23.50);
  });
});
