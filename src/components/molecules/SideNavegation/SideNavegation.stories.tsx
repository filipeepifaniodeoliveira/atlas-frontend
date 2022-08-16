import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SideNavegation } from './index';

const sideNavProps = {
  sideMenu: [
    {
      name: 'Comunidade',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'Vocacional',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'Fundadores',
      alt: 'string',
      href: 'string',
    },
    {
      name: 'Blog',
      alt: 'string',
      href: 'string',
    },
  ],
};

export default {
  title: 'Global/SideNavegation',
  component: SideNavegation,
} as ComponentMeta<typeof SideNavegation>;

export const sideNavegation = (): JSX.Element => (
  <SideNavegation sideMenu={sideNavProps.sideMenu} />
);
