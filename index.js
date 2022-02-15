import chalk from 'chalk';
import sym from 'log-symbols';

// styles
const blue = chalk.blue;
const green = chalk.green;
const yellow = chalk.yellow;
const red = chalk.red.bold;

const blueInverse = chalk.blue.inverse;
const greenInverse = chalk.green.inverse;
const yellowInverse = chalk.yellow.inverse;
const redInverse = chalk.red.bold.inverse;

export default (options) => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`
	};

	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;

	const printName = name ? name : type.toUpperCase();

	if (type === `info`) {
		console.log(`\n${sym.info} ${blueInverse(`${printName}`)} ${blue(msg)}\n`);
	}

	if (type === `success`) {
		console.log(`\n${sym.success} ${greenInverse(`${printName}`)} ${green(msg)}\n`);
	}

	if (type === `warning`) {
		console.log(`\n${sym.warning} ${yellowInverse(`${printName}`)} ${yellow(msg)}\n`);
	}

	if (type === `error`) {
		console.log(`\n${sym.error} ${redInverse(`${printName}`)} ${red(msg)}\n`);
	}
};
