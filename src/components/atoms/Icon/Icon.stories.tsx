import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { Icon } from './index';

export default {
  title: 'Global/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const icon = (): JSX.Element => <Icon icon={faTwitter} color="red" />;
