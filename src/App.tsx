import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { MainPage } from './pages/main-page';

export const App: React.FC = () => (
  <Provider store={store}>
    <div className="app">
      <MainPage />
    </div>
  </Provider>
);
