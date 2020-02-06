import * as React from 'react';
import cn from 'classnames';
import './header-styles.scss';

interface HeaderPropTypes {
  title: string;
  description: string;
  fullSize?: boolean;
}
export const Header = (props: HeaderPropTypes) => (
  <div className={cn('header', { 'header--fullsize': props.fullSize })}>
    <div className={cn('header__shadow')} />
    <h1 className={cn('header__title')}>{props.title}</h1>
    <p className={cn('header__description')}>{props.description}</p>
  </div>
);
