// @flow

const DEFAULT_DELIMITERS = 'A-Z\\s_-';

function matches(str: string, delimiters?: string): string[] {
  const regex = new RegExp('([A-Z]?)([^' + (delimiters || DEFAULT_DELIMITERS) + ']*)', 'g');
  const strMatches = str.match(regex) || [];

  return strMatches.filter(function(value) {
    return value;
  });
}

function toCase(letter: string, str: string): string {
  if (letter === '-') return '';
  if (letter === '*') return str;

  const isUpperCase = letter === letter.toUpperCase();
  return isUpperCase ? str.toUpperCase() : str.toLowerCase();
}

function applyPattern(str: string, pattern: string): string {
  return toCase(pattern[0], str[0]) + toCase(pattern[1], str.substring(1));
}

export default function casex(str: string, pattern: string, delimiters?: string): string {
  const glue = pattern.substring(2, pattern.length - 2);
  const firstPattern = pattern.substring(0, 2);
  const secondPattern = pattern.substring(pattern.length - 2);

  return matches(str, delimiters)
    .map(function(match, index) {
      return applyPattern(match, index === 0 ? firstPattern : secondPattern);
    })
    .join(glue);
}
