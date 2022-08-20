import { memo } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  offers: Offer[]
  pageType: string
  setActiveCard?: ((offer: Offer | undefined) => void) | undefined
}

function PlacesCardList({ offers, pageType, setActiveCard }: PlacesCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType} />)}
    </>
  );
}

export default memo(PlacesCardList);

