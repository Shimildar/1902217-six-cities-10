import dayjs from 'dayjs';
import { Offer } from '../types/offer';
import { CityType } from '../const/enums';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

const convertRating = (value: number) => {
  const rating = Math.round(value);
  let result;

  switch (rating) {
    case 1:
      result = 20;
      break;
    case 2:
      result = 40;
      break;
    case 3:
      result = 60;
      break;
    case 4:
      result = 80;
      break;
    case 5:
      result = 100;
      break;
  }

  return result;
};

const getOffersByCity = (offers: Offer[]) => ({
  [CityType.Paris]: offers.filter((offer) => offer.city.name === CityType.Paris),
  [CityType.Cologne]: offers.filter((offer) => offer.city.name === CityType.Cologne),
  [CityType.Brussels]: offers.filter((offer) => offer.city.name === CityType.Brussels),
  [CityType.Amsterdam]: offers.filter((offer) => offer.city.name === CityType.Amsterdam),
  [CityType.Hamburg]: offers.filter((offer) => offer.city.name === CityType.Hamburg),
  [CityType.Dusseldorf]: offers.filter((offer) => offer.city.name === CityType.Dusseldorf)
});

export { humanizeDate, convertRating, getOffersByCity, getRandomIntInclusive };
