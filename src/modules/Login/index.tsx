import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';
import * as S from './styles';
import { LoginForm } from '@components/molecules/LoginForm';
import { faChurch } from '@fortawesome/free-solid-svg-icons/faChurch';
import { faCross } from '@fortawesome/free-solid-svg-icons/faCross';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons/faPrayingHands';

export const Login = (): JSX.Element => {
  const { t } = useTranslation('common');

  const mockConfig = {
    cards: [
      {
        icon: faPrayingHands,
        text: 'O Cenáculo',
        title: 'Cenáculo',
        link: 'string',
        class: 'blue',
      },
      {
        icon: faCross,
        text: 'Orações Comuns',
        title: 'Orações',
        link: 'string',
        class: 'yellow',
      },
      {
        icon: faChurch,
        text: 'Nossos Baluartes',
        title: 'Baluartes',
        link: 'string',
        class: 'green',
      },
    ],
    card: {
      icon: faPrayingHands,
      text: 'Seja Braço Forte',
      link: 'string',
      classe: 'blue',
    },
  };

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <S.ContainerForm>
        <LoginForm />
      </S.ContainerForm>
    </S.Container>
  );
};
