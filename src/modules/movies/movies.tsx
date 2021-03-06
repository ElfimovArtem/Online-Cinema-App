import * as React from 'react';
import cn from 'classnames';
import { Movie } from '../../components/movie';
import { MovieElement } from './movies-types';
import './movies-styles.scss';

export interface MoviesPropTypes {
  title: string;
  moviesList?: MovieElement[];
}

export const Movies = ({ title, moviesList }: MoviesPropTypes) => (
  <div className={cn('movies')}>
    <h2 className={cn('movies__title')}>{title}</h2>
    <div className={cn('movies__container')}>
      {
        Array.isArray(moviesList) ? moviesList.map((movie: MovieElement) => (
          <Movie key={movie.id} title={movie.name} description={movie.description} imgUrl={movie.images[0]} />
        )) : (
          <span>Sorry, films not found....</span>
        )
      }
    </div>
  </div>
);
