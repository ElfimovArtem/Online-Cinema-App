import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './movies-actions';
import { Movies } from './movies';

interface MoviesInterface {
  title: string;
  fetchMovies: () => {};
}

export class MoviesComponent extends React.Component<MoviesInterface> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return <Movies title={this.props.title} />;
  }
}

const mapDispatchToProps = {
  fetchMovies,
};

export const MoviesController = connect(null, mapDispatchToProps)(MoviesComponent);
