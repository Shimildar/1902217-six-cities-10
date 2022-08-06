import { NameSpace, AuthorizationStatus } from '../../const/enums';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
