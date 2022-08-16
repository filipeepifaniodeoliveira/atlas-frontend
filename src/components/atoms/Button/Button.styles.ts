import styled from 'styled-components';

const ButtonStyles = styled.button`
  background-color: ${props => props.theme.colors.natural.type3};
  border: ${props => props.theme.colors.natural.type1};
  border-radius: 10px;
  color: ${props => props.theme.colors.natural.type2};
  font-size: 12px;
  font-weight: ${props => props.theme.fontsWeight.medium};
  overflow: hidden;
  position: relative;
  padding: 12px 56px;
  transition: all 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: radial-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    );
    opacity: 0;
    border-radius: 50%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    /* animation: ripple 0.5s ease-out; */
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }

    20% {
      transform: scale(25, 25);
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }
`;

export default ButtonStyles;
