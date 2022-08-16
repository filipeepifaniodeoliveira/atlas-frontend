import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons/faPrayingHands';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { Cards } from './index';

const mockConfig = {
  cards: [
    {
      icon: faCross,
      text: 'Orações Comuns',
      link: 'string',
      class: 'blue',
    },
    {
      icon: faPrayingHands,
      text: 'Orações do Cenáculo',
      link: 'string',
      class: 'yellow',
    },
    {
      icon: faChurch,
      text: 'Santos Protetores',
      link: 'string',
      class: 'green',
    },
    {
      icon: faPray,
      text: 'Novenas de Nossos Baluartes',
      link: 'string',
      class: 'greenNeon',
    },
    {
      icon: faHandHoldingMedical,
      text: 'Pedidos de Oração',
      link: 'string',
      class: 'pink',
    },
    {
      icon: faInfoCircle,
      text: 'Sobre Nós',
      link: 'string',
      class: 'orange',
    },
  ],
};

export default {
  title: 'Global/Cards',
  component: Cards,
} as ComponentMeta<typeof Cards>;

export const cardsW = (): JSX.Element => <Cards cards={mockConfig.cards} />;
