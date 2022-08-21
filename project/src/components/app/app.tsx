import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/enums';
import Main from '../../pages/main.tsx/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesPrivateRoute from '../favorites-private-route/favorites-private-route';
import LoginPrivateRoute from '../login-private-route/private-route-login';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOffersLoadingData } from '../../store/data-process/selectors';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(getOffersLoadingData);

  if (isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <LoginPrivateRoute authorizationStatus={authorizationStatus}>
              <Login />
            </LoginPrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <FavoritesPrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </ FavoritesPrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room />}
        />
        <Route
          path={AppRoute.NotFoundScreen}
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

