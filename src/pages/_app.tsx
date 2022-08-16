import React from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import lightTheme from '@styles/themes/light';
import GlobalStyle from '@styles/global';
import { Layout } from '@components/organisms/Layout';
import '../styles/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme as DefaultTheme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
