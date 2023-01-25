import { casexLetterCase } from "./casex-letter-case";

type Args = {
	text: string;
	syllable: string;
};

export function casexSyllableCase({ text, syllable }: Args): string {
	return (
		casexLetterCase({ text: text[0], letter: syllable[0] }) +
		casexLetterCase({ text: text.substring(1), letter: syllable[1] })
	);
}
