import { selectCity, loadOffers, setOffersLoadedStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { CityType } from '../const/enums';
import { Offer } from '../types/offer';

type InitialState = {
  city: string
  offers: Offer[]
  isOffersLoaded: boolean
}

const initialState: InitialState = {
  city: CityType.Paris,
  offers: [],
  isOffersLoaded: false
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
    });
});

export { reducer };
