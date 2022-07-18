import { Offer } from '../../types/offer';
import { PlaceCardClassName, AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type PlaceCardScreenProps = {
  offer: Offer
  setActiveCard: (id: number) => void
  placeCardClassName: string
}

export default function PlaceCard({ offer, setActiveCard, placeCardClassName }: PlaceCardScreenProps): JSX.Element {
  const { id, title, isPremium, isFavorite, previewImage, price, type } = offer;

  return (
    <article id={String(id)} className={`${placeCardClassName}__card place-card`} onMouseOver={() => setActiveCard(id)}>
      {
        isPremium ?
          <div className="place-card__mark"><span>Premium</span></div>
          : null
      }
      <div className={`${placeCardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width={placeCardClassName === PlaceCardClassName.Main ? '260' : '150'} height={placeCardClassName === PlaceCardClassName.Main ? '200' : '110'} alt="Place" />
        </Link>
      </div>
      <div className={`${placeCardClassName === PlaceCardClassName.Favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

