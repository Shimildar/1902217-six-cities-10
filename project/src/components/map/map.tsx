import { Offer } from '../../types/offer';
import { defaultCustomIcon, currentCustomIcon } from '../../const/map';
import useMap from '../../hooks/useMap/useMap';
import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';

type MapProps = {
  offers: Offer[]
  activeCard?: Offer | undefined
}

export default function Map({ offers, activeCard }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCard === offer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  });

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}
