// sort an array using bubbleSort

function bubbleSort(array) {
  let temp; // used to temporarily hold a variable's value
  let swap; // variable(boolean) used to keep track if we have made a swap this iteration
  const sortArray = array.slice();

  do {
    swap = false; // each iteration we set swap to false

    // while continue to make swaps, we iterate through array and see if any values are out of order
    for (let i = 0; i < sortArray.length; i++) {
      // if 2 numbers are out of order, we swap those values,
      // and set swap to true
      if (sortArray[i] > sortArray[i + 1]) {
        temp = sortArray[i];
        sortArray[i] = sortArray[i + 1];
        sortArray[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap === true);
  return sortArray; // return the sorted array
}

bubbleSort([3, 1, 9, 5, 7, 2, 4, 8, 6]);
