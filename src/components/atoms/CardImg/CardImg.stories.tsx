import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { CardImg } from './index';

export default {
  title: 'Global/CardImg',
  component: CardImg,
} as ComponentMeta<typeof CardImg>;

export const cardImg = (): JSX.Element => <CardImg />;
