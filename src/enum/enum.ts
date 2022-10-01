enum Cores {
  RED,
  BLUE,
  YELLOW,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores.RED);
console.log(Cores[1]);
console.log(Cores.RED);

export const choiceColor = (cor: Cores): void => console.log(Cores[cor]);

choiceColor(1354);
choiceColor(201);
