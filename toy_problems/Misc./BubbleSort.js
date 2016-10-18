function bubbleSort(array) {
  let temp;
  let swap;
  const sortArray = array.slice();

  do {
    swap = false;
    for (let i = 0; i < sortArray.length; i++) {
      if (sortArray[i] > sortArray[i + 1]) {
        temp = sortArray[i];
        sortArray[i] = sortArray[i + 1];
        sortArray[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap === true);
  return sortArray;
}

bubbleSort([3, 1, 9, 5, 7, 2, 4, 8, 6]);
