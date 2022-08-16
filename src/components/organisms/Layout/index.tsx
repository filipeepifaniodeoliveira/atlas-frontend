import { ReactNode } from 'react';
import { HeaderGlobal } from '@components/molecules/HeaderGlobal';
import { FooterGlobal } from '@components/molecules/FooterGlobal';
import { SideNavegation } from '@components/molecules/SideNavegation';

import * as S from './styles';

interface LayoutProps {
  children?: ReactNode;
}

const footerProps = {
  footerProps: [
    {
      name: 'Atlas',
      subItens: [
        {
          href: 'comunidade',
          link: 'https://obrademaria.com.br/',
          name: 'Sobre o Atlas',
        },
        {
          href: 'saiba',
          link: 'https://obrademaria.com.br/carisma/',
          name: 'Saiba Mais',
        },
      ],
    },
    {
      name: 'Ntech',
      subItens: [
        {
          href: 'cenaculo',
          link: 'https://obrademaria.com.br/cenaculo/',
          name: 'A NTECH',
        },
        {
          href: 'vocacional',
          link: 'https://obrademaria.com.br/descubra-sua-vocacao/',
          name: 'Sobre Nós',
        },
      ],
    },
    {
      name: 'Localização',
      subItens: [
        {
          href: 'onde-estamos',
          link: 'https://obrademaria.com.br/onde-estamos/',
          name: 'Onde Estamos',
        },
        {
          href: 'Sedes',
          link: 'https://obrademaria.com.br/africa/',
          name: 'Sedes',
        },
      ],
    },
    {
      name: 'Social',
      subItens: [
        {
          href: 'Ações',
          link: 'https://obrademaria.com.br/blog/',
          name: 'Ações',
        },
        {
          href: 'Comunicação',
          link: 'https://obrademaria.com.br/africa/',
          name: 'Comunicação',
        },
      ],
    },
  ],
};

const sideNavProps = {
  sideMenu: [
    {
      name: 'Dashboard',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'Analitics',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'Configurações',
      alt: 'string',
      href: 'string',
    },
  ],
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <S.Container data-testid="loaded-container">
        <HeaderGlobal />
        <SideNavegation sideMenu={sideNavProps.sideMenu} />
        {children}
      </S.Container>
      <FooterGlobal footerProps={footerProps.footerProps} />
    </>
  );
};
