import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { DataProcess } from '../../types/state';
import { fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isOffersLoaded: false,
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
      });
  }
});
