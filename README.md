# casex

> All in one function for transforming word casings

[![npm version](https://img.shields.io/npm/v/casex.svg)](https://www.npmjs.org/package/casex)
[![Build Status](https://travis-ci.org/pedsmoreira/casex.svg?branch=master)](https://travis-ci.org/pedsmoreira/casex)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/d3177e38b1705670e8ab/maintainability)](https://codeclimate.com/github/pedsmoreira/casex/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d3177e38b1705670e8ab/test_coverage)](https://codeclimate.com/github/pedsmoreira/casex/test_coverage)

## [Check out 🥁 BattleCry](https://github.com/pedsmoreira/battlecry)

casex was created as part of [🥁 BattleCry](https://github.com/pedsmoreira/battlecry), a simple and customizable scaffolding tool for all languages and frameworks.

## [Demo](https://codesandbox.io/s/8y83k797v0)

## Install

📦 [290B gziped](https://bundlephobia.com/result?p=casex)

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

By default, casex uses capitalizations (`A-Z`), `-`, `_` and spaces (`\s`.) to break the text into words.

If you wish, you can provide custom delimiters:

```js
casex('foo.bar,baz', 'Ca Se', '.,'); // Foo Bar Baz
```

_Note: These are the default delmiters `'A-Z\\s*-'`._

### 2. Applying capitalization pattern and gluing words together

In this example: `Ca_se`

* `C`: first letter of the first word
* `a`: second and subsequent letters of the first word
* `_`: anything between the first two and last two letters is `glue` and will be repeted between words
* `s`: first letter of the second and subsequent words
* `e`: second and subsequent letters of the second and subsequent words

Confusing? Check out the [demo](https://codesandbox.io/s/8y83k797v0) and/or examples below. I'm sure you'll get the hang of it :)

_Note: You could use any other letters to describe, such as `aa$aa` or `na_me`. What matters is that it takes the first two and last two letters for checking capitalization and whatever is in the middle is "glue"._

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

## Resources

* [Blog post explaining why casex was created and what's next](https://medium.com/@pedsmoreira/scaffolding-for-existing-projects-part-1-a-library-for-matching-cases-b353ec14a8fb)
* [Changelog](./CHANGELOG.md)
* [Contributing Guide](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)
