import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';

type LoginPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function LoginPrivateRoute({ authorizationStatus, children }: LoginPrivateRouteProps): JSX.Element {

  return (
    authorizationStatus !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
