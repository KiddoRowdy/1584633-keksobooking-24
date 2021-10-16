function getRandomNumber(from, to, numberOfSigns) {
  if ( from < 0 || to <= from) {
    throw new Error('Некорректный диапазон чисел');
  }
  const calculation = (Math.random() * (to - from) + from).toFixed(numberOfSigns);

  return Number(calculation);
}

getRandomNumber(10, 100.89, 3);

const AVATAR_NUMBER = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const TITLES = [
  'Чудесная квартира с видом на Дон',
  'Апартаменты на берегу Красного моря',
  'Бунгало в Карелии',
  'Многокомнатный пентхаус в центре Нью-Йорка',
  'Уютное гнездышко в Санкт-Петербурге',
  'Замок Графа Дракулы',
  'Хостел Психбольница',
  'Плохой отель',
  'Загородный дом Правда и последствия',
  'От заката до рассвета',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Центр города, все достопримечательности в шаговой доступности',
  'Свежий воздух, тихо, лес и озеро',
  'Вид во двор, ничего интересного, зато дешевле',
  'Нет окон, нет вида, есть кровать и душ',
  '5 кроватей, общая кухня, есть стиральная машина и душ',
  '2 команты, дажкузи на балконе, сауна в душе, собственная кухня',
  'Два шага и вы в горах!',
  'Вид на город, телевизор, кофемашина, wi-fi',
  'Уединенное место с видом на океан',
  'На это кровати спал сам Фредди Меркури',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const ADVERTISMENT_COUNT = 3;

const getRandomPositiveInteger = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (from, to, numberOfSigns = 1) => {
  const lower = Math.min(Math.abs(from), Math.abs(to));
  const upper = Math.max(Math.abs(from), Math.abs(to));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(numberOfSigns);
};

const getRandomArrayElement = (elements) =>
  elements[_.random(0, elements.length - 1)];

const getArrayRandomLengthUnique = (elements, arrayLength) => {
  let index = 0;
  let dellElements = elements.slice();
  const newElements = [];
  do {
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
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
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
    newElements.push(newElement);
    index++;
  } while (index < arrayLength);
  return dellElements = newElements;
};


const createAdvertisement = () => {
  const featuresLength = getRandomPositiveInteger(1, 6);
  const photosLength = getRandomPositiveInteger(1, 3);
  const locationLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const locationLng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user${AVATAR_NUMBER.shift()}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: String(`${locationLat}, ${ locationLng}`),
      price: getRandomPositiveInteger(0, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(0, 100),
      guests: getRandomPositiveInteger(0, 100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getArrayRandomLengthUnique(FEATURES, featuresLength),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArrayRandomLengthElement(PHOTOS, photosLength),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const allAdvertisment = Array.from({length:ADVERTISMENT_COUNT}, createAdvertisement);

allAdvertisment();
