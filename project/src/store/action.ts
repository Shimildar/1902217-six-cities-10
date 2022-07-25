import { createAction } from '@reduxjs/toolkit';

export const selectCity = createAction('main/selectCity', (city) => ({
  payload: city
}));

