// @flow

function matches(str: string): string[] {
  return str.match(/([A-Z]?)([a-z]+)/g) || [];
}

function toCase(letter: string, str: string): string {
  const isUpperCase = letter === letter.toUpperCase();
  return isUpperCase ? str.toUpperCase() : str.toLowerCase();
}

function applyPattern(str: string, pattern: string): string {
  return toCase(pattern[0], str[0]) + toCase(pattern[1], str.substring(1));
}

function casex(str: string, pattern: string): string {
  const glue = pattern.substring(2, pattern.length - 2);
  const firstPattern = pattern.substring(0, 2);
  const secondPattern = pattern.substring(pattern.length - 2);

  return matches(str)
    .map((match, index) => applyPattern(match, index === 0 ? firstPattern : secondPattern))
    .join(glue);
}

module.exports = casex;
