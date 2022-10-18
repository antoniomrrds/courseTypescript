import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  //limpa apos cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });
  it('should call  console.log once', () => {
    //System under test

    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call  console.log with "Mensagem enviada:', () => {
    //System under test

    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    //chamando o metodo e comparando se o valor e igual ao pretendido
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:','teste');
  });
});
