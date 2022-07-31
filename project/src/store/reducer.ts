import { selectCity, loadOffers, setOffersLoadedStatus, requireAuthorization, setError } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityType } from '../const/enums';
import { Offer } from '../types/offer';

type InitialState = {
  city: string
  offers: Offer[]
  isOffersLoaded: boolean
  authorizationStatus: AuthorizationStatus
  error: string | null
}

const initialState: InitialState = {
  city: CityType.Paris,
  offers: [],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersLoadedStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
