import * as React from 'react';
import cn from 'classnames';
import { Advantage } from '../advantage';
import { ADVANTAGES_LIST } from './advantages-constants';
import './advantages-styles.scss';

interface Advantages {
  title: string;
  description: string;
}

const blockName = 'advantages';

export const Advantages = (props: Advantages) => (
  <div className={cn(blockName)}>
    <h2
      className={cn(
        `${blockName}__title`,
        {
          [`${blockName}__title--bottomPadded`]: props.description,
        },
      )}
    >
      {props.title}
    </h2>
    <p className={cn(`${blockName}__description`)}>{props.description}</p>
    <div className={cn(`${blockName}__block`)}>
      {
        ADVANTAGES_LIST.map((el) => <Advantage title={el.title} description={el.description} imageUrl={el.imageUrl} />)
      }
    </div>
  </div>
);
