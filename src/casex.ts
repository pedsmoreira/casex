import { casexPatternFromString } from "./_internal/casex-pattern-from-string";
import { casexSyllableCase } from "./_internal/casex-syllable-case";
import { splitWithDelimiters } from "./_internal/split-with-delimiters";

export function casex(args: {
	text: string;
	pattern: string;
	delimiters?: string;
}): string {
	const { text, pattern: patternString, delimiters } = args;

	const { firstSyllable, glue, secondSyllable } =
		casexPatternFromString(patternString);

	return splitWithDelimiters({ text, delimiters })
		.map((match, index) => {
			const syllable = index === 0 ? firstSyllable : secondSyllable;
			return casexSyllableCase({ text: match, syllable });
		})
		.join(glue);
}
