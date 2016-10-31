// sort an array using MergeSort
function mergeSort(arr) {
  // base case: if subarray of 1, return
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // index of middle of array
  const left = arr.slice(0, middle); // left subarray
  const right = arr.slice(middle); // right subarray

  // return left subarray stiched to right subarray
  return stitch(mergeSort(left), mergeSort(right));
}

// helper function, takes in 2 sorted arrays, returns 1 sorted array
function stitch(array1, array2) {
  const result = []; // result array that will be returned at the end
  while (array1.length && array2.length) { // while input arrays both still have values
    if (array1[0] <= array2[0]) { // if first value of array1 is greater than first value of array2
      result.push(array1.shift()); // push first value of array1 to result
    } else {
      result.push(array2.shift()); // else, push first value of array2 to result
    }
  }
  // return result with the rest of the sorted values concatted on
  return [...result, ...array1, ...array2];
}

mergeSort([2, 4, 1, 6, 3, 5]); // => [1, 2, 3, 4, 5, 6]
