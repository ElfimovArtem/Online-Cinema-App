import * as React from 'react';
import { Header } from '../../components/header';
import { Movies } from '../../modules/movies';
import { Advantages } from '../../components/advantages';
import { Footer } from '../../components/footer';

export const MainPage = () => (
  <div>
    <Header
      title="Онлайн кинотеатр"
      description="Смотрите где угодно: кино и сериалы в отличном качестве, без рекламы, на любом устройстве."
      fullSize
    />
    <Movies
      title="Подборка лучших боевиков"
    />
    <Advantages
      title="Our advantages"
      description="Everyday we work hard to make life of our clients better and happier"
    />
    <Footer
      description="© 2019 ООО «onlinecinema.ru»"
    />
  </div>
);
