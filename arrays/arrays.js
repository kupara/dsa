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
      console.log('Spliced array: ', arr2);

  //5. reverse() reverses the array
      console.log('Reversed array: ', arr2.reverse());

  //6. sort(): sorts an array in order
      arr3 = ['cat', 'dog', 'bat', 'eagle', 'parrot'];
      console.log('Sorting an array of strings: ', arr3.sort());

    // to compare numbers:
      function compare(num1, num2) {
        return num1 - num2;
      }
      var nums = [3,1,2,100,4,200];
      nums.sort(compare);
      console.log('Sorting an array of numbers', nums); // 1,2,3,4,100,200

  // Iterator Functions
  /*
  These functions apply
  a function to each element of an array, either returning a value,
  a set of values, or a new  after applying the function to each element
  of an array*/

  //1. forEach(): takes a function as an argument
  // and applies the called function to each element of an array
    function square(num) {
      console.log(num, num * num);
    }
    arr2.forEach(square);

  //2. The next iterator function, every(), applies a Boolean function to an
  // array and returns
  // true if the function can return true for every element in the array.

    function isEven(num) {
      return num % 2 == 0;
    }
    var even = arr2.every(isEven);
    console.log('Are all numbers in arr2 even? :' + even);

  //3. The next iterator function, some(), applies a Boolean function to an
  // array and returns
  // true if the function can return true for at least 1 element in the array.
    var even = arr2.some(isEven);
    console.log('Is there at least one even number in arr2? :' + even);

  //4. The reduce() function applies a function to an accumulator and the
  // successive elements
  // of an array until the end of the array is reached, yielding a single value
    function add(runningTotal, currentValue) {
      return runningTotal + currentValue;
    }
    var nums = [1,2,3,4,5,6,7,8,9,10];
    var sum = nums.reduce(add);
    console.log(sum); // displays 55

    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
      return a.concat(b);
    }, []);
    console.log('Flattened array: ', flattened);
    // flattened is [0, 1, 2, 3, 4, 5]

  //5. The map() function works like the forEach() function, applying a function
  //to each element of an array
    function curve(grade) {
      return grade += 5;
    }
    var grades = [77, 65, 81, 92, 83];
    var newgrades = grades.map(curve);
    console.log('After applying map function: ', newgrades); // 82, 70, 86, 97, 88

  //6. The filter() function works similarly to every(), but instead of returning true if all
  // the elements of an array satisfy a Boolean function, the function returns a new
  // array consisting of those elements that satisfy the Boolean function
    var even = arr2.filter(isEven);
    console.log('Even numbers in arr2 : ' + even);
