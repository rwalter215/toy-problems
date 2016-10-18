// flatten a nested array into a flat (1D) array
const flatten = arrays => {
  var result = [];
    for (var i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        result = result.concat(flatten(arrays[i]));
      } else {
        result.push(arrays[i])
      }
    }
  return result;
};
