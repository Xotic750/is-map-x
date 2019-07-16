<a href="https://travis-ci.org/Xotic750/is-map-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-map-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-map-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-map-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-map-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-map-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-map-x" title="npm version">
<img src="https://badge.fury.io/js/is-map-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-map-x"></a>

## is-map-x

Detect whether or not an object is an ES6 Map.

<a name="exp_module_is-map-x--module.exports"></a>

### `module.exports(object)` ⇒ <code>boolean</code> ⏏

Determine if an `object` is a `Map`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the `object` is a `Map`,
else `false`.

| Param  | Type            | Description         |
| ------ | --------------- | ------------------- |
| object | <code>\*</code> | The object to test. |

**Example**

```js
import isMap from 'is-map-x';

const m = new Map();

console.log(isMap([])); // false
console.log(isMap(true)); // false
console.log(isMap(m)); // true
```
