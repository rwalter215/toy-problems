function gps(s, x) {
  if (x.length <= 1) { return 0; }
  const distanceArray = x;
  const speedsArray = [];
  let deltaDist, avgSpeed, result;

  for (let i = 0; i < distanceArray.length - 1; i++) {
    deltaDist = distanceArray[i + 1] - distanceArray[i];
    avgSpeed = calcHourlySpeed(deltaDist, s);
    speedsArray.push(avgSpeed);
  }

  result = Math.max(...speedsArray);
  result = Math.floor(result);
  return result;

  function calcHourlySpeed(deltaDistance, deltaSpeed) {
    const hourlySpeed = (3600 * deltaDistance) / deltaSpeed;
    return hourlySpeed;
  }
}

gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]); // => 74
