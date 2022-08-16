import '../src/assets/fonts.css';

import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

import lightTheme from '../src/styles/themes/light';
import GlobalStyle from '../src/styles/global';

import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={lightTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    </I18nextProvider>
  ),
];
