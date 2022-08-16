import styled from 'styled-components';

const LoginFormStyles = styled.div`
  padding: 40px;
  width: 500px;

  .loader {
    max-width: 13px;
  }

  p {
    color: ${props => props.theme.colors.natural.colorHighlightLightest};
    font-size: 12px;
    margin-bottom: 50px;

    &:nth-of-type(2) {
      color: ${props => props.theme.colors.natural.colorHighlightLightest};
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  a {
    color: ${props => props.theme.colors.natural.colorHighlightLightest};
    font-size: 12px;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    margin-top: 30px;
    padding: 15px;
    width: 160px;
    font-size: 16px;
    font-weight: 700;
    background-color: ${props =>
      props.theme.colors.primary.colorHighlightLightest};
    color: ${props => props.theme.colors.primary.type4};
    display: block;
    border-radius: 15px;
  }

  input {
    padding: 20px;
    background-color: ${props => props.theme.colors.natural.type4};
    color: ${props => props.theme.colors.natural.type1};
    border-radius: 15px;
    font-size: 14px;
    border: 2px solid ${props => props.theme.colors.primary.type4};
    display: block;
  }

  label {
    color: ${props => props.theme.colors.primary.colorHighlightLightest};
    font-size: 14px;
    font-weight: 700;
  }

  span {
    padding: 10px 0px 30px 0px;
  }
`;

export const AccountLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.primary.colorHighlightLightest};
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 800;
`;

export const SubTitle = styled.h4`
  color: ${props => props.theme.colors.primary.colorHighlightLightest};
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export default LoginFormStyles;
