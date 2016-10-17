// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  for (var i = 0; i < array.length; i++) {
    if (!truthTest(array[i])) {
      return false;
    }
  }
  return true;
};
