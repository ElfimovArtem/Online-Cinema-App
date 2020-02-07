import * as React from 'react';
import cn from 'classnames';
import { Redirect } from 'react-router-dom';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { MovieElement } from '../../modules/movies';
import './movie-page-styles.scss';

export interface MoviesPagePropTypes {
  currentMovie: MovieElement | undefined,
}

export const MoviePage = ({ currentMovie }: MoviesPagePropTypes) => (
  currentMovie ? (
    <div>
      <Header
        imgURL={currentMovie.images[0]}
        title={currentMovie.name}
        description={currentMovie.tags.join(', ')}
        fullSize
      />
      <div className={cn('movie-page-wrapper')}>
        <h2 className={cn('movie-page-wrapper__title')}>
          Описание
        </h2>
        <p className={cn('movie-page-wrapper__description')}>
          {currentMovie.description}
        </p>
      </div>
      <Footer
        description="© 2019 ООО «onlinecinema.ru»"
      />
    </div>
  ) : (<Redirect to="/" />)
);
