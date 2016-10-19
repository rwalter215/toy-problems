// sort an array using insertionSort

function insertionSort(array) {
  const sortArray = []; // create an empty array that we will add values to and return
  sortArray.push(array[0]); // add the first value of the input array to our sorted array

  // 2 for loops, 1 to iterate through the input array,
  // 1 to find a value's place in the sorted array
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j <= sortArray.length; j++) {
      // if we reach the end of the sortArray, push value to the end of it
      if (j === sortArray.length) {
        sortArray.push(array[i]);
        break;
      }
      // if we find right place for value, insert into sortArray
      if (array[i] < sortArray[j]) {
        if (j === 0) sortArray.unshift(array[i]);
        else sortArray.splice(j, 0, array[i]);
        break;
      }
    }
  }
  return sortArray; // return sorted array
}

insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
