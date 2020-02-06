import * as React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import './footer-styles.scss';


interface FooterPropTypes {
  description: string;
}

export const Footer = (props: FooterPropTypes) => (
  <div className={cn('footer')}>
    <div className={cn('footer__wrapper')}>
      <div>
        <a className={cn('footer__social-link')} href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className={cn('footer__social-link')} href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className={cn('footer__social-link')} href="https://vk.com">
          <FontAwesomeIcon icon={faVk} />
        </a>
        <a className={cn('footer__social-link')} href="https://youtube.com">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <a className={cn('footer__description-link')} href="http://localhost:3000/">
        {props.description}
      </a>
    </div>
  </div>
);
