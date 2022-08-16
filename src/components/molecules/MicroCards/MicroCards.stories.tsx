import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons/faPrayingHands';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { CardsMicro } from './index';

const mockConfig = {
  cards: [
    {
      icon: faCross,
      text: 'Orações Comuns',
      title: 'Orações',
      link: 'string',
      class: 'blue',
    },
    {
      icon: faPrayingHands,
      text: 'Orações do Cenáculo',
      title: 'Cenáculo',
      link: 'string',
      class: 'yellow',
    },
    {
      icon: faChurch,
      text: 'Orações do Cenáculo',
      title: 'Baluartes',
      link: 'string',
      class: 'green',
    },
    {
      icon: faPray,
      text: 'Novenas de Nossos Baluartes',
      title: 'Novenas',
      link: 'string',
      class: 'greenNeon',
    },
    {
      icon: faHandHoldingMedical,
      text: 'Pedidos de Oração',
      title: 'Pedidos',
      link: 'string',
      class: 'pink',
    },
    {
      icon: faInfoCircle,
      text: 'Pedidos de Oração',
      title: 'Sobre',
      link: 'string',
      class: 'orange',
    },
  ],
};

export default {
  title: 'Global/CardsMicro',
  component: CardsMicro,
} as ComponentMeta<typeof CardsMicro>;

export const cardsMicro = (): JSX.Element => (
  <CardsMicro cards={mockConfig.cards} />
);
