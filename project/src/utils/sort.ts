import { SortType } from '../const/enums';
import { Offer } from '../types/offer';

const getWeightForNull = (itemA: number, itemB: number) => {
  if (itemA === null && itemB === null) {
    return 0;
  }

  if (itemA === null) {
    return 1;
  }

  if (itemB === null) {
    return -1;
  }

  return null;
};

const sortHighToLow = (offerA: Offer, offerB: Offer) => {
  const weight = getWeightForNull(offerA.price, offerB.price);

  return weight ?? offerB.price - offerA.price;
};

const sortLowToHigh = (offerA: Offer, offerB: Offer) => {
  const weight = getWeightForNull(offerA.price, offerB.price);

  return weight ?? offerA.price - offerB.price;
};

const sortByTopRated = (offerA: Offer, offerB: Offer) => {
  const weight = getWeightForNull(offerA.rating, offerB.rating);

  return weight ?? offerB.rating - offerA.rating;
};

const getSortedOffers = (offers: Offer[], sortType: string) => {
  let sortedOffers;
  switch (sortType) {
    case SortType.LowToHigh:
      sortedOffers = offers.sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      sortedOffers = offers.sort(sortHighToLow);
      break;
    case SortType.TopRated:
      sortedOffers = offers.sort(sortByTopRated);
      break;
    default:
      sortedOffers = offers;
  }

  return sortedOffers;
};

export { getSortedOffers };
