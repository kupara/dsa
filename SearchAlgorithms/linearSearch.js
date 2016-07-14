/*
1. Assign the first element of the array to a variable as the minimum value.
2. Begin looping through the array, starting with the second element, comparing each
element with the current minimum value.
3. If the current element has a lesser value than the current minimum value, assign
the current element as the new minimum value.
4. Move to the next element and repeat step 3.
5. The minimum value is stored in the variable when the program ends.
*/

function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
