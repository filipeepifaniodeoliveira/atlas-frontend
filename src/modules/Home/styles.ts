import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
`;

export const ContainerMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  @media (max-width: 601px) {
    display: none;
  }
`;
