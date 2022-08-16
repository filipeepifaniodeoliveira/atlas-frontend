import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button';
import InputForm from '../../atoms/InputForm';
import LoginFormStyles, { Title, SubTitle } from './LoginForm.styles';

interface FormsProps {
  errorMessage?: string;
  onSubmit?: any;
}

export const LoginForm = ({
  errorMessage = '',
  onSubmit,
}: FormsProps): JSX.Element => {
  const { handleSubmit, register, setValue } = useForm();

  return (
    <LoginFormStyles>
      <Title>Já sou cliente</Title>
      <SubTitle>Faça login para cadastrar sua nota</SubTitle>
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          id="emailCpf"
          label="E-mail ou CPF*"
          name="emailCpf"
          type="text"
          maxLength={40}
          defaultValue=""
          qa="username"
          onChange={({ target }: any) => setValue('emailCpf', target.value)}
        ></InputForm>
        <InputForm
          id="password"
          name="password"
          label="Senha*"
          type="password"
          maxLength={14}
          defaultValue=""
          qa="password"
        ></InputForm>
        <Button data-qa="btn_signin">Entrar</Button>
      </form>
    </LoginFormStyles>
  );
};
