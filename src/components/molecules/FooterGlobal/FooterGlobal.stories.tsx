import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { FooterGlobal } from './index';

const footerProps = {
  footerProps: [
    {
      name: 'Comunidade',
      subItens: [
        {
          href: 'comunidade',
          link: 'https://obrademaria.com.br/',
          name: 'A Comunidade',
        },
        {
          href: 'carisma',
          link: 'https://obrademaria.com.br/carisma/',
          name: 'O Carisma',
        },
      ],
    },
    {
      name: 'Evangelização',
      subItens: [
        {
          href: 'cenaculo',
          link: 'https://obrademaria.com.br/cenaculo/',
          name: 'Cenáculo',
        },
        {
          href: 'vocacional',
          link: 'https://obrademaria.com.br/descubra-sua-vocacao/',
          name: 'Vocacional',
        },
      ],
    },
    {
      name: 'Onde Estamos',
      subItens: [
        {
          href: 'onde-estamos',
          link: 'https://obrademaria.com.br/onde-estamos/',
          name: 'Onde Estamos',
        },
        {
          href: 'África',
          link: 'https://obrademaria.com.br/africa/',
          name: 'África',
        },
      ],
    },
    {
      name: 'Obras Sociais',
      subItens: [
        {
          href: 'Brasil',
          link: 'https://obrademaria.com.br/blog/',
          name: 'Brasil',
        },
        {
          href: 'África',
          link: 'https://obrademaria.com.br/africa/',
          name: 'África',
        },
      ],
    },
  ],
};

export default {
  title: 'Global/FooterGlobal',
  component: FooterGlobal,
} as ComponentMeta<typeof FooterGlobal>;

export const footerGlobal = (): JSX.Element => (
  <FooterGlobal footerProps={footerProps.footerProps} />
);
