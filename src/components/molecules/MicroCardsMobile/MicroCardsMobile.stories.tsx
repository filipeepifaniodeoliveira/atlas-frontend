import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons/faPrayingHands';
import { faPray } from '@fortawesome/free-solid-svg-icons/faPray';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faChild } from '@fortawesome/free-solid-svg-icons/faChild';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons/faPeopleCarry';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons/faBookMedical';

import { CardsMicroMobile } from './index';

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
      icon: faPeopleCarry,
      text: 'Pedidos de Oração',
      title: 'Comunidade',
      link: 'string',
      class: 'orange',
    },
    {
      icon: faChild,
      text: 'Nossos Fundadores',
      title: 'Fundadores',
      link: 'string',
      class: 'orange',
    },
    {
      icon: faBookMedical,
      text: 'Formação',
      title: 'Formação',
      link: 'string',
      class: 'orange',
    },
    {
      icon: faInfoCircle,
      text: 'Sobre Nós',
      title: 'Sobre',
      link: 'string',
      class: 'orange',
    },
  ],
};

export default {
  title: 'Global/CardsMicroMobile',
  component: CardsMicroMobile,
} as ComponentMeta<typeof CardsMicroMobile>;

export const cardsMicroMobile = (): JSX.Element => (
  <CardsMicroMobile cards={mockConfig.cards} />
);
