# casex

All in one, self expressive pattern for string case styles

## Introduction

`casex` is a function that applies a case style given a pattern.

Instead of having a specific function for each case style, I provide a self-expressive pattern that represent the desired output. For example, kebab-case can be represented as `ca-se` and title case as `Ca Se`.

## Install

```sh
npm install --save casex
```

## Usage

```js
import { casex } from "casex";

casex({ text: "your text", pattern: "ca-se" }); // your-text
```

## How it works

### 1. Breaking text into words

By default, `casex` uses capitalizations (`A-Z`), `-`, `_` and spaces (`\s`) to break the text into words.

Let's take for example `i_am the-real JohnDoe`:

- `i`: 1st word
- `am`: 2nd+ word
- `the`: 2nd+ word
- `real`: 2nd+ word
- `John`: 2nd+ word
- `Doe`: 2nd+ word

#### 1.1 Custom delimiters

The default will likely work for most of your cases, but if you wish, you can provide custom delimiters:

```js
casex({ text: "foo.bar,baz", pattern: "Ca Se", delimiters: ".," }); // Foo Bar Baz
```

_Note: The default delimiters are: `A-Z\\s_-`.

### 2. Applying capitalization pattern and gluing words together

Let's take for example `Ca_se`:

- `C`: first letter of the first word
- `a`: second and subsequent letters of the first word
- `_`: anything between the first two and last two letters is `glue` and will be repeted between words
- `s`: first letter of the second and subsequent words
- `e`: second and subsequent letters of the second and subsequent words

_Note: You can use any other letters to describe the pattern, such as `aa$aa` or `na_me`. What matters is that it takes the first two and last two letters for checking capitalization and whatever is in the middle is "glue"._

#### 2.1 Special transformations

Besides using lower and uppercase letters, you can also use:

- `*`: Do not change word
- `-`: Remove word

## Examples

For these examples I'll use the text `i_am the-real JohnDoe`

**lowercase**

- Pattern: case
- Output: iamtherealjohndoe

**UPPERCASE**

- Pattern: CASE
- Output: IAMTHEREALJOHNDOE

**snake_case**

- Pattern: ca_se
- Output: i_am_the_real_john_doe

**spinal-case**

- Pattern: ca-se
- Output: i-am-the-real-john-doe

**camelCase**

- Pattern: caSe
- Output: iAmTheRealJohnDoe

**UpperCamelCase**

- Pattern: CaSe
- Output: IAmTheRealJohnDoe

**Sentence case**

- Pattern: Ca se
- Output: I am the real john doe

**Title Case**

- Pattern: Ca Se
- Output: I Am The Real John Doe

**Weird Example**

- Pattern: Ca12 34Se
- Output: I12 34Am12 34The12 34Real12 34John12 34Doe

### Examples with special characters

**Capitalize first letter**

- Pattern: C\* \*\*
- Output: I am the real John Doe

**Initials**

- Input: John Doe
- Pattern: C-S-
- Output: JD

## Previous versions

Although for most cases it will work just fine, `casex` 4.x is not fully compatible previous versions. If you need previous docs please refer to:

- [v0.x](https://github.com/pedsmoreira/casex/tree/0.x)
- [v1.x](https://github.com/pedsmoreira/casex/tree/1.x)
- [v2.x](https://github.com/pedsmoreira/casex/tree/2.x)
- [v3.x](https://github.com/pedsmoreira/casex/tree/3.x)
