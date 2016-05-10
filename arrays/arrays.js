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
console.log('Index of 4: ', arr2.indexOf(4));
console.log('Index of 5: ', arr2.indexOf(5));

//2. lastIndexOf(elem): returns the index for the last occur of elem in array.
arr2.push(2);
console.log('1st occurence of 2: position-'+ arr2.indexOf(2) + '\nlast occurence' +
  ' of 2: position-'+ arr2.lastIndexOf(2));

//3. toString() returns the string representation of the array.
// the same effect can be attained by using arr2.join()
console.log('arr2 as a string: ', arr2.toString());

//4. Two arrays can be combined using .concat()
console.log('Array concatenation: ', arr2.concat(arr0));

// Mutator methods

//1. push() adds an element to the array
arr2.push(6);
console.log('Pushing 6: ', arr2);

//2. unshift() add an  element at the beginning of the array
arr2.unshift(0);
console.log('Adding 0: ', arr2);
arr2.unshift(-2, -1); // you can add more than one element at a time
console.log('Adding -2 and -1: ', arr2);

//3. pop() removes the last element from the array
arr2.pop(); //remove 6
console.log('Removing last element: ', arr2);

//3. shift() removes the first element from the array
arr2.shift(); //remove 6
console.log('Removing first element: ', arr2);

//4. splice(start, to_remove.length, to_add) can remove and add elements to an array.
arr2.splice(0, 2, 1, 2); //remove first two and add elements [1, 2]
console.log('Spliced array: ', arr2)
