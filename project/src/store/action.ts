import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const/enums';

export const selectCity = createAction<string>('main/selectCity');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
