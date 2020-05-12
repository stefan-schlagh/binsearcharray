const Binsearcharray = require('./src/BinSearch.js');

const arr = new Binsearcharray();

arr.add(1,'abc');
arr.add(2,'def');

console.log(arr.get(1));