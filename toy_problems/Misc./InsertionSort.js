function insertionSort(array) {
  const sortArray = [];
  sortArray.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j <= sortArray.length; j++) {
      if (j === sortArray.length) {
        sortArray.push(array[i]);
        break;
      }
      if (array[i] < sortArray[j]) {
        if (j === 0) sortArray.unshift(array[i]);
        else sortArray.splice(j, 0, array[i]);
        break;
      }
    }
  }
  return sortArray;
}

insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
