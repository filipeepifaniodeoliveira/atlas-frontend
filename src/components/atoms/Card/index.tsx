import React from 'react';
import { Icon } from '../../atoms/Icon';
import * as S from './styles';

interface CardsProps {
  icon: any;
  text?: string;
  link?: string;
  classe: string;
}

export const Card = ({ classe, icon, text, link }: CardsProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Card className={`${classe}`}>
          <S.CardIcon>
            <Icon icon={icon} color="white" />
          </S.CardIcon>
          <S.Title>{text}</S.Title>
          <S.Paragraph>
            Neste tempo tão difícil que estamos vivendo, ajude a Comunidade Obra
            de Maria, a manter suas Obras Sociais e as diversas atividades de
            evangelização que promove. Seja um doador, qualquer contribuição
            será de grande valia para a continuidade desta Obra.
          </S.Paragraph>
        </S.Card>
      </S.Container>
    </>
  );
};
