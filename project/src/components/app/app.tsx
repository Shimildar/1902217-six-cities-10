import Main from '../../pages/main.tsx/main';

type AppPlaceCountProps = {
  placeCount: number;
}

function App({ placeCount }: AppPlaceCountProps): JSX.Element {
  return <Main placeCount={placeCount} />;
}

export default App;
