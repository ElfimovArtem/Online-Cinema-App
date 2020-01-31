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
      <img src={props.imgUrl || defaultImage} alt={props.title} />
      <div className={cn('movie__overlay')}>
        <span className={cn('movie__title')}>{props.title}</span>
        <p className={cn('movie__description')}>{props.title}</p>
      </div>
    </div>
  </div>
);
