import {
  gradient,
  atlas,
  cristal,
  fruit,
  instagram,
  mind,
  morning,
  passion,
  pastel,
  rainbow,
  retro,
  summer,
  teen,
  vice,
} from '../src/index';

console.log(atlas('Hello atlas!'));
console.log(cristal('Hello cristal!'));
console.log(fruit('Hello fruit!'));
console.log(instagram('Hello instagram!'));
console.log(mind('Hello mind!'));
console.log(morning('Hello morning!'));
console.log(passion('Hello passion!'));
console.log(pastel('Hello pastel!'));
console.log(rainbow('Hello rainbow!'));
console.log(retro('Hello retro!'));
console.log(summer('Hello summer!'));
console.log(teen('Hello teen!'));
console.log(vice('Hello vice!'));

let coolGradient = gradient(
  { r: 0, g: 255, b: 0 }, // RGB object
  { h: 240, s: 1, v: 1, a: 1 }, // HSVa object
  'rgb(120, 120, 0)', // RGB CSS string
  'gold'
);
console.log(coolGradient('Hello Custom Color!', { interpolation: 'hsv', hsvSpin: 'long' }));

let duck = gradient('orange', 'yellow').multiline([
  "  __",
  "<(o )___",
  " ( ._> /",
  "  `---'",
].join('\n'), { interpolation: 'hsv', hsvSpin: 'long'});
console.log(duck);
