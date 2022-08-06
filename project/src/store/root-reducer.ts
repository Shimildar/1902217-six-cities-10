import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/enums';
import { appAction } from './app-action-process/app-astion-process';
import { offersData } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.AppAction]: appAction.reducer,
});
