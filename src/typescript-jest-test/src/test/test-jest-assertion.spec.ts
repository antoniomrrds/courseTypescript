describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
  it('should split tests', () => {
    const number = 10;

    expect(number).not.toBe(11);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(null).not.toBeTruthy();

    expect(number).toBeGreaterThan(9);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Antonio', age: 25 };
    const anotherperson = { ...person };

    expect(person).toEqual(anotherperson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age',25);

    expect(person.name).toBe('Antonio')

  });
});
