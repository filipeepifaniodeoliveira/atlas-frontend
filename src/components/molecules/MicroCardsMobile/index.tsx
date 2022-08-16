import React from 'react';
import * as S from './styles';
import { IconCard } from '@components/atoms/IconCard';

interface CardProps {
  icon: any;
  text: string;
  title: string;
  link: string;
  class?: string;
}

interface CardsProps {
  cards: Array<CardProps>;
}

export const CardsMicroMobile = ({ cards }: CardsProps): JSX.Element => {
  return (
    <S.Container>
      <S.Cards>
        {cards.map((item, index) => (
          <S.Block key={index}>
            <IconCard icon={item.icon} href={item.link} name={item.title} />
          </S.Block>
        ))}
      </S.Cards>
    </S.Container>
  );
};
