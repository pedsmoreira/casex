type Args = {
	text: string;
	letter: string;
};

export function casexLetterCase({ text, letter }: Args): string {
	if (letter === "-") return "";
	if (letter === "*") return text;

	const isUpperCase = letter === letter.toUpperCase();
	return isUpperCase ? text.toUpperCase() : text.toLowerCase();
}
