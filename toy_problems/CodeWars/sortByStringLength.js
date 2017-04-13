// Write a function that takes an array of strings as an argument and returns a sorted
// array containing the same strings, ordered from shortest to longest.

function sortByLength(array) {
  if (array.length <= 1) {
    return array;
  }

  const leftArray = array.slice(0, array.length / 2);
  const rightArray = array.slice(array.length / 2);
  const sortedLeft = sortByLength(leftArray);
  const sortedRight = sortByLength(rightArray);

  return merge(sortedLeft, sortedRight)
}

function merge(array1, array2) {
  const result = [];
  let element1;
  let element2;
  let array1Pnt = 0;
  let array2Pnt = 0;
  while (result.length < array1.length + array2.length) {
    element1 = array1[array1Pnt];
    element2 = array2[array2Pnt];
    if (typeof element1 === 'undefined') {
      return result.concat(array2.slice(array2Pnt));
    }

    if (typeof element2 === 'undefined') {
      return result.concat(array1.slice(array1Pnt));
    }

    if (element1.length < element2.length) {
      result.push(array1[array1Pnt++])
    } else {
      result.push(array2[array2Pnt++])
    }
  }
  return result;
}

sortByLength(['Beg', 'Life', 'I', 'To']); // => ['I', 'To', 'Beg', 'Life']
