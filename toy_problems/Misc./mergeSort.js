// sort an array using MergeSort
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return stitch(mergeSort(left), mergeSort(right));
}

function stitch(array1, array2) {
  const result = [];
  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return [...result, ...array1, ...array2];
}

mergeSort([2, 4, 1, 6, 3, 5]); // => [1, 2, 3, 4, 5, 6]
