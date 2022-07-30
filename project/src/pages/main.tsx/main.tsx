import { PlaceCardClassName, SortType } from '../../const/enums';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortList from '../../components/sort-list/sort-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/index';
import { getSortedOffers } from '../../utils/sort';

export default function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [activeSortItem, setActiveSortItem] = useState<string>(SortType.Popular);
  const city = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city.name === city);
  const sortedOffers = getSortedOffers(currentOffers, activeSortItem);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <SortList activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} />
              <div className="cities__places-list places__list tabs__content">
                <PlacesCardList offers={sortedOffers} getActiveCard={setActiveCard} placeCardClassName={PlaceCardClassName.Main} />
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
        </div>
      </main>
    </div>
  );
}
