type ColorObj = typeof colorsObj;
type ColorsKey = keyof ColorObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColor(color: ColorsKey, colors: ColorObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
console.log(translateColor('verde', colorsObj));
console.log(translateColor('roxo', colorsObj));
