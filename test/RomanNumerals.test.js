import { RomanNumerals } from "../src/RomanNumerals";

test("should check if 1 turns to I", () => {
	const results = RomanNumerals(1);
	expect(results).toStrictEqual(["I"]);
});
