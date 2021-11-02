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

const getArrayRandomLengthUnique = (elements, arrayLength) => {
  let index = 0;
  let dellElements = elements.slice();
  const newElements = [];

  do {
    const newElement = (dellElements[getRandomNumber]);
    newElements.push(newElement);
    const indexElements = dellElements.indexOf(newElement);
    dellElements.splice(indexElements, 1);
    index++;
  } while (index < arrayLength);

  return dellElements = newElements;
};

const getArrayRandomLengthElement = (elements, arrayLength) => {
  let index = 0;
  let dellElements = elements.slice();
  const newElements = [];

  do {
    const newElement = (dellElements[getRandomNumber]);
    newElements.push(newElement);
    index++;
  } while (index < arrayLength);

  return dellElements = newElements;
};

export {getRandomNumber, getArrayRandomLengthUnique, getArrayRandomLengthElement, getRandomString};
