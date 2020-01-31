import * as React from 'react';
import cn from 'classnames';
import './advantage-style.scss';

interface Advantage {
  title: string;
  description: string;
  imageUrl: string;
}

export const Advantage = (props: Advantage) => (
  <div className={cn('advantage')}>
    <div className={cn('advantage__icon')}>
      <img src={props.imageUrl} alt={props.title} className={cn('advantage__icon-image')} />
    </div>
    <h3 className={cn('advantage__title')}>{props.title}</h3>
    <p className={cn('advantage__description')}>{props.description}</p>
  </div>
);
