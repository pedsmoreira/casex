interface CasexLetterCaseArgs {
	text: string;
	letter: string;
}

export function casexLetterCase({ text, letter }: CasexLetterCaseArgs): string {
	if (letter === "-") return "";
	if (letter === "*") return text;

	const isUpperCase = letter === letter.toUpperCase();
	return isUpperCase ? text.toUpperCase() : text.toLowerCase();
}
