/**
 * @file Detect whether or not an object is an ES6 Map.
 * @version 1.4.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-map-x
 */

'use strict';

var isObjectLike;
var getSize = false;

if (typeof Map === 'function') {
  try {
    var size = Object.getOwnPropertyDescriptor(Map.prototype, 'size').get;
    getSize = typeof size.call(new Map()) === 'number' && size;
    isObjectLike = getSize && require('is-object-like-x');
  } catch (ignore) {}
}

/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else false`.
 * @example
 * var isMap = require('is-map-x');
 * var m = new Map();
 *
 * isMap([]); // false
 * isMap(true); // false
 * isMap(m); // true
 */
module.exports = function isMap(object) {
  if (getSize === false || isObjectLike(object) === false) {
    return false;
  }

  try {
    return typeof getSize.call(object) === 'number';
  } catch (ignore) {}

  return false;
};
