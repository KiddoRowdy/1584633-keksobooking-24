function getRandomNumber(from, to, numberOfSigns) {
  if ( from < 0 || to <= from) {
    throw new Error('Некорректный диапазон чисел');
  }
  const calculation = (Math.random() * (to - from) + from).toFixed(numberOfSigns);

  return Number(calculation);
}

getRandomNumber(10, 100.89, 3);
