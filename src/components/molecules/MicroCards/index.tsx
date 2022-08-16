import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { Icon } from '../../atoms/Icon';
import * as S from './styles';

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

export const CardsMicro = ({ cards }: CardsProps): JSX.Element => {
  return (
    <S.Container>
      <S.Cards>
        {cards.map((item, index) => (
          <div key={index}>
            <S.Card className={item.class}>
              <S.CardIcon>
                <Icon icon={item.icon} color="white" />
              </S.CardIcon>
              <S.CardExit>
                <Icon icon={faClock} color="white" />
              </S.CardExit>
              <S.Title>{item.text}</S.Title>
              <S.Paragraph>Saiba Mais</S.Paragraph>
            </S.Card>
          </div>
        ))}
      </S.Cards>
    </S.Container>
  );
};
