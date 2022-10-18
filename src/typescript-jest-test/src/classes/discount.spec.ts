import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => new className();

describe('Messaging', () => {
  //limpa apos cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have no discount ', () => {
    //System under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(23.50)).toBeCloseTo(23.50);
  });

  it('should apply 50% discount on price', () => {
    //System under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(30)).toBeCloseTo(15);
  });

  it('should apply 10% discount on price', () => {
    //System under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(80)).toBeCloseTo(72);
  });

});
