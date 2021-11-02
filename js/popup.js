import {allAdvertisment, FEATURES} from './advertisment.js';

const blockMap = document.querySelector('.map');
// Блок для вставки копируемых элементов
const similarElement = blockMap.querySelector('#map-canvas');
// Шаблон, который мы копируем
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdvertisment = allAdvertisment;

similarAdvertisment.forEach((offerResult) => {
  // Копирую шаблон
  const advertismentElement = similarCardTemplate.cloneNode(true);
  // Части объявления
  advertismentElement.querySelector('.popup__title').textContent = offerResult.offer.title;
  advertismentElement.querySelector('.popup__text--address').textContent = offerResult.offer.adress;
  advertismentElement.querySelector('.popup__text--price').textContent = offerResult.offer.price;
  advertismentElement.querySelector('.popup__type').textContent = offerResult.offer.type;
  advertismentElement.querySelector('.popup__text--capacity').textContent = `${offerResult.offer.rooms} комнаты для ${offerResult.offer.guests} гостей`;
  advertismentElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerResult.offer.checkin}, выезд до ${offerResult.offer.checkout}`;
  advertismentElement.querySelector('.popup__features').textContent = offerResult.offer.features;
  advertismentElement.querySelector('.popup__description').textContent = offerResult.offer.description;
  advertismentElement.querySelector('.popup__photos').textContent = offerResult.offer.photos;
  advertismentElement.querySelector('.popup__avatar').src = offerResult.author.avatar;
  similarElement.appendChild(advertismentElement);
});

const featuresContainer = document.querySelector('.popup__features');
const featureList = featuresContainer.querySelectorAll('.popup__feature');

featureList.forEach((featureListItem) => {
  //Проверяю каждый пункт ul на существование модификатора
  // isNecessary - нужен ли пункт списка
  const isNecessary = FEATURES.some(
    (popupFeature) => featureListItem.classList.contains(`popup__feature--${ popupFeature}`),
  );
    //если не нашел ни одного модификатора, пункт удаляется
  if (!isNecessary) {
    featureListItem.remove();
  }
});

export {similarAdvertisment, featureList};
