// Use the literal syntax for array creation
const items = [true];


// Use Array#push instead of direct assignment to add items to an array.
items.push('Near');
items.push(1);
console.log(items);

// Use array spreads ... to copy arrays.
const itemsCopy = [...items];
console.log(itemsCopy);

// Use Array.from for converting an array-like object to an array.
const arrLike = {0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr = Array.from(arrLike);
console.log(arr);