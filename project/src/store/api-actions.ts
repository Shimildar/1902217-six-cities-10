import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setOffersLoadedStatus } from './action';
import { Offer } from '../types/offer';
import { APIRoute } from '../const/enums';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setOffersLoadedStatus(false));
  }
);