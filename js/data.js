const getRandomNumber = (from, to, numberOfSigns) => {
  if ( from < 0 || to <= from) {
    throw new Error('Некорректный диапазон чисел');
  }
  const calculation = (Math.random() * (to - from) + from).toFixed(numberOfSigns);

  return Number(calculation);
};

function getRandomString(element) {
  const someString = Math.floor(Math.random() * element.length);
  return element[someString];
}

function getRandomArray(element) {
  const maxLength = element.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = element[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

function checkHouseType(element) {
  if (element === 'flat') {
    return 'Квартира';
  }
  if (element === 'bungalow') {
    return 'Бунгало';
  }
  if (element === 'palace') {
    return 'Дворец';
  }
  if (element === 'house') {
    return 'Дом';
  }
  if (element === 'hotel') {
    return 'Отель';
  }
};

export {getRandomNumber, getRandomString, getRandomArray, checkHouseType};
