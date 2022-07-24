import { PlaceCardClassName, CityType } from '../../const/enums';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type MainScreenProps = {
  placeCount: number;
  offers: Offer[]
}

export default function Main({ placeCount, offers }: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);

  const sortedByCityOffers = {
    PARIS: offers.filter((card) => card.city.name === CityType.Paris),
    COLOGNE: offers.filter((card) => card.city.name === CityType.Cologne),
    BRUSSELS: offers.filter((card) => card.city.name === CityType.Brussels),
    AMSTERDAM: offers.filter((card) => card.city.name === CityType.Amsterdam),
    HAMBURG: offers.filter((card) => card.city.name === CityType.Hamburg),
    DUSSELDORF: offers.filter((card) => card.city.name === CityType.Dusseldorf)
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="#todo">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlacesCardList offers={offers} getActiveCard={setActiveCard} placeCardClassName={PlaceCardClassName.Main} />
              </div>
            </section>
            <div className="cities__right-section">
              <div className="cities__right-section">
                <section className="cities__map map"><Map offers={sortedByCityOffers.AMSTERDAM} activeCard={activeCard} /></section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
