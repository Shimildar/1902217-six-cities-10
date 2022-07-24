import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { urlMarkerDefault, urlMarkerCurrent } from '../../const/map';

type MapProps = {
  offers: Offer[]
  activeCard?: Offer | undefined
}

const defaultCustomIcon = new Icon({
  iconUrl: urlMarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: urlMarkerCurrent,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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
