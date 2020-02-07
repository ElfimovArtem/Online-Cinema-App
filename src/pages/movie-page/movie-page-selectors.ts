import { createSelector } from 'reselect';
import { match as Match } from 'react-router';
import { kebabCase } from 'lodash';
import { ApplicationState } from '../../redux/application-state';
import { getMoviesList, MovieElement } from '../../modules/movies';

export const getCurrentMovie = createSelector(
  (_: ApplicationState, { match }: { match: Match<{ movieName: string }> }) => match,
  getMoviesList,
  (
    match: Match<{ movieName: string }>,
    moviesList: MovieElement[],
  ): MovieElement | undefined => moviesList.find((movie) => kebabCase(movie.name) === match.params.movieName),
);
