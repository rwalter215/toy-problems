function lookAndSay(n) {
  let lookString = '1';

  for (let j = 0; j < n - 1; j++) {
    lookString = next(lookString)
  }

  function next(string) {
    let result = '';
    let num = string[0];
    let freq = 0;

    for (let i = 0; i <= string.length; i++) {
      if (num === string[i]) {
        freq += 1;
      } else {
        result = result.concat(String(freq) + String(num));
        num = string[i];
        freq = 1;
      }
    }
    return result;
  }
  return lookString;
}

lookAndSay(4); // => "1211"
