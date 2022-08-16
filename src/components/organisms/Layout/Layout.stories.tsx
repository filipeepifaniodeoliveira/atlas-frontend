import { ComponentMeta } from '@storybook/react';
import { Layout } from './index';

export default {
  title: 'Global/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const layout = (): JSX.Element => (
  <Layout>
    <h1>Olá</h1>
  </Layout>
);
