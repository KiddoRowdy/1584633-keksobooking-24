import {allAdvertisment, FEATURES, featuresLength, photosElements} from './advertisment.js';
import {getRandomArray} from './data.js';

const blockMap = document.querySelector('.map');
// Блок для вставки копируемых элементов
const similarElement = blockMap.querySelector('#map-canvas');
// Шаблон, который мы копируем
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const offerResult = allAdvertisment;

const getPopupElement = (offer) => {
  // Копирую шаблон
  const advertismentElement = similarCardTemplate.cloneNode(true);
  const featuresContainer = advertismentElement.querySelector('.popup__features');
  const featureList = featuresContainer.querySelectorAll('.popup__feature');
  const features = getRandomArray(FEATURES, featuresLength);
  const photoContainer = advertismentElement.querySelector('.popup__photos');
  // Части объявления
  advertismentElement.querySelector('.popup__title').textContent = offer.offer.title;
  advertismentElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  advertismentElement.querySelector('.popup__text--price').textContent = offer.offer.price;
  advertismentElement.querySelector('.popup__type').textContent = offer.offer.type;
  advertismentElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  advertismentElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  //advertismentElement.querySelector('.popup__features').textContent = offerResult.offer.features;
  advertismentElement.querySelector('.popup__description').textContent = offer.offer.description;
  //advertismentElement.querySelector('.popup__photo').src = offerResult.offer.photos;
  advertismentElement.querySelector('.popup__avatar').src = offer.author.avatar;

  featureList.forEach((featureListItem) => {
    //Проверяю каждый пункт ul на существование модификатора
    // isNecessary - нужен ли пункт списка
    const isNecessary = features.some(
      (popupFeature) => featureListItem.classList.contains(`popup__feature--${popupFeature}`),
    );
    //если не нашел ни одного модификатора, пункт удаляется
    if (!isNecessary) {
      featureListItem.remove();
    }
  });

  photoContainer.innerHTML = '';

  photosElements.forEach((popupPhoto) => {
    const photoListItem = `<img src="${popupPhoto}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    photoContainer.insertAdjacentHTML('beforeend', photoListItem);
  });

  //console.log(offer);

  return advertismentElement;
};

const createPopupELement = getPopupElement(offerResult[0]);

//console.log(getPopupElement(offerResult));

similarElement.appendChild(createPopupELement);


/*
photoList.forEach((photoListItem) => {
  //Проверяю каждый пункт ul на существование модификатора
  // isNecessary - нужен ли пункт списка
  const isNecessary = PHOTOS.some(
    (popupPhoto) => photoListItem.classList.contains(`popup__photo${ popupPhoto}`),
  );
    //если не нашел ни одного модификатора, пункт удаляется
  if (!isNecessary) {
    photoListItem.remove();
  }
});
*/

/*
// Шаблон features, который копирую
const similarFeatures = document.querySelector('.popup').content.querySelector('.popup__features');
const featuresElement = similarFeatures.cloneNode(true);
filterContainer.appendChild(featuresElement);*/
