import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  max-width: 700px;
  @media (max-width: 601px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  max-width: 600px;
  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};

  border-radius: 15px;
  @media (max-width: 601px) {
    display: none;
  }
`;
