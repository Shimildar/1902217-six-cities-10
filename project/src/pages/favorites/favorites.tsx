import Header from '../../components/header/header';
import FavoriteLocation from '../../components/favorite-location/favorite-location';
import { AppRoute, CityType } from '../../const/enums';
import { getOffersByCity } from '../../utils/common';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import { useEffect, useState } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

export default function Favorites(): JSX.Element {
  const [isFavoritesLoaded, setFavoritesLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const sortedFavoriteCards = getOffersByCity(favoriteOffers);
  const isEmpty = favoriteOffers.length === 0;

  useEffect(() => {
    if (isFavoritesLoaded) {
      return;
    }
    dispatch(fetchFavoriteOffersAction());
    setFavoritesLoaded(true);
  }, [dispatch, isFavoritesLoaded]
  );

  return (
    <div className="page">
      <Header count={favoriteOffers.length} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{isEmpty ? 'There are no saved listing' : 'Saved listing'}</h1>
            <ul className="favorites__list">
              {!isEmpty && Array.from(Object.values(CityType)).map((city) => sortedFavoriteCards[city].length !== 0 ? <FavoriteLocation key={city} offers={sortedFavoriteCards[city]} city={city} /> : '')}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
