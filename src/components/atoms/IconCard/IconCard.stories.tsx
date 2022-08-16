import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { IconCard } from './index';
import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';

const cardProps = {
  name: 'Comunidade',
  icon: faChurch,
  href: 'string',
};

export default {
  title: 'Global/IconCard',
  component: IconCard,
} as ComponentMeta<typeof IconCard>;

export const iconCard = (): JSX.Element => (
  <IconCard icon={cardProps.icon} href={cardProps.href} name={cardProps.name} />
);
