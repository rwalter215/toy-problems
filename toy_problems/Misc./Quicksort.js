function quickSort(arr) {
  const array = arr.slice();

  function quickie(sortingArray) {
    const part1 = [];
    const part2 = [];
    // pick a pivot
    const pivotIndex = Math.floor(sortingArray.length / 2);
    if (sortingArray.length === 1 || sortingArray.length === 0) {
      return sortingArray;
    }
    // iterate through sortingArray
    for (let i = 0; i < sortingArray.length; i++) {
      // compare each element to pivot
      // elems < go to 1st partition, elems > go to 2nd
      if (sortingArray[i] < sortingArray[pivotIndex] && i !== pivotIndex) {
        part1.push(sortingArray[i]);
      } else if (i !== pivotIndex) {
        part2.push(sortingArray[i]);
      }
    }

    // call function on the 2 partitions
    // join 1st partiiton, with pivot and 2nd partition, return
    // part1.push(sortingArray[pivotIndex])

    return quickie(part1).concat(sortingArray[pivotIndex], quickie(part2));
  }

  return quickie(array);
  // return result;
}

quickSort([9, 1, 8, 3, 7, 4, 6, 5]); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
