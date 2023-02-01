export function RomanNumerals(...nums) {
	const LOOKUP = [
		{ numeral: "C", decimal: 100 },
		{ numeral: "L", decimal: 50 },
		{ numeral: "X", decimal: 10 },
		{ numeral: "V", decimal: 5 },
		{ numeral: "I", decimal: 1 },
	];
	let output = 0;

	if (!nums) {
		throw new error("Missing numbers");
	}

	nums.forEach((num) => {
		if (num === 1) {
			output = ["I"];
		}
	});

	return output;
}
