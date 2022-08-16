import React from 'react';
import * as S from './styles';
import Logo from '../../../../public/images/logo.png';

export const CardImg = (): JSX.Element => {
  return (
    <S.Container img={Logo}>
      <h2>oLÁ</h2>
    </S.Container>
  );
};
