import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const/enums';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const selectCity = createAction<string>('main/selectCity');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const updateOffers = createAction<Offer>('main/updateOffers');

export const updateFavoriteOffers = createAction<Offer>('favorite/updateFavoriteOffers');

export const updateNearbyOffers = createAction<Offer>('room/updateNearbyOffers');

export const updateCurrentOffer = createAction<Offer>('room/updateCurrentOffer');

export const updateComments = createAction<Review[]>('room/updateComments');
