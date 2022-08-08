import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { DataProcess } from '../../types/state';
import { replaceOffer } from '../../utils/common';
import { updateOffers } from '../action';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isOffersLoaded: false,
  favoriteOffers: [],
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoaded = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(updateOffers, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers = [...state.favoriteOffers, action.payload];
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }
        state.offers = replaceOffer(state.offers, action.payload);
      });
  }
});
