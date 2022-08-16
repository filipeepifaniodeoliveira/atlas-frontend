import React from 'react';
import NextLink from 'next/link';
import { Icon } from '../../atoms/Icon';
import * as S from './styles';

interface CardProps {
  icon: any;
  href: string;
  name: string;
}

export const IconCard = ({ icon, href, name }: CardProps): JSX.Element => {
  return (
    <NextLink href={href}>
      <S.Container>
        <S.ItemIcon>
          <Icon icon={icon} color={'#4F94CD'} />
        </S.ItemIcon>
        <S.Name>{name}</S.Name>
      </S.Container>
    </NextLink>
  );
};
