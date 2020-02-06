import * as React from 'react';
import cn from 'classnames';
import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/default-movie-poster.jpg';
import './movie-styles.scss';

interface Movie {
  title: string;
  imgUrl?: string;
  description: string;
}

export const Movie = (props: Movie) => (
  <Link to={`movies/${kebabCase(props.title)}`} className={cn('movie')}>
    <div className={cn('movie__image')}>
      <img src={props.imgUrl || defaultImage} alt={props.title} />
      <div className={cn('movie__overlay')}>
        <span className={cn('movie__title')}>{props.title}</span>
        <p className={cn('movie__description')}>{props.description}</p>
      </div>
    </div>
  </Link>
);
