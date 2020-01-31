import * as React from 'react';
import cn from 'classnames';
import { Movie } from '../../components/movie';
import './movies-styles.scss';


export const Movies = () => (
  <div className={cn('movies')}>
    <Movie title="Iron Man" />
    <Movie title="Iron Man" />
    <Movie title="Iron Man" />
    <Movie title="Iron Man" />
    <Movie title="Iron Man" />
    <Movie title="Iron Man" />
  </div>
);
