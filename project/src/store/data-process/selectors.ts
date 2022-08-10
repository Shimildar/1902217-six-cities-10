import { NameSpace } from '../../const/enums';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';


export const getOffer = (state: State): Offer => state[NameSpace.Data].currentOffer as Offer;
export const getOfferLoadedData = (state: State): boolean => state[NameSpace.Data].loadedState.isCurrentOfferLoading;
export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers as Offer[];
export const getOffersLoadingData = (state: State): boolean => state[NameSpace.Data].loadedState.isOffersLoading;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getComments = (state: State): Review[] => state[NameSpace.Data].comments;

