import { NameSpace } from '../../const/enums';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';


export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffersLoadedData = (state: State): boolean => state[NameSpace.Data].isOffersLoaded;
