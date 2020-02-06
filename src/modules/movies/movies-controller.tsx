import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Movies, MoviesPropTypes } from './movies';
import { fetchMovies } from './movies-actions';
import { getMoviesList } from './movies-selectors';

interface MoviesControllerPropTypes extends MoviesPropTypes {
  fetchMovies: () => {};
}

export class MoviesComponent extends React.Component<MoviesControllerPropTypes> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return <Movies title={this.props.title} moviesList={this.props.moviesList} />;
  }
}

const mapStateToProps = createStructuredSelector({
  moviesList: getMoviesList,
});

const mapDispatchToProps = {
  fetchMovies,
};

export const MoviesController = connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);
