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

## Other Versions

Although for most cases it will work just fine, casex 1.x is not fully compatible previous versions. If you need previous docs please refer to:

* [v0.x](https://github.com/pedsmoreira/casex/tree/0.x)

_This is not the latest version. For docs on the latest version, please refer to https://github.com/pedsmoreira/casex_

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
```

## How the pattern works

For casex any character that is not a letter (accents are not letters for javascript) is a breakpoint.

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

### Strings with numbers

Since version 1.0.0 casex treats numbers and lowercase letters equally, therefore:

```javascript
casex('john1-doe2', 'Ca Se') === 'John1 Doe2'`
```

## Resources

* [Blog post explaining why casex was created and what's next](https://medium.com/@pedsmoreira/scaffolding-for-existing-projects-part-1-a-library-for-matching-cases-b353ec14a8fb)
* [Changelog](./CHANGELOG.md)
* [Contributing Guide](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)
