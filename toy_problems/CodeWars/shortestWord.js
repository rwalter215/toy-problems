// return the length of the shortest word in a string

function findShort(s){
  let shortestWord;
  const wordArray = s.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    if (i === 0 || wordArray[i].length < shortestWord.length) {
      shortestWord = wordArray[i];
    }
  }
  return shortestWord.length;
}

findShort('bitcoin take over the world maybe who knows perhaps'); // => 3
