// reverse and return an array in place (space complexity of O(1))

const reverseArrayInPlace = array => {
  var index = 0;
  var temp;

  function replaceEndOfArray(array) {
    if(index === array.length - 1) {
      return;
    }
    temp = array.pop();
    array.splice(index, 0, temp)
    index++;
    return replaceEndOfArray(array)
  }
  replaceEndOfArray(array)
  return array
};
