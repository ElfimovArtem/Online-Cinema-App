import * as React from 'react';
import cn from 'classnames';
import defaultHeaderImage from '../../assets/header-background.jpg';
import './header-styles.scss';

interface HeaderPropTypes {
  title: string;
  description: string;
  imgURL?: string;
  fullSize?: boolean;
}
export const Header = (props: HeaderPropTypes) => (
  <div className={cn('header', { 'header--fullsize': props.fullSize })}>
    <img className={cn('header__background')} src={props.imgURL || defaultHeaderImage} alt={props.title} />
    <div className={cn('header__shadow')} />
    <h1 className={cn('header__title')}>{props.title}</h1>
    <p className={cn('header__description')}>{props.description}</p>
  </div>
);
