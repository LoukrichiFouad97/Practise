function howManySeconds(hours) {
  let hoursToMinutes = hours * 60;
  let minutesToSes = hoursToMinutes * 60;
  return minutesToSes;

}

console.log(howManySeconds(2));
