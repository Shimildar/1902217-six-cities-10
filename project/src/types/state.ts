import { store } from '../store/index.js';
import { AuthorizationStatus } from '../const/enums';
import { Offer } from './offer.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  offers: Offer[]
  isOffersLoaded: boolean
};

export type AppActionData = {
  city: string
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
