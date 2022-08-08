import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const/enums';
import { Offer } from '../types/offer';

export const selectCity = createAction<string>('main/selectCity');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const updateOffers = createAction<Offer>('main/updateOffers');
