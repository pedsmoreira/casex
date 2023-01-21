# Casex is now part of [DXTR.DEV](https://dxtr.dev)

I (Pedro) am migrating several of my packages to my new company [DXTR.DEV](https://dxtr.dev), where I'll ship tools and apps that improve developer experience.

Besides being moved, Casex now has Typescript types and a new function signature with named exports.

New GitHub repo: https://github.com/dxtr-dot-dev/casex

NPM package: [@dxtr.dev/casex](https://www.npmjs.com/package/@dxtr.dev/casex)

-----

## [Demo](https://codesandbox.io/s/8y83k797v0)

## Previous versions

Although for most cases it will work just fine, casex 3.x is not fully compatible previous versions. If you need previous docs please refer to:

* [v0.x](https://github.com/pedsmoreira/casex/tree/0.x)
* [v1.x](https://github.com/pedsmoreira/casex/tree/1.x)
* [v2.x](https://github.com/pedsmoreira/casex/tree/2.x)

## Install

📦 [343B gziped](https://bundlephobia.com/result?p=casex)

```sh
npm install --save casex
```

or https://unpkg.com/casex

## Usage

```js
import casex from 'casex';

casex(text, pattern);
casex('john doe', 'Ca Se'); // John Doe
```

## How it works

### 1. Breaking text into words

By default, casex uses capitalizations (`A-Z`), `-`, `_` and spaces (`\s`) to break the text into words.

Let's take for example `i_am the-real JohnDoe`:

* `i`: 1st word
* `am`: 2nd+ word
* `the`: 2nd+ word
* `real`: 2nd+ word
* `John`: 2nd+ word
* `Doe`: 2nd+ word

#### 1.1 Custom delimiters

The default will likely work for most of your cases, but if you wish, you can provide custom delimiters:

```js
casex('foo.bar,baz', 'Ca Se', '.,'); // Foo Bar Baz
```

_Note: The default delimiters are: `A-Z\\s_-`.

### 2. Applying capitalization pattern and gluing words together

Let's take for example `Ca_se`:

* `C`: first letter of the first word
* `a`: second and subsequent letters of the first word
* `_`: anything between the first two and last two letters is `glue` and will be repeted between words
* `s`: first letter of the second and subsequent words
* `e`: second and subsequent letters of the second and subsequent words

Confusing? Check out the [demo](https://codesandbox.io/s/8y83k797v0) and/or examples below. I'm sure you'll get the hang of it :)

_Note: You could use any other letters to describe, such as `aa$aa` or `na_me`. What matters is that it takes the first two and last two letters for checking capitalization and whatever is in the middle is "glue"._

#### 2.1 Special transformations

Besides using lower and uppercase letters, you can also use:

* `*`: Do not change word
* `-`: Remove word

## Examples

For these examples I'll use the text `i_am the-real JohnDoe`

**lowercase**

* Pattern: case
* Output: iamtherealjohndoe

**UPPERCASE**

* Pattern: CASE
* Output: IAMTHEREALJOHNDOE

**snake_case**

* Pattern: ca_se
* Output: i_am_the_real_john_doe

**spinal-case**

* Pattern: ca-se
* Output: i-am-the-real-john-doe

**camelCase**

* Pattern: caSe
* Output: iAmTheRealJohnDoe

**UpperCamelCase**

* Pattern: CaSe
* Output: IAmTheRealJohnDoe

**Sentence case**

* Pattern: Ca se
* Output: I am the real john doe

**Title Case**

* Pattern: Ca Se
* Output: I Am The Real John Doe

**Weird Example**

* Pattern: Ca12 34Se
* Output: I12 34Am12 34The12 34Real12 34John12 34Doe

### Examples with special characters

**Capitalize first letter**

* Pattern: C\* \*\*
* Output: I am the real John Doe

**Initials**

* Input: John Doe
* Pattern: C-S-
* Output: JD

## Resources

* [Blog post explaining why casex was created and what's next](https://medium.com/@pedsmoreira/scaffolding-for-existing-projects-part-1-a-library-for-matching-cases-b353ec14a8fb)
* [Changelog](./CHANGELOG.md)
* [Contributing Guide](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)
