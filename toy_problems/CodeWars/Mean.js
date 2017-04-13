function mean(lst) {
  const result = [];
  let string = '';
  let total = 0;
  for (let i = 0; i < lst.length; i++) {
    if (isNaN(lst[i])) {
      string += lst[i];
    } else {
      total += Number(lst[i]);
    }
  }
  result[0] = total / 10;
  result[1] = string;
  return result;
}

mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']);
// => [3.6, 'udiwstagwo']
