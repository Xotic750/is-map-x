/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-map-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-map-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-map-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-map-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/is-map-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-map-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-map-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-map-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Detect whether or not an object is an ES6 Map.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-map-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isObjectLike;
  var getSize;

  if (typeof Map === 'function') {
    try {
      getSize = Object.getOwnPropertyDescriptor(Map.prototype, 'size').get;
      getSize = typeof getSize.call(new Map()) === 'number' && getSize;
      isObjectLike = require('is-object-like-x');
    } catch (ignore) {
      getSize = null;
    }
  }

  /**
   * Determine if an `object` is a `Map`.
   *
   * @param {*} object The object to test.
   * @return {boolean} `true` if the `object` is a `Map`,
   *  else false`
   * @example
   * var isMap = require('is-map-x');
   * var m = new Map();
   *
   * isMap([]); // false
   * isMap(true); // false
   * isMap(m); // true
   */
  module.exports = function isMap(object) {
    if (!getSize || !isObjectLike(object)) {
      return false;
    }
    try {
      return typeof getSize.call(object) === 'number';
    } catch (ignore) {}
    return false;
  };
}());
