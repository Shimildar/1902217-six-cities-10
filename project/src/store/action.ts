import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const/enums';
import { Offer } from '../types/offer';

export const loadOffers = createAction<Offer[]>('main/loadOffers');

export const selectCity = createAction<string>('main/selectCity');

export const setOffersLoadedStatus = createAction<boolean>('main/setOffersLoadedStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setError = createAction<string | null>('main/setError');
