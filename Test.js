const Binsearcharray = require('./src/BinSearch.js');

const arr = new Binsearcharray();

arr.add(1,'foo');
arr.add(2,'bar');
arr.add(3,'abc');

console.log(arr);

arr.remove(3);

console.log(arr);

console.log(arr.get(1));