import { RomanNumerals } from "../src/RomanNumerals";

describe("Single Number Tests", () => {
	test("should check if 1 turns to I", () => {
		const results = RomanNumerals(1);
		expect(results).toStrictEqual(["I"]);
	});

	test("should check if 5 turns to V", () => {
		const results = RomanNumerals(5);
		expect(results).toStrictEqual(["V"]);
	});

	test("should check if 8 turns to VIII", () => {
		const results = RomanNumerals(8);
		expect(results).toStrictEqual(["VIII"]);
	});

	test("should check if 9 turns to IX", () => {
		const results = RomanNumerals(9);
		expect(results).toStrictEqual(["IX"]);
	});

	test("should check if 45 turns to X", () => {
		const results = RomanNumerals(45);
		expect(results).toStrictEqual(["XLV"]);
	});
});

describe("Multi Number Tests", () => {
	test('should turn 5 and 8 into ["V", "VIII"]', () => {
		const results = RomanNumerals(5, 8);
		expect(results).toStrictEqual(["V", "VIII"]);
	});

	test('should turn 5 and 8 into ["V", "VIII"]', () => {
		const results = RomanNumerals(28, 72);
		expect(results).toStrictEqual(["XXVIII", "LXXII"]);
	});
});

describe("Input Tests", () => {
	test("No input error check", () => {
		expect(() => RomanNumerals()).toThrow(Error);
	});
});
