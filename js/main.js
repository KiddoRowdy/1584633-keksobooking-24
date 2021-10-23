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

const PHOTOS_PATH = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';

const PHOTOS = [
  'duonguyen-8LrGtIxxa4w.jpg',
  'brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'claire-rendall-b6kAwr1i0Iw.jpg',
];


const ADVERTISMENT_COUNT = 3;

const FEATURES_FROM = 1;

const FEATURES_TO = 6;

const PHOTOS_FROM = 1;

const PHOTOS_TO = 3;

const LOCATION_LAT_FROM = 35.65000;

const LOCATION_LAT_TO = 35.70000;

const LOCATION_LNG_FROM = 139.70000;

const LOCATION_LNG_TO = 139.80000;

const PRICE_FROM = 0;

const PRICE_TO = 100000;

const ROOMS_FROM = 0;

const ROOMS_TO = 100;

const GUESTS_FROM = 0;

const GUESTS_TO = 100;

const getRandomNumber = (from, to, numberOfSigns) => {
  if ( from < 0 || to <= from) {
    throw new Error('Некорректный диапазон чисел');
  }
  const calculation = (Math.random() * (to - from) + from).toFixed(numberOfSigns);

  return Number(calculation);
};

function getString(someString) {

  return `${PHOTOS_PATH}${someString}`;
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


const createAdvertisement = () => {
  const featuresLength = getRandomNumber(FEATURES_FROM, FEATURES_TO, 0);
  const photosLength = getRandomNumber(PHOTOS_FROM, PHOTOS_TO, 0);
  const locationLat = getRandomNumber(LOCATION_LAT_FROM, LOCATION_LAT_TO, 5);
  const locationLng = getRandomNumber(LOCATION_LNG_FROM, LOCATION_LNG_TO, 5);

  return {
    author: {
      avatar: `img/avatars/user${AVATAR_NUMBER.shift()}.png`,
    },
    offer: {
      title: getRandomNumber(0, TITLES.length - 1),
      address: String(`${locationLat}, ${ locationLng}`),
      price: getRandomNumber(PRICE_FROM, PRICE_TO, 0),
      type: getRandomNumber(0, TYPES.length - 1),
      rooms: getRandomNumber(ROOMS_FROM, ROOMS_TO, 0),
      guests: getRandomNumber(GUESTS_FROM, GUESTS_TO, 0),
      checkin: getRandomNumber(0, CHECKIN.length - 1),
      checkout: getRandomNumber(0, CHECKOUT.length - 1),
      features: getArrayRandomLengthUnique(FEATURES, featuresLength),
      description: getRandomNumber(0, DESCRIPTIONS.length - 1),
      photos: getArrayRandomLengthElement(getString(PHOTOS), photosLength),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const allAdvertisment = Array.from({length:ADVERTISMENT_COUNT}, createAdvertisement);

allAdvertisment();
