import * as React from 'react';
import { Header } from '../../components/header';
import { Movies } from '../../modules/movies';

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
  </div>
);
