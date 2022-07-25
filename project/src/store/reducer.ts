import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from './action';
import { offers } from '../mocks/offers';
import { CityType } from '../const/enums';

const initialCityState = {
  city: CityType.Paris,
  offers: offers
};

const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    });
});

export { reducer };
