import React from 'react';
import * as S from './styles';

interface FooterProps {
  footerProps: Array<CategoryProps>;
}

interface CategoryProps {
  name: string;
  subItens: Array<SubItensProps>;
}

interface SubItensProps {
  link: string;
  href: string;
  name: string;
}

export const FooterGlobal = ({ footerProps }: FooterProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Footer>
          {footerProps &&
            footerProps.map((item: CategoryProps) => (
              <S.Colunm key={item.name}>
                <S.Title>{item.name}</S.Title>
                <S.List>
                  {item.subItens &&
                    item.subItens.map((subItens: SubItensProps) => (
                      <>
                        <S.Item>{subItens.name}</S.Item>
                      </>
                    ))}
                </S.List>
              </S.Colunm>
            ))}
          <div className="clearfix"></div>
        </S.Footer>
      </S.Container>
      <S.Container>
        <S.FooterMobile>
          <S.TitleMobile>Atlas Finance @copy2022</S.TitleMobile>
        </S.FooterMobile>
      </S.Container>
    </>
  );
};
