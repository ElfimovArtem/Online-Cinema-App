import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';

export const App: React.FC = () => (
  <Provider store={store}>
    <div className="app">
      123
    </div>
  </Provider>
);
