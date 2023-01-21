import { casex } from "../dist/casex.js";

describe("casex", () => {
	test("works for common string styles", () => {
		const matches = {
			name: "johndoe",
			"na-Me": "john-Doe",
			"na-mE": "john-dOE",
			"nA-me": "jOHN-doe",
			"NA-ME": "JOHN-DOE",
			na_me: "john_doe",
			na$me: "john$doe",
			"na me": "john doe",
			"na - me": "john - doe",
			"na - $ 0001 name abc me": "john - $ 0001 name abc doe",
			naMe: "johnDoe",
			NaMe: "JohnDoe",
			Name: "Johndoe",
			"Na me": "John doe",
			"Na Me": "John Doe",
		};

		const inputs = ["john doe", "johnDoe", "john-doe", "john_doe"];

		inputs.forEach((input) => {
			Object.entries(matches).forEach(([pattern, output]) => {
				expect(casex({ text: input, pattern })).toEqual(output);
			});
		});

		expect.assertions(Object.keys(matches).length * inputs.length);
	});

	test("handles * and - on pattern", () => {
		const matches = {
			"N***": "Johndoe",
			"**M*": "johnDoe",
			"**M-": "johnD",
			"N*M-": "JohnD",
			"N-M-": "JD",
			"N- M-": "J D",
		};

		const inputs = ["john doe", "john-doe", "john_doe"];
		const matchKeys = Object.keys(matches);

		inputs.forEach((input) => {
			Object.entries(matches).forEach(([pattern, output]) => {
				expect(casex({ text: input, pattern })).toEqual(output);
			});
		});

		expect.assertions(Object.keys(matches).length * inputs.length);
	});

	test("handles empty string", () => {
		expect(
			casex({
				text: "",
				pattern: "name",
			}),
		).toEqual("");
	});

	test("handles individual capital letters", () => {
		expect(
			casex({
				text: "JohnDOE",
				pattern: "caSe",
			}),
		).toEqual("johnDOE");
	});

	test("does not remove numbers", () => {
		expect(
			casex({
				text: "I_99-am.John1Doe2",
				pattern: "Ca Se",
			}),
		).toEqual("I 99 Am. John1 Doe2");
	});

	test("does not remove symbols", () => {
		const symbols = [
			"?",
			"!",
			"$",
			"#",
			"`",
			"¿",
			"¡",
			"(",
			")",
			"[",
			"]",
			"{",
			"}",
			".",
			",",
			"/",
			"\\",
		];
		symbols.forEach((symbol) => {
			expect(
				casex({
					text: `john${symbol} doe`,
					pattern: "caSe",
				}),
			).toEqual(`john${symbol}Doe`);
		});
	});

	test("does not remove emojis", () => {
		expect(
			casex({
				text: "🙂john 🙂 doe 🙂",
				pattern: "caSe",
			}),
		).toEqual("🙂john🙂Doe🙂");
	});
});
