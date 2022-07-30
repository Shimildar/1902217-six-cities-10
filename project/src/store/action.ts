import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const loadOffers = createAction<Offer[]>('main/loadOffers');

export const selectCity = createAction<string>('main/selectCity');

export const setOffersLoadedStatus = createAction<boolean>('main/setOffersLoadedStatus');

