import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { DataProcess } from '../../types/state';
import { replaceOffer } from '../../utils/common';
import { updateComments, updateCurrentOffer, updateFavoriteOffers, updateNearbyOffers, updateOffers } from '../action';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  currentOffer: undefined,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  comments: [],
  loadedState: {
    isCurrentOfferLoading: false,
    isOffersLoading: false,
    isOffersLoaded: false,
    isFavoritesLoaded: false,
    isNearbyLoaded: false
  },
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadedState.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loadedState.isOffersLoading = false;
        state.loadedState.isOffersLoaded = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.loadedState.isFavoritesLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.loadedState.isNearbyLoaded = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.loadedState.isCurrentOfferLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.loadedState.isCurrentOfferLoading = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(updateOffers, (state, action) => {
        if (state.offers !== undefined && state.loadedState.isOffersLoaded) {
          state.offers = replaceOffer(state.offers, action.payload);
        }
      })
      .addCase(updateFavoriteOffers, (state, action) => {
        if (state.loadedState.isFavoritesLoaded) {
          if (action.payload.isFavorite === true) {
            state.favoriteOffers = [...state.favoriteOffers, action.payload];
          } else {
            state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
          }
        }
      })
      .addCase(updateNearbyOffers, (state, action) => {
        if (state.loadedState.isNearbyLoaded && state.nearbyOffers.some((item) => item.id === action.payload.id)) {
          state.nearbyOffers = replaceOffer(state.nearbyOffers, action.payload);
        }
      })
      .addCase(updateCurrentOffer, (state, action) => {
        if (state.currentOffer !== undefined && state.currentOffer.id === action.payload.id) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(updateComments, (state, action) => {
        state.comments = action.payload;
      });
  }
});
