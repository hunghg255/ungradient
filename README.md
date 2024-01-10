<p align="center">
<a href="https://www.npmjs.com/package/ungradient" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/fluent:color-24-regular.svg?color=%23db7b7b" alt="logo" width='100'/></a>
</p>

<p align="center">
  A tiny JavaScript library console log with gradient color.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ungradient" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/ungradient.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/ungradient" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/ungradient.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=ungradient" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/ungradient" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/ungradient/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/ungradient/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/ungradient" alt="License" /></a>
</p>

> Beautiful color gradients in terminal output

![a](https://res.cloudinary.com/hunghg255/image/upload/v1693383952/ungradient_c8vo8n.png)


## Install

```
npm i ungradient
```

## Usage

```ts
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
} from 'ungradient';

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
```
