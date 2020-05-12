# BinSearchArray

a Array which can be used for storing key - value pairs

## Repository
[github](https://github.com/stefan-schlagh/binsearcharray)

## install
```
npm install binsearcharray

```

## require the package
```javascript
const Binsearcharray = require('binsearcharray');
const arr = new Binsearcharray();

```

## adding items
items are always added in key - value pairs
* key should be a number
* value can be any type

```javascript
arr.add(1,'aaa');
arr.add(2,'bbb');

```

## receiving items
### getIndex
this method returns the index of the key in the array
if the key does not exist, it returns -1

```javascript
arr.getIndex(2);

```

### get
this method returns the value of the key in the array
if the key does not exist, it returns undefined

```javascript
arr.get(1);

```

## removing items
the value at this key gets removed

```javascript
arr.remove(1);

```
