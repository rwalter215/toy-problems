function autograde(report) {
  const input = report.split('\n');
  const averages = [];
  const resultObj = {};
  let temp;
  let sum = 0;
  let avg;

  for (let i = 0; i < input.length; i++) {
    sum = 0;
    temp = input[i].split(' ');

    for (let j = 1; j < temp.length; j++) {
      sum += Number(temp[j]);
    }

    avg = sum / (temp.length - 1);
    averages.push(avg);
    resultObj[temp[0]] = Number(avg.toFixed(1));
  }

  sum = averages.reduce((total, item) => total += item, 0);
  resultObj.all = Number((sum / averages.length).toFixed(2));

  return resultObj;
}

autograde('Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18');
