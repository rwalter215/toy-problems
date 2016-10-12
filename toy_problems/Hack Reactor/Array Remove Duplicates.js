'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  var values = [];
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if(!values.includes(array[i])) {
      values.push(array[i]);
      result.push(array[i]);
    }
  }
  return result;
};
