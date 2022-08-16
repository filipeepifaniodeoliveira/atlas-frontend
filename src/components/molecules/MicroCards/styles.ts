import styled from 'styled-components';

export const Container = styled.div`
  padding: 8rem 2rem;
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Screen larger than 900px? 3 columns */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .yellow {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.yellow3}, ${props.theme.colors.alternative.yellow1})`};
    /* background: ${props =>
      `radial-gradient(${props.theme.colors.alternative.yellow1}, ${props.theme.colors.alternative.yellow3})`}; */
  }

  .pink {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.pink2}, ${props.theme.colors.alternative.pink1})`};
  }

  .blue {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.blue1}, ${props.theme.colors.alternative.blue3})`};
  }

  .green {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.primary.greenPrimary}, ${props.theme.colors.alternative.green3})`};
  }

  .greenNeon {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.green1}, ${props.theme.colors.suport.type1})`};
  }

  .orange {
    background-image: ${props =>
      `linear-gradient(to right, ${props.theme.colors.alternative.orange1}, ${props.theme.colors.alternative.orange2})`};
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

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .card__link,
  .card__exit,
  .card__icon {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.natural.type2};
  }
`;

export const Title = styled.h2`
  grid-row: 3/4;
  font-size: ${props => props.theme.fontsSizes.xs};
  font-weight: ${props => props.theme.fontsWeight.medium};
  color: ${props => props.theme.colors.natural.type1};
`;

export const Paragraph = styled.p`
  grid-row: 4/5;
  align-self: center;
  color: ${props => props.theme.colors.natural.type2};
  font-weight: ${props => props.theme.fontsWeight.medium};
`;

export const CardIcon = styled.p`
  grid-row: 2/3;
  font-size: 30px;
`;

export const CardExit = styled.p`
  grid-row: 1/2;
  justify-self: end;
`;
