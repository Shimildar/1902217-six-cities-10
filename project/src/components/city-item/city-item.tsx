type CityItemProps = {
  city: string
  selectedCity: string
  setCity: (city: string) => void
}

export default function CityItem({ selectedCity, city, setCity }: CityItemProps): JSX.Element {

  return (
    <li className="locations__item" key={city}>
      <div
        style={{ 'cursor': 'pointer' }}
        className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
        onClick={() => setCity(city)}
      >
        <span>{city}</span>
      </div>
    </li>
  );
}

