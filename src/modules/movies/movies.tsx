import * as React from 'react';
import cn from 'classnames';
import { Movie } from '../../components/movie';
import './movies-styles.scss';

export const Movies = ({ title }: { title: string }) => (
  <div className={cn('movies')}>
    <h2 className={cn('movies__title')}>{title}</h2>
    <div className={cn('movies__container')}>
      <Movie title="Iron Man" />
      <Movie title="Iron Man" />
      <Movie title="Iron Man" />
      <Movie title="Iron Man" />
      <Movie title="Iron Man" />
      <Movie title="Iron Man" />
    </div>
  </div>
);
