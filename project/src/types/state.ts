import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const/enums';
import { Offer } from './offer.js';
import { Review } from './review.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  currentOffer: Offer | undefined
  offers: Offer[] | undefined
  favoriteOffers: Offer[]
  nearbyOffers: Offer[]
  comments: Review[]
  loadedState: {
    isCurrentOfferLoading: boolean
    isOffersLoading: boolean
    isOffersLoaded: boolean
    isFavoritesLoaded: boolean
    isNearbyLoaded: boolean
  };
};

export type AppActionData = {
  city: string
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
