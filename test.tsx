const { ...RadixColors } = require('./color-palette.js')
type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];
const arrayOf12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

const grayScaleNames = [
	'gray', 'mauve', 'slate', 'sage', 'olive', 'sand' 
] as const;

const scaleNames = [
	...grayScaleNames, 
	'tomato', 'red', 'ruby', 'crimson', 'pink',
	'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green',
	'grass', 'brown', 'orange', 'sky', 'mint', 'lime', 'yellow', 'amber'
] as const;

let colors = scaleNames.reduce((obj: Record<string, string[]>, key: string) => {
	obj[`${ key }`] = Object.values(RadixColors[key])
	obj[`${ key }A`] = Object.values(RadixColors[key + 'A'])
	obj[`${ key }Dark`] = Object.values(RadixColors[key + 'Dark'])
	obj[`${ key }DarkA`] = Object.values(RadixColors[key + 'DarkA'])
	return obj
}, {})

colors['white'] = Object.values(RadixColors['whiteA'])
colors['black'] = Object.values(RadixColors['blackA'])

console.log(colors)