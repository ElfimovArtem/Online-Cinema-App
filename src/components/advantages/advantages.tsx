import * as React from 'react';
import cn from 'classnames';
import { Advantage } from '../advantage';
import { ADVANTAGES_LIST } from './advantages-constants';
import './advantages-styles.scss';

interface Advantages {
  title: string;
  description: string;
}

export const Advantages = (props: Advantages) => (
  <div className={cn('advantages')}>
    <h2 className={cn('advantages__title')}>{props.title}</h2>
    <p className={cn('advantages__description')}>{props.description}</p>
    <div className={cn('advantages__block')}>
      {ADVANTAGES_LIST.map((el) => <Advantage title={el.title} description={el.description} imageUrl={el.imageUrl} />)}
    </div>
  </div>
);
