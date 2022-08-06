import { memo } from 'react';
import { CityType } from '../../const/enums';
import CityItem from '../city-item/city-item';

type CityListProps = {
  selectedCity: string
  setCity: (city: string) => void
}

function CityList({ selectedCity, setCity }: CityListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Array.from(Object.values(CityType)).map((city) => <CityItem key={city} city={city} selectedCity={selectedCity} setCity={setCity} />)}
        </ul>
      </section>
    </div>
  );
}

export default memo(CityList);
