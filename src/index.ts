import chalk from 'chalk';
import tinygradient from 'tinygradient';

const forbiddenChars = /\s/g;

type GradientOptions = {
	interpolation?: 'rgb' | 'hsv',
	hsvSpin?: 'short' | 'long'
}

const getColors = (gradient: any, options: any, count: any) => options.interpolation.toLowerCase() === 'hsv' ?
	gradient.hsv(count, options.hsvSpin.toLowerCase()) : gradient.rgb(count);

function applyGradient(str: string, gradient: tinygradient.Instance, opts?: GradientOptions) {
	const options = validateOptions(opts);
	const colorsCount = Math.max(str.replace(forbiddenChars, '').length, gradient.stops.length);
	const colors = getColors(gradient, options, colorsCount);
	let result = '';
	for (const s of str) {
		result += s.match(forbiddenChars) ? s : chalk.hex(colors.shift().toHex())(s);
	}
	return result;
}

function multilineGradient(str: string, gradient: any, opts?: GradientOptions) {
	const options = validateOptions(opts);
	const lines = str.split('\n');
	const maxLength = Math.max.apply(null, lines.map((l: any) => l.length).concat([gradient.stops.length]));
	const colors = getColors(gradient, options, maxLength);
	const results = [];
	for (const line of lines) {
		const lineColors = colors.slice(0);
		let lineResult = '';
		for (const l of line) {
			lineResult += chalk.hex(lineColors.shift().toHex())(l);
		}
		results.push(lineResult);
	}
	return results.join('\n');
}

function validateOptions(opts?: GradientOptions) {
	const options: GradientOptions = { interpolation: 'rgb', hsvSpin: 'short', ...opts };
	if (opts !== undefined && typeof opts !== 'object') {
		throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof opts}\``);
	}

	if (typeof options.interpolation !== 'string') {
		throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof options.interpolation}\``);
	}

	if (options.interpolation.toLowerCase() === 'hsv' && typeof options.hsvSpin !== 'string') {
		throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof options.hsvSpin}\``);
	}
	return options;
}

export function gradient(...args: any[]) {
  //@ts-expect-error
	const grad = tinygradient.apply(this, args);
	const ret = (str: string, opts?: GradientOptions) => applyGradient(str ? str.toString() : '', grad, opts);
	ret.multiline = (str: string, opts?: GradientOptions) => multilineGradient(str ? str.toString() : '', grad, opts);
	return ret;
}

const aliases = {
	atlas: {colors: ['#feac5e', '#c779d0', '#4bc0c8'], options: {}},
	cristal: {colors: ['#bdfff3', '#4ac29a'], options: {}},
	teen: {colors: ['#77a1d3', '#79cbca', '#e684ae'], options: {}},
	mind: {colors: ['#473b7b', '#3584a7', '#30d2be'], options: {}},
	morning: {colors: ['#ff5f6d', '#ffc371'], options: {interpolation: 'hsv'}},
	vice: {colors: ['#5ee7df', '#b490ca'], options: {interpolation: 'hsv'}},
	passion: {colors: ['#f43b47', '#453a94'], options: {}},
	fruit: {colors: ['#ff4e50', '#f9d423'], options: {}},
	instagram: {colors: ['#833ab4', '#fd1d1d', '#fcb045'], options: {}},
	retro: {colors: ['#3f51b1', '#5a55ae', '#7b5fac', '#8f6aae', '#a86aa4', '#cc6b8e', '#f18271', '#f3a469', '#f7c978'], options: {}},
	summer: {colors: ['#fdbb2d', '#22c1c3'], options: {}},
	rainbow: {colors: ['#ff0000', '#ff0100'], options: {interpolation: 'hsv', hsvSpin: 'long'}},
	pastel: {colors: ['#74ebd5', '#74ecd5'], options: {interpolation: 'hsv', hsvSpin: 'long'}}
};

export const atlas = (str: string) => gradient(aliases.atlas.colors)(str, aliases.atlas.options);
export const cristal = (str: string) => gradient(aliases.cristal.colors)(str, aliases.cristal.options);
export const teen = (str: string) => gradient(aliases.teen.colors)(str, aliases.teen.options);
export const mind = (str: string) => gradient(aliases.mind.colors)(str, aliases.mind.options);
export const morning = (str: string) => gradient(aliases.morning.colors)(str, aliases.morning.options as any);
export const vice = (str: string) => gradient(aliases.vice.colors)(str, aliases.vice.options as any);
export const passion = (str: string) => gradient(aliases.passion.colors)(str, aliases.passion.options);
export const fruit = (str: string) => gradient(aliases.fruit.colors)(str, aliases.fruit.options);
export const instagram = (str: string) => gradient(aliases.instagram.colors)(str, aliases.instagram.options);
export const retro = (str: string) => gradient(aliases.retro.colors)(str, aliases.retro.options);
export const summer = (str: string) => gradient(aliases.summer.colors)(str, aliases.summer.options);
export const rainbow = (str: string) => gradient(aliases.rainbow.colors)(str, aliases.rainbow.options as any);
export const pastel = (str: string) => gradient(aliases.pastel.colors)(str, aliases.pastel.options as any);
