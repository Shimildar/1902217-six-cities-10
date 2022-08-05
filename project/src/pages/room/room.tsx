import Header from '../../components/header/header';
import PlacesCardList from '../../components/places-card-list/places-card-list';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/rewiew-form/review-form';
import Map from '../../components/map/map';
import { APIRoute, AppRoute, AuthorizationStatus, PlaceCardClassName } from '../../const/enums';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../store';
import { convertRating } from '../../utils/common';
import RoomImage from '../../components/room-image/room-image';
import Goods from '../../components/goods/goods';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Review } from '../../types/review';
import { setError } from '../../store/action';

export default function Room(): JSX.Element {
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [neighbourhoodOffers, setNeighbourhoodOffers] = useState<Offer[]>([]);
  const [comments, setComments] = useState<Review[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;

  let offersForMap;

  const getOffer = async () => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      setOffer(data);
    } catch (error) {
      navigate(AppRoute.NotFoundScreen);
    }
  };

  const getNeighbourhoodOffers = async () => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      setNeighbourhoodOffers(data);
    } catch (error) {
      dispatch(setError('Can not find nearby offers'));
    }
  };

  const getComments = async () => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      setComments(data);
    } catch (error) {
      dispatch(setError('Can not find comments'));
    }
  };

  if (offer === null || offer?.id !== Number(id)) {
    getOffer();
    getNeighbourhoodOffers();
    getComments();
  }

  if (offer !== null) {
    offersForMap = neighbourhoodOffers.slice(0, 3).concat(offer);
  }

  return (
    <div className="page">
      <Header />.

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer?.images.slice(0, 6).map((img) =>
                  <RoomImage key={img} imageUrl={img} alt={offer.type} />
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer?.isPremium &&
                <div className="property__mark"><span>Premium</span></div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button className={`property__bookmark-button ${offer?.isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${offer ? convertRating(offer.rating) : '0'}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer ? offer?.type.charAt(0).toUpperCase() + offer?.type.slice(1) : ''}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer?.goods.map((item) => <Goods key={item} goods={item} />)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  {offer?.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={comments} />
                {
                  isAuth && <ReviewForm setComments={setComments} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {
              offersForMap && offer ?
                <Map offers={offersForMap} activeCard={offer} city={offersForMap[0].city} /> : ''
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                neighbourhoodOffers ?
                  <PlacesCardList offers={neighbourhoodOffers} placeCardClassName={PlaceCardClassName.Main} /> : ''
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
