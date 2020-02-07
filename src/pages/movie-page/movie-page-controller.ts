import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { match as Match } from 'react-router';
import { MovieElement } from '../../modules/movies';
import { ApplicationState } from '../../redux/application-state';
import { getCurrentMovie } from './movie-page-selectors';
import { MoviePage } from './movie-page';

interface OwnProps {
  match: Match<{ movieName: string }>
}

interface SelectorsResult {
  currentMovie: MovieElement | undefined,
}

const mapStateToProps = createStructuredSelector<ApplicationState, OwnProps, SelectorsResult>({
  currentMovie: getCurrentMovie,
});

export const MoviePageController = connect(mapStateToProps)(MoviePage);
