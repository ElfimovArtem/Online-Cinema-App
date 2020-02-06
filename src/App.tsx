import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { MoviePage } from './pages/movie-page';
import { store } from './redux';
import { history } from './history';

export const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          component={MainPage}
          path="/"
          exact
        />
        <Route
          component={MoviePage}
          path="/movies/:movieName"
          exact
        />
      </Switch>
    </Router>
  </Provider>
);
