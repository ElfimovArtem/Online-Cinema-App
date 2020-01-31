import * as React from 'react';
import cn from 'classnames';
import defaultImage from '../../assets/default-movie-poster.jpg';
import './movie-styles.scss';

interface Movie {
  title: string;
  imgUrl?: string;
}

export const Movie = (props: Movie) => (
  <div className={cn('movie')}>
    <div className={cn('movie__image')}>
      <img src={props.imgUrl || defaultImage} alt="" />
    </div>
    <span className={cn('movie__title')}>{props.title}</span>
  </div>
);
