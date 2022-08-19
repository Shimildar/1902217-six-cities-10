import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';

type FavoritesPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function FavoritesPrivateRoute({ authorizationStatus, children }: FavoritesPrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
