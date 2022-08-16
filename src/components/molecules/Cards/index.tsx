import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { Icon } from '../../atoms/Icon';
import * as S from './styles';

interface CardProps {
  icon: any;
  text?: string;
  link?: string;
  class?: string;
}

interface CardsProps {
  cards: Array<CardProps>;
}

export const Cards = ({ cards }: CardsProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Cards>
          {cards.map((item, index) => (
            <S.Card className={item.class} key={index}>
              <S.CardIcon>
                <Icon icon={item.icon} color="white" />
              </S.CardIcon>
              <S.CardExit>
                <Icon icon={faClock} color="white" />
              </S.CardExit>
              <S.Title>{item.text}</S.Title>
              <S.Paragraph>Apply Now</S.Paragraph>
            </S.Card>
          ))}
        </S.Cards>
      </S.Container>
    </>
  );
};
