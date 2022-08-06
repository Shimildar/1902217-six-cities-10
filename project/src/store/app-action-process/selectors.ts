import { NameSpace } from '../../const/enums';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.AppAction].city;
