import { Link } from 'react-router-dom';
import PlacesCardList from '../places-card-list/places-card-list';
import { AppRoute } from '../../const/enums';
import { Offer } from '../../types/offer';
import { PageType } from '../../const/enums';

type FavoriteLocationScreenProps = {
  offers: Offer[]
  city: string
}

export default function FavoriteLocation({ offers, city }: FavoriteLocationScreenProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlacesCardList offers={offers} pageType={PageType.Favorite} />
      </div>
    </li>
  );
}
