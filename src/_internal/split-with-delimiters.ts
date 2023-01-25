const DELIMITERS = "A-Z\\s_-";

type Args = {
	text: string;
	delimiters?: string;
};

export function splitWithDelimiters({ text, delimiters }: Args): string[] {
	const regex = new RegExp(
		// rome-ignore lint/style/useTemplate: <explanation>
		"([A-Z]?)([^" + (delimiters || DELIMITERS) + "]*)",
		"g",
	);

	const matches = text.match(regex) || [];
	return matches.filter(Boolean);
}
