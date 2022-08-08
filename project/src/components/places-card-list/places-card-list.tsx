import { memo } from 'react';
import { Offer } from '../../types/offer';
import { getSortedOffers } from '../../utils/sort';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  offers: Offer[]
  activeSortItem?: string
  placeCardClassName: string
  handleNeighbourhoodFavoriteClick?: (offer: Offer) => void
  getActiveCard?: ((offer: Offer | undefined) => void) | undefined
}

function PlacesCardList({ offers, activeSortItem, placeCardClassName, handleNeighbourhoodFavoriteClick, getActiveCard }: PlacesCardListProps): JSX.Element {

  const currentOffers = activeSortItem ? getSortedOffers(offers, activeSortItem) : offers;

  return (
    <>
      {currentOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} handleNeighbourhoodFavoriteClick={handleNeighbourhoodFavoriteClick} getActiveCard={getActiveCard} placeCardClassName={placeCardClassName} />)}
    </>
  );
}

export default memo(PlacesCardList);

