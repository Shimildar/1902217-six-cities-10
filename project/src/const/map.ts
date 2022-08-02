import { Icon } from 'leaflet';

const instanceLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const layerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
});

export { defaultCustomIcon, currentCustomIcon, instanceLayer, layerAttribution };
