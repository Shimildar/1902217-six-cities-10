import { createSlice } from '@reduxjs/toolkit';
import { CityType, NameSpace } from '../../const/enums';
import { AppActionData } from '../../types/state';
import { selectCity } from '../action';

const initialState: AppActionData = {
  city: CityType.Paris,
};

export const appAction = createSlice({
  name: NameSpace.AppAction,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(selectCity, (state, action) => {
        state.city = action.payload;
      });
  }
});
