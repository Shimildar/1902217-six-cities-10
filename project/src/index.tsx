import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { checkAuthAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ErrorMessage />
    <App />
  </Provider>
);

