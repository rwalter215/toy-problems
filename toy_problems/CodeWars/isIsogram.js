// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  if (str === '') { return true; } // if input is an empty string, it is an isogram
  let currentLetter;
  const strArray = str.split(''); // splitting the string into an array

  while (strArray.length > 0) { // while array's length is greater than 0, run following code
    currentLetter = strArray.pop().toLowerCase(); // pop off value of array
    for (let i = 0; i < strArray.length; i++) { // iterate through remainder of array
      if (currentLetter === strArray[i].toLowerCase()) {
        return false; // return false if match found
      }
    }
  }
  return true; // return true if compare all letters in string and no matches are found
}
