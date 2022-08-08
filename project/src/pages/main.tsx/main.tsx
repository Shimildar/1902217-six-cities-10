import { PlaceCardClassName, SortType } from '../../const/enums';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortList from '../../components/sort-list/sort-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import { useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { selectCity } from '../../store/action';
import { getOffers } from '../../store/data-process/selectors';
import { getCity } from '../../store/app-action-process/selectors';
import MainEmpty from '../../components/main-empty/main-empty';

export default function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [activeSortItem, setActiveSortItem] = useState<string>(SortType.Popular);

  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCity);

  const setCity = useCallback((cityItem: string) => dispatch(selectCity(cityItem)), [dispatch]);

  const currentOffers = useMemo(() => offers.filter((offer) => offer.city.name === city), [offers, city]);

  const isEmpty = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CityList selectedCity={city} setCity={setCity} />
        <div className="cities">
          {
            isEmpty ?
              <MainEmpty city={city} /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <SortList activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} />
                  <div className="cities__places-list places__list tabs__content">
                    <PlacesCardList offers={currentOffers} activeSortItem={activeSortItem} getActiveCard={setActiveCard} placeCardClassName={PlaceCardClassName.Main} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      {
                        currentOffers[0]?.city &&
                        <Map offers={currentOffers} activeCard={activeCard} city={currentOffers[0].city} />
                      }
                    </section>
                  </div>
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
}
