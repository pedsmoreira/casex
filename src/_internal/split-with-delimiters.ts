const DELIMITERS = "A-Z\\s_-";

interface SplitWithDelimitersArgs {
	text: string;
	delimiters?: string;
}

export function splitWithDelimiters({
	text,
	delimiters,
}: SplitWithDelimitersArgs): string[] {
	const regex = new RegExp(
		// rome-ignore lint/style/useTemplate: <explanation>
		"([A-Z]?)([^" + (delimiters || DELIMITERS) + "]*)",
		"g",
	);

	const matches = text.match(regex) || [];
	return matches.filter(Boolean);
}
