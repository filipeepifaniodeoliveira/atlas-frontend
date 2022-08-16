import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { Card } from './index';

const card = {
  icon: faCross,
  text: 'Seja Braço Forte',
  link: 'string',
  classe: 'blue',
};

export default {
  title: 'Atom/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const cardsW = (): JSX.Element => (
  <Card
    icon={card.icon}
    text={card.text}
    link={card.link}
    classe={card.classe}
  />
);
