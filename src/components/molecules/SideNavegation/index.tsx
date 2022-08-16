import React from 'react';
import NextLink from 'next/link';

import * as S from './styles';

interface ItensProps {
  sideMenu: Array<MenusProps>;
}

interface MenusProps {
  name: string;
  alt: string;
  href: string;
}

export const SideNavegation = (itens: ItensProps): JSX.Element => {
  return (
    <>
      <S.Container>
        {itens &&
          itens?.sideMenu.map((item, index) => (
            <S.Item key={index}>
              <NextLink href={item.href}>
                <S.ItemLink>{item.name}</S.ItemLink>
              </NextLink>
            </S.Item>
          ))}
      </S.Container>
    </>
  );
};
