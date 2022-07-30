import { Offer, City } from '../../types/offer';
import { defaultCustomIcon, currentCustomIcon } from '../../const/map';
import useMap from '../../hooks/useMap/useMap';
import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';

type MapProps = {
  offers: Offer[]
  activeCard?: Offer | undefined
  city: City
}

export default function Map({ offers, activeCard, city }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && activeCard === offer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [offers, activeCard, map]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}
