import { CasexPattern } from "../types";

export function casexPatternFromString(pattern: string): CasexPattern {
	const firstSyllable = pattern.substring(0, 2);
	const glue = pattern.substring(2, pattern.length - 2);
	const secondSyllable = pattern.substring(pattern.length - 2);

	return { firstSyllable, glue, secondSyllable };
}
