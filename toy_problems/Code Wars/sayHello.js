// Write a function to greet a person.
// Function will take name as input and greet the person by saying hello.
// Return null/nil if input is empty string or null/nil.

function greet(name) {
  let result;
  if (name === '' || name === null) {
    result = null;
  } else {
    result = 'hello ' + name + '!';
  }
  return result;
}

greet('Ryan'); // => 'hello Ryan!'
