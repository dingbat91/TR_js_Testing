export function RomanNumerals(...nums) {
	const LOOKUP = [
		{ numeral: "C", decimal: 100 },
		{ numeral: "XC", decimal: 90 },
		{ numeral: "L", decimal: 50 },
		{ numeral: "XL", decimal: 40 },
		{ numeral: "X", decimal: 10 },
		{ numeral: "IX", decimal: 9 },
		{ numeral: "V", decimal: 5 },
		{ numeral: "IV", decimal: 4 },
		{ numeral: "I", decimal: 1 },
	];

	let output = [];

	if (nums.length === 0) {
		throw new error("Missing numbers");
	}

	nums.forEach((num) => {
		let numeralString = "";

		for (let currentTotal = num; currentTotal > 0; ) {
			const REDUCINGNUMERAL = LOOKUP.find((numeral) => {
				//subraction variable (refactor?)
				const subtraction = currentTotal - numeral.decimal;

				//Returns true if subtraction does not result in a negative number.
				if (subtraction < 0) {
					return false;
				} else {
					//subtract found decimal value for next iteration
					currentTotal -= numeral.decimal;
					return true;
				}
			});

			//construct string
			numeralString += REDUCINGNUMERAL.numeral;
		}
		output.push(numeralString);
	});

	return output;
}
