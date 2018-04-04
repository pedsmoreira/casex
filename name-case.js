(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  // 

  function matches(str) {
    return str.match(/([A-Z]?)([a-z]+)/g) || [];
  }

  function toCase(letter, str) {
    const isUpperCase = letter === letter.toUpperCase();
    return isUpperCase ? str.toUpperCase() : str.toLowerCase();
  }

  function applyPattern(str, pattern) {
    return toCase(pattern[0], str[0]) + toCase(pattern[1], str.substring(1));
  }

  function nameCase(str, pattern) {
    const glue = pattern.substring(2, pattern.length - 2);
    const firstPattern = pattern.substring(0, 2);
    const secondPattern = pattern.substring(pattern.length - 2);

    return matches(str)
      .map((match, index) => applyPattern(match, index === 0 ? firstPattern : secondPattern))
      .join(glue);
  }

  module.exports = nameCase;

})));
