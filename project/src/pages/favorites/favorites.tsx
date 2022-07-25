import Header from '../../components/header/header';
import FavoriteLocation from '../../components/favorite-location/favorite-location';
import { AppRoute, CityType } from '../../const/enums';
import { getOffersByCity } from '../../utils/common';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';

export default function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite);
  const sortedFavoriteCards = getOffersByCity(favoriteOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(Object.values(CityType)).map((city) => sortedFavoriteCards[city].length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards[city]} city={city} /> : '')}
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
