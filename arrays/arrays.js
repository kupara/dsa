// creating an array
var arr0 = [1, 2];
console.log('Using [] operator: ', arr0); // logs [1, 2]

var arr1 = new Array(3, 4);
console.log('Using a constructor: ', arr1); // logs [3, 4]

var arr2 = new Array(3);
console.log(arr2.length);
console.log('Created with constructor(length): ', arr2); // logs [, , ]
arr2[0] = 5;
console.log(arr2); // logs [5, , ]

// Aggregate array operations
arr1 = [1, 2, 3, 4];
var arr2 = arr1; //assigns a reference of arr1 and whenever arr1 changes arr2 changes too

console.log('New arr2 after arr1 changes: ', arr2);

// Accessor methods
//1. indexOf(elem): checks whether elem is in the array. returns -1 if not found
console.log(arr2.indexOf(4));
console.log(arr2.indexOf(5));

//2. lastIndexOf(elem): returns the index for the last occur of elem in array.
arr2.push(2);
console.log('1st occurence of 2: position-'+ arr2.indexOf(2) + '\nlast occurence' +
  ' of 2: position-'+ arr2.lastIndexOf(2));
