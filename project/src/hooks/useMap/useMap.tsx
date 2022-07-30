import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { instanceLayer, layerAttribution } from '../../const/map';
import { Map, TileLayer, LatLng } from 'leaflet';
import { City } from '../../types/offer';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const { latitude, longitude, zoom } = city.location;
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom,
        scrollWheelZoom: false
      });

      const layer = new TileLayer(
        instanceLayer,
        {
          attribution:
            layerAttribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.panTo(new LatLng(latitude, longitude), {
        animate: true,
        duration: 0.4
      });
    }
  }, [mapRef, city, map, latitude, longitude, zoom]);

  return map;
}
