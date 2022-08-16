import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { HeaderGlobal } from './index';

export default {
  title: 'Global/HeaderGlobal',
  component: HeaderGlobal,
} as ComponentMeta<typeof HeaderGlobal>;

export const headerGlobal = (): JSX.Element => <HeaderGlobal />;
