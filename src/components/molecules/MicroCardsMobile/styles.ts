import styled from 'styled-components';

export const Container = styled.div`
  padding: 8rem 1rem 4rem 1rem;
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: auto 20px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  margin: 20px;
  padding: 20px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
